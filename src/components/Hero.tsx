"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-brand-bg overflow-hidden">
      {/* Background Decorative Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#121212 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-subtle" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-brand-accent">
              THE MODULAR FURNITURE SYSTEM
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-dark leading-[1.05] mb-8 font-sans">
            DON'T BUY
            <br />
            FURNITURE.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-brand-accent to-brand-dark">
              BUILD IT.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-brand-muted font-light leading-relaxed max-w-xl mb-10">
            One system. Endless possibilities. Create premium, architectural furniture that changes when your life does. Connect, expand, and rebuild your living space without tools.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <a
              href="#builder"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark text-brand-bg text-sm font-bold tracking-wide uppercase rounded-sm transition-all duration-300 hover:bg-brand-accent hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md"
            >
              Build Your Space
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-border text-brand-dark text-sm font-bold tracking-wide uppercase rounded-sm bg-transparent transition-all duration-300 hover:bg-brand-stone hover:border-brand-dark hover:-translate-y-0.5 active:translate-y-0"
            >
              See How It Works
              <Play className="w-4 h-4 text-brand-muted" />
            </a>
          </div>

          {/* Trust Statement */}
          <div className="flex items-center gap-4 border-t border-brand-border/60 pt-6">
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full border border-brand-bg bg-brand-stone flex items-center justify-center text-[10px] font-bold text-brand-dark">A</span>
              <span className="w-8 h-8 rounded-full border border-brand-bg bg-brand-border flex items-center justify-center text-[10px] font-bold text-brand-dark">B</span>
              <span className="w-8 h-8 rounded-full border border-brand-bg bg-brand-dark flex items-center justify-center text-[10px] font-bold text-brand-bg">C</span>
            </div>
            <p className="text-sm font-semibold tracking-wide text-brand-muted">
              Designed to evolve. <span className="text-brand-dark">Built to last.</span>
            </p>
          </div>
        </div>

        {/* Right Column: Premium 3D-Style Isometric Composition */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[350px] sm:min-h-[450px] md:min-h-[550px] w-full overflow-hidden">
          {/* Main Visual Wrapper */}
          <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
            
            {/* Architectural Connecting Grid Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <svg className="w-full h-full text-brand-border/40" viewBox="0 0 400 400" fill="none">
                <path d="M50 200 L350 200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M200 50 L200 350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="200" cy="200" r="6" fill="currentColor" opacity="0.2" />
              </svg>
            </div>

            {/* Isometric Block Group */}
            <div className="relative w-full h-full flex items-center justify-center transform scale-[0.55] sm:scale-[0.75] md:scale-100 transition-transform duration-500">
              
              {/* Backrest Block (Floating top-left) */}
              <div 
                className="absolute z-30 transition-all duration-[1500ms] hover:scale-105"
                style={{
                  top: "12%",
                  left: "20%",
                  transform: "perspective(1000px) rotateX(30deg) rotateY(-45deg) rotateZ(10deg)",
                  animation: "float 6s ease-in-out infinite",
                  animationDelay: "0s"
                }}
              >
                <div className="w-[180px] h-[100px] bg-[#D4CFC6] rounded-xl shadow-[-20px_20px_40px_rgba(0,0,0,0.15)] border-l-2 border-t border-white/40 flex flex-col justify-between p-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-brand-dark/50 tracking-wider">MOD_03B</span>
                    <Sparkles className="w-3.5 h-3.5 text-brand-accent opacity-50" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase text-brand-dark/80 tracking-widest">Backrest Module</p>
                    <p className="text-[9px] text-brand-muted">Warm Grey Wool</p>
                  </div>
                  {/* Connector pins visual */}
                  <div className="absolute bottom-1 right-12 flex space-x-1.5 opacity-30">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
                  </div>
                </div>
                {/* Connecting indicator line */}
                <div className="absolute -bottom-8 right-6 w-0.5 h-8 border-r border-dashed border-brand-accent/50 z-10" />
              </div>

              {/* Wooden Tray Block (Floating top-right) */}
              <div 
                className="absolute z-20 transition-all duration-[1500ms] hover:scale-105"
                style={{
                  top: "22%",
                  right: "10%",
                  transform: "perspective(1000px) rotateX(30deg) rotateY(-45deg) rotateZ(10deg)",
                  animation: "float 6s ease-in-out infinite",
                  animationDelay: "1.5s"
                }}
              >
                <div className="w-[140px] h-[90px] bg-[#C1A88A] rounded-lg shadow-[-15px_15px_30px_rgba(0,0,0,0.12)] border-l border-t border-white/20 flex flex-col justify-between p-3 relative">
                  {/* Subtle wood-like grain visual overlay */}
                  <div className="absolute inset-0 opacity-[0.07] bg-repeat pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(45deg, #121212, #121212 1px, transparent 1px, transparent 6px)` }} />
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-bold text-brand-dark/50 tracking-wider font-mono">MOD_04T</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-accent/80" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase text-brand-dark/80 tracking-wider">Side Tray</p>
                    <p className="text-[8px] text-brand-muted">Solid Oak</p>
                  </div>
                </div>
                {/* Connecting indicator line */}
                <div className="absolute -bottom-10 left-10 w-0.5 h-10 border-r border-dashed border-brand-accent/50 z-10" />
              </div>

              {/* Main Seat Module (Center base) */}
              <div 
                className="absolute z-10 transition-all duration-[1500ms] hover:scale-102"
                style={{
                  bottom: "22%",
                  left: "22%",
                  transform: "perspective(1000px) rotateX(30deg) rotateY(-45deg) rotateZ(10deg)",
                  animation: "float 6s ease-in-out infinite",
                  animationDelay: "3s"
                }}
              >
                <div className="w-[240px] h-[140px] bg-[#E5E0D8] rounded-2xl shadow-[-30px_30px_60px_rgba(0,0,0,0.2)] border-l-2 border-t-2 border-white/60 flex flex-col justify-between p-5 relative">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-mono font-bold text-brand-dark/60 tracking-wider">MOD_01S</span>
                    <span className="px-2 py-0.5 bg-brand-accent/10 rounded-full text-[9px] font-extrabold text-brand-accent uppercase tracking-widest">Base</span>
                  </div>
                  
                  {/* Subtle indentation to show cushion divider */}
                  <div className="absolute top-0 bottom-0 left-[50%] w-[1.5px] bg-brand-dark/5 opacity-20" />

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-black uppercase text-brand-dark tracking-widest">Seat Block double</p>
                      <p className="text-[9px] text-brand-muted">Stone Bouclé Fabric</p>
                    </div>
                    {/* Metal modular connection rings */}
                    <div className="flex space-x-2 pb-1">
                      <div className="w-3.5 h-3.5 rounded-full border border-brand-muted/40 bg-brand-bg flex items-center justify-center shadow-inner">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      </div>
                      <div className="w-3.5 h-3.5 rounded-full border border-brand-muted/40 bg-brand-bg flex items-center justify-center shadow-inner">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent Pillow Block (Floating in front) */}
              <div 
                className="absolute z-40 transition-all duration-[1500ms] hover:scale-110"
                style={{
                  bottom: "16%",
                  right: "18%",
                  transform: "perspective(1000px) rotateX(30deg) rotateY(-45deg) rotateZ(10deg)",
                  animation: "float 6s ease-in-out infinite",
                  animationDelay: "4.5s"
                }}
              >
                <div className="w-[90px] h-[90px] bg-brand-accent rounded-xl shadow-[-10px_10px_25px_rgba(194,89,63,0.3)] border-l border-t border-white/20 flex flex-col justify-between p-2.5 text-brand-bg">
                  <div className="flex justify-between">
                    <span className="text-[8px] font-mono opacity-80 tracking-wider">MOD_07A</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-wider">Accent Block</p>
                    <p className="text-[7px] opacity-80">Terracotta Velvet</p>
                  </div>
                </div>
                {/* Connecting indicator line */}
                <div className="absolute -top-12 left-6 w-0.5 h-12 border-r border-dashed border-brand-accent/50 z-10" />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
