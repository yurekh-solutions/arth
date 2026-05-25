"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Phone, Mail } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import GlassButton from "@/components/ui/GlassButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <>
      <PageHero
        title="Thank You!"
        subtitle="We appreciate you reaching out to us"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Thank You" },
        ]}
      />

      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="neumorphic p-10 md:p-16 max-w-2xl mx-auto text-center rounded-2xl">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-20 h-20" style={{ color: '#22c55e' }} />
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Your inquiry has been received!
              </h2>

              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                Our team will get back to you within 24 hours. We look forward to
                helping you find the perfect commercial space.
              </p>

              <div className="glass-card p-6 rounded-xl mb-8 inline-block text-left" style={{ background: 'rgba(224, 122, 95, 0.08)', border: '1px solid rgba(224, 122, 95, 0.2)' }}>
                <p className="text-sm mb-3" style={{ color: 'var(--color-muted-foreground)' }}>For urgent matters, contact us directly:</p>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                  <span style={{ color: 'var(--color-primary)' }}>+91 7285851515</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                  <span style={{ color: 'var(--color-primary)' }}>Reachus@arthgroup.co.in</span>
                </div>
              </div>

              <div className="block">
                <GlassButton href="/" variant="primary" size="lg">
                  Back to Home
                </GlassButton>
              </div>

              <p className="text-sm mt-6" style={{ color: 'var(--color-muted-foreground)', opacity: 0.6 }}>
                You will be redirected to the homepage in 5 seconds...
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
