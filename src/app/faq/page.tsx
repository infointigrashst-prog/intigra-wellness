"use client";

import React, { useEffect } from 'react';
import SiteHeader from '../../components/SiteHeader';
import FAQ from '../../components/FAQ';
import SiteFooter from '../../components/SiteFooter';
import FloatingActions from '../../components/FloatingActions';

export default function FAQPage() {
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
        <FAQ />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
