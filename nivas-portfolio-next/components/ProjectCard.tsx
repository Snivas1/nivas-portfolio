"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
  onView,
}: {
  project: Project;
  index: number;
  onView: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    const rx = ((y / r.height) - 0.5) * -6;
    const ry = ((x / r.width) - 0.5) * 6;
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(700px) rotateX(0) rotateY(0)";
  };

  return (
    <motion.div
      ref={cardRef}
      className="card-border-glow group relative overflow-hidden rounded-card border border-border bg-card p-7 transition-transform"
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
    >
      <div
        className="pointer-events-none absolute h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        style={{
          left: "var(--mx, 50%)",
          top: "var(--my, 50%)",
          background: "radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)",
        }}
      />

      <div className="relative mb-[18px] flex items-start justify-between">
        <span className="font-mono text-xs text-text-tertiary">0{index + 1}</span>
        <span className="rounded-full border border-accent-blue/30 bg-accent-blue/[0.06] px-2.5 py-1 font-mono text-[11px] text-accent-blue">
          {project.category}
        </span>
      </div>

      <h3 className="relative font-display text-[22px] font-semibold">{project.title}</h3>
      <p className="relative mb-5 mt-2.5 text-[14.5px] text-text-secondary">{project.desc}</p>

      <div className="relative mb-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-text-secondary">
            {t}
          </span>
        ))}
      </div>

      <div className="relative flex flex-wrap items-center gap-2.5">
        <button
          onClick={onView}
          className="rounded-[10px] border border-border bg-white/[0.02] px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent-blue hover:bg-accent-blue/10"
        >
          View Case Study
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-accent-blue"
        >
          <Github size={14} />
          GitHub
        </a>
      </div>
    </motion.div>
  );
}
