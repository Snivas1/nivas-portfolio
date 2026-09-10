import { skillsData } from "@/lib/data";
import SectionReveal from "./SectionReveal";

export default function Skills() {
  return (
    <section id="skills" className="section bg-bg-secondary py-[120px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionReveal className="mb-14 max-w-[640px]">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-blue before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-gradient">
            Toolbox
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15] tracking-[-0.02em]">
            Skills &amp; Technologies
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
          {Object.entries(skillsData).map(([group, items]) => (
            <SectionReveal key={group}>
              <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-text-tertiary">{group}</h4>
              <div className="flex flex-wrap gap-2.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-card px-4 py-[9px] font-mono text-[13px] transition-all hover:-translate-y-0.5 hover:border-accent-violet hover:bg-card-hover"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
