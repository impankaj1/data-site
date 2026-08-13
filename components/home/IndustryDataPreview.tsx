"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FEATURED_DATASETS } from "@/constants/industries";
import { IndustryCategory } from "@/types/data";
import { TrendingUp, Download, ArrowRight, FileSpreadsheet } from "lucide-react";
import { RequestDataModal } from "@/components/data/RequestDataModal";

export function IndustryDataPreview() {
  const [selectedModalDataset, setSelectedModalDataset] = useState<string | null>(null);

  const activeCategories = [
    { label: "AI & Compute", category: IndustryCategory.TECHNOLOGY },
    { label: "FinTech & Payments", category: IndustryCategory.FINANCE },
    { label: "Biopharma & Health", category: IndustryCategory.HEALTHCARE },
    { label: "Clean Energy Grid", category: IndustryCategory.ENERGY },
  ];

  return (
    <section id="industries" className="py-20 bg-slate-100 dark:bg-[#090C13] border-y border-slate-200 dark:border-slate-800/80 relative transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
              INTERACTIVE DATA CATALOG PREVIEW
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore Live Sector Datasets & Market Forecasts
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Preview verified data points, sample telemetry schemas, and growth indices directly from our platform before subscribing.
            </p>
          </div>

          <Link href="/data#explorer">
            <Button variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white gap-2 font-medium">
              <span>View Full 5,000+ Datasets</span>
              <ArrowRight className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            </Button>
          </Link>
        </div>

        {/* Tabs Component */}
        <Tabs defaultValue={IndustryCategory.TECHNOLOGY} className="w-full space-y-8">
          <TabsList className="bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-slate-800 p-1.5 rounded-xl flex flex-wrap justify-start gap-1 shadow-sm">
            {activeCategories.map((tab) => (
              <TabsTrigger
                key={tab.category}
                value={tab.category}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white text-slate-600 dark:text-slate-400 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {activeCategories.map((tab) => {
            const dataset = FEATURED_DATASETS.find((d) => d.category === tab.category) || FEATURED_DATASETS[0];

            return (
              <TabsContent key={tab.category} value={tab.category} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel p-6 sm:p-8 rounded-2xl border-slate-200 dark:border-slate-800">
                  {/* Left Column: Overview & Metrics */}
                  <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-cyan-100 dark:bg-cyan-950 border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-300 text-xs">
                          Code: {dataset.code}
                        </Badge>
                        <Badge variant="outline" className="bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs">
                          {dataset.region}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                        {dataset.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {dataset.description}
                      </p>

                      {/* Highlighted Stat Cards */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="bg-slate-50 dark:bg-[#0A0E17] p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 space-y-1">
                          <span className="text-xs text-slate-500 font-mono">Market Valuation</span>
                          <div className="text-xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                            {dataset.marketSizeUsd}
                          </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-[#0A0E17] p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 space-y-1">
                          <span className="text-xs text-slate-500 font-mono">5-Yr CAGR Growth</span>
                          <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1">
                            <TrendingUp className="h-4 w-4" />
                            {dataset.cagrGrowth}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-3">
                      <Button
                        onClick={() => setSelectedModalDataset(dataset.title)}
                        className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white gap-2 font-medium text-xs sm:text-sm"
                      >
                        <Download className="h-4 w-4" />
                        Download Sample Data
                      </Button>

                      <Link href={`/data?category=${dataset.category}#explorer`}>
                        <Button variant="ghost" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs sm:text-sm">
                          Full Schema Details
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Sample Data Table Preview */}
                  <div className="lg:col-span-7 bg-slate-50 dark:bg-[#06080E] p-5 rounded-xl border border-slate-200 dark:border-slate-800/90 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                        <FileSpreadsheet className="h-4 w-4" />
                        <span>SAMPLE TELEMETRY ROWS PREVIEW</span>
                      </div>
                      <Badge variant="outline" className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[10px]">
                        {dataset.recordsCount}
                      </Badge>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300 font-mono">
                        <thead className="bg-slate-200/80 dark:bg-slate-900/90 text-slate-600 dark:text-slate-400 border-b border-slate-300 dark:border-slate-800 uppercase tracking-wider">
                          <tr>
                            {Object.keys(dataset.sampleRowsPreview[0]).map((key, i) => (
                              <th key={i} className="px-3 py-2.5 font-semibold">
                                {key}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60">
                          {dataset.sampleRowsPreview.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-200/40 dark:hover:bg-slate-900/40 transition-colors">
                              {Object.values(row).map((val, colIdx) => (
                                <td key={colIdx} className="px-3 py-2.5 text-slate-800 dark:text-slate-200">
                                  {val}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200 dark:border-slate-800/60 font-mono">
                      <span>Update Frequency: {dataset.updateFrequency}</span>
                      <span>Formats: {dataset.formats.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      {/* Modal Trigger for Sample Downloads */}
      {selectedModalDataset && (
        <RequestDataModal
          isOpen={!!selectedModalDataset}
          onClose={() => setSelectedModalDataset(null)}
          defaultDatasetTitle={selectedModalDataset}
        />
      )}
    </section>
  );
}
