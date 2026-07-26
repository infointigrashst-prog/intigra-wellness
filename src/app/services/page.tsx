"use client";

import React, { useEffect, Suspense } from 'react';
import SiteHeader from '../../components/SiteHeader';
import Services from '../../components/Services';
import SiteFooter from '../../components/SiteFooter';
import FloatingActions from '../../components/FloatingActions';

export default function ServicesPage() {
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
        <Suspense fallback={<div className="container py-5 text-center"><i className="fa-solid fa-spinner fa-spin fa-2xl" style={{ color: 'var(--teal)' }}></i></div>}>
          <Services />
        </Suspense>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
