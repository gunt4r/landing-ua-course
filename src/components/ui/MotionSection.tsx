"use client";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { fadeUp } from "@/libs/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Props {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: any;
  style?: React.CSSProperties;
}

export default function MotionSection({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.12,
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const reduced = useReducedMotion();

  const Tag = motion[as as "div"] ?? motion.div;

  // If reduced motion, skip animation
  if (reduced) {
    return (
      <div className={className} ref={ref}>
        {children}
      </div>
    );
  }

  return (
    <Tag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
