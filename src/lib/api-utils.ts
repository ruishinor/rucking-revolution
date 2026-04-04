export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  storeKey: string;
}

function getStore<T>(key: string): Map<string, T> {
  const store = (globalThis as Record<string, unknown>)[key];
  if (!store) {
    const newStore = new Map<string, T>();
    (globalThis as Record<string, unknown>)[key] = newStore;
    return newStore;
  }
  return store as Map<string, T>;
}

function cleanupStore(store: Map<string, number[]>, windowMs: number): void {
  const now = Date.now();
  const cutoff = now - windowMs * 2;
  for (const [key, timestamps] of store.entries()) {
    const recent = timestamps.filter((ts) => ts >= cutoff);
    if (recent.length === 0) {
      store.delete(key);
    } else {
      store.set(key, recent);
    }
  }
}

export function getRequesterKey(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  return forwardedFor?.split(',')[0]?.trim() || 'unknown';
}

export function isSameOriginRequest(request: Request): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  if (!origin && !referer) {
    return false;
  }

  try {
    const requestOrigin = origin || new URL(referer!).origin;
    return requestOrigin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export function jsonResponse(
  status: number,
  body: Record<string, unknown>,
  extraHeaders?: Record<string, string>,
): Response {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    ...extraHeaders,
  };
  return new Response(JSON.stringify(body), { status, headers });
}

export function createRequestId(): string {
  return globalThis.crypto?.randomUUID?.() || `req-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export async function readWithSizeLimit(request: Request, maxBytes: number): Promise<string> {
  const reader = request.body?.getReader();
  if (!reader) return '';

  let result = '';
  let totalBytes = 0;
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.length;
    if (totalBytes > maxBytes) {
      throw new Error(`Request body exceeds maximum size of ${maxBytes} bytes`);
    }
    result += decoder.decode(value, { stream: true });
  }
  return result;
}

export function checkRateLimit(
  requesterKey: string,
  config: RateLimitConfig,
): RateLimitResult {
  const store = getStore<number[]>(config.storeKey);
  const now = Date.now();
  const windowStart = now - config.windowMs;
  const attempts = (store.get(requesterKey) ?? []).filter(
    (timestamp) => timestamp >= windowStart,
  );

  const resetAt =
    attempts.length > 0
      ? attempts[0] + config.windowMs
      : now + config.windowMs;

  if (attempts.length >= config.maxRequests) {
    store.set(requesterKey, attempts);
    cleanupStore(store, config.windowMs);
    return { allowed: false, remaining: 0, resetAt };
  }

  attempts.push(now);
  store.set(requesterKey, attempts);
  cleanupStore(store, config.windowMs);
  return { allowed: true, remaining: config.maxRequests - attempts.length, resetAt };
}

export function sanitizeErrorForClient(error: unknown): string {
  if (error instanceof Error && error.message) {
    const safeMessages = ['timeout', 'network', 'unavailable', 'rejected'];
    const msg = error.message.toLowerCase();
    if (safeMessages.some((safe) => msg.includes(safe))) {
      return 'Service unavailable. Please try again later.';
    }
  }
  return 'An unexpected error occurred. Please try again later.';
}

export function logApiEvent(
  route: string,
  level: 'info' | 'warn' | 'error',
  message: string,
  context?: Record<string, unknown>,
  requestId?: string,
): void {
  const timestamp = new Date().toISOString();
  const entry = {
    timestamp,
    route,
    level,
    message,
    ...(requestId ? { requestId } : {}),
    ...(context ? { context } : {}),
  };

  switch (level) {
    case 'error':
      console.error(JSON.stringify(entry));
      break;
    case 'warn':
      console.warn(JSON.stringify(entry));
      break;
    default:
      console.log(JSON.stringify(entry));
  }
}

export const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export function validateWebhookUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
