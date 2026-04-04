import sanitizeHtml from 'sanitize-html';
import { emailPattern } from '@/lib/api-utils';

function sanitizeText(text: string): string {
  return sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {},
  });
}

export interface AarSubmissionPayload {
  eventName: string;
  location: string;
  distance: number;
  load: number;
  crewSize: number;
  conditions: string;
  planned: string[];
  actual: string[];
  whatWentWell: string[];
  improvements: string[];
  lessonsLearned: string[];
  author: string;
  email?: string;
  submittedAt: string;
}

export interface AarConfiguration {
  enabled: boolean;
  webhookUrl: string;
  honeypotField: string;
  turnstileSiteKey: string;
  turnstileSecretKey: string;
  requirements: string[];
}

interface FieldConstraint {
  label: string;
  min: number;
  max: number;
}

const singleLineConstraints: Record<string, FieldConstraint> = {
  eventName: { label: 'Event name', min: 3, max: 120 },
  location: { label: 'Location', min: 2, max: 120 },
  conditions: { label: 'Conditions', min: 10, max: 500 },
  author: { label: 'Author', min: 2, max: 80 },
};

const listConstraints: Record<string, FieldConstraint> = {
  planned: { label: 'Planned objectives', min: 10, max: 2000 },
  actual: { label: 'What actually happened', min: 10, max: 2000 },
  whatWentWell: { label: 'What went well', min: 10, max: 2000 },
  improvements: { label: 'Improvements', min: 10, max: 2000 },
  lessonsLearned: { label: 'Lessons learned', min: 10, max: 2000 },
};

function readEnv(name: string): string {
  return process.env[name]?.trim() || '';
}

export function getAarConfiguration(): AarConfiguration {
  const publicFlagEnabled = readEnv('AAR_PUBLIC_SUBMISSIONS_ENABLED') === 'true';
  const webhookUrl = readEnv('AAR_SUBMISSIONS_WEBHOOK_URL');
  const turnstileSiteKey = readEnv('AAR_TURNSTILE_SITE_KEY');
  const turnstileSecretKey = readEnv('AAR_TURNSTILE_SECRET_KEY');
  const requirements: string[] = [];

  if (!publicFlagEnabled) {
    requirements.push('AAR_PUBLIC_SUBMISSIONS_ENABLED=true');
  }

  if (!webhookUrl) {
    requirements.push('AAR_SUBMISSIONS_WEBHOOK_URL');
  }

  if (!turnstileSiteKey) {
    requirements.push('AAR_TURNSTILE_SITE_KEY');
  }

  if (!turnstileSecretKey) {
    requirements.push('AAR_TURNSTILE_SECRET_KEY');
  }

  return {
    enabled: requirements.length === 0,
    webhookUrl,
    honeypotField: 'website',
    turnstileSiteKey,
    turnstileSecretKey,
    requirements,
  };
}

function normalizeText(value: FormDataEntryValue | null): string {
  return typeof value === 'string' ? value.replace(/\r\n/g, '\n').trim() : '';
}

function readRequiredText(
  formData: FormData,
  key: string,
  constraint: FieldConstraint,
): { ok: true; value: string } | { ok: false; error: string } {
  const value = normalizeText(formData.get(key));

  if (value.length < constraint.min || value.length > constraint.max) {
    return {
      ok: false,
      error: `${constraint.label} must be between ${constraint.min} and ${constraint.max} characters.`,
    };
  }

  return { ok: true, value };
}

function readRequiredNumber(
  formData: FormData,
  key: string,
  label: string,
  min: number,
  max: number,
): { ok: true; value: number } | { ok: false; error: string } {
  const raw = normalizeText(formData.get(key));
  const value = Number(raw);

  if (!Number.isFinite(value) || value < min || value > max) {
    return {
      ok: false,
      error: `${label} must be a number between ${min} and ${max}.`,
    };
  }

  return { ok: true, value };
}

function readRequiredList(
  formData: FormData,
  key: string,
  constraint: FieldConstraint,
): { ok: true; value: string[] } | { ok: false; error: string } {
  const value = normalizeText(formData.get(key));

  if (value.length < constraint.min || value.length > constraint.max) {
    return {
      ok: false,
      error: `${constraint.label} must be between ${constraint.min} and ${constraint.max} characters.`,
    };
  }

  const items = value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

  if (items.length === 0 || items.length > 12) {
    return {
      ok: false,
      error: `${constraint.label} must contain between 1 and 12 entries.`,
    };
  }

  return { ok: true, value: items };
}

export function validateAarSubmission(
  formData: FormData,
): { success: true; data: AarSubmissionPayload } | { success: false; error: string } {
  const eventName = readRequiredText(formData, 'eventName', singleLineConstraints.eventName);
  if (!eventName.ok) return { success: false, error: eventName.error };

  const location = readRequiredText(formData, 'location', singleLineConstraints.location);
  if (!location.ok) return { success: false, error: location.error };

  const distance = readRequiredNumber(formData, 'distance', 'Distance', 0.1, 500);
  if (!distance.ok) return { success: false, error: distance.error };

  const load = readRequiredNumber(formData, 'load', 'Load', 0, 100);
  if (!load.ok) return { success: false, error: load.error };

  const crewSize = readRequiredNumber(formData, 'crewSize', 'Crew size', 1, 100);
  if (!crewSize.ok) return { success: false, error: crewSize.error };

  const conditions = readRequiredText(formData, 'conditions', singleLineConstraints.conditions);
  if (!conditions.ok) return { success: false, error: conditions.error };

  const planned = readRequiredList(formData, 'planned', listConstraints.planned);
  if (!planned.ok) return { success: false, error: planned.error };

  const actual = readRequiredList(formData, 'actual', listConstraints.actual);
  if (!actual.ok) return { success: false, error: actual.error };

  const whatWentWell = readRequiredList(formData, 'whatWentWell', listConstraints.whatWentWell);
  if (!whatWentWell.ok) return { success: false, error: whatWentWell.error };

  const improvements = readRequiredList(formData, 'improvements', listConstraints.improvements);
  if (!improvements.ok) return { success: false, error: improvements.error };

  const lessonsLearned = readRequiredList(formData, 'lessonsLearned', listConstraints.lessonsLearned);
  if (!lessonsLearned.ok) return { success: false, error: lessonsLearned.error };

  const author = readRequiredText(formData, 'author', singleLineConstraints.author);
  if (!author.ok) return { success: false, error: author.error };

  const email = normalizeText(formData.get('email'));
  if (email && !emailPattern.test(email)) {
    return {
      success: false,
      error: 'Email must be a valid email address when provided.',
    };
  }

  return {
    success: true,
    data: {
      eventName: sanitizeText(eventName.value),
      location: sanitizeText(location.value),
      distance: distance.value,
      load: load.value,
      crewSize: crewSize.value,
      conditions: sanitizeText(conditions.value),
      planned: planned.value.map(sanitizeText),
      actual: actual.value.map(sanitizeText),
      whatWentWell: whatWentWell.value.map(sanitizeText),
      improvements: improvements.value.map(sanitizeText),
      lessonsLearned: lessonsLearned.value.map(sanitizeText),
      author: sanitizeText(author.value),
      ...(email ? { email: sanitizeText(email) } : {}),
      submittedAt: new Date().toISOString(),
    },
  };
}
