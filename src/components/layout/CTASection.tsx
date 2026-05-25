import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Ready to Find Your Perfect Space?",
  subtitle = "Let us help you discover the ideal commercial property that aligns with your business vision and growth ambitions.",
  buttonText = "Contact Us",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'var(--color-background)' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(224, 122, 95, 0.05)' }} />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(224, 122, 95, 0.03)' }} />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal direction="up">
          <div className="glass-card p-10 md:p-16 max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
              {title}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
              {subtitle}
            </p>
            <Link
              href={buttonHref}
              className="solid-btn px-8 py-3.5 text-base font-semibold rounded-lg inline-block"
            >
              {buttonText}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
