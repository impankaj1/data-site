"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Compass, Settings2, Users } from "lucide-react";
import { motion } from "motion/react";

export function ConsultancyPhilosophy() {
  const PRINCIPLES = [
    {
      icon: Compass,
      title: "Clarity Over Complexity",
      description: "We cut through the noise to deliver clear, concise, and actionable recommendations that your leadership team can implement immediately.",
      color: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: Settings2,
      title: "Customization Over Templates",
      description: "No two businesses are the same. We tailor every engagement to your specific industry, competitive landscape, and strategic objectives.",
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: Users,
      title: "Partnership Over Transaction",
      description: "We view ourselves as an extension of your team. Your success is our success, and we are committed to delivering lasting value beyond the engagement.",
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#090D16] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            OUR GUIDING PRINCIPLES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Consultancy Philosophy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Data-driven decisions are better decisions. But data alone does not provide context, nuance, or foresight. Our approach is built on three core pillars:
          </p>
        </div>

        {/* 3-Grid Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRINCIPLES.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center space-y-4 data-card-glow hover:-translate-y-1 transition-all"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${principle.color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
