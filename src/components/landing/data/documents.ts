import type {
  Presentation,
  ProjectDocument,
} from "@/components/landing/types";

/*
 * ===========================================================================
 *  Project documents.
 *
 *  Published files live under /public/documents and are linked from here.
 *  Leave `href` as `null` while a document is still pending: the page then
 *  renders it as "Pending" instead of a dead link, which is what the
 *  guidelines ask for.
 *
 *  To publish a pending document, export it to PDF, copy it into
 *  public/documents/ and set `href` to "/documents/<file name>". Keep the
 *  whole site under the 20 MB course-web limit.
 * ===========================================================================
 */
export const PROJECT_DOCUMENTS: readonly ProjectDocument[] = [
  {
    id: "topic-assessment",
    title: "Topic Assessment Form (R26-IT-154)",
    kind: "proposal",
    author: "Research group",
    submittedOn: "2026-01-14",
    href: "/documents/R26-IT-154_Topic_Assessment_Form.pdf",
  },
  {
    id: "charter",
    title: "Project Charter",
    kind: "charter",
    author: "Research group",
    submittedOn: null,
    href: null,
  },
  {
    id: "proposal",
    title: "Proposal Document",
    kind: "proposal",
    author: "Research group",
    submittedOn: null,
    href: null,
  },
  {
    id: "checklist-1",
    title: "Checklist — Topic Assessment",
    kind: "checklist",
    author: "Research group",
    submittedOn: null,
    href: null,
  },
  {
    id: "checklist-2",
    title: "Checklist — Progress Evaluation",
    kind: "checklist",
    author: "Research group",
    submittedOn: null,
    href: null,
  },
  {
    id: "final-main",
    title: "Common Integrated Solution Report (main document)",
    kind: "final",
    author: "Research group",
    submittedOn: "2026-11-10",
    href: null,
  },
  {
    id: "final-c1",
    title:
      "Individual Thesis — Component 1: Automated Geospatial Site Analysis for Pre-Construction Feasibility",
    kind: "final",
    author: "Ranaweera K. A. (IT22542724)",
    submittedOn: "2026-11-10",
    href: null,
  },
  {
    id: "final-c2",
    title:
      "Individual Thesis — Component 2: Architectural Plan Validation and Metric Extraction",
    kind: "final",
    author: "Shavinka Y. G. K. (IT22110770)",
    submittedOn: null,
    href: null,
  },
  {
    id: "final-c3",
    title:
      "Individual Thesis — Component 3: Rule-Based Regulatory Compliance Screening",
    kind: "final",
    author: "Samuditha T. A. V. (IT22542892)",
    submittedOn: null,
    href: null,
  },
  {
    id: "final-c4",
    title:
      "Individual Thesis — Component 4: Machine Learning Based Service Life and Whole-Life Cost Prediction",
    kind: "final",
    author: "Shamindi E. E. (IT22547460)",
    submittedOn: "2026-11-10",
    href: null,
  },
  {
    id: "research-paper",
    title:
      "Research Paper — Construct AI: An Integrated AI-Driven Framework for Automated Pre-Construction Feasibility Analysis and Decision Support",
    kind: "other",
    author: "Research group, with Mr. Ravi Supunya and Mrs. Suriya Kumari",
    submittedOn: null,
    href: "/documents/R26-IT-154_Research_Paper.pdf",
  },
  {
    id: "research-poster",
    title: "Research Poster — ConstructAI",
    kind: "other",
    author: "Research group",
    submittedOn: null,
    href: "/documents/R26-IT-154_Research_Poster.pdf",
  },
] satisfies readonly ProjectDocument[];

export const DOCUMENT_KIND_LABELS: Record<ProjectDocument["kind"], string> = {
  charter: "Charter",
  proposal: "Proposal",
  checklist: "Checklist",
  final: "Final submission",
  other: "Publications",
};

/*
 * ===========================================================================
 *  Slide decks. Same convention as the documents above: copy the file into
 *  public/documents/ and set `href`; `null` renders as "Not yet presented".
 * ===========================================================================
 */
export const PRESENTATIONS: readonly Presentation[] = [
  {
    id: "proposal-presentation",
    title: "Proposal Presentation",
    date: null,
    href: null,
    summary:
      "The research problem, the gap in existing work, and the proposed scope of each of the four components.",
  },
  {
    id: "progress-1",
    title: "Progress Presentation I",
    date: null,
    href: null,
    summary:
      "First working implementations of the four components against the shared project state.",
  },
  {
    id: "progress-2",
    title: "Progress Presentation II",
    date: null,
    href: null,
    summary:
      "The integrated pipeline, from a map pin and a floor plan to a single feasibility report.",
  },
  {
    id: "final-presentation",
    title: "Final Presentation",
    date: null,
    href: "/documents/R26-IT-154_Final_Presentation.pptx",
    summary:
      "Complete system demonstration, evaluation results and the research contribution.",
  },
] satisfies readonly Presentation[];
