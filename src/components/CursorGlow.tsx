'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateGlow = () => {
      const dx = mouseX - glowX;
      const dy = mouseY - glowY;
      
      // Interpolate position for smooth lag/inertia
      glowX += dx * 0.08;
      glowY += dy * 0.08;

      glow.style.transform = `translate3d(${glowX - 150}px, ${glowY - 150}px, 0)`;

      requestAnimationFrame(updateGlow);
    };

    const animId = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-30 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-cyan-500/8 via-indigo-500/8 to-purple-500/8 blur-[80px]"
      style={{ transform: 'translate3d(-300px, -300px, 0)' }}
    />
  );
}
