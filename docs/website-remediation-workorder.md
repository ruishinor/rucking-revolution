# Rucking Revolution Website Remediation Work Order

Date: 2026-03-17
Status: Ready for execution
Audience: Project owner, editor, designer, developer

## Purpose

This work order turns the current audit into an execution plan to repair the website so it matches the original objective:

- a structured knowledge platform for rucking as a discipline
- a leadership practice platform
- a practical field activity knowledge base
- a publishing platform
- a training resource library
- a digital product storefront
- a cultural hub for crews
- an instructional archive

This is not a "nice to have" polish pass. The current implementation has structural problems that affect layout, routing, styling, SEO, accessibility, and feature behavior. The work below must be completed in order.

## Restored strategic guidance and scope constraints

The following product guidance was reaffirmed after the initial draft and must remain active for all modules:

- Preserve the site as a knowledge ecosystem, not a generic marketing site:
  - publishing engine
  - training doctrine repository
  - movement and crew infrastructure
- Preserve simplified top-level navigation and keep primary root choices within a low cognitive-load range. The preferred root shape is:
  - Home
  - Learn
  - Train
  - Lead
  - Red Rucker
  - About
- Keep the Digital Library commercially visible even if it is grouped under `Learn`. It must remain directly discoverable through homepage placement, overview pages, footer/utility navigation, and canonical library routes.
- Preserve and integrate the high-value cultural and field pages that support long-term platform identity:
  - `/why-rucking`
  - `/routes`
  - `/events`
  - `/field-notes`
- Treat `/gear` as a planned strategic section. If it is not implemented yet, do not fake it; route planning for it must still be accounted for in the architecture modules.
- Protect article readability:
  - approximately 60-80 characters per line
  - generous spacing
  - clear editorial hierarchy
- Protect field usability on training pages:
  - large diagrams
  - short instructions
  - minimal cognitive load during use
- Treat mobile as the dominant form factor.
- Do not redesign the internal purpose of the Workout Generator or CrewTactics generator during this remediation unless a later explicit change request approves it. Permitted work on those tools is limited to:
  - deployment safety
  - navigation context
  - accessibility
  - visual consistency
  - supporting explanatory content around the tools

## How to use this document

- Non-developers should read:
  - `Purpose`
  - `Execution order`
  - each module's `Plain-language instructions`
  - each module's `Approval checklist`
- Developers should read:
  - `Global developer instructions`
  - each module's `Developer instructions`
  - each module's `Acceptance criteria`

## What is broken now

At a high level, the current site has these major problems:

- the visual system is not wired correctly, so the build renders with broken styling
- shared components output broken class strings into the HTML
- page metadata is being placed in the body instead of the head on many pages
- several core pages are placeholders rather than completed platform pages
- some links go to routes that do not exist
- some "functional" features are not actually functional in a static build
- article and product content still contains placeholder copy, TODOs, and missing assets
- the root navigation does not match the required information architecture

## Execution order

Work in this sequence. Do not skip ahead.

1. Module 01: Foundation and design system repair
2. Module 02: Shared layout, header, footer, and navigation
3. Module 03: Information architecture and route alignment
4. Module 04: Homepage rebuild
5. Module 05: Articles and publishing system
6. Module 06: Training and performance kit
7. Module 07: CrewTactics and Ruck Clubs
8. Module 08: After Action Reviews system
9. Module 09: Digital Library and storefront
10. Module 10: Red Rucker section
11. Module 11: Utility pages, footer content, and legal pages
12. Module 12: SEO, accessibility, QA, and launch readiness

Execution rule for every module:

- complete the current module before starting the next one
- verify and validate Module N before continuing to Module N+1
- do not advance multiple modules in parallel unless the work is clearly non-conflicting and the current module's acceptance criteria can still be fully proven
- stop only at a natural checkpoint: module complete, verified, documented, and ready for review

## Global developer instructions

These rules apply to every module.

- Do not ship placeholder text, TODO text, placeholder media, or dead links.
- Do not leave any page as a one-paragraph stub.
- Do not use `#` as a production link target.
- Do not rely on server-side form POST handling inside statically generated pages unless the route is actually deployed as a server endpoint.
- Keep Astro as the primary rendering layer. Add client-side JavaScript only where interaction is necessary.
- Use the existing `src/data` structure where sensible, but replace fake or incomplete data with a clearer content model where needed.
- Every visible page must have:
  - a real page title
  - a real meta description
  - one `h1`
  - real navigation context
  - keyboard-accessible controls
  - valid links
- Every asset referenced in code must exist in the repository or be loaded from an approved external source.
- Preserve the existing knowledge-platform loop where possible:
  - read
  - train
  - lead
  - reflect
  - publish
  - improve
- Every module should be merged only after:
  - `npm run build` passes
  - relevant tests pass
  - manual browser review on desktop and mobile is complete
  - accessibility spot checks are complete

## AI developer execution protocol

This section is specifically for an AI developer or agentic implementation workflow. It exists to prevent common failure patterns such as loops, framework misuse, unnecessary full-codebase rereads, and patching symptoms instead of root causes.

### Role selection and BMAD intent

- Select the most appropriate working role for the next blocking task, not a generic role for the whole project.
- Use the BMAD-style role mindset that best fits the immediate task:
  - analyst for discovery, scope checks, and gap analysis
  - architect for structural decisions, routing, and shared systems
  - UX/content role for IA, page composition, and editorial structure
  - developer for implementation
  - QA for validation, regression checks, and release readiness
