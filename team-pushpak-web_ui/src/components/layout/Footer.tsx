"use client";

import Link from "next/link";
import { Globe, Mail, Share2, Link as LinkIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="#home" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
              <span className="text-white">TEAM</span>
              <span className="text-[var(--color-brand-yellow)] text-glow">PUSHPAK</span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Engineering the Future of Autonomous Flight. We build custom UAVs for research and competitions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">About</Link></li>
              <li><Link href="#projects" className="text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">Projects</Link></li>
              <li><Link href="#team" className="text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">Team</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-brand-yellow)] hover:text-black transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-brand-yellow)] hover:text-black transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-brand-yellow)] hover:text-black transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-brand-yellow)] hover:text-black transition-colors">
                <LinkIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Team Pushpak. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
