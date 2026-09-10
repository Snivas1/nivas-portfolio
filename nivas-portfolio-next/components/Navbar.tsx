"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#timeline", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const requestResume = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${contact.email}?subject=Resume%20Request&body=Hi%20Nivas%2C%20could%20you%20share%20your%20latest%20resume%3F`;
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[500] transition-all duration-400 ${
        scrolled
          ? "border-b border-border/60 bg-bg-primary/75 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-[18px]"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6">
        <a href="#hero" className="flex items-center gap-2.5 font-display text-lg font-semibold">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-accent-gradient font-display text-sm font-bold">
            N
          </span>
          Nivas
        </a>

        <nav
          className={`fixed left-4 right-4 top-16 flex flex-col items-start gap-[18px] rounded-2xl border border-border bg-bg-secondary p-5 transition-all duration-300 md:static md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 ${
            open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={requestResume}
            className="hidden rounded-[10px] border border-border bg-white/[0.02] px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent-blue hover:bg-accent-blue/10 sm:inline-flex"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hidden rounded-[10px] bg-accent-gradient px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(139,92,246,0.55)] sm:inline-flex"
          >
            Contact Me
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-border md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
