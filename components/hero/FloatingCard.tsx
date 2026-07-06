"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FloatingCard() {
  return (
    <motion.div 
      animate={{ y: [0, -18, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: ["easeInOut" ,'easeInOut']}}
      className="flex items-center justify-between space-x-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none max-w-xs"
    >
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full absolute" />
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium pl-1">Available for</span>
        </div>
        <span className="text-sm font-bold text-slate-900 dark:text-white">Opportunities</span>
      </div>
      
      <div className="p-2.5 bg-brand/10 text-brand rounded-xl">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
}
