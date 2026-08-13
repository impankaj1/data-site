"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QUICK_FILTER_CHIPS, COMPANY_KEY_STATS } from "@/constants/navigation";
import { Search, Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/data?search=${encodeURIComponent(searchQuery.trim())}#explorer`);
    } else {
      router.push("/data#explorer");
    }
  };

  const handleChipClick = (categoryStr: string) => {
    router.push(`/data?category=${categoryStr}#explorer`);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-slate-50 dark:bg-[#07090E] data-grid-bg transition-colors">
      {/* Glow Backdrop Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-gradient-to-tr from-cyan-400/20 via-indigo-400/15 to-purple-400/10 dark:from-cyan-600/20 dark:via-indigo-600/15 dark:to-purple-600/10 blur-[130px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-100/60 dark:bg-cyan-950/40 px-3.5 py-1.5 text-xs sm:text-sm text-cyan-800 dark:text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/10 dark:shadow-cyan-950/30"
          >
            <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
            <span>Next-Gen Market & Industry Intelligence Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Predictive Industry Intelligence.{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Precision Data.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Structured, human-verified market data, 5-year growth forecasts, and supply chain telemetry across 120+ global industries. Inspired by world-class intelligence benchmarks.
          </motion.p>

          {/* Prominent Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2"
          >
            <form
              onSubmit={handleSearchSubmit}
              className="relative max-w-2xl mx-auto flex items-center rounded-2xl border border-slate-300 dark:border-slate-700/80 bg-white/90 dark:bg-[#0E1420]/90 p-2 shadow-2xl shadow-slate-200/50 dark:shadow-cyan-950/30 backdrop-blur-xl focus-within:border-cyan-500/80 focus-within:ring-2 focus-within:ring-cyan-500/20 transition-all"
            >
              <Search className="h-5 w-5 text-slate-400 ml-3 shrink-0" />
              <Input
                type="text"
                placeholder="Search by industry, dataset, or keyword (e.g. AI Compute, FinTech, Biopharma)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-0 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base h-11"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold px-5 sm:px-6 h-11 rounded-xl gap-2 shrink-0 shadow-md shadow-cyan-500/20"
              >
                <span>Search</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            {/* Quick Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono uppercase text-slate-400 dark:text-slate-500 text-[11px]">Popular Searches:</span>
              {QUICK_FILTER_CHIPS.slice(1).map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => handleChipClick(chip.category)}
                  className="rounded-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-1 text-slate-700 dark:text-slate-300 transition-all cursor-pointer shadow-sm"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Company Key Stats Counter Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {COMPANY_KEY_STATS.map((stat) => (
            <div
              key={stat.id}
              className="glass-panel p-6 rounded-2xl text-center space-y-2 border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors tracking-tight font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{stat.label}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
