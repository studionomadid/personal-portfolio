# Code Wiki

## 1. Project Overview

This repository is a static personal portfolio site built with Astro, React, TypeScript, and Tailwind CSS.

The application is intentionally simple in shape:

- A single Astro page assembles the entire site.
- Content is stored locally in typed TypeScript modules.
- Most UI is rendered as static Astro components.
- Small interactive areas are implemented as React islands.
- Deployment targets GitHub Pages as a static build.

At a high level, this is a content-driven frontend project rather than a full-stack application. There is no backend API layer, no database integration in the page flow, and no routing complexity beyond the homepage.

## 2. Tech Stack

### Core Runtime

- Astro
- React
- TypeScript
- Tailwind CSS

### Supporting Libraries

- `@astrojs/react` for React island support
- `@astrojs/tailwind` for Tailwind integration
- `@astrojs/sitemap` for sitemap generation
- `firebase` for a prepared Firestore utility module
- `sharp` for Astro image/build support

### Tooling

- `pnpm` as the required package manager
- Node.js 20+
- Prettier with `prettier-plugin-astro`

## 3. Repository Structure

```text
/workspace
├── public/
│   ├── favicon.png
│   ├── og.image.png
│   ├── portfolio/
│   ├── fonts/
│   └── svg/
├── src/
│   ├── React/
│   │   ├── LetterGlitch.tsx
│   │   └── SkillsList.tsx
│   ├── components/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── experience.astro
│   │   ├── footer.astro
│   │   ├── home.astro
│   │   ├── logoWall.astro
│   │   ├── nav.astro
│   │   ├── projects.astro
│   │   └── whatsapp.astro
│   ├── data/
│   │   ├── about.ts
│   │   ├── experience.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── env.d.ts
│   └── firebase.ts
├── .github/
│   └── workflows/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## 4. Architecture

### 4.1 Architectural Style

The repository uses a layered static-site architecture:

1. Configuration layer
   - Astro, Tailwind, TypeScript, and package configuration.
2. Content layer
   - Typed TypeScript objects in `src/data`.
3. Presentation layer
   - Astro components in `src/components` and `src/layouts`.
4. Interactive island layer
   - React components in `src/React`, mounted only where client-side behavior is needed.
5. Asset layer
   - Static images, icons, fonts, and PDFs in `public`.

### 4.2 Composition Flow

```text
package.json scripts
        ↓
src/pages/index.astro
        ↓
src/layouts/Layout.astro
        ↓
Astro section components
  ├── nav.astro
  ├── home.astro
  │    ├── logoWall.astro
  │    ├── SkillsList.tsx
  │    └── LetterGlitch.tsx
  ├── about.astro
  ├── experience.astro
  ├── projects.astro
  ├── contact.astro
  └── footer.astro
        ↓
