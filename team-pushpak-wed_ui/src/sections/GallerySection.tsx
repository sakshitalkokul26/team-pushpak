"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Expand } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const IMAGES = [
  { id: 1, src: "/assets/gallery-1.jpg", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/assets/gallery-2.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "/assets/gallery-3.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "/assets/gallery-4.jpg", span: "md:col-span-1 md:row-span-2" },
  { id: 5, src: "/assets/gallery-5.jpg", span: "md:col-span-2 md:row-span-1" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 relative bg-[var(--color-background)]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Logs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[800px] md:h-[600px]">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-xl bg-gray-800 ${img.span} cursor-pointer`}
              onClick={() => setSelectedImage(img.src)}
            >
              <ImageWithFallback src={img.src} alt={`Gallery ${img.id}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Expand className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full h-[80vh] bg-gray-900 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback src={selectedImage} alt="Fullscreen view" fill className="object-contain" sizes="100vw" />
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={() => setSelectedImage(null)}
                className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-[var(--color-brand-yellow)] hover:text-black transition-colors"
              >
                X
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
