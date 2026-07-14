import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-white transition-colors duration-300">
      {/* Decorative Background Glows (Synced with Theme) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 dark:bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/20 dark:bg-primary/5 blur-[150px]" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 flex flex-col gap-10 md:gap-20 pb-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}