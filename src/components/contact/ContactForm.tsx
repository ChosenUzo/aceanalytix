"use client";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-text placeholder:text-muted/70 focus:border-brand focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email us directly at info@aceanalytix.com.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-brand/30 bg-brand-soft p-8">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
          <Check size={22} />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-text">Message received.</h3>
          <p className="mt-2 text-muted">
            Thank you. We read every note personally and will reply within two business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text">
            Full name
          </label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="you@organisation.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="organisation" className="mb-2 block text-sm font-medium text-text">
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            className={field}
            placeholder="Government, institution, or firm"
          />
        </div>
        <div>
          <label htmlFor="role" className="mb-2 block text-sm font-medium text-text">
            Your role
          </label>
          <input id="role" name="role" className={field} placeholder="e.g. Director, Minister" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text">
          What are you working on?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(field, "resize-none")}
          placeholder="Tell us about the priority you're carrying and where delivery matters most."
        />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" size="lg" magnetic={false} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
