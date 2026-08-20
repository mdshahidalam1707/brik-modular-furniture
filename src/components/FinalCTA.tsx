"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 bg-brand-dark text-brand-bg overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Decorative architectural circle lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
        <svg className="w-full h-full text-brand-bg" viewBox="0 0 1000 1000" fill="none">
          <circle cx="500" cy="500" r="400" stroke="currentColor" strokeWidth="2" />
          <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="500" cy="500" r="200" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-brand-accent animate-pulse-subtle" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
            GET STARTED TODAY
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-2xl">
          READY TO BUILD YOUR SPACE?
        </h2>

        {/* Supporting Copy */}
        <p className="text-brand-muted text-base md:text-xl font-light leading-relaxed max-w-xl mb-12">
          Start with one module. Expand or rebuild whenever your life changes. Build something that becomes yours.
        </p>

        {/* Action Button & Pricing */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="#builder"
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent hover:bg-brand-accent-hover text-brand-bg text-base font-bold tracking-wider uppercase rounded-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-brand-accent/20 group"
          >
            Build Your Space
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-muted mt-2">
            STARTING FROM <span className="text-brand-bg font-mono">$499</span>
          </span>
        </div>

        {/* Technical Border Details */}
        <div className="mt-16 w-full max-w-md border-t border-brand-border/10 pt-6 flex justify-between text-[9px] font-mono text-brand-muted">
          <span>MODEL // BRIK_SYS_v1</span>
          <span>SHIPPING // WORLDWIDE</span>
          <span>RETURNS // 30 DAYS</span>
        </div>

      </div>
    </section>
  );
}
