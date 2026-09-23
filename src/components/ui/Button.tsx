import Link from "next/link";

type Variant = "solid" | "outline-light" | "outline-dark" | "olive";

const styles: Record<Variant, string> = {
  solid: "bg-ivory text-adriatic-deep hover:bg-sand",
  olive: "bg-olive text-ivory hover:bg-forest",
  "outline-light": "border border-ivory/60 text-ivory hover:bg-ivory/10 hover:border-ivory",
  "outline-dark": "border border-adriatic/40 text-adriatic hover:bg-adriatic hover:text-ivory",
};

export function Button({
  href,
  variant = "solid",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[0.68rem] font-normal tracking-[0.16em] uppercase sm:text-[0.7rem] sm:tracking-[0.22em] transition-colors duration-500 ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 10"
      aria-hidden
      className={`h-2.5 w-5 transition-transform duration-500 ease-[var(--ease-calm)] group-hover:translate-x-1 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path d="M0 5h19M14.5 0.5 19 5l-4.5 4.5" />
    </svg>
  );
}
