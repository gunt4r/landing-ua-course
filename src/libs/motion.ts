import type { Variants } from "framer-motion";

/** Fade up — default reveal animation */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade in — simple opacity */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/** Slide in from left */
export const slideRight: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/** Slide in from right */
export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/** Scale in */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] } },
};

/** Staggered container */
export const staggerContainer = (stagger = 0.1, delayStart = 0): Variants => ({
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delayStart,
    },
  },
});

/** Card hover spring */
export const cardHover = {
  rest:  { y: 0, scale: 1 },
  hover: {
    y: -5,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

/** Button hover */
export const btnHover = {
  rest:  { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
  tap:   { scale: 0.98 },
};
