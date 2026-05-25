"use client";

import { Lightbulb, TrendingUp, Heart, Target } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { JOB_POSITIONS } from "@/lib/constants";

const benefits = [
  {
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    title: "Innovation",
    description: "Work on cutting-edge projects that redefine commercial real estate with modern technology and sustainable design.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    title: "Growth",
    description: "Accelerate your career with mentorship, training programs, and clear pathways to leadership roles.",
  },
  {
    icon: <Heart className="w-8 h-8 text-accent" />,
    title: "Culture",
    description: "Join a collaborative, inclusive team that values creativity, work-life balance, and mutual respect.",
  },
  {
    icon: <Target className="w-8 h-8 text-accent" />,
    title: "Impact",
    description: "Shape skylines and communities — your work will stand tall for generations to come.",
  },
];

export default function CareerPage() {
  const featuredPositions = JOB_POSITIONS.slice(0, 3);

  return (
    <main style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Join Our Team"
        subtitle="Build your career with a legacy of excellence"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Career" },
        ]}
      />

      {/* Why Work With Us */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
              Why Work With Us
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: 'var(--color-muted-foreground)' }}>
              At Arth Group, we believe in empowering our people to do their best work while building landmarks.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard key={benefit.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                    {benefit.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Positions */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
              Featured Positions
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: 'var(--color-muted-foreground)' }}>
              Explore opportunities that match your ambition and expertise.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPositions.map((position, index) => (
              <GlassCard key={position.id} delay={index * 0.1}>
                <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                  {position.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                    {position.department}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(224, 122, 95, 0.1)', color: 'var(--color-muted-foreground)', borderColor: 'rgba(224, 122, 95, 0.2)' }}>
                    {position.type}
                  </span>
                </div>
                <p className="text-sm mb-2 flex items-center gap-1" style={{ color: 'var(--color-muted-foreground)' }}>
                  📍 {position.location}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                  {position.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" className="relative">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(224, 122, 95, 0.3), rgba(224, 122, 95, 0.3))' }}></div>
        <div className="section-padding">
          <div className="container-custom text-center">
            <ScrollReveal direction="up">
              <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold italic" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                &ldquo;Building careers, building futures&rdquo;
              </blockquote>
              <p className="mt-4 text-lg" style={{ color: '#ffffff', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>— Arth Group</p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </main>
  );
}
