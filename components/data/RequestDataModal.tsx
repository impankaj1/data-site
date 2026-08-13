"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  CheckCircle2,
  Lock,
  Send,
  Building2,
  Mail,
  User,
  Sparkles,
} from "lucide-react";

interface RequestDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDatasetTitle?: string;
}

export function RequestDataModal({
  isOpen,
  onClose,
  defaultDatasetTitle,
}: RequestDataModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    datasetRequested: defaultDatasetTitle || "All Enterprise Industry Datasets",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white dark:bg-[#0B0F17] border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 p-6 rounded-2xl shadow-2xl">
        <DialogHeader className="text-left space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              <Database className="h-5 w-5" />
            </div>
            <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">
              Request Dataset Access
            </DialogTitle>
          </div>
          <DialogDescription className="text-slate-600 dark:text-slate-400 text-sm">
            Get instant sample files, custom schema definitions, and direct Snowflake share access from our data engineering team.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Request Received!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                Our market intelligence team will process your enterprise API key and sample dataset within 2 hours.
              </p>
            </div>
            <Badge variant="outline" className="bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 text-xs px-3 py-1 font-mono">
              Ticket ID: #SGS-DATA-{(Math.random() * 8999 + 1000).toFixed(0)}
            </Badge>
            <div className="pt-2">
              <Button onClick={handleReset} className="bg-slate-800 hover:bg-slate-700 text-white w-full">
                Close Dialog
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                Full Name
              </label>
              <Input
                required
                placeholder="e.g. Sarah Jenkins"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-slate-50 dark:bg-slate-900/80 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                Corporate Work Email
              </label>
              <Input
                required
                type="email"
                placeholder="sarah@company.com"
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                className="bg-slate-50 dark:bg-slate-900/80 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                Organization Name
              </label>
              <Input
                required
                placeholder="Apex Capital / BioVanguard Inc."
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="bg-slate-50 dark:bg-slate-900/80 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                Target Dataset / Sector Focus
              </label>
              <Input
                value={formData.datasetRequested}
                onChange={(e) => setFormData({ ...formData, datasetRequested: e.target.value })}
                className="bg-slate-50 dark:bg-slate-900/80 border-slate-300 dark:border-slate-800 text-cyan-700 dark:text-cyan-300 font-medium focus:border-cyan-500"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <Lock className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                SOC-2 Type II Secure Processing
              </span>
              <span>Sub-2hr SLA</span>
            </div>

            <div className="pt-2 flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="w-1/3 border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-2/3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Send className="h-4 w-4" />
                Request Access Now
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
