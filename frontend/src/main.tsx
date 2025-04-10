import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Toaster } from '~/components/ui/sonner.tsx';

import './styles/globals.css';
import Layout from '~/components/layout';
import Home from '~/pages/home';
import AboutUs from '~/pages/about-us';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Toaster />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
