import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { NEWS_ARTICLES } from "@/lib/constants";
import { Calendar, ExternalLink, ArrowRight } from "lucide-react";

export default function NewsPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="News & Press Releases"
        subtitle="Stay updated with the latest developments, milestones, and media coverage"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "News" },
        ]}
      />

      {/* News Articles List */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <div className="space-y-8">
            {NEWS_ARTICLES.map((article, index) => (
              <ScrollReveal key={article.id} direction="up" delay={index * 0.1}>
                <Link href={`/news/${article.slug}`}>
                  <GlassCard className="overflow-hidden p-0 group" hover={true}>
                    <div className="grid md:grid-cols-[350px_1fr] gap-0">
                      {/* Image */}
                      <div className="relative h-56 md:h-full min-h-[200px]">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/30 hidden md:block" />
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="flex items-center gap-1.5 text-sm" style={{ color: '#6b5b4f' }}>
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(article.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          {article.source && (
                            <span className="px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium flex items-center gap-1">
                              <ExternalLink className="w-3 h-3" />
                              {article.source}
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors" style={{ color: '#0a2540' }}>
                          {article.title}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#6b5b4f' }}>
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
