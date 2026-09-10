import { GraduationCap, Target, LayoutGrid, Rocket } from "lucide-react";
import SectionReveal from "./SectionReveal";

const cards = [
  { icon: GraduationCap, title: "Education", desc: "B.Tech, Computer Science (AI & ML)" },
  { icon: Target, title: "Focus", desc: "AI · Flutter · Full Stack" },
  { icon: LayoutGrid, title: "Approach", desc: "Problem-first, product-minded" },
  { icon: Rocket, title: "Currently", desc: "Shipping AI Career Mentor" },
];

export default function About() {
  return (
    <section id="about" className="section py-[120px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <SectionReveal>
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-blue before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-gradient">
              About
            </span>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15] tracking-[-0.02em]">
              A builder, first and always.
            </h2>
            <div className="mt-[22px] space-y-4 text-[16px] text-text-secondary">
              <p>
                Shanaboina Nivas is a <strong className="font-semibold text-white">Computer Science Engineering
                (Artificial Intelligence &amp; Machine Learning)</strong> student who enjoys building impactful
                applications across education, AI, machine learning, and productivity.
              </p>
              <p>
                He&apos;s driven by clean user experiences, scalable software architecture, and a habit of
                continuously learning modern technologies — turning coursework and curiosity into real, working
                products rather than just class projects.
              </p>
              <p>
                From Flutter apps that guide students through career decisions, to Python-based systems that learn
                from user behavior, every project starts with a real problem and ends with something people can
                actually use.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3.5">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[10px] border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent-violet"
                >
                  <c.icon size={20} className="mb-3 text-accent-blue" />
                  <h4 className="font-display text-[15px] font-semibold">{c.title}</h4>
                  <p className="mt-1 text-[13px] text-text-secondary">{c.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
