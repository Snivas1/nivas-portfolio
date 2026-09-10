"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/lib/data";
import SectionReveal from "./SectionReveal";

export default function Timeline() {
  return (
    <section id="timeline" className="section py-[120px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionReveal className="mb-14 max-w-[640px]">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-blue before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-gradient">
            Developer Journey
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15] tracking-[-0.02em]">
            From first line of C to shipping AI products.
          </h2>
        </SectionReveal>

        <div className="relative max-w-[640px] pl-0">
          <div className="absolute bottom-1.5 left-[19px] top-1.5 w-0.5 bg-gradient-to-b from-accent-blue via-accent-violet to-accent-pink opacity-35" />
          <div>
            {timelineData.map((item, i) => (
              <motion.div
                key={item.title}
                className="relative pb-[34px] pl-14 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <div className="absolute left-2.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent-blue bg-bg-primary">
                  <div className="h-2 w-2 rounded-full bg-accent-gradient" />
                </div>
                <div className="mb-1 font-mono text-xs text-accent-blue">{item.year}</div>
                <h4 className="font-display text-[17px] font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
