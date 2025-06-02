# Werk UI Kit Landing Page

A modern, responsive landing page built with Next.js 15, TypeScript, Tailwind CSS, and Headless UI using Atomic Design principles.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom design tokens
- **Headless UI** for accessible components
- **Atomic Design** methodology (atoms, molecules, organisms, templates)
- **Work Sans** typography matching the Figma design
- **Responsive design** optimized for all devices
- **Performance optimized** with Next.js Image component

## 🎨 Design System

Based on the Werk UI Kit Figma design with:

### Colors
- Primary Black: `#1A1A1F`
- White: `#FFFFFF`
- Gray variants: `#F8F8F8`, `#D1D1D2`, `#5F5F62`
- Accent Yellow: `#FEC483`

### Typography
- Font Family: Work Sans (400, 600 weights)
- Responsive text sizes with proper line heights
- Custom letter spacing for headings

### Components
- Atomic design structure for maximum reusability
- Headless UI for accessibility
- Consistent spacing and layout system

## 🏗️ Project Structure

```
components/
├── atoms/          # Basic building blocks
│   ├── Button.tsx
│   ├── Logo.tsx
│   ├── Typography.tsx
│   ├── Link.tsx
│   └── Icons.tsx
├── molecules/      # Combinations of atoms
│   ├── Navigation.tsx
│   ├── ServiceCard.tsx
│   ├── FeatureBlock.tsx
│   ├── ProjectCard.tsx
│   └── FooterColumn.tsx
├── organisms/      # Complex UI sections
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── Testimonial.tsx
│   ├── Projects.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── templates/      # Page layouts
    └── LandingPage.tsx
```

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add images:**
   Place the following images in `public/images/`:
   - `hero-bg.jpg` - Hero background image
   - `vogue-preview.jpg` - Vogue project preview
   - `aesop-preview.jpg` - Aesop project preview
   - `feature-1.jpg` - First feature image
   - `feature-2.jpg` - Second feature image
   - `testimonial-bg.jpg` - Testimonial background
   - `project-1.jpg` through `project-4.jpg` - Project images

3. **Run the development server:**
   ```bash
   npm run dev -- --turbo
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1280px+

## 🎯 Key Sections

1. **Hero** - Full-screen hero with navigation and featured work preview
2. **About** - Company introduction with two-column text
3. **Features** - Alternating image/text sections highlighting principles
4. **Testimonial** - Split layout with image and quote
5. **Projects** - Grid showcase of recent work
6. **Services** - Dark section with service offerings
7. **CTA** - Call-to-action with contact information
8. **Footer** - Multi-column footer with links and social icons

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts` under the `werk` color palette.

### Typography
Modify typography settings in `tailwind.config.ts` and `app/globals.css`.

### Components
All components are built with atomic design principles, making them easily customizable and reusable.

## 📄 License

This project is built for demonstration purposes based on the Werk UI Kit design.
