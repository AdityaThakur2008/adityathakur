import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          AT
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <Button className="hidden rounded-full md:flex">
          Resume
        </Button>

      </div>
    </nav>
  );
}