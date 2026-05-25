import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/layout/CTASection";
import { AWARDS } from "@/lib/constants";
import { Award, Building2, Calendar, ArrowRight } from "lucide-react";

const AWARD_DETAILS: Record<string, string[]> = {
  "best-commercial-developer-2024": [
    "The Gujarat Real Estate Awards recognized Arth Group as the Best Commercial Developer of 2024 in a prestigious ceremony attended by industry leaders, government officials, and real estate professionals from across the state. This award acknowledges Arth Group's exceptional contributions to commercial real estate development over the past two decades.",
    "The jury noted Arth Group's portfolio of landmark projects — including The Frontedge Park in Vapi, Vedant Connect in Kalyan, and The Rise in Ahmedabad — as examples of how thoughtful design, premium execution, and strategic location selection can elevate commercial real estate standards. The company's consistent delivery on quality and timelines was highlighted as a key differentiator.",
    "Accepting the award, Mr. Ajay Thakur expressed gratitude to the entire Arth Group team and its partners: 'This recognition belongs to every architect, engineer, contractor, and team member who shares our vision of creating spaces that hold meaning and value. We remain committed to pushing the boundaries of commercial real estate excellence in Gujarat and beyond.'"
  ],
  "green-building-excellence-2024": [
    "The Indian Green Building Council (IGBC) presented the Green Building Excellence Award to Arth Group at its annual convention, recognizing the company's comprehensive approach to sustainable development. The award evaluates developers across multiple sustainability parameters including energy efficiency, water conservation, materials sourcing, indoor environmental quality, and innovation.",
    "Arth Group's projects scored particularly high on energy efficiency and water conservation metrics. The Frontedge Park's design incorporates a 40% reduction in energy consumption compared to conventional commercial buildings through high-performance glazing, LED lighting systems, sensor-based controls, and rooftop solar installations. Water recycling and rainwater harvesting systems achieve a 50% reduction in municipal water dependency.",
    "The IGBC also recognized Arth Group's commitment to extending sustainability beyond individual buildings to encompass the broader development ecosystem — including EV charging infrastructure, bicycle parking, pedestrian-friendly site planning, and native landscaping that supports local biodiversity. This holistic approach sets a benchmark for the industry."
  ],
  "innovation-in-design-2023": [
    "The National Architecture Foundation honored Arth Group with the Innovation in Design Award 2023, recognizing the company's pioneering approach to commercial architecture that seamlessly blends aesthetics, functionality, and sustainability. The award specifically cited the Emirates-inspired design of Vedant Connect and the integrated business park concept of The Frontedge Park.",
    "The jury praised the design team's ability to create distinctive architectural identities for each project while maintaining a coherent design philosophy rooted in human-centric principles. The use of natural light optimization, biophilic elements, and flexible floor plates that accommodate diverse tenant requirements was noted as particularly innovative for the Gujarat market.",
    "Head of Design & Architecture, Priya Mehta, who accepted the award on behalf of Arth Group, commented: 'Architecture is not just about creating beautiful buildings — it's about designing environments that enhance human potential. Every Arth Group project starts with the question: how will this space improve the lives of the people who use it every day? This award validates our design-first approach.'"
  ],
};

export function generateStaticParams() {
  return AWARDS.map((award) => ({
    slug: award.slug,
  }));
}

export default function AwardDetailPage({ params }: { params: { slug: string } }) {
  const award = AWARDS.find((a) => a.slug === params.slug);

  if (!award) {
    notFound();
  }

  const details = AWARD_DETAILS[award.slug] || [award.description];
  const relatedAwards = AWARDS.filter((a) => a.id !== award.id);

  return (
    <main className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      <PageHero
        title={award.title}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Awards", href: "/awards" },
          { label: award.title },
        ]}
      />

      {/* Award Detail */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <ScrollReveal direction="up">
              <div className="neumorphic overflow-hidden mb-8">
                <GlassCard className="overflow-hidden p-0">
                  <div className="relative h-64 md:h-[450px]">
                    <Image
                      src={award.image.startsWith('https://images.unsplash.com') ? award.image : `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80`}
                      alt={award.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10, 37, 64, 0.7) 0%, transparent 100%)' }} />
                    {/* Year & Org Overlay */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center glass">
                        <span className="font-heading font-bold text-xl" style={{ color: 'var(--color-accent)' }}>
                          {award.year}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                          <span className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                            {award.organization}
                          </span>
                        </div>
                        <p className="text-sm mt-1 flex items-center gap-2" style={{ color: '#ffffff' }}>
                          <Building2 className="w-3.5 h-3.5" /> Arth Group
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>

            {/* Meta Bar */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2" style={{ background: 'rgba(224, 122, 95, 0.1)', border: '1px solid rgba(224, 122, 95, 0.2)', color: 'var(--color-accent)' }}>
                  <Calendar className="w-4 h-4" />
                  {award.year}
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2" style={{ background: 'rgba(224, 122, 95, 0.1)', border: '1px solid rgba(224, 122, 95, 0.2)', color: 'var(--color-muted-foreground)' }}>
                  <Award className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                  {award.organization}
                </span>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-6">
                {details.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: 'var(--color-muted-foreground)' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Awards */}
      {relatedAwards.length > 0 && (
        <section className="section-padding pt-0" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
          <div className="container-custom max-w-4xl">
            <ScrollReveal direction="up">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--color-primary)' }}>
                Other Recognitions
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedAwards.map((relAward, index) => (
                <ScrollReveal key={relAward.id} direction="up" delay={index * 0.1}>
                  <Link href={`/awards/${relAward.slug}`}>
                    <div className="neumorphic p-6 group h-full">
                      <GlassCard className="p-0" hover={true}>
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(224, 122, 95, 0.15)' }}>
                            <span className="font-heading font-bold" style={{ color: 'var(--color-accent)' }}>
                              {relAward.year}
                            </span>
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-medium" style={{ color: 'var(--color-accent)' }}>
                              {relAward.organization}
                            </span>
                            <h4 className="font-heading text-lg font-semibold group-hover:text-accent transition-colors mt-1" style={{ color: 'var(--color-primary)' }}>
                              {relAward.title}
                            </h4>
                            <p className="text-sm mt-2 line-clamp-2" style={{ color: 'var(--color-muted-foreground)' }}>
                              {relAward.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 group-hover:text-accent transition-colors flex-shrink-0 mt-1" style={{ color: 'var(--color-muted-foreground)' }} />
                        </div>
                      </GlassCard>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
}
