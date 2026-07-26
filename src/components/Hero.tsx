import React, { useEffect, useState } from 'react';

const statsData = [
  { target: 12, suffix: '+', label: 'Years of Clinical Focus' },
  { target: 4500, suffix: '+', label: 'Patients Guided to Recovery' },
  { target: 22, suffix: '+', label: 'Specialised Treatments' },
  { target: 98, suffix: '%', label: 'Patient Satisfaction' }
];

export default function Hero() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuad = (t: number) => t * (2 - t);
      const easeProgress = easeOutQuad(progress);

      const currentCounts = statsData.map((stat) => {
        const val = Math.round(easeProgress * stat.target);
        return val > stat.target ? stat.target : val;
      });

      setCounts(currentCounts);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts(statsData.map(s => s.target));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero">
      <div className="container hero-grid">
        <div className="hero-copy" data-aos="fade-up">
          <span className="eyebrow">Physiotherapy &amp; Rehabilitation · Ahmedabad</span>
          <h1 className="h-xl">
            Restore Movement,<br />
            Relieve Pain,<br />
            <span className="italic-accent">Live Better.</span>
          </h1>
          <p className="lead">
            Dr. Disha Vaghasiya designs personalised physiotherapy plans that treat the root cause of pain — combining advanced rehabilitation techniques with the comfort of clinic or home visit care, right across Ahmedabad.
          </p>
          <div className="hero-ctas">
            <a href="/contact-us#appointment" className="btn-brand">
              <i className="fa-solid fa-calendar-check"></i> Book an Appointment
            </a>
            <a href="/services" className="btn-outline">
              <i className="fa-solid fa-arrow-right"></i> Explore Services
            </a>
          </div>
          <div className="hero-trust">
            <div className="item">
              <i className="fa-solid fa-house-medical"></i>
              <div>
                <span>Home Visits</span>
                <small>Across Ahmedabad</small>
              </div>
            </div>
            <div className="item">
              <i className="fa-solid fa-hand-holding-heart"></i>
              <div>
                <span>Personalised Plans</span>
                <small>1:1 patient-centred care</small>
              </div>
            </div>
            <div className="item">
              <i className="fa-solid fa-spa"></i>
              <div>
                <span>Holistic Recovery</span>
                <small>Body, posture &amp; movement</small>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-visual" data-aos="zoom-in" data-aos-delay="150">
          <div className="hero-ring"></div>
          <div className="hero-logo-plate">
            <img src="/assets/intigra-wellness-logo_3.jpeg" alt="INTIGRA WELLNESS spine and movement emblem" />
          </div>
          <div className="floating-pill glass p1"><i className="fa-solid fa-bone"></i> Spine Health</div>
          <div className="floating-pill glass p2"><i className="fa-solid fa-person-walking"></i> Posture Correction</div>
          <div className="floating-pill glass p3"><i className="fa-solid fa-hands-holding-child"></i> Manual Therapy</div>
          <div className="floating-pill glass p4"><i className="fa-solid fa-house-chimney-medical"></i> Home Care</div>
        </div>
      </div>

      <div className="container stats-bar" data-aos="fade-up">
        <div className="stats-card glass">
          {statsData.map((stat, idx) => (
            <div className="stat" key={stat.label}>
              <div className="num">
                {counts[idx]}
                <span>{stat.suffix}</span>
              </div>
              <small>{stat.label}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
