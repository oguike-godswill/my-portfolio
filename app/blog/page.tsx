import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";
import { readingTime, sortedPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on frontend engineering, Next.js architecture, Flutter, authentication and building real products — by Godswill Oguike.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = sortedPosts();

  return (
    <div className="section">
      <Container>
        <header className="max-w-2xl">
          <p className="section-label mb-4">Blog</p>
          <h1 className="display-heading text-4xl sm:text-5xl">Notes from building things.</h1>
          <p className="muted mt-4 text-base leading-relaxed sm:text-lg">
            Practical write-ups on frontend engineering, architecture and the problems I run into while shipping
            real products.
          </p>
        </header>

        <ol className="mt-12 divide-y divide-[var(--border)] border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-3 py-7 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{readingTime(post)} min read</span>
                  </div>
                  <h2 className="display-heading mt-2 text-xl transition-colors group-hover:text-[var(--accent-text)] sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="muted mt-2 text-sm leading-relaxed sm:text-base">{post.description}</p>
                </div>
                <ArrowRight
                  className="hidden h-5 w-5 shrink-0 text-fg-subtle transition-all group-hover:translate-x-1 group-hover:text-[var(--accent-text)] sm:block"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  );
}
