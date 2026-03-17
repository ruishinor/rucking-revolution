import type { APIContext } from 'astro';

export async function post({ request }: APIContext) {
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
}