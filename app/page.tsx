import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-white via-purple-50/40 to-blue-50/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
     
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-125 h-125 rounded-full bg-indigo-200/30 dark:bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-150 h-150 rounded-full bg-sky-200/30 dark:bg-sky-900/10 blur-[140px]" />
      </div>

    
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
