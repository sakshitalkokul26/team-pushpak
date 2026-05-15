"use client";

import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/data";
import { Globe, Mail, Link as LinkIcon } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative bg-[var(--color-background)] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-yellow)] to-transparent opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Squad</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A multidisciplinary team of engineers, developers, and visionaries united by the passion for aviation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-brand-yellow)]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />

              <div className="relative z-10 bg-[#0a0a0c] border border-white/10 rounded-2xl overflow-hidden glass-card h-full transition-transform duration-500 group-hover:-translate-y-2">
                <div className="h-64 bg-gray-800 relative">
                  <ImageWithFallback src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">
                      {member.department}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--color-brand-yellow)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-neon-blue)] text-sm font-medium uppercase tracking-wider mb-4">
                    {member.role}
                  </p>

                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkIcon size={20} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
