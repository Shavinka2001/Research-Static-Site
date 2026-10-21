import type { ContactChannel } from "@/components/landing/types";

/*
 * ===========================================================================
 *  Contact details. Addresses are the ones printed on the group's research
 *  paper. No group telephone number has been supplied yet; add one here as
 *  a `tel:` channel when the group agrees which number to publish.
 * ===========================================================================
 */

export const GENERAL_CONTACTS: readonly ContactChannel[] = [
  {
    label: "Group contact",
    value: "kavithashwinranaweera@gmail.com",
    href: "mailto:kavithashwinranaweera@gmail.com",
  },
  {
    label: "Supervisor",
    value: "ravi.s@sliit.lk",
    href: "mailto:ravi.s@sliit.lk",
  },
  {
    label: "Co-supervisor",
    value: "suriyaa.k@sliit.lk",
    href: "mailto:suriyaa.k@sliit.lk",
  },
] satisfies readonly ContactChannel[];

/** Where the general enquiry form sends its message. */
export const ENQUIRY_ADDRESS = "kavithashwinranaweera@gmail.com";

export const DEPARTMENT_ADDRESS = [
  "Department of Information Technology",
  "Faculty of Computing",
  "Sri Lanka Institute of Information Technology",
  "Matara, Sri Lanka",
] as const;
