import { currentFocus } from "@/lib/data";
import SectionReveal from "./SectionReveal";

export default function CurrentFocus() {
  return (
    <section id="focus" className="section py-[120px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionReveal className="mb-14 max-w-[640px]">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-blue before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-gradient">
            Right Now
          </span>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15] tracking-[-0.02em]">
            Currently Working On
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {currentFocus.map((f) => (
            <SectionReveal key={f}>
              <div className="rounded-[10px] border border-border bg-card p-[22px_18px] text-left transition-all hover:-translate-y-1 hover:border-accent-blue">
                <div className="mb-3.5 h-2.5 w-2.5 rounded-full bg-accent-gradient" />
                <p className="text-[13.5px] font-medium">{f}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
