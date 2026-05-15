"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const COMPETITIONS = [
  { name: "National Drone Tech Expo", placement: "Top 5 Finalist", year: "2023", desc: "Showcased autonomous flight capabilities." },
  { name: "Global UAV Challenge", placement: "Best Design Award", year: "2022", desc: "Awarded for the heavy-lift hexacopter chassis." },
  { name: "Inter-College Robotics Fest", placement: "1st Place", year: "2021", desc: "Won the obstacle navigation track." },
];

export function CompetitionsSection() {
  return (
    <section id="competitions" className="py-24 relative bg-[var(--color-background)]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-[var(--color-brand-yellow)]">Glory</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPETITIONS.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 text-center group hover:border-[var(--color-brand-yellow)] transition-all"
            >
              <div className="w-16 h-16 mx-auto bg-[var(--color-brand-yellow)]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-yellow)] group-hover:text-black text-[var(--color-brand-yellow)] transition-colors">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{comp.name}</h3>
              <p className="text-[var(--color-neon-blue)] font-bold mb-4">{comp.placement} <span className="text-gray-500 font-normal">| {comp.year}</span></p>
              <p className="text-gray-400 text-sm">{comp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
