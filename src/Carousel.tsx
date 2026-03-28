"use client";

import * as React from "react";
import { cn } from "./lib/utils";
import { animationVariants } from "./lib/animationVariants";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimate,
  PanInfo,
} from "framer-motion";

interface CarouselItem {
  imageUrl: string;
  title?: string;
  description?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  
  autoPlay?: boolean;
  autoPlayInterval?: number;
  autoPlayDirection?: "forward" | "reverse";
  infiniteLoop?: boolean;
  rtl?: boolean;
  
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  pauseOnDrag?: boolean;
  
  showPagination?: boolean;
  showArrows?: boolean;
  
  animation?: keyof typeof animationVariants;
  captionAnimation?: keyof typeof animationVariants;
  captionDelay?: number;
  captionDuration?: number;
  
  className?: string;
  slideClassName?: string;
  arrowClassName?: string;
  paginationClassName?: string;
  dotClassName?: string;
  captionClassName?: string;
}

export default function Carousel(
  props: CarouselProps
): React.ReactElement | null {
  const {
    items,
    
    autoPlay = false,
    autoPlayInterval = 3000,
    autoPlayDirection = "forward",
    infiniteLoop = true,
    rtl = false,
    
    pauseOnHover = true,
    pauseOnFocus = true,
    pauseOnDrag = true,
    
    showPagination = true,
    showArrows = true,
    
    animation,
    captionAnimation = "fade",
    captionDelay = 0.5,
    captionDuration = 0.8,
    
    className,
    slideClassName,
    arrowClassName,
    paginationClassName,
    dotClassName,
    captionClassName,
  } = props;

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const x = useMotionValue(0);
  const [scope, animate] = useAnimate();

  const effectiveDirection = React.useMemo(() => {
    const base = autoPlayDirection === "reverse" ? -1 : 1;
    return rtl ? base * -1 : base;
  }, [autoPlayDirection, rtl]);

  const goToIndex = React.useCallback(
    (index: number) => {
      let newIndex = index;

      if (infiniteLoop) {
        newIndex = ((index % items.length) + items.length) % items.length;
      } else {
        newIndex = Math.max(0, Math.min(index, items.length - 1));
      }

      setCurrentIndex(newIndex);
      x.set(0);
    },
    [items.length, infiniteLoop, x],
  );

  const advance = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + effectiveDirection;
      return infiniteLoop
        ? ((nextIndex % items.length) + items.length) % items.length
        : Math.max(0, Math.min(nextIndex, items.length - 1));
    });
    x.set(0);
  }, [effectiveDirection, infiniteLoop, items.length, x]);

  const retreat = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev - effectiveDirection;
      return infiniteLoop
        ? ((nextIndex % items.length) + items.length) % items.length
        : Math.max(0, Math.min(nextIndex, items.length - 1));
    });
    x.set(0);
  }, [effectiveDirection, infiniteLoop, items.length, x]);

  const next = React.useCallback(() => {
    effectiveDirection === 1 ? advance() : retreat();
  }, [effectiveDirection, advance, retreat]);

  const prev = React.useCallback(() => {
    effectiveDirection === 1 ? retreat() : advance();
  }, [effectiveDirection, advance, retreat]);

  React.useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(() => {
      next();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isPaused, next]);

  const effectivePauseOnHover = autoPlay && pauseOnHover;
  const effectivePauseOnFocus = autoPlay && pauseOnFocus;
  const effectivePauseOnDrag = autoPlay && pauseOnDrag;

  const handleMouseEnter = React.useCallback(() => {
    if (effectivePauseOnHover) setIsPaused(true);
  }, [effectivePauseOnHover]);

  const handleMouseLeave = React.useCallback(() => {
    if (effectivePauseOnHover) setIsPaused(false);
  }, [effectivePauseOnHover]);

  const handleFocus = React.useCallback(() => {
    if (effectivePauseOnFocus) {
      setIsPaused(true);
      setIsFocused(true);
    }
  }, [effectivePauseOnFocus]);

  const handleBlur = React.useCallback(() => {
    if (effectivePauseOnFocus) {
      setIsPaused(false);
      setIsFocused(false);
    }
  }, [effectivePauseOnFocus]);

  const handleDragStart = React.useCallback(() => {
    if (effectivePauseOnDrag) setIsPaused(true);
  }, [effectivePauseOnDrag]);

  const handleDragEnd = React.useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (effectivePauseOnDrag) setIsPaused(false);

      const { offset, velocity } = info;

      const isSwipeNext =
        offset.x * effectiveDirection < -80 ||
        velocity.x * effectiveDirection < -0.4;

      const isSwipePrev =
        offset.x * effectiveDirection > 80 ||
        velocity.x * effectiveDirection > 0.4;

      if (isSwipeNext) next();
      else if (isSwipePrev) prev();

      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    },
    [effectivePauseOnDrag, animate, x, next, prev, effectiveDirection],
  );

  React.useEffect(() => {
    if (!autoPlay) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else if (!isFocused && !effectivePauseOnHover) {
        setIsPaused(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [autoPlay, isFocused, effectivePauseOnHover]);

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];
  const hasCaption = currentItem.title || currentItem.description;

  const selectedAnimation = React.useMemo(() => {
    const nonDirectional = new Set<keyof typeof animationVariants>([
      "fade",
      "fadeIn",
      "zoomIn",
      "zoomOut",
      "flip",
      "bounce",
    ]);

    if (animation && nonDirectional.has(animation)) {
      return animation;
    }

    if (!animation) {
      return effectiveDirection === 1 ? "slideLeft" : "slideRight";
    }

    if (animation === "slideLeft" || animation === "slideRight") {
      return effectiveDirection === 1 ? "slideLeft" : "slideRight";
    }

    return animation;
  }, [animation, effectiveDirection]);

  const selectedCaptionAnimation = React.useMemo(() => {
    if (!captionAnimation) return "fade";

    if (captionAnimation === "slideLeft" || captionAnimation === "slideRight") {
      return effectiveDirection === 1 ? "slideLeft" : "slideRight";
    }

    return captionAnimation;
  }, [captionAnimation, effectiveDirection]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      rtl ? prev() : next();
    }

    if (e.key === "ArrowLeft") {
      rtl ? next() : prev();
    }
  };

  return (
    <div
      ref={scope}
      data-nexlide="true"
      data-nexlide-version="1.1.1"
      dir={rtl ? "rtl" : "ltr"}
      className={cn(
        "nexlide-carousel relative overflow-hidden w-full max-w-4xl mx-auto aspect-[4/3] rounded-xl shadow-2xl bg-gray-900 outline-none focus:ring-2 focus:ring-white/50",
        className,
      )}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      {...(effectivePauseOnHover && {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      {...(effectivePauseOnFocus && {
        onFocus: handleFocus,
        onBlur: handleBlur,
      })}
      role="region"
      aria-label="Carousel showcase"
      aria-roledescription="carousel"
      aria-live={autoPlay ? "off" : "polite"}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragStart={effectivePauseOnDrag ? handleDragStart : undefined}
          onDragEnd={handleDragEnd}
          style={{ x }}
          key={currentIndex}
          className={cn("absolute inset-0", slideClassName)}
          variants={animationVariants[selectedAnimation] ?? animationVariants.slideLeft}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title || `Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover pointer-events-none select-none"
            loading={currentIndex === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />

          {hasCaption && (
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                className={cn(
                  "absolute bottom-6 left-6 right-6 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl",
                  captionClassName,
                )}
                variants={animationVariants[selectedCaptionAnimation] ?? animationVariants.fade}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  delay: captionDelay,
                  duration: captionDuration,
                  ease: "easeOut",
                }}
              >
                {currentItem.title && (
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {currentItem.title}
                  </h3>
                )}

                {currentItem.description && (
                  <p className="mt-2 text-white/90 text-lg drop-shadow-sm">
                    {currentItem.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </AnimatePresence>

      {showArrows && items.length > 1 && (
        <>
          <button
            type="button"
            onClick={rtl ? next : prev}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white text-3xl hover:bg-black/70 hover:cursor-pointer transition-all duration-200 shadow-lg",
              rtl && "left-auto right-4",
              arrowClassName,
            )}
            aria-label={rtl ? "Next slide" : "Previous slide"}
          >
            {rtl ? "›" : "‹"}
          </button>

          <button
            type="button"
            onClick={rtl ? prev : next}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white text-3xl hover:bg-black/70 hover:cursor-pointer transition-all duration-200 shadow-lg",
              rtl && "right-auto left-4",
              arrowClassName,
            )}
            aria-label={rtl ? "Previous slide" : "Next slide"}
          >
            {rtl ? "‹" : "›"}
          </button>
        </>
      )}

      {showPagination && items.length > 1 && (
        <div
          className={cn(
            "absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-3",
            rtl && "flex-row-reverse",
            paginationClassName,
          )}
        >
          {items.map((_, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => goToIndex(idx)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 shadow-md hover:cursor-pointer",
                idx === currentIndex
                  ? "bg-white scale-125 shadow-white/50"
                  : "bg-white/50 hover:bg-white/80",
                dotClassName,
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}