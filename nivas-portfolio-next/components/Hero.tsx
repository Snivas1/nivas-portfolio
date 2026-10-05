"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";
import CursorSpotlight from "./CursorSpotlight";

const floatPositions = [
  { top: "18%", left: "8%" },
  { top: "65%", left: "6%" },
  { top: "22%", left: "90%" },
  { top: "70%", left: "88%" },
  { top: "45%", left: "94%" },
];

function TechGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#heroGrad)"
      strokeWidth="1.8"
      className="h-[22px] w-[22px]"
    >
      <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* SVG Gradient */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Effects */}
      <ParticleField />

      <div className="aurora absolute -inset-[20%] z-0 animate-aurora" />

      <div className="grid-overlay absolute inset-0 z-0" />

      {/* Floating Technology Elements */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {floatPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-border/60 bg-card/70 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] backdrop-blur-sm"
            style={{
              top: pos.top,
              left: pos.left,
            }}
            animate={{
              y: [0, -16, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            <TechGlyph />
          </motion.div>
        ))}
      </div>

      {/* Cursor Spotlight */}
      <CursorSpotlight />

      {/* Hero Content */}
      <div className="relative z-[3] mx-auto w-full max-w-[1180px] px-6">
        {/* Badges */}
        <motion.div
          className="mb-[22px] flex flex-wrap gap-2.5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="rounded-full border border-border bg-white/[0.02] px-3.5 py-1.5 font-mono text-xs text-text-secondary">
            B.Tech CSE — AI &amp; ML
          </span>

          <span className="rounded-full border border-border bg-white/[0.02] px-3.5 py-1.5 font-mono text-xs text-text-secondary">
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-display text-[clamp(38px,6.4vw,74px)] font-bold leading-[1.02] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Shanaboina <span className="gradient-text">Nivas</span>
        </motion.h1>

        {/* Professional Title */}
        <motion.p
          className="mt-[18px] font-display text-[clamp(20px,2.6vw,30px)] font-medium leading-[1.3] text-text-secondary"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          AI &amp; ML Developer{" "}
          <span className="text-accent-blue">|</span>{" "}
          Full Stack Developer
        </motion.p>

        {/* Introduction */}
        <motion.p
          className="mt-6 max-w-[650px] text-[17px] leading-7 text-text-secondary"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Computer Science Engineering student specializing in AI &amp; ML,
          with hands-on experience building AI applications, full-stack
          platforms, and data-driven solutions using Python, Flutter, and
          modern web technologies.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="mt-[38px] flex flex-wrap gap-3.5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Explore Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-[10px] bg-accent-gradient px-6 py-[13px] text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(139,92,246,0.55)]"
          >
            Explore Projects
            <ArrowRight size={16} />
          </a>

          {/* Download Resume */}
          <a
            href="/NIVAS-RESUME.pdf"
            download="NIVAS-Nivas-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-[10px] border border-border bg-white/[0.02] px-6 py-[13px] text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent-blue hover:bg-accent-blue/10"
          >
            Download Resume
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-[13px] text-sm font-semibold text-text-secondary transition-colors hover:text-white"
          >
            Contact Me →
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-9 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-text-tertiary">
        <span>SCROLL</span>

        <motion.div
          className="h-8 w-px bg-gradient-to-b from-text-tertiary to-transparent"
          animate={{
            scaleY: [0, 1, 1],
            opacity: [0, 1, 0],
          }}
          style={{
            transformOrigin: "top",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}