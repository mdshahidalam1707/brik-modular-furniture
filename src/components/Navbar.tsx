"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-header border-b border-brand-border py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-brand-dark transition-opacity hover:opacity-80"
          >
            BRIK
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide text-brand-muted">
            <a
              href="#system"
              className="hover:text-brand-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-accent after:transition-all hover:after:w-full"
            >
              System
            </a>
            <a
              href="#products"
              className="hover:text-brand-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-accent after:transition-all hover:after:w-full"
            >
              Products
            </a>
            <a
              href="#how-it-works"
              className="hover:text-brand-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-accent after:transition-all hover:after:w-full"
            >
              How It Works
            </a>
            <a
              href="#reviews"
              className="hover:text-brand-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-accent after:transition-all hover:after:w-full"
            >
              Reviews
            </a>
          </nav>

          {/* Right CTA */}
          <div className="hidden md:block">
            <a
              href="#builder"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-brand-bg text-sm font-semibold tracking-wide rounded-sm transition-all duration-300 hover:bg-brand-accent group"
            >
              Build Yours
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-dark hover:text-brand-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-md transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-32 pb-12 px-8">
          <nav className="flex flex-col space-y-8 text-3xl font-light tracking-tight">
            <a
              href="#system"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-dark hover:text-brand-accent transition-colors"
            >
              System
            </a>
            <a
              href="#products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-dark hover:text-brand-accent transition-colors"
            >
              Products
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-dark hover:text-brand-accent transition-colors"
            >
              How It Works
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-dark hover:text-brand-accent transition-colors"
            >
              Reviews
            </a>
          </nav>

          <div className="flex flex-col space-y-6">
            <a
              href="#builder"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 bg-brand-dark text-brand-bg font-semibold text-lg rounded-sm transition-colors hover:bg-brand-accent"
            >
              Build Yours
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-center text-xs text-brand-muted">
              Designed to evolve. Built to last.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
