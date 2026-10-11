/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /**
         * Industrial Luxury palette.
         *
         * `gold` and `emerald.brand` are the brand tones; they are correct as
         * fills and as text on the dark ground. On a light ground they fall
         * short of AA (2.10:1 and 2.54:1), so text and icons there use the
         * `ink` variants instead. See README for the full table.
         */
        ink: {
          DEFAULT: "#0F172A",
          deep: "#080D19",
          light: "#1B2437",
          line: "rgba(148, 163, 184, 0.16)",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E4C65A",
          dark: "#B8942E",
          muted: "rgba(212, 175, 55, 0.15)",
          /** 4.90:1 on white. For gold text or icons on a light section. */
          ink: "#8A6D1C",
        },
        emerald: {
          brand: "#10B981",
          "brand-dark": "#059669",
          "brand-muted": "rgba(16, 185, 129, 0.14)",
          /** 5.48:1 on white. For emerald text on a light section. */
          ink: "#047857",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      /**
       * Type scale. Seven steps, each carrying its own leading. Components use
       * these names rather than arbitrary rem values, so the scale can be
       * retuned in one place.
       */
      fontSize: {
        "display-xl": ["4.25rem", { lineHeight: "1.0" }],
        "display-lg": ["3.5rem", { lineHeight: "1.04" }],
        display: ["2.5rem", { lineHeight: "1.08" }],
        "display-sm": ["2.125rem", { lineHeight: "1.1" }],
        title: ["1.75rem", { lineHeight: "1.18" }],
        "title-sm": ["1.375rem", { lineHeight: "1.25" }],
        heading: ["1.125rem", { lineHeight: "1.35" }],
        lead: ["1.1875rem", { lineHeight: "1.55" }],
        body: ["0.9375rem", { lineHeight: "1.65" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.8125rem", { lineHeight: "1.55" }],
        micro: ["0.75rem", { lineHeight: "1.5" }],
        label: ["0.6875rem", { lineHeight: "1.4" }],
        "label-sm": ["0.625rem", { lineHeight: "1.3" }],
        "label-xs": ["0.5625rem", { lineHeight: "1.3" }],
      },
      /** Kept separate from fontSize so a size can be reused untracked. */
      letterSpacing: {
        display: "-0.035em",
        title: "-0.028em",
        heading: "-0.02em",
        snug: "-0.012em",
        label: "0.16em",
        "label-wide": "0.18em",
      },
      minHeight: { touch: "48px" },
      minWidth: { touch: "48px" },
      spacing: {
        "safe-bottom": "env(safe-area-inset-bottom, 0px)",
        /** One vertical rhythm for every section band. */
        section: "5rem",
        "section-lg": "7rem",
      },
      maxWidth: {
        shell: "80rem",
        /** Comfortable measure for running prose, ~70 characters. */
        prose: "38rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
