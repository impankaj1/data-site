"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  History, 
  GraduationCap, 
  Handshake 
} from "lucide-react";
import { motion } from "motion/react";

export function MeetOurConsultants() {
  const BENEFITS = [
    {
      icon: History,
      title: "10+ Years Average Experience",
      description: "Our consulting team is comprised of veteran strategy directors, former industry practitioners, and seasoned data architects who bring deep, hands-on sector knowledge.",
      bulletPoints: ["Technology & AI Compute", "Global Finance & Banking", "Biopharma & Healthcare", "Clean Energy & Grid Utilities"]
    },
    {
      icon: GraduationCap,
      title: "Elite Academic Credentials",
      description: "Every advisor holds advanced degrees (MBA, MS, PhD) from top-tier business schools and research universities, combining academic rigor with industry execution.",
      bulletPoints: ["Quantitative Data Science", "Strategic Management", "Econometrics & Modeling", "Sector-Specific Engineering"]
    },
    {
      icon: Handshake,
      title: "Client-First Strategic Alignment",
      description: "We work directly alongside your strategy, corporate development, and product teams to integrate models, resolve custom pipelines, and drive long-term value.",
      bulletPoints: ["Project-Based Delivery", "Dedicated Retainer Models", "SOC-2 Compliant Execution", "Flexible Custom Delivery"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#090D16] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            OUR STRATEGISTS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Meet Our Consultants
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Our team is comprised of former strategy consultants, industry practitioners, and data scientists who are passionate about helping clients succeed.
          </p>
        </div>

        {/* 3-Grid Team Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800/90 flex flex-col justify-between space-y-6 data-card-glow hover:-translate-y-1 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                    Expertise Includes:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {benefit.bulletPoints.map((item, pIdx) => (
                      <Badge 
                        key={pIdx} 
                        variant="secondary" 
                        className="text-[10px] bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 px-2 py-0.5"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
