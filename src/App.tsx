import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Ppc from './pages/Ppc';
import Terms from './pages/Terms';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to /ppc */}
          <Route path="/" element={<Navigate to="/ppc" replace />} />
          <Route path="/ppc" element={<Ppc />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          {/* Any other route should redirect to /ppc */}
          <Route path="*" element={<Navigate to="/ppc" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
