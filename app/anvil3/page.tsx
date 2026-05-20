import type { Metadata } from "next";

import { StaticSitePage } from "@/components/montyforge/static-site-page";
import { loadStaticSitePage } from "@/lib/static-site";

export const metadata: Metadata = {
  title: "Anvil-III - Modular Release System",
};

export default function AnvilPage() {
  return <StaticSitePage document={loadStaticSitePage("anvil3.html")} />;
}
