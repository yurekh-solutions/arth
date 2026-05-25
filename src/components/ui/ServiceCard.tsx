"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  slug,
  index = 0,
}: ServiceCardProps) {
  // Dynamically get icon from lucide-react
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] || LucideIcons.Circle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/services/${slug}`} className="block">
        <div className="neumorphic p-6 h-full transition-all duration-300">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(224, 122, 95, 0.15)' }}>
            <IconComponent className="w-7 h-7 text-accent" />
          </div>

          <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-accent transition-colors" style={{ color: 'var(--color-primary)' }}>
            {title}
          </h3>

          <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: 'var(--color-muted-foreground)' }}>
            {description}
          </p>

          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1" style={{ color: 'var(--color-accent)' }}>
            Learn More
            <LucideIcons.ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
