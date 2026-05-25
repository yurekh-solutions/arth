"use client";

import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import VideoPlayer from "@/components/ui/VideoPlayer";
import ScrollReveal from "@/components/ui/ScrollReveal";

const videos = [
  {
    title: "The Frontedge Park - Project Walkthrough",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    title: "Vedant Connect - Virtual Tour",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    title: "The Rise - Ahmedabad Showcase",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    title: "Arth Group - Company Overview",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80",
  },
  {
    title: "Construction Excellence",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    title: "Client Testimonials",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
  },
];

export default function VideosPage() {
  return (
    <>
      <PageHero
        title="Video Gallery"
        subtitle="Watch our projects come to life through immersive video experiences"
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Video Gallery" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Explore Our Projects
              </h2>
              <p className="text-white/70 text-lg">
                From virtual walkthroughs to construction timelapses, explore Arth Group&apos;s
                journey through our video library.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {videos.map((video, index) => (
              <ScrollReveal key={video.title} direction="up" delay={index * 0.1}>
                <VideoPlayer
                  videoUrl={video.videoUrl}
                  thumbnail={video.thumbnail}
                  title={video.title}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want a Personalized Tour?"
        subtitle="Schedule a private virtual or in-person tour of any of our properties."
        buttonText="Schedule Tour"
      />
    </>
  );
}
