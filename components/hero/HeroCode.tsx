"use client";

import { motion } from "framer-motion";

export default function HeroCode() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full flex justify-center lg:justify-end perspective-[1000px]">
      <div className="relative w-full max-w-lg lg:rotate-y-[-10deg] lg:rotate-x-[5deg] transform-style-3d hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500 ease-out">
        {/* Floating Tag */}
        <div className="absolute -bottom-8 right-0 text-xs text-muted-foreground bg-card/60 border border-border px-4 py-2 rounded-md backdrop-blur-md hidden md:block">
          &lt;/&gt; Building the future, one line of code at a time.
        </div>

        {/* Code Window */}
        <div className="w-full rounded-2xl bg-[#111217] border border-border overflow-hidden shadow-2xl">
          <div className="px-4 py-3 border-b border-border/50 flex items-center gap-2 bg-[#1A1B23]/50">
            <div className="w-3 h-3 rounded-full bg-slate-600/50" />
            <div className="w-3 h-3 rounded-full bg-slate-600/50" />
            <div className="w-3 h-3 rounded-full bg-slate-600/50" />
          </div>

          <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-slate-300">
            <p>
              <span className="text-primary">const</span>{" "}
              <span className="text-blue-400">developer</span>{" "}
              <span className="text-primary">=</span> {"{"}
            </p>
            <p className="ml-4 mt-1">
              <span className="text-slate-400">name:</span>{" "}
              <span className="text-green-400">&quot;Aditya Thakur&quot;</span>,
            </p>
            <p className="ml-4">
              <span className="text-slate-400">role:</span>{" "}
              <span className="text-green-400">
                &quot;Full Stack Developer&quot;
              </span>
              ,
            </p>
            <p className="ml-4">
              <span className="text-slate-400">stack:</span> [
              <span className="text-green-400">&quot;Next.js&quot;</span>,{" "}
              <span className="text-green-400">&quot;Node.js&quot;</span>,{" "}
              <span className="text-green-400">&quot;TypeScript&quot;</span>,
            </p>
            <p className="ml-16">
              <span className="text-green-400">&quot;PostgreSQL&quot;</span>,{" "}
              <span className="text-green-400">&quot;AI&quot;</span>],
            </p>
            <p className="ml-4">
              <span className="text-slate-400">passion:</span>{" "}
              <span className="text-green-400">
                &quot;Building impactful products&quot;
              </span>
              ,
            </p>
            <p className="ml-4">
              <span className="text-slate-400">currently:</span>{" "}
              <span className="text-green-400">
                &quot;Building SmartSpend.ai&quot;
              </span>
            </p>
            <p>{"}"}</p>
            <p className="mt-4">
              <span className="text-blue-400">console</span>.
              <span className="text-yellow-200">log</span>(developer);
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
