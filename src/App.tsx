import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import OrganizationAdmins from "./pages/OrganizationAdmins";
import Runners from "./pages/Runners";
import RunnerDetail from "./pages/RunnerDetail";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/organization-admins" element={<OrganizationAdmins />} />
            <Route path="/runners" element={<Runners />} />
            <Route path="/runners/:id" element={<RunnerDetail />} />
            <Route path="/organizations" element={<ComingSoon />} />
            <Route path="/content" element={<ComingSoon />} />
            <Route path="/reports" element={<ComingSoon />} />
            <Route path="/settings" element={<ComingSoon />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
