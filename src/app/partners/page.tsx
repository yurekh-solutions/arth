"use client";

import { Handshake, Shield, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { PARTNERS } from "@/lib/constants";

const partnershipBenefits = [
  {
    icon: <Handshake className="w-8 h-8 text-accent" />,
    title: "Trusted Collaboration",
    description: "We build long-term partnerships based on transparency, mutual growth, and shared success.",
  },
  {
    icon: <Shield className="w-8 h-8 text-accent" />,
    title: "Quality Assurance",
    description: "25+ years of proven track record ensuring every collaboration meets the highest standards.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    title: "Growth Opportunities",
    description: "Access to premium projects and a growing network of businesses across Gujarat and Maharashtra.",
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Innovation-Driven",
    description: "Partner with a team that embraces cutting-edge technology and sustainable development practices.",
  },
];

export default function PartnersPage() {
  return (
    <main style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Our Partners & Clients"
        subtitle="Building success together through lasting partnerships"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Partners" },
        ]}
      />

      {/* Trusted By */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
              Trusted By Leading Organizations
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: 'var(--color-muted-foreground)' }}>
              We&apos;re proud to partner with some of the most respected businesses in India.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {PARTNERS.map((partner, index) => (
              <GlassCard key={partner} delay={index * 0.05} className="!p-4">
                <p className="text-sm font-medium text-center" style={{ color: 'var(--color-primary)' }}>
                  {partner}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
              Partnership Benefits
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: 'var(--color-muted-foreground)' }}>
              Why leading companies choose to partner with Arth Group.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
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

      {/* Marquee Carousel */}
      <section className="section-padding overflow-hidden" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-primary)' }}>
              Our Network
            </h2>
          </ScrollReveal>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(to right, var(--color-background), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(to left, var(--color-background), transparent)' }} />
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 rounded-full" style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)' }}
              >
                <span className="text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>{partner}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Interested in Partnering With Us?"
        subtitle="Let's explore how we can create value together."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
