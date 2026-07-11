import { FaProjectDiagram } from "react-icons/fa";

export default function ProjectsHeader() {
  return (
    <section>
      <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand shadow-xs dark:bg-slate-900 dark:border-slate-800">
          <FaProjectDiagram />
          <span>My Work</span>
        </div>

        {/* Heading */}
        <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Selected Projects.
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-xl mb-4 text-base md:text-lg text-slate-500 dark:text-slate-400">
          Some of my favorite projects built with modern technologies to solve
          real-world problems.
        </p>
      </div>
    </section>
  );
}
