import type { APIRoute } from 'astro';

const methodNotAllowed = () =>
  new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), {
    status: 405,
    headers: {
      'Allow': 'POST',
      'Content-Type': 'application/json'
    }
  });

export const GET: APIRoute = () => {
  return methodNotAllowed();
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  // In a real app, we would save to a database or send to a webhook.
  // For now, we'll just log and return a success response.
  console.log('AAR Submission:', Object.fromEntries(data));
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
