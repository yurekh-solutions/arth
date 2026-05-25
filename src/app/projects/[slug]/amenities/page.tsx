"use client";

import { MapPin, Shield, Zap, Car, Utensils, Dumbbell, Wind, Wifi, Camera, TreePine } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { PROJECTS } from "@/lib/constants";

const amenities = [
  { icon: <Car className="w-8 h-8" />, title: "Multi-level Parking", description: "500+ car parking spaces with smart parking system" },
  { icon: <Utensils className="w-8 h-8" />, title: "Food Court & Restaurants", description: "Multiple dining options with diverse cuisines" },
  { icon: <Dumbbell className="w-8 h-8" />, title: "Gym & Fitness Center", description: "State-of-the-art fitness equipment and wellness area" },
  { icon: <TreePine className="w-8 h-8" />, title: "Rooftop Lounge & Terrace", description: "Panoramic views with relaxation spaces" },
  { icon: <Wifi className="w-8 h-8" />, title: "High-Speed Fiber Internet", description: "Dedicated fiber optic connectivity" },
  { icon: <Wind className="w-8 h-8" />, title: "Central VRF Air Conditioning", description: "Energy-efficient climate control system" },
  { icon: <Shield className="w-8 h-8" />, title: "24/7 Security & CCTV", description: "Advanced surveillance and access control" },
  { icon: <Zap className="w-8 h-8" />, title: "EV Charging Stations", description: "50+ electric vehicle charging points" },
  { icon: <Camera className="w-8 h-8" />, title: "Smart Building Automation", description: "BMS integrated building management" },
  { icon: <MapPin className="w-8 h-8" />, title: "ATM & Banking", description: "On-site banking services" },
];

export default function AmenitiesPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <PageHero
        title={`${project.name} - Amenities`}
        subtitle="World-class facilities for modern businesses"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name, href: `/projects/${project.slug}` },
          { label: "Amenities" },
        ]}
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
              Premium Amenities
            </h2>
            <p className="text-white/60 text-center max-w-3xl mx-auto mb-12 responsive-text px-4">
              {project.name} offers world-class amenities designed to enhance productivity, 
              comfort, and well-being for all occupants.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {amenities.map((amenity, index) => (
              <GlassCard key={index} delay={index * 0.05}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 text-accent">
                    {amenity.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-white/60 text-sm responsive-text">
                    {amenity.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
