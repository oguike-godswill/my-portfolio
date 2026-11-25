import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PostBody } from "@/components/blog/PostBody";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { getPost, posts, readingTime } from "@/content/blog";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };

  const ogUrl = `/api/og?${new URLSearchParams({
    title: post.title,
    subtitle: post.description,
    tag: `ARTICLE · ${post.tags.join(" · ")}`,
    path: `godswilloguike.com/blog/${post.slug}`,
  }).toString()}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="section">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All posts
          </Link>

          <header className="mt-8 max-w-3xl border-b border-border pb-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{readingTime(post)} min read</span>
            </div>
            <h1 className="display-heading mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">{post.title}</h1>
            <p className="muted mt-4 text-base leading-relaxed sm:text-lg">{post.description}</p>
            <p className="mt-5 font-mono text-xs text-fg-subtle" aria-label="Topics">
              {post.tags.join(" · ")}
            </p>
          </header>

          <div className="mt-10 max-w-3xl">
            <PostBody blocks={post.blocks} />
          </div>
        </Container>
      </article>

      <ContactCTA />
    </>
  );
}
