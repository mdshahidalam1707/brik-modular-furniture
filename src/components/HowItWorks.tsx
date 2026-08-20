"use client";

import { Check } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-brand-bg scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent block mb-3">
            THE PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-brand-dark mb-4">
            FROM MODULES TO MOMENTS.
          </h2>
          <p className="text-brand-muted text-base md:text-lg font-light leading-relaxed">
            No assembly instructions that read like ancient scroll scripts. Just three intuitive steps to a completed premium space.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Step 1 */}
          <div className="flex flex-col border-t border-brand-border/60 pt-8 relative group">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6 block">
              STEP ONE
            </span>
            <div className="text-6xl md:text-7xl font-light tracking-tighter text-brand-dark mb-6 font-mono opacity-25 group-hover:opacity-100 transition-opacity duration-300">
              01
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
              Choose
            </h3>
            <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed mb-8 flex-grow">
              Pick the modules that fit your life today. Select cushions, backrests, side tables, or shelving inserts to fit your dimensions exactly.
            </p>
            {/* Visual Icon/Diagram */}
            <div className="bg-brand-stone border border-brand-border/40 aspect-[16/10] flex items-center justify-center p-4 rounded-sm">
              <svg className="w-full h-full text-brand-dark" viewBox="0 0 150 90" fill="none">
                {/* 3 separate cushions representing selection options */}
                <path d="M40 30 L65 18 L40 6 L15 18 Z" fill="#E5E0D8" stroke="#121212" strokeWidth="1" />
                <path d="M15 18 L40 30 L40 40 L15 28 Z" fill="#CECBC2" stroke="#121212" strokeWidth="1" />
                <path d="M40 30 L65 18 L65 28 L40 40 Z" fill="#B2AFA7" stroke="#121212" strokeWidth="1" />

                <path d="M110 35 L135 23 L110 11 L85 23 Z" fill="#C2593F" stroke="#121212" strokeWidth="1" />
                <path d="M85 23 L110 35 L110 45 L85 33 Z" fill="#AB4B33" stroke="#121212" strokeWidth="1" />
                <path d="M110 35 L135 23 L135 33 L110 45 Z" fill="#933C26" stroke="#121212" strokeWidth="1" />
                
                {/* Plus Sign */}
                <path d="M70 25 L80 25 M75 20 L75 30" stroke="#121212" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col border-t border-brand-border/60 pt-8 relative group">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6 block">
              STEP TWO
            </span>
            <div className="text-6xl md:text-7xl font-light tracking-tighter text-brand-dark mb-6 font-mono opacity-25 group-hover:opacity-100 transition-opacity duration-300">
              02
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
              Connect
            </h3>
            <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed mb-8 flex-grow">
              Align and slide modules together. The heavy-duty aluminum locking pins automatically snap and lock into place securely. No tools required.
            </p>
            {/* Visual Icon/Diagram */}
            <div className="bg-brand-stone border border-brand-border/40 aspect-[16/10] flex items-center justify-center p-4 rounded-sm">
              <svg className="w-full h-full text-brand-dark" viewBox="0 0 150 90" fill="none">
                {/* Connect arrow visual */}
                <path d="M50 35 L75 23 L50 11 L25 23 Z" fill="#E5E0D8" stroke="#121212" strokeWidth="1" />
                <path d="M25 23 L50 35 L50 45 L25 33 Z" fill="#CECBC2" stroke="#121212" strokeWidth="1" />
                <path d="M50 35 L75 23 L75 33 L50 45 Z" fill="#B2AFA7" stroke="#121212" strokeWidth="1" />

                <path d="M100 35 L125 23 L100 11 L75 23 Z" fill="#E5E0D8" stroke="#121212" strokeWidth="1" />
                <path d="M75 23 L100 35 L100 45 L75 33 Z" fill="#CECBC2" stroke="#121212" strokeWidth="1" />
                <path d="M100 35 L125 23 L125 33 L100 45 Z" fill="#B2AFA7" stroke="#121212" strokeWidth="1" />
                
                {/* Dotted lines & pins snapping */}
                <path d="M75 18 L75 30" stroke="#C2593F" strokeWidth="1.5" strokeDasharray="2 2" />
                <circle cx="75" cy="24" r="3.5" fill="#C2593F" />
                <circle cx="75" cy="12" r="2" fill="#121212" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col border-t border-brand-border/60 pt-8 relative group">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6 block">
              STEP THREE
            </span>
            <div className="text-6xl md:text-7xl font-light tracking-tighter text-brand-dark mb-6 font-mono opacity-25 group-hover:opacity-100 transition-opacity duration-300">
              03
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-4 uppercase tracking-tight">
              Rebuild
            </h3>
            <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed mb-8 flex-grow">
              Change the configuration whenever your lifestyle demands it. Turn a two-seater sofa into a workspace lounge, coffee table setup, or storage shelf unit in minutes.
            </p>
            {/* Visual Icon/Diagram */}
            <div className="bg-brand-stone border border-brand-border/40 aspect-[16/10] flex items-center justify-center p-4 rounded-sm">
              <svg className="w-full h-full text-brand-dark" viewBox="0 0 150 90" fill="none">
                {/* Arrow loop representing change */}
                <path d="M75 45 C100 45 105 25 75 25 C45 25 50 45 75 45 Z" stroke="#C2593F" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M70 20 L75 25 L70 30" stroke="#C2593F" strokeWidth="1.5" />
                
                {/* Recombined block */}
                <path d="M75 35 L105 20 L75 5 L45 20 Z" fill="#E5E0D8" stroke="#121212" strokeWidth="0.8" />
                <path d="M45 20 L75 35 L75 45 L45 30 Z" fill="#CECBC2" stroke="#121212" strokeWidth="0.8" />
                <path d="M75 35 L105 20 L105 30 L75 45 Z" fill="#B2AFA7" stroke="#121212" strokeWidth="0.8" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
