import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectActionsProps {
  github: string;
  live: string;
}

export function ProjectActions({ github, live }: ProjectActionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5f5cff] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4b4ad8]">
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </a>
      ) : (
        <span className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </span>
      )}

      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
          <FaGithub className="h-4 w-4" />
          GitHub
        </a>
      ) : (
        <span className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <FaGithub className="h-4 w-4" />
          GitHub
        </span>
      )}
    </div>
  );
}
