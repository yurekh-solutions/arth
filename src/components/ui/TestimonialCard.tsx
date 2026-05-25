"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  image,
  rating,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="glass-card p-6 h-full flex flex-col"
    >
      <Quote className="w-8 h-8 mb-4 flex-shrink-0" style={{ color: 'rgba(224, 122, 95, 0.4)' }} />

      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--color-muted-foreground)' }}>
        {content}
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "fill-accent" : ""}`}
            style={i < rating ? { color: 'var(--color-accent)' } : { color: 'rgba(224, 122, 95, 0.2)' }}
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-accent/30">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-medium text-sm" style={{ color: 'var(--color-primary)' }}>{name}</p>
          <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
