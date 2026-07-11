import { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { TechBadge } from "./TechBadge";
import { ProjectActions } from "./ProjectActions";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950 dark:border-slate-800">
      <div className="p-5 sm:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${project.status === "Completed" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200" : "bg-[#eef2ff] text-[#3730a3] dark:bg-slate-800 dark:text-slate-100"}`}>
            {project.status}
          </span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
            {project.year}
          </span>
        </div>

        <ProjectImage
          image={project.image}
          title={project.title}
          featured={project.featured}
          status={project.status}
          year={project.year}
          aspectRatio="square"
        />

        <div className="mt-5 flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, idx) => (
              <TechBadge key={idx} tech={tech} />
            ))}
          </div>

          <ProjectActions github={project.github} live={project.live} />
        </div>
      </div>
    </div>
  );
}
