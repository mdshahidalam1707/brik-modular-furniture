"use client";

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border/60 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand column */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-2xl font-bold tracking-tight text-brand-dark">
              BRIK
            </span>
            <p className="text-sm font-semibold text-brand-accent tracking-widest mt-1 block uppercase">
              Build Your Space.
            </p>
          </div>
          <p className="text-brand-muted text-xs font-light max-w-sm mt-8 leading-relaxed">
            BRIK creates premium modular furniture systems designed to evolve with the way you live. Connect, rearrange, and expand your spaces without tools.
          </p>
        </div>

        {/* Links column 1 */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-dark">
            SYSTEM
          </span>
          <nav className="flex flex-col space-y-3 text-sm text-brand-muted font-medium">
            <a href="#system" className="hover:text-brand-dark transition-colors">
              Modular System
            </a>
            <a href="#products" className="hover:text-brand-dark transition-colors">
              Product Showcase
            </a>
            <a href="#builder" className="hover:text-brand-dark transition-colors">
              Interactive Builder
            </a>
          </nav>
        </div>

        {/* Links column 2 */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-dark">
            INFO
          </span>
          <nav className="flex flex-col space-y-3 text-sm text-brand-muted font-medium">
            <a href="#how-it-works" className="hover:text-brand-dark transition-colors">
              How It Works
            </a>
            <a href="#" className="hover:text-brand-dark transition-colors">
              Journal
            </a>
            <a href="#" className="hover:text-brand-dark transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {/* Links column 3 */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-dark">
            SPECIFICATION
          </span>
          <nav className="flex flex-col space-y-3 text-sm text-brand-muted font-medium">
            <span className="hover:text-brand-dark transition-colors cursor-default">
              Version 1.0.4
            </span>
            <span className="hover:text-brand-dark transition-colors cursor-default">
              Patent Pending
            </span>
          </nav>
        </div>

      </div>

      {/* Footer Bottom Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-brand-border/60 mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-brand-muted gap-4">
        
        {/* Concept Project Disclaimer */}
        <p className="max-w-md font-light leading-relaxed">
          <strong className="text-brand-dark font-semibold">Note:</strong> BRIK is a fictional concept project created for a frontend design and development internship assignment. No actual furniture is sold.
        </p>

        {/* Copyright */}
        <div className="flex flex-col sm:items-end text-right">
          <span className="font-semibold text-brand-dark">
            © 2026 BRIK. Concept project.
          </span>
          <span className="text-[10px] font-mono tracking-wider text-brand-muted mt-1">
            ALL RIGHTS RESERVED // DESIGN BY ANTIGRAVITY
          </span>
        </div>

      </div>
    </footer>
  );
}
