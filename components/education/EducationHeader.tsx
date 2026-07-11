"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
       className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-brand text-sm font-medium shadow-xs mb-6"
      >
        <GraduationCap size={16} className="text-brand dark:text-brand" />
        Education
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
      >
        My <span className="text-brand dark:text-brand">Academic</span> Journey
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl"
      >
        My educational background and continuous learning path
      </motion.p>

      {/* Decorative center line under header */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-16 h-1 bg-brand dark:bg-brand rounded-full mt-6"
      />
    </div>
  );
}