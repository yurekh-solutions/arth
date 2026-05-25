import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import GlassCard from "@/components/ui/GlassCard";
import BlogCard from "@/components/ui/BlogCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BLOG_POSTS } from "@/lib/constants";
import { Calendar, Clock, User, Tag, Share2, Globe, MessageCircle, Link2 } from "lucide-react";

// Expanded content for each blog post
const BLOG_CONTENT: Record<string, string[]> = {
  "future-of-commercial-real-estate-2025": [
    "The commercial real estate landscape is undergoing a transformative shift as we move into 2025 and beyond. The convergence of technology, sustainability imperatives, and evolving work patterns is reshaping how we think about commercial spaces. From AI-powered building management systems to net-zero energy buildings, the industry is embracing innovation at an unprecedented pace.",
    "Hybrid workspaces have become the dominant model for office occupancy. Companies are no longer looking for traditional floor plans — they need flexible, adaptable spaces that can accommodate both collaborative work and focused individual tasks. This has led to a surge in demand for modular office designs, hot-desking infrastructure, and technology-enabled meeting rooms that seamlessly connect in-person and remote participants.",
    "Sustainability is no longer a nice-to-have but a critical business requirement. Tenants increasingly demand green-certified buildings with low carbon footprints, energy-efficient systems, and wellness-focused designs. Properties with LEED or IGBC certifications command premium rents and attract higher-quality tenants. Smart building technologies — from IoT sensors monitoring air quality to AI systems optimizing energy consumption — are becoming standard expectations rather than luxury add-ons.",
    "Looking ahead, we see the emergence of mixed-use developments that blur the lines between work, retail, and leisure. The most successful commercial projects will be those that create ecosystems — vibrant communities where businesses, employees, and visitors can access everything they need within a walkable radius. At Arth Group, we are already incorporating these forward-thinking principles into our upcoming developments."
  ],
  "smart-investment-guide-commercial-property": [
    "Gujarat has emerged as one of India's fastest-growing commercial hubs, driven by robust infrastructure development, favorable government policies, and a thriving entrepreneurial ecosystem. For investors looking to capitalize on this growth, understanding the nuances of Gujarat's commercial real estate market is essential for making informed decisions that maximize returns.",
    "The key to successful commercial property investment lies in location analysis. Areas along major economic corridors — such as SG Highway in Ahmedabad, the Vapi-Silvassa industrial belt, and emerging IT hubs — offer the strongest appreciation potential. Proximity to transportation networks, skilled workforce availability, and planned infrastructure projects are critical factors that drive long-term value appreciation.",
    "Understanding yield metrics is crucial for commercial property investors. While residential properties in Gujarat typically offer rental yields of 2-3%, well-located commercial properties can deliver 6-9% annual returns. When combined with capital appreciation of 8-12% annually in prime locations, total returns can significantly outperform other asset classes including equities and fixed deposits.",
    "Risk management is equally important. Diversification across property types (office, retail, warehouse), careful tenant due diligence, and understanding lease structures (triple-net vs. gross leases) can protect investors from market volatility. Working with established developers like Arth Group — with 25+ years of track record — provides additional security through quality construction, reliable delivery timelines, and proven property management expertise."
  ],
  "sustainable-buildings-green-future": [
    "Sustainability in real estate is no longer optional — it's a business imperative that directly impacts property values, tenant attraction, and long-term operational costs. Green buildings are not just environmentally responsible; they represent a compelling financial case for developers, investors, and occupiers alike. Studies consistently show that sustainable buildings command 10-20% higher rental premiums and 25-30% faster absorption rates.",
    "The concept of green building has evolved far beyond basic energy efficiency. Today's sustainable developments incorporate biophilic design principles, bringing nature into the built environment through living walls, indoor gardens, and abundant natural lighting. These elements don't just reduce environmental impact — they measurably improve occupant productivity, reduce absenteeism, and enhance overall workplace satisfaction.",
    "Water conservation, waste management, and materials sourcing have become critical components of sustainable development. Rainwater harvesting systems, greywater recycling, and smart irrigation can reduce water consumption by 40-50%. Similarly, using recycled and locally-sourced materials reduces both carbon footprint and construction costs. At Arth Group, our projects incorporate these principles from the design phase itself.",
    "The future of sustainable buildings lies in net-zero energy design and circular economy principles. Buildings that generate as much energy as they consume through solar panels, wind turbines, and geothermal systems are becoming technically feasible and economically viable. Developers who embrace this transition today will hold a significant competitive advantage as regulations tighten and tenant expectations continue to evolve."
  ],
  "choosing-right-commercial-space": [
    "Choosing the right commercial space is one of the most critical business decisions any organization will make. The workspace directly influences employee productivity, client impressions, operational efficiency, and long-term financial health. Yet many businesses rush this decision, focusing solely on cost while overlooking factors that determine long-term success.",
    "Location remains the paramount consideration for commercial property selection. Beyond simple accessibility, businesses must evaluate the micro-market dynamics — neighboring businesses, local demographics, infrastructure pipeline, and growth trajectory of the area. A property in an emerging business district may offer better value than a premium location in an established but saturated market, provided the infrastructure development supports future growth.",
    "Infrastructure quality and building amenities have become decisive factors in talent attraction and retention. Modern employees expect workplaces with natural lighting, good air quality, fitness facilities, and collaborative spaces. Buildings with smart automation systems, reliable power backup, high-speed connectivity, and green certifications signal to employees and clients that the business is forward-thinking and cares about well-being.",
    "Finally, businesses must think about scalability. Choosing a commercial space that accommodates 3-5 years of growth prevents costly and disruptive relocations. Flexible lease terms, expansion options, and modular floor plans provide the agility businesses need in today's dynamic environment. At Arth Group, we design our commercial spaces with this flexibility in mind, offering various configurations that grow with our clients."
  ],
  "architecture-trends-modern-offices": [
    "Modern office architecture has evolved dramatically beyond cubicles and corner offices. Today's workplace design is driven by neuroscience, behavioral psychology, and a deep understanding of how physical environments influence creativity, collaboration, and cognitive performance. The most innovative office buildings are essentially productivity machines — carefully calibrated to support different types of work throughout the day.",
    "Biophilic design has emerged as one of the most impactful trends in commercial architecture. By incorporating natural elements — living walls, water features, organic materials, and abundant greenery — architects create spaces that reduce stress, boost creativity, and improve air quality. Studies show that biophilic offices can increase productivity by up to 15% and reduce sick days by 20%, making this trend both a wellness investment and a business strategy.",
    "Flexibility and adaptability define the new architectural paradigm. Gone are the days of fixed floor plans designed for a single use case. Modern offices feature moveable walls, modular furniture systems, and multi-purpose zones that can transform from collaborative workshops to focused work areas within minutes. This architectural flexibility allows companies to respond to changing needs without expensive renovations.",
    "Technology integration is another defining trend. Modern office architecture incorporates technology as a fundamental design element — from smart glass that adjusts transparency based on sunlight to integrated AV systems that make every room collaboration-ready. Building information modeling (BIM) and digital twins allow architects to optimize designs for energy efficiency, occupant comfort, and maintenance accessibility before a single brick is laid."
  ],
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const content = BLOG_CONTENT[post.slug] || [post.content];
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-primary">
      <PageHero
        title={post.title}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <ScrollReveal direction="up">
              <GlassCard className="overflow-hidden p-0 mb-8">
                <div className="relative h-64 md:h-96">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Meta Info */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="flex items-center gap-2 text-white/60 text-sm">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2 text-white/60 text-sm">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2 text-white/60 text-sm">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                  {post.category}
                </span>
              </div>
            </ScrollReveal>

            {/* Article Body */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="prose prose-invert max-w-none space-y-6">
                {content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-white/70 text-base md:text-lg leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* Tags */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="mt-10 pt-8 border-t border-glass-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-white/40" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-glass-white border border-glass-border text-white/60 text-xs font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Share Buttons */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="mt-8 pt-8 border-t border-glass-border">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-white/60 text-sm">
                    <Share2 className="w-4 h-4" />
                    Share this article
                  </span>
                  <div className="flex gap-3">
                    <button className="w-9 h-9 rounded-full bg-glass-white border border-glass-border flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/30 transition-colors">
                      <Globe className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-glass-white border border-glass-border flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/30 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-glass-white border border-glass-border flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/30 transition-colors">
                      <Link2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Related Articles
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedPosts.map((relPost) => (
              <BlogCard
                key={relPost.id}
                title={relPost.title}
                excerpt={relPost.excerpt}
                slug={relPost.slug}
                image={relPost.image}
                date={new Date(relPost.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
                readTime={relPost.readTime}
                category={relPost.category}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
