"use client";

import { useState } from "react";
import { ArrowRight, Mail, Check } from "lucide-react";
import { motion } from "framer-motion";
import { heroData, socialLinks } from "@/data/hero";

export default function HeroContent() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent, url: string) => {
    const email = url.replace("mailto:", "");

    navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-start gap-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs font-medium text-muted-foreground">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        {heroData.badge}
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
        {heroData.greeting} <br />
        <span className="text-primary">{heroData.firstName}</span>{" "}
        {heroData.lastName}
      </h1>

      <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
        {heroData.roles[0]} <span className="text-primary mx-2">•</span>{" "}
        {heroData.roles[1]}
      </h2>

      <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
        {heroData.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 mt-2">
        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_rgba(124,108,251,0.4)] flex items-center gap-2">
          View My Work <ArrowRight size={18} />
        </button>
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="bg-card hover:bg-secondary border border-border text-foreground px-6 py-3.5 rounded-full text-sm font-medium transition-all flex items-center gap-2">
          Contact Me <Mail size={18} />
        </button>
      </div>

      <div className="flex items-center gap-5 mt-6 text-muted-foreground relative">
        {socialLinks.map((link) => {
          const isEmail = link.name === "mail";

          const Icon = isEmail && copied ? Check : link.icon;

          return (
            <a
              key={link.name}
              href={link.url}
              target={isEmail ? "_self" : "_blank"}
              rel={isEmail ? "" : "noopener noreferrer"}
              onClick={(e) => {
                if (isEmail) {
                  handleEmailClick(e, link.url);
                }
              }}
              className={`transition-colors relative group ${
                isEmail && copied ? "text-green-500" : "hover:text-foreground"
              }`}>
              <Icon size={22} />

              {isEmail && !copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-card border border-border/50 px-2 py-1 rounded shadow-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Click to Copy & Mail
                </span>
              )}
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
