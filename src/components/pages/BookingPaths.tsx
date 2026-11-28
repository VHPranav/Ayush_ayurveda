"use client";

import { programmes } from "@/lib/programmes";

// Booking journey from the AYUSH International plan (§11).
const journey = {
  title: "Book an AYUSH consultation",
  lede: "Therapeutic care begins with a practitioner. We’ll arrange a consultation online or in Montenegro.",
  steps: ["Consultation", "Health questionnaire", "Practitioner assessment", "Programme recommendation", "Booking & deposit", "Pre-arrival instructions"],
};

// The address in the client's materials; replace with a dedicated booking inbox when available.
const INBOX = "contact@ayushuk.com";

const field =
  "w-full rounded-xl border border-stone bg-ivory px-4 py-3.5 text-ink placeholder:text-stone-deep/70 focus:border-adriatic focus:outline-none";
const label = "eyebrow mb-2 block text-[0.58rem] text-stone-deep";

export function BookingPaths() {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [...data.entries()].filter(([, v]) => String(v).trim()).map(([k, v]) => `${k}: ${v}`);
    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent("AYUSH consultation request")}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <div className="grid gap-14 lg:grid-cols-12">
      {/* Journey */}
      <div className="lg:col-span-5">
        <h2 className="font-display text-4xl font-light text-adriatic md:text-5xl">{journey.title}</h2>
        <p className="mt-4 leading-relaxed text-muted">{journey.lede}</p>
        <ol className="mt-10 space-y-0">
          {journey.steps.map((s, i) => (
            <li key={s} className="flex items-center gap-5">
              <span className="flex flex-col items-center">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full font-display text-lg ${
                    i === 0 ? "bg-olive text-ivory" : "border border-stone text-stone-deep"
                  }`}
                >
                  {i + 1}
                </span>
                {i < journey.steps.length - 1 && <span className="h-6 w-px bg-stone" />}
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
          <label className="block">
            <span className={label}>Consultation</span>
            <select name="Consultation" className={field} defaultValue="Online">
              <option>Online</option>
              <option>In Montenegro</option>
            </select>
          </label>
          <label className="block">
            <span className={label}>Area of interest (optional)</span>
            <select name="Interest" className={field} defaultValue="Not sure yet">
              <option>Not sure yet</option>
              {programmes.map((p) => (
                <option key={p.slug}>{p.name}</option>
              ))}
              <option>Individual treatments</option>
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className={label}>What would you like help with?</span>
            <textarea name="Message" rows={4} className={field} />
          </label>
        </div>

        <p className="mt-5 text-[0.85rem] leading-relaxed text-muted">
          This is a request for a consultation. Your treatments, any combination of therapies and their duration are
          recommended by our physician after an individual assessment.
        </p>
        <p className="mt-3 text-[0.85rem] leading-relaxed text-muted">
          Please don’t include detailed medical information here — your practitioner will collect it securely before your
          consultation.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.82rem] text-muted">Sending opens your email app with your details filled in.</p>
          <button
            type="submit"
            className="rounded-full bg-olive px-7 py-4 text-[0.7rem] tracking-[0.22em] text-ivory uppercase transition-colors duration-500 hover:bg-forest"
          >
            Request a consultation
          </button>
        </div>
      </form>
    </div>
  );
}
