'use client';

import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh Shah',
    role: 'Slip Disc Recovery Patient',
    stars: 5,
    quote: 'I was suffering from severe lower back radiating pain due to a slip disc and could barely sit for 10 minutes. Dr. Disha designed a very gentle lumbar extension routine combined with electrotherapy. Within 3 weeks, my leg pain was 90% gone. Truly life-changing! I highly recommend INTIGRA WELLNESS to anyone facing disc issues.',
    initials: 'RS'
  },
  {
    name: 'Meera Patel',
    role: 'Home Visit Stroke Rehab',
    stars: 5,
    quote: 'After my father suffered a stroke, we were worried about transporting him to a clinic daily. Dr. Disha conducted physiotherapy sessions at our home. Her patience, manual exercises, and balance retraining enabled him to walk independently with a walker. We are forever grateful for her dedication.',
    initials: 'MP'
  },
  {
    name: 'Amit Varma',
    role: 'Frozen Shoulder Patient',
    stars: 5,
    quote: 'My shoulder movement was completely frozen, and even dressing up was extremely painful. The manual joint mobilization techniques and trigger point release performed by Dr. Disha helped me regain full range of motion. She is extremely professional, knowledgeable, and caring.',
    initials: 'AV'
  },
  {
    name: 'Priya Desai',
    role: 'Knee Pain & Arthritis Care',
    stars: 5,
    quote: 'I had chronic knee pain for years and was told surgery might be necessary. Dr. Disha\'s targeted physiotherapy protocol — combining strengthening and ultrasound therapy — reduced my swelling and pain dramatically within a month. No surgery needed! The results speak for themselves.',
    initials: 'PD'
  },
  {
    name: 'Suresh Mehta',
    role: 'Cervical Spondylosis Patient',
    stars: 5,
    quote: 'Persistent neck stiffness and radiating arm pain was affecting my work significantly. After just 6 sessions of cervical traction and manual therapy at INTIGRA WELLNESS, I felt a remarkable difference. Dr. Disha explains everything so clearly and guides you at every stage.',
    initials: 'SM'
  },
  {
    name: 'Kavita Joshi',
    role: 'Post-natal Physiotherapy',
    stars: 5,
    quote: 'I sought post-delivery physiotherapy for back pain and pelvic floor weakness. Dr. Disha is incredibly knowledgeable about women\'s health. Her personalized exercises and care made a huge difference in my recovery journey. The clinic environment is also highly supportive.',
    initials: 'KJ'
  }
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<typeof testimonials[0] | null>(null);

  useEffect(() => {
    let swiperInstance: any = null;

    const initSwiper = async () => {
      const { default: Swiper } = await import('swiper');
      const { Autoplay, Pagination, A11y } = await import('swiper/modules');

      swiperInstance = new Swiper('.testi-swiper', {
        modules: [Autoplay, Pagination, A11y],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: '.testi-swiper .swiper-pagination',
          clickable: true,
        },
        a11y: { prevSlideMessage: 'Previous review', nextSlideMessage: 'Next review' },
        breakpoints: {
          640: { slidesPerView: 1, spaceBetween: 20 },
          900: { slidesPerView: 2, spaceBetween: 24 },
          1200: { slidesPerView: 3, spaceBetween: 28 },
        },
      });
    };

    initSwiper();
    return () => { if (swiperInstance) swiperInstance.destroy(true, true); };
  }, []);

  return (
    <section id="testimonials" style={{ background: 'var(--cream-2)', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">Success Stories</span>
          <h2 className="h-lg">What Our Patients Say</h2>
          <p>Read inspiring stories of real recovery and restored mobility from patients who achieved relief through our tailored care.</p>
        </div>

        <div className="testi-swiper swiper" data-aos="fade-up">
          <div className="swiper-wrapper">
            {testimonials.map((t, i) => (
              <div className="swiper-slide" key={i}>
                <div className="testi-card glass" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <i className="fa-solid fa-quote-left quote-icon"></i>
                  <div className="stars" style={{ marginBottom: '14px' }}>
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <i key={si} className="fa-solid fa-star" style={{ marginRight: '3px', color: 'var(--amber)', fontSize: '0.9rem' }}></i>
                    ))}
                  </div>
                  
                  {/* Clamped quote */}
                  <p 
                    className="quote" 
                    style={{ 
                      fontSize: '0.95rem', 
                      fontStyle: 'italic', 
                      lineHeight: '1.7', 
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      height: '110px'
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Read More link */}
                  <div style={{ textAlign: 'left', marginTop: '10px' }}>
                    <button 
                      onClick={() => setActiveTestimonial(t)} 
                      className="read-more-btn"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--teal)',
                        fontWeight: '700',
                        fontSize: '0.82rem',
                        padding: '0',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      Read More <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                    </button>
                  </div>

                  <div className="who" style={{ marginTop: '20px' }}>
                    <div className="avatar">{t.initials}</div>
                    <div>
                      <b>{t.name}</b>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination" style={{ marginTop: '32px', position: 'relative', bottom: 'auto' }}></div>
        </div>
      </div>

      {/* ── Testimonial Popup Modal ── */}
      {activeTestimonial && (
        <div className="testi-modal-overlay" onClick={() => setActiveTestimonial(null)}>
          <div className="testi-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="testi-modal-close" onClick={() => setActiveTestimonial(null)} aria-label="Close review">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <i className="fa-solid fa-quote-left quote-icon" style={{ fontSize: '2rem', color: 'rgba(14, 124, 134, 0.15)', display: 'block', marginBottom: '10px' }}></i>
            <div className="stars" style={{ marginBottom: '18px' }}>
              {Array.from({ length: activeTestimonial.stars }).map((_, si) => (
                <i key={si} className="fa-solid fa-star" style={{ marginRight: '4px', color: 'var(--amber)', fontSize: '1.05rem' }}></i>
              ))}
            </div>
            <p className="full-quote" style={{ fontSize: '1.05rem', fontStyle: 'italic', lineHeight: '1.8', color: 'var(--text)', marginBottom: '28px', marginTop: '0' }}>
              &ldquo;{activeTestimonial.quote}&rdquo;
            </p>
            <div className="who" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div className="avatar" style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)', 
                color: '#fff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '1rem'
              }}>
                {activeTestimonial.initials}
              </div>
              <div>
                <b style={{ display: 'block', fontSize: '1.05rem', color: 'var(--ink)' }}>{activeTestimonial.name}</b>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--muted)' }}>{activeTestimonial.role}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
