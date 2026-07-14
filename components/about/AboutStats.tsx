"use client";

import { motion } from "framer-motion";
import { quickFacts, techStack } from "@/data/about";

export default function AboutStats() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full flex flex-col gap-8 bg-card border border-border rounded-3xl p-6 md:p-8"
    >
      {/* Quick Facts Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Quick Facts
        </div>
        
        {/* Exact Grid matching the image with internal borders */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-border/50 rounded-2xl overflow-hidden border border-border/50">
          {quickFacts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.id} className="flex flex-col items-center justify-center p-6 bg-card hover:bg-secondary/50 transition-colors gap-2 text-center">
                <Icon size={24} className="text-primary mb-1" />
                <span className="text-xl font-bold text-foreground">{fact.value}</span>
                <span className="text-xs text-muted-foreground">{fact.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Tech Stack
        </div>

        <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.id}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-secondary/30 hover:bg-secondary border border-transparent hover:border-border/50 transition-all gap-3 group"
              >
                <Icon size={28} className="text-foreground group-hover:text-primary transition-colors" />
                <span className="text-[10px] md:text-xs text-muted-foreground font-medium">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}