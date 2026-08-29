"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="label mb-2 block text-secondary">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="label mb-2 block text-secondary">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-line bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="label mb-2 block text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-line bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "w-full rounded-full bg-accent px-8 py-4 text-base font-medium text-background transition-colors duration-300 hover:bg-accent-dark disabled:opacity-50"
        )}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-center text-sm text-accent">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
