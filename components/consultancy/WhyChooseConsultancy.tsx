"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  UserCheck, 
  Terminal, 
  ShieldCheck, 
  Globe2 
} from "lucide-react";
import { motion } from "motion/react";

export function WhyChooseConsultancy() {
  const FACTORS = [
    {
      icon: Database,
      title: "Unmatched Data Foundation",
      description: "Our consultancy is powered by our proprietary data platform with 5,000+ human-verified datasets, real-time telemetry, and sector-specific intelligence across tech, finance, healthcare, and clean energy. Our recommendations are grounded in hard evidence, not intuition.",
      iconColor: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10",
    },
    {
      icon: UserCheck,
      title: "Deep Industry Expertise",
      description: "Our consultants are former strategy leaders and sector practitioners who understand the regulatory nuances, competitive dynamics, and technological trends that shape your industry, delivering practical and forward-looking guidance.",
      iconColor: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10",
    },
    {
      icon: Terminal,
      title: "Technology-Enabled Delivery",
      description: "We leverage modern delivery methods like Snowflake direct sharing, real-time REST APIs, and automated live executive dashboards alongside traditional PDF binders to ensure your strategy is dynamic and ready to implement.",
      iconColor: "text-pink-600 dark:text-pink-400 bg-pink-500/10",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Security & Compliance",
      description: "As a SOC-2 Type II certified platform, we treat your proprietary operational data, financial reports, and strategic plans with the highest standards of security, privacy, and confidentiality.",
      iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    },
    {
      icon: Globe2,
      title: "Global Perspective, Local Insight",
      description: "With coverage across major global markets and an international expert network, we provide macroeconomic perspective and cross-border comparisons, combined with local regulatory and distribution expertise.",
      iconColor: "text-sky-600 dark:text-sky-400 bg-sky-500/10",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#090D16] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Stats card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
              THE SHINE ADVANTAGE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Why Choose Shine Global Solutions?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              We bridge the critical gap between raw information and tangible business outcomes. Our engagement team combines institutional-grade datasets with strategy consultancy rigor to drive long-term business performance.
            </p>

            {/* Premium summary stat card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none"></div>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">Real-Time Ingestion</span>
                </div>
                <div className="text-4xl font-black text-cyan-400 font-mono">5,000+</div>
                <div className="text-sm font-bold">Human-Verified Datasets</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every consulting recommendation is backed by real-time intelligence feeds, operational telemetry, and peer financials, giving you a definitive strategic edge.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {FACTORS.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800/50 shrink-0 ${factor.iconColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {factor.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
