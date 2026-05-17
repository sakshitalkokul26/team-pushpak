"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

import { HorizontalShowcaseCarousel } from "@/components/ui/HorizontalShowcaseCarousel";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <HorizontalShowcaseCarousel
        title={
          <>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-yellow)] to-yellow-500">Fleet</span>
          </>
        }
        subtitle="Advanced multi-rotor platforms engineered for research, surveillance, and high-speed FPV maneuvers."
        cardWidthClass="w-[85vw] sm:w-[400px] lg:w-[450px]"
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden glass-card neon-border cursor-pointer bg-[#0a0a0c] h-full flex flex-col"
          >
            {/* Image Container */}
            <div className="h-64 overflow-hidden relative shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <ImageWithFallback src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] bg-black/50 backdrop-blur-md">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-20 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-brand-yellow)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
                <span className="text-sm text-gray-400 uppercase tracking-wider">Explore Details</span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-neon-blue)] group-hover:text-black transition-colors duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </HorizontalShowcaseCarousel>
    </section>
  );
}
