"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Globe2, MapPin } from "lucide-react";

export function GlobalReachSection() {
  const REGIONS = [
    { name: "North America", markets: "35 Markets", coverage: "US, Canada, Mexico", stat: "$1.8T Covered" },
    { name: "Europe & UK", markets: "37 Markets", coverage: "Germany, UK, France, Nordics", stat: "$1.2T Covered" },
    { name: "Asia-Pacific", markets: "28 Markets", coverage: "Japan, China, Australia, India", stat: "$950B Covered" },
    { name: "Latin America & MEA", markets: "20 Markets", coverage: "Brazil, UAE, Saudi Arabia", stat: "$250B Covered" },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#07090E] relative transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            GLOBAL COVERAGE MATRIX
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Worldwide Market Coverage Across 120+ Economies
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Our data telemetry continuously collects macroeconomic indicators, tariff changes, trade volumes, and corporate capital expenditure across all major trade hubs.
          </p>
        </div>

        {/* Global Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONS.map((reg, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Globe2 className="h-5 w-5" />
                </div>
                <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-900 text-cyan-700 dark:text-cyan-300 text-xs font-mono">
                  {reg.markets}
                </Badge>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {reg.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
                  {reg.coverage}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                <span>Annualized Volume:</span>
                <span>{reg.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
