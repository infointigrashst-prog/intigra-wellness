import Link from 'next/link';
import React from 'react';
import { clinicContactDetails } from '../contact-details';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* ── DESKTOP FOOTER (hidden on mobile) ──────────────────── */}
      <div className="footer-desktop">
        <div className="container footer-grid" data-aos="fade-up">
          <div className="footer-brand-column">
            <div className="footer-brand">
              <img src="/assets/logo-mark.png" alt="INTIGRA WELLNESS footer emblem" />
              {/* <b>INTIGRA<small style={{ display: 'block', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal-light)' }}>Wellness</small></b> */}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.84rem', marginTop: '16px' }}>
              Professional physiotherapy clinic in Ahmedabad under Dr. Disha Vaghasiya. Custom recovery plans designed to bring you strength, balance, and mobility.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" style={{ color: '#fff' }}></i></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f" style={{ color: '#fff' }}></i></a>
              <a href={`https://wa.me/${clinicContactDetails.phoneDialable.replace('+', '')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" style={{ color: '#fff' }}></i></a>
            </div>
          </div>

          <div>
            <h5>Treatment Links</h5>
            <ul>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/about-us">Meet the Physio</Link></li>
              <li><Link href="/exercises">Home Exercise Library</Link></li>
              <li><Link href="/home-visits">Home Visit Services</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h5>Condition Categories</h5>
            <ul>
              <li><Link href="/services?cat=ortho">Orthopedic Rehab</Link></li>
              <li><Link href="/services?cat=neuro">Stroke &amp; Paralysis</Link></li>
              <li><Link href="/services?cat=special">Geriatric &amp; Pediatric</Link></li>
              <li><Link href="/services?cat=technique">Manual &amp; Dry Needling</Link></li>
              <li><Link href="/contact-us">Book Clinic Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h5>Reach Us Direct</h5>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.84rem', marginBottom: '8px' }}>
              <b>Clinic:</b> {clinicContactDetails.address.split(',').slice(1, 5).join(',')}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.84rem' }}>
              <b>Phone:</b> {clinicContactDetails.phone}<br />
              <b>Email:</b> {clinicContactDetails.email}
            </p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>&copy; {year} {clinicContactDetails.name}. All Rights Reserved.</span>
          <span>Lead Physiotherapist: {clinicContactDetails.doctorName} ({clinicContactDetails.degree.split(' ')[0]})</span>
        </div>
      </div>

      {/* ── MOBILE FOOTER (shown only on mobile) ───────────────── */}
      <div className="footer-mobile">
        {/* Brand Row */}
        <div className="fmob-brand">
          <img src="/assets/logo-mark.png" alt="INTIGRA WELLNESS" />
          <div>
            <b>INTIGRA WELLNESS</b>
            <span>Physiotherapy &amp; Rehabilitation, Ahmedabad</span>
          </div>
        </div>

        {/* Quick CTA Buttons */}
        <div className="fmob-ctas">
          <a href={`tel:${clinicContactDetails.phoneDialable}`} className="fmob-btn fmob-btn-call">
            <i className="fa-solid fa-phone"></i> Call Now
          </a>
          <a
            href={`https://wa.me/${clinicContactDetails.phoneDialable.replace('+', '')}?text=${encodeURIComponent(clinicContactDetails.whatsappMessage)}`}
            target="_blank" rel="noreferrer"
            className="fmob-btn fmob-btn-wa"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <Link href="/contact-us#appointment" className="fmob-btn fmob-btn-appt">
            <i className="fa-solid fa-calendar-check"></i> Book
          </Link>
        </div>

        {/* Quick Links */}
        <div className="fmob-links">
          <Link href="/"><i className="fa-solid fa-house"></i><span>Home</span></Link>
          <Link href="/about-us"><i className="fa-solid fa-user-doctor"></i><span>About</span></Link>
          <Link href="/services"><i className="fa-solid fa-briefcase-medical"></i><span>Services</span></Link>
          <Link href="/exercises"><i className="fa-solid fa-dumbbell"></i><span>Exercises</span></Link>
          <Link href="/home-visits"><i className="fa-solid fa-house-medical"></i><span>Home Visits</span></Link>
          <Link href="/faq"><i className="fa-solid fa-circle-question"></i><span>FAQ</span></Link>
          <Link href="/contact-us"><i className="fa-solid fa-envelope"></i><span>Contact</span></Link>
        </div>

        {/* Address strip */}
        <div className="fmob-address">
          <i className="fa-solid fa-location-dot"></i>
          <span>{clinicContactDetails.address}</span>
        </div>

        {/* Social Row */}
        <div className="fmob-social">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href={`https://wa.me/${clinicContactDetails.phoneDialable.replace('+', '')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="fmob-copy">
          &copy; {year} {clinicContactDetails.name}. All Rights Reserved.<br />
          <small>Dr. Disha Vaghasiya — {clinicContactDetails.degree}</small>
        </div>
      </div>
    </footer>
  );
}
