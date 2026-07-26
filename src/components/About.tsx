'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const stats = [
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 4500, suffix: '+', label: 'Patients Treated' },
  { value: 22, suffix: '+', label: 'Specialisations' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
];

const credentials = [
  {
    icon: 'fa-graduation-cap',
    title: 'BPT — Registered Physiotherapist',
    desc: 'Bachelor of Physiotherapy, certified with the Gujarat Physiotherapy Council.',
  },
  {
    icon: 'fa-user-doctor',
    title: 'Patient-First Assessment',
    desc: 'Every plan is built around your body, pain history and recovery goals.',
  },
  {
    icon: 'fa-house-medical-flag',
    title: 'Clinic & Home Visit Care',
    desc: 'In-clinic sessions or personalised physiotherapy at home in Ahmedabad.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Progress-Tracked Rehab',
    desc: 'Structured review points so your treatment evolves as you recover.',
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const duration = 1600;
      const step = 16;
      const increment = target / (duration / step);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else setCount(Math.floor(start));
      }, step);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* ── Page Hero Banner ── */}
      <div className="about-hero-banner">
        <div className="container about-hero-grid">
          <div className="about-hero-left">
            <span className="eyebrow" data-aos="fade-up">Meet Your Physiotherapist</span>
            <h1 className="h-lg about-hero-title" data-aos="fade-up" data-aos-delay="80">
              Dr. Disha Vaghasiya<br />
              <span className="about-hero-accent">Care that listens before it treats.</span>
            </h1>
            <p className="about-hero-sub" data-aos="fade-up" data-aos-delay="160">
              Ahmedabad&apos;s trusted physiotherapist combining evidence-based manual therapy,
              modern electrotherapy and structured rehabilitation.
            </p>
          </div>
          <div className="about-hero-right" data-aos="fade-left" data-aos-delay="200">
            <div className="about-hero-graphic-wrap">
              <div className="about-hero-circle">
                <img src="/assets/logo-mark.png" alt="INTIGRA WELLNESS" />
              </div>
            </div>
          </div>
        </div>
        {/* decorative blobs */}
        <div className="about-blob about-blob-1" aria-hidden="true" />
        <div className="about-blob about-blob-2" aria-hidden="true" />
      </div>

      {/* ── Main Content ── */}
      <div className="container about-main-grid">

        {/* Left — photo card */}
        <div className="about-photo-col" data-aos="fade-right">
          <div className="about-photo-card">
            <div className="about-photo-frame">
              <img
                src="/assets/logo-full.png"
                alt="Dr. Disha Vaghasiya — INTIGRA WELLNESS Physiotherapist Ahmedabad"
              />
            </div>

            {/* Floating badge */}
            <div className="about-badge-float glass">
              <div className="about-badge-icon">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <b>Registered Physiotherapist</b>
                <span>Dr. Disha Vaghasiya · Ahmedabad</span>
              </div>
            </div>

            {/* Availability pill */}
            <div className="about-avail-pill">
              <span className="avail-dot"></span>
              <span>Accepting New Patients</span>
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div className="about-content-col" data-aos="fade-left">
          <p className="about-lead">
            At INTIGRA WELLNESS, every treatment plan begins with a thorough assessment
            of posture, movement patterns and lifestyle — not just the site of pain.
            Dr. Disha Vaghasiya blends evidence-based manual therapy, modern electrotherapy
            and structured exercise rehabilitation to help patients regain strength,
            mobility and confidence.
          </p>

          {/* Stats row */}
          <div className="about-stats-row">
            {stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <strong><CountUp target={s.value} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Credentials */}
          <ul className="about-creds">
            {credentials.map((c) => (
              <li key={c.title} className="about-cred-item">
                <div className="cred-icon-wrap">
                  <i className={`fa-solid ${c.icon}`}></i>
                </div>
                <div>
                  <b>{c.title}</b>
                  <span>{c.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="about-ctas">
            <Link href="/contact-us#appointment" className="btn-brand">
              <i className="fa-solid fa-calendar-check"></i> Book a Consultation
            </Link>
            <a href="tel:+919426638270" className="btn-outline">
              <i className="fa-solid fa-phone"></i> Call Clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
