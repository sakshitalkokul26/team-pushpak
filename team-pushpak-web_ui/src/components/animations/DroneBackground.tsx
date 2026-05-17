"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DRONES = [
  // Distant drones (smaller, slower)
  { id: 1, top: "15%", delay: 0, duration: 45, scale: 0.8 },
  { id: 2, top: "55%", delay: 15, duration: 50, scale: 0.7 },
  { id: 3, top: "85%", delay: 5, duration: 40, scale: 0.9 },
  // Mid-ground drones
  { id: 4, top: "25%", delay: 10, duration: 30, scale: 1.2 },
  { id: 5, top: "65%", delay: 3, duration: 35, scale: 1.1 },
  { id: 6, top: "90%", delay: 20, duration: 32, scale: 1.3 },
  // Foreground drones (larger, faster)
  { id: 7, top: "40%", delay: 8, duration: 22, scale: 1.6 },
  { id: 8, top: "10%", delay: 25, duration: 25, scale: 1.8 },
  { id: 9, top: "75%", delay: 12, duration: 20, scale: 1.7 },
];

export function DroneBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {DRONES.map((drone) => (
        <motion.div
          key={`drone-${drone.id}`}
          initial={{ x: "-10vw", y: 0, opacity: 0 }}
          animate={{
            x: ["-10vw", "110vw"],
            y: [0, -20, 10, -10, 0],
            opacity: [0, 0.6, 0.8, 0.6, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: drone.duration,
              delay: drone.delay,
              ease: "linear",
            },
            y: {
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            },
            opacity: {
              repeat: Infinity,
              duration: drone.duration,
              delay: drone.delay,
              ease: "linear",
              times: [0, 0.1, 0.5, 0.9, 1],
            },
          }}
          style={{
            position: "absolute",
            top: drone.top,
            scale: drone.scale,
          }}
          className="flex items-center justify-center"
        >
          {/* Minimal Drone SVG */}
          <svg
            width="64"
            height="24"
            viewBox="0 0 64 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-70"
          >
            <path
              d="M32 10C36 10 40 12 44 14C48 16 56 16 60 14M32 10C28 10 24 12 20 14C16 16 8 16 4 14M32 10V18M26 14H38"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Central Body */}
            <rect x="28" y="8" width="8" height="6" rx="2" fill="#222" stroke="#444" strokeWidth="1.5" />
            
            {/* Rotors */}
            <ellipse cx="6" cy="12" rx="6" ry="2" fill="none" stroke="#555" strokeWidth="1" />
            <ellipse cx="58" cy="12" rx="6" ry="2" fill="none" stroke="#555" strokeWidth="1" />
            
            {/* Glowing Lights */}
            <circle cx="6" cy="14" r="1.5" fill="var(--color-brand-yellow)" className="animate-pulse" style={{ filter: "drop-shadow(0 0 6px var(--color-brand-yellow))" }} />
            <circle cx="58" cy="14" r="1.5" fill="var(--color-brand-yellow)" className="animate-pulse" style={{ filter: "drop-shadow(0 0 6px var(--color-brand-yellow))" }} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
