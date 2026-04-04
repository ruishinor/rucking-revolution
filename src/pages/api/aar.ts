import type { APIRoute } from 'astro';
import {
  getAarConfiguration,
  validateAarSubmission,
} from '@/lib/aarSubmission';

export const prerender = false;

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_BODY_SIZE = 50 * 1024;

type RateLimitStore = Map<string, number[]>;

declare global {
  // eslint-disable-next-line no-var
  var __aarRateLimitStore: RateLimitStore | undefined;
}

function jsonResponse(status: number, body: Record<string, unknown>, extraHeaders?: Record<string, string>): Response {
  const headers: Record<string, string> = {
    'Allow': 'POST',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    ...extraHeaders,
  };
  return new Response(JSON.stringify(body), { status, headers });
}

function getRequesterKey(request: Request): string {
  const forwardedFor =
    request.headers.get('x-forwarded-for') ??
    request.headers.get('x-real-ip') ??
    request.headers.get('cf-connecting-ip');

  const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';
  const userAgent = request.headers.get('user-agent') || '';
  return `${ip}:${userAgent.substring(0, 64)}`;
}

function isSameOriginRequest(request: Request): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  if (!origin && !referer) {
    return false;
  }

  try {
    const requestOrigin = origin || new URL(referer!).origin;
    return requestOrigin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

function getRateLimitStore(): RateLimitStore {
  globalThis.__aarRateLimitStore ??= new Map<string, number[]>();
  return globalThis.__aarRateLimitStore;
}

function checkRateLimit(requesterKey: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const store = getRateLimitStore();
  const attempts = (store.get(requesterKey) ?? []).filter((timestamp) => timestamp >= windowStart);

  const resetAt = attempts.length > 0 ? attempts[0] + RATE_LIMIT_WINDOW_MS : now + RATE_LIMIT_WINDOW_MS;

  if (attempts.length >= RATE_LIMIT_MAX_REQUESTS) {
    store.set(requesterKey, attempts);
    return { allowed: false, remaining: 0, resetAt };
  }

  attempts.push(now);
  store.set(requesterKey, attempts);
  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - attempts.length, resetAt };
}

async function verifyTurnstileToken(request: Request, token: string): Promise<boolean> {
  const { turnstileSecretKey } = getAarConfiguration();

  if (!turnstileSecretKey || !token) {
    return false;
  }

  if (typeof token !== 'string' || token.length > 2048) {
    return false;
  }

  const verificationBody = new URLSearchParams({
    secret: turnstileSecretKey,
    response: token,
  });

  const requesterKey = getRequesterKey(request);
  const ip = requesterKey.split(':')[0];
  if (ip && ip !== 'unknown') {
    verificationBody.set('remoteip', ip);
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

function sanitizeErrorForClient(error: unknown): string {
  if (error instanceof Error && error.message) {
    const safeMessages = [
      'timeout',
      'network',
      'unavailable',
      'rejected',
    ];
    const msg = error.message.toLowerCase();
    if (safeMessages.some((safe) => msg.includes(safe))) {
      return 'Service unavailable. Please try again later.';
    }
  }
  return 'An unexpected error occurred. Please try again later.';
}

export const GET: APIRoute = () =>
  jsonResponse(405, { success: false, error: 'Method not allowed' });

export const HEAD: APIRoute = () =>
  jsonResponse(405, { success: false, error: 'Method not allowed' });

export const PUT: APIRoute = () =>
  jsonResponse(405, { success: false, error: 'Method not allowed' });

export const DELETE: APIRoute = () =>
  jsonResponse(405, { success: false, error: 'Method not allowed' });

export const PATCH: APIRoute = () =>
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

  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_SIZE) {
    return jsonResponse(413, {
      success: false,
      error: 'Request body too large.',
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
  const rateLimit = checkRateLimit(requesterKey);

  const rateLimitHeaders = {
    'X-RateLimit-Limit': String(RATE_LIMIT_MAX_REQUESTS),
    'X-RateLimit-Remaining': String(rateLimit.remaining),
    'X-RateLimit-Reset': String(Math.ceil(rateLimit.resetAt / 1000)),
  };

  if (!rateLimit.allowed) {
    const retryAfterSeconds = Math.ceil((rateLimit.resetAt - Date.now()) / 1000);
    return jsonResponse(
      429,
      {
        success: false,
        error: 'Too many submissions from this address. Please try again later.',
        retryAfter: retryAfterSeconds,
      },
      {
        ...rateLimitHeaders,
        'Retry-After': String(retryAfterSeconds),
      },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse(400, {
      success: false,
      error: 'Invalid request body.',
    });
  }

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
        'User-Agent': 'RuckingRevolution-AAR/1.0',
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

  return jsonResponse(202, { success: true }, rateLimitHeaders);
};
