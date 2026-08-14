"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  PiggyBank, 
  BarChart4, 
  Cpu, 
  UserSquare2 
} from "lucide-react";
import { motion } from "motion/react";

export function WhoWeServe() {
  const CLIENTS = [
    {
      icon: Building2,
      title: "Corporate Strategy & BizDev",
      description: "Navigate global market shifts, identify expansion opportunities, benchmark margins, and design/execute strategic initiatives.",
      iconColor: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10",
    },
    {
      icon: PiggyBank,
      title: "Private Equity & Venture Capital",
      description: "Conduct commercial due diligence, validate investment theses, size target addressable markets, and support portfolio companies.",
      iconColor: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10",
    },
    {
      icon: BarChart4,
      title: "Investment Banks & Analysts",
      description: "Access reliable, sector-specific intelligence and benchmarking profiles for deal-making and client advisory.",
      iconColor: "text-pink-600 dark:text-pink-400 bg-pink-500/10",
    },
    {
      icon: Cpu,
      title: "Product & Engineering Leaders",
      description: "Understand developer tool adoption, compute spend shifts, competitor roadmaps, and next-generation tech trends.",
      iconColor: "text-purple-600 dark:text-purple-400 bg-purple-500/10",
    },
    {
      icon: UserSquare2,
      title: "C-Suite Executives & Boards",
      description: "Receive clear, concise, and data-driven recommendations for high-stakes decisions and board-level presentations.",
      iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#090D16] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            TARGET AUDIENCE
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Our Business Consultancy practice partners with forward-thinking leaders and data-driven teams across the financial and technology ecosystems.
          </p>
        </div>

        {/* 5-Column/Grid Client Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CLIENTS.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-cyan-500/35 transition-colors group"
              >
                <div className="space-y-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800/50 shrink-0 ${client.iconColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {client.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/50">
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
