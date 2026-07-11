interface Skill {
  name: string;
  icon: React.ElementType;
  color?: string;
}

interface SkillChipProps {
  skill: Skill;
}

export default function SkillChip({ skill }: SkillChipProps) {
  const Icon = skill.icon;

  return (
    <div
      className="
      group
      flex
      items-center
      gap-3
      rounded-xl
      border
      bg-slate-50
      px-4
      py-3
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:border-brand/30
      hover:bg-brand/5
      hover:shadow-md
      cursor-pointer
      dark:border-slate-800
      dark:bg-slate-950
      ">
      <span className="flex items-center justify-center w-8 h-8 rounded-md bg-white/90 dark:bg-slate-800">
        <Icon
          className={`h-5 w-5 ${skill.color ?? "text-slate-700 dark:text-slate-200"} transition-colors group-hover:text-brand`}
        />
      </span>

      <span className="text-sm font-medium ml-3 text-slate-700 dark:text-slate-200">
        {skill.name}
      </span>
    </div>
  );
}
