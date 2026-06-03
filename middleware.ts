import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

/**
 * Only the canonical production domain is allowed to be indexed. Every other
 * host, Vercel preview URLs, the *-ecom-seo.vercel.app aliases, and the stale
 * scaffold-peptips.vercel.app duplicate project, gets an X-Robots-Tag:
 * noindex header so Google consolidates everything onto peptips.com and never
 * indexes a duplicate of the site.
 */
const INDEXABLE_HOSTS = new Set(["peptips.com", "www.peptips.com"]);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  if (!INDEXABLE_HOSTS.has(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  // Match every path except:
  //  - Next internals (_next, _vercel)
  //  - Static files (anything with a dot — favicon.ico, /icon.png, /og.jpg)
  //  - Route handlers we deliberately keep locale-free (sitemap, robots, llms.txt,
  //    OG/twitter images, icons). Those still pass through Next's normal routing
  //    because they live at app/ root.
  matcher: [
    "/((?!api|_next|_vercel|go|sitemap.xml|robots.txt|llms.txt|opengraph-image|twitter-image|icon|apple-icon|.*\\..*).*)",
  ],
};
