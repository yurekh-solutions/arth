"use client";

import { Building2, Handshake, TrendingUp, Users } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";

export default function ChannelPartnerPage() {
  const benefits = [
    { icon: <TrendingUp className="w-12 h-12" />, title: "High Commissions", description: "Industry-leading commission structure up to 5%" },
    { icon: <Building2 className="w-12 h-12" />, title: "Premium Projects", description: "Access to exclusive commercial developments" },
    { icon: <Users className="w-12 h-12" />, title: "Marketing Support", description: "Comprehensive marketing materials and campaigns" },
    { icon: <Handshake className="w-12 h-12" />, title: "Dedicated Manager", description: "Personal relationship manager for support" },
  ];

  return (
    <main style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Channel Partner Program"
        subtitle="Partner with Arth Group for mutual growth"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Channel Partner" },
        ]}
      />

      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Join Our Partner Network
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12 responsive-text px-4" style={{ color: 'var(--color-muted-foreground)' }}>
              Become an authorized channel partner and access exclusive benefits, premium inventory, and dedicated support.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="mb-4" style={{ color: 'var(--color-accent)' }}>{benefit.icon}</div>
                <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>{benefit.title}</h3>
                <p className="responsive-text" style={{ color: 'var(--color-muted-foreground)' }}>{benefit.description}</p>
              </GlassCard>
            ))}
          </div>

          <div className="neumorphic p-8">
            <GlassCard>
              <h3 className="font-heading text-2xl font-semibold mb-6 text-center" style={{ color: 'var(--color-primary)' }}>Apply to Become a Partner</h3>
              <div className="text-center max-w-2xl mx-auto">
                <p className="mb-6" style={{ color: 'var(--color-muted-foreground)' }}>
                  Interested in partnering with us? Contact us directly on WhatsApp to get started.
                </p>
                <a
                  href="https://wa.me/917285851515?text=Hi%2C%20I%27m%20interested%20in%20becoming%20a%20Channel%20Partner%20with%20Arth%20Group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 font-bold rounded-lg transition-all hover:scale-105"
                  style={{ background: '#25D366', color: '#ffffff' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  );
}
