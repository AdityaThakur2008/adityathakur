import SkillChip from "./SkillChip";

interface Skill {
  name: string;
  icon: React.ElementType;
  color?: string;
}

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: Skill[];
}

export default function SkillCategory({
  title,
  description,
  skills,
}: SkillCategoryProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200/70
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-brand/20
      hover:shadow-xl
      dark:border-slate-800
      dark:bg-slate-950
      ">
      {/* Heading */}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>

        <div className="mt-3 h-1 w-12 rounded-full bg-brand" />

        <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      {/* Skills */}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
