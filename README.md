# Rucking Revolution Website

A static-first website for the Rucking Revolution community, built with Astro.

## Development

To start the development server:

```bash
npm run dev
```

This will start the Astro development server at `http://localhost:4321`.

## Building for Production

To create a production build:

```bash
npm run build
```

Astro writes the rendered site to `dist/` for local inspection and preview. When deploying to Vercel with the Astro adapter, the build also prepares the platform-specific output in `.vercel/output/`.

To preview the production build locally:

```bash
npm run preview
```

## Deployment to Vercel

This project is configured to let Vercel build from source on every push. The repository should not commit any files from `.vercel/output/`.

### Deployment Steps

1. Push the repository to GitHub.
2. Import the project in Vercel (vercel.com) using the GitHub repository.
3. Vercel will install dependencies and run `npm run build` from the repository root.
4. Set the following environment variables in Vercel project settings (if applicable):
    - `CMS_API_KEY`: Your CMS API key
    - `PAYMENT_WEBHOOK_URL`: URL for payment webhooks

### Vercel Configuration

The repository deployment path is:
- `astro.config.mjs` uses the official `@astrojs/vercel` adapter.
- `vercel.json` explicitly tells Vercel to use the Astro framework preset and run `npm run build`.
- `.vercel/` is ignored so tracked prebuilt output cannot override the source build.

After setting the environment variables, Vercel will automatically build and deploy the project on each push to the main branch.

## Environment Variables

| Variable | Description | Where to Set |
|----------|-------------|--------------|
| `CMS_API_KEY` | API key for headless CMS (if used) | Vercel Project Settings -> Environment Variables |
| `PAYMENT_WEBHOOK_URL` | Webhook URL for payment processing | Vercel Project Settings -> Environment Variables |

## Project Structure

- `src/components` - Reusable Astro components
- `src/pages` - Page components and routes
- `src/data` - TypeScript data files (site.ts, articles.ts, etc.)
- `public/assets` - Static assets (images, icons, etc.)
- `scripts` - Utility scripts
- `src/styles` - Design system tokens and global styles

## Design System

This project implements a design system with CSS tokens and reusable components:

- **Tokens**: CSS variables in `src/styles/tokens.css` for colors, spacing, typography, and more
- **Components**: Reusable Astro components in `src/components/`:
  - Button (primary, secondary, utility variants)
  - Card
  - Grid
  - Container
  - Header
  - Footer
- **Style Guide**: View all components and tokens at `/style-guide`

### Color Tokens & Accessibility

The design system includes accessible color pairs with WCAG contrast ratios:

```
Contrast Ratios (WCAG):
AA: 4.5:1 for normal text, 3:1 for large text
AAA: 7:1 for normal text, 4.5:1 for large text

Primary text on background: 9.10:1
  AA Normal: PASS (9.101574379543013)
  AA Large: PASS (9.101574379543013)
  AAA Normal: PASS (9.101574379543013)
  AAA Large: PASS (9.101574379543013)

Secondary text on background: 15.49:1
  AA Normal: PASS (15.494666224320799)
  AA Large: PASS (15.494666224320799)
  AAA Normal: PASS (15.494666224320799)
  AAA Large: PASS (15.494666224320799)

Accent text on background: 3.18:1
  AA Normal: FAIL (4.5)
  AA Large: PASS (3.1846173634393686)
  AAA Normal: FAIL (7)
  AAA Large: FAIL (4.5)

Forest text on background: 8.81:1
  AA Normal: PASS (8.809045945408203)
  AA Large: PASS (8.809045945408203)
  AAA Normal: PASS (8.809045945408203)
  AAA Large: PASS (8.809045945408203)

Steel text on background: 4.85:1
  AA Normal: PASS (4.845325174334704)
  AA Large: PASS (4.845325174334704)
  AAA Normal: FAIL (7)
  AAA Large: PASS (4.845325174334704)

White text on primary: 10.01:1
  AA Normal: PASS (10.010518239222488)
  AA Large: PASS (10.010518239222488)
  AAA Normal: PASS (10.010518239222488)
  AAA Large: PASS (10.010518239222488)

White text on secondary: 17.04:1
  AA Normal: PASS (17.04206683163051)
  AA Large: PASS (17.04206683163051)
  AAA Normal: PASS (17.04206683163051)
  AAA Large: PASS (17.04206683163051)

White text on accent: 3.50:1
  AA Normal: FAIL (4.5)
  AA Large: PASS (3.5026544718799624)
  AAA Normal: FAIL (7)
  AAA Large: FAIL (4.5)

White text on forest: 9.69:1
  AA Normal: PASS (9.688775966591107)
  AA Large: PASS (9.688775966591107)
  AAA Normal: PASS (9.688775966591107)
  AAA Large: PASS (9.688775966591107)

White text on steel: 5.33:1
  AA Normal: PASS (5.32921162976606)
  AA Large: PASS (5.32921162976606)
  AAA Normal: FAIL (7)
  AAA Large: PASS (5.32921162976606)

Black text on background: 19.09:1
  AA Normal: PASS (19.093223487822993)
  AA Large: PASS (19.093223487822993)
  AAA Normal: PASS (19.093223487822993)
  AAA Large: PASS (19.093223487822993)

HC text on HC background: 21.00:1
  AA Normal: PASS (21)
  AA Large: PASS (21)
  AAA Normal: PASS (21)
  AAA Large: PASS (21)

HC primary on HC background: 14.97:1
  AA Normal: PASS (14.972175485631775)
  AA Large: PASS (14.972175485631775)
  AAA Normal: PASS (14.972175485631775)
  AAA Large: PASS (14.972175485631775)

HC accent on HC background: 15.30:1
  AA Normal: PASS (15.303999999999998)
  AA Large: PASS (15.303999999999998)
  AAA Normal: PASS (15.303999999999998)
  AAA Large: PASS (15.303999999999998)
```

Note: Some accent colors don't meet AA for normal text but pass for large text (18pt+ or 14pt+ bold). These are intended for use as accent colors rather than primary text.

## TypeScript

This project uses TypeScript for data files. The `tsconfig.json` extends Astro's strict TS configuration.

## Accessibility

We aim for an accessibility-first HTML structure. To run accessibility checks, we recommend using [axe-core](https://www.deque.com/axe/) or similar tools in your CI pipeline.

## CI Configuration

See `.github/workflows/ci.yml` for continuous integration that runs:
- Install dependencies
- Run linting (if configured)
- Build the project
- Run accessibility checks (if configured)

## License

ISC
