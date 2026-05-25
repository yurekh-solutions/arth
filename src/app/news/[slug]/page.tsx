import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/layout/CTASection";
import { NEWS_ARTICLES } from "@/lib/constants";
import { Calendar, ExternalLink, ArrowRight } from "lucide-react";

const NEWS_CONTENT: Record<string, string[]> = {
  "frontedge-park-milestone-completion": [
    "In a significant achievement marking a key milestone in its development journey, Arth Group today announced the structural completion of The Frontedge Park — a 23-storey commercial integrated business park located on Vapi Silvassa Road, Dungra. The structural topping-out ceremony was attended by company leadership, project partners, and key stakeholders.",
    "The Frontedge Park, which includes G+23 storeys with 2 basement parking floors, represents one of the tallest commercial structures in the Vapi-Silvassa industrial corridor. The project is designed to offer premium office spaces and retail hubs with world-class amenities including high-speed elevators, 24/7 security surveillance, rainwater harvesting systems, and EV charging stations.",
    "Mr. Ajay Thakur, Founder & Chairman of Arth Group, commented on the milestone: 'The structural completion of The Frontedge Park is a testament to our team's dedication and our unwavering commitment to quality and timelines. This project will redefine the commercial real estate landscape in South Gujarat and provide businesses with a truly world-class address.' The project is expected to be fully operational by Q4 2025, with interior fit-outs and amenity installations currently underway."
  ],
  "vedant-connect-launch-kalyan": [
    "Marking its entry into the Mumbai Metropolitan Region, Arth Group has unveiled Vedant Connect — a landmark 23-storey Emirates-inspired commercial tower in Kalyan that is set to become the tallest business landmark in the region. The project was launched at an exclusive event attended by industry leaders, investors, and government officials.",
    "Vedant Connect offers premium office spaces ranging from ₹44 Lac to ₹3 Crore, catering to businesses of various sizes from startups to established corporations. The tower's distinctive Emirates-inspired architecture sets it apart from conventional commercial buildings, creating a truly iconic presence on the Kalyan skyline. The project features premium lobbies, dedicated parking, high-speed elevators, and cutting-edge security systems.",
    "The launch has generated significant interest from investors and businesses looking for premium commercial addresses in the rapidly developing Kalyan-Dombivli region. With the upcoming metro connectivity and infrastructure developments planned for the area, Vedant Connect is positioned to offer exceptional returns for early investors while providing an aspirational work environment for modern businesses."
  ],
  "arth-group-sustainability-award": [
    "Arth Group has been recognized by the Indian Green Building Council (IGBC) for its outstanding commitment to sustainable development practices and environmental stewardship across its portfolio of commercial projects. The award ceremony was held at the National Convention on Green Buildings in Delhi, where Arth Group was honored alongside leading developers from across India.",
    "The recognition specifically acknowledges Arth Group's incorporation of green building standards including rainwater harvesting, solar energy systems, EV charging infrastructure, energy-efficient HVAC systems, and waste management practices across all its developments. The Frontedge Park in Vapi has achieved pre-certification under IGBC Green Building standards, with formal certification expected upon project completion.",
    "This award reinforces Arth Group's position as a sustainability leader in Gujarat's real estate sector. The company has committed to ensuring all future developments meet or exceed IGBC Gold certification standards, setting an industry benchmark for responsible commercial real estate development. The recognition also highlights the growing importance of sustainability credentials in attracting premium tenants and commanding higher property values."
  ],
};

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const content = NEWS_CONTENT[article.slug] || [article.content];
  const relatedNews = NEWS_ARTICLES.filter((a) => a.id !== article.id);

  return (
    <main className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      <PageHero
        title={article.title}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: article.title },
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
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Meta */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="flex items-center gap-2 text-sm" style={{ color: '#6b5b4f' }}>
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                {article.source && (
                  <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                    <ExternalLink className="w-3 h-3" />
                    {article.source}
                  </span>
                )}
              </div>
            </ScrollReveal>

            {/* Body */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-6">
                {content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: '#6b5b4f' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </article>
        </div>
      </section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container-custom max-w-5xl">
            <ScrollReveal direction="up">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#0a2540' }}>
                Related News
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              {relatedNews.map((relArticle, index) => (
                <ScrollReveal key={relArticle.id} direction="up" delay={index * 0.1}>
                  <Link href={`/news/${relArticle.slug}`}>
                    <GlassCard className="p-5 group" hover={true}>
                      <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <div className="relative w-full sm:w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={relArticle.image}
                            alt={relArticle.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs" style={{ color: '#6b5b4f' }}>
                            {new Date(relArticle.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <h4 className="font-heading text-lg font-semibold group-hover:text-accent transition-colors mt-1" style={{ color: '#0a2540' }}>
                            {relArticle.title}
                          </h4>
                          <p className="text-sm mt-1 line-clamp-1" style={{ color: '#6b5b4f' }}>
                            {relArticle.excerpt}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:text-accent transition-colors flex-shrink-0 hidden sm:block" style={{ color: '#6b5b4f' }} />
                      </div>
                    </GlassCard>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
}
