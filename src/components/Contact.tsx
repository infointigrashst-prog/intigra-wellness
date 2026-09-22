import React from 'react';
import { clinicContactDetails } from '../contact-details';

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--cream-2)' }}>
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">Contact Information</span>
          <h2 className="h-lg">Book a Home Visit</h2>
          <p>Get in touch to book specialized <strong>Home Visit Physiotherapy in Ahmedabad</strong> for orthopedic, spine, sport, and neurological rehabilitation.</p>
        </div>

        <div className="row g-4 justify-content-center" data-aos="fade-up">
          <div className="col-lg-8">
            <div className="d-grid gap-3">
              <div className="contact-card">
                <div className="ic">
                  <i className="fa-solid fa-circle-nodes"></i>
                </div>
                <div>
                  <b>Quick Communication</b>
                  <div style={{ marginTop: '4px' }}>
                    Direct Phone:{' '}
                    <a 
                      href={`tel:${clinicContactDetails.phoneDialable}`} 
                      style={{ color: 'var(--teal)', fontWeight: '700', textDecoration: 'none' }}
                      className="contact-link-hover"
                    >
                      {clinicContactDetails.phone}
                    </a>
                  </div>
                  <div style={{ marginTop: '2px' }}>
                    Email:{' '}
                    <a 
                      href={`mailto:${clinicContactDetails.email}`} 
                      style={{ color: 'var(--teal)', fontWeight: '700', textDecoration: 'none' }}
                      className="contact-link-hover"
                    >
                      {clinicContactDetails.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
