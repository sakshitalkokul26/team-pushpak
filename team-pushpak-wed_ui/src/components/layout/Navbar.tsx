"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "R&D", href: "#rnd" },
  { name: "Timeline", href: "#timeline" },
  { name: "Gallery", href: "#gallery" },
  { name: "Competitions", href: "#competitions" },
  { name: "Mentors", href: "#mentors" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let currentSection = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="#home" onClick={(e) => handleClick(e, "#home")} className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-white">TEAM</span>
          <span className="text-[var(--color-brand-yellow)] text-glow">PUSHPAK</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors relative group uppercase tracking-wider",
                activeSection === link.href.substring(1) ? "text-[var(--color-brand-yellow)]" : "text-gray-300 hover:text-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[2px] transition-all duration-300",
                activeSection === link.href.substring(1) ? "w-full bg-[var(--color-brand-yellow)]" : "w-0 bg-[var(--color-neon-blue)] group-hover:w-full"
              )}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 py-4 flex flex-col items-center gap-4 shadow-2xl"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={cn(
                "text-lg font-medium uppercase tracking-widest",
                activeSection === link.href.substring(1) ? "text-[var(--color-brand-yellow)]" : "text-gray-300 hover:text-[var(--color-brand-yellow)]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
