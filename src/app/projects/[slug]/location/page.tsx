"use client";

import { MapPin, Train, Plane, Car, Navigation } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { PROJECTS } from "@/lib/constants";

const locationFeatures = [
  { icon: <Train className="w-8 h-8" />, title: "Metro Connectivity", description: "5 min walk to nearest metro station" },
  { icon: <Plane className="w-8 h-8" />, title: "Airport Access", description: "30 min drive to international airport" },
  { icon: <Car className="w-8 h-8" />, title: "Highway Access", description: "Direct access to major highways" },
  { icon: <Navigation className="w-8 h-8" />, title: "Central Location", description: "Heart of the business district" },
];

export default function LocationPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <PageHero
        title={`${project.name} - Location`}
        subtitle="Prime location with excellent connectivity"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name, href: `/projects/${project.slug}` },
          { label: "Location" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
              Strategic Location
            </h2>
            <p className="text-white/60 text-center max-w-3xl mx-auto mb-12 responsive-text px-4">
              Located in the heart of the business district with seamless connectivity to major transport hubs.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal direction="left">
              <GlassCard>
                <h3 className="font-heading text-xl font-semibold text-white mb-4">Key Distances</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-white/80">Metro Station</span>
                    <span className="text-accent font-semibold">5 min walk</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-white/80">Airport</span>
                    <span className="text-accent font-semibold">30 min drive</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-white/80">Railway Station</span>
                    <span className="text-accent font-semibold">15 min drive</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-white/80">Highway Access</span>
                    <span className="text-accent font-semibold">2 min drive</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-white/80">IT Hub</span>
                    <span className="text-accent font-semibold">10 min drive</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Shopping Mall</span>
                    <span className="text-accent font-semibold">5 min drive</span>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <GlassCard>
                <h3 className="font-heading text-xl font-semibold text-white mb-4">Nearby Facilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Banks", "Restaurants", "Hospitals", "Hotels", "Schools", "Gyms"].map((facility, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-white/80">{facility}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <h3 className="font-heading text-2xl font-semibold text-white text-center mb-6">
              Location Map
            </h3>
            <div className="rounded-2xl overflow-hidden border border-glass-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.123456789!2d72.9167!3d20.3711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIyJzE2LjAiTiA3MsKwNTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title={`${project.name} Location`}
              />
            </div>
          </ScrollReveal>

          <div className="mt-12 text-center">
            <a href="/contact" className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all">
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
