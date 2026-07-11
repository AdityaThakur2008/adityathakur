import React from "react";
import FloatingCard from "./FloatingCard";

export default function HeroRight() {
  return (
    <div className="relative flex items-center justify-center w-full lg:w-1/2 min-h-100">
      <div className="absolute w-[320px] h-80 md:w-112.5 md:h-112.5 border border-brand/20 rounded-full flex items-center justify-center">
        <div className="absolute w-60 h-60 md:w-87.5 md:h-87.5 border border-brand/10 rounded-full animate-pulse" />

        <div className="absolute top-10 left-12 w-3 h-3 bg-brand rounded-full shadow-[0_0_10px_#5f5cff]" />
      </div>

      <div className="relative w-full max-w-87.5 h-112.5 flex items-end justify-center z-10">
        <div className="w-full h-full bg-linear-to-t from-transparent to-transparent flex items-center justify-center text-slate-400 dark:text-slate-300 text-sm italic"></div>
      </div>

      <div className="absolute bottom-16 right-4 md:right-10 z-20">
        <FloatingCard />
      </div>
    </div>
  );
}
