"use client";

import { motion } from "framer-motion";
import { RND_TOPICS } from "@/data";
import { Microchip, Code, Waves, Compass } from "lucide-react";

const ICONS = [<Compass key="1" />, <Waves key="2" />, <Code key="3" />, <Microchip key="4" />];

export function RnDSection() {
  return (
    <section id="rnd" className="py-24 relative bg-[#030305] overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, var(--color-neon-blue) 0%, transparent 50%), radial-gradient(circle at 100% 0%, var(--color-brand-yellow) 0%, transparent 30%)",
      }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-blue-500 text-glow-blue">Development</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pioneering unmanned aerial systems through custom embedded logic and innovative aerodynamic design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RND_TOPICS.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 glass-card bg-black/60 border-white/5 hover:border-[var(--color-neon-blue)]/50 transition-all overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-150 duration-700 text-[var(--color-neon-blue)]">
                {ICONS[i]}
              </div>
              
              <div className="text-[var(--color-neon-blue)] mb-4">
                {ICONS[i]}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{topic.title}</h3>
              <p className="text-gray-400">{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
