import type { APIRoute } from 'astro';
import {
  checkRateLimit,
  createRequestId,
  emailPattern,
  getRequesterKey,
  isSameOriginRequest,
  jsonResponse,
  logApiEvent,
  readWithSizeLimit,
  sanitizeErrorForClient,
  validateWebhookUrl,
} from '@/lib/api-utils';

export const prerender = false;

const MAX_BODY_SIZE = 1024;
const MAX_EMAIL_LENGTH = 254;
const MAX_NAME_LENGTH = 100;

async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  const secretKey = process.env.NEWSLETTER_TURNSTILE_SECRET_KEY;

  if (!secretKey || !token || typeof token !== 'string' || token.length > 2048) {
    return false;
  }

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
  
  // Verify success AND that token was issued for our hostname
  if (verification?.success !== true) {
    return false;
  }
  
  // Validate token was issued for our exact hostname
  const expectedHostname = process.env.SITE_DOMAIN || 'ruckingrevolution.com';
  if (verification.hostname !== expectedHostname) {
    return false;
  }
  
  return true;
}

export const GET: APIRoute = () =>
  jsonResponse(405, { success: false, error: 'Method not allowed' });

export const POST: APIRoute = async ({ request }) => {
  const requestId = createRequestId();

  if (!isSameOriginRequest(request)) {
    logApiEvent('/api/newsletter', 'warn', 'Cross-origin request blocked', undefined, requestId);
    return jsonResponse(403, {
      success: false,
      error: 'Cross-origin requests are not allowed.',
    });
  }

  const requesterKey = getRequesterKey(request);
  const rateLimit = checkRateLimit(requesterKey, {
    windowMs: 60 * 60 * 1000,
    maxRequests: 3,
    storeKey: '__newsletterRateLimitStore',
  });

  if (!rateLimit.allowed) {
    logApiEvent('/api/newsletter', 'warn', 'Rate limit exceeded', { requesterKey }, requestId);
    const retryAfter = Math.ceil((rateLimit.resetAt - Date.now()) / 1000);
    return jsonResponse(429, {
      success: false,
      error: 'Too many requests. Please try again later.',
    }, {
      'Retry-After': retryAfter.toString(),
      'X-RateLimit-Limit': rateLimit.maxRequests.toString(),
      'X-RateLimit-Remaining': '0',
      'X-RateLimit-Reset': rateLimit.resetAt.toString(),
    });
  }

  let payload: Record<string, unknown>;
  try {
    const rawBody = await readWithSizeLimit(request, MAX_BODY_SIZE);
    if (!rawBody) {
      return jsonResponse(400, { success: false, error: 'Invalid request body.' });
    }
    const contentType = request.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) {
      return jsonResponse(415, { success: false, error: 'Unsupported content type.' });
    }
    payload = JSON.parse(rawBody);
  } catch (err) {
    if (err instanceof Error && err.message.includes('maximum size')) {
      return jsonResponse(413, { success: false, error: 'Request body too large.' });
    }
    return jsonResponse(400, { success: false, error: 'Invalid request body.' });
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return jsonResponse(400, { success: false, error: 'Invalid request body.' });
  }

  // Honeypot check - reject if hidden field is filled
  const honeypot = typeof payload.website === 'string' ? payload.website.trim() : '';
  if (honeypot.length > 0) {
    logApiEvent('/api/newsletter', 'warn', 'Honeypot triggered - bot detected', undefined, requestId);
    // Return fake success to avoid bot detection
    return jsonResponse(200, {
      success: true,
      message: 'Thank you for subscribing!',
    });
  }

  const turnstileToken = typeof payload['cf-turnstile-response'] === 'string' ? payload['cf-turnstile-response'].trim() : '';
  const turnstileEnabled = !!process.env.NEWSLETTER_TURNSTILE_SITE_KEY && !!process.env.NEWSLETTER_TURNSTILE_SECRET_KEY;
  if (turnstileEnabled) {
    try {
      const ip = requesterKey !== 'unknown' ? requesterKey : undefined;
      const verified = await verifyTurnstileToken(turnstileToken, ip);
      if (!verified) {
        logApiEvent('/api/newsletter', 'warn', 'Turnstile verification failed', undefined, requestId);
        return jsonResponse(403, {
          success: false,
          error: 'Spam verification failed. Please retry the challenge.',
        });
      }
    } catch {
      logApiEvent('/api/newsletter', 'error', 'Turnstile verification error', undefined, requestId);
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
  // Sanitize name - remove all HTML tags and strip control characters
  const sanitizedName = name
    .replace(/<[^>]*>/g, '')
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
    .trim();

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

  if (!validateWebhookUrl(webhookUrl)) {
    logApiEvent('/api/newsletter', 'error', 'Invalid webhook URL scheme', undefined, requestId);
    return jsonResponse(500, {
      success: false,
      error: 'Newsletter service is misconfigured.',
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
        name: sanitizedName || undefined,
        interests: interests || ['training', 'community'],
        subscribedAt: new Date().toISOString(),
        source: 'website',
      }),
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      logApiEvent('/api/newsletter', 'error', 'Webhook returned error', { status: response.status }, requestId);
      return jsonResponse(502, {
        success: false,
        error: 'Newsletter service is unavailable. Please try again later.',
      });
    }
  } catch (err) {
    logApiEvent('/api/newsletter', 'error', 'Webhook fetch failed', { error: sanitizeErrorForClient(err) }, requestId);
    return jsonResponse(502, {
      success: false,
      error: sanitizeErrorForClient(err),
    });
  }

  logApiEvent('/api/newsletter', 'info', 'Subscription successful', { email }, requestId);
  return jsonResponse(200, {
    success: true,
    message: 'Thank you for subscribing!',
  });
};
