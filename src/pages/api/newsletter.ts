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

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const GET: APIRoute = () =>
  jsonResponse(405, { success: false, error: 'Method not allowed' });

export const POST: APIRoute = async ({ request }) => {
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
      error: 'Newsletter service is unavailable. Please try again later.',
    });
  }

  return jsonResponse(200, {
    success: true,
    message: 'Thank you for subscribing!',
  });
};
