import type { SiteTab } from "@/components/landing/types";

/**
 * The top-level tab structure required by the project web guidelines.
 *
 * The order and the labels follow the brief: Home, Domain, Milestones,
 * Documents, Slides of past presentations, About us, Contact us. Keep them in
 * step with the routes under `src/app/(site)/`.
 */
export const SITE_TABS: readonly SiteTab[] = [
  {
    href: "/",
    label: "Home",
    blurb: "An introduction to the project in abstract.",
  },
  {
    href: "/domain",
    label: "Domain",
    blurb:
      "Literature survey, research gap, problem, objectives, methodology and technologies.",
  },
  {
    href: "/milestones",
    label: "Milestones",
    blurb: "Every assessment, with its date and the marks allocated.",
  },
  {
    href: "/documents",
    label: "Documents",
    blurb: "Documents submitted and still pending.",
  },
  {
    href: "/slides",
    label: "Presentations",
    blurb: "Slide decks from past presentations.",
  },
  {
    href: "/about",
    label: "About us",
    blurb: "The research group and supervision.",
  },
  {
    href: "/contact",
    label: "Contact us",
    blurb: "How to reach the group.",
  },
] satisfies readonly SiteTab[];

export const PROJECT_TITLE = "Construction AI";

export const PROJECT_SUBTITLE =
  "Intelligent AI-Driven Pre-Construction Feasibility Analyzer";

/**
 * Origin where the Construction AI platform (login, dashboard) is hosted.
 *
 * Empty by default. The platform is a separate application and is not
 * deployed alongside this site, so every link into it is omitted rather than
 * rendered dead — a button that opens a broken page is worse than no button.
 *
 * Set `NEXT_PUBLIC_PLATFORM_URL` once the platform has a home. It is inlined
 * at build time, so changing it needs a redeploy.
 */
export const PLATFORM_URL = (
  process.env.NEXT_PUBLIC_PLATFORM_URL ?? ""
).replace(/\/+$/, "");

/** True when the platform has somewhere to link to. */
export const HAS_PLATFORM = PLATFORM_URL.length > 0;

/**
 * Absolute URL for a path inside the platform, or `null` when no platform is
 * configured. Callers render nothing on `null`.
 */
export function platformUrl(path: string): string | null {
  if (!HAS_PLATFORM) return null;
  return `${PLATFORM_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
