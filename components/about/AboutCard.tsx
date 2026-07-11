"use client"; // 👈 टॉप पर यह लगाना अब ज़रूरी है क्योंकि हम useState/useEffect यूज़ कर रहे हैं

import { useEffect, useState } from "react";
import { traits } from "@/data/about";

export default function AboutCard() {
  
  // मुख्य कार्ड के लिए:

// Traits लूप वाले कार्ड के लिए:hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700


  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 w-full">
      {/* Story Card */}
      <div className="lg:col-span-6 h-full rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm flex flex-col dark:border-slate-800 dark:bg-slate-950  dark:hover:border-slate-700"
>
        {" "}
        {/* 👈 Change dark:bg-black to dark:bg-zinc-950 or vice versa for consistency */}
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          My Journey
        </span>
        <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
          From Curiosity to Building Real Products 🚀
        </h3>
        <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600 dark:text-slate-300">
          <p>My journey into software development started with curiosity...</p>

          <p>
            I enjoy building full-stack applications and AI-powered products
            that solve real-world problems.
          </p>
        </div>
      </div>

      {/* Traits */}
      <div className="lg:col-span-6 grid gap-5">
        {traits.map((trait) => {
          const Icon = trait.icon;

          return (
            <div
              key={trait.title}
             className="group rounded-3xl border border-slate-200/70 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950  dark:hover:border-slate-700 dark:hover:shadow-lg">
              {" "}
              {/* 👈 FIXED: Changed dark:bg-slate-950 to dark:bg-zinc-950 to avoid conflicts */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-3xl bg-brand/10 dark:bg-slate-800">
                <Icon className="h-5 w-5 text-brand" />
              </div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                {trait.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {trait.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
