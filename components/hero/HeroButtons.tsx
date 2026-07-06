
import { ArrowRight, Mail } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 pt-2">
      <button className="flex items-center space-x-2 bg-slate-950 hover:bg-slate-900 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 px-6 py-3 rounded-2xl font-medium transition-colors shadow-sm cursor-pointer">
        <span>View My Work</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <button className="flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-800 dark:hover:bg-slate-800 px-6 py-3 rounded-2xl font-medium transition-colors shadow-sm cursor-pointer">
        <span>Contact Me</span>
        <Mail className="w-4 h-4" />
      </button>
    </div>
  );
}
