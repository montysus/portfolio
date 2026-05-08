"use client";

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
