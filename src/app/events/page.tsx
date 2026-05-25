"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { EVENTS } from "@/lib/constants";
import { Calendar, MapPin, Tag, ArrowRight } from "lucide-react";

export default function EventsPage() {
  const now = new Date();
  const upcomingEvents = EVENTS.filter((e) => new Date(e.date) >= now);
  const pastEvents = EVENTS.filter((e) => new Date(e.date) < now);

  return (
    <main className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Events & Announcements"
        subtitle="Stay connected with Arth Group through our events, launches, and industry gatherings"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
      />

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="section-padding" style={{ background: 'var(--color-background)' }}>
          <div className="container-custom">
            <ScrollReveal direction="up">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
                Upcoming Events
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => {
                const eventDate = new Date(event.date);
                return (
                  <ScrollReveal key={event.id} direction="up" delay={index * 0.1}>
                    <Link href={`/events/${event.slug}`}>
                      <GlassCard className="overflow-hidden p-0 group h-full" hover={true}>
                        {/* Image */}
                        <div className="relative h-48">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                          {/* Calendar Date Badge */}
                          <div className="absolute top-4 left-4 w-14 h-16 rounded-lg bg-accent/20 backdrop-blur-sm border border-accent/30 flex flex-col items-center justify-center">
                            <span className="text-accent font-heading font-bold text-xl leading-none">
                              {eventDate.getDate()}
                            </span>
                            <span className="text-accent/80 text-xs uppercase mt-0.5">
                              {eventDate.toLocaleDateString("en-US", { month: "short" })}
                            </span>
                          </div>
                          {/* Type Badge */}
                          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: 'var(--color-primary)' }}>
                            <Tag className="w-3 h-3" />
                            {event.type}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2" style={{ color: 'var(--color-primary)' }}>
                            {event.title}
                          </h3>
                          <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--color-muted-foreground)' }}>
                            {event.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                              <Calendar className="w-3.5 h-3.5" />
                              {eventDate.toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                              <MapPin className="w-3.5 h-3.5" />
                              {event.location}
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(224, 122, 95, 0.2)' }}>
                            <span className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                              Learn More <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
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

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="section-padding pt-0" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
          <div className="container-custom">
            <ScrollReveal direction="up">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
                Past Events
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => {
                const eventDate = new Date(event.date);
                return (
                  <ScrollReveal key={event.id} direction="up" delay={index * 0.1}>
                    <Link href={`/events/${event.slug}`}>
                      <GlassCard className="overflow-hidden p-0 group h-full" hover={true}>
                        {/* Image */}
                        <div className="relative h-48">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10, 37, 64, 0.6) 0%, transparent 100%)' }} />
                          {/* Calendar Date Badge */}
                          <div className="absolute top-4 left-4 w-14 h-16 rounded-lg flex flex-col items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
                            <span className="font-heading font-bold text-xl leading-none" style={{ color: 'var(--color-accent)' }}>
                              {eventDate.getDate()}
                            </span>
                            <span className="text-xs uppercase mt-0.5" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
                              {eventDate.toLocaleDateString("en-US", { month: "short" })}
                            </span>
                          </div>
                          {/* Type Badge */}
                          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: 'var(--color-primary)' }}>
                            <Tag className="w-3 h-3" />
                            {event.type}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="font-heading text-lg font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2" style={{ color: 'var(--color-primary)' }}>
                            {event.title}
                          </h3>
                          <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--color-muted-foreground)' }}>
                            {event.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                              <Calendar className="w-3.5 h-3.5" />
                              {eventDate.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                              <MapPin className="w-3.5 h-3.5" />
                              {event.location}
                            </div>
                          </div>
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

      {/* Show all events if none are in "past" yet */}
      {upcomingEvents.length === 0 && pastEvents.length === 0 && (
        <section className="section-padding" style={{ background: 'var(--color-background)' }}>
          <div className="container-custom text-center">
            <p className="text-lg" style={{ color: 'var(--color-muted-foreground)' }}>No events found.</p>
          </div>
        </section>
      )}
    </main>
  );
}