- If multi-agent or delegated work is available, use specialist agents only when:
  - the current module is blocked
  - a specialized review is needed
  - a verification task can run in parallel without creating merge confusion
- Keep ownership explicit. One agent owns the current module outcome at a time.

### Sequential module discipline

- Build this project sequentially, module by module.
- Before proceeding from one module to the next, verify and validate the current module against its acceptance criteria.
- Do not treat "partially working" as good enough to move on.
- If a defect is discovered in the active module while implementing it, fix it before continuing unless it is explicitly documented as out of scope and approved.
- If a defect from an earlier module blocks the current module, return to the blocking module, fix it, re-verify it, and then continue.

### Context and cost discipline

- Do not reread the whole codebase or the whole content/data layer for every task.
- Start with targeted discovery:
  - search with `rg`
  - read only the relevant route, component, style, config, and data files for the current module
  - inspect schemas/types before reading large datasets
- Reuse the current module context summary instead of rescanning all files repeatedly.
- Do not read large data sources in full unless the current task truly depends on the full dataset.
- When a large dataset is involved:
  - inspect structure first
  - then read only the specific records/pages/assets needed for the current change
- Avoid repeated "full rebuild + full reread" cycles when a narrower verification step will answer the question.

### Error, warning, and vulnerability handling

- If and whenever encountering errors, warnings, vulnerabilities, broken links, failed checks, accessibility violations, missing assets, or console noise, address them until verified and validated as fixed.
- Treat these categories as real work items, not background noise:
  - syntax errors
  - framework misuse
  - build errors
  - runtime errors
  - console warnings
  - accessibility violations
  - broken routes or 404s
  - missing assets
  - dependency vulnerabilities
  - invalid metadata
  - failing tests
- Handle issues in this order:
  1. reproduce the issue reliably
  2. classify the issue type
  3. trace the root cause
  4. fix the root cause, not the nearest symptom
  5. verify the exact failure is gone
  6. verify adjacent pages/components did not regress
  7. add or improve tests/checks if the issue is likely to recur
- If a dependency warning or vulnerability appears:
  - determine whether it is build-time, runtime, direct, or transitive
  - prefer safe upgrades or replacements
  - rerun build/tests/accessibility checks after the change
- Do not leave known warnings in place just because the build still completes.

### Root-cause-first policy

- Do not patch around the visible symptom when the underlying contract is wrong.
- Fix examples like:
  - undefined Astro props by defining and destructuring props correctly
  - wrong templating syntax by rewriting to proper Astro syntax
  - broken styling by fixing the style system instead of per-page overrides
  - broken routing by fixing route design instead of hiding links
- If the same class of issue appears in multiple files, solve the pattern globally where appropriate.

### Loop-breaker protocol

- If the same problem persists after 3 materially different attempts, stop repeating the same pattern.
- If 20-30 minutes of effort has not produced a defensible next step, treat that as a loop condition.
- When in a loop:
  1. summarize what was attempted
  2. state what evidence was learned
  3. identify the most likely root cause categories
  4. consult the most relevant specialist role or agent
  5. choose the best proposed solution that still matches project intent and module acceptance criteria
- If multiple solutions are viable, choose the one that is:
  - simplest
  - reversible
  - easiest to verify
  - most aligned with the launch-ready objective
- If the decision changes product intent, legal posture, or external integrations, ask for human confirmation instead of guessing.

### Conflicting instruction resolution

- Resolve conflicts using this order of precedence:
  1. system and platform constraints
  2. developer instructions and repository rules
  3. this work order
  4. current module acceptance criteria
  5. explicit project intent from the project files
  6. existing code patterns
- If existing code patterns conflict with the product objective, refactor the pattern instead of copying it.
- If a local fix would violate the larger architecture, do the architectural fix.
- If instructions appear to conflict at the same level, prefer the path that produces the most reliable, accessible, launch-ready outcome with the least hidden debt.

### Astro-specific implementation guardrails

- Use Astro syntax exclusively. Never use `{{ }}`, `{% %}`, `{#each}`, or any other foreign templating syntax.
- All dynamic values must be valid JavaScript expressions inside `{}`.
- Always explicitly define and destructure props at the top of every `.astro` component:
  - `const { propName } = Astro.props;`
- Never reference variables that are not defined or destructured.
- When using layout components, ensure all required props are passed from the parent.
- For lists, use `.map()`.
- For conditional rendering, use JavaScript ternaries or logical operators.
- For class conditionals, use template literals or valid Astro expressions.
- Before finalizing Astro work, validate:
  1. no undefined variables
  2. no foreign templating syntax
  3. all props are accounted for
  4. build passes without transform/runtime errors
  5. output HTML is structurally valid
  6. component behavior is not relying on hidden side effects
  7. compatibility with Astro + Vite + Tailwind v4 is preserved

### Verification gate before moving to the next module

Before continuing from the current module to the next module, confirm all of the following:

- the current module's acceptance criteria are met
- `npm run build` passes
- relevant tests pass
- affected pages render correctly in browser review
- affected interactive features work
- no new console errors or unresolved warnings remain in the affected flows
- no broken internal links remain in the affected flows
- accessibility checks for the affected flows pass or have documented approved exceptions
- any new assets, routes, and metadata have been verified
- any unresolved follow-up items are explicitly documented

