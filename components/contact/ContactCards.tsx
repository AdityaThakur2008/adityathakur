"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { contactCards } from "@/data/contact";

export default function ContactCards() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="flex flex-col gap-3 w-full mt-2"
    >
      {contactCards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
           
            className="group flex items-center justify-between p-4 rounded-2xl bg-card border border-border/40 hover:border-border/80 hover:bg-secondary/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/40 border border-border/40 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <Icon size={20} className="text-primary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-foreground">{card.title}</span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {card.value}
                  {card.isStatus && (
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  )}
                </div>
              </div>
            </div>
            <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        );
      })}
    </motion.div>
  );
}