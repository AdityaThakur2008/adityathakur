import React from "react";
import { Tech } from "@/data/projects";

interface TechBadgeProps {
  tech: Tech;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const Icon = tech.icon;

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium transition-transform duration-200 hover:scale-105 bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200 ${tech.color}`}>
      {Icon && (
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-slate-800">
          <Icon className="w-3.5 h-3.5" />
        </span>
      )}
      <span className="truncate">{tech.name}</span>
    </span>
  );
};
