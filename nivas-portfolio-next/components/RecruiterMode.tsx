"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, X } from "lucide-react";
import { contact, projects, skillsData } from "@/lib/data";

export default function RecruiterMode() {
  const [open, setOpen] = useState(false);

  const requestResume = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${contact.email}?subject=Resume%20Request&body=Hi%20Nivas%2C%20could%20you%20share%20your%20latest%20resume%3F`;
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-[400] flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3.5 font-mono text-[12.5px] font-medium shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-all hover:-translate-y-0.5 hover:border-accent-violet"
      >
        <Briefcase size={16} className="text-accent-violet" />
        <span className="hidden sm:inline">Recruiter Mode</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[840] bg-[rgba(2,4,12,0.6)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[850] h-full w-[400px] max-w-[92vw] overflow-y-auto border-l border-border bg-bg-secondary p-8"
              initial={{ x: 420 }}
              animate={{ x: 0 }}
              exit={{ x: 420 }}
              transition={{ duration: 0.45, ease: [0.16, 0.8, 0.24, 1] }}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-lg border border-border"
              >
                <X size={16} />
              </button>

              <h3 className="font-display text-[22px] font-semibold">Recruiter Snapshot</h3>
              <p className="mb-7 mt-1 text-[13px] text-text-secondary">Everything you need in one scroll.</p>

              <div className="mb-6">
                <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent-blue">Summary</h4>
                <p className="text-[13.5px] text-text-secondary">
                  CS (AI &amp; ML) student building AI, education and productivity products with Flutter, Python and
                  full stack tools. Focused on shipping working software, not just prototypes.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent-blue">Education</h4>
                <p className="text-[13.5px] text-text-secondary">
                  B.Tech, Computer Science Engineering — Artificial Intelligence &amp; Machine Learning.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent-blue">Projects</h4>
                <ul className="list-disc space-y-1.5 pl-4 text-[13.5px] text-text-secondary">
                  {projects.map((p) => (
                    <li key={p.slug}>
                      {p.title} — {p.category}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent-blue">Skills</h4>
                <p className="text-[13.5px] text-text-secondary">
                  {Object.values(skillsData).flat().join(", ")}.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent-blue">Contact</h4>
                <p className="text-[13.5px] text-text-secondary">
                  {contact.email}
                  <br />
                  {contact.phone}
                  <br />
                  {contact.github.replace("https://", "")}
                </p>
              </div>

              <a
                href="#"
                onClick={requestResume}
                className="mt-2 flex w-full items-center justify-center rounded-[10px] bg-accent-gradient px-6 py-3 text-sm font-semibold"
              >
                Download Full Resume
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
