"use client";

import { SERVICES, COMPANY } from "@/lib/constants";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ServiceCard from "@/components/ui/ServiceCard";
import StatCard from "@/components/ui/StatCard";
import ParallaxSection from "@/components/ui/ParallaxSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Briefcase, Calendar, Users } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive real estate solutions for modern businesses"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center px-4">
              <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed responsive-text">
                At Arth Group, we offer a full spectrum of real estate services —
                from premium office and retail space development to land acquisition,
                construction, and end-to-end project management. With over 25 years of
                expertise, we deliver spaces that inspire growth, innovation, and lasting value.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
        className="py-16 sm:py-24 md:py-32"
      >
        <div className="container-custom text-center px-4">
          <ScrollReveal direction="up">
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white max-w-4xl mx-auto leading-snug responsive-heading">
              &ldquo;25+ years of expertise in every service we deliver&rdquo;
            </blockquote>
            <p className="text-accent mt-4 text-base sm:text-lg">— Arth Group</p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 responsive-subheading">
              Our Track Record
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <StatCard
              value={`${COMPANY.stats.projectsDelivered}+`}
              label="Projects Delivered"
              icon={<Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />}
              delay={0}
            />
            <StatCard
              value={`${COMPANY.stats.yearsExperience}+`}
              label="Years Experience"
              icon={<Calendar className="w-5 h-5 sm:w-6 sm:h-6" />}
              delay={0.1}
            />
            <StatCard
              value={`${COMPANY.stats.happyClients}+`}
              label="Happy Clients"
              icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Discuss Your Project?"
        subtitle="Let our team of experts help you find the perfect real estate solution tailored to your business needs."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
