"use client";

import { useState, useEffect } from "react";
import { Plus, LayoutGrid, Settings, Search, Edit2, Trash2, ArrowRight, Loader2, GripVertical, Lock, KeyRound } from "lucide-react";
import { Reorder } from "framer-motion";
import { supabase } from "@/lib/supabase";

type Template = {
  id: number;
  title: string;
  category: string;
  price: string;
  height: string;
  gradient: string;
  previewUrl: string;
  sort_order: number;
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("templates");
  const [showAddModal, setShowAddModal] = useState(false);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Landing");
  const [price, setPrice] = useState("$49");
  const [previewUrl, setPreviewUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    // Check session storage on mount
    const auth = sessionStorage.getItem('nova_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchTemplates();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "2002Luyen!") {
      setIsAuthenticated(true);
      sessionStorage.setItem('nova_admin_auth', 'true');
      fetchTemplates();
    } else {
      setLoginError("Mật khẩu không chính xác!");
    }
  };

  async function fetchTemplates() {
    setLoading(true);
    const { data, error } = await supabase.from('templates').select('*').order('sort_order', { ascending: false }).order('id', { ascending: false });
    if (error) {
      console.error("Error fetching templates:", error);
    } else {
      setTemplates(data || []);
    }
    setLoading(false);
  }

  async function handleAddTemplate() {
    if (!title || !previewUrl) {
      alert("Vui lòng nhập Tên và Link Vercel!");
      return;
    }
    
    setIsSubmitting(true);
    // Random height and gradient for UI aesthetics
    const heights = ["h-[300px]", "h-[400px]", "h-[250px]", "h-[350px]"];
    const gradients = ["from-orange-500/20 to-red-500/20", "from-pink-500/20 to-rose-500/20", "from-emerald-500/20 to-teal-500/20", "from-blue-500/20 to-purple-500/20"];
    
    const randomHeight = heights[Math.floor(Math.random() * heights.length)];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    
    // Calculate a new sort_order (max + 1)
    const maxSortOrder = templates.length > 0 ? Math.max(...templates.map(t => t.sort_order || 0)) : 0;

    const { data, error } = await supabase
      .from('templates')
      .insert([
        { title, category, price, height: randomHeight, gradient: randomGradient, previewUrl, sort_order: maxSortOrder + 1 }
      ])
      .select();

    setIsSubmitting(false);

    if (error) {
      console.error("Error inserting:", error);
      alert("Có lỗi xảy ra khi lưu: " + error.message);
    } else {
      setShowAddModal(false);
      setTitle("");
      setPreviewUrl("");
      fetchTemplates(); // Refresh list
    }
  }

  async function handleDelete(id: number) {
    if(confirm("Bạn có chắc chắn muốn xóa giao diện này không?")) {
      await supabase.from('templates').delete().eq('id', id);
      fetchTemplates();
    }
  }

  async function handleReorder(newOrder: Template[]) {
    // Optimistic UI update
    setTemplates(newOrder);

    // Database update in background
    newOrder.forEach((tpl, index) => {
      const newSortOrder = newOrder.length - index;
      if (tpl.sort_order !== newSortOrder) {
        supabase.from('templates').update({ sort_order: newSortOrder }).eq('id', tpl.id).then();
      }
    });
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#050505] p-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        
        <div className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-neon-cyan to-neon-purple flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-black text-center text-gray-900 dark:text-white mb-2 font-display">Khu Vực Quản Trị</h2>
          <p className="text-gray-500 text-center text-sm mb-8">Vui lòng nhập mật khẩu để truy cập hệ thống</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <KeyRound className="w-5 h-5 text-gray-400" />
                </div>
                <input 
                  type="password" 
                  value={passwordInput}
                  onChange={(e) => {setPasswordInput(e.target.value); setLoginError("")}}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-black/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-neon-cyan text-gray-900 dark:text-white transition-colors"
                  placeholder="Nhập mật khẩu..."
                  autoFocus
                />
              </div>
              {loginError && <p className="text-red-500 text-xs mt-2 ml-1">{loginError}</p>}
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold shadow-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all active:scale-95">
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#050505]">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-gray-800 flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-black font-display tracking-tight dark:text-white">
            NOVA<span className="text-neon-cyan">ADMIN</span>
          </h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <button 
            onClick={() => setActiveTab("templates")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === "templates" ? "bg-neon-cyan text-black" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900"}`}
          >
            <LayoutGrid className="w-5 h-5" /> Kho Giao Diện
          </button>
          <button 
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === "settings" ? "bg-neon-cyan text-black" : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900"}`}
          >
            <Settings className="w-5 h-5" /> Cài đặt
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8">
          <h2 className="text-2xl font-bold dark:text-white">Quản lý Kho Giao Diện</h2>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Plus className="w-5 h-5" /> Thêm Web Mới
          </button>
        </header>

        <div className="flex-1 overflow-auto p-8">
          <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            {loading ? (
              <div className="p-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-neon-cyan" /></div>
            ) : templates.length === 0 ? (
              <div className="p-12 text-center text-gray-500">Chưa có dữ liệu nào. Hãy thêm giao diện đầu tiên!</div>
            ) : (
              <div className="w-full text-left">
                <div className="flex border-b border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider px-5 py-4">
                  <div className="w-10"></div>
                  <div className="flex-1">Tên Giao Diện</div>
                  <div className="flex-1">Danh Mục</div>
                  <div className="flex-1">Giá bán</div>
                  <div className="flex-1">Link Vercel</div>
                  <div className="w-24 text-right">Hành động</div>
                </div>
                <Reorder.Group axis="y" values={templates} onReorder={handleReorder} className="w-full">
                  {templates.map((tpl) => (
                    <Reorder.Item key={tpl.id} value={tpl} className="flex items-center border-b border-gray-100 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors px-5 py-4 bg-white dark:bg-[#0a0a0a] cursor-grab active:cursor-grabbing">
                      <div className="w-10 text-gray-400">
                        <GripVertical className="w-5 h-5" />
                      </div>
                      <div className="flex-1 font-bold dark:text-white">{tpl.title}</div>
                      <div className="flex-1">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-xs font-bold">{tpl.category}</span>
                      </div>
                      <div className="flex-1 font-bold text-green-600 dark:text-green-400">{tpl.price}</div>
                      <div className="flex-1 text-gray-500 text-sm truncate pr-4">{tpl.previewUrl}</div>
                      <div className="w-24 text-right">
                        <button onClick={() => handleDelete(tpl.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
              <h3 className="text-2xl font-bold dark:text-white">Thêm Giao Diện Mới</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-white text-2xl font-light">&times;</button>
            </div>
            
            <div className="p-6 space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Tên Giao Diện (Tiêu đề)</label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="VD: Nhà hàng BBQ..." className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none dark:text-white transition-all" />
              </div>
              
              <div className="flex gap-5">
                <div className="space-y-2 flex-1">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Danh Mục</label>
                  <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 focus:border-neon-cyan outline-none dark:text-white">
                    <option>Landing</option>
                    <option>SaaS</option>
                    <option>E-commerce</option>
                    <option>Dashboard</option>
                    <option>Portfolio</option>
                    <option>Web3</option>
                  </select>
                </div>
                <div className="space-y-2 flex-1">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Giá bán</label>
                  <input value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="VD: $49 hoặc Liên hệ" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 focus:border-neon-cyan outline-none dark:text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Link Vercel (Preview URL)</label>
                <input value={previewUrl} onChange={(e)=>setPreviewUrl(e.target.value)} type="text" placeholder="https://..." className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 focus:border-neon-cyan outline-none dark:text-white" />
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-[#111] flex justify-end gap-3">
              <button onClick={() => setShowAddModal(false)} className="px-6 py-2.5 rounded-full font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">Hủy</button>
              <button onClick={handleAddTemplate} disabled={isSubmitting} className="px-6 py-2.5 rounded-full font-bold bg-neon-cyan text-black flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50">
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Lưu vào Database"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
