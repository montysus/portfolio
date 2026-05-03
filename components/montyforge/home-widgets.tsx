"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { asset, projects, tools } from "@/lib/montyforge";

export function HeroSlider() {
  const slides = ["anvil3-m1.png", "anvil3-m2.png", "anvil3-m3.png"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative hidden min-h-[560px] items-center justify-center lg:flex">
      <div className="relative aspect-square w-full max-w-[560px] overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide} className="relative h-full min-w-full">
              <Image
                src={asset(slide)}
                alt={`Anvil-III render ${index + 1}`}
                fill
                priority={index === 0}
                sizes="560px"
                className="object-contain drop-shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={`${slide}-dot`}
            aria-label={`Render ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all ${
              current === index
                ? "w-9 bg-white"
                : "w-4 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {projects.map((project) => (
        <Link
          key={project.href}
          href={project.href}
          className="group overflow-hidden border border-white/10 bg-[#0b0b0b] transition duration-300 hover:-translate-y-1 hover:border-white/25"
        >
          <div className="relative aspect-[1.25] overflow-hidden bg-[#080808]">
            {"video" in project && project.video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="size-full object-contain"
              >
                <source src={asset(project.video)} type="video/mp4" />
              </video>
            ) : (
              <CardImageSlider
                images={project.media ?? []}
                title={project.title}
              />
            )}
          </div>
          <div className="p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="font-mono text-[11px] text-[#777]">
                {project.number}
              </span>
              <span
                className={`border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
                  project.status === "ON USE"
                    ? "border-[#00efa6]/40 text-[#00efa6]"
                    : "border-white/15 text-[#aaa]"
                }`}
              >
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#f5f5f5]">
              {project.title}
            </h3>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#777]">
              {project.category}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#9a9a9a]">
              {project.description}
            </p>
            <span className="mt-7 inline-block text-sm text-[#f5f5f5] transition group-hover:translate-x-1">
              {project.href === "/anvil3" ? "View project" : "Read case study"}{" "}
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function CardImageSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [current, setCurrent] = useState(0);
  const startX = useRef<number | null>(null);

  function finishDrag(x: number) {
    if (startX.current === null) return;
    const delta = x - startX.current;
    if (Math.abs(delta) > 40) {
      setCurrent(
        (index) =>
          (index + (delta < 0 ? 1 : -1) + images.length) % images.length,
      );
    }
    startX.current = null;
  }

  return (
    <div
      className="size-full cursor-grab"
      onMouseDown={(event) => {
        startX.current = event.clientX;
      }}
      onMouseUp={(event) => finishDrag(event.clientX)}
      onTouchStart={(event) => {
        startX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => finishDrag(event.changedTouches[0]?.clientX ?? 0)}
    >
      {images.map((image, index) => (
        <Image
          key={image}
          src={asset(image)}
          alt={`${title} image ${index + 1}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover transition duration-700 ${
            index === current ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export function ToolsStrip() {
  const repeated = [...tools, ...tools];

  return (
    <section
      aria-label="Tools and software"
      className="overflow-hidden border-y border-white/10 bg-[#090909] py-4"
    >
      <div className="flex w-max animate-[monty-marquee_38s_linear_infinite] gap-3 px-3">
        {repeated.map(([label, href], index) => (
          <Link
            key={`${label}-${index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center gap-3 border border-white/10 bg-white/[0.03] px-4 text-sm text-[#cfcfcf] transition hover:border-white/30 hover:text-white"
          >
            <span className="flex size-6 items-center justify-center border border-white/15 font-mono text-[9px]">
              {label.slice(0, 3).toUpperCase()}
            </span>
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
