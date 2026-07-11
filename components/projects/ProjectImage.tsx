import { ProjectImage as ProjectImageType } from "@/data/projects";

interface ProjectImageProps {
  image: ProjectImageType;
  title: string;
  featured: boolean;
  status: string;
  year: string;
  aspectRatio?: "wide" | "square";
}

export function ProjectImage({
  image,
  title,
  featured,
  status,
  year,
  aspectRatio = "wide",
}: ProjectImageProps) {
  const imageSrc = aspectRatio === "square" ? image.mobile : image.desktop;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-slate-950/5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="absolute inset-x-0 top-0 z-10 flex flex-wrap items-center justify-between gap-3 p-4">
        {featured && (
          <span className="rounded-full bg-[#5f5cff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
            Featured
          </span>
        )}
        <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-700 dark:bg-slate-800 dark:text-slate-100">
          {status}
        </span>
      </div>

      <div
        className={`overflow-hidden ${aspectRatio === "square" ? "aspect-[1/1]" : "aspect-[16/10]"} w-full`}>
        <img
          src={imageSrc}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition duration-500 ease-out hover:scale-[1.02]"
        />
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        <span>{year}</span>
        <span>
          {aspectRatio === "square" ? "Mobile preview" : "Project mockup"}
        </span>
      </div>
    </div>
  );
}
