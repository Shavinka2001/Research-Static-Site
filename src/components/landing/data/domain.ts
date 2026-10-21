import type {
  DomainSection,
  MethodologyPhase,
} from "@/components/landing/types";

/*
 * ===========================================================================
 *  Research write-up for the Domain page.
 *
 *  Drawn from the group's research paper, the Topic Assessment Form and the
 *  Common Integrated Solution Report. Citations follow the paper's reference
 *  list.
 * ===========================================================================
 */

export const PROJECT_ABSTRACT =
  "Pre-construction planning in Sri Lanka is split among four professionals, each producing a document and handing it on: the surveyor grades the plot, the architect draws the building, a consultant obtains the statutory approvals and the quantity surveyor prices the work. None of these analyses is checked against the others, so site risk, measurement error, regulatory exposure and long-run operating cost all surface after the decisions that caused them. ConstructAI performs all four analyses over a single shared project record. From a map pin and an ordinary 2D floor plan it returns a terrain and environmental risk assessment, a measured bill of quantities, a clause-cited approval roadmap under the Urban Development Authority regulations, and a fifty-year cost trajectory for the specific materials chosen on that specific site.";

export const DOMAIN_SECTIONS: readonly DomainSection[] = [
  {
    id: "literature-survey",
    title: "Literature survey",
    body: [
      "Each of the four pre-construction analyses has its own literature. GIS multi-criteria evaluation is the standard way to grade land for a use, and recent work learns the criteria weights from data instead of taking them from experts (Zhao et al., 2024). Google Earth Engine makes decades of elevation, land cover and inundation imagery available for any polygon (Gorelick et al., 2017), and satellite imagery has been combined with parcel data to find developable vacant land (Rao et al., 2026).",
      "Detecting walls, doors and windows in architectural drawings is a mature computer vision problem with a difficult long tail of scales and drafting conventions (Xu et al., 2024; Ren et al., 2025). Automated code compliance has been studied for two decades. The hard part is encoding regulation prose as executable rules, which has been approached through semantic ontologies (Guo et al., 2021), knowledge graphs (Peng & Liu, 2023) and NLP-based extraction (Zhang & El-Gohary, 2016). Tree ensembles outperform classical regression for early-stage cost estimation (Elmousalami, 2020; Singh et al., 2025), and machine learning has been applied to the service life of reinforced concrete (Taffese & Sistonen, 2017).",
      "In Sri Lanka, cost and time estimated at the initiation of a project are consistently exceeded during delivery (Rathnayake & Ranasinghe, 2020). Review work on decision support in construction reaches the same conclusion as the rest of this survey: the individual techniques exist, but they are rarely joined (Waqar, 2024).",
    ],
    points: [
      "Rathnayake & Ranasinghe (2020): cost and time performance of Sri Lankan construction projects",
      "Zhao, van Duynhoven & Dragicevic (2024); Gorelick et al. (2017): GIS suitability and Earth Engine",
      "Xu et al. (2024); Ren et al. (2025): detection and parsing of architectural floor plans",
      "Guo et al. (2021); Peng & Liu (2023); Zhang & El-Gohary (2016): automated compliance checking",
      "Elmousalami (2020); Singh et al. (2025); Chen & Guestrin (2016): learned cost estimation and XGBoost",
      "Taffese & Sistonen (2017): machine learning for service life of reinforced concrete",
    ],
  },
  {
    id: "research-gap",
    title: "Research gap",
    body: [
      "The gap is in integration, not in capability. A suitability map produced by one system cannot be consumed by another. Quantities measured with takeoff software are re-keyed into spreadsheets to be priced. Compliance checkers assume a semantically rich BIM model that low-rise Sri Lankan projects do not have, since most still begin as 2D drawings and images. And cost models stop at capital expenditure, so a building that is cheaper to build but needs major repair twice as often is recorded as the cheaper building.",
      "As far as the group's review found, no existing platform takes a map pin and a floor plan and returns site, plan, permit and lifecycle assessments from one shared representation, so that a finding in one analysis changes the result of another.",
    ],
  },
  {
    id: "research-problem",
    title: "Research problem",
    body: [
      "Pre-construction decisions in Sri Lanka are made from fragmented, manually produced documents that are never evaluated against one another. As a result, site-driven risk, measurement error, regulatory exposure and long-run operating cost are each discovered too late to be acted on cheaply.",
      "Can these four analyses be carried out automatically, from data a buyer can supply before purchase, over a single project record, so that the integration changes the advice given and does not merely collect four reports?",
    ],
  },
  {
    id: "research-objectives",
    title: "Research objectives",
    body: [
      "Main objective: to design, build and evaluate an integrated platform that performs the four principal pre-construction analyses over a single shared project record, so that the output of each constrains the others, and to show that the integration produces advice none of the four could produce alone.",
    ],
    points: [
      "Derive quantified environmental exposure and terrain buildability for any Sri Lankan coordinate from open satellite, elevation, soil and climate data (Component 1).",
      "Extract metrically correct quantities and structural parameters from ordinary 2D floor plans, recovering scale from the drawing's own dimension text (Component 2).",
      "Codify a working subset of the UDA Planning and Development Regulations 2021 as clause-cited, machine-checkable rules, and return a buildable envelope and an approval roadmap (Component 3).",
      "Predict structural service life and a discounted fifty-year cost trajectory from the combined parameters, and report value-engineering options as a break-even year (Component 4).",
      "Operate the four components over one provenance-carrying shared state with no manual data transfer, in which a missing value is unknown and never silently defaulted.",
    ],
  },
] satisfies readonly DomainSection[];

