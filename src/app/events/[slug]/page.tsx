import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/layout/CTASection";
import { EVENTS } from "@/lib/constants";
import { Calendar, MapPin, Tag, Clock, ArrowRight } from "lucide-react";

const EVENT_DETAILS: Record<string, string[]> = {
  "frontedge-park-grand-opening": [
    "Join us for the grand unveiling of The Frontedge Park — Vapi's most iconic commercial landmark and South Gujarat's premier business address. This momentous occasion marks the culmination of years of meticulous planning, innovative design, and world-class construction that has resulted in a 23-storey architectural masterpiece.",
    "The grand opening ceremony will feature an exclusive tour of the building's premium facilities, including the state-of-the-art lobbies, high-speed elevator systems, rooftop lounge, and green building features. Distinguished guests will include industry leaders, government officials, investor partners, and future tenants who will experience firsthand the quality and innovation that define Arth Group's approach to commercial real estate.",
    "The event will also showcase the surrounding infrastructure developments and connectivity improvements that make The Frontedge Park the ideal business destination. Attendees will learn about available office and retail spaces, investment opportunities, and the comprehensive amenity ecosystem that supports modern businesses. Light refreshments and networking opportunities will be provided throughout the event."
  ],
  "investor-meet-2025": [
    "Arth Group cordially invites distinguished investors to an exclusive gathering designed to unveil our upcoming project pipeline, share market insights, and present premium investment opportunities in commercial real estate. This intimate event brings together high-net-worth investors, financial advisors, and industry experts for an evening of informed discussion and strategic networking.",
    "The event agenda includes a comprehensive market analysis presentation covering Gujarat's commercial real estate growth trajectory, rental yield trends, and infrastructure development catalysts. Our leadership team will provide detailed walkthroughs of upcoming projects, including architectural renderings, financial projections, and competitive positioning within their respective micro-markets.",
    "Exclusive early-bird investment opportunities will be presented to attendees, along with personalized consultations with our sales and finance teams. Whether you're a seasoned real estate investor or exploring commercial property for the first time, this event provides the insights and access needed to make informed investment decisions with confidence."
  ],
  "sustainability-summit-2025": [
    "Arth Group is proud to host the Sustainability in Real Estate Summit 2025 — a thought leadership event bringing together architects, developers, sustainability consultants, policy makers, and industry experts to discuss the future of eco-friendly construction and sustainable urban development.",
    "The summit will feature keynote addresses from leading sustainability experts, panel discussions on green building technologies and certification frameworks, and interactive workshops on implementing sustainable practices in commercial real estate development. Topics include net-zero building design, circular economy in construction, smart building technologies for energy optimization, and the business case for sustainable development.",
    "Attendees will gain practical insights into reducing environmental impact while enhancing property values and tenant satisfaction. The event also provides excellent networking opportunities with like-minded professionals committed to building a more sustainable future. A showcase of sustainable building materials and technologies will be featured throughout the venue."
  ],
};

export function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = EVENTS.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  const details = EVENT_DETAILS[event.slug] || [event.description];
  const eventDate = new Date(event.date);
  const relatedEvents = EVENTS.filter((e) => e.id !== event.id);

  return (
    <main className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      <PageHero
        title={event.title}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
      />

      {/* Event Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <ScrollReveal direction="up">
              <GlassCard className="overflow-hidden p-0 mb-8">
                <div className="relative h-64 md:h-[400px]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Event Info Cards */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <GlassCard className="text-center py-5" hover={false}>
                  <Calendar className="w-6 h-6 mx-auto mb-2" style={{ color: 'var(--color-accent)' }} />
                  <p className="font-medium text-sm" style={{ color: 'var(--color-primary)' }}>
                    {eventDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </GlassCard>
                <GlassCard className="text-center py-5" hover={false}>
                  <MapPin className="w-6 h-6 mx-auto mb-2" style={{ color: 'var(--color-accent)' }} />
                  <p className="font-medium text-sm" style={{ color: 'var(--color-primary)' }}>{event.location}</p>
                </GlassCard>
                <GlassCard className="text-center py-5" hover={false}>
                  <Tag className="w-6 h-6 mx-auto mb-2" style={{ color: 'var(--color-accent)' }} />
                  <p className="font-medium text-sm" style={{ color: 'var(--color-primary)' }}>{event.type}</p>
                </GlassCard>
              </div>
            </ScrollReveal>

            {/* Content */}
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

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="section-padding pt-0" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
          <div className="container-custom max-w-4xl">
            <ScrollReveal direction="up">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: 'var(--color-primary)' }}>
                Other Events
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedEvents.map((relEvent, index) => {
                const relDate = new Date(relEvent.date);
                return (
                  <ScrollReveal key={relEvent.id} direction="up" delay={index * 0.1}>
                    <Link href={`/events/${relEvent.slug}`}>
                      <GlassCard className="p-5 group h-full" hover={true}>
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-16 rounded-lg flex flex-col items-center justify-center flex-shrink-0" style={{ background: 'rgba(224, 122, 95, 0.1)', border: '1px solid rgba(224, 122, 95, 0.2)' }}>
                            <span className="font-heading font-bold text-lg leading-none" style={{ color: 'var(--color-accent)' }}>
                              {relDate.getDate()}
                            </span>
                            <span className="text-xs uppercase mt-0.5" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
                              {relDate.toLocaleDateString("en-US", { month: "short" })}
                            </span>
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-medium" style={{ color: 'var(--color-accent)' }}>
                              {relEvent.type}
                            </span>
                            <h4 className="font-heading text-lg font-semibold group-hover:text-accent transition-colors mt-1" style={{ color: 'var(--color-primary)' }}>
                              {relEvent.title}
                            </h4>
                            <p className="text-sm mt-1 flex items-center gap-1" style={{ color: 'var(--color-muted-foreground)' }}>
                              <MapPin className="w-3 h-3" /> {relEvent.location}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 group-hover:text-accent transition-colors flex-shrink-0 mt-2" style={{ color: 'var(--color-muted-foreground)' }} />
                        </div>
                      </GlassCard>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Interested in This Event?"
        subtitle="Contact our team for registration details, venue information, and any other inquiries about this event."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </main>
  );
}
