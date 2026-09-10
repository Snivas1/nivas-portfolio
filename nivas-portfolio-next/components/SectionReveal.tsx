"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionReveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 0.8, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
