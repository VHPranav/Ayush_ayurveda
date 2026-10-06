import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
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

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AYUSH & VIVUM — Ayurveda, Yoga & Integrative Wellness in Montenegro",
    template: "%s — AYUSH & VIVUM",
  },
  description:
    "Where Eastern wisdom meets Montenegro’s healing nature. Personalised Ayurveda, yoga and integrative wellness shaped by the Adriatic Sea, the mountains and the Mediterranean way of life.",
};

export const viewport: Viewport = {
  themeColor: "#102634",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${jost.variable}`}>
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
