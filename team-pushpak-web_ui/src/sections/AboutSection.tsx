"use client";

import { motion } from "framer-motion";
import { TEAM_STATS } from "@/data";
import { Target, Zap, Shield, Cpu } from "lucide-react";

const FEATURES = [
  { icon: <Target size={24} />, title: "Drone Development", desc: "Designing, assembling, and testing UAV platforms for practical applications and learning" },
  { icon: <Zap size={24} />, title: "Research & Innovation", desc: "Exploring new technologies, concepts, and solutions in the field of drone engineering" },
  { icon: <Shield size={24} />, title: "Teamwork & Collaboration", desc: "Working together across different domains to achieve project goals and continuous improvement" },
  { icon: <Cpu size={24} />, title: "Practical Learning", desc: "Providing hands-on experience in design, manufacturing, electronics, and flight testing" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10 bg-[var(--color-background)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 flex flex-col">
              <span className="text-gray-400 text-lg tracking-widest mb-2 font-semibold">About Us</span>
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-blue-500">UAV Tech</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
             Team Pushpak is a student-led drone development team established in 2022. The team focuses on research, design, manufacturing, and testing of UAVs while encouraging innovation, teamwork, and practical engineering skills among students.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {FEATURES.map((feat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-[var(--color-brand-yellow)] border border-white/10">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feat.title}</h4>
                    <p className="text-sm text-gray-400">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-neon-blue)]/20 to-[var(--color-brand-yellow)]/20 blur-3xl -z-10 rounded-full" />
            
            <div className="grid grid-cols-2 gap-4">
              {TEAM_STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 flex flex-col items-center justify-center text-center group border-white/5 hover:border-[var(--color-neon-blue)]/50 transition-colors"
                >
                  <span className="text-5xl font-black text-white mb-2 group-hover:text-[var(--color-neon-blue)] transition-colors text-glow-blue">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
