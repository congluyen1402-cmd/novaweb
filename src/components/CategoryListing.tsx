"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ShoppingCart, Play, ArrowDownAZ, TrendingUp, TrendingDown, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { supabase } from "@/lib/supabase";

type Template = {
  id: number;
  title: string;
  category: string;
  price: string;
  height: string;
  gradient: string;
  previewUrl: string;
  image?: string | null;
};

const TEMPLATES: Template[] = [
  { id: 1, title: "Nhà hàng Ignis & Ember", category: "Landing", price: "$49", height: "h-[300px]", gradient: "from-orange-500/20 to-red-500/20", previewUrl: "https://food-pearl-rho.vercel.app/" },
  { id: 2, title: "Aura Beauty", category: "Landing", price: "$39", height: "h-[400px]", gradient: "from-pink-500/20 to-rose-500/20", previewUrl: "https://food-pearl-rho.vercel.app/" },
  { id: 3, title: "Nexus SaaS", category: "SaaS", price: "$59", height: "h-[250px]", gradient: "from-emerald-500/20 to-teal-500/20", previewUrl: "https://food-pearl-rho.vercel.app/" },
  { id: 4, title: "Orbit Portfolio", category: "Portfolio", price: "$29", height: "h-[350px]", gradient: "from-orange-500/20 to-red-500/20", previewUrl: "#" },
  { id: 5, title: "Crypto Grid", category: "Web3", price: "$69", height: "h-[450px]", gradient: "from-indigo-500/20 to-cyan-500/20", previewUrl: "#" },
  { id: 6, title: "Zenith Shop", category: "E-commerce", price: "$55", height: "h-[300px]", gradient: "from-violet-500/20 to-fuchsia-500/20", previewUrl: "#" },
];

export function CategoryListing() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("none"); // none, az, priceAsc, priceDesc
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [dbTemplates, setDbTemplates] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  const { t } = useTranslation();

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortBy]);

  // Fetch templates from database
  useEffect(() => {
    supabase.from('templates').select('*').order('sort_order', { ascending: false }).order('id', { ascending: false }).then(({data}) => {
      if(data && data.length > 0) setDbTemplates(data);
    });
  }, []);

  const displayTemplates = dbTemplates.length > 0 ? dbTemplates : TEMPLATES;

  const CATEGORIES = ["All", "Landing", "Dashboard", "SaaS", "Portfolio", "Web3", "E-commerce"];

  let filteredTemplates = displayTemplates.filter(
    (template) => 
      (activeCategory === "All" || template.category === activeCategory) &&
      template.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortBy === "az") {
    filteredTemplates.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "priceAsc") {
    filteredTemplates.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
  } else if (sortBy === "priceDesc") {
    filteredTemplates.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
  }

  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE);
  const paginatedTemplates = filteredTemplates.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = 1;
    let endPage = Math.min(totalPages, 3);

    if (currentPage > 2 && currentPage < totalPages) {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    } else if (currentPage >= totalPages && totalPages > 2) {
      startPage = totalPages - 2;
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button 
          key={i} 
          onClick={() => setCurrentPage(i)}
          className={`w-10 h-10 rounded-full font-bold transition-all flex items-center justify-center ${currentPage === i ? 'bg-neon-cyan text-black shadow-lg shadow-neon-cyan/20 scale-110' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <section className="relative w-full min-h-screen py-16 md:py-24 px-4 md:px-6 z-10 bg-gray-50/80 dark:bg-deep-void/80 backdrop-blur-3xl border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-display font-bold text-black dark:text-white">{t.exploreTemplates}</h2>
            <p className="text-gray-600 dark:text-muted-foreground font-sans">{t.curatedDesigns}</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="glass-panel flex items-center gap-2 px-4 py-2 rounded-full flex-1 md:w-64">
              <Search className="w-4 h-4 text-gray-500 dark:text-white/50" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder || "Search templates..."} 
                className="bg-transparent border-none outline-none text-sm w-full text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-white/30 font-sans"
              />
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="glass-panel px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center gap-2 text-sm text-black dark:text-white"
              >
                <Filter className="w-4 h-4" /> Sort
              </button>
              
              {showSortDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-xl glass-panel bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg p-2 z-50 flex flex-col gap-1">
                  <button onClick={() => { setSortBy("az"); setShowSortDropdown(false); }} className="text-left px-3 py-2 text-sm rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white flex items-center gap-2">
                    <ArrowDownAZ className="w-4 h-4" /> A-Z
                  </button>
                  <button onClick={() => { setSortBy("priceAsc"); setShowSortDropdown(false); }} className="text-left px-3 py-2 text-sm rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Low to High
                  </button>
                  <button onClick={() => { setSortBy("priceDesc"); setShowSortDropdown(false); }} className="text-left px-3 py-2 text-sm rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white flex items-center gap-2">
                    <TrendingDown className="w-4 h-4" /> High to Low
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                  : "glass-panel text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              {cat === "All" ? t.all : cat}
            </button>
          ))}
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {paginatedTemplates.map((template) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={template.id}
                className={`relative group overflow-hidden rounded-2xl glass-panel h-[420px] hover:scale-[1.02] transition-transform duration-500 shadow-sm hover:shadow-xl`}
              >
                {/* Simulated Thumbnail, Image, or Live Web Iframe */}
                {template.image ? (
                  <img src={template.image} alt={template.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : template.previewUrl !== "#" ? (
                  <div className="absolute inset-0 w-full h-full bg-[#111] overflow-hidden group-hover:scale-105 transition-transform duration-700">
                    <iframe 
                      src={template.previewUrl} 
                      className="absolute top-0 left-0 w-[1400px] h-[1200px] origin-top-left pointer-events-none"
                      style={{ transform: 'scale(0.3)' }}
                      title={template.title}
                    />
                  </div>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-50 group-hover:opacity-20 transition-opacity duration-500`}></div>
                )}
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-0">
                  {/* Background gradient specifically for making text readable over images/iframes */}
                  {(template.image || template.previewUrl !== "#") && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-0"></div>
                  )}
                  
                  <div className="flex justify-between items-start relative z-10">
                    <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-black/50 backdrop-blur-md text-xs font-medium border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80">
                      {template.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm font-bold border border-neon-cyan/30">
                      {template.price}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300 relative z-10 ${(template.image || template.previewUrl !== "#") ? 'text-white' : 'text-black dark:text-white'}`}>
                    {template.title}
                  </h3>
                </div>


                {/* Hover Action */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                  <a href={template.previewUrl} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-lg">
                    <ExternalLink className="w-4 h-4" />
                    Xem thử
                  </a>
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-neon-purple/50 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination UI */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {renderPageNumbers()}
            
            {(totalPages > 3 && currentPage < totalPages - 1) && (
              <span className="text-gray-400 mx-2">...</span>
            )}
            
            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-6 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors gap-1"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
