"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";
import { supabase } from "@/lib/supabase";

type TemplateItem = {
  id: string | number;
  title?: string;
  image?: string | null;
  previewUrl?: string;
  gradient?: string;
};

const FloatingCard = ({ children, offset, delay = 0 }: { children: React.ReactNode; offset: number; delay?: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        x: `calc(-50% + ${offset}px)`,
        y: "-50%",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        y: ["-50%", `calc(-50% - 15px)`, "-50%"],
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const DEFAULT_IMAGES: TemplateItem[] = [
  { id: 'd1', image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
  { id: 'd2', image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
  { id: 'd3', image: "https://images.unsplash.com/photo-1507238692062-7f1ecefbc3d3?auto=format&fit=crop&w=800&q=80" },
  { id: 'd4', image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80" },
];

export function Hero() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [carouselItems, setCarouselItems] = useState<TemplateItem[]>(DEFAULT_IMAGES);
  const { t } = useTranslation();

  // Fetch templates for the carousel
  useEffect(() => {
    supabase.from('templates').select('*').order('sort_order', { ascending: false }).order('id', { ascending: false }).limit(10).then(({data}) => {
      if (data && data.length > 0) {
        setCarouselItems(data);
      }
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const handleExplosion = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: Date.now() + i,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles([]);
    }, 1000);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 md:pt-24 pb-12 px-4 md:px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400"
          >
            {t.aiPowered}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-black leading-tight text-black dark:text-white drop-shadow-xl"
          >
            {t.heroTitlePart1} <br />
            <span className="text-gradient inline-block">
              {t.heroTitlePart2}
            </span> <br />
            <span className="text-neon-cyan">
              {t.heroTitlePart3}
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-start gap-4 max-w-lg"
          >
            <div className="mt-1 p-2 rounded-full border border-gray-300 dark:border-gray-700 flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 dark:text-gray-400">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
              {t.heroSubtext}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-4"
          >
            <button
              onClick={handleExplosion}
              className="relative overflow-hidden group bg-[#141414] dark:bg-deep-void px-6 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(0,144,255,0.4)] hover:scale-105 active:scale-95 flex items-center gap-3 border border-gray-800"
            >
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-black">Zalo</div>
              <span className="relative z-10">{t.exploreStore}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ x: p.x, y: p.y, opacity: 1, scale: 1 }}
                  animate={{
                    x: p.x + (Math.random() - 0.5) * 200,
                    y: p.y + (Math.random() - 0.5) * 200,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute w-2 h-2 rounded-full bg-blue-400 pointer-events-none"
                />
              ))}
            </button>
            <a href="#" className="flex items-center gap-1 font-semibold text-sm text-black dark:text-white hover:text-neon-cyan transition-colors underline underline-offset-4 decoration-black/20 dark:decoration-white/20">
              {t.viewProjects}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right 3D Mockups */}
        <div className="relative h-[650px] w-full hidden lg:flex items-center justify-center z-10 perspective-[1200px]">
          {carouselItems.map((item, i) => {
            const offset = (i - currentImage + carouselItems.length) % carouselItems.length;
            
            let x = 0;
            let y = 0;
            let z = 0;
            let rotateY = -15;
            let opacity = 1;
            let scale = 1;
            let zIndex = 20;

            if (offset === 0) {
              x = 0; y = 0; z = 0; scale = 1; rotateY = -15; opacity = 1; zIndex = 30;
            } else if (offset === 1) {
              x = 70; y = -50; z = -100; scale = 0.95; rotateY = -10; opacity = 0.8; zIndex = 20;
            } else if (offset === 2) {
              x = 140; y = -100; z = -200; scale = 0.9; rotateY = -5; opacity = 0.5; zIndex = 10;
            } else {
              x = -200; y = 50; z = 100; scale = 1.1; rotateY = -30; opacity = 0; zIndex = 40;
            }

            return (
              <motion.div
                key={item.id}
                animate={{ x, y, z, rotateY, opacity, scale, zIndex }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute w-[580px] h-[380px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20 bg-[#111] dark:border-neon-cyan/20 dark:shadow-[0_0_50px_rgba(0,240,255,0.15)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {item.image ? (
                  <img src={item.image} alt={item.title || "Template Concept"} className="w-full h-full object-cover opacity-80" />
                ) : item.previewUrl && item.previewUrl !== "#" ? (
                  <iframe src={item.previewUrl} className="w-full h-full object-cover opacity-80 pointer-events-none" sandbox="allow-same-origin allow-scripts" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.gradient || 'from-gray-800 to-black'} opacity-80`}></div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="w-24 h-4 rounded-full bg-white/10 backdrop-blur-md"></div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div></div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
