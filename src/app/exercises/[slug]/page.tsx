'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import FloatingActions from '../../../components/FloatingActions';
import { exercisesData } from '../../../exercises-data';

export default function ExerciseDetailPage() {
  const params = useParams();
  const router = useRouter();

  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const exercise = exercisesData[slug];

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
    if (!exercise && slug) {
      router.push('/exercises');
    }
  }, [exercise, slug, router]);

  if (!exercise) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="text-center">
          <i className="fa-solid fa-spinner fa-spin text-3xl text-teal-600 mb-4"></i>
          <p className="text-slate-600">Loading exercise details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SiteHeader />
      
      <main id="main" style={{ minHeight: '80vh' }}>
        {/* Exercise Header Section */}
        <section className="service-hero" style={{ background: 'var(--cream-2)', padding: '40px 0 45px' }}>
          <div className="container">
            <Link href="/exercises" className="btn-outline mb-4" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
              <i className="fa-solid fa-arrow-left"></i> Back to Exercise Library
            </Link>
            <div className="row align-items-center mt-3">
              <div className="col-md-8">
                <span className="eyebrow">{exercise.categoryName}</span>
                <h1 className="h-xl mt-2 mb-3">{exercise.title}</h1>
                <p className="lead" style={{ maxWidth: '640px', fontSize: '1.15rem' }}>{exercise.purpose}</p>
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
                  <i className={exercise.icon}></i>
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
                  <h3 className="h-md mb-3">Clinical Overview &amp; Purpose</h3>
                  <p className="lead" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>{exercise.overview}</p>
                </div>

                <div className="detail-block mt-5">
                  <h3 className="h-md mb-3">Steps to Perform Correctly</h3>
                  <ol style={{ paddingLeft: '20px', fontSize: '1rem', lineHeight: '1.8' }}>
                    {exercise.steps.map((step, idx) => (
                      <li key={idx} className="mb-3">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="row mt-5 g-4">
                  <div className="col-md-6">
                    <div style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--line)', height: '100%' }}>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '14px' }}>
                        <i className="fa-solid fa-triangle-exclamation text-amber mr-2"></i> Physio Precautions
                      </h4>
                      <ul className="credential-list" style={{ margin: '0', gap: '10px' }}>
                        {exercise.precautions.map((p, idx) => (
                          <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text)', display: 'flex', gap: '8px' }}>
                            <i className="fa-solid fa-circle-xmark text-danger" style={{ marginTop: '4px', fontSize: '0.9rem' }}></i>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{ padding: '24px', background: 'var(--cream)', borderRadius: '16px', border: '1px solid var(--line)', height: '100%' }}>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '14px' }}>
                        <i className="fa-solid fa-bullseye text-teal mr-2"></i> Target Muscle Groups
                      </h4>
                      <div className="d-flex flex-wrap gap-2">
                        {exercise.targetMuscles.map((muscle, idx) => (
                          <span 
                            key={idx} 
                            style={{ 
                              padding: '6px 12px', 
                              background: '#fff', 
                              borderRadius: '100px', 
                              border: '1.5px solid var(--line)', 
                              fontSize: '0.78rem', 
                              fontWeight: '700',
                              color: 'var(--teal)'
                            }}
                          >
                            {muscle}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual illustration & Advice */}
              <div className="col-lg-4">
                <div style={{
                  position: 'sticky',
                  top: '110px',
                  display: 'grid',
                  gap: '24px'
                }}>
                  {/* Visual Illustration */}
                  <div style={{
                    padding: '24px',
                    borderRadius: '20px',
                    background: 'var(--cream)',
                    border: '1px solid var(--line)',
                    textAlign: 'center'
                  }}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '16px', textAlign: 'left' }}>
                      <i className="fa-solid fa-image text-teal mr-2"></i> Visual Demonstration
                    </h4>
                    <img 
                      src={exercise.image} 
                      alt={exercise.title} 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        borderRadius: '12px', 
                        display: 'block',
                        maxHeight: '220px',
                        objectFit: 'contain',
                        background: '#ffffff',
                        padding: '12px',
                        border: '1px solid var(--line)'
                      }} 
                    />
                  </div>

                  {/* Frequency Card */}
                  <div style={{
                    padding: '28px',
                    borderRadius: '20px',
                    background: 'var(--cream-2)',
                    border: '1px solid var(--line)'
                  }}>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '14px' }}>
                      <i className="fa-solid fa-clock text-teal mr-2"></i> Recommended Routine
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.6', margin: '0' }}>
                      <b>Frequency:</b> {exercise.frequency}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.6', marginTop: '10px' }}>
                      <b>Duration:</b> {exercise.duration}
                    </p>
                  </div>

                  {/* CTA Card */}
                  <div className="contact-card" style={{
                    flexDirection: 'column',
                    padding: '28px',
                    borderRadius: '20px',
                    background: 'var(--ink)',
                    color: '#ffffff',
                    textAlign: 'center'
                  }}>
                    <i className="fa-solid fa-user-doctor" style={{ fontSize: '2.5rem', color: 'var(--amber)', margin: '0 auto 16px' }}></i>
                    <h4 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '8px' }}>Need Guidance?</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.84rem', marginBottom: '20px' }}>
                      Make sure your posture and load alignment are clinically correct with personalized support.
                    </p>
                    <Link href="/contact-us#appointment" className="btn-amber w-100 no-underline" style={{ justifyContent: 'center' }}>
                      <i className="fa-solid fa-calendar-check"></i> Book Consultation
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
