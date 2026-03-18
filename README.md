<p align="center">
  <img src="https://nexlide.netlify.app/assets/logo-full.png" width="420"/>
</p>

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

## ✨ Features

### Core
- **Smooth slide transitions** with 10+ animation variants (fade, slide, zoom, bounce, flip)
- **Independent caption animations** with customizable delay (0.5s default) and duration (0.8s default)
- **Full RTL support** 🌐 — mirrored navigation, reversed swipe, and proper layout for Arabic, Hebrew, Persian, and other RTL languages
- **Intelligent autoplay system** with direction control (`forward` | `reverse`) and smart pause behaviors
- **Advanced touch/swipe gestures** with Framer Motion — inertia scrolling and elastic snap-back
- **Accessibility first** — ARIA labels, keyboard navigation, visible focus rings
- **Performance optimized** — lazy loading, image optimizations (`decoding="async"`, `draggable=false`), clean event cleanup
- **Responsive design** with aspect ratio preservation (default 4:3, fully customizable)
- **Dark mode compatible** by default
- **Zero CSS imports** — uses Tailwind classes inline
- **Next.js App Router ready** with `'use client'` directive

### 🆕 What's New in v1.1.0

#### Enhanced Autoplay Control
- **`autoPlayDirection`** — Choose between `"forward"` (next slide) or `"reverse"` (previous slide) for autoplay progression
- **Smart pause triggers** — All default to `true` for optimal UX:
  - `pauseOnHover` — Pauses when mouse enters the carousel
  - `pauseOnFocus` — Pauses when carousel receives keyboard focus
  - `pauseOnDrag` — Pauses during active swipe/drag interactions
- **Tab visibility awareness** — Autoplay automatically pauses when the page/tab is hidden and resumes when visible

#### Complete RTL Support
- **`rtl` prop** — Enables full right-to-left mode with:
  - Reversed swipe/drag direction (swipe left → next slide)
  - Swapped navigation arrow positions and functions
  - Default animation switches to `slideRight` (if not overridden)
  - `dir="rtl"` attribute applied to root container
  - Proper ARIA labels for arrows in RTL context
  - Mirror-friendly pagination dots

#### Refined Animation System
- **`captionDuration`** — Fine-tune caption animation speed (default: `0.8` seconds)
- **Independent direction handling** — Slide animations automatically respect RTL and autoplay direction
- **Improved transition logic** — Better wrapping in infinite loop mode

#### Advanced Interaction
- **Framer Motion drag enhancements** — Inertia-based scrolling with elastic snap-back
- **Touch-optimized** — Removed legacy touch handlers for cleaner, more performant code
- **Visual polish** — Improved focus outlines and pointer-events handling

## 🧩 Supports

### Navigation & Controls
| Feature | Description |
|---------|-------------|
| ⬅️➡️ **Navigation arrows** | Fully customizable via `arrowClassName` |
| 🔘 **Pagination dots** | Active states with smooth transitions |
| ⌨️ **Keyboard navigation** | Arrow keys (auto-adapts to RTL) |
| 👆 **Touch swipe gestures** | Momentum-based with elastic snap-back |
| 🖱️ **Drag to slide** | Desktop support with spring physics |
| ♾️ **Infinite loop** | Seamless wrapping from last to first |

### Autoplay System
| Feature | Options | Default |
|---------|---------|---------|
| ⏯️ **Interval control** | `autoPlayInterval` (ms) | `3000` |
| 🔄 **Direction control** 🆕 | `"forward"` \| `"reverse"` | `"forward"` |
| ⏸️ **Pause on hover** 🆕 | `pauseOnHover` | `true` |
| ⏸️ **Pause on focus** 🆕 | `pauseOnFocus` | `true` |
| ⏸️ **Pause on drag** 🆕 | `pauseOnDrag` | `true` |
| 📱 **Tab visibility** | Auto-pauses when hidden | Built-in |

### Animation Library

