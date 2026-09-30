"use client";

import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { contact } from "@/lib/data";
import SectionReveal from "./SectionReveal";

function CopyCard({
  icon: Icon,
  label,
  copyValue,
}: {
  icon: typeof Mail;
  label: string;
  copyValue: string;
}) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue);
    } catch {
      // Clipboard not available — silently ignore
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      title={`Copy ${label}`}
      aria-label={`Copy ${label}`}
      className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-bg-primary/50 p-[18px] transition-all hover:-translate-y-1 hover:border-accent-blue"
    >
      <Icon size={24} className="text-accent-blue" />

      <span className="font-mono text-[12.5px] text-text-secondary">
        {label}
      </span>
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
              {/* Section Label */}
              <span className="mb-4 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-blue before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-gradient">
                Get In Touch
              </span>

              {/* Heading */}
              <h2 className="mx-auto max-w-[640px] font-display text-[clamp(28px,4vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em]">
                Let&apos;s Build Something
                <br />
                <span className="gradient-text">Amazing Together.</span>
              </h2>

              {/* Description */}
              <p className="mx-auto mb-9 mt-4 max-w-[560px] text-base text-text-secondary">
                Open to internships, collaborations, and full-time opportunities in AI and full stack development.
              </p>

              {/* Main Buttons */}
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

              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
                {/* Email */}
                <CopyCard
                  icon={Mail}
                  label="Email"
                  copyValue={contact.email}
                />

                {/* Phone */}
                <CopyCard
                  icon={Phone}
                  label="Phone"
                  copyValue={contact.phone}
                />

                {/* GitHub */}
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-bg-primary/50 p-[18px] transition-all hover:-translate-y-1 hover:border-accent-blue"
                >
                  <Github size={24} className="text-accent-blue" />

                  <span className="font-mono text-[12.5px] text-text-secondary">
                    GitHub
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/shanaboina-nivas-62ba29325"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-bg-primary/50 p-[18px] transition-all hover:-translate-y-1 hover:border-accent-blue"
                >
                  <Linkedin size={24} className="text-accent-blue" />

                  <span className="font-mono text-[12.5px] text-text-secondary">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
