"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  Command,
  Copy,
  FileText,
  FolderGit2,
  Github,
  Linkedin,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { projects } from "@/content/projects";
import { posts } from "@/content/blog";
import { cn } from "@/lib/utils";

type CommandItem = {
  id: string;
  label: string;
  sublabel?: string;
  hint?: string;
  group: string;
  keywords?: string;
  icon: React.ComponentType<{ className?: string }>;
  run: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [copiedToast, setCopiedToast] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const commands = useMemo<CommandItem[]>(() => {
    const items: CommandItem[] = [
      {
        id: "copy-email",
        label: "Copy Email Address",
        sublabel: site.email,
        hint: "Action",
        group: "Quick Actions",
        keywords: "email contact mail copy hire",
        icon: Copy,
        run: () => {
          navigator.clipboard?.writeText(site.email);
          setCopiedToast(true);
          setTimeout(() => setCopiedToast(false), 2600);
        },
      },
      {
        id: "theme",
        label: "Toggle Dark / Light Theme",
        sublabel: "Switch color appearance",
        hint: "Theme",
        group: "Quick Actions",
        keywords: "dark light mode theme appearance",
        icon: Moon,
        run: () => {
          const nextDark = document.documentElement.classList.toggle("dark");
          setIsDark(nextDark);
          try {
            localStorage.setItem("theme", nextDark ? "dark" : "light");
          } catch {
            // storage unavailable
          }
        },
      },
      {
        id: "craft",
        label: "Explore UI Craft Lab",
        sublabel: "Interactive playgrounds on the homepage",
        hint: "Jump",
        group: "Quick Actions",
        keywords: "craft lab interactive playground demo",
        icon: Sparkles,
        run: () => router.push("/#craft"),
      },
      {
        id: "home",
        label: "Go to Home",
        group: "Navigation",
        keywords: "home index start",
        icon: ArrowUpRight,
        run: () => router.push("/"),
      },
      ...navLinks.map((link) => ({
        id: link.href,
        label: link.label === "Work" ? "View All Work" : `Go to ${link.label}`,
        group: "Navigation",
        keywords: link.label.toLowerCase(),
        icon: link.href === "/books" ? BookOpen : ArrowUpRight,
        run: () => router.push(link.href),
      })),
      ...projects.map((p) => ({
        id: `project-${p.slug}`,
        label: p.title,
        sublabel: p.category,
        hint: "Case Study",
        group: "Projects & Case Studies",
        keywords: `${p.title} ${p.category} ${p.technologies.join(" ")} ${p.tagline}`.toLowerCase(),
        icon: FolderGit2,
        run: () => router.push(`/work/${p.slug}`),
      })),
      ...posts.map((post) => ({
        id: `post-${post.slug}`,
        label: post.title,
        sublabel: post.tags.join(" · "),
        hint: "Article",
        group: "Engineering Notes",
        keywords: `${post.title} ${post.tags.join(" ")} ${post.description}`.toLowerCase(),
        icon: FileText,
        run: () => router.push(`/blog/${post.slug}`),
      })),
      {
        id: "github",
        label: "GitHub Profile",
        sublabel: "@oguike-godswill",
        hint: "External",
        group: "Elsewhere",
        keywords: "github code source repo",
        icon: Github,
        run: () => window.open(site.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        label: "LinkedIn Profile",
        sublabel: "in/oguikegodswill",
        hint: "External",
        group: "Elsewhere",
        keywords: "linkedin social network career",
        icon: Linkedin,
        run: () => window.open(site.linkedin, "_blank", "noopener,noreferrer"),
      },
    ];
    return items;
  }, [router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.sublabel?.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.keywords?.includes(q),
    );
  }, [commands, query]);

  const runCommand = useCallback((item: CommandItem | undefined) => {
    if (!item) return;
    setOpen(false);
    setQuery("");
    setIndex(0);
    item.run();
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((v) => !v);
      }
      if (event.key === "Escape") setOpen(false);
    }
    function onCustomOpen() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onCustomOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      setIsDark(document.documentElement.classList.contains("dark"));
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setIndex(0);
  }, [query]);

  useEffect(() => {
    const active = listRef.current?.querySelector<HTMLElement>(`[data-index="${index}"]`);
    active?.scrollIntoView({ block: "nearest" });
  }, [index]);

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setIndex((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      runCommand(filtered[index]);
    }
  }

  return (
    <>
      <AnimatePresence>
        {copiedToast && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="fixed bottom-6 right-6 z-[90] flex items-center gap-2.5 rounded-full border border-border-strong bg-[var(--surface)] px-4 py-2.5 text-xs font-medium text-fg shadow-xl"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
              <Check className="h-3 w-3" />
            </span>
            Copied {site.email} to clipboard
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[10vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <button
              type="button"
              aria-label="Close command palette"
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border-strong bg-[var(--surface)] shadow-2xl"
              onKeyDown={onKeyDown}
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Command className="h-4 w-4 shrink-0 text-[var(--accent-text)]" aria-hidden="true" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Jump to a project, blog post, or run an action…"
                  aria-label="Command input"
                  className="h-13 w-full bg-transparent text-sm text-fg outline-none placeholder:text-fg-subtle"
                />
                <kbd className="hidden rounded border border-border bg-[var(--bg-subtle)] px-1.5 py-0.5 font-mono text-[10px] text-fg-subtle sm:block">
                  ESC
                </kbd>
              </div>

              <div ref={listRef} className="max-h-[56vh] overflow-y-auto p-2" role="listbox" aria-label="Commands">
                {filtered.length === 0 ? (
                  <p className="px-3 py-8 text-center text-sm text-fg-muted">
                    No matching projects, articles or commands.
                  </p>
                ) : (
                  filtered.map((item, i) => {
                    const Icon = item.id === "theme" ? (isDark ? Sun : Moon) : item.icon;
                    const showGroupHeader = i === 0 || filtered[i - 1].group !== item.group;
                    return (
                      <div key={item.id}>
                        {showGroupHeader && (
                          <p className="px-3 pb-1.5 pt-3 font-mono text-[10px] uppercase tracking-widest text-fg-subtle first:pt-1.5">
                            {item.group}
                          </p>
                        )}
                        <button
                          type="button"
                          data-index={i}
                          role="option"
                          aria-selected={i === index}
                          onMouseEnter={() => setIndex(i)}
                          onClick={() => runCommand(item)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                            i === index ? "bg-[var(--bg-subtle)] text-fg" : "text-fg-muted",
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-colors",
                              i === index
                                ? "border-[var(--accent)]/40 bg-[var(--accent-soft)] text-[var(--accent-text)]"
                                : "border-border bg-[var(--surface)] text-fg-subtle",
                            )}
                          >
                            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-2">
                            <span className="truncate font-medium text-fg">{item.label}</span>
                            {item.sublabel && (
                              <span className="truncate text-xs text-fg-subtle">{item.sublabel}</span>
                            )}
                          </span>
                          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                            {item.hint ?? item.group}
                          </span>
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="flex items-center justify-between border-t border-border bg-[var(--bg-subtle)]/50 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                <span>↑↓ to navigate · ↵ to select</span>
                <span>{filtered.length} results</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
