import React from "react";
import { quickFacts, interests } from "@/data/about";

export default function Highlights() {
  return (
    <div className="w-full space-y-10 pt-4">
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-brand tracking-wide">
          Quick Facts
        </h4>
        {/* Dynamic Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickFacts.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900">
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interests Row Block */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <span className="text-[13px] font-bold text-brand mr-2">
          I'm Interested In
        </span>
        {interests.map((interest) => {
          const Icon = interest.icon;

          return (
            <div
              key={interest.label}
              className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2 transition-all duration-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700">
              <Icon className={`h-4 w-4 ${interest.color}`} />

              <span className="text-sm font-medium text-slate-900 dark:text-slate-200">
                {interest.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
