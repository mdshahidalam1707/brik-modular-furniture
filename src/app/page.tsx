import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import ModularSystem from "@/components/ModularSystem";
import InteractiveBuilder from "@/components/InteractiveBuilder";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import ProductDetailStrip from "@/components/ProductDetailStrip";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-brand-bg overflow-x-hidden">
        <Hero />
        <BrandStatement />
        <ModularSystem />
        <InteractiveBuilder />
        <HowItWorks />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <ProductDetailStrip />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
