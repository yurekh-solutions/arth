"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface GlassButtonProps {
  children: ReactNode;
  variant?: "default" | "primary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses = {
  default: "glass-btn",
  primary: "glass-btn glass-btn-primary",
  outline: "glass-btn border-white/20 bg-transparent text-white hover:bg-white/10",
};

export default function GlassButton({
  children,
  variant = "default",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  type = "button",
}: GlassButtonProps) {
  const classes = `${variantClasses[variant]} ${sizeClasses[size]} inline-flex items-center gap-2 font-semibold ${className}`;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      type={type}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
