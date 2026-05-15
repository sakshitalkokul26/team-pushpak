"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DroneBackground } from "@/components/animations/DroneBackground";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal Drone Background */}
      <DroneBackground />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0 pointer-events-none" />
      
      {/* Gradient Overlay for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[var(--color-background)] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mt-20">
        {mounted && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[var(--color-neon-blue)] bg-blue-900/20 backdrop-blur-md"
            >
              <span className="text-[var(--color-neon-blue)] text-sm font-semibold tracking-widest uppercase">
                Aerospace Innovation Lab
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase"
            >
              Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-yellow)] to-yellow-500 text-glow">Pushpak</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light"
            >
              Engineering the Future of Autonomous Flight. Student drone and UAV innovation team focused on research, FPV systems, and engineering excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-[var(--color-brand-yellow)] text-black font-bold uppercase tracking-wider overflow-hidden rounded-lg transition-transform hover:scale-105"
              >
                <span className="relative z-10">Explore Projects</span>
                <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0" />
              </a>
              
              <a
                href="#contact"
                className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider rounded-lg transition-all hover:border-[var(--color-neon-blue)] hover:bg-[var(--color-neon-blue)]/10 neon-border backdrop-blur-sm"
              >
                Join Team
              </a>
            </motion.div>
          </>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-px h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-neon-blue)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
