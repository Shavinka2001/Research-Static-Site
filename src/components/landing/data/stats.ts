import type { HeroStat } from "@/components/landing/types";

/**
 * Headline figures for the hero strip.
 *
 * `provenance` is rendered as a title/tooltip so an examiner can trace each
 * number back to where it comes from. Every figure is reported in the Common
 * Integrated Solution Report. The service life model was trained on a
 * synthetic, physics-informed dataset, so these numbers describe the
 * formulation rather than measured buildings. Keep that wording in place.
 */
export const HERO_STATS: readonly HeroStat[] = [
  {
    label: "Held-out R², service life",
    value: 0.9847,
    decimals: 4,
    provenance:
      "XGBoost service life model on a 200-record held-out partition of a 1 000-record synthetic dataset; RMSE 0.433 years.",
  },
  {
    label: "Service life lost to site alone",
    value: 36.1,
    suffix: "%",
    decimals: 1,
    provenance:
      "Identical structure on four Sri Lankan site types: 17.71 years inland on neutral soil against 11.31 years coastal on acidic wet-zone soil.",
  },
  {
    label: "Clause-cited UDA rules",
    value: 20,
    provenance:
      "Encoded from the UDA Planning and Development Regulations 2021, alongside the full 144-cell floor area ratio schedule.",
  },
  {
    label: "Lifecycle horizon",
    value: 50,
    suffix: " yr",
    provenance:
      "Discounted whole-life cost trajectory following ISO 15686-5, with replacement events at predicted end of life.",
  },
] satisfies readonly HeroStat[];
