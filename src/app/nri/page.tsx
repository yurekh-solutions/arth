"use client";

import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";

export default function NRIPage() {
  const benefits = [
    { title: "Tax Benefits", description: "Special tax advantages for NRI investors in commercial real estate" },
    { title: "Repatriation", description: "Easy repatriation of rental income and sale proceeds" },
    { title: "Documentation Support", description: "Complete assistance with NRI-specific documentation" },
    { title: "Virtual Tours", description: "Remote property viewing through virtual reality tours" },
    { title: "Power of Attorney", description: "Secure PoA services for hassle-free transactions" },
    { title: "Dedicated Support", description: "24/7 customer support across all time zones" },
  ];

  return (
    <main style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="NRI Services"
        subtitle="Exclusive real estate solutions for Non-Resident Indians"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "NRI Services" },
        ]}
      />

      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Invest from Anywhere in the World
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12 responsive-text px-4" style={{ color: 'var(--color-muted-foreground)' }}>
              Arth Group offers specialized services for NRIs looking to invest in premium Indian commercial real estate.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>{benefit.title}</h3>
                <p className="responsive-text" style={{ color: 'var(--color-muted-foreground)' }}>{benefit.description}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/contact" className="inline-block px-8 py-4 font-bold rounded-lg transition-all" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}>
              Contact NRI Desk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
