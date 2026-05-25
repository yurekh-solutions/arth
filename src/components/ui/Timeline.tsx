"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 transform md:-translate-x-px" />

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center mb-12 ${
              isLeft ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot marker */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1.5 md:-translate-x-1.5 shadow-glass-glow z-10" />

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
              <div className="neumorphic p-5">
                <span className="font-heading text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                  {item.year}
                </span>
                <h3 className="text-lg font-heading font-semibold mt-1 mb-2" style={{ color: 'var(--color-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
