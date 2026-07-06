import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";
import { Menu, Sun } from "lucide-react"; 
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Navbar() {
  const activePath = "/"; 

  return (
    // FIX: left-0 right-0 lagakar box width ko exact screen size par stretch aur lock kiya
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 mx-auto max-w-7xl">
      {/* 
        FIX: h-16 responsive padding ke saath mobile par ekdum center tight wrap banayega.
        shadow layer limits ko set kiya hai taaki elements separate layers me clean render hon.
      */}
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 border border-slate-200/60 rounded-2xl bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05),0_2px_8px_-1px_rgba(0,0,0,0.03)] transition-all duration-300">
        
        {/* Left Section: Branding */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="bg-slate-100/90 dark:bg-slate-800/90 px-2.5 py-1.5 rounded-[12px] sm:rounded-[14px] flex items-center justify-center font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
            A<span className="text-brand">T</span>
          </div>
          <span className="font-semibold text-slate-800 dark:text-slate-200 text-[14px] hidden sm:inline-block">
            Aditya Thakur
          </span>
        </Link>

        {/* Center Section: Desktop Links Layout (Mobile par safely hidden) */}
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
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Section: Desktop Utility CTA Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full">
            <Sun className="h-5 w-5 stroke-[1.75]" />
          </Button>

          <Button className="bg-[#111] dark:bg-white dark:text-black hover:bg-black text-white text-xs font-medium px-4 py-2 h-auto rounded-xl flex items-center gap-1.5 tracking-wide transition-all shadow-sm">
            Resume 
            <MdOutlineFileDownload className="text-base" />
          </Button>
        </div>

        {/* Mobile View Responsiveness Trigger Block (Mobile optimized spacers) */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
          <Button variant="ghost" size="icon" className="text-slate-600 dark:text-slate-400 rounded-full h-9 w-9">
            <Sun className="h-4.5 w-4.5 stroke-[1.75]" />
          </Button>
          
          <Sheet>
            <SheetTrigger className="hover:bg-slate-100/80 dark:hover:bg-slate-800/80 rounded-xl h-9 w-9 flex items-center justify-center transition-colors text-slate-800 dark:text-slate-200 border border-transparent">
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            {/* w-64 perfectly adjusts drawer limits side-pane panels on small displays */}
            <SheetContent side="right" className="w-64 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-l border-slate-200/50 dark:border-slate-800/50">
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
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <Button className="mt-4 bg-[#111] dark:bg-white dark:text-black hover:bg-black text-white rounded-xl py-2.5 h-auto flex items-center justify-center gap-2 text-xs w-full">
                  Resume <MdOutlineFileDownload className="text-base" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}
