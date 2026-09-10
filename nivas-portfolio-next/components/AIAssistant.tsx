"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { assistantQA } from "@/lib/data";

type Message = { role: "bot" | "user"; text: string };

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const initialized = useRef(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [messages, typing]);

  const handleOpen = () => {
    setOpen((o) => !o);
    if (!initialized.current) {
      setMessages([
        { role: "bot", text: "Hi! I'm Nivas's portfolio assistant. Ask me anything about his projects, skills or background." },
      ]);
      initialized.current = true;
    }
  };

  const ask = (question: string) => {
    setMessages((m) => [...m, { role: "user", text: question }]);
    setTyping(true);
    setTimeout(() => {
      const found = assistantQA.find((qa) => qa.q === question);
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: found ? found.a : "I can help with questions about Nivas's projects, skills and background — try one of the suggestions below.",
        },
      ]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        aria-label="Open portfolio assistant"
        className="fixed bottom-6 right-6 z-[400] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-accent-gradient shadow-[0_10px_30px_-8px_rgba(139,92,246,0.6)] transition-transform hover:scale-105"
      >
        <Sparkles size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-[410] flex h-[480px] max-h-[70vh] w-[360px] max-w-[88vw] flex-col overflow-hidden rounded-[18px] border border-border bg-bg-secondary shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 0.8, 0.24, 1] }}
          >
            <div className="flex items-center gap-2.5 border-b border-border p-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <div>
                <strong className="font-display text-sm">Portfolio Assistant</strong>
                <br />
                <span className="font-mono text-[11px] text-text-tertiary">Ask about Nivas&apos;s work</span>
              </div>
            </div>

            <div ref={bodyRef} className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                    m.role === "bot"
                      ? "self-start rounded-bl-sm border border-border bg-card"
                      : "self-end rounded-br-sm bg-accent-gradient"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {typing && (
                <div className="flex gap-1 self-start rounded-xl rounded-bl-sm border border-border bg-card px-3.5 py-2.5">
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-text-tertiary" />
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-text-tertiary [animation-delay:0.2s]" />
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-text-tertiary [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 p-4 pt-0">
              {assistantQA.map((qa) => (
                <button
                  key={qa.q}
                  onClick={() => ask(qa.q)}
                  className="rounded-full border border-border px-3 py-[7px] font-mono text-[11.5px] text-text-secondary transition-colors hover:border-accent-blue hover:text-white"
                >
                  {qa.q}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
