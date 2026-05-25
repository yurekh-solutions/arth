"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  delay?: number;
}

export default function StatCard({
  value,
  label,
  icon,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="neumorphic p-6 text-center"
    >
      {icon && (
        <div className="mb-3 flex justify-center" style={{ color: 'var(--color-accent)' }}>{icon}</div>
      )}
      <div className="text-3xl md:text-4xl font-heading font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
        {value}
      </div>
      <p className="text-xs uppercase tracking-widest font-medium" style={{ color: 'var(--color-muted-foreground)' }}>
        {label}
      </p>
    </motion.div>
  );
}
