"use client";

import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    email?: string;
  };
}

export default function TeamCard({
  name,
  role,
  bio,
  image,
  social,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group glass-card overflow-hidden"
    >
      {/* Image area */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />

        {/* Social links on hover */}
        {social && (
          <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-colors"
              >
                <Globe className="w-4 h-4 text-white" />
              </a>
            )}
            {social.email && (
              <a
                href={`mailto:${social.email}`}
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-colors"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-heading font-semibold" style={{ color: 'var(--color-primary)' }}>{name}</h3>
        <p className="text-sm font-medium mb-2" style={{ color: 'var(--color-accent)' }}>{role}</p>
        <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--color-muted-foreground)' }}>{bio}</p>
      </div>
    </motion.div>
  );
}
