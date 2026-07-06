import React from 'react';
import { Code2, Terminal, Briefcase, Rocket } from 'lucide-react';

export default function HeroStats() {
  const stats = [
    { icon: <Rocket className="w-5 h-5 text-brand" />, title: "Projects", value: "10+" },
    { icon: <Code2 className="w-5 h-5 text-emerald-500" />, title: "Lines of Code", value: "20K+" },
    { icon: <Terminal className="w-5 h-5 text-amber-500" />, title: "Tech Stack", value: "15+" },
    { icon: <Briefcase className="w-5 h-5 text-rose-500" />, title: "Experience", value: "Fresher" },
  ];

  return (
    <div className="w-full bg-slate-50/60 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 backdrop-blur-sm">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center space-x-4 px-2">
          <div className="p-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl shadow-sm">
            {stat.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">{stat.title}</span>
            <span className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">{stat.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
