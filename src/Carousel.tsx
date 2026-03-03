"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants } from "./lib/animations";
import { cn } from "./lib/utils";

interface CarouselItem {
  imageUrl: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showPagination?: boolean;
  showArrows?: boolean;
  infiniteLoop?: boolean;
  className?: string;
  slideClassName?: string;
  captionClassName?: string;
  arrowClassName?: string;
  paginationClassName?: string;
  dotClassName?: string;
  animation?: keyof typeof slideVariants;
  captionAnimation?: keyof typeof slideVariants;
}

export default function Carousel({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showPagination = true,
  showArrows = true,
  infiniteLoop = true,
  className,
  slideClassName,
  captionClassName,
  arrowClassName,
  paginationClassName,
  dotClassName,
  animation = "slideLeft",
  captionAnimation = "fade",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const goToIndex = (index: number) => {
    let newIndex = index;
    if (infiniteLoop) {
      newIndex = (index + items.length) % items.length;
    } else {
      newIndex = Math.max(0, Math.min(index, items.length - 1));
    }
    setCurrentIndex(newIndex);
  };

  const next = () => goToIndex(currentIndex + 1);
  const prev = () => goToIndex(currentIndex - 1);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(next, autoPlayInterval);
    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full max-w-4xl mx-auto aspect-[4/3] rounded-xl shadow-2xl bg-gray-900",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      role="region"
      aria-label="Image carousel"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          className={cn("absolute inset-0", slideClassName)}
          variants={slideVariants[animation] ?? slideVariants.slideLeft}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <img
            src={items[currentIndex].imageUrl}
            alt={items[currentIndex].title || "Carousel image"}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          <motion.div
            className={cn(
              "absolute bottom-6 left-6 right-6 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl",
              captionClassName
            )}
            variants={slideVariants[captionAnimation] ?? slideVariants.fade}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-white drop-shadow-md">
              {items[currentIndex].title}
            </h3>
            <p className="mt-2 text-white/90 text-lg drop-shadow-sm">
              {items[currentIndex].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={prev}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white text-3xl hover:bg-black/70 transition-all duration-200 shadow-lg",
              arrowClassName
            )}
            aria-label="Previous"
          >
            ‹
          </button>

          <button
            onClick={next}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white text-3xl hover:bg-black/70 transition-all duration-200 shadow-lg",
              arrowClassName
            )}
            aria-label="Next"
          >
            ›
          </button>
        </>
      )}

      {showPagination && items.length > 1 && (
        <div
          className={cn(
            "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-3",
            paginationClassName
          )}
        >
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 shadow-md",
                idx === currentIndex
                  ? "bg-white scale-125 shadow-white/50"
                  : "bg-white/50 hover:bg-white/80",
                dotClassName
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
