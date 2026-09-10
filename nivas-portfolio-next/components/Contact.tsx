"use client";

import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { contact } from "@/lib/data";
import SectionReveal from "./SectionReveal";

function CopyCard({
  icon: Icon,
  value,
  copyValue,
}: {
  icon: typeof Mail;
  value: string;
  copyValue: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard not available — silently ignore
    }
  };

  return (
    <button
      onClick={handleCopy}
      title="Click to copy"
      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-bg-primary/50 p-[18px] transition-all hover:-translate-y-1 hover:border-accent-blue"
    >
      <Icon size={18} className="text-accent-blue" />
      <span className="break-words font-mono text-[12.5px] text-text-secondary">{copied ? "Copied!" : value}</span>
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section py-[120px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-9 text-center sm:p-16">
            <div className="absolute inset-0 bg-accent-gradient-soft opacity-50 blur-3xl" />
            <div className="relative z-[1]">
              <span className="mb-4 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-blue before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-gradient">
                Get In Touch
              </span>
              <h2 className="mx-auto max-w-[640px] font-display text-[clamp(28px,4vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em]">
                Let&apos;s Build Something
                <br />
                <span className="gradient-text">Amazing Together.</span>
              </h2>
              <p className="mx-auto mb-9 mt-4 max-w-[560px] text-base text-text-secondary">
                Open to internships, collaborations, and full-time opportunities in AI and full stack development.
              </p>

              <div className="mb-10 flex flex-wrap justify-center gap-3.5">
                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-[10px] bg-accent-gradient px-6 py-[13px] text-sm font-semibold transition-all hover:-translate-y-0.5"
                >
                  Email Me
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[10px] border border-border bg-white/[0.02] px-6 py-[13px] text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent-blue"
                >
                  View GitHub
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
                <CopyCard icon={Mail} value={contact.email} copyValue={contact.email} />
                <CopyCard icon={Phone} value={contact.phone} copyValue={contact.phone} />
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-bg-primary/50 p-[18px] transition-all hover:-translate-y-1 hover:border-accent-blue"
                >
                  <Github size={18} className="text-accent-blue" />
                  <span className="break-words font-mono text-[12.5px] text-text-secondary">github.com/Snivas1</span>
                </a>
                <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-bg-primary/50 p-[18px] opacity-50">
                  <Linkedin size={18} className="text-accent-blue" />
                  <span className="break-words font-mono text-[12.5px] text-text-secondary">LinkedIn — coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
