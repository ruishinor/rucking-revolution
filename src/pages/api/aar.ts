import type { APIRoute } from 'astro';
import {
  getAarConfiguration,
  validateAarSubmission,
} from '@/lib/aarSubmission';

export const prerender = false;

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitStore = Map<string, number[]>;

declare global {
  // eslint-disable-next-line no-var
  var __aarRateLimitStore: RateLimitStore | undefined;
}

function jsonResponse(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Allow': 'POST',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

function getRequesterKey(request: Request): string {
  const forwardedFor =
    request.headers.get('x-forwarded-for') ??
    request.headers.get('x-real-ip') ??
    request.headers.get('cf-connecting-ip');

  return forwardedFor?.split(',')[0]?.trim() || 'unknown';
}

function isSameOriginRequest(request: Request): boolean {
  const origin = request.headers.get('origin');

  if (!origin) {
    return false;
  }

  return origin === new URL(request.url).origin;
}

function getRateLimitStore(): RateLimitStore {
  globalThis.__aarRateLimitStore ??= new Map<string, number[]>();
  return globalThis.__aarRateLimitStore;
}

function hasCapacity(requesterKey: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const store = getRateLimitStore();
  const attempts = (store.get(requesterKey) ?? []).filter((timestamp) => timestamp >= windowStart);

  if (attempts.length >= RATE_LIMIT_MAX_REQUESTS) {
    store.set(requesterKey, attempts);
    return false;
  }

  attempts.push(now);
  store.set(requesterKey, attempts);
  return true;
}

async function verifyTurnstileToken(request: Request, token: string): Promise<boolean> {
  const { turnstileSecretKey } = getAarConfiguration();

  if (!turnstileSecretKey || !token) {
    return false;
  }

  const verificationBody = new URLSearchParams({
    secret: turnstileSecretKey,
    response: token,
  });

  const requesterKey = getRequesterKey(request);
  if (requesterKey !== 'unknown') {
    verificationBody.set('remoteip', requesterKey);
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: verificationBody,
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) {
    return false;
  }

  const verification = await response.json().catch(() => null);
  if (!verification || verification.success !== true) {
    return false;
  }

  const expectedHostname = new URL(request.url).hostname;
  if (
    typeof verification.hostname === 'string' &&
    verification.hostname.length > 0 &&
    verification.hostname !== expectedHostname
  ) {
    return false;
  }

  return true;
}

export const GET: APIRoute = () =>
  jsonResponse(405, { success: false, error: 'Method not allowed' });

export const POST: APIRoute = async ({ request }) => {
  const aarConfig = getAarConfiguration();

  if (!aarConfig.enabled) {
    return jsonResponse(403, {
      success: false,
      error: 'Public AAR submissions are currently disabled until moderation safeguards are configured.',
    });
  }

  if (!isSameOriginRequest(request)) {
    return jsonResponse(403, {
      success: false,
      error: 'Cross-origin submissions are not allowed.',
    });
  }

  const contentType = request.headers.get('content-type') ?? '';
  const isSupportedContentType =
    contentType.includes('multipart/form-data') ||
    contentType.includes('application/x-www-form-urlencoded');

  if (!isSupportedContentType) {
    return jsonResponse(415, {
      success: false,
      error: 'Unsupported content type.',
    });
  }

  const requesterKey = getRequesterKey(request);
  if (!hasCapacity(requesterKey)) {
    return jsonResponse(429, {
      success: false,
      error: 'Too many submissions from this address. Please try again later.',
    });
  }

  const formData = await request.formData();

  if (String(formData.get(aarConfig.honeypotField) ?? '').trim().length > 0) {
    return jsonResponse(200, { success: true });
  }

  const turnstileToken = String(formData.get('cf-turnstile-response') ?? '').trim();
  try {
    const verified = await verifyTurnstileToken(request, turnstileToken);
    if (!verified) {
      return jsonResponse(403, {
        success: false,
        error: 'Spam verification failed. Please retry the challenge and submit again.',
      });
    }
  } catch {
    return jsonResponse(502, {
      success: false,
      error: 'Spam verification is unavailable. Please try again shortly.',
    });
  }

  const validation = validateAarSubmission(formData);
  if (!validation.success) {
    return jsonResponse(400, validation);
  }

  if (!aarConfig.webhookUrl) {
    return jsonResponse(503, {
      success: false,
      error: 'The AAR submission pipeline is not configured.',
    });
  }

  try {
    const upstreamResponse = await fetch(aarConfig.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validation.data),
      signal: AbortSignal.timeout(5000),
    });

    if (!upstreamResponse.ok) {
      return jsonResponse(502, {
        success: false,
        error: 'The AAR submission service rejected the request.',
      });
    }
  } catch {
    return jsonResponse(502, {
      success: false,
      error: 'The AAR submission service is unavailable.',
    });
  }

  return jsonResponse(202, { success: true });
};
