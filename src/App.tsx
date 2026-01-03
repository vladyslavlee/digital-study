import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Ppc from './pages/Ppc';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useLayoutEffect } from 'react';
import PPCMediaBayer from './pages/PpcMediaBayer';

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Wrapper>
          <Routes>
            {/* Redirect root to /ppc */}
            <Route path='/' element={<Navigate to='/ppc' replace />} />
            <Route path='/ppc' element={<Ppc />} />
            <Route path='/ppc-media-bayer' element={<PPCMediaBayer />} />
            <Route path='/terms-and-conditions' element={<Terms />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            {/* Any other route should redirect to /ppc */}
            <Route path='*' element={<Navigate to='/ppc' replace />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
