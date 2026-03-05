![Nexlide Logo](https://nexlide.netlify.app/assets/logo-full.png)

[![GitHub](https://img.shields.io/badge/GitHub-000000?style=flat-square&logo=github&logoColor=white)](https://github.com/ERPalmer/nexlide)
[![npm version](https://img.shields.io/npm/v/nexlide?style=flat-square&logo=npm&logoColor=white&color=CB3837)](https://www.npmjs.com/package/nexlide)
[![npm downloads](https://img.shields.io/npm/dm/nexlide?style=flat-square&logo=npm&logoColor=white&color=0baa45)](https://www.npmjs.com/package/nexlide)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-58c4dc?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-00bcff?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-EF5DA8?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

# Nexlide

A modern, lightweight, and fully customizable React carousel component built with **Framer Motion** for smooth animations and **Tailwind CSS** for flexible styling.

## Features

- Smooth slide transitions (fade, slide left/right/top/bottom)
- Independent caption animations (title + description)
- Responsive design
- Lazy loading images
- ARIA accessible
- Dark mode compatible
- No external CSS import required (uses Tailwind classes inline)
- Others in development process

## Supports

- Autoplay with configurable interval
- Infinite loop
- Touch swipe gestures (mobile-friendly)
- Navigation arrows
- Pagination dots
- Multiple animation variants for slides and captions
- Fully customizable styles via className props
- Designed for seamless integration with **Next.js** (App Router) and any React project

## Installation

```bash
npm install nexlide
# or
yarn add nexlide
# or
pnpm add nexlide
```

## Peer Dependencies

These dependencies are usually already present in React/Next.js projects:

- react, react-dom
- framer-motion
- clsx, tailwind-merge, class-variance-authority

## Usage (Next.js App Router)

The component is a **Client Component** — you **must** use it inside a file that starts with `'use client';`

```tsx
'use client'  // ← Required in Next.js App Router

import { Carousel } from 'nexlide'

const slides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    title: 'Mountain View',
    description: 'Breathtaking sunset over the peaks'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Tropical Beach',
    description: 'Crystal clear waters and white sand'
  },
  // add more...
]

export default function MyPage() {
  return (
    <div className="p-8">
      <Carousel
        items={slides}
        autoPlay
        autoPlayInterval={5000}
        showPagination
        showArrows
        infiniteLoop
        animation="slideLeft"
        captionAnimation="fade"
        className="rounded-2xl shadow-2xl"
      />
    </div>
  )
}
```

## Available Animations

Use `animation` for the image slide transition and `captionAnimation` for the title + description appearance.

| Value        | Image Slide Effect                                      | Caption Effect                                          |
|--------------|---------------------------------------------------------|---------------------------------------------------------|
| `bounce`     | Bounces in from below with elastic easing               | Bounces in from below with playful elastic effect       |
| `fade`       | Smooth fade in / fade out                               | Smooth fade in / fade out                               |
| `fadeIn`     | Fade in only (no exit fade)                             | Fade in only (no exit fade)                             |
| `flip`       | Flips in like a card turning (horizontal axis)          | Flips in like a card turning (horizontal axis)          |
| `slideLeft`  | Enters from right, exits to left                        | Enters from right, exits to left                        |
| `slideRight` | Enters from left, exits to right                        | Enters from left, exits to right                        |
| `slideTop`   | Enters from bottom, exits to top                        | Enters from bottom, exits to top                        |
| `slideBottom`| Enters from top, exits to bottom                        | Enters from top, exits to bottom                        |
| `zoomIn`     | Zooms in from small to full size                        | Zooms in from small to full size                        |
| `zoomOut`    | Zooms out from large to normal size                     | Zooms out from large to normal size                     |

All animations use smooth easing curves and can be combined freely (e.g., slideLeft for image + bounce for caption). Adjust timing with `captionDelay` prop if needed.

## Props

| Prop                | Type                                                                 | Default       | Description                                                                 |
|---------------------|----------------------------------------------------------------------|---------------|-----------------------------------------------------------------------------|
| `items`             | `CarouselItem[]`                                                     | —             | **Required**. Array of slides: `{ imageUrl: string, title: string, description: string }` |
| `autoPlay`          | `boolean`                                                            | `false`       | Enable automatic slide transition                                           |
| `autoPlayInterval`  | `number`                                                             | `3000`        | Time (ms) between slides when autoPlay is true                              |
| `showPagination`    | `boolean`                                                            | `true`        | Show pagination dots                                                        |
| `showArrows`        | `boolean`                                                            | `true`        | Show previous/next arrows                                                   |
| `infiniteLoop`      | `boolean`                                                            | `true`        | Enable infinite looping                                                     |
| `className`         | `string`                                                             | —             | Custom Tailwind classes for main container                                  |
| `slideClassName`    | `string`                                                             | —             | Custom classes for each slide wrapper                                       |
| `captionClassName`  | `string`                                                             | —             | Custom classes for caption (title + description)                            |
| `arrowClassName`    | `string`                                                             | —             | Custom classes for navigation arrows                                        |
| `paginationClassName`| `string`                                                            | —             | Custom classes for pagination container                                     |
| `dotClassName`      | `string`                                                             | —             | Custom classes for each pagination dot                                      |
| `animation`         | `"bounce" \| "fade" \| "fadeIn" \| "flip" \|  "slideLeft" \| "slideRight" \| "slideTop" \| "slideBottom" \| "zoomIn" \| "zoomOut"` | `"slideLeft"` | Animation for image slide transition                                        |
| `captionAnimation`  | `"bounce" \| "fade" \| "fadeIn" \| "flip" \|  "slideLeft" \| "slideRight" \| "slideTop" \| "slideBottom" \| "zoomIn" \| "zoomOut"` | `"fade"`      | Animation for caption appearance                                            |
 `captionDelay`    | `number`                                                            | `0.5`        | Custom delay time in seconds                                                |


## Development

```bash
# Clone repo
git clone https://github.com/ERPalmer/nexlide.git
cd nexlide

# Install dependencies
npm install

# Build package
npm run build

# Test locally (from another project)
npm pack
# Then in your test project: npm install ../nexlide/nexlide-1.0.0.tgz
```

## License

MIT License. See LICENSE for details.