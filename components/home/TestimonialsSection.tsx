"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { CLIENT_TESTIMONIALS } from "@/constants/testimonials";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-100 dark:bg-[#090C13] border-t border-slate-200 dark:border-slate-800/80 relative transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            CLIENT SUCCESS STORIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Empowering Strategy Leaders Worldwide
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            See how corporate strategy executives, private equity funds, and biopharma researchers leverage Shine Global Solutions data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-7 rounded-2xl border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-slate-300 dark:text-slate-700" />
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.clientName}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}, <span className="text-cyan-700 dark:text-cyan-300 font-semibold">{item.company}</span></p>
                </div>
                <Badge variant="secondary" className="bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 text-[11px] font-mono border-cyan-200 dark:border-cyan-800/50">
                  {item.metricHighlight}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
