"use client";

import { Layers, Zap, Shield, RefreshCw } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Modular",
      description: "Move. Add. Remove. Rebuild. Change the layout in minutes to transition from a cozy lounge chair to a full-sized hosting sofa.",
      icon: <Layers className="w-5 h-5 text-brand-accent" />,
      subtext: "INFINITE VARIATION"
    },
    {
      title: "Tool-Free",
      description: "Designed for simple snap-and-lock assembly. The integrated magnetic alignment pins lock modules in place without a single wrench.",
      icon: <Zap className="w-5 h-5 text-brand-accent" />,
      subtext: "SNAP CONNECTION"
    },
    {
      title: "Built to Last",
      description: "Premium commercial-grade fabrics, solid white oak, and structural steel frames guarantee your furniture endures a lifetime.",
      icon: <Shield className="w-5 h-5 text-brand-accent" />,
      subtext: "LIFETIME WARRANTY"
    },
    {
      title: "Designed to Evolve",
      description: "Add new modules or change colors whenever your needs or aesthetic preferences shift. Our system is backwards-compatible.",
      icon: <RefreshCw className="w-5 h-5 text-brand-accent" />,
      subtext: "FUTURE PROOF"
    }
  ];

  return (
    <section className="py-24 bg-brand-stone border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent block mb-3">
            THE BRIK ADVANTAGE
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-dark mb-4">
            BUILT FOR REAL LIFE.
          </h2>
          <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed">
            Every detail is engineered with an architectural mindset, combining long-term durability with everyday functionality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => (
            <div 
              key={index}
              className="bg-brand-bg border border-brand-border/50 rounded-sm p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-dark hover:shadow-lg"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-brand-stone rounded-sm border border-brand-border/40">
                    {feat.icon}
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-brand-muted font-bold">
                    {feat.subtext}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-dark mb-3 uppercase tracking-tight">
                  {feat.title}
                </h3>
                
                {/* Description */}
                <p className="text-brand-muted text-sm font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
              
              {/* Technical Indicator Bottom Detail */}
              <div className="mt-8 pt-4 border-t border-brand-border/40 flex justify-between text-[9px] font-mono text-brand-muted/60">
                <span>SPEC_REF // BRK_{feat.title.toUpperCase().replace("-", "")}</span>
                <span>STATUS // OK</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
