import type { Metadata } from "next";

import { StaticSitePage } from "@/components/montyforge/static-site-page";
import { loadStaticSitePage } from "@/lib/static-site";

export const metadata: Metadata = {
  title: "Life Vest Deployment System",
};

export default function LifeVestPage() {
  return <StaticSitePage document={loadStaticSitePage("lifevest.html")} />;
}
