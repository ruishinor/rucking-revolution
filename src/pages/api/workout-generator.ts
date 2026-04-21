import type { APIRoute } from 'astro';
import { generateWorkout } from '@/components/WorkoutGenerator';
import { workouts } from '@/data/workouts.ts';
import {
  checkRateLimit,
  createRequestId,
  getRequesterKey,
  isSameOriginRequest,
  jsonResponse,
  logApiEvent,
  readWithSizeLimit,
} from '@/lib/api-utils';

export const prerender = false;

const MAX_BODY_SIZE = 1024;

export const GET: APIRoute = () =>
  jsonResponse(405, { success: false, error: 'Method not allowed' });

export const POST: APIRoute = async ({ request }) => {
  const requestId = createRequestId();

  if (!isSameOriginRequest(request)) {
    // Allow requests without referer/origin for direct form submissions (SSR)
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    if (origin || referer) {
      logApiEvent('/api/workout-generator', 'warn', 'Cross-origin request blocked', undefined, requestId);
      return jsonResponse(403, {
        success: false,
        error: 'Cross-origin requests are not allowed.',
      });
    }
  }

  const requesterKey = getRequesterKey(request);
  const rateLimit = await checkRateLimit(requesterKey, {
    windowMs: 60 * 1000,
    maxRequests: 30,
    storeKey: '__workoutRateLimitStore',
  });

  if (!rateLimit.allowed) {
    logApiEvent('/api/workout-generator', 'warn', 'Rate limit exceeded', { requesterKey }, requestId);
    return jsonResponse(429, {
      success: false,
      error: 'Too many requests. Please try again later.',
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

  const mode = payload.mode === 'predefined' ? 'predefined' : 'generated';
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

  try {
    let workout;

    if (mode === 'predefined') {
      const filteredWorkouts = workouts.filter(w => w.difficulty === difficulty);
      const selectedWorkouts = filteredWorkouts.length > 0 ? filteredWorkouts : workouts;
      const randomIndex = Math.floor(Math.random() * selectedWorkouts.length);
      const selected = selectedWorkouts[randomIndex];
      workout = {
        id: selected.id,
        title: selected.title,
        description: selected.description,
        duration: selected.duration,
        distance: selected.distance,
        load: selected.load,
        difficulty: selected.difficulty,
        terrain: selected.terrain,
        objectives: selected.objectives,
        equipment: selected.equipment,
        sections: [],
        notes: selected.notes
      };
    } else {
      workout = generateWorkout(difficulty, undefined, timePreference);
    }

    logApiEvent('/api/workout-generator', 'info', 'Workout generated', { difficulty, mode }, requestId);
    return jsonResponse(200, { success: true, workout });
  } catch (err) {
    logApiEvent('/api/workout-generator', 'error', 'Workout generation failed', { error: String(err) }, requestId);
    return jsonResponse(500, {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    });
  }
};
