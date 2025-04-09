import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from '~/components/ui/sonner.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/globals.css';
import Layout from '~/components/layout';
import Home from '~/pages/home';

const queryClient = new QueryClient();
import AboutUs from '~/pages/about-us';
import Counter from '~/pages/counter';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
