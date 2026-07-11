"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";
import { Menu, Sun, Moon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const activePath = "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 mx-auto max-w-7xl">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 border border-slate-200/60 rounded-2xl bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05),0_2px_8px_-1px_rgba(0,0,0,0.03)] transition-all duration-300">
        
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 sm:gap-3 group">
          <div className="bg-slate-100/90 dark:bg-slate-800/90 px-2.5 py-1.5 rounded-[12px] sm:rounded-[14px] flex items-center justify-center font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
            A<span className="text-brand">T</span>
          </div>
          <span className="font-semibold text-slate-800 dark:text-slate-200 text-[14px] hidden sm:inline-block">
            Aditya Thakur
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = activePath === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[14px] tracking-wide transition-all duration-300 pb-1.5 ${
                  isActive
                    ? "font-semibold text-brand"
                    : "font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}>
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Theme & Resume */}
        <div className="hidden items-center gap-4 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {/* 💡Mounted चेक सिर्फ आइकॉन पर लगाया ताकि नेविगेशन बार गायब न हो */}
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5 stroke-[1.75]" />
            ) : (
              <Moon className="h-5 w-5 stroke-[1.75]" />
            )}
          </Button>

          <Button className="bg-[#111] hover:bg-zinc-800 text-white text-xs font-medium px-4 py-2 h-auto rounded-xl flex items-center gap-1.5 tracking-wide transition-all shadow-sm dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Resume
            <MdOutlineFileDownload className="text-base" />
          </Button>
        </div>

        {/* Mobile Menu & Theme */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-600 dark:text-slate-400 rounded-full h-9 w-9"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {mounted && theme === "dark" ? (
              <Sun className="h-4.5 w-4.5 stroke-[1.75]" />
            ) : (
              <Moon className="h-4.5 w-4.5 stroke-[1.75]" />
            )}
          </Button>
          
          <Sheet>
            <SheetTrigger className="hover:bg-slate-100/80 dark:hover:bg-slate-800/80 rounded-xl h-9 w-9 flex items-center justify-center transition-colors text-slate-800 dark:text-slate-200 border border-transparent">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-l border-slate-200/50 dark:border-slate-800/50">
              <div className="mt-12 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isActive = activePath === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-[15px] px-4 py-2.5 rounded-xl transition-all ${
                        isActive
                          ? "font-semibold text-brand bg-slate-50 dark:bg-slate-900"
                          : "font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50/50"
                      }`}>
                      {link.name}
                    </Link>
                  );
                })}

                
                <Button asChild className="mt-4 p-0 h-auto w-full rounded-xl border-0 bg-transparent hover:bg-transparent shadow-none">
                  <button type="button" className="bg-[#111] hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 rounded-xl py-2.5 flex items-center justify-center gap-2 text-xs w-full transition-all font-medium cursor-pointer">
                    Resume <MdOutlineFileDownload className="text-base" />
                  </button>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
