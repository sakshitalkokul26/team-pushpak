"use client";

import { motion } from "framer-motion";
import { TIMELINE_EVENTS } from "@/data";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 relative bg-black">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-blue-500">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Connector Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-neon-blue)] shadow-[0_0_15px_rgba(0,240,255,0.8)] z-10" />

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`w-full md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}
                >
                  <div className="glass-card p-6 border-white/5 hover:border-[var(--color-brand-yellow)]/50 transition-colors">
                    <span className="text-5xl font-black text-white/5 absolute -top-4 -right-4 pointer-events-none">
                      {event.year}
                    </span>
                    <h3 className="text-[var(--color-brand-yellow)] text-xl font-bold mb-2 relative z-10">{event.year} - {event.title}</h3>
                    <p className="text-gray-400 relative z-10">{event.description}</p>
                  </div>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
