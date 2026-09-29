"use client";
import { Monitor } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full bg-gray-50 dark:bg-deep-void pt-16 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">
        {/* Brand */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-neon-purple flex items-center justify-center">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-black text-xl text-black dark:text-white tracking-widest">NOVAWEB</span>
          </div>
          <p className="text-gray-600 dark:text-muted-foreground text-sm font-sans max-w-sm">
            {t.footerDesc}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button className="w-10 h-10 rounded bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center text-black dark:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16"/><path d="M4 20L20 4"/></svg>
            </button>
            <button className="w-10 h-10 rounded bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center text-black dark:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </button>
            <button className="w-10 h-10 rounded bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center text-black dark:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg>
            </button>
            <button className="w-10 h-10 rounded bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center text-black dark:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1c.3-1.6 1.4-2.8 3-3.1C8.2 3.5 12 3.5 12 3.5s3.8 0 6.5.5c1.6.3 2.7 1.5 3 3.1.5 2.7.5 5.4.5 5.4s0 2.7-.5 5.4c-.3 1.6-1.4 2.8-3 3.1-2.7.5-6.5.5-6.5.5s-3.8 0-6.5-.5c-1.6-.3-2.7-1.5-3-3.1C2 15.2 2 12.5 2 12.5s0-2.7.5-5.4z"/><path d="M9.7 15.5l6-3.5-6-3.5v7z"/></svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-black dark:text-white uppercase">{t.footerCol1}</h4>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.allTemplates}</a>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.newReleases}</a>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.freeToUse}</a>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.bestSellers}</a>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-black dark:text-white uppercase">{t.footerCol2}</h4>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.docs}</a>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.blog}</a>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.community}</a>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.helpCenter}</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-black dark:text-white uppercase">{t.footerCol3}</h4>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.aboutUs}</a>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.careers}</a>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.press}</a>
          <a href="#" className="text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-white transition-colors">{t.footerLinks.legal}</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-muted-foreground">{t.footerRights}</p>
        <div className="flex gap-6 text-sm text-gray-600 dark:text-muted-foreground">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
