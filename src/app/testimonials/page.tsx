"use client";

import { Star, Briefcase, ThumbsUp, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsPage() {
  const featured = TESTIMONIALS[0];

  return (
    <main style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Client Testimonials"
        subtitle="What our partners say about working with us"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      />

      {/* Featured Testimonial */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="p-8 md:p-12 max-w-4xl mx-auto text-center rounded-2xl" style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', boxShadow: '0 8px 32px rgba(10, 37, 64, 0.08)' }}>
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent" style={{ color: 'var(--color-accent)' }} />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl leading-relaxed italic mb-8" style={{ color: 'var(--color-primary)' }}>
                &ldquo;{featured.content}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={featured.image} alt={featured.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-semibold" style={{ color: 'var(--color-primary)' }}>{featured.name}</p>
                  <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                    {featured.role}, {featured.company}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
              What Our Clients Say
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: 'var(--color-muted-foreground)' }}>
              Trusted by leading businesses across India for premium commercial real estate solutions.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-primary)' }}>
              Our Track Record
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <AnimatedCounter
              target={50}
              suffix="+"
              label="Projects Delivered"
              icon={<Briefcase className="w-8 h-8" />}
            />
            <AnimatedCounter
              target={98}
              suffix="%"
              label="Client Satisfaction"
              icon={<ThumbsUp className="w-8 h-8" />}
            />
            <AnimatedCounter
              target={85}
              suffix="%"
              label="Repeat Clients"
              icon={<Users className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" className="relative">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(224, 122, 95, 0.3), rgba(224, 122, 95, 0.3))' }}></div>
        <div className="section-padding">
          <div className="container-custom text-center">
            <ScrollReveal direction="up">
              <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold italic" style={{ color: 'var(--color-primary)' }}>
                &ldquo;Excellence is not a destination — it&rsquo;s a continuous journey&rdquo;
              </blockquote>
              <p className="mt-4 text-lg" style={{ color: 'var(--color-muted-foreground)' }}>— Arth Group</p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      <CTASection
        title="Ready to Experience the Arth Difference?"
        subtitle="Join our growing list of satisfied clients and partners."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
