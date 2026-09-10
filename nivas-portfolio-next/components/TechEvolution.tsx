"use client";

import { motion } from "framer-motion";
import { evolutionData } from "@/lib/data";
import SectionReveal from "./SectionReveal";

export default function TechEvolution() {
  return (
    <section id="evolution" className="section bg-bg-secondary py-[120px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionReveal className="mb-14 max-w-[640px]">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-blue before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-gradient">
            Technology Evolution
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15] tracking-[-0.02em]">
            The stack, in the order it was learned.
          </h2>
        </SectionReveal>

        <div className="flex items-center gap-0 overflow-x-auto py-5 pb-8">
          {evolutionData.map((label, i) => (
            <div key={label} className="flex items-center">
              <motion.div
                className="flex min-w-[100px] flex-col items-center gap-2.5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card font-mono text-xs font-semibold transition-all hover:border-accent-violet hover:shadow-[0_0_22px_-4px_rgba(139,92,246,0.5)]">
                  {label}
                </div>
                <div className="text-center text-xs text-text-secondary">{label}</div>
              </motion.div>
              {i < evolutionData.length - 1 && (
                <div className="relative top-[-27px] h-0.5 w-11 flex-none bg-border">
                  <motion.div
                    className="h-full bg-accent-gradient"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, delay: i * 0.06 + 0.2 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
