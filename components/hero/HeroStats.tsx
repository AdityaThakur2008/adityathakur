import React from "react";

import { heroStats } from "@/data/hero";

export default function HeroStats() {
  return (
    <div className="w-full bg-slate-50/60 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 backdrop-blur-sm">
      {heroStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div key={stat.title} className="flex items-center space-x-4 px-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {stat.title}
              </span>

              <span className="mt-0.5 text-xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
