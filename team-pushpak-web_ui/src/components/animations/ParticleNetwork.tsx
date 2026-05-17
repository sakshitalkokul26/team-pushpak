"use client";

import React, { useEffect, useRef } from 'react';

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    
    // Performance and responsiveness
    let particleCount = 50;
    const maxConnectionDistance = 150;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Adjust particle count based on screen size for performance
      if (width < 768) {
        particleCount = 30; // Mobile
      } else if (width < 1200) {
        particleCount = 50; // Tablet/Small Desktop
      } else {
        particleCount = 80; // Large Desktop
      }

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(width, height));
      }

      // Initialize mouse to center
      mouseX = width / 2;
      mouseY = height / 2;
      targetMouseX = width / 2;
      targetMouseY = height / 2;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseX: number;
      baseY: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.baseX = this.x;
        this.baseY = this.y;
        // Extremely slow and smooth movement
        this.vx = (Math.random() - 0.5) * 0.2; 
        this.vy = (Math.random() - 0.5) * 0.2;
        // Varied sizes for subtle depth
        this.size = Math.random() * 1.5 + 0.5;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Smooth wrapping instead of hard bouncing for a continuous network feel
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D, parallaxX: number, parallaxY: number) {
        // Apply parallax based on particle size (larger particles = closer = move more)
        const depth = this.size * 0.5;
        const px = this.x - parallaxX * depth;
        const py = this.y - parallaxY * depth;

        ctx.beginPath();
        ctx.arc(px, py, this.size, 0, Math.PI * 2);
        // Subtle yellow glow (#FFD700)
        ctx.fillStyle = 'rgba(255, 215, 0, 0.4)';
        ctx.fill();
        
        return { px, py, depth };
      }
    }

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation (cinematic delayed easing)
      mouseX += (targetMouseX - mouseX) * 0.02;
      mouseY += (targetMouseY - mouseY) * 0.02;

      // Calculate parallax offset (disable on mobile, max 12px range for subtlety)
      const maxParallax = width < 768 ? 0 : 12;
      const parallaxX = ((mouseX / width) - 0.5) * maxParallax;
      const parallaxY = ((mouseY / height) - 0.5) * maxParallax;

      // Update particles and store their drawn positions for line connecting
      const drawnPositions = particles.map(p => {
        p.update(width, height);
        return p.draw(ctx, parallaxX, parallaxY);
      });

      // Draw connections
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const p1 = drawnPositions[i];
          const p2 = drawnPositions[j];

          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            // Opacity decreases as distance increases. Max opacity 15%.
            const opacity = (1 - dist / maxConnectionDistance) * 0.15;
            ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    init();
    draw();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
        // Optional subtle blur to give a cinematic out-of-focus background feel
        filter: 'blur(0.5px)',
      }}
      aria-hidden="true"
    />
  );
}
