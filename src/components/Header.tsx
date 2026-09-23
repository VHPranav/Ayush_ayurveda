"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Logo } from "./ui/Logo";
import { navItems } from "@/lib/nav";

export function Header() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 80));

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const light = !solid && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-700 ease-[var(--ease-calm)] ${
          solid && !open
            ? "bg-ivory/85 py-3 shadow-[0_1px_0_rgba(28,58,75,0.08)] backdrop-blur-md"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="container-page flex items-center justify-between gap-6">
          <Link href="/" aria-label="AYUSH & VIVUM — home" onClick={() => setOpen(false)}>
            <Logo tone={light || open ? "light" : "dark"} />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100 ${
                      light ? "text-ivory/90 hover:text-ivory" : "text-adriatic/80 hover:text-adriatic"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#book"
              className={`hidden rounded-full px-5 py-3 text-[0.68rem] tracking-[0.2em] uppercase transition-colors duration-500 sm:inline-block ${
                light ? "bg-ivory/95 text-adriatic-deep hover:bg-ivory" : "bg-olive text-ivory hover:bg-forest"
              }`}
            >
              Book a Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`relative flex h-11 w-11 items-center justify-center rounded-full xl:hidden ${
                light || open ? "text-ivory" : "text-adriatic"
              }`}
            >
              <span
                className={`absolute h-px w-6 bg-current transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-1"}`}
              />
              <span
                className={`absolute h-px w-6 bg-current transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-1"}`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-end bg-adriatic-deep px-6 pt-28 pb-12 text-ivory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav aria-label="Mobile">
              <ul className="space-y-3">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link href={item.href} onClick={() => setOpen(false)} className="font-display text-4xl font-light">
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <Link
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-12 rounded-full bg-ivory py-4 text-center text-[0.72rem] tracking-[0.22em] text-adriatic-deep uppercase"
            >
              Book a Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Keeps the primary CTA in reach on phones once the hero has scrolled away. */
export function MobileBookBar() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 600));

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-3 transition-transform duration-700 ease-[var(--ease-calm)] sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="#book"
        className="block rounded-full bg-olive py-4 text-center text-[0.72rem] tracking-[0.22em] text-ivory uppercase shadow-[0_10px_30px_-10px_rgba(16,38,52,0.5)]"
      >
        Book a Consultation
      </Link>
    </div>
  );
}
