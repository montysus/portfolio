"use client";

import { useEffect } from "react";

import type { StaticSiteDocument } from "@/lib/static-site";

export function StaticSitePage({ document }: { document: StaticSiteDocument }) {
  useEffect(() => {
    if (!document.script.trim()) return;

    const runScript = new Function(document.script);
    runScript();
  }, [document.script]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: document.css }} />
      <div dangerouslySetInnerHTML={{ __html: document.html }} />
    </>
  );
}
