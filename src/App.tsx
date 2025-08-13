
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import History from "./pages/History";
import Quiz from "./pages/Quiz";
import ErrorBin from "./pages/ErrorBin";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import MapaChile from "./pages/MapaChile";
import HimnoChile from "./pages/HimnoChile";
import Practica from "./pages/Practica";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/history" element={<History />} />
              <Route path="/quiz" element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              } />
              <Route path="/error-bin" element={<ErrorBin />} />
              <Route path="/himno" element={<HimnoChile />} />
              <Route path="/mapa" element={<MapaChile />} />
              <Route path="/practica" element={<Practica />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
