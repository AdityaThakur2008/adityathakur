
import HeroButtons from './HeroButtons';
import HeroSocial from './HeroSocial';

export default function HeroLeft() {
  return (
    <div className="flex flex-col justify-center space-y-6 max-w-2xl text-left z-10">
      <div className="inline-flex items-center space-x-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-1.5 rounded-full w-fit text-sm font-medium">
        <span>👋</span>
        <span className="text-slate-700 dark:text-slate-300">Hi there, I'm</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
        Aditya <span className="text-brand">Thakur</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
        Full Stack Developer | AI Enthusiast
      </h2>

      <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-lg">
        I build scalable web applications and AI-powered solutions that solve real-world problems and create impact.
      </p>

      <HeroButtons />
      <HeroSocial />
    </div>
  );
}
