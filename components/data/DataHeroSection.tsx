"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Database, Activity, Layers, ShieldCheck } from "lucide-react";

export function DataHeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-slate-50 dark:bg-[#07090E] data-grid-bg border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 h-[350px] w-[500px] rounded-full bg-cyan-400/15 dark:bg-cyan-600/15 blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div className="max-w-3xl space-y-4">
          <Badge variant="outline" className="bg-cyan-100 dark:bg-cyan-950/40 border-cyan-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            ENTERPRISE DATA ENGINE & PLATFORM
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Structured Industry Datasets &{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Live Market Telemetry
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Query over 5,000 human-verified datasets, sub-50ms API endpoints, and zero-copy Snowflake shares for instant integration into BI dashboards and predictive AI models.
          </p>
        </div>

        {/* Feature Highlights Pills */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-800 dark:text-slate-300 pt-2">
          <div className="flex items-center gap-2 bg-white dark:bg-[#0C111C] px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-200">
            <Database className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            <span>5,000+ Verified Datasets</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-[#0C111C] px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-200">
            <Activity className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>Real-Time Stream Updates</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-[#0C111C] px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-200">
            <Layers className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span>Snowflake & REST API</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-[#0C111C] px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-200">
            <ShieldCheck className="h-4 w-4 text-sky-600 dark:text-sky-400" />
            <span>SOC-2 Type II Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
