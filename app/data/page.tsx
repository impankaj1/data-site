import React, { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DataHeroSection } from "@/components/data/DataHeroSection";
import { DatasetExplorer } from "@/components/data/DatasetExplorer";
import { LiveKpiDashboard } from "@/components/data/LiveKpiDashboard";
import { DataMethodologyPipeline } from "@/components/data/DataMethodologyPipeline";
import { DataIntegrationsGrid } from "@/components/data/DataIntegrationsGrid";
import { DataSecurityCertifications } from "@/components/data/DataSecurityCertifications";
import { CtaBanner } from "@/components/home/CtaBanner";

function DatasetExplorerFallback() {
  return (
    <div className="py-16 text-center text-slate-500 dark:text-slate-400 font-mono text-xs">
      Loading Data Catalog...
    </div>
  );
}

export default function DataPlatformPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#07090E] transition-colors">
      <Navbar />
      <main className="flex-1">
        <DataHeroSection />
        <Suspense fallback={<DatasetExplorerFallback />}>
          <DatasetExplorer />
        </Suspense>
        <LiveKpiDashboard />
        <DataMethodologyPipeline />
        <DataIntegrationsGrid />
        <DataSecurityCertifications />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