### Natural endpoint rule

- Continue implementation until a real stopping point is reached:
  - module complete
  - fixes verified
  - regressions checked
  - documentation updated if needed
- Do not stop at "analysis only" if the next correct step is implementation.
- Do not stop at "code written" if verification is still missing.

## Global non-developer instructions

These are the project-owner tasks required to unblock implementation.

- Provide final decisions on:
  - whether the root navigation must exactly match the original requested labels
  - which sections are allowed to be marked "coming soon" and which must be fully live now
  - whether newsletter signup is real or should be hidden until connected
  - whether product sales happen through Gumroad, PayPal, both, or neither for launch
  - what social links are official
- Provide or approve:
  - final logo and brand lockup
  - final photography, comic art, product covers, and preview images
  - final legal copy for privacy and terms
  - final contact email and contact workflow
  - final content edits for articles, product descriptions, crew guidance, and Red Rucker

## Module 01: Foundation and design system repair

### Goal

Restore the site's styling system so the website looks intentional, readable, and consistent in production.

### Plain-language instructions

- Fix the broken styling before doing any page redesign work.
- The site currently has colors, spacing, and typography defined in theory, but not connected properly in practice.
- The end result should look like one real product, not a collection of templates.

### Developer instructions

- Repair the global style pipeline.
- Make sure the design tokens are actually used in the compiled CSS.
- Ensure custom utility classes used throughout the templates are real and supported.
- Load the chosen production fonts properly.
- Remove or normalize styling conventions that are referenced but not actually implemented.
- Decide on one of these approaches and apply it consistently:
  - Tailwind-only classes with a proper theme/token mapping
  - CSS custom properties plus semantic utility classes
  - a hybrid approach, but only if it remains maintainable
- Fix these specific issues first:
  - connect `src/styles/tokens.css`
  - replace or define classes such as `bg-primary`, `text-primary`, `text-muted`, `bg-muted-50`, `bg-muted-200`, `rounded-border`, `btn`, and `btn-primary`
  - remove unused dark-mode classes if dark mode is not actually part of the product

### Likely files

- `src/styles/global.css`
- `src/styles/tokens.css`
- `src/components/Button.astro`
- `src/pages/style-guide.astro`
- any config needed for Tailwind/Astro style integration

### Approval checklist

- typography feels deliberate and readable
- red is used as an accent, not as uncontrolled decoration
- buttons, links, cards, form fields, and headings look consistent
- mobile and desktop both look designed, not merely functional

### Acceptance criteria

- the homepage and section pages render with correct spacing, typography, and colors in production build
- no broken or missing utility classes are present in rendered HTML
- the style guide reflects real production styles, not theoretical styles

## Module 02: Shared layout, header, footer, and navigation

### Goal

Make the shared shell of the site stable, consistent, and aligned with the platform structure.

### Plain-language instructions

- The top navigation and footer should explain the platform clearly.
- Users should always know where they are and where they can go next.
- The footer should contain real links and real contact information, not placeholders.

### Developer instructions

- Fix broken class interpolation in shared components.
- Refactor shared layout components so they produce valid HTML and reusable structure.
- Align root navigation with the approved simplified platform architecture:
  - Home
  - Learn
  - Train
  - Lead
  - Red Rucker
  - About
- Ensure the Digital Library remains directly discoverable without overloading the primary menu. Acceptable placements include:
  - the Learn overview page
  - homepage showcase sections
  - footer or utility navigation
  - a direct canonical library route
- Helper landing pages such as `/learn`, `/train`, and `/lead` are preferred as meaningful canonical overview pages, not temporary holding pages.
- Replace footer placeholders with real destinations.
- Make mobile navigation fully usable by keyboard and touch.

### Likely files

- `src/components/Layout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/Container.astro`
- `src/components/Card.astro`
- `src/data/site.ts`

### Approval checklist

- root menu labels match the product vision
- footer contains real legal, contact, and social information
- mobile menu opens, closes, and behaves correctly
- navigation highlights the current section properly

### Acceptance criteria

- no literal `{className}` or `{{ className }}` strings appear in output HTML
- no `#` links remain in shared navigation
- all shared pages use one consistent header/footer system

## Module 03: Information architecture and route alignment

### Goal

Make the URL structure and page structure match the intended knowledge platform.

### Plain-language instructions

- Every important menu item should lead to a meaningful page.
- No page should promise filtering, pagination, or detail pages that do not exist.
- The site map should reflect the original product structure, not a temporary internal grouping.
- The architecture should preserve the knowledge journey:
  - Learn
  - Train
  - Lead
  while still keeping library/storefront, routes, events, field notes, and manifesto pages easy to find.

### Developer instructions

- Audit all current routes and align them to the target architecture.
- Decide canonical URLs and apply them consistently.
- Remove or redirect routes that exist only because of the current temporary grouping.
- Preserve and integrate the strategic supporting routes:
  - `/why-rucking`
  - `/routes`
  - `/events`
  - `/field-notes`
- Decide and document the canonical treatment of library routes so monetization is visible and not buried.
- Reserve route space for `/gear` even if the page itself is deferred; do not allow the architecture to block it later.
- Fix broken internal links for:
  - article tags and pagination
  - workout detail pages
  - any route generated in templates without a real page implementation
