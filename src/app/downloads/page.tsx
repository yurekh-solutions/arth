"use client";

import { FileText, Download } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const downloads = [
  {
    title: "The Frontedge Park Brochure",
    description: "Complete project details, floor plans, and amenities overview.",
    size: "4.2 MB",
  },
  {
    title: "Vedant Connect Brochure",
    description: "Mixed-use development with retail, office, and co-working spaces.",
    size: "3.8 MB",
  },
  {
    title: "The Rise Brochure",
    description: "Premium commercial tower in the heart of Ahmedabad.",
    size: "5.1 MB",
  },
  {
    title: "Company Profile",
    description: "Arth Group overview, history, portfolio, and vision.",
    size: "2.6 MB",
  },
  {
    title: "Investment Guide",
    description: "Commercial real estate investment insights and market analysis.",
    size: "1.9 MB",
  },
  {
    title: "Sustainability Report",
    description: "Annual sustainability initiatives, impact metrics, and goals.",
    size: "3.4 MB",
  },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads & Resources"
        subtitle="Access brochures, guides, and reports for our projects"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Downloads & Resources" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Resource Library
              </h2>
              <p className="text-white/70 text-lg">
                Download project brochures, investment guides, and corporate reports.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {downloads.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.1}>
                <div className="flex flex-col items-start gap-4 h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-1">
                      {item.description}
                    </p>
                    <p className="text-white/40 text-xs">PDF • {item.size}</p>
                  </div>
                  <GlassButton
                    href="#"
                    variant="primary"
                    size="sm"
                    icon={<Download className="w-4 h-4" />}
                  >
                    Download
                  </GlassButton>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need More Information?"
        subtitle="Contact our team for detailed project specifications, pricing, or custom presentations."
      />
    </>
  );
}
