"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Compass, Eye } from "lucide-react";
import { motion } from "motion/react";

export function AboutMissionVision() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#07090E] border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col space-y-4 data-card-glow group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Our Mission
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
              To democratize access to high-quality, actionable market data and strategic consulting expertise, enabling businesses to navigate complexity, unlock new opportunities, and build a sustainable competitive advantage.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col space-y-4 data-card-glow group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Our Vision
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-350 leading-relaxed font-medium">
              To become the trusted partner of choice for global enterprises seeking data-driven clarity in an increasingly complex and fast-moving world.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
