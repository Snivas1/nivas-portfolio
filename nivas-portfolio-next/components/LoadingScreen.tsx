"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 bg-bg-primary"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 0.8, 0.24, 1] }}
        >
          <div className="h-16 w-16">
            <svg viewBox="0 0 64 64" className="h-full w-full">
              <defs>
                <linearGradient id="loaderGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <motion.path
                d="M14 50 L14 14 L50 50 L50 14"
                fill="none"
                stroke="url(#loaderGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: [0.16, 0.8, 0.24, 1] }}
              />
            </svg>
          </div>
          <div className="font-mono text-xs tracking-[0.1em] text-text-secondary">LOADING PORTFOLIO…</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
