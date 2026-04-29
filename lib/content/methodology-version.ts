/**
 * Methodology versioning surface.
 *
 * /methodology resolves to the current version; historical versions
 * remain reachable at /methodology/v1-1, /methodology/v1-2 so external
 * citations against an older version stay resolvable.
 */

export const METHODOLOGY_VERSIONS = ["v1-2"] as const;
export type MethodologyVersionSlug = (typeof METHODOLOGY_VERSIONS)[number];

export const CURRENT_METHODOLOGY: MethodologyVersionSlug = "v1-2";

export const METHODOLOGY_LABEL: Record<MethodologyVersionSlug, string> = {
  "v1-2": "v1.2 (current)",
};
