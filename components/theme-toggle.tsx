"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-full p-2 transition-colors duration-200 hover:bg-muted"
      aria-label="Toggle theme"
    >
      <div className="relative size-5">
        <Sun
          size={20}
          className="absolute inset-0 rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0"
        />
        <Moon
          size={20}
          className="absolute inset-0 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100"
        />
      </div>
    </button>
  );
}
