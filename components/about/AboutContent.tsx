"use client";

import { motion } from "framer-motion";
import { aboutContent, features } from "@/data/about";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-8 w-full"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs font-medium text-muted-foreground uppercase tracking-wider w-fit">
        <span className="w-2 h-2 rounded-full bg-primary" />
        About Me
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
        {aboutContent.heading} <br />
        <span className="text-primary">{aboutContent.highlight}</span>
      </h2>

      {/* Paragraphs */}
      <div className="flex flex-col gap-5 text-muted-foreground text-base leading-relaxed max-w-lg">
        <p>
          I'm <span className="font-semibold text-primary">Aditya Thakur</span>, {aboutContent.description1.split("Aditya Thakur, ")[1]}
        </p>
        <p>{aboutContent.description2}</p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="flex flex-col gap-3 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}