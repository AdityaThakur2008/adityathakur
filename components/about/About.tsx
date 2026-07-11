import React from "react";
import AboutCard from "./AboutCard";
import Highlights from "./Highlights";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10">
      <div className="flex flex-col gap-14">
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Get to know me header and personal info card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand uppercase tracking-wider">
                About Me
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Building meaningful
                <br />
                <span className="text-brand">digital experiences.</span>
              </h2>
              <div className="mt-5 h-1 w-20 rounded-full bg-brand" />

              <p className="max-w-lg pt-3 text-base leading-7 text-slate-500 dark:text-slate-400">
                I'm currently pursuing a B.Sc. in Computer Science and enjoy
                building full-stack web applications, AI-powered tools, and
                products that solve real-world problems.
              </p>
            </div>

            {/* Structured Meta Data Stack */}
            <div className="space-y-6 pt-2 text-[13px] font-semibold text-slate-600 dark:text-slate-400">
              {personalInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-5">
                    <div className="mt-1 text-slate-400 dark:text-slate-500">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        {item.title}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-slate-700 dark:text-slate-200 hover:text-brand transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-slate-700 dark:text-slate-200">
                          {item.value}
                        </p>
                      )}

                      {item.subtitle && (
                        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Item: Native CTA Download Button */}
            <div className="pt-2">
              <a href="/resume.pdf" download>
                <Button
                  className="
rounded-xl
h-12
px-5
transition-all
duration-300
hover:scale-105
">
                  <ArrowDownToLine className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic About Card & Core Traits Grid Layout */}
          <div className="lg:col-span-7 w-full">
            <AboutCard />
          </div>
        </div>

        {/* Bottom Horizontal Module Grid System */}
        <div className="border-t border-slate-100 dark:border-slate-900 pt-6">
          <Highlights />
        </div>
      </div>
    </section>
  );
}
