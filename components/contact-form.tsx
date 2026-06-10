"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(data.message ?? "Something went wrong. Please try again.");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
    setMessage(data.message ?? "Your message has been received.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-stone/70 bg-white/90 p-6 shadow-luxe sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-charcoal">
          Name
          <input
            required
            name="name"
            type="text"
            className="mt-2 w-full rounded-2xl border border-stone/80 bg-ivory px-4 py-3 outline-none transition focus:border-forest"
          />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Email
          <input
            required
            name="email"
            type="email"
            className="mt-2 w-full rounded-2xl border border-stone/80 bg-ivory px-4 py-3 outline-none transition focus:border-forest"
          />
        </label>
        <label className="block text-sm font-medium text-charcoal sm:col-span-2">
          What kind of support are you seeking?
          <select
            name="interest"
            className="mt-2 w-full rounded-2xl border border-stone/80 bg-ivory px-4 py-3 outline-none transition focus:border-forest"
            defaultValue="Retreat Experience"
          >
            <option>Retreat Experience</option>
            <option>Healing Prayer Session</option>
            <option>Private Prayer Session</option>
            <option>Inner Restoration</option>
            <option>General Question</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-charcoal sm:col-span-2">
          Message
          <textarea
            required
            name="message"
            rows={6}
            className="mt-2 w-full rounded-[1.5rem] border border-stone/80 bg-ivory px-4 py-3 outline-none transition focus:border-forest"
            placeholder="Tell us a little about what kind of rest, prayer, or support you are looking for."
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-medium tracking-[0.16em] text-ivory transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send Inquiry"}
        </button>
        <p
          role="status"
          className={`text-sm ${
            status === "error" ? "text-red-700" : "text-charcoal/70"
          }`}
        >
          {message}
        </p>
      </div>
    </form>
  );
}
