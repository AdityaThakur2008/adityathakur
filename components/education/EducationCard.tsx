"use client";

import { GraduationCap, Landmark, Target, Terminal, Bot, Network, ShieldCheck, Cloud } from "lucide-react";
import { EducationData } from "@/data/education";
import CourseList from "./CourseList";
import LearningFocus from "./LearningFocus";
import { motion } from "framer-motion";

interface EducationCardProps {
  data: EducationData;
}

const getFocusIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    code: <Terminal size={18} className="text-brand dark:text-brand" />,
    ai: <Bot size={18} className="text-brand dark:text-brand" />,
    dsa: <Network size={18} className="text-brand dark:text-brand" />,
    system: <ShieldCheck size={18} className="text-brand dark:text-brand" />,
    cloud: <Cloud size={18} className="text-brand dark:text-brand" />,
  };
  return icons[iconName] || <Target size={18} />;
};

export default function EducationCard({ data }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-6xl mx-auto border border-slate-200 dark:border-slate-800/60 rounded-3xl p-6 md:p-8 lg:p-10 bg-white/40 dark:bg-[#0B0F19]/80 backdrop-blur-sm shadow-xl dark:shadow-none mt-5"
    >
      <div className="flex gap-6 md:gap-10">
        {/* Left Side: Timeline Track (Hidden on small screens) */}
        <div className="hidden md:flex flex-col items-center shrink-0 w-12 mt-1">
          {/* Top Graduation Icon */}
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-950 border-2 border-purple-200 dark:border-purple-800 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(147,51,234,0.15)] dark:shadow-[0_0_20px_rgba(147,51,234,0.3)]">
            <GraduationCap size={24} className="text-brand dark:text-purple-300" />
          </div>
          
          {/* Vertical Line */}
          <div className="w-0.5 flex-1 bg-gradient-to-b from-purple-300 to-purple-100 dark:from-purple-800 dark:to-transparent my-2"></div>
          
          {/* Bottom Dot */}
          <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] z-10 mb-[22%]"></div>
        </div>

        {/* Right Side: Main Content */}
        <div className="flex-1 w-full">
          {/* Year Badge */}
          <div className="inline-block bg-brand dark:bg-brand/30 border border-brand/50 dark:border-brand/50 text-brand dark:text-brand text-sm font-medium rounded-full mb-5">
            {data.duration}
          </div>

          {/* Top Row Split: Info & Focus Card */}
          <div className="flex flex-col xl:flex-row gap-10 mb-8">
            {/* Degree & Description */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                {data.degree}
              </h3>
              
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-5">
                <Landmark size={18} />
                <span className="font-medium">{data.university}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 !bg-[#ff0000] dark:bg-brand/30 border border-brand/50 dark:border-brand/50 text-brand dark:text-brand rounded-md text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-brand dark:bg-brand animate-pulse"></span>
                {data.status}
              </div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
                {data.description}
              </p>

              <CourseList courses={data.coursework} />
            </div>

            {/* Current Focus Card */}
            <div className="w-full xl:w-80 shrink-0">
              <div className="border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 bg-slate-50/50 dark:bg-slate-900/30 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Current Focus
                  </h4>
                  <Target className="text-brand dark:text-brand" size={20} />
                </div>
                <ul className="space-y-4">
                  {data.focus.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      {getFocusIcon(item.icon)}
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Row: Tech Stack */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800/60">
            <LearningFocus techStack={data.techStack} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}