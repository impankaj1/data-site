import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { IndustryDataPreview } from "@/components/home/IndustryDataPreview";
import { GlobalReachSection } from "@/components/home/GlobalReachSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#07090E] transition-colors">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustMarquee />
        <SolutionsGrid />
        <IndustryDataPreview />
        <GlobalReachSection />
        <TestimonialsSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
