"use client";

import React, { useEffect } from 'react';
import SiteHeader from '../../components/SiteHeader';
import About from '../../components/About';
import SiteFooter from '../../components/SiteFooter';
import FloatingActions from '../../components/FloatingActions';

export default function AboutPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out' });
      });
    }
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="main" style={{ minHeight: '60vh' }}>
        <About />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
