"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { LIVE_MARKET_METRICS } from "@/constants/industries";
import { TrendingUp, TrendingDown } from "lucide-react";

export function LiveKpiDashboard() {
  return (
    <section id="kpi" className="py-20 bg-slate-100 dark:bg-[#090C13] border-t border-slate-200 dark:border-slate-800/80 relative transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs px-3 py-1 font-mono">
                REAL-TIME TELEMETRY STREAM
              </Badge>
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                LIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sample Market KPI & Volatility Benchmarks
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Monitor live economic indices, quarterly industry growth velocities, and supply chain telemetry directly from our data engine.
            </p>
          </div>
        </div>

        {/* 4 KPI Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIVE_MARKET_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="glass-panel p-6 rounded-2xl border-slate-200 dark:border-slate-800 space-y-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {metric.industry}
                  </span>
                  <Badge
                    variant="outline"
                    className={`text-xs font-mono px-2 py-0.5 ${
                      metric.isPositive
                        ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800/60"
                        : "bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-400 border-rose-300 dark:border-rose-800/60"
                    }`}
                  >
                    {metric.isPositive ? (
                      <TrendingUp className="h-3 w-3 inline mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 inline mr-1" />
                    )}
                    {metric.changeYoY}
                  </Badge>
                </div>

                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{metric.title}</h3>

                <div className="text-3xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight pt-1">
                  {metric.value}
                </div>
              </div>

              {/* Sparkline Graphic */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
                <div className="h-10 w-full flex items-end justify-between gap-1">
                  {metric.sparklineData.map((val, idx) => {
                    const maxVal = Math.max(...metric.sparklineData);
                    const heightPct = Math.round((val / maxVal) * 100);
                    return (
                      <div
                        key={idx}
                        style={{ height: `${heightPct}%` }}
                        className={`w-full rounded-t ${
                          metric.isPositive
                            ? "bg-gradient-to-t from-cyan-500/30 to-cyan-500 dark:from-cyan-600/40 dark:to-cyan-400"
                            : "bg-gradient-to-t from-rose-500/30 to-rose-500 dark:from-rose-600/40 dark:to-rose-400"
                        }`}
                      ></div>
                    );
                  })}
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>7 Quarters Ago</span>
                  <span>Latest Update</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
