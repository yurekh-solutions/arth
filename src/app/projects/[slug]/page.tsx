import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, ArrowUp, IndianRupee, Check, Phone, ArrowRight, Images, Layout, Sparkles, MapPinned } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import ProjectGalleryCarousel from "./ProjectGalleryCarousel";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const subPages = [
    { label: "Gallery", href: `/projects/${slug}/gallery`, icon: <Images className="w-5 h-5" /> },
    { label: "Floor Plans", href: `/projects/${slug}/floor-plans`, icon: <Layout className="w-5 h-5" /> },
    { label: "Amenities", href: `/projects/${slug}/amenities`, icon: <Sparkles className="w-5 h-5" /> },
    { label: "Location", href: `/projects/${slug}/location`, icon: <MapPinned className="w-5 h-5" /> },
  ];

  return (
    <main>
      <PageHero
        title={project.name}
        subtitle={project.tagline}
        bgImage={project.image}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name },
        ]}
      />

      {/* Hero Image Gallery - Fixed Layout with proper image display */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Main Large Image - Fixed height */}
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[450px]">
              <Image
                src={project.gallery[0]}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 75vw"
                priority
              />
            </div>
            {/* Side Thumbnails - Fixed heights */}
            <div className="grid grid-rows-3 gap-4 h-[300px] md:h-[450px]">
              {project.gallery.slice(1, 4).map((img, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow h-full">
                  <Image
                    src={img}
                    alt={`${project.name} view ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details - Cream Theme */}
      <section className="section-padding pt-0" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'var(--color-muted-foreground)' }}>
            {project.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass-card rounded-xl p-6 text-center shadow-md">
              <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: 'var(--color-accent)' }} />
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted-foreground)' }}>Location</p>
              <p className="font-medium text-sm" style={{ color: 'var(--color-primary)' }}>{project.location}</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center shadow-md">
              <Building2 className="w-8 h-8 mx-auto mb-3" style={{ color: 'var(--color-accent)' }} />
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted-foreground)' }}>Type</p>
              <p className="font-medium text-sm" style={{ color: 'var(--color-primary)' }}>{project.type}</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center shadow-md">
              <ArrowUp className="w-8 h-8 mx-auto mb-3" style={{ color: 'var(--color-accent)' }} />
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted-foreground)' }}>Height</p>
              <p className="font-medium text-sm" style={{ color: 'var(--color-primary)' }}>{project.height}</p>
            </div>
            {project.priceRange && (
              <div className="glass-card rounded-xl p-6 text-center shadow-md">
                <IndianRupee className="w-8 h-8 mx-auto mb-3" style={{ color: 'var(--color-accent)' }} />
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--color-muted-foreground)' }}>Price Range</p>
                <p className="font-medium text-sm" style={{ color: 'var(--color-primary)' }}>{project.priceRange}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Features - Cream Theme */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: 'var(--color-primary)' }}>
            Key Features
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-12" style={{ background: 'var(--color-accent)' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl glass-card border border-border">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(224, 122, 95, 0.2)' }}>
                  <Check className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                </div>
                <span className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Amenities - Cream Theme */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: 'var(--color-primary)' }}>
            Premium Amenities
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-12" style={{ background: 'var(--color-accent)' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.amenities.map((amenity, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl glass-card border border-border">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(224, 122, 95, 0.1)' }}>
                  <Sparkles className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                </div>
                <span className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Cream Theme */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ProjectGalleryCarousel gallery={project.gallery} projectName={project.name} />
        </div>
      </section>

      {/* Contact CTA - Cream Theme */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <Phone className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
            <h3 className="font-heading text-2xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
              Interested in {project.name}?
            </h3>
            <p className="mb-6" style={{ color: 'var(--color-muted-foreground)' }}>
              Get in touch with our sales team for detailed information, site visits, and exclusive offers.
            </p>
            <a
              href={`tel:${project.contactPhone}`}
              className="solid-btn"
            >
              <Phone className="w-4 h-4" />
              {project.contactPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Sub-page Links - Cream Theme */}
     

      <CTASection />
    </main>
  );
}
