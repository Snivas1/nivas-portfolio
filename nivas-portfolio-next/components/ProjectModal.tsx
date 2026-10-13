
"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers3,
  Lightbulb,
  Wrench,
  Code2,
} from "lucide-react";
import { Project } from "@/lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[900] flex items-center justify-center bg-[rgba(2,4,12,0.82)] p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative max-h-[90vh] w-full max-w-[780px] overflow-y-auto rounded-[20px] border border-border bg-bg-secondary p-5 shadow-2xl sm:p-8 md:p-10"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 0.8, 0.24, 1],
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/[0.03] transition-colors hover:border-accent-pink hover:text-white sm:right-5 sm:top-5"
            >
              <X size={16} />
            </button>

            {/* Project Header */}
            <div className="mb-8 pr-10">
              <span className="mb-3 inline-flex rounded-full border border-accent-blue/30 bg-accent-blue/[0.06] px-3 py-1 font-mono text-[11px] text-accent-blue">
                {project.category}
              </span>

              <h3
                id="project-modal-title"
                className="font-display text-[26px] font-semibold leading-tight tracking-[-0.02em] sm:text-[32px]"
              >
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {project.desc}
              </p>
            </div>

            {/* Problem */}
            <section className="mb-7">
              <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
                <Lightbulb size={15} className="text-accent-blue" />
                Problem
              </h4>

              <p className="text-sm leading-7 text-text-secondary">
                {project.problem}
              </p>
            </section>

            {/* Solution */}
            <section className="mb-7">
              <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
                <CheckCircle2 size={15} className="text-accent-blue" />
                Solution
              </h4>

              <p className="text-sm leading-7 text-text-secondary">
                {project.solution}
              </p>
            </section>

            {/* Features */}
            <section className="mb-7">
              <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
                <Layers3 size={15} className="text-accent-blue" />
                Key Features
              </h4>

              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-xl border border-border bg-white/[0.015] p-3 text-sm leading-6 text-text-secondary"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-1 shrink-0 text-accent-blue"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech Stack */}
            <section className="mb-7">
              <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
                <Code2 size={15} className="text-accent-blue" />
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-text-secondary transition-colors hover:border-accent-blue/40 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Architecture */}
            <section className="mb-8">
              <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-text-tertiary">
                <Wrench size={15} className="text-accent-blue" />
                Architecture Overview
              </h4>

              <div className="rounded-xl border border-dashed border-border bg-white/[0.015] p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {project.arch.map((item, index) => (
                    <span
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <span className="rounded-lg border border-border bg-card px-3 py-2.5 text-center font-mono text-xs text-text-secondary">
                        {item}
                      </span>

                      {index < project.arch.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="text-accent-blue"
                        >
                          →
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 border-t border-border pt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-accent-gradient px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
              >
                <Github size={16} />
                View on GitHub
                <ExternalLink size={13} />
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-border bg-white/[0.02] px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent-blue"
                >
                  Live Demo
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
