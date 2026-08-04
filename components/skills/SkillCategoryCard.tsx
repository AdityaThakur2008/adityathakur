"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  color: string;
}

interface SkillCategoryCardProps {
  title: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  skills: SkillItem[];
  index: number;
}

export default function SkillCategoryCard({ title, icon: Icon, skills, index }: SkillCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-card/40 hover:bg-card/80 border border-border/60 hover:border-primary/30 rounded-2xl p-5 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Icon size={18} className="text-primary" />
        </div>
        <h3 className="font-semibold text-foreground text-sm">{title}</h3>
      </div>

      <div className="flex flex-col gap-4">
        {skills.map((skill, i) => {
          const SkillIcon = skill.icon;
          return (
            <div key={i} className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0 border border-border/50 group-hover:border-primary/20 transition-colors">
                <SkillIcon size={16} className={skill.color} />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}