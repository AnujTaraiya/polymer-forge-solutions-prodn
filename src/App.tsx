import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Index from "./pages/Index";

// Lazy Load Pages for Performance
const NotFound = lazy(() => import("./pages/NotFound"));
const ColourSolutions = lazy(() => import("./pages/ColourSolutions"));
const ConductiveAntistatic = lazy(() => import("./pages/ConductiveAntistatic"));
const FlameRetardant = lazy(() => import("./pages/FlameRetardant"));
const LgfCompounds = lazy(() => import("./pages/LgfCompounds"));

const queryClient = new QueryClient();

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={
          <div className="flex h-screen w-full items-center justify-center bg-slate-950">
            <div className="text-sky-400 animate-pulse text-xl font-bold">Loading PolyNeo...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/colour-solutions" element={<ColourSolutions />} />
            <Route path="/conductive-and-electrostatic-protection" element={<ConductiveAntistatic />} />
            <Route path="/flame-retardant" element={<FlameRetardant />} />
            <Route path="/long-glass-fiber" element={<LgfCompounds />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
