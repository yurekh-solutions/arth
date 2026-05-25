import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/layout/CTASection";
import { AWARDS } from "@/lib/constants";
import { Award, Building2 } from "lucide-react";

// Real award images from arthgroup.co.in
const AWARD_IMAGES = [
  "https://www.arthgroup.co.in/uploads/1742820393_IMG_9441.JPG",
  "https://www.arthgroup.co.in/uploads/1742820287_IMG_9445.JPG",
  "https://www.arthgroup.co.in/uploads/1742820151_IMG_344.jpeg",
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Awards & Recognitions"
        subtitle="Celebrating excellence in real estate development, design, and sustainability"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Awards" },
        ]}
      />

      {/* Intro */}
      <section className="section-padding pb-8" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom max-w-3xl text-center">
          <ScrollReveal direction="up">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
              Over 25 years of dedication to quality, innovation, and sustainability have earned Arth Group
              recognition from leading industry bodies. These awards reflect our commitment to excellence
              and our contribution to shaping India&apos;s commercial real estate landscape.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="section-padding pt-8" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom max-w-5xl">
          <div className="space-y-10">
            {AWARDS.map((award, index) => {
              const imageSrc = AWARD_IMAGES[index % AWARD_IMAGES.length];
              return (
              <ScrollReveal key={award.id} direction="up" delay={index * 0.15}>
                <GlassCard className="overflow-hidden !p-0" hover={true}>
                  <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
                    {/* Image - Full size, no cut */}
                    <div className="relative w-full h-[300px] md:h-[400px]">
                      <Image
                        src={imageSrc}
                        alt={award.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 45vw"
                        unoptimized={true}
                        priority={index === 0}
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10, 37, 64, 0.4) 0%, transparent 80%)' }} />
                      {/* Year Badge */}
                      <div className="absolute top-4 left-4 w-16 h-16 rounded-xl flex items-center justify-center glass">
                        <span className="font-heading font-bold text-lg" style={{ color: '#c6873b' }}>
                          {award.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5" style={{ color: '#c6873b' }} />
                        <span className="text-sm font-medium" style={{ color: '#c6873b' }}>
                          {award.organization}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4" style={{ color: '#4a2c2a' }}>
                        {award.title}
                      </h3>
                      <p className="text-base leading-relaxed mb-4" style={{ color: '#6b5b4f' }}>
                        {award.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm" style={{ color: '#6b5b4f' }}>
                        <Building2 className="w-4 h-4" />
                        <span>Arth Group</span>
                        <span className="mx-2">•</span>
                        <span>{award.year}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Building Excellence, Earning Trust"
        subtitle="Our awards reflect our team's dedication to delivering exceptional commercial spaces. Partner with an award-winning developer."
        buttonText="Explore Projects"
        buttonHref="/projects"
      />
    </main>
  );
}