#### Slide Animations (`animation` prop)
| Value | Effect |
|-------|--------|
| `slideLeft` | Enters from right, exits to left |
| `slideRight` | Enters from left, exits to right |
| `slideTop` | Enters from bottom, exits to top |
| `slideBottom` | Enters from top, exits to bottom |
| `fade` | Smooth fade in/out |
| `fadeIn` | Fade in only (no exit fade) |
| `zoomIn` | Zooms in from small to full |
| `zoomOut` | Zooms out from large to normal |
| `flip` | Flips like a card (horizontal axis) |
| `bounce` | Bounces in with elastic easing |

#### Caption Animations (`captionAnimation` prop)
- Supports all animation values above
- **Independent timing**:
  - `captionDelay` (default: `0.5`s) — Delay before caption starts
  - `captionDuration` 🆕 (default: `0.8`s) — Animation duration
- Perfect for creating layered reveal effects

### Internationalization (RTL) 🆕
| Aspect | Behavior in RTL mode |
|--------|---------------------|
| **Swipe direction** | Swipe left → next, swipe right → previous |
| **Arrow positions** | Left arrow becomes "Next", right arrow becomes "Previous" |
| **Default animation** | Automatically switches to `slideRight` |
| **Layout** | `dir="rtl"` applied to root container |
| **Pagination** | Dots display in reverse order visually |
| **ARIA labels** | Automatically swap for arrows |

### Customization API
| Prop | Targets |
|------|---------|
| `className` | Main container |
| `slideClassName` | Individual slide wrapper |
| `captionClassName` | Caption overlay |
| `arrowClassName` | Navigation arrows (both) |
| `paginationClassName` | Dots container |
| `dotClassName` | Individual pagination dots |

### Performance Optimizations
- ⚡ **Lazy loading** — Non-active slides use `loading="lazy"`
- 🖼️ **Image optimization** — `decoding="async"`, `draggable=false`
- 🧹 **Clean architecture** — No legacy touch handlers
- 🔄 **Smart re-renders** — Optimized with `useCallback` and `useMemo`

### Accessibility
- 🔍 **Visible focus ring** — Clear keyboard navigation indicators
- 🏷️ **ARIA labels** — Proper roles and descriptions
- ⌨️ **Full keyboard support** — Arrow keys, tab navigation
- 📢 **Live regions** — `aria-live="polite"` (off when autoplay active)
- 🎯 **Focus management** — Container receives focus, maintains context

### Technical Stack
- ⚛️ **React 18+** — Modern hooks architecture
- 🎭 **Framer Motion** — Production-ready animations
- 🌬️ **Tailwind CSS v4** — Utility-first styling
- 📦 **TypeScript** — Full type definitions included
- 🔼 **Next.js** — App Router compatible with `'use client'`

## ⚙️ Installation

```bash
npm install nexlide
# or
yarn add nexlide
# or
pnpm add nexlide
```


## 📦 Peer Dependencies

These dependencies are usually already present in React / Next.js projects:

- react (>=18)
- framer-motion (required)

### Optional (Styling Utilities)

Nexlide uses a `cn()` utility internally for className merging, inspired by the common Tailwind pattern.

If you are customizing or extending the component and want to reuse this utility, it relies on:

- clsx
- tailwind-merge
- class-variance-authority

> ⚠️ These are already bundled within Nexlide and **do NOT need to be installed manually** unless you plan to use the same utility pattern in your own components.


## 🚀 Usage (Next.js App Router)

The component is a **Client Component** — you **must** use it inside a file that starts with `'use client';`

