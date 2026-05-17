"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HorizontalShowcaseCarouselProps {
  children: React.ReactNode[];
  autoScrollSpeed?: number;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  cardWidthClass?: string;
  showButtons?: boolean;
  pauseOnHover?: boolean;
}

export function HorizontalShowcaseCarousel({
  children,
  autoScrollSpeed = 0.5,
  title,
  subtitle,
  cardWidthClass = "w-[85vw] sm:w-[400px] lg:w-[450px]",
  showButtons = true,
  pauseOnHover = true,
}: HorizontalShowcaseCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Duplicate children to create an infinite loop effect
  // 3 sets: one for prev buffer, one for current view, one for next buffer.
  const duplicatedChildren = [
    ...(React.Children.map(children, (child) => React.isValidElement(child) ? React.cloneElement(child, { key: `prev-${child.key}` } as any) : child) || []),
    ...(React.Children.map(children, (child) => React.isValidElement(child) ? React.cloneElement(child, { key: `curr-${child.key}` } as any) : child) || []),
    ...(React.Children.map(children, (child) => React.isValidElement(child) ? React.cloneElement(child, { key: `next-${child.key}` } as any) : child) || []),
  ];

  // Auto-scroll logic
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const scrollStep = (currentTime: number) => {
      // Calculate delta time to ensure smooth scrolling regardless of frame rate
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Pause if hovered or dragging
      if ((pauseOnHover && isHovered) || isDragging) {
        animationFrameId = requestAnimationFrame(scrollStep);
        return;
      }

      // If snap is active, scrolling fractionally will fight the snap.
      // We conditionally apply snap via CSS classes below.
      
      // Amount to scroll based on time elapsed and requested speed
      const scrollAmount = autoScrollSpeed * (deltaTime / 16); 
      container.scrollLeft += scrollAmount;

      // Infinite loop boundaries
      const singleSetWidth = container.scrollWidth / 3;

      if (container.scrollLeft >= singleSetWidth * 2) {
        // Seamlessly jump back
        container.scrollLeft -= singleSetWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += singleSetWidth;
      }

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    // Start auto scrolling from the middle set
    setTimeout(() => {
      if (container.scrollLeft === 0) {
        container.scrollLeft = container.scrollWidth / 3;
      }
      lastTime = performance.now();
      animationFrameId = requestAnimationFrame(scrollStep);
    }, 100);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoScrollSpeed, isHovered, isDragging, pauseOnHover]);

  // Handle manual navigation
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // Scroll by roughly one card width
      const singleCardMatch = cardWidthClass.match(/w-\[(\d+)px\]/);
      const scrollAmount = direction === "left" ? -400 : 400; // default 400px
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Mouse Dragging Support
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeftPos(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div className="relative w-full py-8">
      {/* Header section */}
      {(title || subtitle) && (
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10 px-6 md:px-12 container mx-auto">
          <div className="text-left">
            {title && <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">{title}</h2>}
            {subtitle && <p className="text-gray-400 max-w-2xl">{subtitle}</p>}
          </div>

          {/* Top Arrows (Optional, hidden on desktop since we have floating arrows) */}
          {showButtons && (
            <div className="flex md:hidden gap-4">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-brand-yellow)] hover:border-[var(--color-brand-yellow)] hover:text-black transition-all shadow-none z-20"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-brand-yellow)] hover:border-[var(--color-brand-yellow)] hover:text-black transition-all shadow-none z-20"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Carousel Container */}
      <div className="relative w-full group">
        {/* Left fade edge for cinematic look */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade edge for cinematic look */}
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Floating Arrow Buttons - Vertically centered outside content */}
        {showButtons && (
          <>
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl items-center justify-center text-white hover:bg-[var(--color-brand-yellow)] hover:border-[var(--color-brand-yellow)] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] z-20 opacity-0 group-hover:opacity-100 scale-95 hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl items-center justify-center text-white hover:bg-[var(--color-brand-yellow)] hover:border-[var(--color-brand-yellow)] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] z-20 opacity-0 group-hover:opacity-100 scale-95 hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        {/* Scroll Area */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          // Remove smooth class because native scrollLeft modification handles it.
          // Add snap ONLY when user is interacting to avoid fighting the auto-scroll.
          className={cn(
            "flex overflow-x-auto flex-nowrap gap-6 md:gap-8 pb-8 px-6 md:px-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none",
            isHovered || isDragging ? "snap-x snap-mandatory" : ""
          )}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {duplicatedChildren.map((child, index) => (
            <div
              key={index}
              className={cn("shrink-0 snap-start", cardWidthClass)}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
