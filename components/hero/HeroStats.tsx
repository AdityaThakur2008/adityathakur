"use client";

import { motion } from "framer-motion";
import { heroStats } from "@/data/hero";

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="mt-24 md:mt-32 w-full bg-card/40 backdrop-blur-md border border-border rounded-3xl p-6 md:p-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
        {heroStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.id} 
              className={`flex items-center gap-4 ${index !== 0 && index !== 2 ? 'pt-6 md:pt-0' : index === 2 ? 'pt-6 md:pt-0' : ''} md:px-6 first:pl-0 last:pr-0`}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={24} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground leading-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}