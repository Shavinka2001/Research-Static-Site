import Link from "next/link";
import { Github } from "lucide-react";

import { Container } from "@/components/landing/primitives/Section";
import { ENGINES } from "@/components/landing/data/engines";
import {
  SITE_TABS,
  PROJECT_TITLE,
  platformUrl,
} from "@/components/landing/data/site";
import { INSTITUTION, REPOSITORY_URL } from "@/components/landing/data/team";

/** Rendered only when a platform origin is configured. */
const PLATFORM_PATHS = [
  { path: "/login", label: "Sign in" },
  { path: "/register", label: "Create account" },
  { path: "/dashboard", label: "Dashboard" },
] as const;

export function LandingFooter() {
  const year = new Date().getFullYear();

  // flatMap rather than map + filter: it narrows `href` to string without a
  // type predicate, which `as const` labels would otherwise fight.
  const platformLinks = PLATFORM_PATHS.flatMap((item) => {
    const href = platformUrl(item.path);
    return href ? [{ label: item.label as string, href }] : [];
  });

  return (
    <footer className="border-t border-white/10 bg-ink-deep text-slate-400">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="grid h-8 w-8 place-items-center bg-gold text-caption font-bold text-ink"
              >
                CA
              </span>
              <div className="leading-none">
                <p className="text-body font-bold tracking-snug text-white">
                  {PROJECT_TITLE}
                </p>
                <p className="mt-1 font-mono text-label-xs uppercase tracking-label-wide text-slate-400">
                  Research project
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-caption leading-relaxed">
              Intelligent AI-driven pre-construction feasibility analyzer.
              Submitted as an undergraduate research project at{" "}
              {INSTITUTION.university}.
            </p>

            <a
              href={REPOSITORY_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="lp-focus mt-6 inline-flex min-h-touch items-center gap-2 border border-white/15 px-4 font-mono text-micro text-slate-300 transition-colors hover:bg-white/5 ring-offset-ink"
            >
              <Github aria-hidden className="h-4 w-4" />
              Source repository
            </a>
          </div>

          <nav aria-label="Site sections">
            <h2 className="lp-label text-gold">
              Pages
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SITE_TABS.map((tab) => (
                <li key={tab.href}>
                  <Link
                    href={tab.href}
                    className="lp-focus inline-flex min-h-[1.75rem] items-center text-caption transition-colors hover:text-white ring-offset-ink"
                  >
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Research components">
            <h2 className="lp-label text-gold">
              Components
            </h2>
            <ul className="mt-4 space-y-2.5">
              {ENGINES.map((engine) => (
                <li key={engine.id}>
                  {/* `engine.href` is a path inside the platform, which this
                      site does not serve — point at the section describing it
                      on the home page instead. */}
                  <Link
                    href="/#engines"
                    className="lp-focus inline-flex min-h-[1.75rem] items-center text-caption leading-snug transition-colors hover:text-white ring-offset-ink"
                  >
                    {engine.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {platformLinks.length > 0 ? (
            <nav aria-label="Platform">
              <h2 className="lp-label text-gold">Platform</h2>
              <ul className="mt-4 space-y-2.5">
                {platformLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="lp-focus inline-flex min-h-[1.75rem] items-center text-caption transition-colors hover:text-white ring-offset-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-micro leading-relaxed text-slate-400">
          <p>
            <span className="font-mono uppercase tracking-label text-slate-400">
              Academic disclaimer.{" "}
            </span>
            This platform is an undergraduate research prototype. Its outputs —
            buildability scores, clash resolutions, generated structural
            layouts, compliance verdicts, cost estimates and lifecycle
            projections — are indicative and must not be relied upon for
            construction, procurement or statutory submission. All designs
            require certification by a chartered architect or engineer, and all
            approvals remain subject to the determination of the relevant
            authority.
          </p>
          <p>
            Geospatial data is derived from Google Earth Engine (SRTM, ESA
            WorldCover, JRC Global Surface Water) and Open-Meteo under their
            respective terms. Authority contact details shown in the platform
            are illustrative and must be verified independently.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-micro sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Construction AI Research Group. All rights reserved.
          </p>
          <p className="text-slate-400">
            {INSTITUTION.department} · {INSTITUTION.academicYear}
          </p>
        </div>
      </Container>
    </footer>
  );
}
