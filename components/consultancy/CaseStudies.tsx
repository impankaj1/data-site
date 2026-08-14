"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  HelpCircle, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0);

  const CASES = [
    {
      tabLabel: "FinTech Expansion",
      title: "Market Entry Strategy for a Global FinTech Player",
      clientType: "FinTech Infrastructure / Cross-Border Payments",
      challenge: "A leading cross-border payments company sought to expand into Southeast Asia but lacked clarity on local regulatory requirements, regional competitor market shares, and key customer adoption drivers.",
      solution: "Our consultants conducted a comprehensive regional market assessment, analyzing regulatory frameworks, regional payment rails, and competitor market penetration. We developed a phased go-to-market rollout strategy, prioritized target countries, and designed a custom pricing model optimized for local market dynamics.",
      outcome: "Successfully entered three Southeast Asian markets within 12 months, achieving a 25% above-projection customer acquisition velocity in the first year of operation.",
      metric: "25% Above Projection"
    },
    {
      tabLabel: "Semiconductor Resilience",
      title: "Supply Chain Resilience for a Semiconductor Manufacturer",
      clientType: "Semiconductor Fabless / Hardware Supply Chain",
      challenge: "A mid-sized semiconductor designer faced recurring disruptions in raw material sourcing and sub-assembly transport due to escalating geopolitical tensions and logistics bottlenecks.",
      solution: "We mapped the client's entire multi-tier supply chain, identified critical single points of failure and high-risk component vendors. We designed a scenario-based risk mitigation playbook and established real-time automated data monitoring of geopolitical risk indicators and freight cost indexes.",
      outcome: "Reduced supply chain operational downtime by 40% and successfully established alternate sourcing channels that improved quarterly cost predictability by 15%.",
      metric: "40% Downtime Reduction"
    },
    {
      tabLabel: "M&A Due Diligence",
      title: "M&A Due Diligence for a Private Equity Firm",
      clientType: "Private Equity / HealthTech Investment",
      challenge: "A top-tier private equity firm was evaluating a $200M+ acquisition target in the healthcare technology sector but lacked deep domain data and commercial validation.",
      solution: "We conducted complete commercial due diligence, including granular market sizing, competitor benchmarking, and independent customer satisfaction interviews. We also delivered a post-merger integration framework to capture identified operational synergies.",
      outcome: "The transaction completed successfully. The acquired portfolio company executed the integration playbook, achieving a 15% EBITDA growth within 18 months post-acquisition.",
      metric: "15% EBITDA Growth"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#07090E] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            SUCCESS STORIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Consultancy Case Studies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Read about how our strategic advisory practice leverages structured datasets to deliver tangible business outcomes.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center">
          <div className="flex bg-slate-200/60 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-300/40 dark:border-slate-800/80 max-w-lg w-full">
            {CASES.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 text-center py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                  activeTab === idx 
                    ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-md"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Display Area */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Details Block */}
              <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/30">
                      {CASES[activeTab].clientType}
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {CASES[activeTab].title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {/* Challenge Card */}
                    <div className="p-6 rounded-2xl border border-red-500/10 bg-red-500/5 dark:bg-red-500/[0.02] space-y-3">
                      <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
                        <HelpCircle className="h-4 w-4" />
                        <span>The Challenge</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {CASES[activeTab].challenge}
                      </p>
                    </div>

                    {/* Solution Card */}
                    <div className="p-6 rounded-2xl border border-indigo-500/10 bg-indigo-500/5 dark:bg-indigo-500/[0.02] space-y-3">
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                        <Cpu className="h-4 w-4" />
                        <span>Our Solution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {CASES[activeTab].solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Outcome Bar */}
                <div className="p-5 sm:p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 dark:bg-emerald-500/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>The Outcome</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {CASES[activeTab].outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Big Stat Block */}
              <div className="lg:col-span-4 flex flex-col justify-center items-center p-8 rounded-3xl bg-gradient-to-br from-cyan-50/50 via-slate-50/50 to-indigo-50/50 dark:from-[#0B0F17] dark:via-[#090C13] dark:to-[#0D121F] text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800/80 text-center relative overflow-hidden shadow-sm shadow-slate-100 dark:shadow-none">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
                <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <Sparkles className="h-6 w-6 animate-pulse" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs tracking-widest uppercase font-mono font-bold text-cyan-600 dark:text-cyan-400">Key Result Metric</span>
                    <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-white dark:to-white">
                      {CASES[activeTab].metric}
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[240px] mx-auto leading-relaxed font-medium">
                    This verified client outcome illustrates the value added when combining deep research advisory with data engine precision.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
