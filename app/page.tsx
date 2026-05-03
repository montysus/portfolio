import { StaticSitePage } from "@/components/montyforge/static-site-page";
import { loadStaticSitePage } from "@/lib/static-site";

export default function Home() {
  return <StaticSitePage document={loadStaticSitePage("index.html")} />;
}
