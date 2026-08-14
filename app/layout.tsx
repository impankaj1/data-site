import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Shine Global Solutions | Market & Industry Data Intelligence",
  description: "Human-verified market intelligence, 5-year growth forecasts, and structured industry datasets for enterprise strategy leaders and data engineering teams.",
  keywords: ["Market Intelligence", "Industry Research", "Data Analytics", "Snowflake Marketplace", "FinTech Telemetry", "AI Compute Data", "Market Valuation"],
  authors: [{ name: "Shine Global Solutions" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased", inter.variable, geistMono.variable)}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-[#07090E] dark:text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
