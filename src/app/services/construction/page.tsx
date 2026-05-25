"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import GlassCard from "@/components/ui/GlassCard";
import ParallaxSection from "@/components/ui/ParallaxSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Award, Clock, Leaf } from "lucide-react";

const service = SERVICES.find((s) => s.slug === "construction")!;

const processSteps = [
  { step: "01", title: "Consultation & Planning", description: "Detailed project scoping, site assessment, and comprehensive construction planning." },
  { step: "02", title: "Design & Development", description: "Engineering design, material selection, and construction methodology development." },
  { step: "03", title: "Execution & Quality Control", description: "World-class construction with rigorous safety protocols and quality checkpoints." },
  { step: "04", title: "Handover & Support", description: "Final inspections, documentation, and warranty-backed handover with ongoing support." },
];

export default function ConstructionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <PageHero
        title={service.title}
        subtitle="World-class construction with unwavering commitment to quality"
        bgImage={service.image}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Hero Image */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="glass-card overflow-hidden rounded-2xl max-w-5xl mx-auto">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Overview
              </h2>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                {service.fullDescription}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Key Features
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {service.features.map((feature, index) => (
              <GlassCard key={index} delay={index * 0.05} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm md:text-base">{feature}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Us
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ScrollReveal direction="up" delay={0}>
              <div className="neumorphic p-8 text-center h-full">
                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-white mb-3">Quality & Excellence</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  25+ years of construction expertise with international quality standards and best practices.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <div className="neumorphic p-8 text-center h-full">
                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-white mb-3">On-time Delivery</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Proven track record of delivering projects on time and within budget — no exceptions.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className="neumorphic p-8 text-center h-full">
                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                  <Leaf className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-white mb-3">Innovation & Sustainability</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Modern construction techniques with sustainable materials and eco-conscious methodologies.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Process
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="glass-card p-6 text-center h-full relative">
                  <div className="text-4xl font-heading font-bold text-accent/20 mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-base font-heading font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxSection
        bgImage={service.image}
        className="py-24 md:py-32"
      >
        <div className="container-custom text-center">
          <ScrollReveal direction="up">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white max-w-4xl mx-auto leading-snug">
              &ldquo;Building with precision, delivering with pride — for over 25 years&rdquo;
            </blockquote>
            <p className="text-accent mt-4 text-lg">— Arth Group</p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* CTA */}
      <CTASection
        title="Have a Construction Project in Mind?"
        subtitle="From industrial buildings to commercial complexes, we deliver world-class construction on time."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </main>
  );
}
