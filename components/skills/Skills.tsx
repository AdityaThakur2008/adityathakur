"use client";

import SkillsHeader from "./SkillsHeader";
import SkillCategoryCard from "./SkillCategoryCard";
import OtherTools from "./OtherTools";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 px-4 md:px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col relative">
        
        {/* Decorative Background Dots (Optional flair) */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        <SkillsHeader />

        {/* 5-Column Grid for Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={index}
              index={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>

        <OtherTools />
      </div>
    </section>
  );
}