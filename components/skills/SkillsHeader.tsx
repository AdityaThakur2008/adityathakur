"use client";

import { motion } from "framer-motion";
import { skillsHeader, skillStats } from "@/data/skills";

export default function SkillsHeader() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 w-full mb-12">
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 max-w-lg"
      >
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-primary" />
          {skillsHeader.badge}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2]">
          {skillsHeader.heading} <br />
          <span className="text-primary">{skillsHeader.highlight}</span> {skillsHeader.headingEnd}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-2">
          {skillsHeader.description}
        </p>
      </motion.div>

      {/* Right Stats Box */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-auto bg-card border border-border/60 rounded-3xl p-6 relative overflow-hidden"
      >
        {/* Subtle purple glow inside the box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 relative z-10 divide-x divide-border/0 sm:divide-border/50">
          {skillStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className={`flex flex-col items-center text-center ${index !== 0 ? 'sm:pl-10' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-card border border-border/80 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="text-xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}