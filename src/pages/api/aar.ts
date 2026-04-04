import type { APIRoute } from 'astro';
import {
  getAarConfiguration,
  validateAarSubmission,
} from '@/lib/aarSubmission';
import {
  checkRateLimit,
  createRequestId,
  getRequesterKey,
  isSameOriginRequest,
  jsonResponse,
  logApiEvent,
  sanitizeErrorForClient,
  validateWebhookUrl,
} from '@/lib/api-utils';

export const prerender = false;

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_BODY_SIZE = 50 * 1024;

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

const RATE_LIMIT_CONFIG = {
  windowMs: RATE_LIMIT_WINDOW_MS,
  maxRequests: RATE_LIMIT_MAX_REQUESTS,
  storeKey: '__aarRateLimitStore',
};

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
  const requestId = createRequestId();
  const aarConfig = getAarConfiguration();

  if (!aarConfig.enabled) {
    logApiEvent('/api/aar', 'warn', 'AAR disabled', undefined, requestId);
    return jsonResponse(403, {
      success: false,
      error: 'Public AAR submissions are currently disabled until moderation safeguards are configured.',
    });
  }

  if (!isSameOriginRequest(request)) {
    logApiEvent('/api/aar', 'warn', 'Cross-origin request blocked', undefined, requestId);
    return jsonResponse(403, {
      success: false,
      error: 'Cross-origin submissions are not allowed.',
    });
  }

  const requesterKey = `${getRequesterKey(request)}:${(request.headers.get('user-agent') || '').substring(0, 64)}`;
  const rateLimit = checkRateLimit(requesterKey, RATE_LIMIT_CONFIG);

  const rateLimitHeaders = {
    'X-RateLimit-Limit': String(RATE_LIMIT_MAX_REQUESTS),
    'X-RateLimit-Remaining': String(rateLimit.remaining),
    'X-RateLimit-Reset': String(Math.ceil(rateLimit.resetAt / 1000)),
  };

  if (!rateLimit.allowed) {
    const retryAfterSeconds = Math.ceil((rateLimit.resetAt - Date.now()) / 1000);
    logApiEvent('/api/aar', 'warn', 'Rate limit exceeded', { requesterKey }, requestId);
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
    }, rateLimitHeaders);
  }

  if (String(formData.get(aarConfig.honeypotField) ?? '').trim().length > 0) {
    logApiEvent('/api/aar', 'warn', 'Honeypot triggered', { requesterKey }, requestId);
    return jsonResponse(200, { success: true }, rateLimitHeaders);
  }

  const turnstileToken = String(formData.get('cf-turnstile-response') ?? '').trim();
  try {
    const verified = await verifyTurnstileToken(request, turnstileToken);
    if (!verified) {
      logApiEvent('/api/aar', 'warn', 'Turnstile verification failed', { requesterKey }, requestId);
      return jsonResponse(403, {
        success: false,
        error: 'Spam verification failed. Please retry the challenge and submit again.',
      }, rateLimitHeaders);
    }
  } catch {
    return jsonResponse(502, {
      success: false,
      error: 'Spam verification is unavailable. Please try again shortly.',
    }, rateLimitHeaders);
  }

  const validation = validateAarSubmission(formData);
  if (!validation.success) {
    logApiEvent('/api/aar', 'warn', 'Validation failed', { errors: validation.errors }, requestId);
    return jsonResponse(400, validation, rateLimitHeaders);
  }

  if (!aarConfig.webhookUrl) {
    return jsonResponse(503, {
      success: false,
      error: 'The AAR submission pipeline is not configured.',
    }, rateLimitHeaders);
  }

  if (!validateWebhookUrl(aarConfig.webhookUrl)) {
    logApiEvent('/api/aar', 'error', 'Invalid webhook URL', undefined, requestId);
    return jsonResponse(503, {
      success: false,
      error: 'The AAR submission pipeline is misconfigured.',
    }, rateLimitHeaders);
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
      logApiEvent('/api/aar', 'error', 'Webhook rejected request', { status: upstreamResponse.status }, requestId);
      return jsonResponse(502, {
        success: false,
        error: 'The AAR submission service rejected the request.',
      }, rateLimitHeaders);
    }
  } catch (error) {
    logApiEvent('/api/aar', 'error', 'Webhook service unavailable', { error: sanitizeErrorForClient(error) }, requestId);
    return jsonResponse(502, {
      success: false,
      error: 'The AAR submission service is unavailable.',
    }, rateLimitHeaders);
  }

  logApiEvent('/api/aar', 'info', 'Submission successful', { requesterKey }, requestId);
  return jsonResponse(202, { success: true }, rateLimitHeaders);
};
