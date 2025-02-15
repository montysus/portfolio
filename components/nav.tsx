"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";
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
    <nav className="fixed z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/" className="group relative text-xl font-semibold">
              <span className="relative z-10 uppercase">Monty.bio</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-2",
                  pathname === link.href
                    ? "font-medium text-primary"
                    : "text-muted-foreground transition-colors duration-300 hover:text-primary",
                )}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-1 h-0.5 origin-left bg-primary transition-transform duration-300",
                    pathname === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
            <div className="relative">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary transition-transform duration-200 hover:scale-110 focus:outline-none"
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
        <div className="space-y-1 bg-background/80 px-2 pb-3 pt-2 backdrop-blur-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-3 py-2 text-base transition-all duration-300",
                pathname === link.href
                  ? "translate-x-2 font-medium text-primary"
                  : "text-muted-foreground hover:translate-x-2 hover:text-primary",
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
