"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import BlogCard from "@/components/ui/BlogCard";
import GlassCard from "@/components/ui/GlassCard";
import Newsletter from "@/components/layout/Newsletter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BLOG_POSTS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const CATEGORIES = [
  "All",
  "Industry Trends",
  "Investment",
  "Sustainability",
  "Commercial Spaces",
  "Architecture",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <main className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      <PageHero
        title="Latest Insights"
        subtitle="Industry trends, investment guides, and expert perspectives"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      {/* Category Filter Chips */}
      <section className="section-padding pb-0" style={{ background: 'var(--color-background)' }}>
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-accent/20 border-accent/50 text-accent"
                      : ""
                  }`}
                  style={activeCategory !== cat ? {
                    background: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-muted-foreground)'
                  } : undefined}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding pt-0 pb-8">
          <div className="container-custom">
            <ScrollReveal direction="up">
              <Link href={`/blog/${featuredPost.slug}`}>
                <GlassCard className="overflow-hidden p-0" hover={true}>
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-full min-h-[300px]">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/40 md:block hidden" />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-xs font-medium">
                        Featured
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium w-fit mb-4">
                        {featuredPost.category}
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors" style={{ color: 'var(--color-primary)' }}>
                        {featuredPost.title}
                      </h2>
                      <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-muted-foreground)' }}>
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm mb-6" style={{ color: 'var(--color-muted-foreground)' }}>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-accent font-medium text-sm">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          {remainingPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  image={post.image}
                  date={new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  readTime={post.readTime}
                  category={post.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-white/50 text-lg">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <GlassCard className="max-w-2xl mx-auto text-center">
              <Newsletter />
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
