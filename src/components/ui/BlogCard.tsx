"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  image,
  date,
  readTime,
  category,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group neumorphic overflow-hidden h-full flex flex-col"
    >
      <Link href={`/blog/${slug}`} className="block flex-1 flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10, 37, 64, 0.7) 0%, transparent 100%)' }} />
          {/* Category badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(224, 122, 95, 0.9)', color: '#ffffff' }}>
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-heading font-semibold mb-2 line-clamp-2 group-hover:text-accent transition-colors" style={{ color: 'var(--color-primary)' }}>
            {title}
          </h3>
          <p className="text-sm leading-relaxed line-clamp-3 mb-4 flex-1" style={{ color: 'var(--color-muted-foreground)' }}>
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" style={{ color: 'var(--color-accent)' }} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" style={{ color: 'var(--color-accent)' }} />
              {readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
