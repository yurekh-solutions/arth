"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Modal from "@/components/ui/Modal";

interface GalleryContentProps {
  gallery: string[];
  projectName: string;
}

export default function GalleryContent({ gallery, projectName }: GalleryContentProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Masonry Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((img, i) => (
              <ScrollReveal key={i} direction="fade" delay={i * 0.08}>
                <div
                  className="break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden bg-glass-white border border-glass-border p-1 transition-all duration-300 hover:border-accent/40 hover:shadow-glass-glow"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={img}
                      alt={`${projectName} - Image ${i + 1}`}
                      width={800}
                      height={i % 3 === 0 ? 600 : i % 3 === 1 ? 500 : 450}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Larger
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={`${projectName} Gallery`}
      >
        {selectedImage && (
          <div className="relative w-full h-[60vh] rounded-xl overflow-hidden">
            <Image
              src={selectedImage}
              alt={projectName}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        )}
      </Modal>
    </>
  );
}
