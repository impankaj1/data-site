"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  TrendingUp, 
  ShieldAlert, 
  Handshake, 
  GitBranch, 
  SearchCode,
  CheckCircle2
} from "lucide-react";
import { motion } from "motion/react";

export function ConsultancyOfferings() {
  const OFFERINGS = [
    {
      icon: Rocket,
      title: "Go-to-Market Strategy",
      description: "Develop comprehensive, data-backed strategies to enter new markets, minimize execution risk, and maximize strategic impact.",
      bullets: [
        "Market Entry & Expansion Planning",
        "Customer Segmentation & Targeting",
        "Pricing & Positioning Strategy",
        "Channel & Sales Ecosystem Optimization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Competitive Intelligence & Benchmarking",
      description: "Maintain a 360-degree view of your competitive landscape, anticipating moves and capitalizing on market inefficiencies.",
      bullets: [
        "Competitor Deep-Dive Profiling",
        "Operational & Growth Benchmarking (120+ Peers)",
        "Whitespace & Underserved Segment Analysis",
        "Stress-Testing Strategic Options via Scenarios"
      ]
    },
    {
      icon: ShieldAlert,
      title: "Supply Chain Risk Intelligence",
      description: "Build operational resilience and margins protection in the face of geopolitical tensions and logistics volatility.",
      bullets: [
        "Critical Node & Vendor Risk Mapping",
        "Geopolitical Policy & Sanctions Monitoring",
        "Raw Material & Energy Input Cost Analysis",
        "Contingency Planning for Disruptions & Shocks"
      ]
    },
    {
      icon: Handshake,
      title: "M&A Advisory & Investment Due Diligence",
      description: "Leverage reliable data and rigorous analysis to identify targets, validate synergies, and negotiate with absolute confidence.",
      bullets: [
        "High-Potential Target Sector Identification",
        "Commercial Due Diligence (Size, Growth, TAM)",
        "Financial & Operational Benchmarking",
        "Integration Roadmaps for Synergy Capture"
      ]
    },
    {
      icon: GitBranch,
      title: "Strategic Planning & Transformation",
      description: "Partner with executive teams to translate long-term corporate vision into structured, actionable operational priorities.",
      bullets: [
        "Long-Term Vision & North Star Alignment",
        "Product Line & Asset Portfolio Optimization",
        "Organizational Design & Capability Building",
        "Performance Management & OKR Frameworks"
      ]
    },
    {
      icon: SearchCode,
      title: "Custom Research & Advisory",
      description: "Bespoke research, data scraping, and analytics services tailored to address your organization's unique challenges.",
      bullets: [
        "Ad-Hoc Strategic Project Support",
        "Niche Sector & Emerging Tech Deep-Dives",
        "Board-Ready Briefings & Executive Binders",
        "Thought Leadership & Co-authored White Papers"
      ]
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-slate-50 dark:bg-[#07090E] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            OUR CONSULTING PORTFOLIO
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Consultancy Offerings
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Combine human-verified industry expertise with our massive proprietary data assets to solve your toughest business problems.
          </p>
        </div>

        {/* 6-Grid Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERINGS.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800/90 flex flex-col justify-between space-y-6 data-card-glow group"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {offering.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {offering.description}
                  </p>
                </div>

                {/* Sub-offerings bullet list */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                  <span className="text-xs font-mono font-semibold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase">
                    Key Focus Areas:
                  </span>
                  <ul className="space-y-2.5">
                    {offering.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-normal">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
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
