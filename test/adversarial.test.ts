/// <reference types="vitest" />
import { readWithSizeLimit, isSameOriginRequest, validateWebhookUrl } from '../src/lib/api-utils';

function makeReader(chunks: Uint8Array[]) {
  let i = 0;
  return {
    read: async () => {
      if (i >= chunks.length) return { done: true, value: undefined };
      const value = chunks[i++];
      return { done: false, value };
    },
  };
}

describe('adversarial checks', () => {
  test('readWithSizeLimit throws on oversized payload', async () => {
    const chunk = new Uint8Array(1024); // 1KB
    const chunks = [chunk, chunk, chunk]; // 3KB total
    const req: any = {
      body: {
        getReader: () => makeReader(chunks),
      },
    };

    await expect(readWithSizeLimit(req as Request, 1024)).rejects.toThrow(/maximum size/);
  });

  test('isSameOriginRequest detects cross-origin correctly', () => {
    const req: any = {
      url: 'https://ruckingrevolution.org/api/newsletter',
      headers: {
        get: (k: string) => (k === 'origin' ? 'https://evil.com' : null),
      },
    };

    expect(isSameOriginRequest(req as unknown as Request)).toBe(false);

    const okReq: any = {
      headers: {
        get: (k: string) => (k === 'origin' ? 'https://ruckingrevolution.org' : null),
      },
      url: 'https://ruckingrevolution.org/api/newsletter',
    };

    expect(isSameOriginRequest(okReq as unknown as Request)).toBe(true);
  });

  test('validateWebhookUrl rejects non-https and private addresses', () => {
    expect(validateWebhookUrl('http://example.com/webhook')).toBe(false);
    expect(validateWebhookUrl('https://127.0.0.1/hook')).toBe(false);
    expect(validateWebhookUrl('https://localhost/hook')).toBe(false);
    expect(validateWebhookUrl('https://api.example.com/hook')).toBe(true);
  });
});
