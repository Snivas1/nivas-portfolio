"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "@/lib/data";
import { useEffect } from "react";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[900] flex items-center justify-center bg-[rgba(2,4,12,0.75)] p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="relative max-h-[86vh] w-full max-w-[760px] overflow-y-auto rounded-[20px] border border-border bg-bg-secondary p-10"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 0.8, 0.24, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/[0.03] transition-colors hover:border-accent-pink"
            >
              <X size={16} />
            </button>

            <span className="mb-1.5 block font-mono text-xs text-accent-blue">{project.category}</span>
            <h3 className="font-display text-[28px] font-semibold">{project.title}</h3>

            <div className="mb-[26px] mt-6">
              <h4 className="mb-2.5 font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">Problem</h4>
              <p className="text-[14.5px] text-text-secondary">{project.problem}</p>
            </div>

            <div className="mb-[26px]">
              <h4 className="mb-2.5 font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">Solution</h4>
              <p className="text-[14.5px] text-text-secondary">{project.solution}</p>
            </div>

            <div className="mb-[26px]">
              <h4 className="mb-2.5 font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">Key Features</h4>
              <ul className="list-disc space-y-1.5 pl-[18px] text-[14.5px] text-text-secondary">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="mb-[26px]">
              <h4 className="mb-2.5 font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-text-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-[26px]">
              <h4 className="mb-2.5 font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">Architecture</h4>
              <div className="rounded-xl border border-dashed border-border bg-white/[0.015] p-6">
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {project.arch.map((n, i) => (
                    <span key={n} className="flex items-center gap-2.5">
                      <span className="whitespace-nowrap rounded-lg border border-border bg-card px-4 py-2.5 font-mono text-xs">
                        {n}
                      </span>
                      {i < project.arch.length - 1 && <span className="text-text-tertiary">→</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[10px] bg-accent-gradient px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                View on GitHub
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[10px] border border-border bg-white/[0.02] px-6 py-3 text-sm font-semibold"
                >
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  title="Demo link coming soon"
                  className="cursor-not-allowed rounded-[10px] border border-border bg-white/[0.02] px-6 py-3 text-sm font-semibold opacity-40"
                >
                  Live Demo — Coming Soon
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
