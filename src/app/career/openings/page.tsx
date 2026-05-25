"use client";

import { useState } from "react";
import { MapPin, CheckCircle, Calendar } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";
import { JOB_POSITIONS, COMPANY } from "@/lib/constants";

const departments = ["All", ...Array.from(new Set(JOB_POSITIONS.map((p) => p.department)))];

export default function OpeningsPage() {
  const [activeDept, setActiveDept] = useState("All");

  const filteredPositions =
    activeDept === "All"
      ? JOB_POSITIONS
      : JOB_POSITIONS.filter((p) => p.department === activeDept);

  return (
    <main>
      <PageHero
        title="Current Openings"
        subtitle="Find the role that matches your passion"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Career", href: "/career" },
          { label: "Openings" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Department Filter */}
          <ScrollReveal direction="up">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeDept === dept
                      ? "bg-accent/20 text-accent border-accent/40"
                      : "bg-glass-white border-glass-border hover:text-accent hover:border-accent/30"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Job Listings */}
          {filteredPositions.length > 0 ? (
            <div className="space-y-6">
              {filteredPositions.map((position, index) => (
                <GlassCard key={position.id} delay={index * 0.1} className="!p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl font-bold mb-3" style={{ color: '#0a2540' }}>
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/5 text-xs font-medium border border-accent/10" style={{ color: '#6b5b4f' }}>
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-accent/5 text-xs font-medium border border-accent/10" style={{ color: '#6b5b4f' }}>
                          {position.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs mb-4" style={{ color: '#6b5b4f' }}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Posted: {new Date(position.posted).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                      </div>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: '#6b5b4f' }}>
                        {position.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold mb-2" style={{ color: '#0a2540' }}>Requirements:</h4>
                        <ul className="space-y-1.5">
                          {position.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#6b5b4f' }}>
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:flex-shrink-0">
                      <GlassButton
                        href={`mailto:${COMPANY.email}?subject=Application for ${position.title}`}
                        variant="primary"
                        size="md"
                      >
                        Apply Now
                      </GlassButton>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          ) : (
            <ScrollReveal direction="up">
              <div className="glass-card p-12 text-center">
                <p className="text-lg" style={{ color: '#6b5b4f' }}>
                  No openings in this department currently. Check back soon!
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <CTASection
        title="Don't See the Right Role?"
        subtitle="We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </main>
  );
}
