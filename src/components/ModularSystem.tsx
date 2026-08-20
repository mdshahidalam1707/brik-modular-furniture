"use client";

import { ArrowUpRight } from "lucide-react";

interface ModuleCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  material: string;
  dimensions: string;
  svgIcon: React.ReactNode;
}

export default function ModularSystem() {
  const modules: ModuleCardProps[] = [
    {
      id: "M1",
      title: "Seat Module",
      subtitle: "Start anywhere.",
      description: "The core cushion unit. Highly resilient foam wrapped in premium tactile bouclé fabric.",
      material: "Bouclé Wool / Pine Core",
      dimensions: "80 x 80 x 42 cm",
      svgIcon: (
        <svg className="w-full h-full text-brand-dark" viewBox="0 0 200 160" fill="none">
          {/* Isometric Seat Cushion Block */}
          <path d="M100 20 L160 50 L100 80 L40 50 Z" fill="#E5E0D8" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M40 50 L100 80 L100 120 L40 90 Z" fill="#CECBC2" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M100 80 L160 50 L160 90 L100 120 Z" fill="#B2AFA7" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Connection pins on sides */}
          <circle cx="70" cy="95" r="3" fill="#C2593F" />
          <circle cx="130" cy="95" r="3" fill="#C2593F" />
          {/* Dimensions label */}
          <path d="M30 65 L30 100" stroke="#706F6C" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M170 65 L170 100" stroke="#706F6C" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: "M2",
      title: "Corner Module",
      subtitle: "Turn the corner.",
      description: "An angled backrest designed to slide securely into the base module to create corners or sectionals.",
      material: "Hardwood Core / Density Foam",
      dimensions: "80 x 80 x 78 cm",
      svgIcon: (
        <svg className="w-full h-full text-brand-dark" viewBox="0 0 200 160" fill="none">
          {/* Isometric Corner Block */}
          {/* Backrest part */}
          <path d="M60 20 L120 50 L90 65 L30 35 Z" fill="#D2CDBE" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M30 35 L90 65 L90 125 L30 95 Z" fill="#B4B0A3" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M90 65 L120 50 L120 110 L90 125 Z" fill="#9B988D" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Side Cushion block offset */}
          <path d="M90 65 L150 35 L180 50 L120 80 Z" fill="#E2DDD2" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M120 80 L180 50 L180 110 L120 140 Z" fill="#9B988D" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Connector point indicator */}
          <line x1="90" y1="125" x2="120" y2="140" stroke="#C2593F" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="120" cy="140" r="3.5" fill="#C2593F" />
        </svg>
      )
    },
    {
      id: "M3",
      title: "Table Module",
      subtitle: "Add another function.",
      description: "A hard surface module crafted from solid white oak. Snaps directly between two seats or serves as a standalone piece.",
      material: "Solid White Oak / Steel Supports",
      dimensions: "80 x 40 x 30 cm",
      svgIcon: (
        <svg className="w-full h-full text-brand-dark" viewBox="0 0 200 160" fill="none">
          {/* Isometric Table Top */}
          <path d="M100 40 L150 65 L100 90 L50 65 Z" fill="#D6BA9A" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M50 65 L100 90 L100 100 L50 75 Z" fill="#BC9F80" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M100 90 L150 65 L150 75 L100 100 Z" fill="#A3886A" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Leg Support Wireframe */}
          <path d="M60 70 L60 120" stroke="#121212" strokeWidth="1.5" />
          <path d="M140 70 L140 120" stroke="#121212" strokeWidth="1.5" />
          <path d="M100 92 L100 135" stroke="#121212" strokeWidth="1.5" />
          <circle cx="100" cy="135" r="3" fill="#C2593F" />
        </svg>
      )
    },
    {
      id: "M4",
      title: "Storage Module",
      subtitle: "Make room for more.",
      description: "Seamless steel shelving inserts designed to attach under tables or serve as architectural structural cubbies.",
      material: "Powder Coated Steel / Brass Accents",
      dimensions: "40 x 40 x 40 cm",
      svgIcon: (
        <svg className="w-full h-full text-brand-dark" viewBox="0 0 200 160" fill="none">
          {/* Isometric Steel Storage Box */}
          <path d="M100 30 L150 55 L100 80 L50 55 Z" fill="#2C2C2A" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M50 55 L100 80 L100 130 L50 105 Z" fill="#1C1C1A" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Open Shelving Visual inside */}
          <path d="M100 80 L150 55 L150 105 L100 130 Z" fill="#222220" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M100 105 L150 80" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Inside detail shelf color */}
          <path d="M110 90 L140 75" stroke="#C2593F" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section id="system" className="py-24 md:py-32 bg-brand-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-brand-border/60 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent block mb-3">
              SYSTEM SPECS
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-dark">
              ONE SYSTEM. ENDLESS BUILDS.
            </h2>
          </div>
          <p className="text-brand-muted text-base md:text-lg max-w-sm mt-4 md:mt-0 font-light leading-relaxed">
            Four primary building blocks. Unlimited architectural configurations for any living situation.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="group flex flex-col bg-brand-stone border border-brand-border/50 hover:border-brand-dark/80 rounded-sm p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex-1"
            >
              {/* Product Visual Area */}
              <div className="w-full aspect-[4/3] flex items-center justify-center bg-brand-bg/50 border border-brand-border/40 rounded-sm p-4 mb-6 transition-transform duration-500 group-hover:scale-[1.02] relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  {mod.svgIcon}
                </div>
                {/* Tech ID Label */}
                <span className="absolute top-3 left-3 text-[10px] font-bold text-brand-muted/75 font-mono">
                  {mod.id} // BRIK_SYS
                </span>
              </div>

              {/* Title & Arrow */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">{mod.title}</h3>
                  <p className="text-sm font-semibold text-brand-accent tracking-wide">{mod.subtitle}</p>
                </div>
                <div className="p-1 rounded-full border border-brand-border text-brand-muted group-hover:text-brand-accent group-hover:border-brand-accent transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-brand-muted font-light leading-relaxed mb-6 flex-grow">
                {mod.description}
              </p>

              {/* Specs Drawer */}
              <div className="border-t border-brand-border/80 pt-4 flex flex-col gap-2 text-[11px] font-medium tracking-wide text-brand-muted">
                <div className="flex justify-between">
                  <span>MATERIALS:</span>
                  <span className="text-brand-dark">{mod.material}</span>
                </div>
                <div className="flex justify-between">
                  <span>DIMENSIONS:</span>
                  <span className="text-brand-dark">{mod.dimensions}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
