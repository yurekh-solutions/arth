"use client";

import { Building2, Users, Briefcase, Ruler } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Timeline from "@/components/ui/Timeline";
import TeamCard from "@/components/ui/TeamCard";
import { COMPANY, TEAM_MEMBERS } from "@/lib/constants";

const milestones = [
  { year: "1999", title: "Founded by Mr. Ajay Thakur", description: "Arth Group was established with a vision to create meaningful spaces in real estate development." },
  { year: "2005", title: "First Commercial Project Completed", description: "Delivered our first major commercial project, setting the standard for quality and innovation." },
  { year: "2010", title: "Expanded to Warehouse & Industrial", description: "Broadened our portfolio to include warehouse and industrial construction services." },
  { year: "2015", title: "Launched Premium Commercial Division", description: "Entered the premium commercial development segment with world-class office spaces." },
  { year: "2020", title: "Entered Ahmedabad Market", description: "Expanded operations to Ahmedabad, tapping into Gujarat's fastest-growing commercial corridor." },
  { year: "2023", title: "Launched The Frontedge Park & Vedant Connect", description: "Unveiled two flagship projects — a 23-storey business park in Vapi and Kalyan's tallest commercial tower." },
  { year: "2024", title: "Won Best Commercial Developer Award", description: "Recognized as the Best Commercial Developer in Gujarat for outstanding contributions to the industry." },
];

export default function AboutPage() {
  return (
    <main style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Who We Are"
        subtitle="Over 25 years creating spaces that hold meaning"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Company Intro */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 responsive-heading" style={{ color: 'var(--color-primary)' }}>
                Building Meaningful Spaces
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed responsive-text" style={{ color: 'var(--color-muted-foreground)' }}>
                {COMPANY.description} At {COMPANY.name}, we don&apos;t just construct buildings — we create
                environments that inspire productivity, foster growth, and hold lasting value.
                Our name &ldquo;Arth&rdquo; signifies essence, and our essence is building spaces that
                shape thinking and drive outcomes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 responsive-subheading" style={{ color: 'var(--color-primary)' }}>
              Our Impact in Numbers
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <AnimatedCounter
              target={COMPANY.stats.yearsExperience}
              suffix="+"
              label="Years of Experience"
              icon={<Building2 className="w-6 h-6 sm:w-8 sm:h-8" />}
            />
            <AnimatedCounter
              target={COMPANY.stats.projectsDelivered}
              suffix="+"
              label="Projects Delivered"
              icon={<Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />}
            />
            <AnimatedCounter
              target={COMPANY.stats.happyClients}
              suffix="+"
              label="Happy Clients"
              icon={<Users className="w-6 h-6 sm:w-8 sm:h-8" />}
            />
            <AnimatedCounter
              target={COMPANY.stats.sqftDelivered}
              suffix="+"
              label="Sq. Ft. Delivered"
              icon={<Ruler className="w-6 h-6 sm:w-8 sm:h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 responsive-subheading" style={{ color: 'var(--color-primary)' }}>
              Our Journey
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 responsive-text px-4" style={{ color: 'var(--color-muted-foreground)' }}>
              Key milestones that have shaped Arth Group into the trusted name it is today.
            </p>
          </ScrollReveal>
          <Timeline items={milestones} />
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 responsive-subheading" style={{ color: 'var(--color-primary)' }}>
              Meet Our Leaders
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 responsive-text px-4" style={{ color: 'var(--color-muted-foreground)' }}>
              The visionary team driving Arth Group&apos;s mission to redefine commercial real estate.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TEAM_MEMBERS.map((member) => (
              <ScrollReveal key={member.id} direction="up" delay={Number(member.id) * 0.1}>
                <TeamCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                  social={member.social}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
