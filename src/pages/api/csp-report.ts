import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let payload: unknown = null;
    if (contentType.includes('application/json')) {
      payload = await request.json().catch(() => null);
    } else {
      payload = await request.text().catch(() => null);
    }

    console.warn('[CSP REPORT]', JSON.stringify(payload));
    return new Response(null, { status: 204 });
  } catch (err) {
    console.error('[CSP REPORT ERROR]', err);
    return new Response(null, { status: 400 });
  }
};
