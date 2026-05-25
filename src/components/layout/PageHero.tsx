import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumbItems: BreadcrumbItem[];
}

export default function PageHero({
  title,
  subtitle,
  bgImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  breadcrumbItems,
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay - Terracotta/Navy gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 37, 64, 0.7) 0%, rgba(224, 122, 95, 0.5) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 container-custom w-full flex flex-col items-center justify-center text-center pt-20">
        <ScrollReveal direction="up" delay={0.1}>
          <Breadcrumb items={breadcrumbItems} className="mb-6 justify-center" />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            {title}
          </h1>
        </ScrollReveal>

        {subtitle && (
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-lg md:text-xl max-w-2xl" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
              {subtitle}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
