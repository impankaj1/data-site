"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Database, LineChart, Handshake } from "lucide-react";
import { motion } from "motion/react";

export function AboutWhatWeDo() {
  const STEPS = [
    {
      stepNum: "01",
      icon: Database,
      title: "Curate",
      description: "We source, verify, and structure high-quality data from thousands of reliable sources, ensuring absolute accuracy, coverage, and completeness.",
      color: "from-cyan-500/20 to-cyan-600/5 dark:from-cyan-950/40 dark:to-transparent border-cyan-500/20 text-cyan-600 dark:text-cyan-400",
    },
    {
      stepNum: "02",
      icon: LineChart,
      title: "Analyze",
      description: "Our team of subject-matter experts and data scientists transforms raw telemetry into actionable intelligence, uncovering hidden trends, operational risks, and market opportunities.",
      color: "from-indigo-500/20 to-indigo-600/5 dark:from-indigo-950/40 dark:to-transparent border-indigo-500/20 text-indigo-600 dark:text-indigo-400",
    },
    {
      stepNum: "03",
      icon: Handshake,
      title: "Consult",
      description: "We partner directly with you to translate quantitative data into strategic decisions, helping your executive team stay ahead of competition and execute with confidence.",
      color: "from-pink-500/20 to-pink-600/5 dark:from-pink-950/40 dark:to-transparent border-pink-500/20 text-pink-600 dark:text-pink-400",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#07090E] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            OUR STRATEGIC PROCESS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Our three-step methodology ensures that raw telemetry is successfully refined into corporate strategic action.
          </p>
        </div>

        {/* 3-Step Process flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-panel p-8 rounded-3xl border flex flex-col justify-between space-y-8 relative overflow-hidden data-card-glow hover:-translate-y-1 bg-gradient-to-br ${step.color}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-3xl font-black font-mono text-slate-350 dark:text-slate-800/80">
                      {step.stepNum}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
