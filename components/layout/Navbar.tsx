"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MAIN_NAVIGATION } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Menu,
  Search,
  Database,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { RequestDataModal } from "@/components/data/RequestDataModal";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-[#07090E]/85 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-md shadow-cyan-500/20 transition-transform group-hover:scale-105">
              <Database className="h-5 w-5 text-white" />
              <div className="absolute -inset-0.5 rounded-xl bg-cyan-400 opacity-30 blur-sm group-hover:opacity-60 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 uppercase">
                Shine Global Solutions
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-mono">
                Market Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {MAIN_NAVIGATION.map((item) => {
              if (item.megaMenu) {
                return (
                  <DropdownMenu key={item.id}>
                    <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer">
                      {item.label}
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className={cn(
                        "p-4 bg-white dark:bg-[#0B0F17] border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 shadow-2xl rounded-xl transition-all duration-200",
                        item.megaMenu.length === 3 ? "w-[760px]" : "w-[520px]"
                      )}
                    >
                      <div className={cn(
                        "grid gap-4",
                        item.megaMenu.length === 3 ? "grid-cols-3" : "grid-cols-2"
                      )}>
                        {item.megaMenu.map((group, idx) => (
                          <div key={idx} className="space-y-2">
                            <h4 className="text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase font-mono px-2">
                              {group.categoryTitle}
                            </h4>
                            <div className="space-y-1">
                              {group.items.map((subItem, subIdx) => (
                                <DropdownMenuItem key={subIdx}>
                                  <Link
                                    href={subItem.href}
                                    className="flex flex-col gap-0.5 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors group cursor-pointer w-full"
                                  >
                                    <div className="flex items-center justify-between text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                                      <span>{subItem.title}</span>
                                      {subItem.badge && (
                                        <Badge
                                          variant="secondary"
                                          className="text-[10px] bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/50"
                                        >
                                          {subItem.badge}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <ThemeToggle />
            <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800/80 mx-1"></div>

            <Link href="/data#explorer">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 text-xs sm:text-sm gap-1.5 cursor-pointer"
              >
                <Search className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Catalog Search</span>
              </Button>
            </Link>

            <Button
              size="sm"
              onClick={() => setIsRequestModalOpen(true)}
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-cyan-500/20 gap-1.5 cursor-pointer rounded-xl px-3 py-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Request Data Access</span>
            </Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <Button
              size="sm"
              onClick={() => setIsRequestModalOpen(true)}
              className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs px-2.5 py-1"
            >
              Request Data
            </Button>

            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg">
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-white dark:bg-[#0B0F17] border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 w-[300px] sm:w-[360px]">
                <SheetHeader className="text-left border-b border-slate-200 dark:border-slate-800 pb-4">
                  <SheetTitle className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
                    <Database className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    Shine Global Solutions
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 py-6 overflow-y-auto max-h-[calc(100vh-10rem)]">
                  {MAIN_NAVIGATION.map((item) => (
                    <div key={item.id} className="space-y-1.5">
                      {item.megaMenu ? (
                        /* Header representing a group trigger (dropdown trigger in header) */
                        <div className="text-base font-bold text-slate-900 dark:text-white flex items-center justify-between py-2 px-3">
                          <span>{item.label}</span>
                          <ChevronDown className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                        </div>
                      ) : (
                        /* Direct link */
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-between py-2 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group"
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      )}

                      {item.megaMenu && (
                        <div className="p-1.5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 space-y-0.5 mx-2">
                          {item.megaMenu.flatMap((group) =>
                            group.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="flex items-center justify-between text-sm text-slate-650 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/40 rounded-xl py-2 px-3.5 transition-colors group w-full"
                              >
                                <span>{subItem.title}</span>
                                {subItem.badge && (
                                  <Badge
                                    variant="secondary"
                                    className="text-[9px] bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-none scale-90"
                                  >
                                    {subItem.badge}
                                  </Badge>
                                )}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3 px-2">
                    <Button
                      onClick={() => {
                        setIsMobileOpen(false);
                        setIsRequestModalOpen(true);
                      }}
                      className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white justify-center gap-2 cursor-pointer shadow-md rounded-xl"
                    >
                      <Sparkles className="h-4 w-4" />
                      Request Data Access
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Shared Data Request Modal */}
      <RequestDataModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
    </>
  );
}
