import React from 'react';

const areas = [
  'Satellite', 'Vastrapur', 'Bopal', 'Prahladnagar', 'Ghatlodia', 
  'Naranpura', 'Paldi', 'Vasna', 'Ambawadi', 'C.G. Road', 'Navrangpura'
];

export default function HomeVisits() {
  return (
    <section id="homevisit" style={{ background: 'var(--cream-2)' }}>
      <div className="container">
        <div className="homevisit-wrap" data-aos="fade-up">
          <div className="hv-info">
            <span className="eyebrow" style={{ color: 'var(--amber)' }}>Doorstep Rehabilitation</span>
            <h2 className="h-lg">Professional Physiotherapy at Your Home</h2>
            <p>
              For patients experiencing severe mobility restrictions, recovering from a stroke, or managing acute orthopedic pain, Dr. Disha Vaghasiya offers comprehensive home visit physiotherapy packages.
            </p>
            <ul className="hv-list">
              <li>
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <b>Equipped Care</b>
                  <span>We carry portable electrotherapy units (TENS, Muscle Stimulators) to your doorstep.</span>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <b>Convenient Schedules</b>
                  <span>Consistent timing slots planned around your family routines to ensure focus.</span>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <b>Family Cooperation</b>
                  <span>We guide family caregivers on support positions, posture assists, and safety.</span>
                </div>
              </li>
            </ul>
            <div className="col-title" style={{ color: 'var(--amber)', fontSize: '0.8rem', fontWeight: 700 }}>Primary Coverage Areas (Ahmedabad)</div>
            <div className="hv-areas">
              {areas.map(area => <span key={area}>{area}</span>)}
            </div>
          </div>

          <div className="hv-card" data-aos="zoom-in" data-aos-delay="100">
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '24px' }}>How to Book a Home Visit</h3>
            
            <div className="step">
              <div className="n">1</div>
              <div>
                <b>Clinical Screening</b>
                <p>Call or message us detailing the patient\'s diagnosis, mobility, and local address.</p>
              </div>
            </div>

            <div className="step">
              <div className="n">2</div>
              <div>
                <b>Initial Consultation Appointment</b>
                <p>We perform the first check at home to verify functional safety parameters.</p>
              </div>
            </div>

            <div className="step">
              <div className="n">3</div>
              <div>
                <b>Treatment Scheduling</b>
                <p>Evolve a schedule (3x weekly or daily sessions) aligned with goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
