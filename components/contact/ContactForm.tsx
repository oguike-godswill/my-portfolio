"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com", autoComplete: "email" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    setErrors({});
    setFormError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.fields ?? {});
        setFormError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setFormError("Network error. Please try again or email me directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center rounded-2xl border border-border bg-[var(--surface)] p-8"
      >
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="display-heading mt-5 text-2xl">Message sent.</h2>
        <p className="muted mt-3 text-sm leading-relaxed">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can, usually within a day or two.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-fg-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-fg"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-[var(--surface)] p-6 sm:p-8"
      aria-describedby={formError ? "form-error" : undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label htmlFor={field.name} className="text-sm font-medium text-fg">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              className={cn(
                "h-11 rounded-xl border bg-[var(--bg)] px-4 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle",
                errors[field.name] ? "border-red-500" : "border-border focus:border-border-strong",
              )}
            />
            {errors[field.name] ? (
              <p id={`${field.name}-error`} className="text-xs text-red-500">
                {errors[field.name]}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-fg">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me about the project, timeline or role…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "resize-y rounded-xl border bg-[var(--bg)] px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle",
            errors.message ? "border-red-500" : "border-border focus:border-border-strong",
          )}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-red-500">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {formError ? (
        <p
          id="form-error"
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {formError}
        </p>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-xs text-fg-subtle">Your details are only used to reply to you.</p>
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
