import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import { SiteNav } from "@/components/landing/SiteNav";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingScrollScope } from "@/components/landing/LandingScrollScope";
import { PROJECT_SUBTITLE, PROJECT_TITLE } from "@/components/landing/data/site";

/** Body face. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Display face (`font-display`).
 *
 * Inter's display-optimised sibling: the same skeleton as the body face, drawn
 * with tighter spacing and apertures for large sizes, so headline and body
 * share one voice. Used only at display steps — it reads thin below them, and
 * smaller headings stay on the sans stack.
 */
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/**
 * Monospace for figures, thresholds, branch names and file paths. Carrying
 * measured values in a technical face is what makes a spec read as a spec.
 */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${PROJECT_TITLE} — ${PROJECT_SUBTITLE}`,
    template: `%s | ${PROJECT_TITLE}`,
  },
  description:
    "An undergraduate research platform for pre-construction intelligence: geospatial buildability scoring, architectural validation with closed-loop clash resolution, generative structural layout, automated regulatory compliance, and lifecycle costing.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Shell for the whole site.
 *
 * All seven tabs required by the project web guidelines share this nav and
 * footer, so the chrome lives here rather than in a route group — this
 * repository contains nothing but the public site.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans">
        <LandingScrollScope />

        <a
          href="#main"
          className="lp-focus sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>

        <SiteNav />

        <main id="main" className="bg-white">
          {children}
        </main>

        <LandingFooter />
      </body>
    </html>
  );
}
