"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      className={`
        rounded-2xl p-6 transition-all duration-300
        ${hover ? "hover:shadow-xl" : ""}
        ${glow ? "animate-glow-pulse" : ""}
        ${className}
      `}
      style={{
        background: 'linear-gradient(145deg, rgba(255, 253, 248, 0.95), rgba(247, 241, 235, 0.9))',
        backdropFilter: 'blur(16px) saturate(150%)',
        WebkitBackdropFilter: 'blur(16px) saturate(150%)',
        border: '1px solid rgba(255, 255, 255, 0.7)',
        boxShadow: '8px 8px 20px rgba(10, 37, 64, 0.08), -8px -8px 20px rgba(255, 255, 255, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }}
    >
      {children}
    </motion.div>
  );
}
