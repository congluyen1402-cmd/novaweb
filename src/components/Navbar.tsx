"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const { t, lang, setLang } = useTranslation();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-7xl"
    >
      <div className="glass-panel rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between shadow-[0_0_40px_rgba(0,240,255,0.1)]">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-black dark:text-white">
            {t.brand}
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">{t.navHome}</Link>
          <Link href="/dich-vu" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">{t.navServices}</Link>
          <Link href="/#templates" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">{t.navTemplates}</Link>
          <Link href="/#projects" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">{t.navProjects}</Link>
          <Link href="/#blog" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">{t.navBlog}</Link>
          <Link href="/#pricing" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">{t.navPricing}</Link>
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex bg-black/5 dark:bg-black/40 rounded-full p-1 border border-black/10 dark:border-white/10">
            <button 
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${lang === 'en' ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-gray-500 dark:text-white/50 hover:text-black dark:hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang("vi")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${lang === 'vi' ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-gray-500 dark:text-white/50 hover:text-black dark:hover:text-white'}`}
            >
              VI
            </button>
          </div>

          {mounted && (
            <button 
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="relative p-2 rounded-full bg-gradient-to-tr from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center"
            >
              {resolvedTheme === "dark" ? <Sun className="w-5 h-5 text-neon-cyan" /> : <Moon className="w-5 h-5 text-neon-purple" />}
            </button>
          )}

          <button className="relative group overflow-hidden rounded-full p-[1px] hidden sm:block">
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
            <div className="relative bg-deep-void px-6 py-2 rounded-full font-medium text-sm text-white transition-all group-hover:bg-opacity-0">
              {t.startTrial}
            </div>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
