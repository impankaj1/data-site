"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Compass, Database, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function AboutDualCore() {
  return (
    <section id="dual-core" className="py-20 bg-white dark:bg-[#090D16] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            DUAL-CORE CAPABILITY
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How We Are Positioned
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            We operate with a unique dual-core capability that bridges the critical gap between raw information and strategic action.
          </p>
        </div>

        {/* 2-Grid Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Strategic Consulting */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 data-card-glow group"
          >
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                1. Strategic Consulting
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our consulting practice goes beyond numbers. We work alongside your leadership teams to solve complex business challenges, identify growth opportunities, and navigate market disruptions. Whether you are entering a new market, optimizing your go-to-market strategy, or evaluating M&A targets, our consultants bring deep industry expertise and a data-driven approach to every engagement.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                We don't just deliver reports; we deliver clarity and actionable roadmaps tailored to your unique business objectives.
              </p>
            </div>
            
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <Link 
                href="/consultancy"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span>Explore Advisory Offerings</span>
                <ArrowRight className="h-4 w-4 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Enterprise Data Provider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 data-card-glow group"
          >
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                2. Enterprise Data Provider
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                At the heart of our offering is our proprietary data platform, powered by over 5,000 human-verified datasets. We provide real-time, structured industry data covering critical sectors like AI & Compute, FinTech, Biopharma, and Clean Energy. Our data is engineered for seamless integration via Snowflake, REST APIs, and sub-50ms endpoints.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                Enable your teams to power BI dashboards, predictive AI models, and operational analytics with unmatched speed and reliability.
              </p>
            </div>
            
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <Link 
                href="/data"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span>Browse Data Catalog</span>
                <ArrowRight className="h-4 w-4 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
