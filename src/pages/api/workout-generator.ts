import type { APIRoute } from 'astro';
import { generateWorkout } from '@/components/WorkoutGenerator';

export const prerender = false;

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 30;
const MAX_BODY_SIZE = 1024;

type RateLimitStore = Map<string, number[]>;

declare global {
  var __workoutRateLimitStore: RateLimitStore | undefined;
}

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

function getRequesterKey(request: Request): string {
  const forwardedFor =
    request.headers.get('x-forwarded-for') ??
    request.headers.get('x-real-ip') ??
    request.headers.get('cf-connecting-ip');
  return forwardedFor?.split(',')[0]?.trim() || 'unknown';
}

function getRateLimitStore(): RateLimitStore {
  globalThis.__workoutRateLimitStore ??= new Map<string, number[]>();
  return globalThis.__workoutRateLimitStore;
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

  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
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
