"use client";

import { useState } from "react";
import { Building2, MapPin, TrendingUp, LayoutGrid } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ProjectCard from "@/components/ui/ProjectCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROJECTS } from "@/lib/constants";

const FILTER_TABS = ["All", "Business Park", "Commercial Tower", "Office Complex"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.type.toLowerCase().includes(activeFilter.toLowerCase().replace(" complex", "").replace(" tower", "").replace(" park", ""))
        );

  return (
    <main>
      <PageHero
        title="Our Projects"
        subtitle="Pioneering commercial developments across India"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />

      {/* Filter Section - Cream Theme */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          {/* Filter Tabs */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12 px-4">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`
                    px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 touch-target
                    ${
                      activeFilter === tab
                        ? "neumorphic shadow-lg"
                        : "neumorphic hover:shadow-md"
                    }
                  `}
                  style={{
                    color: activeFilter === tab ? 'var(--color-accent)' : 'var(--color-muted-foreground)'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                tagline={project.tagline}
                location={project.location}
                image={project.image}
                slug={project.slug}
                type={project.type}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg" style={{ color: 'var(--color-muted-foreground)' }}>No projects match this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Cream Theme */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 responsive-subheading" style={{ color: 'var(--color-primary)' }}>
              Our Impact in Numbers
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <AnimatedCounter
              target={4}
              suffix="+"
              label="Premium Projects"
              icon={<Building2 className="w-6 h-6 sm:w-8 sm:h-8" />}
            />
            <AnimatedCounter
              target={50}
              suffix=" Lac+"
              label="Sq. Ft. Delivered"
              icon={<LayoutGrid className="w-6 h-6 sm:w-8 sm:h-8" />}
            />
            <AnimatedCounter
              target={4}
              label="Cities"
              icon={<MapPin className="w-6 h-6 sm:w-8 sm:h-8" />}
            />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
