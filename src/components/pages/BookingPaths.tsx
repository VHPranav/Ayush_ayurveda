"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { programmes } from "@/lib/programmes";

type Path = "ayush" | "vivum";

// Booking journeys from the AYUSH International plan (§11).
const journeys: Record<Path, { title: string; lede: string; steps: string[] }> = {
  ayush: {
    title: "Book an AYUSH consultation",
    lede: "Therapeutic care begins with a practitioner. We’ll arrange a consultation in London, online or in Montenegro.",
    steps: ["Country", "Consultation", "Health questionnaire", "Practitioner assessment", "Programme recommendation", "Booking & deposit", "Pre-arrival instructions"],
  },
  vivum: {
    title: "Enquire about a VIVUM retreat",
    lede: "Wellness, Yoga and retreat experiences in Montenegro — for individuals, couples, groups and teams.",
    steps: ["Choose retreat", "Choose dates", "Number of guests", "Accommodation", "Wellness preferences", "Payment & deposit", "Confirmation"],
  },
};

// The address in the client's materials; replace with a dedicated booking inbox when available.
const INBOX = "contact@ayushuk.com";

const field =
  "w-full rounded-xl border border-stone bg-ivory px-4 py-3.5 text-ink placeholder:text-stone-deep/70 focus:border-adriatic focus:outline-none";
const label = "eyebrow mb-2 block text-[0.58rem] text-stone-deep";

export function BookingPaths({ initial }: { initial: Path }) {
  const [path, setPath] = useState<Path>(initial);
  const j = journeys[path];

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [...data.entries()].filter(([, v]) => String(v).trim()).map(([k, v]) => `${k}: ${v}`);
    const subject = path === "ayush" ? "AYUSH consultation request" : "VIVUM retreat enquiry";
    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <div>
      {/* Path switch */}
      <div role="tablist" aria-label="Booking type" className="grid gap-3 sm:grid-cols-2">
        {(["ayush", "vivum"] as const).map((p) => {
          const active = path === p;
          return (
            <button
              key={p}
              role="tab"
              aria-selected={active}
              onClick={() => setPath(p)}
              className={`rounded-[1.75rem] border p-7 text-left transition-colors duration-500 ${
                active
                  ? p === "ayush"
                    ? "border-olive bg-olive text-ivory"
                    : "border-sea bg-sea text-ivory"
                  : "border-stone bg-ivory text-adriatic hover:border-adriatic"
              }`}
            >
              <span className="eyebrow text-[0.58rem] opacity-80">{p === "ayush" ? "Therapeutic care" : "Wellness experience"}</span>
              <span className="mt-3 block font-display text-3xl">{p === "ayush" ? "AYUSH consultation" : "VIVUM retreat"}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid gap-14 lg:grid-cols-12"
        >
          {/* Journey */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl font-light text-adriatic md:text-5xl">{j.title}</h2>
            <p className="mt-4 leading-relaxed text-muted">{j.lede}</p>
            <ol className="mt-10 space-y-0">
              {j.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-5">
                  <span className="flex flex-col items-center">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-lg ${
                        i === 0 ? (path === "ayush" ? "bg-olive text-ivory" : "bg-sea text-ivory") : "border border-stone text-stone-deep"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {i < j.steps.length - 1 && <span className="h-6 w-px bg-stone" />}
                  </span>
                  <span className={`-mt-6 ${i === 0 ? "text-ink" : "text-muted"}`}>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="rounded-[2rem] bg-sand/70 p-8 md:p-10 lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className={label}>Full name</span>
                <input name="Name" required autoComplete="name" className={field} />
              </label>
              <label className="block">
                <span className={label}>Email</span>
                <input name="Email" type="email" required autoComplete="email" className={field} />
              </label>
              <label className="block">
                <span className={label}>Phone (optional)</span>
                <input name="Phone" type="tel" autoComplete="tel" className={field} />
              </label>
              <label className="block">
                <span className={label}>Country of residence</span>
                <input name="Country" autoComplete="country-name" className={field} />
              </label>

              {path === "ayush" ? (
                <>
                  <label className="block">
                    <span className={label}>Consultation</span>
                    <select name="Consultation" className={field} defaultValue="Online">
                      <option>In London</option>
                      <option>Online</option>
                      <option>In Montenegro</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className={label}>Interested in</span>
                    <select name="Interest" className={field} defaultValue="Not sure yet">
                      <option>Not sure yet</option>
                      {programmes.map((p) => (
                        <option key={p.slug}>{p.name}</option>
                      ))}
                      <option>Individual treatments</option>
                      <option>AYUSH India / Kerala</option>
                    </select>
                  </label>
                </>
              ) : (
                <>
                  <label className="block">
                    <span className={label}>Retreat</span>
                    <select name="Retreat" className={field} defaultValue="Not sure yet">
                      <option>Not sure yet</option>
                      <option>Spring — Renew &amp; Rebalance</option>
                      <option>Summer — Adriatic Wellness Escape</option>
                      <option>Autumn — Stress Reset &amp; Reconnect</option>
                      <option>Winter — Deep Rest &amp; Renewal</option>
                      <option>Corporate wellness</option>
                    </select>
                  </label>
                  <div className="grid grid-cols-2 gap-5">
                    <label className="block">
                      <span className={label}>Length</span>
                      <select name="Length" className={field} defaultValue="5 days">
                        <option>3 days</option>
                        <option>5 days</option>
                        <option>7 days</option>
                        <option>14 days</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className={label}>Guests</span>
                      <input name="Guests" type="number" min={1} defaultValue={1} className={field} />
                    </label>
                  </div>
                </>
              )}

              <label className="block sm:col-span-2">
                <span className={label}>{path === "ayush" ? "What would you like help with?" : "Preferred dates & anything else"}</span>
                <textarea name="Message" rows={4} className={field} />
              </label>
            </div>

            {path === "ayush" && (
              <p className="mt-5 text-[0.85rem] leading-relaxed text-muted">
                Please don’t include detailed medical information here — your practitioner will collect it securely before
                your consultation.
              </p>
            )}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[0.82rem] text-muted">Sending opens your email app with your details filled in.</p>
              <button
                type="submit"
                className={`rounded-full px-7 py-4 text-[0.7rem] tracking-[0.22em] text-ivory uppercase transition-colors duration-500 ${
                  path === "ayush" ? "bg-olive hover:bg-forest" : "bg-sea hover:bg-adriatic"
                }`}
              >
                {path === "ayush" ? "Request a consultation" : "Send retreat enquiry"}
              </button>
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
