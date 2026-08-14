"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Activity, 
  Workflow, 
  ShieldCheck, 
  UserCheck 
} from "lucide-react";
import { motion } from "motion/react";

export function AboutWhyChoose() {
  const ADVANTAGES = [
    {
      icon: Database,
      title: "5,000+ Verified Datasets",
      description: "Every metric and data point is rigorously validated by our team of quantitative analysts to ensure the highest data quality, coverage, and operational precision.",
      color: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10",
    },
    {
      icon: Activity,
      title: "Real-Time Stream Updates",
      description: "Stay ahead of market velocity with live telemetry, automated data ingest pipelines, and up-to-the-minute sector spend signals.",
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    },
    {
      icon: Workflow,
      title: "Seamless Integration",
      description: "Query datasets directly inside your warehouse via Snowflake zero-copy sharing, query REST & GraphQL APIs, or download executive PDF binders.",
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10",
    },
    {
      icon: ShieldCheck,
      title: "SOC-2 Type II Certified",
      description: "Your strategic planning and data pipelines are fully protected. We adhere to enterprise-grade compliance, encryption, and strict data security protocols.",
      color: "text-sky-600 dark:text-sky-400 bg-sky-500/10",
    },
    {
      icon: UserCheck,
      title: "Deep Industry Expertise",
      description: "Our strategists bring decades of combined experience across technology infrastructure, finance, healthcare, and energy to support your decisions.",
      color: "text-pink-600 dark:text-pink-400 bg-pink-500/10",
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#090D16] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            WHY SHINE GLOBAL SOLUTIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Shine Global Solutions?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            We provide a definitive data foundation and strategic partner alignment for modern enterprise strategy teams.
          </p>
        </div>

        {/* 5-Grid Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {ADVANTAGES.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-cyan-500/35 transition-colors group data-card-glow"
              >
                <div className="space-y-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200/50 dark:border-slate-800/50 shrink-0 ${adv.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {adv.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800/50 flex-1">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
