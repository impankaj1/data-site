import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultancyHero } from "@/components/consultancy/ConsultancyHero";
import { ConsultancyPhilosophy } from "@/components/consultancy/ConsultancyPhilosophy";
import { ConsultancyOfferings } from "@/components/consultancy/ConsultancyOfferings";
import { WhyChooseConsultancy } from "@/components/consultancy/WhyChooseConsultancy";
import { EngagementModel } from "@/components/consultancy/EngagementModel";
import { WhoWeServe } from "@/components/consultancy/WhoWeServe";
import { CaseStudies } from "@/components/consultancy/CaseStudies";
import { MeetOurConsultants } from "@/components/consultancy/MeetOurConsultants";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Business Consultancy | Shine Global Solutions",
  description: "Bridge the gap between raw information and decisive business strategic action. Explore our Go-to-Market, competitive intelligence, M&A due diligence, and supply chain risk advisory offerings.",
  keywords: ["Business Consultancy", "Strategic Advisory", "Go-to-Market Strategy", "Competitive Intelligence", "M&A Due Diligence", "Supply Chain Risk"],
};

export default function ConsultancyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#07090E] transition-colors">
      <Navbar />
      <main className="flex-1">
        <ConsultancyHero />
        <ConsultancyPhilosophy />
        <ConsultancyOfferings />
        <WhyChooseConsultancy />
        <EngagementModel />
        <WhoWeServe />
        <CaseStudies />
        <MeetOurConsultants />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