- Add redirects or aliases only when they help preserve discoverability and avoid duplicate structures.

### Likely files

- `src/pages/**/*`
- `src/data/site.ts`
- any redirect or routing config used by Astro/Vercel

### Approval checklist

- menu map matches the intended platform
- no dead-end top-level pages remain
- no user can click into a missing page

### Acceptance criteria

- every internal link resolves successfully
- route tree reflects the intended section structure
- no feature advertises a route that has not been implemented

## Module 04: Homepage rebuild

### Goal

Turn the homepage into a real landing page for the entire platform.

### Plain-language instructions

- The homepage should immediately explain what Rucking Revolution is.
- It should guide visitors into the real lifecycle:
  - start rucking
  - learn the discipline
  - lead a crew
- It should also surface the broader platform pillars:
  - editorial learning
  - training doctrine
  - leadership/crew systems
  - library/storefront
  - Red Rucker
  - manifesto/why-rucking
  - field notes, routes, and events where relevant
- It should not contain placeholders or fake cards.

### Developer instructions

- Rebuild the homepage using real data and real links.
- Clarify homepage CTA hierarchy so the primary choices do not compete with each other unnecessarily.
- Implement the requested homepage sections:
  - Hero
  - Core Pillars
  - Latest Articles
  - Training Resources
  - Digital Library showcase
  - Red Rucker preview
  - optional featured manifesto, field note, route, or event callout if it improves platform orientation without clutter
  - optional Newsletter section only if functional or intentionally disabled
- Replace placeholder article cards with data-driven cards from the actual article source.
- Link resource cards to real target pages.
- Use a real hero image or approved fallback artwork.

### Likely files

- `src/pages/index.astro`
- `src/data/articles.ts`
- `src/data/products.ts`
- `src/data/comics.ts`

### Approval checklist

- homepage feels like a platform, not a template
- all homepage cards link somewhere real
- hero text matches the product positioning exactly

### Acceptance criteria

- no placeholder cards remain on the homepage
- all homepage CTAs resolve correctly
- homepage sections correspond to live platform sections

## Module 05: Articles and publishing system

### Goal

Make the article system into a credible publishing platform instead of a static demo.

### Plain-language instructions

- Article listing pages should be easy to browse.
- Article detail pages should read like finished editorial pages.
- Readers should see clean text, clear metadata, and useful related links.

### Developer instructions

- Fix the article index route so filtering and pagination work using a real routing strategy.
- Implement one real filtering approach:
  - query parameter filters, or
  - dynamic tag routes, or
  - both
- Render article body content properly. Do not output raw markdown into the page.
- Remove editorial TODOs from public article content.
- Add or integrate author metadata cleanly.
- Ensure related articles render correctly inside valid cards.
- Use valid share links and metadata.
- Ensure all article hero images referenced by data actually exist.

### Likely files

- `src/pages/articles/index.astro`
- `src/pages/articles/[slug].astro`
- `src/data/articles.ts`
- any markdown/content collection config if introduced

### Approval checklist

- article cards show image, title, excerpt, author, date, and reading time
- article pages feel finished and readable
- tags or filters work as expected

### Acceptance criteria

- no raw markdown is displayed to users
- no article body contains visible TODO text
- article metadata is valid and rendered in the page head
- all referenced article images exist

## Module 06: Training and Performance Kit

### Goal

Build a complete training section that works as a real instructional resource.

### Plain-language instructions

- Training should not be a placeholder page.
- The workout generator must actually generate workouts in the deployed site.
- Performance Kit pages must be instructional pages with real structure, not empty shells.
- Training pages should remain optimized for field use: large diagrams, short instructions, and low cognitive load.
- Do not reinvent the workout generator's underlying concept, scope, or output model in this module unless it is broken.

### Developer instructions

- Build a meaningful `Training` overview page.
- Move workout generation to a client-side interaction model or another deployment-safe architecture.
- Preserve the workout generator's existing role and avoid feature redesign beyond:
  - deployment-safe behavior
  - accessibility
  - navigation context
  - visual consistency
- Add sample workout detail pages if the UI links to them.
- Build or complete:
  - Training overview
  - Workout generator
  - Sample workouts
  - Programming principles
  - Performance Kit overview
  - Mobility Band upper body
  - Mobility Band lower body
  - Release Ball
  - Ankle Wrap
- Standardize exercise page structure:
  - exercise name
  - difficulty
  - equipment
  - target muscles
  - purpose
  - step-by-step instructions
  - common mistakes
  - progressions
  - approved image/video/diagram handling
- Replace media placeholders with real media or an intentional fallback component that clearly states "illustration coming soon" only if approved.

### Likely files

- `src/pages/train/index.astro`
- `src/pages/train/workouts/index.astro`
- `src/components/WorkoutGenerator.astro`
- `src/components/WorkoutGenerator.ts`
- `src/pages/train/performance-kit/**/*`
- `src/data/workouts.ts`
- `src/data/exercises.ts`

### Approval checklist

- workout generator works without page reload errors
- sample workout links open real pages
- exercise pages feel like usable instruction pages

### Acceptance criteria

- no broken workout detail links remain
- workout generator works in the deployed build
- performance kit pages contain real instructional structure

## Module 07: CrewTactics and Ruck Clubs

