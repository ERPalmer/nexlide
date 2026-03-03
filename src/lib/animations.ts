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
};