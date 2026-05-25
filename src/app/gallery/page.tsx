"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = ["All", "Projects", "Interiors", "Construction", "Amenities"];

// Real gallery images with proper types
interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: "https://www.arthgroup.co.in/uploads/products/1741428307_Cam_17 (1).jpg", alt: "Rivium Project", category: "Projects" },
  { src: "https://www.arthgroup.co.in/uploads/products/174142845731154.jpg", alt: "The Frontedge Park", category: "Projects" },
  { src: "https://www.arthgroup.co.in/uploads/products/174142845730467.jpg", alt: "The Rise", category: "Projects" },
  { src: "https://www.arthgroup.co.in/uploads/products/174142845716224.jpg", alt: "Vedant Connect", category: "Projects" },
  { src: "https://www.arthgroup.co.in/uploads/products/174142845734959.jpg", alt: "Project Interior 1", category: "Interiors" },
  { src: "https://www.arthgroup.co.in/uploads/products/174142845774386.jpg", alt: "Project Interior 2", category: "Interiors" },
  { src: "https://www.arthgroup.co.in/uploads/products/174142845798661.jpg", alt: "Construction View 1", category: "Construction" },
  { src: "https://www.arthgroup.co.in/uploads/products/174142845789470.jpg", alt: "Construction View 2", category: "Construction" },
  { src: "https://www.arthgroup.co.in/uploads/products/174142845753178.jpg", alt: "Amenities View 1", category: "Amenities" },
  { src: "https://www.arthgroup.co.in/uploads/products/174142845711492.jpg", alt: "Amenities View 2", category: "Amenities" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = galleryImages.filter(img => 
    activeCategory === "All" || img.category === activeCategory
  );

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual journey through our projects and spaces"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  style={activeCategory === category 
                    ? { background: 'var(--color-accent)', color: '#fff' } 
                    : { background: 'rgba(224, 122, 95, 0.1)', border: '1px solid rgba(224, 122, 95, 0.2)', color: 'var(--color-muted-foreground)' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="group relative overflow-hidden rounded-2xl" style={{ background: 'rgba(224, 122, 95, 0.05)', border: '1px solid rgba(224, 122, 95, 0.1)' }}>
                    <div className="relative h-[280px] md:h-[320px] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(10, 37, 64, 0.85) 0%, transparent 60%)' }} />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-medium" style={{ color: '#ffffff' }}>{image.alt}</p>
                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{image.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
