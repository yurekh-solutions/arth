"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AccordionFAQ from "@/components/ui/AccordionFAQ";
import GlassButton from "@/components/ui/GlassButton";
import { FAQS } from "@/lib/constants";

const categories = ["All", ...Array.from(new Set(FAQS.map((f) => f.category)))];

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFAQs =
    activeCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  return (
    <main style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Arth Group"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "FAQs" },
        ]}
      />

      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          {/* Category Filters */}
          <ScrollReveal direction="up">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === category
                      ? "bg-accent/20 text-accent border-accent/40"
                      : ""
                  }`}
                  style={activeCategory !== category ? {
                    background: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-muted-foreground)'
                  } : undefined}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <AccordionFAQ
              items={filteredFAQs.map((f) => ({
                question: f.question,
                answer: f.answer,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="p-10 md:p-14 max-w-3xl mx-auto text-center rounded-2xl" style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', boxShadow: '0 8px 32px rgba(10, 37, 64, 0.08)' }}>
              <MessageCircle className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                Still Have Questions?
              </h2>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--color-muted-foreground)' }}>
                Can&apos;t find what you&apos;re looking for? Our team is here to help you with any questions about our projects or services.
              </p>
              <GlassButton href="/contact" variant="primary" size="lg">
                Contact Us
              </GlassButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
