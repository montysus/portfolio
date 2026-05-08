import Image from "next/image";
import Link from "next/link";

import { asset } from "@/lib/montyforge";

export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]"
    >
      <div className="absolute left-[8%] top-[10%] size-72 rounded-full border border-white/[0.03]" />
      <div className="absolute right-[10%] top-[35%] size-96 rounded-full border border-white/[0.025]" />
      <div className="absolute bottom-[5%] left-[35%] size-80 rounded-full border border-white/[0.02]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_38%)]" />
    </div>
  );
}

export function MontyNav() {
  return (
    <nav className="bg-[#050505]/78 fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 md:px-8">
        <Link href="/#top" className="flex items-center gap-3">
          <span className="relative flex size-9 items-center justify-center border border-white/15 bg-white/[0.03]">
            <Image
              src={asset("montyforge-mark-white.png")}
              alt="MF"
              width={24}
              height={24}
            />
          </span>
          <span className="leading-tight">
            <b className="block text-sm font-semibold text-[#f5f5f5]">
              Montyforge
            </b>
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a8a8a]">
              by Antonio Montero
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-[#aaa] md:flex">
          <Link href="/#portfolio" className="transition hover:text-white">
            Portfolio
          </Link>
          <Link href="/#about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/#contact" className="transition hover:text-white">
            Contact
          </Link>
          <Link
            href="/#contact"
            className="border border-white/15 px-4 py-2 text-[#f5f5f5] transition hover:border-white/35 hover:bg-white hover:text-black"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function MontyFooter() {
  return (
    <footer className="mx-auto grid max-w-[1320px] gap-10 border-t border-white/10 px-5 py-14 text-sm text-[#888] md:grid-cols-[1.8fr_1fr_1fr_1fr] md:px-8">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-9 items-center justify-center border border-white/15">
            <Image
              src={asset("montyforge-mark-white.png")}
              alt="MF"
              width={24}
              height={24}
            />
          </span>
          <span>
            <b className="block text-[#f5f5f5]">Montyforge</b>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              by Antonio Montero
            </span>
          </span>
        </div>
        <p className="max-w-sm leading-relaxed">
          Autonomous systems engineering practice. Drones, robotics, control
          systems. Real problems, real solutions.
        </p>
      </div>
      <FooterLinks
        title="Work"
        links={[
          ["Portfolio", "/#portfolio"],
          ["Life Vest System", "/lifevest"],
        ]}
      />
      <FooterLinks
        title="About"
        links={[
          ["Antonio Montero", "/#about"],
          ["Get in touch", "/#contact"],
          ["Email direct", "mailto:contact@montyforge.com"],
        ]}
      />
      <FooterLinks
        title="Connect"
        links={[
          ["contact@montyforge.com", "mailto:contact@montyforge.com"],
          ["@montyforge", "https://instagram.com/montyforge"],
          ["LinkedIn", "https://linkedin.com/in/antonio-montero"],
        ]}
      />
      <div className="border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[#666] md:col-span-4 md:flex md:justify-between">
        <span>© 2026 Montyforge · Antonio Montero · Stavanger, Norway</span>
        <span>v1.0 · 05.2026</span>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: Array<[string, string]>;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h6 className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#555]">
        {title}
      </h6>
      {links.map(([label, href]) => (
        <Link
          key={`${title}-${label}`}
          href={href}
          className="transition hover:text-white"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#777]">
      <span className="size-1.5 animate-pulse bg-[#00efa6]" />
      {children}
    </div>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 pt-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#666]">
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-[#f5f5f5]">{value}</div>
    </div>
  );
}
