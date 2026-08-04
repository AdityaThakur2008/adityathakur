"use client";

import { useState, useEffect } from "react";
import { Download, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          onClick={() =>
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl font-bold text-primary">AT</span>
          <span className="text-xl font-semibold text-foreground hidden sm:block">
            Aditya Thakur
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {mounted && (
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <a
            href="/resume/Aditya_Thakur_Resume.pdf"
            download
            className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-[0_0_15px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_20px_rgba(var(--color-primary),0.5)]">
            Resume <Download size={16} />
          </a>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-card border-b border-border p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-secondary transition-colors">
              {link.name}
            </a>
          ))}
          <a
            href="/resume/Aditya_Thakur_Resume.pdf"
            download
            className="flex justify-center items-center gap-2 bg-[#6957F5] text-primary-foreground px-5 py-3 rounded-xl text-sm font-medium w-full mt-2">
            Resume <Download size={16} />
          </a>
        </div>
      )}
    </motion.nav>
  );
}
