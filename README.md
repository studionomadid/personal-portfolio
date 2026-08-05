# Lauren Surya — Personal Portfolio

A personal portfolio website for **Lauren Surya**, showcasing professional experience, selected projects, technical capabilities, and digital work.

This portfolio is built as a modern, responsive, and interactive web experience focused on technology, software engineering, systems, data, cybersecurity, and digital experiences.

## Live Website

**Portfolio:**

https://studionomadid.github.io/personal-portfolio/

## About

This repository contains the source code for Lauren Surya's personal portfolio website.

The portfolio brings together:

- Professional profile
- Work experience
- Selected projects
- Technical skills
- Technology ecosystem
- Professional and freelance work
- Contact information

## Features

- Responsive portfolio layout
- Modern dark visual interface
- Interactive UI components
- Animated visual effects
- Project showcase
- Professional experience section
- Technology and skills presentation
- Contact section
- Floating WhatsApp contact button
- Social sharing metadata
- Open Graph metadata
- Twitter/X metadata
- GitHub Pages deployment
- Static site generation with Astro

## Tech Stack

### Frontend

- Astro
- React
- TypeScript
- Tailwind CSS

### UI & Visual Experience

- React components
- LetterGlitch visual effect
- Responsive layouts
- CSS animations and transitions
- SVG-based technology icons

### Development Tools

- Node.js
- pnpm
- Git
- GitHub
- VS Code

### Deployment

- GitHub Pages

## Project Structure

```text
personal-portfolio/
├── public/
│   ├── favicon.png
│   ├── og.image.png
│   ├── fonts/
│   └── svg/
│
├── src/
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
│   │
│   ├── data/
│   │   ├── about.ts
│   │   ├── experience.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   ├── React/
│   │   ├── LetterGlitch.tsx
│   │   └── SkillsList.tsx
│   │
│   ├── env.d.ts
│   └── firebase.ts
│
├── .github/
│   ├── dependabot.yml
│   └── workflows/
│       ├── automerge.yml
│       └── deploy.yml
│
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── LICENSE
└── README.md