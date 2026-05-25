"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROJECTS, PROJECT_IMAGES } from "@/lib/constants";
import Image from "next/image";

export default function ProjectGalleryPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const allImages = [...PROJECT_IMAGES, ...project.gallery];

  return (
    <main>
      <PageHero
        title={`${project.name} - Gallery`}
        subtitle="Visual tour of our premium commercial space"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name, href: `/projects/${project.slug}` },
          { label: "Gallery" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
              Project Gallery
            </h2>
            <p className="text-white/60 text-center max-w-3xl mx-auto mb-12 responsive-text px-4">
              Explore {project.name} through our comprehensive photo gallery showcasing architecture, interiors, and amenities.
            </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`${project.name} Gallery Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Maximize2 className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 text-white hover:text-accent transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : allImages.length - 1);
            }}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <Image
              src={allImages[selectedImage]}
              alt={`${project.name} Gallery Image ${selectedImage + 1}`}
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-white text-sm">
              {selectedImage + 1} / {allImages.length}
            </div>
          </div>

          <button
            className="absolute right-4 text-white hover:text-accent transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < allImages.length - 1 ? selectedImage + 1 : 0);
            }}
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </main>
  );
}
