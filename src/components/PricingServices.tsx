"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Code2, HeadphonesIcon, Sparkles } from "lucide-react";

const COMMITMENTS = [
  { icon: ShieldCheck, title: "Bảo Hành Trọn Đời", desc: "Khắc phục miễn phí 100% các lỗi phát sinh do mã nguồn." },
  { icon: Zap, title: "Tối Ưu SEO & Tốc Độ", desc: "Điểm Google PageSpeed cam kết > 90, lên top dễ dàng." },
  { icon: Code2, title: "Mã Nguồn Độc Lập", desc: "Bàn giao toàn bộ mã nguồn, bạn làm chủ 100% tài sản số." },
  { icon: HeadphonesIcon, title: "Hỗ Trợ 24/7", desc: "Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ bất cứ khi nào bạn cần." },
];

export function PricingServices() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-deep-void">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-neon-purple" />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">Bảng Giá Dịch Vụ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-display text-gray-900 dark:text-white mb-6"
          >
            Đầu Tư Một Lần - <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Lợi Ích Trọn Đời</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Cam kết mang lại giải pháp thiết kế website tối ưu nhất cho ngân sách của bạn với chất lượng Pro Max.
          </motion.p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="w-1/4 p-8 border-b border-r border-gray-100 dark:border-gray-800 align-top">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Hạng Mục</span>
                </th>
                <th className="w-1/4 p-8 border-b border-r border-gray-100 dark:border-gray-800 align-top bg-gray-50/30 dark:bg-black/20">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Landing Page</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold">KHỞI ĐỘNG NHANH</span>
                </th>
                <th className="w-1/4 p-8 border-b border-r border-gray-100 dark:border-gray-800 align-top relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-blue-500"></div>
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-neon-cyan/5 pointer-events-none"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">Website Doanh Nghiệp <Sparkles className="w-5 h-5 text-neon-cyan"/></h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-neon-cyan text-black text-xs font-bold">ĐỀ XUẤT</span>
                </th>
                <th className="w-1/4 p-8 border-b border-gray-100 dark:border-gray-800 align-top bg-gray-50/30 dark:bg-black/20">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Website Bán Hàng</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold">TĂNG TRƯỞNG</span>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {/* Row 1: Giá */}
              <tr>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300">Giá từ</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-black/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400 line-through text-sm">3.000.000đ</span>
                    <span className="text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded text-xs font-bold">TIẾT KIỆM 37%</span>
                  </div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">1.888.000đ</div>
                  <div className="text-gray-500 text-xs">Giá ưu đãi theo phạm vi</div>
                </td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 relative">
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-neon-cyan/5 pointer-events-none"></div>
                  <div className="flex items-center gap-2 mb-1 relative z-10">
                    <span className="text-gray-400 line-through text-sm">8.000.000đ</span>
                    <span className="text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 rounded text-xs font-bold">TIẾT KIỆM 38%</span>
                  </div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1 relative z-10">5.000.000đ</div>
                  <div className="text-gray-500 text-xs relative z-10">Giá ưu đãi theo phạm vi</div>
                </td>
                <td className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-black/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400 line-through text-sm">15.000.000đ</span>
                    <span className="text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded text-xs font-bold">TIẾT KIỆM 33%</span>
                  </div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">10.000.000đ</div>
                  <div className="text-gray-500 text-xs">Giá ưu đãi theo phạm vi</div>
                </td>
              </tr>
              {/* Row 2: Thời gian */}
              <tr>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300">Thời gian</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20">3-5 ngày</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 relative">
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-neon-cyan/5 pointer-events-none"></div>
                  <span className="relative z-10">7-14 ngày</span>
                </td>
                <td className="p-6 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20">3-4 tuần</td>
              </tr>
              {/* Row 3: Phù hợp */}
              <tr>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300">Phù hợp</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20">Chiến dịch, giới thiệu dịch vụ, form tư vấn</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 relative">
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-neon-cyan/5 pointer-events-none"></div>
                  <span className="relative z-10">Công ty, portfolio, dịch vụ cần SEO bền</span>
                </td>
                <td className="p-6 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20">Shop, catalog sản phẩm, bán hàng online</td>
              </tr>
              {/* Row 4: Giao diện */}
              <tr>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300">Giao diện</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20"><Check className="inline-block w-4 h-4 text-blue-500 mr-2"/>1 giao diện responsive</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 relative">
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-neon-cyan/5 pointer-events-none"></div>
                  <span className="relative z-10"><Check className="inline-block w-4 h-4 text-neon-cyan mr-2"/>UI/UX theo thương hiệu</span>
                </td>
                <td className="p-6 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20"><Check className="inline-block w-4 h-4 text-blue-500 mr-2"/>Giao diện bán hàng riêng</td>
              </tr>
              {/* Row 5: SEO */}
              <tr>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300">SEO</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20"><Check className="inline-block w-4 h-4 text-blue-500 mr-2"/>SEO nền tảng</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 relative">
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-neon-cyan/5 pointer-events-none"></div>
                  <span className="relative z-10"><Check className="inline-block w-4 h-4 text-neon-cyan mr-2"/>SEO on-page nâng cao</span>
                </td>
                <td className="p-6 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20"><Check className="inline-block w-4 h-4 text-blue-500 mr-2"/>Schema sản phẩm</td>
              </tr>
              {/* Row 6: Quản trị */}
              <tr>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300">Quản trị</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20"><Check className="inline-block w-4 h-4 text-blue-500 mr-2"/>Form liên hệ</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 relative">
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-neon-cyan/5 pointer-events-none"></div>
                  <span className="relative z-10"><Check className="inline-block w-4 h-4 text-neon-cyan mr-2"/>CMS dễ cập nhật</span>
                </td>
                <td className="p-6 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20"><Check className="inline-block w-4 h-4 text-blue-500 mr-2"/>Quản lý sản phẩm / đơn hàng</td>
              </tr>
              {/* Row 7: Đo lường */}
              <tr>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300">Đo lường</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20"><Check className="inline-block w-4 h-4 text-blue-500 mr-2"/>GA4 + Pixel cơ bản</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 relative">
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-neon-cyan/5 pointer-events-none"></div>
                  <span className="relative z-10"><Check className="inline-block w-4 h-4 text-neon-cyan mr-2"/>GA4, Search Console, sitemap</span>
                </td>
                <td className="p-6 border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-50/30 dark:bg-black/20"><Check className="inline-block w-4 h-4 text-blue-500 mr-2"/>Theo dõi chuyển đổi</td>
              </tr>
              {/* Row 8: Hỗ trợ */}
              <tr>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300">Hỗ trợ</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 bg-blue-50/50 dark:bg-blue-900/10 text-gray-700 dark:text-gray-300"><Check className="inline-block w-4 h-4 text-blue-500 mr-2"/>Bảo hành 5 năm + Bảo hành trọn đời với lỗi từ NovaWeb</td>
                <td className="p-6 border-b border-r border-gray-100 dark:border-gray-800 bg-blue-50/50 dark:bg-blue-900/10 text-gray-700 dark:text-gray-300 relative">
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-neon-cyan/5 pointer-events-none"></div>
                  <span className="relative z-10"><Check className="inline-block w-4 h-4 text-neon-cyan mr-2"/>Bảo hành 5 năm + Bảo hành trọn đời với lỗi từ NovaWeb</span>
                </td>
                <td className="p-6 border-b border-gray-100 dark:border-gray-800 bg-blue-50/50 dark:bg-blue-900/10 text-gray-700 dark:text-gray-300"><Check className="inline-block w-4 h-4 text-blue-500 mr-2"/>Bảo hành 5 năm + Bảo hành trọn đời với lỗi từ NovaWeb</td>
              </tr>
              {/* Row 9: Điểm nổi bật & Buttons */}
              <tr>
                <td className="p-6 border-r border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300">Điểm nổi bật</td>
                <td className="p-6 border-r border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-black/20 text-center">
                  <div className="text-blue-500 font-bold mb-6 flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5"/> Tặng hosting 1 năm
                  </div>
                  <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="block w-full py-4 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold transition-colors">
                    Nhận báo giá Landing
                  </a>
                </td>
                <td className="p-6 border-r border-gray-100 dark:border-gray-800 relative text-center">
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-neon-cyan/5 pointer-events-none"></div>
                  <div className="relative z-10 text-neon-cyan font-bold mb-6 flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5"/> CMS quản trị nội dung
                  </div>
                  <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="relative z-10 block w-full py-4 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold transition-colors shadow-lg shadow-blue-500/20">
                    Tư vấn gói doanh nghiệp
                  </a>
                </td>
                <td className="p-6 bg-gray-50/30 dark:bg-black/20 text-center">
                  <div className="text-blue-500 font-bold mb-6 flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5"/> Giỏ hàng + thanh toán
                  </div>
                  <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="block w-full py-4 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold transition-colors">
                    Xây web bán hàng
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile View: Stacked Cards (Hidden on Desktop) */}
        <div className="lg:hidden space-y-8">
          {[
            {
              title: "Landing Page",
              badge: "KHỞI ĐỘNG NHANH",
              oldPrice: "3.000.000đ",
              savings: "37%",
              price: "1.888.000đ",
              time: "3-5 ngày",
              suitability: "Chiến dịch, giới thiệu dịch vụ, form tư vấn",
              ui: "1 giao diện responsive",
              seo: "SEO nền tảng",
              admin: "Form liên hệ",
              metrics: "GA4 + Pixel cơ bản",
              support: "Bảo hành 5 năm + Bảo hành trọn đời với lỗi từ NovaWeb",
              highlight: "Tặng hosting 1 năm",
              button: "Nhận báo giá Landing",
              isPopular: false,
              btnClass: "bg-[#0f172a] text-white"
            },
            {
              title: "Website Doanh Nghiệp",
              badge: "ĐỀ XUẤT",
              oldPrice: "8.000.000đ",
              savings: "38%",
              price: "5.000.000đ",
              time: "7-14 ngày",
              suitability: "Công ty, portfolio, dịch vụ cần SEO bền",
              ui: "UI/UX theo thương hiệu",
              seo: "SEO on-page nâng cao",
              admin: "CMS dễ cập nhật",
              metrics: "GA4, Search Console, sitemap",
              support: "Bảo hành 5 năm + Bảo hành trọn đời với lỗi từ NovaWeb",
              highlight: "CMS quản trị nội dung",
              button: "Tư vấn gói doanh nghiệp",
              isPopular: true,
              btnClass: "bg-[#0ea5e9] text-white shadow-lg shadow-blue-500/30"
            },
            {
              title: "Website Bán Hàng",
              badge: "TĂNG TRƯỞNG",
              oldPrice: "15.000.000đ",
              savings: "33%",
              price: "10.000.000đ",
              time: "3-4 tuần",
              suitability: "Shop, catalog sản phẩm, bán hàng online",
              ui: "Giao diện bán hàng riêng",
              seo: "Schema sản phẩm",
              admin: "Quản lý sản phẩm / đơn hàng",
              metrics: "Theo dõi chuyển đổi",
              support: "Bảo hành 5 năm + Bảo hành trọn đời với lỗi từ NovaWeb",
              highlight: "Giỏ hàng + thanh toán",
              button: "Xây web bán hàng",
              isPopular: false,
              btnClass: "bg-[#0f172a] text-white"
            }
          ].map((plan, idx) => (
            <div key={idx} className={`rounded-3xl p-6 border ${plan.isPopular ? 'border-neon-cyan shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-blue-500/5 dark:bg-neon-cyan/5 relative' : 'border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#0A0A0A]/80'}`}>
              {plan.isPopular && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-blue-500 rounded-t-3xl"></div>}
              
              <div className="flex justify-between items-start mb-4 mt-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  {plan.title} {plan.isPopular && <Sparkles className="w-5 h-5 text-neon-cyan" />}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${plan.isPopular ? 'bg-neon-cyan text-black' : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}>
                  {plan.badge}
                </span>
              </div>
              
              <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-400 line-through text-sm">{plan.oldPrice}</span>
                  <span className={`${plan.isPopular ? 'text-neon-cyan bg-neon-cyan/10' : 'text-blue-500 bg-blue-100 dark:bg-blue-900/30'} px-2 py-0.5 rounded text-xs font-bold`}>
                    TIẾT KIỆM {plan.savings}
                  </span>
                </div>
                <div className="text-4xl font-black text-gray-900 dark:text-white mb-1">{plan.price}</div>
                <div className="text-gray-500 text-sm">Giá ưu đãi theo phạm vi</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3"><span className="font-semibold w-24 text-gray-900 dark:text-white">Thời gian:</span> <span className="text-gray-600 dark:text-gray-400 flex-1">{plan.time}</span></div>
                <div className="flex gap-3"><span className="font-semibold w-24 text-gray-900 dark:text-white">Phù hợp:</span> <span className="text-gray-600 dark:text-gray-400 flex-1">{plan.suitability}</span></div>
                <div className="flex gap-3"><span className="font-semibold w-24 text-gray-900 dark:text-white">Giao diện:</span> <span className="text-gray-600 dark:text-gray-400 flex-1">{plan.ui}</span></div>
                <div className="flex gap-3"><span className="font-semibold w-24 text-gray-900 dark:text-white">SEO:</span> <span className="text-gray-600 dark:text-gray-400 flex-1">{plan.seo}</span></div>
                <div className="flex gap-3"><span className="font-semibold w-24 text-gray-900 dark:text-white">Quản trị:</span> <span className="text-gray-600 dark:text-gray-400 flex-1">{plan.admin}</span></div>
                <div className="flex gap-3"><span className="font-semibold w-24 text-gray-900 dark:text-white">Đo lường:</span> <span className="text-gray-600 dark:text-gray-400 flex-1">{plan.metrics}</span></div>
                <div className="flex gap-3"><span className="font-semibold w-24 text-gray-900 dark:text-white">Hỗ trợ:</span> <span className="text-gray-600 dark:text-gray-400 flex-1 bg-blue-50/50 dark:bg-blue-900/10 p-2 rounded">{plan.support}</span></div>
              </div>

              <div className="text-center mb-6">
                <div className={`${plan.isPopular ? 'text-neon-cyan' : 'text-blue-500'} font-bold flex items-center justify-center gap-2`}>
                  <Zap className="w-5 h-5"/> {plan.highlight}
                </div>
              </div>

              <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className={`block w-full py-4 rounded-xl text-center font-bold transition-colors ${plan.btnClass}`}>
                {plan.button}
              </a>
            </div>
          ))}
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {COMMITMENTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-panel border border-black/5 dark:border-white/5 hover:border-neon-cyan/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-neon-cyan/20 to-blue-500/20 flex items-center justify-center mb-4 text-neon-cyan group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
