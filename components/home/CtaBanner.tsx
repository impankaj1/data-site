"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Database, ShieldCheck, Zap } from "lucide-react";
import { RequestDataModal } from "@/components/data/RequestDataModal";

export function CtaBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#07090E] relative overflow-hidden transition-colors">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-slate-200/50 dark:from-cyan-950/30 dark:via-indigo-950/20 dark:to-slate-950/30 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border-slate-300 dark:border-cyan-500/30 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-[#0F172A]/90 dark:to-[#0B0F17]/95 text-center max-w-5xl mx-auto space-y-8 shadow-2xl shadow-slate-300/50 dark:shadow-cyan-950/40">
          <div className="space-y-4 max-w-3xl mx-auto">
            <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/40 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
              GET STARTED IN LESS THAN 5 MINUTES
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Ready to Accelerate Your Market & Data Intelligence?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Request instant access to sample industry schemas, custom data shares in Snowflake, or speak with an enterprise market analyst today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-base px-8 h-12 rounded-xl shadow-lg shadow-cyan-500/25 gap-2 w-full sm:w-auto"
            >
              <Sparkles className="h-5 w-5" />
              <span>Request Data Access</span>
            </Button>

            <a href="/data#explorer" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white font-semibold text-base px-8 h-12 rounded-xl gap-2 w-full"
              >
                <span>Browse Data Catalog</span>
                <ArrowRight className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-800/80 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              SOC-2 Type II Certified
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              Sub-50ms API Latency
            </span>
            <span className="flex items-center gap-1.5">
              <Database className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              Snowflake Zero-Copy Ready
            </span>
          </div>
        </div>
      </div>

      <RequestDataModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
