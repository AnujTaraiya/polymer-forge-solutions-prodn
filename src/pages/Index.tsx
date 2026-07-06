import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

// Lazy load below-the-fold components for faster initial page load
const Products = lazy(() => import("@/components/Products"));
const Industries = lazy(() => import("@/components/Industries"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Suspense fallback={<div className="h-96 w-full flex items-center justify-center bg-slate-950 opacity-50 animate-pulse" />}>
        <Separator className="bg-secondary/30 h-[2px]" />
        <Products />
        <Separator className="bg-secondary/30 h-[2px]" />
        <Industries />
        <Separator className="bg-secondary/30 h-[2px]" />
        <About />
        <Separator className="bg-secondary/30 h-[2px]" />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
