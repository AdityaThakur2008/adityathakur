import React from "react";
import { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { TechBadge } from "./TechBadge";
import { ProjectActions } from "./ProjectActions";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface FeaturedProjectCardProps {
  project: Project;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
}) => {
  const visibleTech = project.tech.slice(0, 6);
  const remainingTechCount = project.tech.length - visibleTech.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-3xl p-5 sm:p-8 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-zinc-300/80 transition-all duration-300 mb-8 dark:bg-slate-950 dark:border-slate-800 dark:hover:border-slate-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <ProjectImage
            image={project.image}
            title={project.title}
            featured={project.featured}
            status={project.status}
            year={project.year}
            aspectRatio="wide"
          />
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${project.status === "Completed" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200" : "bg-[#eef2ff] text-[#3730a3] dark:bg-slate-800 dark:text-slate-100"}`}>
                {project.status}
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                {project.year}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight group-hover:text-[#5f5cff] transition-colors dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-[#5f5cff]">
              {project.tagline}
            </p>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed pt-1 dark:text-slate-300">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {visibleTech.map((t, idx) => (
              <TechBadge key={idx} tech={t} />
            ))}
            {remainingTechCount > 0 && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-800">
                +{remainingTechCount}
              </span>
            )}
          </div>

          {project.features && project.features.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-100">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5f5cff] shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          )}

          <div className="pt-2">
            <ProjectActions github={project.github} live={project.live} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
