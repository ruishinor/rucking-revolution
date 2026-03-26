/// <reference types="vitest" />
import { sanitizeArticleHtml } from '../src/lib/security';
import { getAarConfiguration, validateAarSubmission } from '../src/lib/aarSubmission';

function buildValidAarFormData(): FormData {
  const formData = new FormData();
  formData.set('eventName', 'Weekend Training Ruck');
  formData.set('location', 'Blue Ridge Trail');
  formData.set('distance', '12.5');
  formData.set('load', '20');
  formData.set('crewSize', '8');
  formData.set('conditions', 'Cool, dry, and windy with mixed terrain.');
  formData.set('planned', 'Maintain formation\nPractice navigation handoffs');
  formData.set('actual', 'Formation held for most of the route\nNavigation handoff slowed us down');
  formData.set('whatWentWell', 'Pacing stayed consistent\nLoad checks were handled early');
  formData.set('improvements', 'Tighter comms at checkpoints\nClearer route brief');
  formData.set('lessonsLearned', 'Use simpler checkpoint language\nRehearse handoffs before stepping off');
  formData.set('author', 'Crew Lead');
  formData.set('email', 'lead@example.com');
  return formData;
}

describe('security helpers', () => {
  test('sanitizeArticleHtml removes executable markup and preserves safe content', () => {
    const sanitized = sanitizeArticleHtml(
      '<h2>Field Notes</h2><p onclick="alert(1)">Safe copy <a href="/learn">inside</a>.</p><script>alert(1)</script>',
    );

    expect(sanitized).toContain('<h2>Field Notes</h2>');
    expect(sanitized).toContain('<a href="/learn" rel="noopener noreferrer">inside</a>');
    expect(sanitized).not.toContain('onclick=');
    expect(sanitized).not.toContain('<script>');
  });

  test('validateAarSubmission normalizes a valid submission', () => {
    const validation = validateAarSubmission(buildValidAarFormData());

    expect(validation.success).toBe(true);
    if (!validation.success) {
      return;
    }

    expect(validation.data.distance).toBe(12.5);
    expect(validation.data.planned).toEqual([
      'Maintain formation',
      'Practice navigation handoffs',
    ]);
    expect(validation.data.email).toBe('lead@example.com');
  });

  test('validateAarSubmission rejects invalid email addresses', () => {
    const formData = buildValidAarFormData();
    formData.set('email', 'not-an-email');

    const validation = validateAarSubmission(formData);

    expect(validation.success).toBe(false);
    if (validation.success) {
      return;
    }

    expect(validation.error).toContain('Email');
  });

  test('getAarConfiguration stays disabled until webhook and captcha are configured', () => {
    const originalEnv = {
      AAR_PUBLIC_SUBMISSIONS_ENABLED: process.env.AAR_PUBLIC_SUBMISSIONS_ENABLED,
      AAR_SUBMISSIONS_WEBHOOK_URL: process.env.AAR_SUBMISSIONS_WEBHOOK_URL,
      AAR_TURNSTILE_SITE_KEY: process.env.AAR_TURNSTILE_SITE_KEY,
      AAR_TURNSTILE_SECRET_KEY: process.env.AAR_TURNSTILE_SECRET_KEY,
    };

    try {
      process.env.AAR_PUBLIC_SUBMISSIONS_ENABLED = 'true';
      delete process.env.AAR_SUBMISSIONS_WEBHOOK_URL;
      delete process.env.AAR_TURNSTILE_SITE_KEY;
      delete process.env.AAR_TURNSTILE_SECRET_KEY;

      expect(getAarConfiguration().enabled).toBe(false);

      process.env.AAR_SUBMISSIONS_WEBHOOK_URL = 'https://example.com/webhook';
      process.env.AAR_TURNSTILE_SITE_KEY = 'site-key';
      process.env.AAR_TURNSTILE_SECRET_KEY = 'secret-key';

      expect(getAarConfiguration().enabled).toBe(true);
    } finally {
      for (const [key, value] of Object.entries(originalEnv)) {
        if (typeof value === 'string') {
          process.env[key] = value;
        } else {
          delete process.env[key];
        }
      }
    }
  });
});
