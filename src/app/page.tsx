"use client";

import React, { useEffect } from 'react';
import SiteHeader from '../components/SiteHeader';
import Hero from '../components/Hero';
import BodyMap from '../components/BodyMap';
import ProcessTimeline from '../components/ProcessTimeline';
import Testimonials from '../components/Testimonials';
import SiteFooter from '../components/SiteFooter';
import FloatingActions from '../components/FloatingActions';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-out'
        });
      });
    }
  }, []);

  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <BodyMap />
        <ProcessTimeline />
        <Testimonials />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