typed content from src/data/*
        ↓
static build output for GitHub Pages
```

### 4.3 Rendering Model

- Astro renders the page shell and section markup at build time.
- React is used only for client-side interactive widgets.
- Inline scripts in Astro components handle lightweight DOM behavior such as menu toggling, active section highlighting, and contact form submission.
- Most displayed content comes from local TypeScript data exports, not remote APIs.

## 5. Configuration And Build Layer

### `package.json`

Responsibilities:

- Declares dependencies and dev dependencies.
- Defines project scripts.
- Enforces `pnpm` usage with `only-allow`.
- Declares required Node and pnpm versions.

Key scripts:

- `pnpm dev` runs Astro in development mode.
- `pnpm start` is an alias for development mode.
- `pnpm build` runs `astro check` and then creates the production build.
- `pnpm preview` serves the built output locally.

### `astro.config.mjs`

Responsibilities:

- Sets the public site URL and GitHub Pages base path.
- Enables the React, Tailwind, and sitemap integrations.
- Defines Vite path aliases:
  - `@` -> `/src`
  - `@components` -> `/src/components`
- Configures static output.
- Sets the local dev server host and port.

Important implication:

Because `base` is set to `/personal-portfolio`, any asset or internal path generation must remain compatible with GitHub Pages subpath deployment.

### `tailwind.config.mjs`

Responsibilities:

- Scans source files for class usage.
- Extends the theme with custom keyframes and animation names.

Current custom animations:

- `scale`
- `heart-pulse`

### `.github/workflows/deploy.yml`

Responsibilities:

- Builds and deploys the static Astro site to GitHub Pages.

## 6. Runtime Entry Points

### `src/pages/index.astro`

This is the only route entry point in the repository.

Responsibilities:

- Imports the shared layout.
- Imports all page sections.
- Defines the homepage section order:
  - Navigation
  - Home
  - About
  - Experience
  - Projects
  - Contact
  - Footer

This file acts as the application composition root.

### `src/layouts/Layout.astro`

This is the shared HTML document wrapper.

Responsibilities:

- Accepts `title` and optional `description` props.
- Builds canonical, Open Graph, and Twitter metadata.
- Loads favicon and font URLs relative to `Astro.site`.
- Injects structured data for `Person` and `WebSite`.
- Defines global CSS variables and browser scrollbar styling.
- Renders the page body slot.
- Mounts the persistent `WhatsApp` floating action.

This file is the project's shell and SEO boundary.

## 7. Major Modules

### `src/components/nav.astro`

Responsibilities:

- Defines the site section navigation items.
- Renders desktop and mobile nav UIs.
- Toggles the mobile menu with an inline DOM script.
- Tracks the active section using `IntersectionObserver`.

Key behavior:

- The `navItems` array is the single source of truth for navigation links.
- Active link styling is computed from section IDs already present in the page.

### `src/components/home.astro`

Responsibilities:

- Renders the hero area.
- Displays the profile introduction from `profile`.
- Includes calls to action for project and contact sections.
- Embeds the `LogoWall` marquee.
- Mounts the `SkillsList` and `LetterGlitch` React islands.

This component is the main bridge between static Astro rendering and interactive React components.

### `src/components/logoWall.astro`

Responsibilities:

- Defines the list of technology icon names.
- Renders a continuously scrolling logo strip.
- Duplicates the list in markup to create an infinite marquee effect.
- Applies global keyframe animation for horizontal scrolling.

### `src/components/about.astro`

Responsibilities:

- Renders the About section using the `about` data object.
- Displays the title, introduction, expertise cards, philosophy, direction, and current focus.

This module is a pure presentation layer over static content.

### `src/components/experience.astro`

Responsibilities:

- Renders the career timeline from `experiences`.
- Visually marks the current role when `experience.current` is true.
- Presents role, company, period, location, and description in a timeline card layout.

### `src/components/projects.astro`

Responsibilities:

- Imports and renders the project catalog from `projects`.
- Maps internal project types to UI labels with `projectTypeLabel`.
- Shows metadata, highlights, stack tags, optional client info, optional case study content, and optional document links.
- Builds safe document URLs relative to `import.meta.env.BASE_URL`.

This is the richest content component in the application and the most structurally complex Astro module.

### `src/components/contact.astro`

Responsibilities:

- Renders the contact section and HTML form.
- Posts submissions to Formspree.
- Handles submit state client-side with an inline script.
- Hides the form and displays a success message after a successful submission.

Important note:

- This is the only live external submission flow in the visible app.
- It is not backed by an internal API route.

### `src/components/footer.astro`

Responsibilities:

- Renders social/contact links.
- Shows the high-level stack summary.
- Uses `import.meta.env.BASE_URL` for icon paths.
- Displays the current year dynamically.

### `src/components/whatsapp.astro`

Responsibilities:

- Creates a floating WhatsApp contact button.
- Derives the destination URL from the configured WhatsApp number.
- Provides responsive behavior and reduced-motion handling through component-local CSS.

## 8. React Islands

### `src/React/SkillsList.tsx`

Responsibilities:

- Renders an accordion-style list of skill categories.
- Imports content from `skillCategories`.
- Manages open/closed state with React `useState`.

Key symbols:

- `CategoryIcons`
  - A lookup object mapping skill category names to SVG icons.
- `toggleItem(item: string)`
  - Opens the clicked category or collapses it if already open.
- `SkillsList`
  - The exported React component used by `home.astro`.

Dependency notes:

- The component depends on category names matching the `CategoryIcons` keys.
- If a new category is added in `src/data/skills.ts` without an icon entry here, the icon slot will be empty.

### `src/React/LetterGlitch.tsx`

Responsibilities:

- Draws an animated text-based glitch effect on a `<canvas>`.
- Resizes itself based on the parent container.
- Continuously mutates characters and colors over time.
- Supports optional outer and center vignette overlays.

Key symbols:

- `getRandomChar()`
  - Selects a glyph from the predefined alphanumeric/symbol pool.
- `getRandomColor()`
  - Selects a color from the `glitchColors` prop.
- `hexToRgb(hex)`
  - Converts a hex color string into RGB components.
- `interpolateColor(start, end, factor)`
  - Blends between two colors for smooth transitions.
- `calculateGrid(width, height)`
  - Computes the grid dimensions for the canvas.
- `initializeLetters(columns, rows)`
  - Seeds the internal letter buffer.
- `resizeCanvas()`
  - Handles device-pixel-ratio-aware canvas sizing and reinitialization.
- `drawLetters()`
  - Paints the current character buffer onto the canvas.
- `updateLetters()`
  - Randomly changes a subset of characters and target colors.
- `handleSmoothTransitions()`
  - Advances in-progress color transitions and redraws when needed.
- `animate()`
  - Main animation loop driven by `requestAnimationFrame`.

Operational note:

- This module contains the highest concentration of imperative logic in the repository.

## 9. Data Layer

The `src/data` directory functions as a lightweight in-repo content store. Each file defines TypeScript interfaces plus exported constant data consumed by Astro and React UI modules.

### `src/data/profile.ts`

Exports:

- `Profile`
- `profile`

Responsibilities:

- Provides personal identity and summary fields for the hero section.

Used by:

- `src/components/home.astro`

### `src/data/about.ts`

Exports:

- `AboutExpertise`
- `About`
- `about`

Responsibilities:

- Provides the About page copy and expertise card content.

Used by:

- `src/components/about.astro`

### `src/data/experience.ts`

Exports:

- `Experience`
- `experiences`

Responsibilities:

- Stores the work history timeline records.

Used by:

- `src/components/experience.astro`

### `src/data/projects.ts`

Exports:

- `ProjectType`
- `ProjectDocument`
- `CaseStudy`
- `Project`
- `projects`

Responsibilities:

- Defines the shape of the project catalog.
- Supports optional document attachments and optional case-study detail blocks.
- Drives nearly all rendering inside the Projects section.

Used by:

- `src/components/projects.astro`

### `src/data/skills.ts`

Exports:

- `SkillCategory`
- `skillCategories`

Responsibilities:

- Defines the skill taxonomy used by the skills accordion.

Used by:

- `src/React/SkillsList.tsx`

## 10. Utility And Integration Modules

### `src/firebase.ts`

Responsibilities:

- Initializes a Firebase app from environment variables.
- Exports a Firestore instance as `db`.

Current status:

- Present as a utility module.
- Not referenced by the homepage route or the visible UI components.

Implication:

- This is either planned for future use or retained from earlier development work.

Required environment variables if used:

- `FIREBASE_API_KEY`
- `PUBLIC_FIREBASE_AUTH_DOMAIN`
- `PUBLIC_FIREBASE_PROJECT_ID`
- `PUBLIC_FIREBASE_STORAGE_BUCKET`
- `PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `PUBLIC_FIREBASE_APP_ID`

## 11. Dependency Relationships

### 11.1 Module Dependency Map

```text
src/pages/index.astro
├── src/layouts/Layout.astro
│   └── src/components/whatsapp.astro
├── src/components/nav.astro
├── src/components/home.astro
│   ├── src/data/profile.ts
│   ├── src/components/logoWall.astro
│   ├── src/React/SkillsList.tsx
│   │   └── src/data/skills.ts
│   └── src/React/LetterGlitch.tsx
├── src/components/about.astro
│   └── src/data/about.ts
├── src/components/experience.astro
│   └── src/data/experience.ts
├── src/components/projects.astro
│   └── src/data/projects.ts
├── src/components/contact.astro
└── src/components/footer.astro
```

### 11.2 External Dependency Use

- Astro provides page, layout, build, and static generation behavior.
- React powers `SkillsList` and `LetterGlitch`.
- Tailwind supplies utility-first styling.
- Formspree handles contact form submission.
- Firebase is initialized in a utility module but not used in the active page flow.
- GitHub Pages is the deployment target.

### 11.3 Data Dependency Pattern

The application follows a simple content-to-view pattern:

```text
typed data module -> Astro/React component -> rendered section
```

This keeps business logic minimal and makes content updates straightforward.

## 12. Key Symbols Index

### Astro Components

- `Layout`
  - Global document shell and metadata manager.
- `Nav`
  - Fixed navigation with section-aware highlighting.
- `Home`
  - Hero section and interactive landing composition.
- `LogoWall`
  - Scrolling technology marquee.
- `About`
  - About section renderer.
- `Experience`
  - Experience timeline renderer.
- `Projects`
  - Project and case-study renderer.
- `Contact`
  - External contact submission UI.
- `Footer`
  - Footer links and stack summary.
- `WhatsApp`
  - Floating quick-contact widget.

### React Components

- `SkillsList`
  - Accordion-based skill viewer.
- `LetterGlitch`
  - Canvas-based animated background effect.

### Type Definitions

- `Profile`
- `AboutExpertise`
- `About`
- `Experience`
- `ProjectType`
- `ProjectDocument`
- `CaseStudy`
- `Project`
- `SkillCategory`

### Important Helper Functions

- `toggleItem`
  - Accordion state switcher in `SkillsList`.
- `getRandomChar`
  - Random glyph generator in `LetterGlitch`.
- `getRandomColor`
  - Random palette selector in `LetterGlitch`.
- `hexToRgb`
  - Hex-to-RGB converter in `LetterGlitch`.
- `interpolateColor`
  - RGB interpolator in `LetterGlitch`.
- `calculateGrid`
  - Character grid calculator in `LetterGlitch`.
- `initializeLetters`
  - Buffer initializer in `LetterGlitch`.
- `resizeCanvas`
  - Canvas resize handler in `LetterGlitch`.
- `drawLetters`
  - Canvas rendering function in `LetterGlitch`.
- `updateLetters`
  - Mutation step in `LetterGlitch`.
- `handleSmoothTransitions`
  - Color transition updater in `LetterGlitch`.
- `animate`
  - Frame loop in `LetterGlitch`.

## 13. Running The Project

### Requirements

- Node.js `>=20`
- pnpm `>=9`

### Install

```bash
pnpm install
```

### Start Local Development

```bash
pnpm dev
```

or

```bash
pnpm start
```

Default local dev server:

- `http://localhost:4321`

### Type Check And Build

```bash
pnpm build
```

This runs:

1. `astro check`
2. `astro build`

### Preview Production Output

```bash
pnpm preview
```

### Direct Astro CLI Access

```bash
pnpm astro
```

## 14. Deployment

Deployment is configured for GitHub Pages.

Important deployment details:

- `site` is set to `https://studionomadid.github.io/personal-portfolio/`
- `base` is set to `/personal-portfolio`
- Asset and document links use `import.meta.env.BASE_URL` where required

When changing deployment target:

- Update `site` and `base` in `astro.config.mjs`
- Review any asset URL generation that assumes GitHub Pages pathing

## 15. Operational Notes And Caveats

### Contact Flow

- The contact form posts directly to Formspree.
- There is no internal validation or API route beyond the browser-side script.

### Firebase

- Firebase is configured but not used in the visible site flow.
- Missing environment variables will matter only if this module becomes imported at runtime.

### Testing

- The repository does not currently define a `test` script.
- There is no visible automated test suite in the project root.

### Architecture Scope

- This is effectively a single-page portfolio app.
- Most future feature growth will likely happen by:
  - adding new sections,
  - extending `src/data`,
  - or introducing additional React islands.

## 16. Suggested Maintenance Rules

To keep the current structure coherent:

1. Keep static content in `src/data` instead of hardcoding large text blocks directly in components.
2. Reserve React for components that genuinely need client-side state or animation.
3. Use `import.meta.env.BASE_URL` for public assets that must work under the GitHub Pages subpath.
4. Keep SEO and document-level metadata centralized in `Layout.astro`.
5. If Firebase becomes active, document its feature ownership and wire it through clearly named service or data-access modules.

## 17. Quick Orientation For New Contributors

If you are new to the repository, read files in this order:

1. `package.json`
2. `astro.config.mjs`
3. `src/pages/index.astro`
4. `src/layouts/Layout.astro`
5. `src/components/home.astro`
6. `src/components/projects.astro`
7. `src/data/projects.ts`
8. `src/React/SkillsList.tsx`
9. `src/React/LetterGlitch.tsx`

That sequence gives the fastest understanding of how the site is configured, assembled, and populated with content.
