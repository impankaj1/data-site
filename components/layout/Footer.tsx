"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FOOTER_LINK_GROUPS } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  Send,
  Check,
  ShieldCheck,
  Globe2,
  Lock,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#05070B] text-slate-600 dark:text-slate-400 transition-colors">
      {/* Top Banner / Newsletter */}
      <div className="border-b border-slate-200 dark:border-slate-800/60 bg-gradient-to-r from-slate-200/50 via-cyan-100/30 to-slate-200/50 dark:from-slate-900/40 dark:via-cyan-950/20 dark:to-slate-900/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs px-3 py-0.5">
              Weekly Market Digest
            </Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Subscribe to Global Industry & AI Intelligence
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Get weekly sector benchmarks, macro trend updates, and high-precision data reports direct to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
            {subscribed ? (
              <div className="flex w-full items-center gap-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 p-3 text-emerald-800 dark:text-emerald-300 text-sm font-medium">
                <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Thank you! You are now subscribed to executive updates.</span>
              </div>
            ) : (
              <>
                <Input
                  type="email"
                  required
                  placeholder="Enter corporate email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 rounded-xl"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white rounded-xl gap-2 font-medium shrink-0"
                >
                  <Send className="h-4 w-4" />
                  Subscribe
                </Button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20">
                <Database className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2 uppercase">
                Shine Global Solutions
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Shine Global Solutions provides human-verified, AI-enhanced market intelligence and structured industry datasets for enterprise decision makers, strategy teams, and automated models worldwide.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Data Engine: 99.99% Online
              </span>
              <span className="flex items-center gap-1">
                <Lock className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
                SOC-2 Type II Verified
              </span>
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_LINK_GROUPS.map((group, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                {group.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      {link.isExternal && <ArrowUpRight className="h-3 w-3 opacity-60" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shine Global Solutions Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/data#security" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/data#security" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/data#security" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              Security Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
