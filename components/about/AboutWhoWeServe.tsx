"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  PiggyBank, 
  Building2, 
  Cpu, 
  BarChart4 
} from "lucide-react";
import { motion } from "motion/react";

export function AboutWhoWeServe() {
  const CLIENTS = [
    {
      icon: PiggyBank,
      title: "Private Equity & Venture Capital",
      description: "Firms seeking quantitative, data-backed investment theses, rapid sector commercial due diligence, and portfolio tracking telemetry.",
      color: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10",
    },
    {
      icon: Building2,
      title: "Corporate Strategy & BizDev",
      description: "Internal business development and strategy teams navigating complex cross-border market entry and product expansion playbooks.",
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10",
    },
    {
      icon: Cpu,
      title: "Product & Engineering Teams",
      description: "Development teams integrating high-precision market and sector datasets directly into internal workflows, tools, and analytics engines.",
      color: "text-pink-600 dark:text-pink-400 bg-pink-500/10",
    },
    {
      icon: BarChart4,
      title: "Investment Banks & Financial Analysts",
      description: "Analysts requiring accurate, real-time macro telemetry, market valuation forecasts, and detailed benchmarking indicators.",
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#090D16] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            WHO WE SERVE
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Partnerships
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            We partner with a diverse range of data-driven teams across global corporate and financial ecosystems.
          </p>
        </div>

        {/* 4-Grid Client Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENTS.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-cyan-500/35 transition-colors group data-card-glow"
              >
                <div className="space-y-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/50 dark:border-slate-800/50 shrink-0 ${client.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight group-hover:text-cyan-600 group-hover:dark:text-cyan-400 transition-colors">
                    {client.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/50 flex-1">
                  {client.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
