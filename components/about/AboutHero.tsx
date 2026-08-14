"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ShieldCheck, Database, Award, Compass } from "lucide-react";
import { RequestDataModal } from "@/components/data/RequestDataModal";

export function AboutHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden bg-slate-50 dark:bg-[#07090E] data-grid-bg border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 h-[400px] w-[600px] rounded-full bg-gradient-to-br from-cyan-500/10 to-indigo-600/15 dark:from-cyan-500/10 dark:to-indigo-500/20 blur-[130px] pointer-events-none"></div>
      <div className="absolute -left-10 top-1/2 h-[300px] w-[300px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="max-w-4xl space-y-6">
          <Badge variant="outline" className="bg-cyan-100 dark:bg-cyan-950/40 border-cyan-300 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs px-3.5 py-1.5 font-mono tracking-wider">
            WHO WE ARE
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent block sm:inline">
              Shine Global Solutions
            </span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Shine Global Solutions is a premier market intelligence and strategic consulting firm, uniquely positioned at the intersection of high-quality data and actionable business insights. We empower organizations across technology, finance, healthcare, and energy to make faster, smarter, and more confident decisions.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white rounded-xl shadow-lg shadow-cyan-500/20 font-medium px-8 text-sm gap-2"
          >
            <Sparkles className="h-4 w-4" />
            <span>Request Access</span>
          </Button>

          <a href="#dual-core" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full bg-white dark:bg-[#0B0F17] hover:bg-slate-50 dark:hover:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-medium px-8 text-sm gap-2"
            >
              <span>Our Dual Capabilities</span>
              <ArrowRight className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            </Button>
          </a>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-800 dark:text-slate-300 pt-6">
          <div className="flex items-center gap-2 bg-white dark:bg-[#0C111C] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-200">
            <Database className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            <span>5,000+ Verified Datasets</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-[#0C111C] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-200">
            <Compass className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span>Strategic Consulting Practice</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-[#0C111C] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-200">
            <Award className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>Expert-Backed Methodology</span>
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-[#0C111C] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-slate-800 dark:text-slate-200">
            <ShieldCheck className="h-4 w-4 text-sky-600 dark:text-sky-400" />
            <span>SOC-2 Type II Certified</span>
          </div>
        </div>
      </div>

      <RequestDataModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