```tsx
'use client';    // ← Required in Next.js App Router

import { Carousel } from 'nexlide'

const carouselItems = [
  {
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=75&fm=webp",
    title: "Incredible Mountains",
    description: "A breathtaking landscape at sunset",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=75&fm=webp",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=75&fm=webp",
    title: "Vibrant Night City",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1757843298369-6e5503c14bfd?w=1200&q=75&fm=webp",
    description: "Neon and motion in the city that never sleeps",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1200&q=75&fm=webp",
  },
  // ...
];

export default function MyPage() {
  return (
    <div className="p-8">
      <Carousel
        items={carouselItems}
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

**Note:** If you're using Pages Router or a different React setup without App Router restrictions, you can omit `'use client';`.


## 🌀 Available Animations

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


## 🔧 Props

| Prop              | Type      | Default     | Description                                                                 |
|-------------------|-----------|-------------|-----------------------------------------------------------------------------|
| `items` | `CarouselItem[]` | — **(required)** | Array of carousel items. Each item must include `imageUrl`, while `title` and `description` are optional. |
| `autoPlay`        | `boolean` | `false`     | Whether the carousel should automatically advance to the next slide.       |
| `autoPlayInterval`| `number`  | `3000`      | Interval in milliseconds between automatic slides (only used when `autoPlay` is `true`). |
| `autoPlayDirection`   | `"forward" \| "reverse"`          | `"forward"`   | Direction of autoplay: `"forward"` (normal) or `"reverse"` (backward).      |
| `infiniteLoop`    | `boolean` | `true`      | Enable infinite looping (goes back to first slide after last).              |
| `pauseOnHover` 🆕 | `boolean` | `true`      | Pause autoplay when the user hovers over the carousel.                      |
| `pauseOnFocus` 🆕 | `boolean` | `true`      | Pause autoplay when the carousel receives focus (improves accessibility).   |
| `pauseOnDrag` 🆕 | `boolean` | `true`      | Pause autoplay while the user is actively dragging/swiping the carousel.   |
| `showPagination`  | `boolean` | `true`      | Show/hide pagination dots. By default at the bottom.                                    |
| `showArrows`      | `boolean` | `true`      | Show/hide navigation arrows on the sides.                                   |
| `animation`       | `AnimationType` | Animation type for slide transitions. |
| `rtl` 🆕 | `boolean`                         | `false`       | Enable right-to-left (RTL) mode. Reverses swipe direction, arrow positions, autoplay direction (if not overridden), and default animation. Ideal for Arabic, Hebrew, etc. |
| `className`       | `string`  | —           | Additional Tailwind classes for the main carousel container.                |
| `slideClassName`  | `string`  | —           | Additional classes for each slide wrapper.                                  |
| `captionClassName`| `string`  | —           | Additional classes for the caption overlay container.                       |
| `arrowClassName`  | `string`  | —           | Additional classes for navigation arrows.                                   |
| `paginationClassName` | `string` | —        | Additional classes for the pagination dots container.                       |
| `dotClassName`    | `string`  | —           | Additional classes for individual pagination dots.                          |
| `captionAnimation`| `AnimationType` | Animation type for the caption appearance.                                  |
| `captionDelay`    | `number`  | `0.5`       | Delay in seconds before the caption animation starts (after slide appears). |
| `captionDuration` 🆕 | `number`  | `0.8`       | Duration in seconds of the caption animation itself.                        |                                 |

#### Type: AnimationType

```tsx
type AnimationType = 
  | "bounce" | "flip" | "fade" | "fadeIn"
  | "slideLeft" | "slideRight" | "slideTop"
  | "slideBottom" | "zoomIn" | "zoomOut";
```

### Important Notes

**Pause behavior**  
All pause-related props (`pauseOnHover`, `pauseOnFocus`, `pauseOnDrag`) are only active when `autoPlay={true}`. If `autoPlay={false}`, they are ignored.

**RTL mode (`rtl` prop)**  
When `rtl={true}`, the carousel automatically adapts for right-to-left languages (Arabic, Hebrew, Persian, etc.):

- **Swipe / Drag**: Direction is reversed  
  Swipe left → next slide  
  Swipe right → previous slide

- **Navigation arrows**: Positions and actions are mirrored  
  Left arrow becomes "Next"  
  Right arrow becomes "Previous"

- **Default animation**: Switches to `slideRight` (instead of `slideLeft`) when no `animation` prop is specified

- **Layout & direction**: `dir="rtl"` is applied to the root container, ensuring correct text flow, gradient direction, positioning, and CSS mirroring

**Example usage in RTL context**:
```tsx
<Carousel
  rtl={true}
  items={items}
  autoPlay
  autoPlayInterval={4000}
  animation="slideRight"  // recommended, but optional
  showArrows
  showPagination
/>
```


## 🛠️ Development

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


## 📄 License

MIT License. See LICENSE for details.