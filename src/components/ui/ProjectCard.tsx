"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  tagline: string;
  location: string;
  image: string;
  slug: string;
  type: string;
}

export default function ProjectCard({
  name,
  tagline,
  location,
  image,
  slug,
  type,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden glass-card"
    >
      <Link href={`/projects/${slug}`} className="block">
        {/* Image - Fixed height for proper display */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay - cream themed */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.4) 50%, transparent 100%)' }} />
        
          {/* Type badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-medium" style={{ color: 'var(--color-accent)' }}>
            {type}
          </div>
        
          {/* Arrow on hover */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-heading font-semibold mb-1 group-hover:text-accent transition-colors" style={{ color: 'var(--color-primary)' }}>
            {name}
          </h3>
          <p className="text-sm mb-2 line-clamp-1" style={{ color: 'var(--color-muted-foreground)' }}>{tagline}</p>
          <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-muted-foreground)' }}>
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
