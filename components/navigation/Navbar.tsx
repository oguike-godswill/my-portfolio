"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        open
          ? "border-b border-border bg-[var(--bg)]"
          : scrolled
            ? "border-b border-border bg-[var(--bg)]/90 backdrop-blur-md"
            : "border-b border-transparent",
      )}
    >
      <div className="container-page grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4">
        <Link
          href="/"
          className="justify-self-start font-display text-[15px] font-semibold tracking-normal text-fg"
          aria-label={`${site.name} — home`}
        >
          Godswill
        </Link>

        <nav className="hidden items-center justify-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  active ? "text-fg" : "text-fg-muted hover:text-fg",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="col-start-3 flex items-center justify-end gap-3">
          <span className="hidden items-center gap-2 text-xs text-fg-muted lg:inline-flex">
            <span
              className="h-2 w-2 rounded-full bg-[var(--accent)]"
              style={{ boxShadow: "0 0 0 3px var(--accent-soft)" }}
              aria-hidden="true"
            />
            Available for opportunities
          </span>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg transition-colors hover:border-border-strong md:hidden"
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 bottom-0 top-16 -z-10 bg-black/50 md:hidden"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
        )}
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-[var(--bg)] md:hidden"
          >
            <nav
              className="container-page flex flex-col gap-1 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]"
              aria-label="Mobile"
            >
              {navLinks.map((link) => {
                const active =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-3 text-lg transition-colors hover:bg-surface-hover",
                      active ? "text-fg" : "text-fg-muted",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4",
                        active ? "text-[var(--accent)]" : "text-fg-subtle",
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
              <p className="mt-3 flex items-center gap-2 px-3 text-xs text-fg-muted">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
                  aria-hidden="true"
                />
                {site.availability}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
