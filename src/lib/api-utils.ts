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

interface RateLimitStore {
  data: Map<string, number[]>;
  lastCleanup: number;
}

const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;

function getStore(key: string): RateLimitStore {
  const globalObj = globalThis as Record<string, unknown>;
  if (!globalObj[key]) {
    globalObj[key] = { data: new Map<string, number[]>(), lastCleanup: Date.now() };
  }
  return globalObj[key] as RateLimitStore;
}

function cleanupStore(store: RateLimitStore, windowMs: number): void {
  const now = Date.now();
  if (now - store.lastCleanup < CLEANUP_INTERVAL_MS) {
    return;
  }
  const cutoff = now - windowMs * 2;
  for (const [key, timestamps] of store.data.entries()) {
    const recent = timestamps.filter((ts) => ts >= cutoff);
    if (recent.length === 0) {
      store.data.delete(key);
    } else {
      store.data.set(key, recent);
    }
  }
  store.lastCleanup = now;
}

function extractIpFromRequest(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIp = forwardedFor.split(',')[0]?.trim();
    if (firstIp && isValidIp(firstIp)) {
      return firstIp;
    }
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp && isValidIp(realIp)) {
    return realIp;
  }
  return 'unknown';
}

function isValidIp(ip: string): boolean {
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Pattern = /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/;
  if (ipv4Pattern.test(ip)) {
    const parts = ip.split('.').map(Number);
    return parts.every((part) => part >= 0 && part <= 255);
  }
  if (ipv6Pattern.test(ip)) {
    return true;
  }
  return false;
}

export function getRequesterKey(request: Request): string {
  const ip = extractIpFromRequest(request);
  const ua = (request.headers.get('user-agent') || '').substring(0, 128);
  return `${ip}:${ua}`;
}

export function isSameOriginRequest(request: Request): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  if (!origin && !referer) {
    return false;
  }

  try {
    const requestOrigin = origin || new URL(referer!).origin;
    const urlOrigin = new URL(request.url).origin;
    return requestOrigin === urlOrigin;
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
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
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
  const store = getStore(config.storeKey);
  const now = Date.now();
  const windowStart = now - config.windowMs;
  const attempts = (store.data.get(requesterKey) ?? []).filter(
    (timestamp) => timestamp >= windowStart,
  );

  const resetAt =
    attempts.length > 0
      ? attempts[0] + config.windowMs
      : now + config.windowMs;

  if (attempts.length >= config.maxRequests) {
    store.data.set(requesterKey, attempts);
    cleanupStore(store, config.windowMs);
    return { allowed: false, remaining: 0, resetAt };
  }

  attempts.push(now);
  store.data.set(requesterKey, attempts);
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
    if (parsed.protocol !== 'https:') {
      return false;
    }
    const hostname = parsed.hostname.toLowerCase();
    // Block common private address spaces: localhost, 127.0.0.1, 10.*, 192.168.*, and 172.16.0.0/12
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.') || hostname.startsWith('10.')) {
      return false;
    }

    if (hostname.startsWith('172.')) {
      const parts = hostname.split('.');
      const second = Number(parts[1]);
      if (!Number.isNaN(second) && second >= 16 && second <= 31) {
        return false;
      }
    }
    return true;
  } catch {
    return false;
  }
}
