"use client";

import { useState } from "react";
import { Plus, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";

interface ConfigOption {
  id: string;
  name: string;
  price: string;
  description: string;
  modulesUsed: string[];
  specs: {
    width: string;
    depth: string;
    height: string;
    fabric: string;
  };
}

export default function InteractiveBuilder() {
  const [activeTab, setActiveTab] = useState<"sofa" | "lounge" | "workspace" | "storage">("sofa");

  const configData: Record<string, ConfigOption> = {
    sofa: {
      id: "C1",
      name: "BRIK Two-Seater",
      price: "$1,299",
      description: "Two modules. One effortless place to land. Perfect for compact living rooms, reading nooks, or modern studios.",
      modulesUsed: ["2x Seat Module", "2x Backrest Module"],
      specs: {
        width: "160 cm",
        depth: "80 cm",
        height: "78 cm",
        fabric: "Stone Bouclé (Wool Blend)"
      }
    },
    lounge: {
      id: "C2",
      name: "BRIK Corner Lounge",
      price: "$1,899",
      description: "Expand the system. Make room for everyone. Includes a corner wedge that connects modules in an L-shape for premium lounging.",
      modulesUsed: ["3x Seat Module", "3x Backrest Module", "1x Corner Module"],
      specs: {
        width: "240 cm",
        depth: "160 cm",
        height: "78 cm",
        fabric: "Warm Grey Bouclé (Wool Blend)"
      }
    },
    workspace: {
      id: "C3",
      name: "BRIK Studio Desk + Seat",
      price: "$1,499",
      description: "Integrated productivity. A spacious white oak desktop snapped with a tactile workspace seat and floating metal shelves.",
      modulesUsed: ["1x Seat Module", "1x Backrest Module", "1x Table Module", "1x Storage Module"],
      specs: {
        width: "160 cm",
        depth: "80 cm",
        height: "78 cm",
        fabric: "Stone Bouclé & Solid Oak Wood"
      }
    },
    storage: {
      id: "C4",
      name: "BRIK Credenza & Shelf",
      price: "$999",
      description: "Minimalist display. Two table modules stacked vertically with dual steel storage compartments for magazines, records, or books.",
      modulesUsed: ["2x Table Module", "2x Storage Module"],
      specs: {
        width: "160 cm",
        depth: "40 cm",
        height: "60 cm",
        fabric: "Solid White Oak & Charcoal Steel"
      }
    }
  };

  const activeData = configData[activeTab];

  return (
    <section id="builder" className="py-24 md:py-32 bg-brand-stone border-y border-brand-border/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent block mb-3 animate-pulse-subtle">
            INTERACTIVE CONFIGURATOR
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-dark mb-4">
            BUILD IT YOUR WAY.
          </h2>
          <p className="text-brand-muted text-base md:text-lg font-light leading-relaxed">
            Select a starting template below. Watch how the modular building blocks slide and connect together instantly.
          </p>
        </div>

        {/* Builder Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Visual Interactive Canvas */}
          <div className="lg:col-span-7 bg-brand-bg rounded-sm border border-brand-border/80 shadow-md p-6 md:p-12 aspect-[4/3] flex flex-col justify-between relative overflow-hidden group min-h-[350px]">
            
            {/* Visual Canvas Label/Grid Deco */}
            <div className="absolute top-4 left-6 flex items-center gap-3 pointer-events-none z-10">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span className="text-[10px] font-mono tracking-widest text-brand-muted">
                ACTIVE CONFIG: {activeTab.toUpperCase()}_SYS_v1.0
              </span>
            </div>

            <div className="absolute top-4 right-6 flex items-center gap-2 text-brand-muted pointer-events-none z-10">
              <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
              <span className="text-[9px] font-bold tracking-wider font-mono">AUTOSNAPPING ENABLED</span>
            </div>

            {/* Architectural Grid Lines */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0">
              <div className="w-full h-full" style={{ backgroundImage: "linear-gradient(rgba(18,18,18,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(18,18,18,0.2) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            </div>

            {/* Dynamic CSS/SVG Modules Assembly Container */}
            <div className="flex-grow flex items-center justify-center relative w-full h-full z-10 scale-[0.65] sm:scale-[0.85] md:scale-100 transition-transform duration-500">
              
              {/* Sofa Assembly Visual (2 seats, 2 backrests) */}
              <div 
                className={`absolute transition-all duration-[800ms] ease-out-back ${
                  activeTab === "sofa" ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                }`}
                style={{ width: "320px", height: "200px" }}
              >
                <svg className="w-full h-full" viewBox="0 0 320 200" fill="none">
                  {/* Left Cushion */}
                  <g className="transition-transform duration-[800ms] ease-out-back" style={{ transform: activeTab === "sofa" ? "translate(0px, 0px)" : "translate(-60px, -20px)" }}>
                    <path d="M100 80 L160 50 L100 20 L40 50 Z" fill="#E5E0D8" stroke="#121212" strokeWidth="1.5" />
                    <path d="M40 50 L100 80 L100 120 L40 90 Z" fill="#CECBC2" stroke="#121212" strokeWidth="1.5" />
                    <path d="M100 80 L160 50 L160 90 L100 120 Z" fill="#B2AFA7" stroke="#121212" strokeWidth="1.5" />
                  </g>
                  {/* Right Cushion */}
                  <g className="transition-transform duration-[800ms] ease-out-back" style={{ transform: activeTab === "sofa" ? "translate(0px, 0px)" : "translate(60px, 20px)" }}>
                    <path d="M160 110 L220 80 L160 50 L100 80 Z" fill="#E5E0D8" stroke="#121212" strokeWidth="1.5" />
                    <path d="M100 80 L160 110 L160 150 L100 120 Z" fill="#CECBC2" stroke="#121212" strokeWidth="1.5" />
                    <path d="M160 110 L220 80 L220 120 L160 150 Z" fill="#B2AFA7" stroke="#121212" strokeWidth="1.5" />
                  </g>
                  {/* Left Backrest */}
                  <g className="transition-transform duration-[950ms] ease-out-back" style={{ transform: activeTab === "sofa" ? "translate(0px, 0px)" : "translate(-80px, -40px)" }}>
                    <path d="M70 20 L100 5 L70 -10 L40 5 Z" fill="#D4CFC6" stroke="#121212" strokeWidth="1.5" />
                    <path d="M40 5 L70 20 L70 50 L40 35 Z" fill="#B4B0A3" stroke="#121212" strokeWidth="1.5" />
                    <path d="M70 20 L100 5 L100 35 L70 50 Z" fill="#9B988D" stroke="#121212" strokeWidth="1.5" />
                  </g>
                  {/* Right Backrest */}
                  <g className="transition-transform duration-[1100ms] ease-out-back" style={{ transform: activeTab === "sofa" ? "translate(0px, 0px)" : "translate(-20px, -60px)" }}>
                    <path d="M130 50 L160 35 L130 20 L100 35 Z" fill="#D4CFC6" stroke="#121212" strokeWidth="1.5" />
                    <path d="M100 35 L130 50 L130 80 L100 65 Z" fill="#B4B0A3" stroke="#121212" strokeWidth="1.5" />
                    <path d="M130 50 L160 35 L160 65 L130 80 Z" fill="#9B988D" stroke="#121212" strokeWidth="1.5" />
                  </g>
                  {/* Snapping connector dashes */}
                  <path d="M100 80 L100 65" stroke="#C2593F" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="100" cy="80" r="3.5" fill="#C2593F" />
                </svg>
              </div>

              {/* Lounge Assembly Visual (L-shape cushion structure) */}
              <div 
                className={`absolute transition-all duration-[800ms] ease-out-back ${
                  activeTab === "lounge" ? "opacity-100 scale-100 animate-fade-in-up" : "opacity-0 scale-90 pointer-events-none"
                }`}
                style={{ width: "320px", height: "200px" }}
              >
                <svg className="w-full h-full" viewBox="0 0 320 200" fill="none">
                  {/* Left Cushion */}
                  <g className="transition-transform duration-[800ms] ease-out-back" style={{ transform: activeTab === "lounge" ? "translate(0px, 0px)" : "translate(-100px, -20px)" }}>
                    <path d="M80 80 L140 50 L80 20 L20 50 Z" fill="#D2CDBE" stroke="#121212" strokeWidth="1.5" />
                    <path d="M20 50 L80 80 L80 120 L20 90 Z" fill="#B4B0A3" stroke="#121212" strokeWidth="1.5" />
                    <path d="M80 80 L140 50 L140 90 L80 120 Z" fill="#9B988D" stroke="#121212" strokeWidth="1.5" />
                  </g>
                  {/* Center Cushion */}
                  <g className="transition-transform duration-[800ms] ease-out-back">
                    <path d="M140 110 L200 80 L140 50 L80 80 Z" fill="#E5E0D8" stroke="#121212" strokeWidth="1.5" />
                    <path d="M80 80 L140 110 L140 150 L80 120 Z" fill="#CECBC2" stroke="#121212" strokeWidth="1.5" />
                    <path d="M140 110 L200 80 L200 120 L140 150 Z" fill="#B2AFA7" stroke="#121212" strokeWidth="1.5" />
                  </g>
                  {/* Extension Cushion L-part */}
                  <g className="transition-transform duration-[950ms] ease-out-back" style={{ transform: activeTab === "lounge" ? "translate(0px, 0px)" : "translate(80px, 60px)" }}>
                    <path d="M200 140 L260 110 L200 80 L140 110 Z" fill="#E5E0D8" stroke="#121212" strokeWidth="1.5" />
                    <path d="M140 110 L200 140 L200 180 L140 150 Z" fill="#CECBC2" stroke="#121212" strokeWidth="1.5" />
                    <path d="M200 140 L260 110 L260 150 L200 180 Z" fill="#B2AFA7" stroke="#121212" strokeWidth="1.5" />
                  </g>
                  {/* Corner Wedge Backrest */}
                  <g className="transition-transform duration-[1100ms] ease-out-back" style={{ transform: activeTab === "lounge" ? "translate(0px, 0px)" : "translate(0px, -80px)" }}>
                    <path d="M110 50 L140 35 L110 20 L80 35 Z" fill="#C2593F" stroke="#121212" strokeWidth="1.5" />
                    <path d="M80 35 L110 50 L110 80 L80 65 Z" fill="#AB4B33" stroke="#121212" strokeWidth="1.5" />
                    <path d="M110 50 L140 35 L140 65 L110 80 Z" fill="#933C26" stroke="#121212" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>

              {/* Workspace Assembly Visual (desk surface, single seat, shelves) */}
              <div 
                className={`absolute transition-all duration-[800ms] ease-out-back ${
                  activeTab === "workspace" ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                }`}
                style={{ width: "320px", height: "200px" }}
              >
                <svg className="w-full h-full" viewBox="0 0 320 200" fill="none">
                  {/* Desk top wooden surface */}
                  <g className="transition-transform duration-[800ms] ease-out-back" style={{ transform: activeTab === "workspace" ? "translate(0px, 0px)" : "translate(-80px, -40px)" }}>
                    <path d="M80 70 L160 30 L100 0 L20 40 Z" fill="#D6BA9A" stroke="#121212" strokeWidth="1.5" />
                    <path d="M20 40 L80 70 L80 80 L20 50 Z" fill="#BC9F80" stroke="#121212" strokeWidth="1.5" />
                    <path d="M80 70 L160 30 L160 40 L80 80 Z" fill="#A3886A" stroke="#121212" strokeWidth="1.5" />
                    {/* Metal leg rods */}
                    <line x1="30" y1="48" x2="30" y2="120" stroke="#121212" strokeWidth="1.5" />
                    <line x1="150" y1="38" x2="150" y2="105" stroke="#121212" strokeWidth="1.5" />
                  </g>

                  {/* Seat Cushion connected adjacent */}
                  <g className="transition-transform duration-[950ms] ease-out-back" style={{ transform: activeTab === "workspace" ? "translate(0px, 0px)" : "translate(80px, 40px)" }}>
                    <path d="M140 100 L200 70 L140 40 L80 70 Z" fill="#E5E0D8" stroke="#121212" strokeWidth="1.5" />
                    <path d="M80 70 L140 100 L140 140 L80 110 Z" fill="#CECBC2" stroke="#121212" strokeWidth="1.5" />
                    <path d="M140 100 L200 70 L200 110 L140 140 Z" fill="#B2AFA7" stroke="#121212" strokeWidth="1.5" />
                  </g>

                  {/* Seat Backrest */}
                  <g className="transition-transform duration-[1100ms] ease-out-back" style={{ transform: activeTab === "workspace" ? "translate(0px, 0px)" : "translate(100px, 10px)" }}>
                    <path d="M110 40 L140 25 L110 10 L80 25 Z" fill="#D4CFC6" stroke="#121212" strokeWidth="1.5" />
                    <path d="M80 25 L110 40 L110 70 L80 55 Z" fill="#B4B0A3" stroke="#121212" strokeWidth="1.5" />
                    <path d="M110 40 L140 25 L140 55 L110 70 Z" fill="#9B988D" stroke="#121212" strokeWidth="1.5" />
                  </g>

                  {/* Under desk storage box */}
                  <g className="transition-transform duration-[850ms] ease-out-back" style={{ transform: activeTab === "workspace" ? "translate(0px, 0px)" : "translate(-40px, 30px)" }}>
                    <path d="M60 85 L90 70 L70 60 L40 75 Z" fill="#2C2C2A" stroke="#121212" strokeWidth="1.5" />
                    <path d="M40 75 L60 85 L60 115 L40 105 Z" fill="#1C1C1A" stroke="#121212" strokeWidth="1.5" />
                    <path d="M60 85 L90 70 L90 100 L60 115 Z" fill="#222220" stroke="#121212" strokeWidth="1.5" />
                  </g>
                  {/* Connecting points */}
                  <line x1="80" y1="70" x2="80" y2="90" stroke="#C2593F" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="80" cy="70" r="3" fill="#C2593F" />
                </svg>
              </div>

              {/* Storage Assembly Visual (stacked credenza shelf units) */}
              <div 
                className={`absolute transition-all duration-[800ms] ease-out-back ${
                  activeTab === "storage" ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                }`}
                style={{ width: "320px", height: "200px" }}
              >
                <svg className="w-full h-full" viewBox="0 0 320 200" fill="none">
                  {/* Lower Table Surface */}
                  <g className="transition-transform duration-[800ms] ease-out-back" style={{ transform: activeTab === "storage" ? "translate(0px, 0px)" : "translate(-20px, 50px)" }}>
                    <path d="M100 110 L180 70 L120 40 L40 80 Z" fill="#D6BA9A" stroke="#121212" strokeWidth="1.5" />
                    <path d="M40 80 L100 110 L100 120 L40 90 Z" fill="#BC9F80" stroke="#121212" strokeWidth="1.5" />
                    <path d="M100 110 L180 70 L180 80 L100 120 Z" fill="#A3886A" stroke="#121212" strokeWidth="1.5" />
                  </g>

                  {/* Upper Table Surface stacked */}
                  <g className="transition-transform duration-[950ms] ease-out-back" style={{ transform: activeTab === "storage" ? "translate(0px, 0px)" : "translate(-20px, -50px)" }}>
                    <path d="M100 65 L180 25 L120 -5 L40 35 Z" fill="#D6BA9A" stroke="#121212" strokeWidth="1.5" />
                    <path d="M40 35 L100 65 L100 75 L40 45 Z" fill="#BC9F80" stroke="#121212" strokeWidth="1.5" />
                    <path d="M100 65 L180 25 L180 35 L100 75 Z" fill="#A3886A" stroke="#121212" strokeWidth="1.5" />
                  </g>

                  {/* Left Storage Box insert */}
                  <g className="transition-transform duration-[850ms] ease-out-back" style={{ transform: activeTab === "storage" ? "translate(0px, 0px)" : "translate(-80px, 0px)" }}>
                    <path d="M60 70 L90 55 L70 45 L40 60 Z" fill="#2C2C2A" stroke="#121212" strokeWidth="1.5" />
                    <path d="M40 60 L60 70 L60 95 L40 85 Z" fill="#1C1C1A" stroke="#121212" strokeWidth="1.5" />
                    <path d="M60 70 L90 55 L90 80 L60 95 Z" fill="#222220" stroke="#121212" strokeWidth="1.5" />
                  </g>

                  {/* Right Storage Box insert */}
                  <g className="transition-transform duration-[1100ms] ease-out-back" style={{ transform: activeTab === "storage" ? "translate(0px, 0px)" : "translate(80px, 0px)" }}>
                    <path d="M120 40 L150 25 L130 15 L100 30 Z" fill="#2C2C2A" stroke="#121212" strokeWidth="1.5" />
                    <path d="M100 30 L120 40 L120 65 L100 55 Z" fill="#1C1C1A" stroke="#121212" strokeWidth="1.5" />
                    <path d="M120 40 L150 25 L150 50 L120 65 Z" fill="#222220" stroke="#121212" strokeWidth="1.5" />
                  </g>
                  {/* Snap connector details */}
                  <circle cx="100" cy="65" r="3" fill="#C2593F" />
                  <circle cx="120" cy="55" r="3" fill="#C2593F" />
                </svg>
              </div>

            </div>

            {/* Bottom Config Details Badge */}
            <div className="border-t border-brand-border/60 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs tracking-wider font-semibold text-brand-muted gap-2 z-10">
              <span className="flex items-center gap-1.5 uppercase">
                <ShieldCheck className="w-4 h-4 text-brand-accent" />
                DURABLE ALUMINUM SNAPPING PINS
              </span>
              <span className="font-mono text-[10px]">
                PART COUNT: {activeTab === "sofa" ? "04" : activeTab === "lounge" ? "07" : activeTab === "workspace" ? "04" : "04"} MODULES
              </span>
            </div>

          </div>

          {/* Right Side: Tab Selector & Configuration Details */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
            
            {/* Configuration Tabs */}
            <div className="mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-muted block mb-4">
                CHOOSE CONFIGURATION
              </span>
              <div className="grid grid-cols-2 gap-3">
                {(["sofa", "lounge", "workspace", "storage"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3.5 px-4 text-left border rounded-sm font-bold text-sm uppercase tracking-wider transition-all duration-300 flex justify-between items-center ${
                      activeTab === tab
                        ? "border-brand-dark bg-brand-dark text-brand-bg shadow-sm"
                        : "border-brand-border bg-transparent text-brand-muted hover:border-brand-dark hover:text-brand-dark"
                    }`}
                  >
                    <span>{tab}</span>
                    {activeTab === tab && <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Product details for active tab */}
            <div className="bg-brand-stone p-6 rounded-sm border border-brand-border/60 flex-grow flex flex-col justify-between mb-8 transition-all duration-500">
              
              <div className="mb-6">
                {/* Tech Code */}
                <span className="text-[10px] font-bold text-brand-accent tracking-widest block mb-2 font-mono">
                  MODEL: BRK-{activeData.id} // {activeTab.toUpperCase()}_SYSTEM
                </span>
                
                {/* Name & Price */}
                <div className="flex justify-between items-baseline mb-4 gap-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark tracking-tight leading-none">
                    {activeData.name}
                  </h3>
                  <span className="text-xl md:text-2xl font-black text-brand-accent leading-none font-mono">
                    {activeData.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-brand-muted font-light leading-relaxed mb-6">
                  {activeData.description}
                </p>

                {/* Modules Included */}
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-dark block mb-2.5">
                    INCLUDED IN SYSTEM
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeData.modulesUsed.map((mod, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-bg rounded-full text-xs font-semibold text-brand-dark border border-brand-border/60"
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-accent" />
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="border-t border-brand-border/80 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-dark block mb-3">
                  DIMENSIONS & COVER
                </span>
                <div className="grid grid-cols-2 gap-4 text-xs font-medium text-brand-muted">
                  <div>
                    <span className="block text-[10px] text-brand-muted/70 uppercase">WIDTH x DEPTH:</span>
                    <span className="text-brand-dark font-mono font-bold">{activeData.specs.width} x {activeData.specs.depth}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-brand-muted/70 uppercase">TOTAL HEIGHT:</span>
                    <span className="text-brand-dark font-mono font-bold">{activeData.specs.height}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[10px] text-brand-muted/70 uppercase">MATERIAL FINISH:</span>
                    <span className="text-brand-dark font-bold">{activeData.specs.fabric}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Configurator CTA Button */}
            <a
              href="#builder"
              className="inline-flex items-center justify-center gap-3 w-full py-4.5 bg-brand-dark text-brand-bg font-bold text-base tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-brand-accent group"
            >
              Order Configuration
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
