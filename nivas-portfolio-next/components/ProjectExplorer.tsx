"use client";

import { useMemo, useState } from "react";
import { projects, filterCategories, Project } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionReveal from "./SectionReveal";

export default function ProjectExplorer() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.filters.includes(filter))),
    [filter]
  );

  return (
    <section id="projects" className="section py-[120px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionReveal className="mb-14 max-w-[640px]">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-blue before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-gradient">
            Selected Work
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15] tracking-[-0.02em]">
            Featured Projects
          </h2>
          <p className="mt-3.5 max-w-[560px] text-base text-text-secondary">
            Four products spanning AI, education and machine learning — each built to solve a real problem, not
            just to demo one.
          </p>
        </SectionReveal>

        <SectionReveal className="mb-11 flex flex-wrap gap-2.5">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-[18px] py-[9px] font-mono text-[13px] transition-all ${
                filter === cat
                  ? "border-transparent bg-accent-gradient text-white"
                  : "border-border bg-white/[0.02] text-text-secondary hover:border-accent-blue hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} onView={() => setActive(p)} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
