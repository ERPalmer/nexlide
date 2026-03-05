import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const slideVariants = {
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
        exit: { opacity: 0 },
    },
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.6 } },
        exit: { opacity: 0 },
    },
    slideLeft: {
        initial: { opacity: 0, x: "100%" },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, x: "-100%" },
    },
    slideRight: {
        initial: { opacity: 0, x: "-100%" },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, x: "100%" },
    },
    slideTop: {
        initial: { opacity: 0, y: "-100%" },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, y: "100%" },
    },
    slideBottom: {
        initial: { opacity: 0, y: "100%" },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, y: "-100%" },
    },
    bounce: {
        initial: { opacity: 0, y: 40, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.68, -0.55, 0.265, 1.55] } }, // bounce fuerte
        exit: { opacity: 0, y: -40, scale: 0.9 },
    },
    zoomIn: {
        initial: { opacity: 0, scale: 0.7 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.7 },
    },
    zoomOut: {
        initial: { opacity: 0, scale: 1.3 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
        exit: { opacity: 0, scale: 1.3 },
    },
    flip: {
        initial: { opacity: 0, rotateY: 90 },
        animate: { opacity: 1, rotateY: 0, transition: { duration: 0.7, ease: "easeInOut" } },
        exit: { opacity: 0, rotateY: -90 },
    },
};

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

function Carousel({ items, autoPlay = false, autoPlayInterval = 3000, showPagination = true, showArrows = true, infiniteLoop = true, className, slideClassName, captionClassName, arrowClassName, paginationClassName, dotClassName, animation = "slideLeft", captionAnimation = "fade", captionDelay = 0.5, }) {
    var _a, _b;
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const goToIndex = (index) => {
        let newIndex = index;
        if (infiniteLoop) {
            newIndex = (index + items.length) % items.length;
        }
        else {
            newIndex = Math.max(0, Math.min(index, items.length - 1));
        }
        setCurrentIndex(newIndex);
    };
    const next = () => goToIndex(currentIndex + 1);
    const prev = () => goToIndex(currentIndex - 1);
    useEffect(() => {
        if (!autoPlay)
            return;
        const interval = setInterval(next, autoPlayInterval);
        return () => clearInterval(interval);
    }, [currentIndex, autoPlay, autoPlayInterval]);
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
        const diff = touchStartX.current - e.touches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0)
                next();
            else
                prev();
        }
    };
    if (items.length === 0)
        return null;
    return (jsxs("div", { className: cn("relative overflow-hidden w-full max-w-4xl mx-auto aspect-[4/3] rounded-xl shadow-2xl bg-gray-900", className), onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, role: "region", "aria-label": "Carousel imageshowcase", children: [jsx(AnimatePresence, { initial: false, mode: "wait", children: jsxs(motion.div, { className: cn("absolute inset-0", slideClassName), variants: (_a = slideVariants[animation]) !== null && _a !== void 0 ? _a : slideVariants.slideLeft, initial: "initial", animate: "animate", exit: "exit", children: [jsx("img", { src: items[currentIndex].imageUrl, alt: items[currentIndex].title || `Slide ${currentIndex + 1}`, "aria-label": items[currentIndex].title || `Slide ${currentIndex + 1}`, className: "w-full h-full object-cover", loading: "lazy" }), jsx(AnimatePresence, { children: jsxs(motion.div, { className: cn("absolute bottom-6 left-6 right-6 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl", captionClassName), variants: (_b = slideVariants[captionAnimation]) !== null && _b !== void 0 ? _b : slideVariants.fade, initial: "initial", animate: "animate", exit: "exit", transition: {
                                    delay: captionDelay,
                                    duration: 0.7,
                                    ease: "easeOut",
                                }, children: [jsx("h3", { className: "text-2xl font-bold text-white drop-shadow-md", children: items[currentIndex].title }), jsx("p", { className: "mt-2 text-white/90 text-lg drop-shadow-sm", children: items[currentIndex].description })] }, currentIndex) })] }, currentIndex) }), showArrows && items.length > 1 && (jsxs(Fragment, { children: [jsx("button", { onClick: prev, className: cn("absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white text-3xl hover:bg-black/70 hover:cursor-pointer transition-all duration-200 shadow-lg", arrowClassName), "aria-label": "Previous slide", children: "\u2039" }), jsx("button", { onClick: next, className: cn("absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white text-3xl hover:bg-black/70 hover:cursor-pointer transition-all duration-200 shadow-lg", arrowClassName), "aria-label": "Next slide", children: "\u203A" })] })), showPagination && items.length > 1 && (jsx("div", { className: cn("absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-3", paginationClassName), children: items.map((_, idx) => (jsx("button", { onClick: () => goToIndex(idx), className: cn("w-3 h-3 rounded-full transition-all duration-300 shadow-md hover:cursor-pointer", idx === currentIndex
                        ? "bg-white scale-125 shadow-white/50"
                        : "bg-white/50 hover:bg-white/80", dotClassName), "aria-label": `Go to slide ${idx + 1}` }, idx))) }))] }));
}

export { Carousel };
//# sourceMappingURL=index.esm.js.map
