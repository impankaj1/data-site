"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { DATA_PIPELINE_STEPS } from "@/constants/industries";
import { Database, ShieldCheck, Cpu, Zap, ArrowRight } from "lucide-react";

export function DataMethodologyPipeline() {
  const iconMap: Record<string, React.ElementType> = {
    Database,
    ShieldCheck,
    Cpu,
    Zap,
  };

  return (
    <section id="pipeline" className="py-20 bg-slate-50 dark:bg-[#07090E] relative transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs px-3 py-1 font-mono">
            OUR DATA METHODOLOGY & LIFECYCLE
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How We Guarantee 99.8% Data Accuracy
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            From raw satellite telemetry and exchange filings to AI-scrubbed predictive datasets ready for your enterprise query.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {DATA_PIPELINE_STEPS.map((step, idx) => {
            return (
              <div
                key={step.stepNumber}
                className="glass-panel p-7 rounded-2xl border-slate-200 dark:border-slate-800 space-y-4 hover:border-cyan-500/40 transition-all relative flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm border border-cyan-500/20">
                      0{step.stepNumber}
                    </span>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-900 text-cyan-700 dark:text-cyan-300 text-[11px]">
                      {step.badgeText}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                      {step.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < DATA_PIPELINE_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="h-5 w-5 text-slate-400 dark:text-slate-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
