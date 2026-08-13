"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { SECURITY_CERTIFICATIONS } from "@/constants/industries";
import { ShieldCheck } from "lucide-react";

export function DataSecurityCertifications() {
  return (
    <section id="security" className="py-16 bg-slate-50 dark:bg-[#07090E] border-t border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs px-3 py-1 font-mono">
            SECURITY & COMPLIANCE
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Financial-Grade Data Security & Governance
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Engineered with strict access controls, end-to-end data encryption, and compliance controls certified for global financial institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECURITY_CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border-slate-200 dark:border-slate-800 space-y-3 hover:border-emerald-500/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 text-[10px] font-mono">
                  {cert.badge}
                </Badge>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">{cert.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
