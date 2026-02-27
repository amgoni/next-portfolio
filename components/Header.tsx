"use client";

import { useState } from "react";
import Drawer from "@/components/ui/drawer";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "Contact Me", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className="relative">
      {/* Desktop Nav */}
      <nav className="hidden md:block" aria-label="Main navigation">
        <ul className="flex justify-center gap-0 w-1/2 mx-auto pt-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block px-3 py-2.5 font-bold transition-all duration-300 hover:bg-dark-text hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger */}
      <button
        className="md:hidden block cursor-pointer m-5 ml-auto w-6 h-6 relative bg-transparent border-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`absolute left-0 w-6 h-0.5 bg-dark-text transition-all duration-500 ${
            menuOpen ? "rotate-45 translate-y-1.5 translate-x-1.5" : "top-0"
          }`}
        />
        <span
          className={`absolute left-0 w-6 h-0.5 bg-dark-text transition-all duration-500 top-[7px] ${
            menuOpen ? "hidden" : ""
          }`}
        />
        <span
          className={`absolute left-0 w-6 h-0.5 bg-dark-text transition-all duration-500 ${
            menuOpen
              ? "-rotate-45 translate-y-1.5 -translate-x-1.5"
              : "top-[14px]"
          }`}
        />
      </button>

      {/* Mobile Drawer */}
      <Drawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} side="right">
        <nav className="p-6" aria-label="Mobile navigation">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block text-xl font-bold leading-relaxed hover:opacity-70 transition-opacity"
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
