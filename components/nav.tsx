"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import ThemeToggle from "./theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
  ];

  return (
    <nav className="fixed z-50 w-full border-b border-[#222222] bg-[#0a0a0a]/75 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-12 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="MontyForge"
                width={32}
                height={32}
                className="size-7 drop-shadow-lg"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-[#f5f5f5]">
                  MontyForge
                </span>
                <span className="font-mono text-[10px] tracking-wider text-[#999999]">
                  by Antonio Montero
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-200",
                  pathname === link.href
                    ? "font-medium text-[#f5f5f5]"
                    : "text-[#999999] hover:text-[#f5f5f5]",
                )}
              >
                {link.label}
              </Link>
            ))}
            <button className="border border-[#333333] px-4 py-2 text-sm text-[#f5f5f5] transition-all hover:bg-[#f5f5f5] hover:text-[#0a0a0a]">
              Get in touch
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#f5f5f5] transition-transform duration-200 hover:scale-110 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "max-h-64" : "max-h-0",
        )}
      >
        <div className="space-y-1 border-t border-[#222222] bg-[#0a0a0a]/80 px-12 pb-3 pt-2 backdrop-blur-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-3 py-2 text-sm transition-all duration-300",
                pathname === link.href
                  ? "translate-x-2 font-medium text-[#f5f5f5]"
                  : "text-[#999999] hover:translate-x-2 hover:text-[#f5f5f5]",
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
