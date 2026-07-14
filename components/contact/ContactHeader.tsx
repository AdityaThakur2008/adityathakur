"use client";

import { motion } from "framer-motion";
import { contactHeader } from "@/data/contact";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-5 max-w-lg"
    >
      <div className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-fit px-3 py-1.5 rounded-full border border-border/50 bg-card/30">
        <span className="w-2 h-2 rounded-full bg-primary" />
        {contactHeader.badge}
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2]">
        {contactHeader.heading} <br />
        {contactHeader.highlight} <span className="text-primary">{contactHeader.highlight2}</span>
      </h2>
      
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line mt-2">
        {contactHeader.description}
      </p>
    </motion.div>
  );
}