### Goal

Make the leadership and community sections useful, specific, and consistent with the platform promise.

### Plain-language instructions

- CrewTactics should feel like a practical leadership tool, not a rough demo.
- Ruck Clubs should clearly explain how to start and run a crew.
- Downloadable club resources are fine, but the pages themselves must also stand alone.
- Do not change what CrewTactics fundamentally is. Improve framing, navigation, accessibility, and presentation around the existing tool.

### Developer instructions

- Expand the CrewTactics overview into a proper section page:
  - concept
  - card categories
  - how to use
  - leader guidance
  - path to the generator
- Keep the generator concept and deck structure intact unless a later explicitly approved change request says otherwise.
- Keep the generator only if it is actually usable, keyboard accessible, and styled consistently.
- Expand Ruck Clubs into a real overview page covering:
  - what a ruck club is
  - why crews matter
  - core principles
  - leadership guidelines
  - resources
- Preserve the supporting pages:
  - Start a Club
  - Leadership Principles
  - Crew Culture
- Replace generic or thin copy with stronger, field-relevant guidance.

### Likely files

- `src/pages/lead/crew-tactics/index.astro`
- `src/pages/lead/crew-tactics/generator/index.astro`
- `src/components/CardGenerator.astro`
- `src/data/crewTactics.ts`
- `src/pages/lead/ruck-clubs/index.astro`
- `src/pages/lead/ruck-clubs/**/*`

### Approval checklist

- CrewTactics looks like a real toolset
- Ruck Clubs content reads as operational guidance, not filler
- downloads are optional enhancements, not a substitute for usable page content

### Acceptance criteria

- generator works with keyboard and touch
- no placeholder labels such as "Initializing..." remain visible after load
- Ruck Clubs overview and subpages are complete and internally linked

## Module 08: After Action Reviews system

### Goal

Make AAR content and submissions behave like a real section instead of a disconnected form.

### Plain-language instructions

- Visitors should understand what an AAR is, why it matters, and how to submit one.
- If public submission is enabled, submission must actually work.
- If public submission is not ready, the site must say so clearly and avoid offering a broken form.

### Developer instructions

- Build a real AAR overview page:
  - framework explanation
  - why crews should do AARs
  - reflection prompts
  - archive entry point
  - submission entry point
- Fix the form action and backend route mismatch.
- Decide the actual submission architecture:
  - Astro API route
  - serverless function
  - webhook
  - third-party form processor
- Add success and error states.
- Ensure archive pages and individual AAR pages feel like a coherent system.

### Likely files

- `src/pages/lead/after-action-reviews/index.astro`
- `src/pages/lead/after-action-reviews/submit/index.astro`
- `src/pages/lead/after-action-reviews/archive/index.astro`
- `src/pages/lead/after-action-reviews/[slug].astro`
- `src/pages/api/aar/post.ts`
- `src/data/aar.ts`

### Approval checklist

- AAR overview explains the practice clearly
- submission path either works or is intentionally disabled
- archive pages look connected to the rest of the site

### Acceptance criteria

- no form submits to a non-existent endpoint
- AAR section has overview, submit, and archive pages that all work
- public submission setting behaves correctly

## Module 09: Digital Library and storefront

### Goal

Turn the library/store section into a real storefront with valid assets and clear purchase behavior.

### Plain-language instructions

- The library should feel curated and trustworthy.
- Product pages should show what the item is, who it is for, and how to buy it.
- No product should appear live if its files, preview images, or payment links are fake or missing.
- The library must remain visibly monetizable and not be buried behind unclear navigation.
- If gear guidance is introduced here, it must be real and integrated with the library strategy, not a fake placeholder category.

### Developer instructions

- Add product categorization to support:
  - Books
  - Guides
  - Card Decks
  - Training Materials
  - Workout Packs
- Decide whether gear should live here as a library/buying-guide category, a standalone route, or both; whichever option is chosen must be explicit and non-placeholder.
- Rework the library landing page so it behaves like a store/library, not just a grid of cards.
- Fix product detail pages:
  - proper layout
  - real currency display
  - valid purchase buttons
  - real preview assets
  - clear product metadata
- Audit all product asset references.
- If downloadable files are not included in the repo, do not imply local download availability.
- If launch does not include direct downloads, point only to valid checkout/purchase destinations.

### Likely files

- `src/pages/library/index.astro`
- `src/pages/library/[slug].astro`
- `src/components/ProductCard.astro`
- `src/data/products.ts`
- `public/**/*` for asset verification

### Approval checklist

- each product is clearly categorized
- each product has a real image and a real purchase path
- the library page feels like a storefront, not a placeholder catalog

### Acceptance criteria

- no product references missing images or files
- all purchase links are valid and approved
- price display is correct and consistent

## Module 10: Red Rucker section

### Goal

Make Red Rucker a real content section, not just a page with a few images.

### Plain-language instructions

- Red Rucker should have an archive, episode pages, and clear reasons to read it.
- Each episode should connect back to the broader platform where relevant.

### Developer instructions

- Build or complete:
  - archive page
  - episode detail pages
  - supporting story/context page if required
- Standardize episode layout:
  - panel image(s)
  - short commentary
  - lesson takeaway
  - cross-reference when relevant
- Use real comic assets.
- Make sure the homepage preview pulls from the actual comic data.

