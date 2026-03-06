"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  pulse?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function CTAButton({
  href = "https://app.zenedu.io/l/p/cv0gRcPeJZlqGQCy",
  children,
  variant = "primary",
  size = "md",
  className,
  pulse = false,
  icon,
  onClick,
}: CTAButtonProps) {
  const sizeStyles = {
    sm: "px-6 py-3 text-sm",
    md: "px-9 py-4 text-[15px]",
    lg: "px-12 py-5 text-base",
    xl: 'px-16 py-6 text-lg',
  };
  
  const content = (
    <motion.a
      href={href}
      onClick={onClick}
      className={clsx(
        variant === "primary" ? "btn-primary" : "btn-ghost",
        sizeStyles[size],
        pulse && variant === "primary" && "animate-glow-pulse",
        className
      )}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </motion.a>
  );

  return content;
}
