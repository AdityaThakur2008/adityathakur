"use client";
import {Heart} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 w-full border-t border-border/50 bg-card/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:px-8 md:text-left">
        <p className="text-sm text-muted-foreground">
          © {currentYear}{" "}
          <span className="font-semibold text-foreground">Aditya Thakur</span>.
          All rights reserved.
        </p>

        <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          Built with <span className="animate-pulse text-red-500"><Heart size={16} /></span> and{" "}
          <span className="font-medium text-primary">Next.js</span>
        </p>
      </div>
    </footer>
  );
}
