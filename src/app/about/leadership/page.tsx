"use client";

import Image from "next/image";
import { Heart, Target, Zap, Shield, Sparkles, HandshakeIcon } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TeamCard from "@/components/ui/TeamCard";
import FlipCard from "@/components/ui/FlipCard";
import GlassCard from "@/components/ui/GlassCard";
import { TEAM_MEMBERS, CORE_VALUES } from "@/lib/constants";

const cultureValues = [
  { icon: <Heart className="w-6 h-6" />, title: "People First", description: "We invest in our people, fostering growth and celebrating achievements." },
  { icon: <Target className="w-6 h-6" />, title: "Purpose Driven", description: "Every action is aligned with our mission to create meaningful spaces." },
  { icon: <Zap className="w-6 h-6" />, title: "Agile & Adaptive", description: "We embrace change and respond swiftly to evolving market dynamics." },
  { icon: <Shield className="w-6 h-6" />, title: "Integrity Always", description: "Transparency and honesty form the bedrock of every relationship." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Excellence Mindset", description: "We set the highest standards and exceed them consistently." },
  { icon: <HandshakeIcon className="w-6 h-6" />, title: "Collaborative Spirit", description: "We believe the best outcomes emerge from teamwork and shared vision." },
];

const founder = TEAM_MEMBERS.find((m) => m.id === "1")!;
const otherMembers = TEAM_MEMBERS.filter((m) => m.id !== "1");

export default function LeadershipPage() {
  return (
    <main>
      <PageHero
        title="Leadership Team"
        subtitle="Visionaries building tomorrow's landmarks"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Leadership" },
        ]}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#0a2540' }}>
                The People Behind the Vision
              </h2>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#6b5b4f' }}>
                Our leadership team brings together over 75 years of combined experience in real
                estate development, architecture, operations, and strategic growth. Together, they
                steer Arth Group toward its vision of redefining urban spaces across India.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder FlipCard */}
      <section className="section-padding bg-glass-white/5">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: '#0a2540' }}>
              Our Founder
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="scale" delay={0.1}>
            <div className="max-w-md mx-auto">
              <FlipCard
                height="h-96"
                front={
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-accent/40">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-heading font-bold" style={{ color: '#0a2540' }}>
                      {founder.name}
                    </h3>
                    <p className="text-accent font-medium">{founder.role}</p>
                    <p className="text-sm mt-2" style={{ color: '#6b5b4f' }}>Hover to read more</p>
                  </div>
                }
                back={
                  <div className="text-center">
                    <h3 className="text-lg font-heading font-bold mb-3" style={{ color: '#0a2540' }}>
                      {founder.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6b5b4f' }}>
                      {founder.bio}
                    </p>
                  </div>
                }
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: '#0a2540' }}>
              Leadership Team
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, index) => (
              <ScrollReveal key={member.id} direction="up" delay={index * 0.1}>
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

      {/* Our Culture */}
      <section className="section-padding bg-glass-white/5">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#0a2540' }}>
              Our Culture
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: '#6b5b4f' }}>
              The principles and values that define how we work, collaborate, and grow together as a team.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((value, index) => (
              <ScrollReveal key={value.title} direction="up" delay={index * 0.1}>
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-accent">{value.icon}</div>
                    <h3 className="text-lg font-heading font-semibold" style={{ color: '#0a2540' }}>
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b5b4f' }}>
                    {value.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
