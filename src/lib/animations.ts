import { Variants } from "framer-motion";

export const slideVariants: Record<string, Variants> = {
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