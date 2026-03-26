import type { APIRoute } from 'astro';
import { generateWorkout } from '@/components/WorkoutGenerator';

export const prerender = false;

function jsonResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Allow': 'POST',
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json',
    },
  });
}

export const GET: APIRoute = () =>
  jsonResponse(405, { success: false, error: 'Method not allowed' });

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return jsonResponse(415, { success: false, error: 'Unsupported content type.' });
  }

  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== 'object') {
    return jsonResponse(400, { success: false, error: 'Invalid request body.' });
  }

  const difficulty =
    payload.difficulty === 'advanced' || payload.difficulty === 'intermediate'
      ? payload.difficulty
      : 'beginner';

  const rawTimePreference = payload.timePreference;
  const timePreference =
    typeof rawTimePreference === 'number' &&
    Number.isFinite(rawTimePreference) &&
    rawTimePreference >= 30 &&
    rawTimePreference <= 180
      ? rawTimePreference
      : undefined;

  const workout = generateWorkout(difficulty, undefined, timePreference);
  return jsonResponse(200, { success: true, workout });
};
