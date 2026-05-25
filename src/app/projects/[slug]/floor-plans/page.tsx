"use client";

import { Building2, Ruler, Grid3X3 } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { PROJECTS } from "@/lib/constants";

const floorPlans = [
  { type: "Small Office", area: "500-800 sq ft", price: "₹45-72 Lakhs", icon: <Building2 className="w-10 h-10" />, features: ["1-2 Cabins", "Open workspace", "Pantry area", "Reception"] },
  { type: "Medium Office", area: "1,000-2,000 sq ft", price: "₹90 Lakhs - 1.8 Cr", icon: <Grid3X3 className="w-10 h-10" />, features: ["3-5 Cabins", "Conference room", "Workstations", "Server room"] },
  { type: "Large Office", area: "2,500-5,000 sq ft", price: "₹2.25-4.5 Cr", icon: <Building2 className="w-10 h-10" />, features: ["6-10 Cabins", "Board room", "Cafeteria", "Multiple zones"] },
  { type: "Full Floor", area: "8,000-12,000 sq ft", price: "₹7-10.8 Cr", icon: <Building2 className="w-10 h-10" />, features: ["Complete floor", "Custom layout", "Private lobby", "Dedicated elevators"] },
];

export default function FloorPlansPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <PageHero
        title={`${project.name} - Floor Plans`}
        subtitle="Flexible spaces designed for your business needs"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name, href: `/projects/${project.slug}` },
          { label: "Floor Plans" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
              Floor Plans & Pricing
            </h2>
            <p className="text-white/60 text-center max-w-3xl mx-auto mb-12 responsive-text px-4">
              Choose from a variety of thoughtfully designed floor plans that adapt to your business requirements.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {floorPlans.map((plan, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="text-accent">
                      {plan.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{plan.price}</div>
                      <div className="text-sm text-white/60">{plan.area}</div>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {plan.type}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-4 px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all responsive-text">
                    Download Floor Plan
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm mb-4">
              Custom configurations available for specific requirements
            </p>
            <a href="/contact" className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all">
              Request Custom Layout
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
