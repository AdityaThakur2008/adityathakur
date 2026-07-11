import { ArrowRight } from "lucide-react";

export default function GithubCTA() {
  return (
    <div className="mt-12 rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Want to see more?
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-white">
            Explore more projects on GitHub.
          </h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-[#5f5cff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4b4ad8]">
          View GitHub
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
