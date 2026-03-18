# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-03-18

### Added
- **RTL Support**: New `rtl` prop (default: `false`) for full right-to-left language support. Includes reversed swipe/drag direction, swapped navigation arrow positions and functions, and automatic `dir="rtl"` attribute on the root container.
- **Autoplay Direction Control**: New `autoPlayDirection` prop accepting `"forward"` (default) or `"reverse"` to control autoplay progression.
- **Autoplay Pause Controls**: New props `pauseOnHover`, `pauseOnFocus`, and `pauseOnDrag` (all defaulting to `true`) to intelligently pause autoplay during user interaction.
- **Caption Animation Duration**: New `captionDuration` prop (number, default: `0.8`) to set the duration of caption entrance and exit animations.
- **TypeScript Definitions**: Added full type definitions for all new props.

### Changed
- **Advanced Touch/Drag**: Upgraded swipe/drag functionality with Framer Motion to include inertia scrolling and elastic snap-back, replacing legacy touch handlers for better performance.
- **Animation Direction Logic**: Slide animations (`slideLeft`/`slideRight`) now automatically respect both the `rtl` and `autoPlayDirection` props.
- **Autoplay Behavior**: Autoplay now intelligently pauses when the browser tab or page is hidden (using the `visibilitychange` event).
- **Core Wrapping Logic**: Improved reliability of index wrapping in `infiniteLoop` mode, especially when moving backwards.
- **Arrow Button Adaptation**: Navigation arrows now correctly swap their symbols (`‹`/`›`) and `aria-label` attributes based on the `rtl` prop.

### Fixed
- **Swipe Logic**: Swipe gesture calculations now correctly respect both autoplay direction and RTL mode.
- **Accessibility**: Enhanced keyboard navigation by adding a visible focus ring and `tabIndex={0}` to the main container. Improved ARIA labels for better screen reader support, particularly in RTL contexts.
- **Image Performance**: Optimized image loading by setting `loading="lazy"` on non-active slides, `decoding="async"`, and `draggable={false}` to prevent native drag conflicts.
- **Visual Consistency**: Minor visual polish including improved focus outlines and better pointer-events handling for a more consistent interaction experience in RTL contexts.
- **Event Cleanup**: Fixed potential memory leaks by ensuring proper removal of the `visibilitychange` event listener.

### Security
- No security-related changes in this release.

## [1.0.4] - 2026-03-05

### Added
- **Core Carousel Structure**: Basic single-slide view implementation with support for images and optional title/description captions.
- **Animation System**: Multiple animation variants via `animation` prop (`fade`, `slideLeft`, `slideRight`, `zoomIn`, `bounce`, `flip`, etc.) using Framer Motion.
- **Independent Caption Animations**: New `captionAnimation` prop to control caption appearance separately from slides.
- **Caption Delay**: `captionDelay` prop (number, default: `0.5`) to set a delay before caption animations start.
- **Autoplay Features**: `autoPlay` boolean and `autoPlayInterval` (default: `3000`ms) for configurable automatic sliding.
- **Infinite Looping**: `infiniteLoop` prop (default: `true`) to enable seamless navigation from last to first slide.
- **Navigation Controls**: `showPagination` and `showArrows` props for toggling navigation dots and previous/next buttons.
- **Touch Gestures**: Basic implementation of touch/swipe gestures for mobile devices.
- **Accessibility Basics**: ARIA labels, `role="region"`, and a focusable container with `tabIndex`.
- **Image Optimization**: Basic lazy loading (`loading="lazy"`) applied to non-active slides.
- **Customization API**: Multiple className props (`className`, `slideClassName`, `captionClassName`, `arrowClassName`, `paginationClassName`, `dotClassName`) for granular styling with Tailwind CSS.

### Changed
- **Animation Implementation**: Smooth transitions implemented using Framer Motion + AnimatePresence.
- **Styling Approach**: Uses Tailwind CSS classes inline, requiring no external CSS files and ensuring dark mode compatibility by default.
- **Responsive Design**: Carousel maintains aspect ratio (default 4:3) across different screen sizes.

### Fixed
- No fixes in this initial release.

### Security
- No security-related changes in this release.