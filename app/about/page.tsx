import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutDualCore } from "@/components/about/AboutDualCore";
import { AboutWhatWeDo } from "@/components/about/AboutWhatWeDo";
import { AboutWhyChoose } from "@/components/about/AboutWhyChoose";
import { AboutMissionVision } from "@/components/about/AboutMissionVision";
import { AboutWhoWeServe } from "@/components/about/AboutWhoWeServe";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Shine Global Solutions",
  description: "Learn more about Shine Global Solutions, a premier market intelligence and strategic consulting firm operating at the intersection of high-quality data and business insights.",
  keywords: ["About Us", "Shine Global Solutions", "Market Intelligence", "Strategic Consulting", "Proprietary Data Platform"],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#07090E] transition-colors">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <AboutDualCore />
        <AboutWhatWeDo />
        <AboutWhyChoose />
        <AboutMissionVision />
        <AboutWhoWeServe />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
