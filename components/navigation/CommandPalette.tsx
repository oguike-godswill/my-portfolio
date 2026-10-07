"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Command, Github, Linkedin, Moon, Sun } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

type CommandItem = {
  id: string;
  label: string;
  hint?: string;
  group: string;
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
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const commands = useMemo<CommandItem[]>(() => {
    const items: CommandItem[] = [
      {
        id: "home",
        label: "Go to Home",
        group: "Navigate",
        icon: ArrowUpRight,
        run: () => router.push("/"),
      },
      ...navLinks.map((link) => ({
        id: link.href,
        label: link.label === "Work" ? "View Work" : link.label,
        group: "Navigate",
        icon: ArrowUpRight,
        run: () => router.push(link.href),
      })),
      {
        id: "theme",
        label: "Toggle Theme",
        group: "Actions",
        icon: Moon,
        run: () => {
          const isDark = document.documentElement.classList.toggle("dark");
          try {
            localStorage.setItem("theme", isDark ? "dark" : "light");
          } catch {
            // storage unavailable
          }
        },
      },
      {
        id: "github",
        label: "GitHub",
        hint: "External",
        group: "Links",
        icon: Github,
        run: () => window.open(site.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        hint: "External",
        group: "Links",
        icon: Linkedin,
        run: () => window.open(site.linkedin, "_blank", "noopener,noreferrer"),
      },
    ];
    return items;
  }, [router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((item) => item.label.toLowerCase().includes(q));
  }, [commands, query]);

  const runCommand = useCallback(
    (item: CommandItem | undefined) => {
      if (!item) return;
      setOpen(false);
      setQuery("");
      setIndex(0);
      item.run();
    },
    [],
  );

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((v) => !v);
      }
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <button
            type="button"
            aria-label="Close command palette"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-[var(--surface)] shadow-2xl"
            onKeyDown={onKeyDown}
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Command className="h-4 w-4 shrink-0 text-fg-subtle" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Type a command or search…"
                aria-label="Command input"
                className="h-12 w-full bg-transparent text-sm text-fg outline-none placeholder:text-fg-subtle"
              />
              <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-fg-subtle sm:block">
                ESC
              </kbd>
            </div>

            <div ref={listRef} className="max-h-[50vh] overflow-y-auto p-2" role="listbox" aria-label="Commands">
              {filtered.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-fg-muted">No matching commands.</p>
              ) : (
                filtered.map((item, i) => {
                  const Icon = item.id === "theme" ? (isDark ? Sun : Moon) : item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      data-index={i}
                      role="option"
                      aria-selected={i === index}
                      onMouseEnter={() => setIndex(i)}
                      onClick={() => runCommand(item)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                        i === index ? "bg-surface-hover text-fg" : "text-fg-muted",
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="flex-1">{item.label}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                        {item.hint ?? item.group}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
              <span>↑↓ to navigate</span>
              <span>↵ to select</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
