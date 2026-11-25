import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { readingTime, sortedPosts } from "@/content/blog";
import { formatDate } from "@/lib/utils";

export function WritingPreview() {
  const recentPosts = sortedPosts().slice(0, 3);

  return (
    <Section label="Engineering notes and writing">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          label="Engineering Notes"
          title="Writing from the build loop."
          description="Practical notes on Next.js architecture, production authentication, and responsive engineering."
        />
        <Link
          href="/blog"
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-[var(--accent-text)]"
        >
          All articles
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {recentPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06}>
            <SpotlightCard as="article" className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {readingTime(post)} min
                    </span>
                  </div>

                  <h3 className="display-heading mt-4 text-xl transition-colors group-hover:text-[var(--accent-text)]">
                    {post.title}
                  </h3>

                  <p className="muted mt-3 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-mono text-[11px] text-fg-subtle">
                    {post.tags.slice(0, 2).join(" · ")}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-fg transition-colors group-hover:text-[var(--accent-text)]">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

