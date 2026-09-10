import { Github, Mail } from "lucide-react";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6">
        <div>
          <p className="text-sm text-text-secondary">Built with ❤️ by Shanaboina Nivas</p>
          <p className="mt-1 text-sm text-text-tertiary">Turning Ideas Into Real Products.</p>
        </div>
        <div className="flex gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            <Github size={16} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            <Mail size={16} />
          </a>
        </div>
        <a href="#hero" className="flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-white">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
