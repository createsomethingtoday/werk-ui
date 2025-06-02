# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Architecture Overview

This is a Next.js 15 landing page built with **Atomic Design principles**:

### Component Hierarchy
- **Atoms** (`components/atoms/`): Basic building blocks (Button, Typography, Logo, Icons, Link)
- **Molecules** (`components/molecules/`): Simple combinations (Navigation, ServiceCard, FeatureBlock, ProjectCard, FooterColumn, SlidePreview)
- **Organisms** (`components/organisms/`): Complex sections (Hero, About, Features, Services, Projects, Testimonial, CTA, Footer)
- **Templates** (`components/templates/`): Page layouts (LandingPage)

Each level has an `index.ts` file for clean imports.

### Key Technologies
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom Werk design tokens
- **Headless UI** for accessible components
- **Work Sans** font family (configured but layout.tsx still uses Geist fonts)

### Design System
Custom Tailwind configuration defines the Werk brand colors:
- `werk-black` (#1A1A1F)
- `werk-white` (#FFFFFF)  
- `werk-gray-*` variants
- `werk-accent` (#FEC483)

Custom typography scales with specific line heights and letter spacing.

### Utilities
- `lib/utils.ts`: Contains `cn()` helper for combining class names using clsx and tailwind-merge
- `lib/placeholders.ts`: Contains placeholder data for components

### Required Images
The app expects specific images in `public/images/`:
- `hero-bg.jpg`, `testimonial-bg.jpg`
- `vogue-preview.jpg`, `aesop-preview.jpg`
- `feature-1.jpg`, `feature-2.jpg`
- `project-1.jpg` through `project-4.jpg`

When adding new components, follow the atomic design structure and use the existing design tokens from `tailwind.config.ts`.