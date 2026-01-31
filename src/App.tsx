import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ColourSolutions from "./pages/ColourSolutions";
import ConductiveAntistatic from "./pages/ConductiveAntistatic";
import FlameRetardant from "./pages/FlameRetardant";
import LgfCompounds from "./pages/LgfCompounds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/colour-solutions" element={<ColourSolutions />} />
          <Route path="/conductive-and-electrostatic-protection" element={<ConductiveAntistatic />} />
          <Route path="/flame-retardant" element={<FlameRetardant />} />
          <Route path="/long-glass-fiber" element={<LgfCompounds />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
