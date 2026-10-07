import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Bookshelf } from "@/components/books/Bookshelf";
import { books } from "@/content/books";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Books I've read and the ones I'm reading now — click any cover to find where to get it.",
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  const reading = books.filter((b) => b.status === "reading").length;
  const read = books.filter((b) => b.status === "read").length;

  return (
    <div>
      <header className="section hairline">
        <Container>
          <p className="section-label mb-4">Reading</p>
          <h1 className="display-heading max-w-3xl text-4xl sm:text-5xl lg:text-[3.5rem]">
            Books that shaped how I think.
          </h1>
          <p className="muted mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
            What I&apos;ve finished and what&apos;s open right now — click any cover to find it online.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-fg-subtle">
            {read} read · {reading} reading
          </p>
        </Container>
      </header>

      <section className="section hairline" aria-label="Bookshelf">
        <Container>
          <Bookshelf />
        </Container>
      </section>
    </div>
  );
}
