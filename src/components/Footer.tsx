import Link from "next/link";
import { Logo } from "./ui/Logo";
import { navItems } from "@/lib/nav";

const socials = [
  {
    label: "Instagram",
    path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-1.5h.01",
  },
  { label: "LinkedIn", path: "M4 9h4v11H4zM6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5 5h4v1.6c.6-1 1.9-1.9 3.6-1.9 3 0 3.4 2 3.4 4.6V20h-4v-5c0-1.2 0-2.7-1.7-2.7S15 13.6 15 15v5h-4z" },
  { label: "YouTube", path: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3z" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-adriatic-deep pt-20 pb-28 text-ivory sm:pb-10">
      <div className="container-page">
        <div className="grid gap-12 border-b border-ivory/15 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo animated={false} />
            <p className="mt-8 max-w-xs font-display text-2xl leading-snug text-ivory/85 italic">
              Wellness for People and the Places We Call Home.
            </p>
            <span className="mt-4 block h-px w-12 bg-gold" />
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow text-[0.6rem] text-ivory/50">Explore</p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/80 transition-colors hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="eyebrow text-[0.6rem] text-ivory/50">Begin</p>
            <p className="mt-5 max-w-xs leading-relaxed text-ivory/75">
              Every programme starts with a personal consultation. Tell us what you are looking for and our team will
              guide you.
            </p>
            <Link
              href="#book"
              className="mt-6 inline-block rounded-full bg-ivory px-6 py-3.5 text-[0.7rem] tracking-[0.22em] text-adriatic-deep uppercase transition-colors hover:bg-sand"
            >
              Book a Consultation
            </Link>
            <ul className="mt-8 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-colors hover:border-ivory hover:text-ivory"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" aria-hidden>
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-[0.8rem] text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AYUSH &amp; VIVUM · Ayurveda · Yoga · Wellness · Montenegro</p>
          <ul className="flex gap-6">
            {["Privacy", "Terms", "Sitemap", "Contact"].map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-ivory">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
