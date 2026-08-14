"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  CalendarRange, 
  UserCheck, 
  Workflow,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";

export function EngagementModel() {
  const MODELS = [
    {
      icon: CalendarRange,
      title: "Project-Based Engagement",
      tagline: "Scope-Defined & Direct",
      description: "Ideal for discrete, high-impact projects with defined deliverables, timelines, and milestones. Focuses on solving specific immediate challenges.",
      useCases: [
        "Market Entry Strategy & Rollout Plans",
        "Target Due Diligence & Validation",
        "Whitespace & TAM Analysis Reports",
        "Custom Scrapers & Data Pipeline Setup"
      ],
      border: "border-slate-200 dark:border-slate-800",
      highlight: false,
    },
    {
      icon: UserCheck,
      title: "Retainer Advisory",
      tagline: "Ongoing Strategic Support",
      description: "Dedicated consulting resources acting as an extension of your internal strategy or product teams. Provides continuous market intelligence and ad-hoc analysis.",
      useCases: [
        "Continuous Competitor Monitoring",
        "Monthly Market Share Benchmarking",
        "C-Suite & Board Briefing Deck Prep",
        "Ongoing Regulatory & Tariff Tracking"
      ],
      border: "border-cyan-500/50 dark:border-cyan-500/50 shadow-lg shadow-cyan-500/5",
      highlight: true,
    },
    {
      icon: Workflow,
      title: "Hybrid Data + Advisory",
      tagline: "Fully Integrated Solution",
      description: "Combines full corporate access to our Snowflake Direct Share and REST APIs with a dedicated advisory retainer to clean, query, and interpret data pipelines.",
      useCases: [
        "BI Dashboard Ingestion & Tuning",
        "Predictive AI Strategy & Setup",
        "Automated Telemetry Dashboards",
        "Data Ingestion & Autocleaning Setup"
      ],
      border: "border-slate-200 dark:border-slate-800",
      highlight: false,
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#07090E] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            ENGAGEMENT MODELS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Flexible Engagement Model
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Choose the engagement model that best aligns with your timelines, organizational budget, and strategic requirements.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MODELS.map((model, index) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-panel p-8 rounded-3xl border flex flex-col justify-between space-y-8 relative overflow-hidden transition-all duration-300 ${model.border} hover:-translate-y-1`}
              >
                {model.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-indigo-600 text-white text-[10px] uppercase font-mono tracking-widest font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-md">
                    <Sparkles className="h-3 w-3" />
                    Recommended
                  </div>
                )}
                
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {model.title}
                    </h3>
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 font-mono tracking-wide mt-1">
                      {model.tagline}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {model.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800/80">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                    Typical Engagements:
                  </span>
                  <ul className="space-y-2">
                    {model.useCases.map((useCase, ucIdx) => (
                      <li key={ucIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shrink-0"></span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
