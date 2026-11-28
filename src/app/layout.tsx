import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Gilda_Display, Jost, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header, MobileBookBar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// Hero display face. Stand-in for Gallient (commercial): once its licence is bought,
// swap this for next/font/local pointing at the Gallient file and keep `--font-hero-face`.
const heroFace = Gilda_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hero-face",
  display: "swap",
});

// Labels, nav and buttons — same pairing as the reference site.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AYUSH Ayurveda Clinic — Montenegro",
    template: "%s — AYUSH Ayurveda Clinic",
  },
  description:
    "Bringing India and Ayurveda to Montenegro. AYUSH Ayurveda Clinic in Podgorica — authentic Ayurvedic consultations, Panchakarma, traditional therapies and therapeutic Yoga.",
};

export const viewport: Viewport = {
  themeColor: "#102634",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${jost.variable} ${heroFace.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <MobileBookBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
