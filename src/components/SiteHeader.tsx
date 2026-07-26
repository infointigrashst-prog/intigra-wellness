'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const navLinks = [
  { href: '/about-us',    label: 'About',       icon: 'fa-user-doctor' },
  { href: '/services',    label: 'Services',    icon: 'fa-briefcase-medical' },
  { href: '/exercises',   label: 'Exercises',   icon: 'fa-dumbbell' },
  { href: '/home-visits', label: 'Home Visits', icon: 'fa-house-medical' },
  { href: '/faq',         label: 'FAQ',         icon: 'fa-circle-question' },
  { href: '/contact-us',  label: 'Contact',     icon: 'fa-envelope' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header id="site-header" className={[scrolled ? 'scrolled' : '', menuOpen ? 'menu-active' : ''].join(' ')}>
        <div className="container nav-wrap">

          {/* ── Brand ── */}
          <Link href="/" className="brand" onClick={close}>
            <div className="brand-logo-ring">
              <img src="/assets/logo-mark.png" alt="INTIGRA WELLNESS" />
            </div>
            <div className="brand-text">
              <span className="brand-name">INTIGRA</span>
              <span className="brand-sub">Wellness</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="main-nav desktop-nav" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? 'active' : ''}`}
              >
                {label}
                <span className="nav-underline" />
              </Link>
            ))}
          </nav>

          {/* ── Header Right ── */}
          <div className="header-actions">
            <Link href="/contact-us#appointment" className="hdr-book-btn">
              <i className="fa-solid fa-calendar-check"></i>
              <span>Book Now</span>
            </Link>

            {/* Hamburger */}
            <button
              id="nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
              className={menuOpen ? 'open' : ''}
            >
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      <div
        className={`mobile-overlay ${menuOpen ? 'visible' : ''}`}
        onClick={close}
        aria-hidden="true" 
      />

      <aside className={`mobile-drawer ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        {/* Drawer header */}
        <div className="drawer-head">
          <div className="drawer-brand">
            <img src="/assets/logo-mark.png" alt="INTIGRA WELLNESS" />
            <div>
              <strong>INTIGRA</strong>
              <small>Wellness — Physiotherapy</small>
            </div>
          </div>
          <button className="drawer-close" onClick={close} aria-label="Close menu">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="drawer-nav" aria-label="Mobile navigation links">
          {navLinks.map(({ href, label, icon }, i) => (
            <Link
              key={href}
              href={href}
              className={`drawer-link ${pathname === href ? 'active' : ''}`}
              onClick={close}
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <span className="drawer-icon">
                <i className={`fa-solid ${icon}`}></i>
              </span>
              <span className="drawer-label">{label}</span>
              <i className="fa-solid fa-chevron-right drawer-arrow"></i>
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="drawer-cta">
          <Link href="/contact-us#appointment" className="drawer-book-btn" onClick={close}>
            <i className="fa-solid fa-calendar-check"></i>
            Book an Appointment
          </Link>
          <div className="drawer-contact-row">
            <a href="tel:+919426638270" className="drawer-contact-chip">
              <i className="fa-solid fa-phone"></i> +91-94266 38270
            </a>
            <a
              href="https://wa.me/919426638270"
              target="_blank"
              rel="noreferrer"
              className="drawer-contact-chip wa"
            >
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>

        {/* Drawer footer */}
        <p className="drawer-foot">Bodakdev · Ahmedabad, Gujarat</p>
      </aside>
    </>
  );
}
