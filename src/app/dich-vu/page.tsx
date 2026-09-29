import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingServices } from "@/components/PricingServices";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { CheckCircle2, ChevronRight, MonitorSmartphone, Search, Rocket } from "lucide-react";

export const metadata = {
  title: "Dịch Vụ Thiết Kế Website Cao Cấp | NovaWeb",
  description: "Dịch vụ thiết kế website doanh nghiệp, landing page, website bán hàng chuẩn SEO, giao diện độc quyền. Cam kết bảo hành trọn đời.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-white dark:bg-deep-void">
      <FloatingOrbs />
      
      <div className="relative z-10 flex flex-col w-full h-full">
        <Navbar />
        
        {/* Services Hero */}
        <section className="pt-40 pb-20 px-6 relative max-w-7xl mx-auto w-full">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              GIẢI PHÁP SỐ TOÀN DIỆN
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Thiết Kế Website <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-blue-500 to-neon-purple">Chuẩn Tương Lai.</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Chúng tôi không chỉ tạo ra một trang web đẹp, chúng tôi xây dựng cho bạn một "cỗ máy bán hàng" 
              chuẩn SEO, tỷ lệ chuyển đổi cao và bảo hành kỹ thuật trọn đời.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a href="#bang-gia" className="px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                Xem Bảng Giá <ChevronRight className="w-5 h-5" />
              </a>
              <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-bold flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                Nhận Tư Vấn Miễn Phí
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Trust Badges */}
        <section className="py-12 border-y border-gray-100 dark:border-gray-800/50 bg-gray-50/50 dark:bg-black/20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Search className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Tối Ưu Chuẩn SEO Kỹ Thuật</h3>
                <p className="text-gray-500 text-sm">Điểm Google PageSpeed &gt; 90, thẻ Tag, Schema đầy đủ giúp web dễ dàng lên Top Google.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <MonitorSmartphone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Thiết Kế Chuẩn UI/UX</h3>
                <p className="text-gray-500 text-sm">Giao diện độc quyền tương thích mọi thiết bị (Responsive). Trải nghiệm người dùng mượt mà.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Rocket className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Tốc Độ Bàn Giao Siêu Tốc</h3>
                <p className="text-gray-500 text-sm">Quy trình chuyên nghiệp, bàn giao website Landing Page chỉ từ 3-5 ngày làm việc.</p>
              </div>
            </div>
          </div>
        </section>

        <div id="bang-gia">
          <PricingServices />
        </div>

        {/* Development Process */}
        <section className="py-24 bg-white dark:bg-deep-void">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black font-display text-gray-900 dark:text-white mb-6">Quy Trình Làm Việc <span className="text-neon-cyan">Chuyên Nghiệp</span></h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Minh bạch trong từng giai đoạn, đảm bảo tiến độ và chất lượng tuyệt đối.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Tư vấn & Báo giá", desc: "Lắng nghe nhu cầu, tư vấn giải pháp tối ưu và báo giá chi tiết." },
                { step: "02", title: "Thiết kế UI/UX", desc: "Phác thảo giao diện độc quyền dựa trên nhận diện thương hiệu." },
                { step: "03", title: "Lập trình", desc: "Chuyển đổi bản thiết kế thành code thực tế, tối ưu tốc độ." },
                { step: "04", title: "Kiểm thử (QA)", desc: "Kiểm tra kỹ lưỡng trên các thiết bị, trình duyệt và fix lỗi." },
                { step: "05", title: "Bàn giao & HD", desc: "Bàn giao mã nguồn, hướng dẫn quản trị và kích hoạt bảo hành." }
              ].map((process, idx) => (
                <div key={idx} className="relative p-6 rounded-3xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/10 group hover:border-neon-cyan/50 transition-colors">
                  <div className="text-6xl font-black text-gray-200 dark:text-white/5 absolute top-4 right-4 pointer-events-none group-hover:text-neon-cyan/20 transition-colors">
                    {process.step}
                  </div>
                  <div className="relative z-10 mt-8">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{process.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
