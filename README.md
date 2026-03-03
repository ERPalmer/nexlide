# Nexlide

A modern, lightweight, and fully customizable React carousel component built with **Framer Motion** for smooth animations and **Tailwind CSS** for flexible styling.

## Supports

- Autoplay with configurable interval
- Infinite loop
- Touch swipe gestures (mobile-friendly)
- Navigation arrows
- Pagination dots
- Multiple animation variants for slides and captions
- Fully customizable styles via className props
- Designed for seamless integration with **Next.js** (App Router) and any React project

## Features

- Smooth slide transitions (fade, slide left/right/top/bottom)
- Independent caption animations (title + description)
- Responsive design
- Lazy loading images
- ARIA accessible
- Dark mode compatible
- No external CSS import required (uses Tailwind classes inline)

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

Use `animation` for image slide transition and `captionAnimation` for title/description appearance.

| Value        | Image Slide Effect                     | Caption Effect                        |
|--------------|----------------------------------------|---------------------------------------|
| `fade`       | Smooth fade in/out                     | Smooth fade in/out                    |
| `fadeIn`     | Fade in only (no exit fade)            | Fade in only                          |
| `slideLeft`  | Enters from right, exits to left       | Enters from right, exits to left      |
| `slideRight` | Enters from left, exits to right       | Enters from left, exits to right      |
| `slideTop`   | Enters from bottom, exits to top       | Enters from bottom, exits to top      |
| `slideBottom`| Enters from top, exits to bottom       | Enters from top, exits to bottom      |


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