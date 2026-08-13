"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { INTEGRATION_OPTIONS } from "@/constants/industries";
import { Layers, Code2, BarChart3, Terminal, Copy, Check } from "lucide-react";

export function DataIntegrationsGrid() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Layers,
    Code2,
    BarChart3,
    Terminal,
  };

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="integrations" className="py-20 bg-slate-100 dark:bg-[#090C13] border-t border-slate-200 dark:border-slate-800/80 relative transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-1 font-mono">
            ENTERPRISE DELIVERY & INTEGRATIONS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Seamless Query Access to Fits Your Tech Stack
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Connect directly inside Snowflake, query high-frequency REST endpoints, or import natively into Jupyter notebooks and PowerBI.
          </p>
        </div>

        {/* 4 Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INTEGRATION_OPTIONS.map((opt) => {
            const Icon = iconMap[opt.iconName] || Code2;
            const isCopied = copiedId === opt.id;

            return (
              <div
                key={opt.id}
                className="glass-panel p-6 sm:p-7 rounded-2xl border-slate-200 dark:border-slate-800 space-y-5 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{opt.name}</h3>
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-900 text-cyan-700 dark:text-cyan-300 text-xs font-mono">
                      {opt.latencyText}
                    </Badge>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {opt.description}
                  </p>

                  {/* Code Snippet Box */}
                  <div className="relative bg-slate-900 dark:bg-[#05070C] p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/80 mb-2">
                      <span className="uppercase text-[10px]">{opt.language} snippet</span>
                      <button
                        onClick={() => handleCopy(opt.id, opt.codeSnippet)}
                        className="text-slate-400 hover:text-cyan-300 flex items-center gap-1 text-[11px] transition-colors cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="overflow-x-auto whitespace-pre-wrap text-cyan-300/90 leading-relaxed">
                      {opt.codeSnippet}
                    </pre>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
