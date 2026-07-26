import React from 'react';
import { clinicContactDetails } from '../contact-details';

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--cream-2)' }}>
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">Contact Information</span>
          <h2 className="h-lg">Visit Our Clinic</h2>
          <p>Get in touch or stop by our clinic for orthopedic, spine, sport, and neurological rehabilitation.</p>
        </div>

        <div className="row g-4" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="d-grid gap-3">
              <div className="contact-card">
                <div className="ic">
                  <i className="fa-solid fa-location-crosshairs"></i>
                </div>
                <div>
                  <b>Clinic Address</b>
                  <span>{clinicContactDetails.address}</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="ic">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="w-100">
                  <b>Clinical Timings &amp; Hours</b>
                  <table className="hours-table mt-2">
                    <tbody>
                      <tr>
                        <td>Monday – Friday</td>
                        <td>{clinicContactDetails.timings.weekdays}</td>
                      </tr>
                      <tr>
                        <td>Saturday</td>
                        <td>{clinicContactDetails.timings.saturday}</td>
                      </tr>
                      <tr>
                        <td>Sunday</td>
                        <td>{clinicContactDetails.timings.sunday}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="contact-card">
                <div className="ic">
                  <i className="fa-solid fa-circle-nodes"></i>
                </div>
                <div>
                  <b>Quick Communication</b>
                  <div>Direct Phone: {clinicContactDetails.phone}</div>
                  <div>Email: {clinicContactDetails.email}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="map-embed">
              {/* Google Map iframe centered around Rajpath Club / Bodakdev area, Ahmedabad */}
              <iframe 
                src={clinicContactDetails.mapIframeSrc} 
                title="Google Maps Location for INTIGRA WELLNESS clinic"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
