"use client";

import { Eye, Rocket, Lightbulb, Leaf, Award, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import ParallaxSection from "@/components/ui/ParallaxSection";
import TabPanel from "@/components/ui/TabPanel";
import { COMPANY } from "@/lib/constants";

const approachTabs = [
  {
    label: "Innovation",
    icon: <Lightbulb className="w-4 h-4" />,
    content: (
      <div className="glass-card p-6 md:p-8">
        <h3 className="text-xl font-heading font-semibold mb-4" style={{ color: '#0a2540' }}>
          Pioneering the Future of Commercial Spaces
        </h3>
        <div className="space-y-4 leading-relaxed" style={{ color: '#6b5b4f' }}>
          <p>
            Innovation at Arth Group goes beyond aesthetics — it&apos;s about rethinking how spaces
            can serve the evolving needs of modern businesses. We integrate smart building
            technologies, IoT-enabled infrastructure, and cutting-edge design principles into
            every project.
          </p>
          <p>
            From energy-efficient facades to automated building management systems, our developments
            are designed to be future-ready. We invest in research and development to stay ahead of
            industry trends, ensuring our clients always have access to the latest in commercial
            real estate innovation.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Sustainability",
    icon: <Leaf className="w-4 h-4" />,
    content: (
      <div className="glass-card p-6 md:p-8">
        <h3 className="text-xl font-heading font-semibold mb-4" style={{ color: '#0a2540' }}>
          Building for Generations to Come
        </h3>
        <div className="space-y-4 leading-relaxed" style={{ color: '#6b5b4f' }}>
          <p>
            Sustainability isn&apos;t a checkbox for us — it&apos;s a core design principle. Every
            Arth Group development incorporates green building standards, rainwater harvesting,
            solar energy integration, and waste management systems that minimize environmental impact.
          </p>
          <p>
            We pursue green building certifications and implement energy-efficient systems that
            reduce operational costs for our clients while contributing to a healthier planet.
            Our goal is to create spaces that are as kind to the environment as they are to
            the businesses within them.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Quality",
    icon: <Award className="w-4 h-4" />,
    content: (
      <div className="glass-card p-6 md:p-8">
        <h3 className="text-xl font-heading font-semibold mb-4" style={{ color: '#0a2540' }}>
          Uncompromising Standards in Every Detail
        </h3>
        <div className="space-y-4 leading-relaxed" style={{ color: '#6b5b4f' }}>
          <p>
            Quality at Arth Group is non-negotiable. From the selection of materials to the
            final finishing touches, every element undergoes rigorous quality checks. Our
            in-house construction team ensures that international standards are met at every
            stage of development.
          </p>
          <p>
            We work with leading architects, structural engineers, and interior designers to
            deliver spaces that stand the test of time. Our 25+ years of construction expertise
            means we understand what quality truly means — and we deliver it consistently,
            project after project.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Community",
    icon: <Users className="w-4 h-4" />,
    content: (
      <div className="glass-card p-6 md:p-8">
        <h3 className="text-xl font-heading font-semibold mb-4" style={{ color: '#0a2540' }}>
          Creating Ecosystems, Not Just Buildings
        </h3>
        <div className="space-y-4 leading-relaxed" style={{ color: '#6b5b4f' }}>
          <p>
            We believe great commercial spaces are more than brick and mortar — they&apos;re
            ecosystems where businesses connect, collaborate, and grow together. Every Arth
            Group development is designed to foster community among its occupants.
          </p>
          <p>
            From shared amenity spaces and networking areas to community events and business
            forums, we create environments that encourage interaction and mutual growth. Our
            developments become business hubs where opportunities multiply through proximity
            and shared purpose.
          </p>
        </div>
      </div>
    ),
  },
];

export default function VisionMissionPage() {
  return (
    <main>
      <PageHero
        title="Vision & Mission"
        subtitle="Guided by purpose, driven by excellence"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Vision & Mission" },
        ]}
      />

      {/* Vision & Mission Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal direction="left" delay={0.1}>
              <GlassCard className="h-full p-8 md:p-10" hover={true}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold" style={{ color: '#0a2540' }}>
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: '#6b5b4f' }}>
                  {COMPANY.vision}
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <GlassCard className="h-full p-8 md:p-10" hover={true}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold" style={{ color: '#0a2540' }}>
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: '#6b5b4f' }}>
                  {COMPANY.mission}
                </p>
              </GlassCard>
            </ScrollReveal>
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
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-relaxed" style={{ color: '#ffffff' }}>
                &ldquo;Spaces shape thinking, Thinking shapes outcomes&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#0a2540' }}>
              Our Approach
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: '#6b5b4f' }}>
              How we translate our vision into tangible outcomes that create value for businesses, investors, and communities.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <TabPanel tabs={approachTabs} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
