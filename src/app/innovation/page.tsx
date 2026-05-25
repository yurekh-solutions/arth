"use client";

import {
  Building2,
  Thermometer,
  Wifi,
  KeyRound,
  Activity,
  ShieldCheck,
  Layers,
  HardHat,
  Blocks,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";

const smartFeatures = [
  {
    icon: Building2,
    title: "Building Automation",
    description:
      "Centralized BMS for lighting, HVAC, and elevator management — optimizing energy use and occupant comfort.",
  },
  {
    icon: Thermometer,
    title: "Smart HVAC",
    description:
      "AI-driven climate control that adapts to occupancy patterns, reducing energy usage by up to 30% while maximizing comfort.",
  },
  {
    icon: Wifi,
    title: "IoT Sensors",
    description:
      "Real-time monitoring of air quality, humidity, and occupancy through an integrated network of IoT sensors.",
  },
  {
    icon: KeyRound,
    title: "Digital Access Control",
    description:
      "Biometric and mobile-based access systems with multi-level authentication for secure, seamless entry.",
  },
  {
    icon: Activity,
    title: "Energy Monitoring",
    description:
      "Live dashboards for energy consumption tracking with AI-powered recommendations for optimization.",
  },
  {
    icon: ShieldCheck,
    title: "AI-Powered Security",
    description:
      "Advanced surveillance with facial recognition, behavior analytics, and automated threat detection systems.",
  },
];

const constructionMethods = [
  {
    icon: Layers,
    title: "Precast Concrete Technology",
    description:
      "Factory-manufactured structural components ensure precision, reduce waste, and accelerate construction timelines.",
  },
  {
    icon: HardHat,
    title: "BIM (Building Information Modeling)",
    description:
      "3D digital twin technology for precision planning, clash detection, and real-time construction monitoring.",
  },
  {
    icon: Blocks,
    title: "Modular Construction",
    description:
      "Pre-fabricated modular units assembled on-site for faster delivery without compromising quality.",
  },
];

export default function InnovationPage() {
  return (
    <>
      <PageHero
        title="Technology & Innovation"
        subtitle="Pioneering smart building solutions for the future of work"
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Technology & Innovation" },
        ]}
      />

      {/* Smart Building Technologies */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Smart Building Technologies
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Our buildings are powered by cutting-edge IoT, automation, and AI
                systems that create intelligent environments. From automated climate
                control to predictive maintenance, every system works in harmony to
                deliver peak performance and occupant satisfaction.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {smartFeatures.map((feature, index) => (
              <GlassCard key={feature.title} delay={index * 0.1}>
                <div className="flex flex-col items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Innovation */}
      <section className="section-padding bg-glass-white/5">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Construction Innovation
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We leverage modern construction methodologies that improve efficiency,
                sustainability, and quality. From digital twins to precast technology,
                innovation is embedded in how we build.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {constructionMethods.map((method, index) => (
              <GlassCard key={method.title} delay={index * 0.1}>
                <div className="flex flex-col items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <method.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {method.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax */}
      <ParallaxSection bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80">
        <div className="section-padding">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <ScrollReveal direction="up">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Building the Future, Today
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                With a relentless focus on innovation, we continuously integrate the
                latest technologies into our projects — ensuring our buildings remain
                relevant, efficient, and intelligent for decades to come.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      <CTASection
        title="Experience Smart Spaces"
        subtitle="Ready to work in a building that thinks ahead? Explore our technology-driven commercial properties."
      />
    </>
  );
}
