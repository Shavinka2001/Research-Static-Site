import type {
  Institution,
  Supervisor,
  TeamMember,
} from "@/components/landing/types";

/*
 * ===========================================================================
 *  Team details for the About us and Contact us pages.
 *
 *  Names, registration numbers, component titles and e-mail addresses are
 *  taken from the group's own submissions: the Topic Assessment Form
 *  (R26-IT-154), the research paper and the Common Integrated Solution
 *  Report. Focus areas summarise each member's individual thesis.
 *
 *  - `branch`      the git branch each member works on in the platform
 *                  repository.
 *  - `photo`       optional path under /public (e.g. "/team/name.jpg").
 *                  Omit it and the card shows a monogram instead.
 *  - `achievements` optional list of awards or publications.
 * ===========================================================================
 */

const PAPER =
  "Co-author, “Construct AI: An Integrated AI-Driven Framework for Automated Pre-Construction Feasibility Analysis and Decision Support”";

export const TEAM: readonly TeamMember[] = [
  {
    id: "member-1",
    email: "kavithashwinranaweera@gmail.com",
    name: "Ranaweera K. A.",
    studentId: "IT22542724",
    componentLabel: "Component 1",
    componentTitle: "Automated Site Analysis & Geospatial Intelligence",
    branch: "Kavith",
    focusAreas: [
      "Six environmental exposure parameters derived from open earth observation data",
      "SRTM slope banding and D8 hydrological screening",
      "Geodesic coastal and industrial proximity analysis",
      "Partial dependence study of the site block in the lifecycle model",
    ],
    achievements: [PAPER],
  },
  {
    id: "member-2",
    email: "345kavindushavinka@gmail.com",
    name: "Shavinka Y. G. K.",
    studentId: "IT22110770",
    componentLabel: "Component 2",
    componentTitle: "Architectural Plan Validation & Metric Extraction",
    branch: "Shavinka",
    focusAreas: [
      "Tiled YOLOv8s detection of walls, columns, doors and windows",
      "OCR scale calibration from dimension annotations",
      "Metric quantity table and wall-run merging",
      "Six structural parameters for the lifecycle model",
    ],
    achievements: [PAPER],
  },
  {
    id: "member-3",
    email: "vinusha1212@gmail.com",
    name: "Samuditha T. A. V.",
    studentId: "IT22542892",
    componentLabel: "Component 3",
    componentTitle: "Regulatory Approval & Compliance Advisory",
    branch: "Vinusha",
    focusAreas: [
      "Declarative store of 20 clause-cited UDA rules and the 144-cell FAR schedule",
      "Forward-chaining evaluator with compliant, violated and not-assessed verdicts",
      "Buildable envelope and approval roadmap",
      "Rule behaviour over a 1 000-case corpus",
    ],
    achievements: [PAPER],
  },
  {
    id: "member-4",
    email: "shamindiemalsha@gmail.com",
    name: "Shamindi E. E.",
    studentId: "IT22547460",
    componentLabel: "Component 4",
    componentTitle: "Cost, Scheduling & Lifecycle Consultant",
    branch: "Emalsha",
    focusAreas: [
      "XGBoost service life prediction from thirteen design and site parameters",
      "Bill of quantities priced at automatically collected rates",
      "ISO 15686-5 discounted fifty-year cost trajectory",
      "Value engineering reported as a break-even year",
    ],
    achievements: [PAPER],
  },
] satisfies readonly TeamMember[];

export const SUPERVISORS: readonly Supervisor[] = [
  {
    id: "supervisor",
    name: "Mr. Ravi Supunya",
    title: "Faculty of Computing, SLIIT",
    role: "Supervisor",
  },
  {
    id: "co-supervisor",
    name: "Mrs. Suriya Kumari",
    title: "Faculty of Computing, SLIIT",
    role: "Co-Supervisor",
  },
] satisfies readonly Supervisor[];

export const INSTITUTION: Institution = {
  university: "Sri Lanka Institute of Information Technology",
  faculty: "Faculty of Computing",
  department: "Department of Information Technology",
  degree:
    "BSc (Hons) in Information Technology, specialising in Information Technology",
  academicYear: "2026 · IT4010 Research Project · R26-IT-154",
};

/** Public repository for the research artefact. */
export const REPOSITORY_URL =
  "https://github.com/Shavinka2001/construction-ai-research";
