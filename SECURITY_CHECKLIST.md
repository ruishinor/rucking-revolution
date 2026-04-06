Security Review — Rucking Revolution

Summary
- Performed static code analysis, dependency audit, secrets scan, and tests.
- Applied a small hardening: backstage route now prefers header-based auth (Authorization or x-vercel-protection-key) over query params.
- Ran `npm audit` and found moderate, non-production vulnerabilities in language-server tooling (dev deps).
- Ran unit tests (Vitest) — all tests passed.

Findings and Risk Level
- Dev dependency vulnerabilities (moderate): `yaml` -> `yaml-language-server` -> `volar-service-yaml` -> `@astrojs/language-server`. (Risk: development tooling; not directly production runtime)
- Secrets: repository contains `.env.example` only. `.env.local` is ignored by `.gitignore`. (Risk: low if deploy secrets managed properly)
- Backstage access previously accepted secret in query string (risk of leakage via logs/referer). Patched to prefer header-based secret.
- CSP includes `style-src 'unsafe-inline'` which weakens style protections. Consider removing if not required.

Immediate Changes Applied
- `src/pages/backstage/index.astro`: prefer `Authorization: Bearer <secret>` or `x-vercel-protection-key` header over `access_key` query param.
- Ran `npm audit` and `npm test` to validate state.

Recommended Remediations (Actionable)
1) Secrets & Environment
  - Store secrets in your hosting provider's secret store (Vercel Environment Variables) — do NOT commit `.env.local`.
  - Ensure `BACKSTAGE_SECRET`, `HEALTH_CHECK_SECRET`, `NEWSLETTER_*` and `AAR_*` secrets are set in environment and never logged.

2) Backstage/Auth
  - Prefer Authorization header (Bearer token) or IP-restricted internal headers for admin pages.
  - Consider stronger auth (AT least basic auth, or cookie-based session behind OAuth) for production admin dashboard.

3) Dependencies
  - Update dev tooling to address `yaml` advisory. Recommended: update language-server and related dev packages.
  - Run `npm audit fix` and evaluate `npm audit fix --force` only in a branch with tests. Example:

    npm audit fix
    # If remaining and acceptable, in a feature branch:
    npm audit fix --force

4) CSP and Headers
  - Consider removing `unsafe-inline` from `style-src` and instead use hashed inline styles or nonces.
  - Add a `report-uri` / `report-to` endpoint for CSP violation reporting.
  - Confirm `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options` remain present (already set in `vercel.json`).

5) Webhooks & Remote Calls
  - Keep `validateWebhookUrl()` strict — require `https:` and disallow private IPs.
  - Consider adding request signing for incoming webhooks and a verification step.

6) Rate Limiting & Anti-abuse
  - Current in-memory rate-limiter is acceptable for low-traffic apps but not reliable in serverless (stateless) environments; consider using a centralized rate-limit store (Redis, Upstash, or provider-managed) for robust enforcement.

7) Adversarial Testing
  - Run fuzzing on API endpoints for boundary conditions (oversized payloads, malformed form data).
  - Simulate Turnstile failures and ensure endpoints fail-closed if verification service is unavailable.

How to validate fixes
- Run tests: `npm test`.
- Re-run audits: `npm audit`.
- Deploy to staging and run dynamic scans (OWASP ZAP, Burp) against staging site.

Notes
- The remaining `npm audit` findings are within dev tooling and don't affect production runtime directly, but should be remediated on the development toolchain.

If you want, I can:
- Create a staging checklist and automation to run `npm audit`, unit tests, and a small dynamic scan on every PR.
- Open PR updating `vercel.json` CSP to remove `unsafe-inline` and add reporting (I can do this incrementally and test for regressions).
- Attempt safe dependency updates for the dev-only packages in a separate branch.

End of initial security pass.

Recent Changes Applied (summary)
- **Dev-tooling**: moved `@astrojs/check` to `devDependencies` and added an `overrides` entry forcing `yaml` >= 2.8.3 to eliminate the audit advisory in the language-server chain.
- **Rate-limiter**: implemented an async `checkRateLimit()` with optional Upstash/Redis backing (environment variables `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`) and a safe in-memory fallback for local dev.
- **Endpoints updated**: `src/pages/api/newsletter.ts` and `src/pages/api/aar.ts` now `await` the async rate limiter and set appropriate rate-limit headers.
- **CSP reporting**: removed `unsafe-inline` from `style-src` in `vercel.json` and added a `Report-To`/reporting endpoint at `/api/csp-report` (`src/pages/api/csp-report.ts`) that accepts and logs CSP violation reports (responds 204).
- **Adversarial tests**: added `test/adversarial.test.ts` covering oversized payloads, origin checks, and webhook URL validation; all tests pass locally (12/12).

Next recommended steps
- Push the `security/update-dev-tooling` branch and open a PR; create a separate PR for hardening changes if desired.
- Add a CI workflow that runs `npm ci`, `npm audit --json` and fails if vulnerabilities exist, then runs `npx vitest run` (including adversarial tests).
- Provision Upstash credentials in staging to validate Redis-backed rate-limiting in a serverless environment.

End of update.

Latest actions (commit + push)
- Added `docs/UPSTASH_PROVISIONING.md` explaining how to provision Upstash and wire secrets into Vercel/GitHub Actions.
- Added a lightweight contrast checker `scripts/check-contrast.js` and a CI workflow `.github/workflows/ci.yml` that runs `npm audit`, the contrast check, and `vitest` on PRs.
- Added programmatic SEO starter documentation `docs/SEO_PROGRAMMATIC_ARCHITECTURE.md` and a sample generator `scripts/generate-seo-pages.js` which writes example pages to `src/content/seo/` (committed to `security/update-dev-tooling`).

What I still cannot do from here
- I cannot provision Upstash accounts or set environment variables in your hosting provider (Vercel/GitHub). Follow `docs/UPSTASH_PROVISIONING.md` to provision and set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` in staging.

Next verification steps for you (or I can run them if you grant deployment access)
- Add Upstash secrets to staging and redeploy; monitor rate-limiter logs for Redis success messages.
- Run the GH Actions CI by opening a PR (links to create PRs shown when branches were pushed).

