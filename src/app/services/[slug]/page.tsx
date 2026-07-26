"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import FloatingActions from '../../../components/FloatingActions';
import { servicesDetailsData } from '../../../services-data';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();

  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const service = servicesDetailsData[slug];

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

  // Redirect if slug is invalid
  useEffect(() => {
    if (!service && slug) {
      router.push('/services');
    }
  }, [service, slug, router]);

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center">
          <i className="fa-solid fa-spinner fa-spin text-3xl text-teal-600 mb-4"></i>
          <p className="text-slate-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SiteHeader />
      
      <main id="main" style={{ minHeight: '80vh' }}>
        {/* Service Header Section */}
        <section className="service-hero" style={{ background: 'var(--cream-2)', padding: '40px 0 45px' }}>
          <div className="container">
            <Link href="/services" className="btn-outline mb-4" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
              <i className="fa-solid fa-arrow-left"></i> Back to All Services
            </Link>
            <div className="row align-items-center mt-3">
              <div className="col-md-8">
                <span className="eyebrow">{service.category}</span>
                <h1 className="h-xl mt-2 mb-3">{service.title}</h1>
                <p className="lead" style={{ maxWidth: '640px', fontSize: '1.15rem' }}>{service.tagline}</p>
              </div>
              <div className="col-md-4 text-md-end d-none d-md-block">
                <div style={{
                  display: 'inline-flex',
                  width: '100px',
                  height: '100px',
                  borderRadius: '24px',
                  background: 'var(--grad-soft)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.8rem',
                  color: 'var(--teal)'
                }}>
                  <i className={service.icon}></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section style={{ background: 'var(--white)', padding: '60px 0' }}>
          <div className="container">
            <div className="row g-5">
              {/* Left Column: Details */}
              <div className="col-lg-8">
                <div className="detail-block">
                  <h3 className="h-md mb-3">Service Overview</h3>
                  <p>{service.overview}</p>
                </div>

                <div className="row mt-5 g-4">
                  <div className="col-md-6">
                    <div style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--line)', height: '100%' }}>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '14px' }}>
                        <i className="fa-solid fa-triangle-exclamation text-amber mr-2"></i> Common Symptoms
                      </h4>
                      <ul className="credential-list" style={{ margin: '0', gap: '8px' }}>
                        {service.symptoms.map((s, idx) => (
                          <li key={idx} style={{ fontSize: '0.86rem', color: 'var(--text)' }}>
                            <i className="fa-solid fa-circle-dot text-teal-light" style={{ fontSize: '0.5rem', marginTop: '6px' }}></i>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--line)', height: '100%' }}>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '14px' }}>
                        <i className="fa-solid fa-circle-question text-teal mr-2"></i> Typical Causes
                      </h4>
                      <ul className="credential-list" style={{ margin: '0', gap: '8px' }}>
                        {service.causes.map((c, idx) => (
                          <li key={idx} style={{ fontSize: '0.86rem', color: 'var(--text)' }}>
                            <i className="fa-solid fa-circle-dot text-teal-light" style={{ fontSize: '0.5rem', marginTop: '6px' }}></i>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="detail-block mt-5">
                  <h3 className="h-md mb-3">Our Physiotherapy Approach</h3>
                  <p className="mb-4">Dr. Disha Vaghasiya uses a combinations of advanced clinical recovery protocols, hands-on joint manipulation, dry needling, and therapeutic exercise structures to treat the root cause of your pain.</p>
                  <div className="row g-3">
                    {service.treatments.map((t, idx) => (
                      <div className="col-sm-6" key={idx}>
                        <div className="contact-card" style={{ padding: '16px 20px', gap: '12px' }}>
                          <div className="ic" style={{ width: '36px', height: '36px', borderRadius: '10px', fontSize: '0.9rem' }}>
                            <i className="fa-solid fa-circle-check"></i>
                          </div>
                          <span style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--ink)' }}>{t}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Home Advice & CTA */}
              <div className="col-lg-4">
                <div style={{
                  position: 'sticky',
                  top: '110px',
                  display: 'grid',
                  gap: '24px'
                }}>
                  {/* Home Advice Card */}
                  <div style={{
                    padding: '28px',
                    borderRadius: '20px',
                    background: 'var(--cream-2)',
                    border: '1px solid var(--line)'
                  }}>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '14px' }}>
                      <i className="fa-solid fa-house-chimney-medical text-teal mr-2"></i> Self-Care &amp; Advice
                    </h4>
                    <ul className="credential-list" style={{ margin: '0', gap: '12px' }}>
                      {service.homeAdvice.map((a, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-circle-check text-teal" style={{ marginTop: '4px' }}></i>
                          <div>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text)', lineHeight: '1.5', display: 'block' }}>{a}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Consultation Booking CTA Card */}
                  <div className="contact-card" style={{
                    flexDirection: 'column',
                    padding: '28px',
                    borderRadius: '20px',
                    background: 'var(--ink)',
                    color: '#ffffff',
                    textAlign: 'center'
                  }}>
                    <i className="fa-solid fa-calendar-days" style={{ fontSize: '2.5rem', color: 'var(--amber)', margin: '0 auto 16px' }}></i>
                    <h4 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '8px' }}>Need Personal Care?</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.84rem', marginBottom: '20px' }}>
                      Book clinic consultation or requested home visit session across Ahmedabad under Dr. Disha Vaghasiya.
                    </p>
                    <Link href="/contact-us#appointment" className="btn-amber w-100 no-underline" style={{ justifyContent: 'center' }}>
                      <i className="fa-solid fa-calendar-check"></i> Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingActions />
    </>
  );
}