### Likely files

- `src/pages/red-rucker/index.astro`
- `src/pages/red-rucker/[episode].astro`
- `src/data/comics.ts`
- comic assets in `src` or `public`

### Approval checklist

- archive is easy to browse
- episode pages feel intentional
- comic section looks like part of the platform, not an isolated experiment

### Acceptance criteria

- homepage preview links to a real episode or archive
- Red Rucker section contains real content structure
- no placeholder comic panel remains

## Module 11: Utility pages, footer content, and legal pages

### Goal

Replace the current stub pages with credible utility and trust-building pages.

### Plain-language instructions

- About, Contact, FAQ, Privacy, Terms, and Social are not optional filler.
- These pages help visitors trust the site and understand who it is for.

### Developer instructions

- Replace stub pages with real content structures.
- `About` should include:
  - Mission
  - Philosophy
  - The Movement
  - Contact
- `Contact` should include:
  - real email or form
  - response expectations
  - subject guidance if useful
- `FAQ` should answer real questions about rucking, community participation, products, and training resources.
- `Privacy` and `Terms` must contain approved final copy.
- `Social` should either:
  - list approved social links, or
  - be removed from navigation until accounts exist

### Likely files

- `src/pages/about/index.astro`
- `src/pages/contact/index.astro`
- `src/pages/faq/index.astro`
- `src/pages/privacy/index.astro`
- `src/pages/terms/index.astro`
- `src/pages/social/index.astro`
- `src/components/Footer.astro`

### Approval checklist

- utility pages feel complete and trustworthy
- footer matches the live utility pages
- legal text is final and approved

### Acceptance criteria

- no utility page remains as a one-paragraph placeholder
- footer links all resolve to real pages
- contact path is usable

## Module 12: SEO, accessibility, QA, and launch readiness

### Goal

Make the site shippable and keep it from regressing.

### Plain-language instructions

- This module makes sure the fixed site stays fixed.
- It covers search visibility, accessibility, testing, and release checks.

### Developer instructions

- Fix SEO architecture:
  - page titles
  - meta descriptions
  - canonical URLs
  - Open Graph
  - Twitter cards
  - JSON-LD where appropriate
- Remove page-specific meta tags from body content.
- Centralize metadata through `Layout` and `SEO`.
- Add or improve testing for:
  - route existence
  - internal link integrity
  - metadata presence
  - asset existence
  - generator behavior
  - form endpoint behavior where applicable
- Expand accessibility review:
  - heading hierarchy
  - alt text
  - keyboard access
  - focus states
  - color contrast
  - meaningful labels for form controls
- Keep the CI accessibility command working against a served site.
- Add a pre-launch manual review checklist.

### Likely files

- `src/components/Layout.astro`
- `src/components/SEO.astro`
- `.github/workflows/ci.yml`
- `test/**/*`
- any new QA helper scripts

### Approval checklist

- pages have correct titles and descriptions when shared or indexed
- navigation, forms, and interactive components work by keyboard
- automated checks cover the highest-risk failures

### Acceptance criteria

- no page ships with a blank title
- no page injects SEO tags inside the body content area
- build passes
- tests pass
- accessibility CI passes

## Required deliverables by the end of the work order

- a fully styled and coherent website build
- root navigation aligned with the intended platform structure
- no placeholder or dead-end primary pages
- working article system
- working training/workout behavior
- working or intentionally disabled AAR submission path
- valid digital library/storefront pages
- completed utility and trust pages
- passing build, tests, and accessibility checks

## Suggested implementation workflow

Use one branch per module or one PR per tightly related group of modules. Do not bundle the entire repair into one unreviewable change set.

Recommended PR grouping:

1. Foundation + shared layout
2. IA + homepage
3. Articles
4. Training + Performance Kit
5. CrewTactics + Ruck Clubs + AAR
6. Library + Red Rucker + utility pages
7. SEO + accessibility + QA hardening

## Final sign-off checklist

- design sign-off
- content sign-off
- legal sign-off
- link check complete
- mobile review complete
- accessibility review complete
- build and CI green
- launch approval given

## Appendix: Module sign-off sheets

Use this appendix as the mandatory gate before any module is marked complete.

Sign-off fields for every module:

- Implementation owner: Codex
- Reviewer: Pending
- Stakeholder approver: Pending
- Start date: 2026-03-17
- Completion date: Pending manual sign-off

### Module 01 sign-off sheet: Foundation and design system repair

- [x] Global style pipeline repaired
- [x] Tokens are connected to production styling
- [x] Custom utility classes used by templates are implemented or replaced
- [x] Production fonts are loaded correctly
- [x] No broken style classes remain in rendered output for affected pages
- [x] Homepage and section pages render correctly in the production build
- [x] Desktop visual review completed
- [x] Mobile visual review completed
- [x] `npm run build` passes
- [x] Relevant tests pass or approved test gap is documented
- [x] Console reviewed for errors and warnings in affected pages
- [x] Accessibility spot check completed for affected pages
- [ ] Stakeholder visual approval given

Module 01 gate notes:

