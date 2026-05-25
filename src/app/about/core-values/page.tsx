"use client";

import { Shield, Award, Lightbulb, Leaf, Clock, Eye } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { CORE_VALUES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-8 h-8" />,
  Award: <Award className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  Leaf: <Leaf className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
  Eye: <Eye className="w-8 h-8" />,
};

const valuesInAction = [
  {
    value: "Trust & Transparency",
    example: "Every client receives regular project updates with detailed progress reports, financial transparency, and open channels for feedback at every stage.",
  },
  {
    value: "Quality Excellence",
    example: "The Frontedge Park underwent over 200 quality checkpoints during construction, resulting in zero defects at handover — a standard we maintain across all projects.",
  },
  {
    value: "Innovation in Practice",
    example: "Vedant Connect features smart building automation, IoT-enabled energy management, and an Emirates-inspired architectural design that sets it apart as Kalyan's tallest landmark.",
  },
  {
    value: "Sustainable Development",
    example: "All Arth Group projects incorporate rainwater harvesting, EV charging infrastructure, energy-efficient facades, and green building certifications as standard features.",
  },
];

export default function CoreValuesPage() {
  return (
    <main>
      <PageHero
        title="Our Core Values"
        subtitle="The principles that guide everything we build"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Core Values" },
        ]}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#0a2540' }}>
                Built on Strong Foundations
              </h2>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#6b5b4f' }}>
                At Arth Group, our values aren&apos;t just words on a wall — they are the foundation
                of every decision we make, every space we create, and every relationship we build.
                These principles have guided us for over 25 years and continue to shape our vision
                for the future.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-glass-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CORE_VALUES.map((value, index) => (
              <ScrollReveal key={value.title} direction="up" delay={index * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-glass-white backdrop-blur-glass border border-glass-border shadow-[8px_8px_16px_rgba(0,0,0,0.3),-4px_-4px_12px_rgba(255,255,255,0.03)] hover:shadow-glass-glow hover:border-accent/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-5">
                    {iconMap[value.icon] || <Shield className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3" style={{ color: '#0a2540' }}>
                    {value.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#6b5b4f' }}>
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
        className="py-24 md:py-32"
      >
        <div className="container-custom text-center">
          <ScrollReveal direction="scale">
            <div className="max-w-3xl mx-auto text-white">
              <p className=" text-white text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-relaxed">
                &ldquo;Trust is built one project at a time. Transparency is how we keep it.&rdquo;
              </p>
              <footer className="mt-6 text-accent font-medium text-lg">
                — The Arth Group Philosophy
              </footer>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Values in Action */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#0a2540' }}>
              Values in Action
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: '#6b5b4f' }}>
              Our values aren&apos;t abstract concepts — they manifest in every project we undertake. Here&apos;s how.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {valuesInAction.map((item, index) => (
              <ScrollReveal key={item.value} direction="up" delay={index * 0.1}>
                <div className="glass-card p-6 h-full">
                  <h3 className="text-lg font-heading font-semibold text-accent mb-3">
                    {item.value}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b5b4f' }}>
                    {item.example}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
