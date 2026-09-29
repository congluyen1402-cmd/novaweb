"use client";
import { motion } from "framer-motion";
import { Globe, Code2, Search, MessageCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Features() {
  const { t } = useTranslation();

  const SERVICES = [
    {
      id: 1,
      title: t.feat1Title,
      description: t.feat1Desc,
      icon: Globe,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-500/10",
      border: "hover:border-blue-400 dark:hover:border-blue-500/50",
      titleColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400"
    },
    {
      id: 2,
      title: t.feat2Title,
      description: t.feat2Desc,
      icon: Code2,
      color: "text-neon-cyan",
      bg: "bg-cyan-50 dark:bg-cyan-500/10",
      border: "border-neon-cyan/50 shadow-[0_0_20px_rgba(0,240,255,0.15)]", // Highlighted by default
      titleColor: "text-neon-cyan"
    },
    {
      id: 3,
      title: t.feat3Title,
      description: t.feat3Desc,
      icon: Search,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-500/10",
      border: "hover:border-blue-400 dark:hover:border-blue-500/50",
      titleColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-6 bg-gray-50/90 dark:bg-deep-void/90 backdrop-blur-3xl border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-black dark:text-white uppercase leading-tight">
              {t.serviceTitle1} <br/>
              <span className="bg-[#cffafe] dark:bg-cyan-900/40 text-black dark:text-white px-3 py-1 inline-block mt-2 rounded-sm border-b-4 border-cyan-400">
                {t.serviceTitle2}
              </span>
            </h2>
          </div>
          
          <div className="md:w-1/3 pt-2 md:pt-4">
            <p className="text-gray-600 dark:text-gray-300 font-sans text-lg border-l-2 border-cyan-400 pl-4">
              {t.serviceDesc}
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            const isFeatured = service.id === 2;
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`group relative flex flex-col justify-between bg-white dark:bg-black/40 rounded-3xl p-8 min-h-[380px] transition-all duration-300 border ${isFeatured ? service.border : `border-gray-200 dark:border-white/10 ${service.border}`}`}
              >
                <div className="flex flex-col gap-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.bg} ${isFeatured ? 'bg-neon-cyan text-white shadow-lg shadow-cyan-500/30' : service.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  {/* Text */}
                  <div className="flex flex-col gap-4">
                    <h3 className={`text-2xl font-bold font-display transition-colors duration-300 ${isFeatured ? service.titleColor : `text-black dark:text-white ${service.titleColor}`}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Optional Decorative Dot */}
                {isFeatured && (
                  <div className="absolute right-8 bottom-24 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_#00F0FF]"></div>
                )}

                {/* Button */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
                  <button className={`w-auto flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-colors text-sm ${isFeatured ? 'bg-cyan-50 text-neon-cyan hover:bg-neon-cyan hover:text-white dark:bg-cyan-900/30 dark:hover:bg-neon-cyan' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40'}`}>
                    <MessageCircle className="w-4 h-4" />
                    {t.quoteZalo}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
