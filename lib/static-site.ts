import { readFileSync } from "node:fs";
import path from "node:path";

export type StaticSiteDocument = {
  css: string;
  html: string;
  script: string;
  title: string;
};

export function loadStaticSitePage(fileName: string): StaticSiteDocument {
  const filePath = path.join(process.cwd(), "site", fileName);
  const source = readFileSync(filePath, "utf8");

  const title = source.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "Montyforge";
  const css = source.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? "";
  const body = source.match(/<body>([\s\S]*?)<\/body>/)?.[1] ?? "";
  const script = body.match(/<script>([\s\S]*?)<\/script>/)?.[1] ?? "";
  const html = body.replace(/<script>[\s\S]*?<\/script>/, "").trim();

  return {
    css,
    html: rewriteStaticPaths(html),
    script: rewriteStaticPaths(script),
    title,
  };
}

function rewriteStaticPaths(value: string) {
  return value
    .replaceAll('href="index.html#', 'href="/#')
    .replaceAll("href='index.html#", "href='/#")
    .replaceAll('href="index.html"', 'href="/"')
    .replaceAll("href='index.html'", "href='/'")
    .replaceAll('href="lifevest.html"', 'href="/lifevest"')
    .replaceAll("href='lifevest.html'", "href='/lifevest'")
    .replaceAll('src="assets/', 'src="/montyforge/')
    .replaceAll("src='assets/", "src='/montyforge/")
    .replaceAll('"assets/', '"/montyforge/')
    .replaceAll("'assets/", "'/montyforge/");
}
