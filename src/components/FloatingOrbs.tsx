"use client";

import { useEffect, useRef, useState } from "react";

export function FloatingOrbs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Abstract blurred background shapes */}
      <div 
        className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-neon-cyan/10 blur-[120px] transition-transform duration-1000 ease-out mix-blend-screen"
        style={{ transform: `translate(${mousePosition.x * 20}px, ${-mousePosition.y * 20}px)` }}
      />
      <div 
        className="absolute top-[40%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-neon-purple/10 blur-[150px] transition-transform duration-1000 ease-out mix-blend-screen"
        style={{ transform: `translate(${-mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
}