- `npm run build` passes with no unresolved build warnings after the AAR endpoint handler correction.
- `npm test` passes: 1 test file, 5 tests.
- Production validation target for Module 01 is `https://www.ruckingrevolution.org/` on Vercel.
- Desktop and mobile screenshot review completed against the live custom-domain build with Playwright captures stored in `docs/qa/module-01/`.
- Production console/request-failure review is clean for `/`, `/articles/`, and `/style-guide/`.
- Accessibility spot check rerun with `npx axe` against `/`, `/articles/`, and `/style-guide/` now reports 0 violations on all three pages.
- Module 01 validation included a minimal `/articles/` section-page safeguard so missing article hero assets no longer emit production 404 noise during foundation validation. Broader editorial asset/content remediation remains owned by later modules.
- Formal module closure still requires stakeholder visual approval.

### Module 02 sign-off sheet: Shared layout, header, footer, and navigation

- [ ] Broken class interpolation fixed in shared components
- [ ] Header is consistent across the site
- [ ] Footer contains real links and real information
- [ ] Root navigation matches approved information architecture
- [ ] Mobile navigation works with touch and keyboard
- [ ] Current page highlighting works correctly
- [ ] No `#` placeholder links remain in shared navigation
- [ ] No literal `{className}` or `{{ className }}` appears in output HTML
- [ ] Desktop review completed
- [ ] Mobile review completed
- [ ] `npm run build` passes
- [ ] Relevant tests pass
- [ ] Accessibility spot check completed
- [ ] Stakeholder approval given

### Module 03 sign-off sheet: Information architecture and route alignment

- [ ] Canonical route structure approved
- [ ] All primary navigation destinations resolve successfully
- [ ] Broken internal links fixed
- [ ] Route aliases or redirects implemented where needed
- [ ] No promised feature links point to missing routes
- [ ] Dead-end top-level pages removed, redirected, or completed
- [ ] Link validation completed for affected areas
- [ ] `npm run build` passes
- [ ] Route verification tests pass or are documented as pending
- [ ] Reviewer approval given
- [ ] Stakeholder approval given

### Module 04 sign-off sheet: Homepage rebuild

- [ ] Hero section rebuilt with approved messaging
- [ ] Core pillars section reflects live platform sections
- [ ] Latest Articles uses real data
- [ ] Training Resources cards link to real destinations
- [ ] Digital Library showcase links to real products or categories
- [ ] Red Rucker preview links to real content
- [ ] Newsletter section is functional or intentionally disabled
- [ ] No homepage placeholders remain
- [ ] Desktop review completed
- [ ] Mobile review completed
- [ ] `npm run build` passes
- [ ] Accessibility spot check completed
- [ ] Stakeholder content/design approval given

### Module 05 sign-off sheet: Articles and publishing system

- [ ] Article index route works as designed
- [ ] Filtering works
- [ ] Pagination works or was intentionally removed
- [ ] Article cards show required metadata
- [ ] Article pages render formatted content, not raw markdown
- [ ] No public article body contains TODO text
- [ ] Related articles render correctly
- [ ] Share links work
- [ ] Article metadata appears correctly in the page head
- [ ] All referenced article assets exist
- [ ] Desktop review completed
- [ ] Mobile review completed
- [ ] `npm run build` passes
- [ ] Relevant tests pass
- [ ] Accessibility spot check completed
- [ ] Editorial approval given

### Module 06 sign-off sheet: Training and Performance Kit

- [ ] Training overview page is complete
- [ ] Workout generator works in deployed/static-safe architecture
- [ ] Sample workout detail links resolve
- [ ] Programming Principles page is complete
- [ ] Performance Kit overview is complete
- [ ] Mobility Band upper body pages are complete
- [ ] Mobility Band lower body pages are complete
- [ ] Release Ball page is complete
- [ ] Ankle Wrap page is complete
- [ ] Exercise pages follow approved instructional structure
- [ ] Media placeholders replaced or approved fallback treatment used
- [ ] Desktop review completed
- [ ] Mobile review completed
- [ ] `npm run build` passes
- [ ] Relevant tests pass
- [ ] Accessibility spot check completed
- [ ] Stakeholder approval given

### Module 07 sign-off sheet: CrewTactics and Ruck Clubs

- [ ] CrewTactics overview is complete
- [ ] CrewTactics generator works and is styled consistently
- [ ] Generator is keyboard accessible
- [ ] Generator is touch usable
- [ ] Ruck Clubs overview is complete
- [ ] Start a Club page is complete
- [ ] Leadership Principles page is complete
- [ ] Crew Culture page is complete
- [ ] Download resources are valid and present
- [ ] No placeholder interface labels remain after load
- [ ] Desktop review completed
- [ ] Mobile review completed
- [ ] `npm run build` passes
- [ ] Relevant tests pass
- [ ] Accessibility spot check completed
- [ ] Stakeholder approval given

### Module 08 sign-off sheet: After Action Reviews system

- [ ] AAR overview page is complete
- [ ] Submission path is functional or intentionally disabled
- [ ] Submission endpoint and form action align correctly
- [ ] Success state implemented
- [ ] Error state implemented
- [ ] Archive page is complete
- [ ] Individual AAR pages are complete
- [ ] Public submission setting behaves correctly
- [ ] No form posts to a missing endpoint
- [ ] Manual submission test completed
- [ ] `npm run build` passes
- [ ] Relevant tests pass
- [ ] Accessibility spot check completed
- [ ] Reviewer approval given
- [ ] Stakeholder approval given

### Module 09 sign-off sheet: Digital Library and storefront

