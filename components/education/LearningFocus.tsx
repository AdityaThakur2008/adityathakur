import { TechItem } from "@/data/education";
import { Rocket, Sparkles } from "lucide-react";
import { FaJava, FaReact, FaDocker, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";

interface LearningFocusProps {
  techStack: TechItem[];
}

const getTechIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    java: <FaJava className="text-blue-500" />,
    react: <FaReact className="text-cyan-400" />,
    nextjs: <SiNextdotjs className="text-black dark:text-white" />,
    nodejs: <SiNodedotjs className="text-green-500" />,
    typescript: <SiTypescript className="text-blue-600" />,
    mongodb: <SiMongodb className="text-green-600" />,
    docker: <FaDocker className="text-blue-500" />,
    postgresql: <SiPostgresql className="text-blue-400" />,
    git: <FaGithub className="text-slate-800 dark:text-white" />,
    aiml: <Sparkles className="text-purple-500" size={16} />,
  };
  return icons[iconName] || <Sparkles size={16} />;
};

export default function LearningFocus({ techStack }: LearningFocusProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Rocket size={18} className="text-purple-600 dark:text-purple-400" />
        <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
          Learning Focus & Interests
        </h4>
      </div>

      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm text-slate-700 dark:text-slate-300 shadow-sm"
          >
            {getTechIcon(tech.icon)}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}