"use client";

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import Drawer from "@/components/ui/drawer";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <header
      id="header"
      className="border-dark-text fixed top-0 z-50 w-full border-b bg-white shadow-sm dark:border-neutral-800 dark:bg-black"
    >
      {/* Desktop Nav */}
      <nav className="hidden md:block" aria-label="Main navigation">
        <ul className="mx-auto flex w-3/5 items-center justify-center gap-8 py-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-montserrat hover:bg-dark-text block px-4 py-2 font-semibold transition-all duration-300 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-800"
            >
              {resolvedTheme === "dark" ? (
                <FiSun className="text-xl" />
              ) : (
                <FiMoon className="text-xl" />
              )}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Top Bar */}
      <div className="flex items-center justify-between px-5 py-3 md:hidden">
        {/* Gradient Name */}
        <a
          href="#hero"
          className="to-dark-text font-montserrat dark:to-silver bg-linear-to-br from-[#3a7bd5] bg-clip-text text-lg font-bold text-transparent dark:from-white"
        >
          Amin Goni
        </a>

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-800"
          >
            {resolvedTheme === "dark" ? (
              <FiSun className="text-xl" />
            ) : (
              <FiMoon className="text-xl" />
            )}
          </button>

          {/* Hamburger */}
          <button
            className="cursor-pointer border-none bg-transparent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <HiMenuAlt3 className="text-dark-text text-2xl dark:text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        side="right"
        width="80%"
      >
        <nav className="p-6" aria-label="Mobile navigation">
          <ul className="space-y-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="font-montserrat block text-xl leading-relaxed font-bold transition-all active:scale-90"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </header>
  );
}
