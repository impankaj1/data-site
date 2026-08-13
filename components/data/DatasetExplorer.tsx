"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { FEATURED_DATASETS } from "@/constants/industries";
import { IndustryCategory, DatasetItem } from "@/types/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Search, FileSpreadsheet, Download, Sparkles } from "lucide-react";
import { RequestDataModal } from "./RequestDataModal";

export function DatasetExplorer() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as IndustryCategory || IndustryCategory.ALL;
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState<IndustryCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [previewDataset, setPreviewDataset] = useState<DatasetItem | null>(null);
  const [requestDatasetTitle, setRequestDatasetTitle] = useState<string | null>(null);

  const categoriesList = [
    { label: "All Datasets", val: IndustryCategory.ALL },
    { label: "AI & Technology", val: IndustryCategory.TECHNOLOGY },
    { label: "Finance & Banking", val: IndustryCategory.FINANCE },
    { label: "Healthcare & Bio", val: IndustryCategory.HEALTHCARE },
    { label: "Clean Energy", val: IndustryCategory.ENERGY },
    { label: "Retail & E-Commerce", val: IndustryCategory.RETAIL },
    { label: "Manufacturing", val: IndustryCategory.MANUFACTURING },
  ];

  const filteredDatasets = useMemo(() => {
    return FEATURED_DATASETS.filter((item) => {
      const matchesCategory =
        selectedCategory === IndustryCategory.ALL || item.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.formats.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="explorer" className="py-16 bg-slate-50 dark:bg-[#07090E] relative transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Controls Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-[#0B0F17] p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search by dataset title, code, region, or file format (e.g. Parquet, Snowflake)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-100 dark:bg-slate-900/90 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 pl-10 text-xs sm:text-sm focus:border-cyan-500 rounded-xl"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {categoriesList.map((cat) => (
              <button
                key={cat.val}
                onClick={() => setSelectedCategory(cat.val)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.val
                    ? "bg-cyan-600 dark:bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
          <span>Showing {filteredDatasets.length} Verified Industry Datasets</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* Datasets Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDatasets.map((ds) => (
            <div
              key={ds.id}
              className="data-card-glow glass-panel rounded-2xl p-6 border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-cyan-100 dark:bg-cyan-950 border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-300 text-[11px] font-mono">
                    {ds.code}
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-100 dark:bg-slate-900 text-emerald-800 dark:text-emerald-400 border-emerald-300 dark:border-slate-700 text-[11px]">
                    {ds.riskRating}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                  {ds.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {ds.description}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                  <div className="bg-slate-100 dark:bg-[#0A0E17] p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 text-[10px]">Market Size</span>
                    <div className="font-bold text-cyan-600 dark:text-cyan-400">{ds.marketSizeUsd}</div>
                  </div>
                  <div className="bg-slate-100 dark:bg-[#0A0E17] p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 text-[10px]">CAGR</span>
                    <div className="font-bold text-emerald-600 dark:text-emerald-400">{ds.cagrGrowth}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {ds.formats.map((fmt, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-700 dark:text-slate-300"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setPreviewDataset(ds)}
                  className="w-1/2 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 text-xs gap-1.5"
                >
                  <FileSpreadsheet className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                  Preview
                </Button>

                <Button
                  size="sm"
                  onClick={() => setRequestDatasetTitle(ds.title)}
                  className="w-1/2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs gap-1 font-medium"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Get Access
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dataset Telemetry Preview Modal */}
      {previewDataset && (
        <Dialog open={!!previewDataset} onOpenChange={() => setPreviewDataset(null)}>
          <DialogContent className="sm:max-w-[680px] bg-white dark:bg-[#0B0F17] border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 p-6 rounded-2xl shadow-2xl">
            <DialogHeader className="text-left space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-cyan-100 dark:bg-cyan-950 border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-cyan-300 font-mono">
                  {previewDataset.code}
                </Badge>
                <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                  {previewDataset.region}
                </Badge>
              </div>
              <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                {previewDataset.title}
              </DialogTitle>
              <DialogDescription className="text-slate-600 dark:text-slate-400 text-xs">
                {previewDataset.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-2">
              <div className="bg-slate-50 dark:bg-[#06080E] p-4 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-200/70 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-b border-slate-300 dark:border-slate-800 uppercase">
                    <tr>
                      {Object.keys(previewDataset.sampleRowsPreview[0]).map((col, i) => (
                        <th key={i} className="px-3 py-2">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60">
                    {previewDataset.sampleRowsPreview.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-200/50 dark:hover:bg-slate-900/40">
                        {Object.values(row).map((val, colIdx) => (
                          <td key={colIdx} className="px-3 py-2 text-slate-800 dark:text-slate-200">
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
                <span>Update Stream: {previewDataset.updateFrequency}</span>
                <span>Records: {previewDataset.recordsCount}</span>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <Button
                variant="outline"
                onClick={() => setPreviewDataset(null)}
                className="w-1/3 border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  const title = previewDataset.title;
                  setPreviewDataset(null);
                  setRequestDatasetTitle(title);
                }}
                className="w-2/3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium gap-2"
              >
                <Download className="h-4 w-4" />
                Request Full Dataset Export
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Shared Access Request Modal */}
      {requestDatasetTitle && (
        <RequestDataModal
          isOpen={!!requestDatasetTitle}
          onClose={() => setRequestDatasetTitle(null)}
          defaultDatasetTitle={requestDatasetTitle}
        />
      )}
    </section>
  );
}
