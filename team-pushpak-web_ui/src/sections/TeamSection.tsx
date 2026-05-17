"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/data";
import { Globe, Mail, Link as LinkIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

import { HorizontalShowcaseCarousel } from "@/components/ui/HorizontalShowcaseCarousel";

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative bg-[var(--color-background)] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-yellow)] to-transparent opacity-20" />

      <HorizontalShowcaseCarousel
        title={
          <>
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Squad</span>
          </>
        }
        subtitle="A multidisciplinary team of engineers, developers, and visionaries united by the passion for aviation."
        cardWidthClass="w-[85vw] sm:w-[300px] lg:w-[280px] xl:w-[300px]"
      >
        {TEAM_MEMBERS.map((member) => (
          <motion.div
            key={member.name.replace(/\s+/g, '-').toLowerCase()}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-[420px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-brand-yellow)]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />

            <div className="relative z-10 bg-[#0a0a0c] border border-white/10 rounded-2xl overflow-hidden glass-card h-full transition-transform duration-500 group-hover:-translate-y-2 flex flex-col">
              <div className="h-64 bg-gray-800 relative shrink-0">
                <ImageWithFallback src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">
                    {member.department}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--color-brand-yellow)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-neon-blue)] text-sm font-medium uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                </div>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 mt-auto">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkIcon size={20} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </HorizontalShowcaseCarousel>
    </section>
  );
}
