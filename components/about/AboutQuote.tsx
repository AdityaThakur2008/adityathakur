"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function AboutQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="w-full mt-8 rounded-2xl bg-card border border-border p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div className="flex items-center gap-6">
        <Quote size={40} className="text-primary/40 shrink-0 rotate-180" />
        <p className="text-muted-foreground text-sm md:text-base font-medium">
          Building the future, one line of code at a time.
        </p>
      </div>
      
      {/* Signature styled text */}
      <div className="text-primary font-medium text-lg italic tracking-wide shrink-0">
        <span className="text-muted-foreground/30 mr-2">—</span> Aditya Thakur
      </div>
    </motion.div>
  );
}