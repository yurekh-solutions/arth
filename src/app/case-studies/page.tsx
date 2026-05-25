"use client";

import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { PROJECTS } from "@/lib/constants";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      project: PROJECTS[0],
      challenge: "Design a modern IT hub for Fortune 500 companies",
      solution: "Created flexible floor plans with smart building automation and sustainable features",
      result: "95% occupancy within 6 months, LEED Platinum certification",
      metrics: { occupancy: "95%", timeline: "18 months", roi: "35%" },
    },
    {
      project: PROJECTS[1],
      challenge: "Develop a retail-commercial complex in emerging market",
      solution: "Mixed-use design with integrated parking and premium amenities",
      result: "200+ businesses established, 500+ jobs created",
      metrics: { occupancy: "88%", timeline: "24 months", roi: "42%" },
    },
    {
      project: PROJECTS[2],
      challenge: "Transform industrial area into modern business district",
      solution: "Phased development with infrastructure upgrades and green spaces",
      result: "Revitalized area with 50+ companies relocated",
      metrics: { occupancy: "82%", timeline: "36 months", roi: "55%" },
    },
  ];

  return (
    <main style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Case Studies"
        subtitle="Real results from real projects"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
      />

      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Success Stories
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12 responsive-text px-4" style={{ color: 'var(--color-muted-foreground)' }}>
              Explore how Arth Group has delivered exceptional results across diverse commercial real estate projects.
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <GlassCard>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>{study.project.name}</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>Challenge:</h4>
                          <p className="responsive-text" style={{ color: 'var(--color-muted-foreground)' }}>{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>Solution:</h4>
                          <p className="responsive-text" style={{ color: 'var(--color-muted-foreground)' }}>{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>Result:</h4>
                          <p className="responsive-text" style={{ color: 'var(--color-muted-foreground)' }}>{study.result}</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-accent/10 rounded-lg">
                        <div className="text-3xl font-bold text-accent">{study.metrics.occupancy}</div>
                        <div className="text-sm mt-2" style={{ color: 'var(--color-muted-foreground)' }}>Occupancy</div>
                      </div>
                      <div className="text-center p-4 bg-accent/10 rounded-lg">
                        <div className="text-3xl font-bold text-accent">{study.metrics.timeline}</div>
                        <div className="text-sm mt-2" style={{ color: 'var(--color-muted-foreground)' }}>Timeline</div>
                      </div>
                      <div className="text-center p-4 bg-accent/10 rounded-lg">
                        <div className="text-3xl font-bold text-accent">{study.metrics.roi}</div>
                        <div className="text-sm mt-2" style={{ color: 'var(--color-muted-foreground)' }}>ROI</div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
