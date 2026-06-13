"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient bar pinned to the top of the viewport that fills
 * left-to-right as the user scrolls the page. Subtle, professional.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
