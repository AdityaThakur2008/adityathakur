"use client";

import { ChevronDown } from "lucide-react";
import { projectCategories } from "@/data/projects";

interface ProjectsFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  sortOrder: "latest" | "oldest";
  setSortOrder: (order: "latest" | "oldest") => void;
}

export default function ProjectsFilter({
  activeCategory,
  setActiveCategory,
  sortOrder,
  setSortOrder,
}: ProjectsFilterProps) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
        {projectCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)} // State update on click
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary/20 text-primary border border-primary/30"
                : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <button
        onClick={() => setSortOrder(sortOrder === "latest" ? "oldest" : "latest")} 
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-card text-sm font-medium text-foreground hover:bg-secondary transition-colors shrink-0"
      >
        {sortOrder === "latest" ? "Latest First" : "Oldest First"} 
        <ChevronDown 
          size={16} 
          className={`text-muted-foreground transition-transform duration-300 ${sortOrder === "oldest" ? "rotate-180" : ""}`} 
        />
      </button>
    </div>
  );
}