"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GlassButton from "@/components/ui/GlassButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Decorative floating glass shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/5 border border-glass-border backdrop-blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-48 h-48 rounded-2xl bg-accent/3 border border-glass-border backdrop-blur-sm rotate-12"
        animate={{ y: [0, 15, 0], rotate: [12, 8, 12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-24 h-24 rounded-xl bg-glass-white border border-glass-border backdrop-blur-sm"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-accent/4 border border-glass-border backdrop-blur-sm"
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 left-1/3 w-16 h-16 rounded-lg bg-accent/8 border border-glass-border backdrop-blur-sm rotate-45"
        animate={{ y: [0, -10, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-8xl md:text-9xl font-heading font-bold mb-4" style={{ color: '#0a2540' }}>
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4" style={{ color: '#0a2540' }}>
            Page Not Found
          </h2>
          <p className="text-lg max-w-md mx-auto mb-8" style={{ color: 'var(--color-muted-foreground)' }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <GlassButton href="/" variant="primary" size="lg">
            Back to Home
          </GlassButton>
        </motion.div>
      </div>
    </div>
  );
}
