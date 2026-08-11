"use client";

import { motion } from "framer-motion";
import { projectsHeader, projectStats } from "@/data/projects";

export default function ProjectsHeader() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 w-full mb-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 max-w-lg"
      >
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-primary" />
          {projectsHeader.badge}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2]">
          {projectsHeader.heading} <br />
          {projectsHeader.highlight} <span className="text-primary">{projectsHeader.highlight2}</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-2">
          {projectsHeader.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-auto bg-card border border-border/60 rounded-3xl p-6 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 relative z-10 divide-x divide-border/0 sm:divide-border/50">
          {projectStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className={`flex flex-col items-center text-center ${index !== 0 ? 'sm:pl-10' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center mb-2">
                  <Icon size={24} className="text-primary" />
                </div>
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                <span className="text-[11px] text-muted-foreground mt-1">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}