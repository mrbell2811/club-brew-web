import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { MemberSelection } from "./pages/MemberSelection";
import { BeverageSelection } from "./pages/BeverageSelection";
import { QuantitySelection } from "./pages/QuantitySelection";
import { SuccessConfirmation } from "./pages/SuccessConfirmation";
import { AdminPanel } from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/members" element={<MemberSelection />} />
          <Route path="/beverages/:memberId" element={<BeverageSelection />} />
          <Route path="/quantity/:memberId/:beverageId" element={<QuantitySelection />} />
          <Route path="/success" element={<SuccessConfirmation />} />
          <Route path="/admin" element={<AdminPanel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
