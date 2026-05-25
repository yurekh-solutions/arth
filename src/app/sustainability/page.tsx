"use client";

import { Leaf, Droplets, Sun, Zap, Recycle, Lightbulb } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const initiatives = [
  {
    icon: Leaf,
    title: "Green Building Certifications",
    description:
      "All our projects are designed to meet IGBC and LEED green building certification standards, ensuring environmentally responsible construction.",
  },
  {
    icon: Droplets,
    title: "Rainwater Harvesting Systems",
    description:
      "Advanced rainwater collection and recharge systems integrated into every project, reducing freshwater dependency by up to 40%.",
  },
  {
    icon: Sun,
    title: "Solar Energy Integration",
    description:
      "Rooftop solar installations across all properties, generating clean energy to power common areas and reduce carbon footprint.",
  },
  {
    icon: Zap,
    title: "EV Charging Infrastructure",
    description:
      "Future-ready electric vehicle charging stations in all parking areas, supporting the transition to sustainable transportation.",
  },
  {
    icon: Recycle,
    title: "Waste Management & Recycling",
    description:
      "Comprehensive waste segregation and recycling programs during construction and post-occupancy, minimizing landfill impact.",
  },
  {
    icon: Lightbulb,
    title: "Energy-Efficient Design",
    description:
      "Smart building envelopes, LED lighting, and energy-efficient HVAC systems that reduce energy consumption by up to 35%.",
  },
];

const stats = [
  { label: "Tons CO₂ Saved Annually", value: 2400 },
  { label: "Green Sq. Ft. Delivered", value: 3500000 },
  { label: "Trees Planted", value: 12000 },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        title="Sustainability & CSR"
        subtitle="Building a greener future, one project at a time"
        bgImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Sustainability & CSR" },
        ]}
      />

      {/* Our Commitment */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
                Our Commitment
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                At Arth Group, sustainability isn&apos;t just a buzzword — it&apos;s the
                foundation of everything we build. We believe that responsible
                development means creating spaces that not only serve businesses today
                but also protect the environment for generations to come. Every design
                decision, every material choice, and every system we integrate is guided
                by our commitment to a greener, more sustainable future.
              </p>
            </div>
          </ScrollReveal>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {initiatives.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.1}>
                <div className="flex flex-col items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold" style={{ color: 'var(--color-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>{item.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-primary)' }}>
              Our Impact in Numbers
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} direction="up" delay={index * 0.15}>
                <div className="p-8 text-center rounded-2xl" style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', boxShadow: '0 8px 32px rgba(10, 37, 64, 0.08)' }}>
                  <div className="text-4xl md:text-5xl font-heading font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                    <AnimatedCounter target={stat.value} duration={2.5} suffix="+" />
                  </div>
                  <p className="text-lg" style={{ color: 'var(--color-muted-foreground)' }}>{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80" className="relative">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(224, 122, 95, 0.3), rgba(224, 122, 95, 0.3))' }}></div>
        <div className="section-padding">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <ScrollReveal direction="up">
              <blockquote className="text-2xl md:text-3xl font-heading font-semibold italic leading-relaxed" style={{ color: 'var(--color-primary)' }}>
                &ldquo;The greatest threat to our planet is the belief that someone
                else will save it. We choose to act today.&rdquo;
              </blockquote>
              <p className="text-accent mt-6 text-lg">— Arth Group Sustainability Charter</p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      <CTASection
        title="Partner with Us for a Greener Tomorrow"
        subtitle="Discover how our sustainable developments can align with your business values and environmental goals."
      />
    </>
  );
}
