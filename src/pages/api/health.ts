import type { APIRoute } from 'astro';
import { timingSafeEqual } from 'node:crypto';

export const prerender = false;

function safeCompare(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const enc = new TextEncoder();
  const aBuf = enc.encode(a);
  const bBuf = enc.encode(b);
  if (aBuf.length !== bBuf.length) {
    const dummy = new Uint8Array(aBuf.length);
    return timingSafeEqual(aBuf, dummy) && false;
  }
  return timingSafeEqual(aBuf, bBuf);
}

export const GET: APIRoute = async ({ request }) => {
  const secret = process.env.HEALTH_CHECK_SECRET || '';
  const isInternal = safeCompare(request.headers.get('x-vercel-protection-key') || '', secret)
    || safeCompare(request.headers.get('Authorization') || '', `Bearer ${secret}`);

  if (isInternal) {
    const checks: Record<string, { status: string }> = {
      database: { status: 'skipped' },
      newsletter: { status: process.env.NEWSLETTER_WEBHOOK_URL ? 'configured' : 'disabled' },
      aar: { status: process.env.AAR_SUBMISSIONS_WEBHOOK_URL ? 'configured' : 'disabled' },
      turnstile: { status: (process.env.AAR_TURNSTILE_SITE_KEY && process.env.AAR_TURNSTILE_SECRET_KEY) ? 'configured' : 'disabled' },
    };

    const allOk = Object.values(checks).every((c) => c.status !== 'error');

    return new Response(
      JSON.stringify({
        status: allOk ? 'healthy' : 'degraded',
        timestamp: new Date().toISOString(),
        checks,
      }),
      {
        status: allOk ? 200 : 503,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      },
    );
  }

  return new Response(
    JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=60' },
    },
  );
};
