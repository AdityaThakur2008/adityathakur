"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/contact";

export default function SocialConnect() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="w-full mt-6 bg-card border border-border/50 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
      <div className="flex flex-col gap-1 md:w-1/4 text-center md:text-left">
        <h3 className="text-xl font-bold text-foreground">
          Let&apos;s connect
        </h3>
        <p className="text-sm text-muted-foreground">
          Find me on these platforms
        </p>
      </div>

      {/* Subtle Vertical Divider */}
      <div className="hidden md:block w-px h-16 bg-border/60 mx-4" />

      <div className="flex items-center justify-center md:justify-end gap-4 sm:gap-6 md:gap-8 flex-wrap flex-1">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-secondary/40 border border-border/40 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <Icon
                  size={20}
                  className="text-foreground group-hover:text-primary transition-colors"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[13px] font-semibold text-foreground">
                  {link.name}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {link.handle}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
