"use client";
import { projectCategories } from "@/data/projects";
import { useState } from "react";

export default function ProjectFilterTabs({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}) {
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  return (
    <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
      {projectCategories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          onMouseEnter={() => setHoveredFilter(category)}
          onMouseLeave={() => setHoveredFilter(null)}
          className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 ${
            activeFilter === category
              ? "border-transparent bg-[#5f5cff] text-white shadow-sm"
              : hoveredFilter === category
                ? "border-slate-300 bg-slate-100 text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          }`}>
          {category}
        </button>
      ))}
    </div>
  );
}
