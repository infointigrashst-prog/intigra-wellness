'use client';

import React, { useEffect } from 'react';

const testimonials = [
  {
    name: 'Rajesh Shah',
    role: 'Slip Disc Recovery Patient',
    stars: 5,
    quote: 'I was suffering from severe lower back radiating pain due to a slip disc and could barely sit for 10 minutes. Dr. Disha designed a very gentle lumbar extension routine combined with electrotherapy. Within 3 weeks, my leg pain was 90% gone. Truly life-changing!',
    initials: 'RS'
  },
  {
    name: 'Meera Patel',
    role: 'Home Visit Stroke Rehab',
    stars: 5,
    quote: 'After my father suffered a stroke, we were worried about transporting him to a clinic daily. Dr. Disha conducted physiotherapy sessions at our home. Her patience, manual exercises, and balance retraining enabled him to walk independently with a walker.',
    initials: 'MP'
  },
  {
    name: 'Amit Varma',
    role: 'Frozen Shoulder Patient',
    stars: 5,
    quote: 'My shoulder movement was completely frozen, and even dressing up was extremely painful. The manual joint mobilization techniques and trigger point release performed by Dr. Disha helped me regain full range of motion. She is extremely professional.',
    initials: 'AV'
  },
  {
    name: 'Priya Desai',
    role: 'Knee Pain & Arthritis Care',
    stars: 5,
    quote: 'I had chronic knee pain for years and was told surgery might be necessary. Dr. Disha\'s targeted physiotherapy protocol — combining strengthening and ultrasound therapy — reduced my swelling and pain dramatically within a month. No surgery needed!',
    initials: 'PD'
  },
  {
    name: 'Suresh Mehta',
    role: 'Cervical Spondylosis Patient',
    stars: 5,
    quote: 'Persistent neck stiffness and radiating arm pain was affecting my work significantly. After just 6 sessions of cervical traction and manual therapy at INTIGRA WELLNESS, I felt a remarkable difference. Dr. Disha explains everything so clearly!',
    initials: 'SM'
  },
  {
    name: 'Kavita Joshi',
    role: 'Post-natal Physiotherapy',
    stars: 5,
    quote: 'I sought post-delivery physiotherapy for back pain and pelvic floor weakness. Dr. Disha is incredibly knowledgeable about women\'s health. Her personalized exercises and care made a huge difference in my recovery journey.',
    initials: 'KJ'
  }
];

export default function Testimonials() {
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
                <div className="testi-card glass" style={{ height: '100%' }}>
                  <i className="fa-solid fa-quote-left quote-icon"></i>
                  <div className="stars" style={{ marginBottom: '14px' }}>
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <i key={si} className="fa-solid fa-star" style={{ marginRight: '3px', color: 'var(--amber)', fontSize: '0.9rem' }}></i>
                    ))}
                  </div>
                  <p className="quote" style={{ fontSize: '0.95rem', fontStyle: 'italic', lineHeight: '1.7', flex: 1 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
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
    </section>
  );
}
