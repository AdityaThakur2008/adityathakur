import { Cpu } from "lucide-react";
import SkillCategory from "./SkillCategory";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-20 md:py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[350px] w-[350px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">

          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand shadow-xs dark:bg-slate-900 dark:border-slate-800">
            <Cpu className="h-4 w-4" />
            <span>My Tech Stack</span>
          </div>

          {/* Heading */}
          <h2 className=" flex flex-col mt-2 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Technologies I use to build modern{" "}
            <span className="text-brand block sm:inline">
              full-stack and AI-powered applications.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl mb-4 text-base md:text-lg text-slate-500 dark:text-slate-400">
            Building scalable full-stack applications with modern technologies.
          </p>

        </div>

        {/* Categories Grid - यहाँ सही Class लगा दी है */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              description={category.description}
              skills={category.skills}
            />
          ))}
        </div>

      </div>
    </section>
  );
}