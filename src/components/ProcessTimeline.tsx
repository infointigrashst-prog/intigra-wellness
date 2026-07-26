import React from 'react';

const steps = [
  { num: '01', title: 'Comprehensive Consultation & Assessment', desc: 'We begin with a detailed clinical review of your posture, nerve conduct, orthopedic joints, and pain history to map out functional blockages.' },
  { num: '02', title: 'Custom Care & Treatment Plan', desc: 'A dedicated target calendar combining active physical therapy, manual manipulation, electrotherapy, and customized recovery steps.' },
  { num: '03', title: '1-on-1 Guided Rehabilitation Sessions', desc: 'Whether at the clinic or your home in Ahmedabad, each rehabilitation session is closely supervised for correct posture and biomechanical loading.' },
  { num: '04', title: 'Progress Assessment & Care Transition', desc: 'Periodic checkmarks measuring pain limits and joint mobility ranges allow us to evolve exercises until you return to active health.' }
];

export default function ProcessTimeline() {
  return (
    <section id="process" style={{ background: 'var(--cream)' }}>
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">How We Work</span>
          <h2 className="h-lg">Your Path to Pain-Free Living</h2>
          <p>A systematic, clinically structured workflow designed to ensure safe recovery and long-term functional mobility.</p>
        </div>

        <div className="timeline">
          {steps.map((step, idx) => (
            <div className="t-step" key={step.num} data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <div className="t-num">{step.num}</div>
              <div className="t-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
              <div className="t-spacer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
