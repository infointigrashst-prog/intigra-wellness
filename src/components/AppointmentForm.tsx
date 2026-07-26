import React, { useState } from 'react';
import { clinicContactDetails } from '../contact-details';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    condition: 'backpain',
    message: '',
    isHomeVisit: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleToggle = () => {
    setFormData({
      ...formData,
      isHomeVisit: !formData.isHomeVisit
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Format WhatsApp message with form parameters
    const conditionLabels: Record<string, string> = {
      backpain: 'Back Pain / Spine Care',
      neckpain: 'Neck / Cervical Pain',
      slipdisc: 'Slip Disc Recovery',
      shoulder: 'Frozen Shoulder / Joint Pain',
      sports: 'Sports Injury Rehabilitation',
      neuro: 'Stroke / Paralysis Rehabilitation',
      home: 'Home Visit Physiotherapy'
    };

    const conditionText = conditionLabels[formData.condition] || formData.condition;
    const homeVisitText = formData.isHomeVisit ? 'Yes' : 'No';
    const messageBody = formData.message ? formData.message : 'N/A';

    const textMessage = `Hello Dr. Disha Vaghasiya (INTIGRA WELLNESS), I would like to book a physiotherapy appointment.

Here are my details:
- *Name:* ${formData.name}
- *Phone:* ${formData.phone}
- *Email:* ${formData.email || 'N/A'}
- *Condition:* ${conditionText}
- *Request Home Visit:* ${homeVisitText}
- *Message/Symptoms:* ${messageBody}`;

    const dialNumber = clinicContactDetails.phoneDialable.replace('+', '');
    const whatsappUrl = `https://wa.me/${dialNumber}?text=${encodeURIComponent(textMessage)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Open WhatsApp chat in a new tab
      window.open(whatsappUrl, '_blank');
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        condition: 'backpain',
        message: '',
        isHomeVisit: false
      });
    }, 1200);
  };

  return (
    <section id="appointment">
      <div className="container">
        <div className="appointment-wrap">
          <div className="appt-info" data-aos="fade-right">
            <span className="eyebrow">Consultation Booking</span>
            <h2 className="h-lg">Book Your Recovery Session</h2>
            <p>
              Fill out the details to request an appointment. Dr. Disha Vaghasiya or our wellness coordinator will contact you to confirm a time slot.
            </p>
            <ul className="appt-info-list">
              <li>
                <div className="ic">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <b>Call for Queries</b>
                  <span>
                    <a 
                      href={`tel:${clinicContactDetails.phoneDialable}`} 
                      style={{ color: 'inherit', textDecoration: 'none' }}
                      className="contact-link-hover"
                    >
                      {clinicContactDetails.phone}
                    </a>
                  </span>
                </div>
              </li>
              <li>
                <div className="ic">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <b>Clinic Location</b>
                  <span>{clinicContactDetails.locationBrief}</span>
                </div>
              </li>
              <li>
                <div className="ic">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <b>Email Us</b>
                  <span>
                    <a 
                      href={`mailto:${clinicContactDetails.email}`} 
                      style={{ color: 'inherit', textDecoration: 'none' }}
                      className="contact-link-hover"
                    >
                      {clinicContactDetails.email}
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="appt-form-wrap" data-aos="fade-left">
            {submitted ? (
              <div className="appt-form text-center py-5">
                <i className="fa-solid fa-circle-check" style={{ fontSize: '3.6rem', color: 'var(--teal)', marginBottom: '20px' }}></i>
                <h3>Appointment Requested!</h3>
                <p className="mt-2 text-muted">Thank you. We will verify clinical availability and call/message you shortly to confirm.</p>
                <button 
                  className="btn-brand mt-4" 
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form className="appt-form" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="condition">Primary Concern / Treatment Category *</label>
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    required
                  >
                    <option value="backpain">Back Pain / Spine Care</option>
                    <option value="neckpain">Neck / Cervical Pain</option>
                    <option value="slipdisc">Slip Disc Recovery</option>
                    <option value="shoulder">Frozen Shoulder / Joint Pain</option>
                    <option value="sports">Sports Injury Rehabilitation</option>
                    <option value="neuro">Stroke / Paralysis Rehabilitation</option>
                    <option value="home">Home Visit Physiotherapy</option>
                  </select>
                </div>

                <div className="toggle-row">
                  <div>
                    <b style={{ display: 'block', fontSize: '0.88rem', color: 'var(--ink)' }}>Request Home Visit</b>
                    <span style={{ fontSize: '0.74rem', color: 'var(--muted)' }}>Check if you require treatment at your location in Ahmedabad.</span>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={formData.isHomeVisit}
                      onChange={handleToggle}
                    />
                    <span className="slider-toggle"></span>
                  </label>
                </div>

                <div className="field">
                  <label htmlFor="message">Describe your symptoms (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Briefly describe what you are experiencing and for how long..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-brand w-100" 
                  disabled={loading}
                >
                  {loading ? (
                    <span><i className="fa-solid fa-spinner fa-spin mr-2"></i> Redirecting...</span>
                  ) : (
                    <span>Request Appointment via WhatsApp</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