export const METHODOLOGY: readonly MethodologyPhase[] = [
  {
    id: "acquisition",
    name: "Input acquisition",
    detail:
      "A site coordinate with an optional plot polygon, and an architectural floor plan as a PDF or image. No BIM model and no structural model is required.",
  },
  {
    id: "site",
    name: "C1 · Site analysis",
    detail:
      "SRTM elevation, Sentinel-2 imagery, OpenStreetMap vectors, SoilGrids and Department of Meteorology normals are reduced to six exposure parameters (coastal distance, soil pH, humidity, rainfall, industrial distance and elevation), with Horn slope banding and a D8 flood-screening flag.",
  },
  {
    id: "plan",
    name: "C2 · Plan validation",
    detail:
      "The drawing is normalised and deskewed. Tiled YOLOv8s detects walls, columns, doors and windows, and Tesseract OCR on the dimension text recovers metres per pixel. The result is a metric quantity table and six structural parameters.",
  },
  {
    id: "compliance",
    name: "C3 · Compliance advisory",
    detail:
      "A forward-chaining engine evaluates 20 clause-cited rules in four families (density, dimensional, spatial and procedural) and the full 144-cell floor area ratio schedule. Each rule is reported as compliant, violated or not assessed.",
  },
  {
    id: "lifecycle",
    name: "C4 · Cost and lifecycle",
    detail:
      "A thirteen-parameter vector feeds an XGBoost service life regressor. The bill of quantities is priced at automatically collected rates and discounted over fifty years following ISO 15686-5, with replacement events placed at the predicted end of life.",
  },
  {
    id: "integration",
    name: "Integration",
    detail:
      "The components never call each other. They read and write one shared project state with units in field names, keyed feature vectors, range assertions at every boundary and provenance on every value.",
  },
  {
    id: "evaluation",
    name: "Evaluation",
    detail:
      "An 80/20 held-out split of a 1 000-record physics-informed dataset with five-fold cross-validation against five baselines, plus partial dependence, scenario and fault-injection studies. The training data is synthetic, so the figures describe the formulation and not real buildings.",
  },
] satisfies readonly MethodologyPhase[];
