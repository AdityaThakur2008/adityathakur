import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Education from "@/components/education/Education";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-white via-purple-50/40 to-blue-50/40 text-foreground dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true">
        <div className="absolute top-[-5%] left-[-5%] w-125 h-125 rounded-full bg-indigo-200/30 dark:bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-150 h-150 rounded-full bg-sky-200/30 dark:bg-sky-900/10 blur-[140px]" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 flex flex-col gap-10 md:gap-10 pb-10">
          <section id="home" className="scroll-mt-24">
            <Hero />
          </section>

          <section id="about" className="scroll-mt-24">
            <About />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="education" className="scroll-mt-24">
            <Education />
          </section>
        </main>
      </div>
    </div>
  );
}
