"use client";

import type { ComponentType } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectTag {
  name: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  logoIcon: string | ComponentType<{ size?: number; className?: string }>;
  logoBg: string;
  categories?: string[];
  tags: ProjectTag[];
  links: { demo?: string; github: string };
}

interface SmallCardProps {
  project: Project;
}

export default function SmallCard({ project }: SmallCardProps) {
  const isIcon = typeof project.logoIcon !== "string";
  const LogoComponent = !isIcon
    ? null
    : (project.logoIcon as ComponentType<{
        size?: number;
        className?: string;
      }>);

  return (
    <div className="group flex flex-col bg-card border border-border/60 hover:border-primary/40 rounded-3xl p-6 transition-all duration-300">
      <div className="flex items-start justify-between mb-5">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg ${project.logoBg}`}>
          {isIcon && LogoComponent ? (
            <LogoComponent size={24} />
          ) : (
            (project.logoIcon as string)
          )}
        </div>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <ExternalLink size={18} />
        </button>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag: ProjectTag, i: number) => {
          const Icon = tag.icon;
          return (
            <span
              key={i}
              className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary/30 border border-border/40 text-[10px] font-medium text-muted-foreground">
              <Icon size={12} className={tag.color} /> {tag.name}
            </span>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
        <a
          href={project.links.demo ? project.links.demo : project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-primary text-sm font-medium hover:text-primary/80 transition-colors">
          {project.links.demo ? "Live Demo" : "View Project"}{" "}
          <ArrowUpRight size={14} />
        </a>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground text-sm font-medium hover:text-foreground transition-colors">
          GitHub <FaGithub size={14} />
        </a>
      </div>
    </div>
  );
}
