"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectGalleryCarouselProps {
  gallery: string[];
  projectName: string;
}

export default function ProjectGalleryCarousel({ gallery, projectName }: ProjectGalleryCarouselProps) {
  return (
    <div className="w-full">
      {/* Section Header - Like Original Website */}
      <div className="mb-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-3" style={{ color: 'var(--color-primary)' }}>
          Project Gallery
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--color-accent)' }} />
      </div>

      {/* Gallery Grid - Fixed with proper image display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((img, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl glass-card shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {/* Image Container - Fixed height instead of aspect ratio */}
            <div className="relative w-full h-[280px] overflow-hidden">
              <Image
                src={img}
                alt={`${projectName} - View ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 group-hover:bg-primary/30 transition-all duration-300" style={{ background: 'transparent' }} />
            </div>
            
            {/* Caption */}
            <div className="p-4">
              <p className="font-semibold text-center" style={{ color: 'var(--color-primary)' }}>
                {projectName} - View {i + 1}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden for now */}
    </div>
  );
}
