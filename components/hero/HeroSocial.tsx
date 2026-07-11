"use client";
import React, { useState } from "react";
import { Mail, Check } from "lucide-react";
import {socials} from "@/data/socials"

export default function HeroSocial() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "adityathakur89362@gmail.com";

 
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();

    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="flex items-center space-x-3 pt-4">
      {socials.map((social, index) => {
  const Icon = social.icon;

  return (
    <a
      key={index}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 transition-colors shadow-sm"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
})}

      <button
        onClick={handleEmailClick}
        className={`p-3 border rounded-xl transition-all duration-300 shadow-sm relative group flex items-center justify-center ${
          copied
            ? "bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-950/30 dark:border-emerald-900 dark:text-emerald-400"
            : "bg-slate-50 hover:bg-slate-100 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-800 text-slate-600 dark:text-slate-400"
        }`}>
        {copied ? (
          <Check className="w-5 h-5 scale-110 transition-transform duration-200" />
        ) : (
          <Mail className="w-5 h-5" />
        )}

        <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-medium shadow-sm">
          {copied ? "Copied to clipboard!" : "Click to Email / Copy"}
        </span>
      </button>
    </div>
  );
}
