import type { APIRoute } from 'astro';

export const prerender = false;

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const MAX_BODY_SIZE = 1024;
const MAX_EMAIL_LENGTH = 254;
const MAX_NAME_LENGTH = 100;

type RateLimitStore = Map<string, number[]>;

declare global {
  var __newsletterRateLimitStore: RateLimitStore | undefined;
}

function jsonResponse(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Allow': 'POST',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
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

function getRateLimitStore(): RateLimitStore {
  globalThis.__newsletterRateLimitStore ??= new Map<string, number[]>();
  return globalThis.__newsletterRateLimitStore;
}

function checkRateLimit(requesterKey: string): boolean {
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

async function verifyTurnstileToken(request: Request, token: string): Promise<boolean> {
  const secretKey = process.env.NEWSLETTER_TURNSTILE_SECRET_KEY;

  if (!secretKey || !token || typeof token !== 'string' || token.length > 2048) {
    return false;
  }

  const requesterKey = getRequesterKey(request);
  const ip = requesterKey !== 'unknown' ? requesterKey : undefined;

  const verificationBody = new URLSearchParams({
    secret: secretKey,
    response: token,
  });

  if (ip) {
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
  return verification?.success === true;
}

function sanitizeErrorForClient(error: unknown): string {
  if (error instanceof Error && error.message) {
    const safeMessages = ['timeout', 'network', 'unavailable', 'rejected'];
    const msg = error.message.toLowerCase();
    if (safeMessages.some((safe) => msg.includes(safe))) {
      return 'Service unavailable. Please try again later.';
    }
  }
  return 'An unexpected error occurred. Please try again later.';
}

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const GET: APIRoute = () =>
  jsonResponse(405, { success: false, error: 'Method not allowed' });

export const POST: APIRoute = async ({ request }) => {
  if (!isSameOriginRequest(request)) {
    return jsonResponse(403, {
      success: false,
      error: 'Cross-origin requests are not allowed.',
    });
  }

  const requesterKey = getRequesterKey(request);
  if (!checkRateLimit(requesterKey)) {
    return jsonResponse(429, {
      success: false,
      error: 'Too many requests. Please try again later.',
    });
  }

  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_SIZE) {
    return jsonResponse(413, { success: false, error: 'Request body too large.' });
  }

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return jsonResponse(415, { success: false, error: 'Unsupported content type.' });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse(400, { success: false, error: 'Invalid request body.' });
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return jsonResponse(400, { success: false, error: 'Invalid request body.' });
  }

  const turnstileToken = typeof payload['cf-turnstile-response'] === 'string' ? payload['cf-turnstile-response'].trim() : '';
  const turnstileEnabled = !!process.env.NEWSLETTER_TURNSTILE_SITE_KEY && !!process.env.NEWSLETTER_TURNSTILE_SECRET_KEY;
  if (turnstileEnabled) {
    try {
      const verified = await verifyTurnstileToken(request, turnstileToken);
      if (!verified) {
        return jsonResponse(403, {
          success: false,
          error: 'Spam verification failed. Please retry the challenge.',
        });
      }
    } catch {
      return jsonResponse(502, {
        success: false,
        error: 'Spam verification is unavailable. Please try again shortly.',
      });
    }
  }

  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  if (!email || email.length > MAX_EMAIL_LENGTH || !emailPattern.test(email)) {
    return jsonResponse(400, { success: false, error: 'A valid email address is required.' });
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  if (name.length > MAX_NAME_LENGTH) {
    return jsonResponse(400, { success: false, error: 'Name is too long.' });
  }

  const interests = payload.interests;
  if (interests !== undefined) {
    if (!Array.isArray(interests) || interests.length > 10) {
      return jsonResponse(400, { success: false, error: 'Invalid interests.' });
    }
    const validInterests = ['training', 'community', 'leadership', 'products'];
    for (const interest of interests) {
      if (typeof interest !== 'string' || !validInterests.includes(interest)) {
        return jsonResponse(400, { success: false, error: 'Invalid interest value.' });
      }
    }
  }

  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhookUrl) {
    return jsonResponse(200, {
      success: true,
      message: 'Thank you for subscribing! Newsletter integration is not yet configured.',
    });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'RuckingRevolution-Newsletter/1.0',
      },
      body: JSON.stringify({
        email,
        name: name || undefined,
        interests: interests || ['training', 'community'],
        subscribedAt: new Date().toISOString(),
        source: 'website',
      }),
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return jsonResponse(502, {
        success: false,
        error: 'Newsletter service is unavailable. Please try again later.',
      });
    }
  } catch {
    return jsonResponse(502, {
      success: false,
      error: sanitizeErrorForClient(new Error('Newsletter service error')),
    });
  }

  return jsonResponse(200, {
    success: true,
    message: 'Thank you for subscribing!',
  });
};
