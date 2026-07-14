"use client";

import { motion } from "framer-motion";
import { otherTools } from "@/data/skills";

export default function OtherTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="w-full mt-10 bg-card border border-border/60 rounded-2xl p-6 md:p-8 flex flex-col gap-6"
    >
      <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        <span className="w-2 h-2 rounded-full bg-primary" />
        OTHER TOOLS & TECHNOLOGIES
      </div>

      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        {otherTools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary hover:border-primary/30 transition-all cursor-default"
            >
              <Icon size={16} className={tool.color} />
              <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
            </div>
          );
        })}
        {/* + More Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/30 border border-border/50 text-sm font-medium text-muted-foreground">
          + More
        </div>
      </div>
    </motion.div>
  );
}