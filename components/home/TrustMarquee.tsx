"use client";

import React from "react";
import { Building2, ShieldCheck, Award, Globe, LineChart, Landmark } from "lucide-react";

export function TrustMarquee() {
  const PARTNER_BADGES = [
    { name: "Global Equity Partners", icon: Landmark },
    { name: "Apex Financial Capital", icon: LineChart },
    { name: "Vanguard LifeSciences", icon: ShieldCheck },
    { name: "OmniTech Logistics", icon: Globe },
    { name: "Nordic Clean Energy Grid", icon: Building2 },
    { name: "Starlight Digital Banking", icon: Award },
  ];

  return (
    <section className="border-y border-slate-200 dark:border-slate-800/60 bg-slate-100 dark:bg-[#090C13] py-8 overflow-hidden transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Trusted by Strategy Teams, Investment Banks, and Data Engineers at Leading Organizations
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 pt-2">
          {PARTNER_BADGES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors opacity-80 hover:opacity-100 cursor-default"
              >
                <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-semibold tracking-tight">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
