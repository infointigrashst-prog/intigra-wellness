import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const servicesData = [
  // Orthopedic
  { cat: 'ortho', tag: 'Ortho', icon: 'fa-solid fa-heart-pulse', title: 'Back Pain', desc: 'Targeted relief for acute & chronic lower and upper back pain.', slug: 'back-pain' },
  { cat: 'ortho', tag: 'Ortho', icon: 'fa-solid fa-head-side-cough', title: 'Neck Pain', desc: 'Mobility restoration for stiff, painful or restricted neck movement.', slug: 'neck-pain' },
  { cat: 'ortho', tag: 'Ortho', icon: 'fa-solid fa-bone', title: 'Cervical Pain', desc: 'Cervical spondylosis & nerve-related neck-shoulder discomfort.', slug: 'neck-pain' },
  { cat: 'ortho', tag: 'Ortho', icon: 'fa-solid fa-disease', title: 'Slip Disc', desc: 'Non-surgical, structured recovery for herniated / prolapsed discs.', slug: 'slip-disc' },
  { cat: 'ortho', tag: 'Ortho', icon: 'fa-solid fa-shoe-prints', title: 'Knee Pain', desc: 'Strengthening & alignment therapy for knee pain and instability.', slug: 'back-pain' },
  { cat: 'ortho', tag: 'Ortho', icon: 'fa-solid fa-joint', title: 'Arthritis', desc: 'Joint-friendly movement therapy to ease stiffness and swelling.', slug: 'back-pain' },
  { cat: 'ortho', tag: 'Ortho', icon: 'fa-solid fa-snowflake', title: 'Frozen Shoulder', desc: 'Progressive mobilisation to restore full shoulder range of motion.', slug: 'frozen-shoulder' },
  { cat: 'ortho', tag: 'Ortho', icon: 'fa-solid fa-person-running', title: 'Sports Injuries', desc: 'Injury-specific rehab to return safely to training and play.', slug: 'sports-injuries' },
  { cat: 'ortho', tag: 'Ortho', icon: 'fa-solid fa-bolt', title: 'Sciatica', desc: 'Nerve-pain relief protocols for radiating leg & lower back pain.', slug: 'slip-disc' },

  // Neurological
  { cat: 'neuro', tag: 'Neuro', icon: 'fa-solid fa-wheelchair-move', title: 'Paralysis Rehabilitation', desc: 'Functional retraining programmes for partial & full paralysis.', slug: 'paralysis-rehabilitation' },
  { cat: 'neuro', tag: 'Neuro', icon: 'fa-solid fa-brain', title: 'Stroke Rehabilitation', desc: 'Motor recovery, balance & independence-focused stroke therapy.', slug: 'stroke-rehabilitation' },
  { cat: 'neuro', tag: 'Neuro', icon: 'fa-solid fa-wave-square', title: 'Neurological Physiotherapy', desc: 'Coordination & movement re-education for neurological conditions.', slug: 'stroke-rehabilitation' },

  // Specialised Care
  { cat: 'special', tag: 'Special', icon: 'fa-solid fa-child-reaching', title: 'Pediatric Physiotherapy', desc: 'Gentle, developmental physiotherapy designed for children.', slug: 'stroke-rehabilitation' },
  { cat: 'special', tag: 'Special', icon: 'fa-solid fa-person-cane', title: 'Geriatric Physiotherapy', desc: 'Balance, strength & fall-prevention care for older adults.', slug: 'stroke-rehabilitation' },
  { cat: 'special', tag: 'Special', icon: 'fa-solid fa-venus', title: 'Women\'s Health Physiotherapy', desc: 'Pre/post-natal, pelvic-floor & women-specific rehabilitation.', slug: 'stroke-rehabilitation' },
  { cat: 'special', tag: 'Special', icon: 'fa-solid fa-ruler-vertical', title: 'Posture Correction', desc: 'Screen-life & lifestyle-driven posture realignment programmes.', slug: 'neck-pain' },
  { cat: 'special', tag: 'Special', icon: 'fa-solid fa-briefcase-medical', title: 'Orthopedic Physiotherapy', desc: 'Whole-body musculoskeletal assessment & recovery planning.', slug: 'back-pain' },

  // Therapy Techniques
  { cat: 'technique', tag: 'Technique', icon: 'fa-solid fa-hand-dots', title: 'Manual Therapy', desc: 'Hands-on mobilisation & soft-tissue release techniques.', slug: 'frozen-shoulder' },
  { cat: 'technique', tag: 'Technique', icon: 'fa-solid fa-bolt-lightning', title: 'Electrotherapy', desc: 'IFT, TENS & ultrasound-based pain-relief modalities.', slug: 'back-pain' },
  { cat: 'technique', tag: 'Technique', icon: 'fa-solid fa-syringe', title: 'Dry Needling', desc: 'Trigger-point release for stubborn muscular pain & tightness.', slug: 'neck-pain' },

  // Home Care
  { cat: 'home', tag: 'Home', icon: 'fa-solid fa-house-medical', title: 'Home Physiotherapy', desc: 'Full assessment & therapy sessions delivered at your doorstep.', slug: 'home-physiotherapy' }
];

const filters = [
  { id: 'all', label: 'All Services' },
  { id: 'ortho', label: 'Orthopedic' },
  { id: 'neuro', label: 'Neurological' },
  { id: 'special', label: 'Specialised Care' },
  { id: 'technique', label: 'Therapy Techniques' },
  { id: 'home', label: 'Home Care' }
];

import { useSearchParams } from 'next/navigation';

export default function Services() {
  const searchParams = useSearchParams();
  const catParam = searchParams ? searchParams.get('cat') : null;
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (catParam) {
      setActiveFilter(catParam);
    }
  }, [catParam]);

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.cat === activeFilter);

  return (
    <section id="services" style={{ background: 'var(--cream-2)' }}>
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">What We Treat</span>
          <h2 className="h-lg">Comprehensive physiotherapy, tailored to you.</h2>
          <p>From acute pain to long-term neurological rehabilitation, every service is delivered with the same personal attention.</p>
        </div>

        <div className="filter-row" data-aos="fade-up">
          {filters.map(f => (
            <button
              key={f.id}
              className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="services-grid" id="services-grid" data-aos="fade-up">
          {filteredServices.map((service, index) => (
            <div className="service-card" key={`${service.title}-${index}`}>
              <span className="tag">{service.tag}</span>
              <div className="icon">
                <i className={service.icon}></i>
              </div>
              <h4>{service.title}</h4>
              <p className="mb-4">{service.desc}</p>
              <Link href={`/services/${service.slug}`} className="btn-outline no-underline w-100 text-center" style={{ display: 'block', padding: '10px 0', fontSize: '0.86rem' }}>
                View Details &amp; Self-Care <i className="fa-solid fa-chevron-right ml-1" style={{ fontSize: '0.75rem' }}></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
