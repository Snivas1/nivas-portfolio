import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectExplorer from "@/components/ProjectExplorer";
import Timeline from "@/components/Timeline";
import TechEvolution from "@/components/TechEvolution";
import CurrentFocus from "@/components/CurrentFocus";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectExplorer />
      <Timeline />
      <TechEvolution />
      <CurrentFocus />
      <Skills />
      <Contact />
    </main>
  );
}
