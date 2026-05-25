"use client";

import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import Timeline from "@/components/ui/Timeline";

const detailedMilestones = [
  {
    year: "1999",
    title: "The Beginning",
    description: "Mr. Ajay Thakur founded Arth Group with a bold vision — to create spaces that hold meaning, value, and purpose. Starting with industrial construction in Vapi, the company quickly earned a reputation for quality and reliability.",
  },
  {
    year: "2005",
    title: "First Commercial Milestone",
    description: "Completed our first major commercial project, establishing Arth Group as a credible name in commercial real estate. This project set the benchmark for all future developments in terms of design quality and execution excellence.",
  },
  {
    year: "2010",
    title: "Diversification & Growth",
    description: "Expanded capabilities into warehouse and industrial construction, taking on larger and more complex projects. Built a dedicated team of engineers and architects committed to pushing the boundaries of construction excellence.",
  },
  {
    year: "2015",
    title: "Premium Commercial Division",
    description: "Launched the premium commercial division, marking our entry into high-end office spaces and integrated business parks. This pivot reflected our understanding of the evolving needs of modern businesses seeking world-class work environments.",
  },
  {
    year: "2020",
    title: "Ahmedabad Expansion",
    description: "Entered the Ahmedabad market with The Rise on SG Highway — one of Gujarat's most sought-after commercial corridors. This expansion demonstrated our confidence in Gujarat's growing commercial landscape and our ability to deliver across multiple markets.",
  },
  {
    year: "2023",
    title: "Flagship Launches",
    description: "Unveiled two landmark projects — The Frontedge Park, a 23-storey integrated business park in Vapi, and Vedant Connect, Kalyan's tallest commercial tower. These projects represent the culmination of decades of expertise and our commitment to redefining skylines.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Won the Best Commercial Developer Award at the Gujarat Real Estate Awards, validating our approach to quality, innovation, and sustainable development. This recognition fuels our drive to set even higher standards.",
  },
];

export default function OurStoryPage() {
  return (
    <main style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Our Story"
        subtitle="A journey of passion, purpose, and perseverance"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Story" },
        ]}
      />

      {/* The Journey */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
                The Journey
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p style={{ color: 'var(--color-muted-foreground)' }}>
                  In 1999, Mr. Ajay Thakur had a vision — to build not just structures, but spaces
                  that hold meaning. With deep expertise in industrial construction and an unwavering
                  commitment to quality, he founded Arth Group in Vapi, Gujarat.
                </p>
                <p style={{ color: 'var(--color-muted-foreground)' }}>
                  The name &ldquo;Arth&rdquo; was chosen with intention. In Hindi, it means
                  &ldquo;meaning&rdquo; or &ldquo;essence.&rdquo; From day one, our philosophy has
                  been clear — every space we create must serve a greater purpose, adding value to
                  the lives of those who inhabit it.
                </p>
                <p style={{ color: 'var(--color-muted-foreground)' }}>
                  What started as a construction company focused on industrial buildings and
                  warehouses has evolved into one of Gujarat&apos;s most respected real estate
                  development firms. Today, we specialize in premium commercial developments that
                  redefine skylines and set new benchmarks in design, quality, and innovation.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full Timeline */}
      <section className="section-padding" style={{ background: 'rgba(224, 122, 95, 0.05)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
              Milestones That Define Us
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: 'var(--color-muted-foreground)' }}>
              Every chapter of our story has been marked by growth, learning, and an unrelenting pursuit of excellence.
            </p>
          </ScrollReveal>
          <Timeline items={detailedMilestones} />
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
        className="py-24 md:py-32"
      >
        <div className="container-custom text-center">
          <ScrollReveal direction="scale">
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-relaxed" style={{ color: '#ffffff' }}>
                &ldquo;Arth signifies essence — and our essence is building meaningful spaces&rdquo;
              </p>
              <footer className="mt-6 font-medium text-lg" style={{ color: 'var(--color-accent)' }}>
                — Mr. Ajay Thakur, Founder & Chairman
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* From Vision to Reality */}
      <section className="section-padding" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>
                From Vision to Reality
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p style={{ color: 'var(--color-muted-foreground)' }}>
                  Our evolution from a construction company to a premium real estate developer has
                  been guided by one principle: never compromise on quality. Over 25 years, we have
                  refined our craft, embraced innovation, and expanded our vision — all while
                  staying true to the values that founded us.
                </p>
                <p style={{ color: 'var(--color-muted-foreground)' }}>
                  Today, Arth Group stands at the intersection of legacy and innovation. Our
                  projects — from The Frontedge Park in Vapi to Vedant Connect in Kalyan — represent
                  the future of commercial real estate in India. Each development is a testament to
                  our belief that spaces shape thinking, and thinking shapes outcomes.
                </p>
                <p style={{ color: 'var(--color-muted-foreground)' }}>
                  As we look ahead, our commitment remains unchanged: to build spaces that hold
                  meaning, create lasting value, and serve as catalysts for the growth of businesses
                  and communities across India.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}