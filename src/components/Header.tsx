"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Logo } from "./ui/Logo";
import { lightTopPages, navItems } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 80));

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close menus when navigating (state adjusted during render, per React guidance)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setMenu(null);
  }

  const solid = scrolled || lightTopPages.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  const light = !solid && !open;
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-700 ease-[var(--ease-calm)] ${
          solid && !open
            ? "bg-ivory/90 py-3 shadow-[0_1px_0_rgba(28,58,75,0.08)] backdrop-blur-md"
            : "bg-transparent py-5 md:py-7"
        }`}
        onMouseLeave={() => setMenu(null)}
      >
        <div className="flex w-full items-center justify-between gap-6 px-5 md:px-10 xl:px-16">
          <Link href="/" aria-label="AYUSH — home">
            <Logo tone={light || open ? "light" : "dark"} />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.href} className="relative" onMouseEnter={() => setMenu(item.children ? item.label : null)}>
                  <Link
                    href={item.href}
                    onFocus={() => setMenu(item.children ? item.label : null)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative py-2 font-label text-[0.69rem] tracking-[0.2em] uppercase transition-colors duration-500 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100 ${
                      isActive(item.href) ? "after:scale-x-100" : "after:scale-x-0"
                    } ${light ? "text-ivory/90 hover:text-ivory" : "text-adriatic/80 hover:text-adriatic"}`}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <AnimatePresence>
                      {menu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 w-72 -translate-x-1/2 pt-5"
                        >
                          <ul className="rounded-2xl border border-stone/50 bg-ivory p-2 shadow-[0_24px_60px_-24px_rgba(16,38,52,0.35)]">
                            {item.children.map((c) => (
                              <li key={c.href + c.label}>
                                <Link
                                  href={c.href}
                                  className="block rounded-xl px-4 py-3 transition-colors hover:bg-sand"
                                >
                                  <span className="block font-display text-xl text-adriatic">{c.label}</span>
                                  {c.note && <span className="mt-0.5 block text-[0.8rem] text-muted">{c.note}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden rounded-full px-5 py-3 font-label text-[0.65rem] font-medium tracking-[0.2em] uppercase transition-colors duration-500 sm:inline-block ${
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
            className="fixed inset-0 z-[45] flex flex-col overflow-y-auto bg-adriatic-deep px-6 pt-28 pb-12 text-ivory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav aria-label="Mobile" className="mt-auto">
              <ul className="space-y-4">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link href={item.href} className="font-display text-4xl font-light">
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                        {item.children
                          .filter((c) => c.href !== item.href)
                          .map((c) => (
                            <li key={c.href}>
                              <Link href={c.href} className="eyebrow text-[0.62rem] text-ivory/60">
                                {c.label}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
            <Link
              href="/contact"
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

/** Keeps the primary CTA in reach on phones once the first screen has scrolled away. */
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
        href="/contact"
        className="block rounded-full bg-olive py-4 text-center text-[0.72rem] tracking-[0.22em] text-ivory uppercase shadow-[0_10px_30px_-10px_rgba(16,38,52,0.5)]"
      >
        Book a Consultation
      </Link>
    </div>
  );
}
