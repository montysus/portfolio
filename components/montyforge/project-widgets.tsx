"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { asset } from "@/lib/montyforge";

const galleryImages = [
  { src: "anvil3-r2.png", caption: "01 / 04 - Hero render" },
  { src: "anvil3-r4.png", caption: "02 / 04 - Operational scenario" },
  { src: "anvil3-r1.png", caption: "03 / 04 - Underside view" },
  { src: "anvil3-r3.png", caption: "04 / 04 - Mechanism detail" },
];

export function AnvilGallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft")
        setActive(
          (index) =>
            ((index ?? 0) + galleryImages.length - 1) % galleryImages.length,
        );
      if (event.key === "ArrowRight")
        setActive((index) => ((index ?? 0) + 1) % galleryImages.length);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-8">
        <button
          onClick={() => setActive(1)}
          className="group relative aspect-[16/7] w-full overflow-hidden bg-[#0d0d0d] text-left"
        >
          <Image
            src={asset("anvil3-r4.png")}
            alt="Anvil-III operational render"
            fill
            sizes="100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.02]"
          />
          <GalleryCaption
            number="02 / 04"
            caption="Operational scenario · North Sea"
          />
        </button>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {[
            ["anvil3-r1.png", "03 / 04", "Underside view · payload bay", 2],
            ["anvil3-r3.png", "04 / 04", "Release mechanism · detail", 3],
          ].map(([image, number, caption, index]) => (
            <button
              key={image as string}
              onClick={() => setActive(index as number)}
              className="group relative aspect-[4/3] overflow-hidden bg-[#0d0d0d] text-left"
            >
              <Image
                src={asset(image as string)}
                alt={caption as string}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <GalleryCaption
                number={number as string}
                caption={caption as string}
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="bg-black/92 fixed inset-0 z-[100] flex items-center justify-center p-5"
          onClick={() => setActive(null)}
        >
          <button className="absolute right-5 top-5 border border-white/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white">
            ESC / Close
          </button>
          <button
            className="absolute left-5 top-1/2 border border-white/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white"
            onClick={(event) => {
              event.stopPropagation();
              setActive(
                (index) =>
                  ((index ?? 0) + galleryImages.length - 1) %
                  galleryImages.length,
              );
            }}
          >
            ← Prev
          </button>
          <Image
            src={asset(galleryImages[active].src)}
            alt={galleryImages[active].caption}
            width={1400}
            height={900}
            className="max-h-[82vh] w-auto max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="absolute right-5 top-1/2 border border-white/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white"
            onClick={(event) => {
              event.stopPropagation();
              setActive((index) => ((index ?? 0) + 1) % galleryImages.length);
            }}
          >
            Next →
          </button>
          <div className="absolute bottom-5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
            {galleryImages[active].caption}
          </div>
        </div>
      ) : null}
    </>
  );
}

function GalleryCaption({
  number,
  caption,
}: {
  number: string;
  caption: string;
}) {
  return (
    <>
      <span className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
        {number}
      </span>
      <span className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
        {caption}
      </span>
    </>
  );
}

export function VideoEmbed({
  title,
  src,
  source,
}: {
  title: string;
  src: string;
  source: string;
}) {
  return (
    <div className="overflow-hidden border border-white/10 bg-[#0b0b0b]">
      <iframe
        src={src}
        title={title}
        allowFullScreen
        loading="lazy"
        className="aspect-video w-full"
      />
      <div className="p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#666]">
          {source}
        </div>
        <div className="mt-2 text-sm leading-relaxed text-[#dedede]">
          {title}
        </div>
      </div>
    </div>
  );
}
