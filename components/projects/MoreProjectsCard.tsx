import { Plus } from "lucide-react";

export default function MoreProjectsCard() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-6 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center transition hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-slate-600 dark:hover:bg-slate-900">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#5f5cff] shadow-sm dark:bg-slate-800">
        <Plus className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Always Building
        </p>
        <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white">
          More exciting projects are on the way.
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Stay tuned for the next additions to my portfolio.
        </p>
      </div>
    </div>
  );
}