- [ ] Product categories implemented
- [ ] Library landing page functions as a storefront/library
- [ ] Product detail layout is complete
- [ ] Currency display is correct
- [ ] Purchase links are valid
- [ ] Preview images are valid and present
- [ ] Referenced files/assets are valid and present
- [ ] No fake local download availability is implied
- [ ] Product metadata is complete
- [ ] Desktop review completed
- [ ] Mobile review completed
- [ ] `npm run build` passes
- [ ] Relevant tests pass
- [ ] Accessibility spot check completed
- [ ] Stakeholder approval given

### Module 10 sign-off sheet: Red Rucker section

- [ ] Archive page is complete
- [ ] Episode detail pages are complete
- [ ] Commentary and lesson takeaway are present where required
- [ ] Homepage preview is connected to real comic data
- [ ] Comic assets are present and render correctly
- [ ] Internal cross-links are valid
- [ ] Desktop review completed
- [ ] Mobile review completed
- [ ] `npm run build` passes
- [ ] Relevant tests pass
- [ ] Accessibility spot check completed
- [ ] Stakeholder approval given

### Module 11 sign-off sheet: Utility pages, footer content, and legal pages

- [ ] About page is complete
- [ ] Contact page is complete
- [ ] FAQ page is complete
- [ ] Privacy page contains approved legal copy
- [ ] Terms page contains approved legal copy
- [ ] Social page is complete or intentionally removed from navigation
- [ ] Footer links all resolve correctly
- [ ] Contact path works
- [ ] Desktop review completed
- [ ] Mobile review completed
- [ ] `npm run build` passes
- [ ] Relevant tests pass
- [ ] Accessibility spot check completed
- [ ] Legal approval given
- [ ] Stakeholder approval given

### Module 12 sign-off sheet: SEO, accessibility, QA, and launch readiness

- [ ] Titles are correct on all affected pages
- [ ] Meta descriptions are correct on all affected pages
- [ ] Canonical URLs are correct
- [ ] Open Graph metadata is correct
- [ ] Twitter card metadata is correct
- [ ] JSON-LD is correct where required
- [ ] No page injects SEO tags into body content
- [ ] Route verification checks pass
- [ ] Link integrity checks pass
- [ ] Asset existence checks pass
- [ ] Relevant component/feature tests pass
- [ ] Accessibility CI passes
- [ ] Manual keyboard navigation review completed
- [ ] Manual screen reader spot check completed
- [ ] Mobile review completed
- [ ] Desktop review completed
- [ ] `npm run build` passes
- [ ] Launch readiness review completed
- [ ] Final reviewer approval given
- [ ] Final stakeholder approval given

### Overall release sign-off sheet

- [ ] Modules 01-12 all marked complete
- [ ] No unresolved blockers remain
- [ ] No unresolved severity-high issues remain
- [ ] Approved follow-up items are documented separately from launch blockers
- [ ] Brand/design sign-off complete
- [ ] Editorial/content sign-off complete
- [ ] Legal sign-off complete
- [ ] Technical sign-off complete
- [ ] Accessibility sign-off complete
- [ ] Launch approval given

## Summary of incorporated guidance and completed work

Restored strategic guidance now explicitly preserved in this work order:

- Root navigation is defined around the simplified platform structure:
  - Home
  - Learn
  - Train
  - Lead
  - Red Rucker
  - About
- Digital Library discoverability is now protected even when grouped under `Learn`.
- The high-value platform pages `/why-rucking`, `/routes`, `/events`, and `/field-notes` are now explicitly treated as strategic architecture elements rather than optional extras.
- `/gear` is now accounted for as a planned section so later IA work does not block it.
- Training-page field usability and mobile-first behavior are now explicit requirements.
- Module 06 now explicitly forbids redesigning the Workout Generator beyond deployment safety, accessibility, navigation context, and visual consistency.
- Module 07 now explicitly forbids redesigning CrewTactics beyond framing, navigation context, accessibility, and visual consistency.

Implemented work completed so far:

- Module 01 foundation and design-system repair was executed in code.
- The live deployment path was corrected so Vercel builds from source instead of serving tracked `.vercel/output` artifacts.
- The custom domain `ruckingrevolution.org` is treated as the production validation target.
- Module 01 validation now includes:
  - production HTML/CSS verification
  - desktop and mobile screenshot review
  - console/request-failure review
  - accessibility spot checks
- Module 01 validation fixes completed in production:
  - article section pages now suppress broken thumbnail output when hero assets are missing
  - style-guide contrast issues found in production accessibility scans were corrected
  - desktop, mobile, console, and accessibility checks are now clean on the live custom domain
- Explicitly preserved for later modules:
  - do not redesign Workout Generator behavior or concept beyond navigation, accessibility, and visual framing
  - do not redesign CrewTactics behavior or concept beyond navigation, accessibility, and visual framing
  - keep Digital Library visible as a monetization surface within the approved information architecture
  - keep `/why-rucking`, `/routes`, `/events`, `/field-notes`, and planned `/gear` space in the platform roadmap
- Remaining post-Module-01 work must still be assigned to later owning modules instead of being lost:
  - shared footer placeholder social links and other global IA cleanup belong to Module 02 and Module 03
  - deeper editorial/media remediation beyond the section-page fallback belongs to Module 05
  - product/store completeness and asset quality belong to Module 09
