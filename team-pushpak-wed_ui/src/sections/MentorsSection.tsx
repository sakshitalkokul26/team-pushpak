"use client";

import { motion } from "framer-motion";
import { MENTORS } from "@/data";
import { UserCheck } from "lucide-react";

export function MentorsSection() {
  return (
    <section id="mentors" className="py-24 relative bg-black">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Advisors</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Guided by industry experts and academic leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {MENTORS.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center gap-6 glass-panel p-6 border-white/5 hover:border-[var(--color-brand-yellow)]/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <UserCheck className="text-[var(--color-brand-yellow)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                <p className="text-[var(--color-neon-blue)] text-sm font-semibold mb-2">{mentor.designation} - {mentor.department}</p>
                <p className="text-gray-400 text-sm">Focus: {mentor.guidanceArea}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
