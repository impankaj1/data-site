"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  TrendingUp,
  ShieldAlert,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function SolutionsGrid() {
  const SOLUTIONS = [
    {
      id: "sol-1",
      icon: BarChart3,
      title: "Market Sizing & Valuation",
      badge: "Core Solution",
      description: "Comprehensive 10-year historical metrics and 5-year growth trajectory forecasts across global industrial sectors.",
      metrics: "$4.2T Annualized Coverage",
      link: "/data#explorer",
    },
    {
      id: "sol-2",
      icon: TrendingUp,
      title: "Strategic Benchmarking",
      badge: "Analytics",
      description: "Compare your company's revenue velocity, gross margins, and operational costs against 120+ peer industry averages.",
      metrics: "120+ Sector Benchmarks",
      link: "/data#kpi",
    },
    {
      id: "sol-3",
      icon: ShieldAlert,
      title: "Supply Chain Risk Indexing",
      badge: "Risk Control",
      description: "Monitor raw material bottlenecks, freight rate spikes, geopolitical disruptions, and cold-chain compliance risks.",
      metrics: "Real-time Risk Ratings",
      link: "/data#pipeline",
    },
    {
      id: "sol-4",
      icon: Cpu,
      title: "AI & LLM Telemetry Data",
      badge: "High Growth",
      description: "Granular datasets on GPU cluster expenditure, AI inference workload volume, and cloud provider enterprise spend.",
      metrics: "Daily Updates",
      link: "/data?category=TECHNOLOGY#explorer",
    },
    {
      id: "sol-5",
      icon: Layers,
      title: "Snowflake Direct Share",
      badge: "Enterprise",
      description: "Zero-copy query access directly inside your Snowflake data warehouse with continuous automated schema refresh.",
      metrics: "Zero ETL Required",
      link: "/data#integrations",
    },
    {
      id: "sol-6",
      icon: Sparkles,
      title: "Custom Data Engineering",
      badge: "Bespoke",
      description: "Need a tailored dataset or proprietary web telemetry scraper? Our data engineering team builds dedicated pipelines.",
      metrics: "Sub-48h Delivery",
      link: "/data#integrations",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-slate-50 dark:bg-[#07090E] relative transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            OUR CORE CAPABILITIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Designed for Modern Market Research & Decision Making
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Combine human-verified industry research with automated data feeds to accelerate investment thesis validation and corporate strategy.
          </p>
        </div>

        {/* 6-Grid Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="data-card-glow glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 border-slate-200 dark:border-slate-800/90 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-900 text-cyan-700 dark:text-cyan-300 border-slate-300 dark:border-slate-700 text-xs">
                      {sol.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-medium">
                    {sol.metrics}
                  </span>
                  <Link
                    href={sol.link}
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
