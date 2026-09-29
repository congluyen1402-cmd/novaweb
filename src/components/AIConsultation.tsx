"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function AIConsultation() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const chips = [
    t.aiChip1,
    t.aiChip2,
    t.aiChip3,
    t.aiChip4,
    t.aiChip5
  ];

  return (
    <section className="relative w-full py-24 px-4 overflow-hidden bg-[#fafafa] dark:bg-deep-void">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-display font-black text-[#1e293b] dark:text-white uppercase leading-[1.1] mb-4">
          {t.aiConsultationTitle1} <br/>
          <span className="bg-[#ccff00] text-[#1e293b] px-3 py-1 inline-block mt-3 rounded-sm">
            {t.aiConsultationTitle2}
          </span>
        </h2>
        
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-12">
          {t.aiConsultationDesc}
        </p>

        {/* Clean Chat Bubbles Illustration */}
        <div className="relative w-full h-24 mb-10 flex justify-center items-center">
           {/* Gray Bubble */}
           <motion.div 
             animate={{ y: [0, -5, 0] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute ml-[-50px] mb-[20px]"
           >
             <div className="bg-[#f1f5f9] dark:bg-gray-800 rounded-xl rounded-bl-none px-6 py-3 border border-gray-200 dark:border-gray-700 shadow-sm relative">
               <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mb-1.5"></div>
               <div className="w-6 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
             </div>
           </motion.div>
           
           {/* Blue Bubble */}
           <motion.div 
             animate={{ y: [0, 5, 0] }} 
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute ml-[60px] mt-[30px] z-10"
           >
             <div className="bg-[#0ea5e9] text-white rounded-xl rounded-br-none px-4 py-2 shadow-sm flex items-center justify-center gap-1.5">
               <div className="w-1.5 h-1.5 bg-white/90 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
               <div className="w-1.5 h-1.5 bg-white/90 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
               <div className="w-1.5 h-1.5 bg-white/90 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
             </div>
           </motion.div>
           
           {/* Cyan dot */}
           <div className="absolute left-1/3 bottom-0 w-2.5 h-2.5 bg-[#0ea5e9] rounded-full blur-[0.5px] opacity-60"></div>
        </div>

        {/* AI Input Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl bg-white dark:bg-[#0f172a] rounded-[2rem] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-gray-800"
        >
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.aiPlaceholder}
            className="w-full h-20 bg-transparent border-none outline-none resize-none text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 font-sans text-lg md:text-xl px-2 pt-2"
          ></textarea>
          
          <div className="flex justify-between items-end mt-2 px-2 pb-1">
            <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {t.aiOnline}
            </div>
            
            <button 
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${query.length > 0 ? 'bg-[#0ea5e9] text-white shadow-md hover:scale-105' : 'bg-[#e0f2fe] dark:bg-blue-900/30 text-[#38bdf8]'}`}
              onClick={() => {
                if(query) {
                  window.open("https://zalo.me/", "_blank");
                  setQuery("");
                }
              }}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Suggestion Chips */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-8 max-w-3xl">
          {chips.map((chip, idx) => (
            <button 
              key={idx}
              onClick={() => setQuery(chip)}
              className="px-4 py-2 rounded-full bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 text-[13px] font-medium text-gray-600 dark:text-gray-300 hover:border-[#0ea5e9] hover:text-[#0ea5e9] dark:hover:border-blue-500 dark:hover:text-blue-400 transition-colors shadow-sm"
            >
              {chip}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
