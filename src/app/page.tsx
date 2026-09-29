import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryListing } from "@/components/CategoryListing";
import { Features } from "@/components/Features";
import { PricingServices } from "@/components/PricingServices";
import { Footer } from "@/components/Footer";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { AIConsultation } from "@/components/AIConsultation";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-white dark:bg-deep-void">
      {/* Background Orbs */}
      <FloatingOrbs />
      
      {/* Overlay for z-index management */}
      <div className="relative z-10 flex flex-col w-full h-full">
        <Navbar />
        <Hero />
        <CategoryListing />
        <Features />
        <AIConsultation />
        <PricingServices />
        <Footer />
      </div>
    </main>
  );
}
