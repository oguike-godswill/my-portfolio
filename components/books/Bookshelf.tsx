"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { books, type Book, type BookStatus } from "@/content/books";
import { cn } from "@/lib/utils";

type Filter = "all" | BookStatus;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "reading", label: "Reading" },
  { key: "read", label: "Read" },
];

function StatusBadge({ status }: { status: BookStatus }) {
  if (status === "reading") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] text-fg-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
        Reading
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] text-fg-muted">
      <Check className="h-3 w-3 text-[var(--accent-text)]" aria-hidden="true" />
      Read
    </span>
  );
}

function BookCard({ book }: { book: Book }) {
  const gradient = {
    background: `linear-gradient(155deg, ${book.accent}, color-mix(in oklab, ${book.accent} 55%, #0a0a0b))`,
  };

  const openPill = book.bookUrl ? (
    <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
      View book
      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
    </span>
  ) : null;

  const art = book.cover ? (
    <div className="relative aspect-[2/3] overflow-hidden rounded-xl" style={gradient}>
      <Image
        src={book.cover}
        alt={`${book.title} book cover`}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 80px)"
        className="object-cover"
      />
      {openPill}
    </div>
  ) : (
    <div className="relative aspect-[2/3] overflow-hidden rounded-xl" style={gradient}>
      <div className="absolute inset-y-0 left-0 w-2.5 bg-black/25" aria-hidden="true" />
      <div className="flex h-full flex-col justify-end p-4 pl-5">
        <p className="font-display text-lg font-semibold leading-tight text-[#fafaf9]">{book.title}</p>
        {book.author ? <p className="mt-1 text-xs text-[#fafaf9]/75">{book.author}</p> : null}
      </div>
      {openPill}
    </div>
  );

  const body = (
    <>
      {art}

      <div className="mt-3 flex flex-1 flex-col">
        {book.cover ? (
          <div>
            <h3 className="line-clamp-2 min-h-[2.5rem] font-display text-sm font-semibold leading-snug">
              {book.title}
            </h3>
            {book.author ? (
              <p className="mt-0.5 line-clamp-2 min-h-[2rem] text-xs text-fg-subtle">{book.author}</p>
            ) : null}
          </div>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <StatusBadge status={book.status} />
          {book.bookUrl ? (
            <span className="inline-flex items-center gap-1 text-xs text-fg-muted transition-colors group-hover:text-[var(--accent-text)]">
              View book
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">Link unavailable</span>
          )}
        </div>

        {book.note ? <p className="muted mt-2 text-xs leading-relaxed">{book.note}</p> : null}
      </div>
    </>
  );

  const cardClass =
    "group flex h-full flex-col rounded-2xl border border-border bg-[var(--surface)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_50%,var(--border))]";

  if (book.bookUrl) {
    return (
      <a href={book.bookUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {body}
      </a>
    );
  }
  return <div className={cn(cardClass, "cursor-default hover:translate-y-0 hover:border-border")}>{body}</div>;
}

export function Bookshelf() {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(
    () => ({
      all: books.length,
      reading: books.filter((b) => b.status === "reading").length,
      read: books.filter((b) => b.status === "read").length,
    }),
    [],
  );

  const visible = filter === "all" ? books : books.filter((b) => b.status === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter books">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors",
              filter === f.key
                ? "border-transparent bg-[var(--accent)] font-medium text-[#0a0a0b]"
                : "border-border text-fg-muted hover:border-border-strong hover:text-fg",
            )}
          >
            {f.label}
            <span className="font-mono text-[11px] opacity-70">{counts[f.key]}</span>
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      ) : (
        <p className="muted mt-8 text-sm">Nothing on this shelf yet.</p>
      )}
    </div>
  );
}



