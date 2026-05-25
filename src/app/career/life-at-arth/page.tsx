"use client";

import { Sparkles, Users, Award, Scale, Heart, Briefcase, GraduationCap, Calendar, Building2, Sprout } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import ParallaxSection from "@/components/ui/ParallaxSection";

const cultureValues = [
  { icon: <Sparkles className="w-8 h-8 text-accent" />, title: "Innovation", description: "We encourage bold ideas and creative problem-solving at every level." },
  { icon: <Users className="w-8 h-8 text-accent" />, title: "Collaboration", description: "Great things happen when talented people work together towards a shared vision." },
  { icon: <Award className="w-8 h-8 text-accent" />, title: "Excellence", description: "We set high standards and consistently strive to exceed them." },
  { icon: <Scale className="w-8 h-8 text-accent" />, title: "Work-Life Balance", description: "We believe sustainable success comes from happy, well-rested teams." },
];

const benefits = [
  { icon: <Heart className="w-6 h-6 text-accent" />, title: "Health Insurance", description: "Comprehensive health coverage for you and your family." },
  { icon: <GraduationCap className="w-6 h-6 text-accent" />, title: "Professional Development", description: "Training programs, certifications, and learning budgets." },
  { icon: <Calendar className="w-6 h-6 text-accent" />, title: "Team Events", description: "Regular team outings, celebrations, and bonding activities." },
  { icon: <Building2 className="w-6 h-6 text-accent" />, title: "Modern Workspace", description: "Premium offices designed for comfort and productivity." },
  { icon: <Sprout className="w-6 h-6 text-accent" />, title: "Growth Opportunities", description: "Clear career paths with mentorship and promotions." },
  { icon: <Briefcase className="w-6 h-6 text-accent" />, title: "Flexible Culture", description: "Trust-based environment that respects individual work styles." },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
];

export default function LifeAtArthPage() {
  return (
    <main>
      <PageHero
        title="Life at Arth Group"
        subtitle="Where passion meets purpose every day"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Career", href: "/career" },
          { label: "Life at Arth" },
        ]}
      />

      {/* Culture Values */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4" style={{ color: '#0a2540' }}>
              Our Culture
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: '#6b5b4f' }}>
              The values that define who we are and how we work together.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <GlassCard key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: '#0a2540' }}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b5b4f' }}>
                    {value.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-glass-white/5">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#0a2540' }}>
              What We Offer
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: '#6b5b4f' }}>
              We invest in our people because they are our greatest asset.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard key={benefit.title} delay={index * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-1" style={{ color: '#0a2540' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6b5b4f' }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#0a2540' }}>
              Our Workplace
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: '#6b5b4f' }}>
              A glimpse into where ideas come to life.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryImages.map((img, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 0.1}>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-glass-border">
                  <Image
                    src={img}
                    alt={`Life at Arth ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80">
        <div className="section-padding">
          <div className="container-custom text-center">
            <ScrollReveal direction="up">
              <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 italic">
                &ldquo;Together, we create spaces that inspire generations&rdquo;
              </blockquote>
              <p className="text-white/60 mt-4 text-lg">— The Arth Team</p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      <CTASection
        title="Ready to Join Our Team?"
        subtitle="Explore current openings and find your perfect role at Arth Group."
        buttonText="View Openings"
        buttonHref="/career/openings"
      />
    </main>
  );
}
