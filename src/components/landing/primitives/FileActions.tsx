import { ArrowUpRight, Download } from "lucide-react";

const ACTION =
  "lp-focus inline-flex min-h-touch items-center gap-1.5 lp-label text-gold-ink underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:decoration-gold ring-offset-white";

/**
 * View and Download links for a published file.
 *
 * `download` only takes effect for files served from this site (under
 * /public); for an external link such as a Drive URL the browser ignores it
 * and Download behaves like View.
 */
export function FileActions({ href, label }: { href: string; label: string }) {
  return (
    <span className="flex shrink-0 items-center gap-5">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`View ${label}`}
        className={ACTION}
      >
        View
        <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
      </a>
      <a href={href} download aria-label={`Download ${label}`} className={ACTION}>
        Download
        <Download aria-hidden className="h-3.5 w-3.5" />
      </a>
    </span>
  );
}
