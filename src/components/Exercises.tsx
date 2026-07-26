import React, { useState } from 'react';
import Link from 'next/link';
import { exercisesData } from '../exercises-data';

const exercisesList = Object.values(exercisesData);

const tabs = [
  { id: 'all', label: 'All Exercises' },
  { id: 'stretch', label: 'Stretches' },
  { id: 'strength', label: 'Strengthening' },
  { id: 'core', label: 'Core Stability' }
];

export default function Exercises() {
  const [activeTab, setActiveTab] = useState('all');
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const filteredExercises = activeTab === 'all'
    ? exercisesList
    : exercisesList.filter(e => e.cat === activeTab);

  const toggleDetails = (id: string) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <section id="exercises" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">Exercise Library</span>
          <h2 className="h-lg">Active Recovery at Home</h2>
          <p>Simple, evidence-guided routines curated by Dr. Disha Vaghasiya to speed up clinical recovery and maintain pain-free mobility.</p>
        </div>

        <div className="exercise-tabs" data-aos="fade-up">
          {tabs.map(t => (
            <button
              key={t.id}
              className={`ex-tab ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="exercise-grid">
          {filteredExercises.map(ex => {
            const isOpen = openCardId === ex.id;
            return (
              <div 
                className="exercise-card show" 
                key={ex.id}
                style={{ display: 'block' }}
              >
                <div className="ex-top">
                  <div className="ex-icon">
                    <i className={ex.icon}></i>
                  </div>
                  <span className="duration">{ex.duration}</span>
                </div>
                <h4>{ex.title}</h4>
                <p className="purpose" style={{ minHeight: '52px' }}>{ex.purpose}</p>
                
                <div className="d-flex gap-2 w-100">
                  <button 
                    className="exercise-toggle flex-grow-1"
                    onClick={() => toggleDetails(ex.id)}
                    style={{ fontSize: '0.82rem', padding: '10px 12px' }}
                  >
                    <span>{isOpen ? 'Hide Steps' : 'Quick View Steps'}</span>
                    <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ marginLeft: '6px' }}></i>
                  </button>
                  <Link 
                    href={`/exercises/${ex.slug}`} 
                    className="btn-outline no-underline d-flex align-items-center justify-content-center"
                    style={{ fontSize: '0.82rem', padding: '10px 16px', borderRadius: '12px' }}
                  >
                    <i className="fa-solid fa-circle-info"></i>
                  </Link>
                </div>

                <div className={`exercise-details ${isOpen ? 'open' : ''}`}>
                  <div className="row g-3 mt-1 align-items-center">
                    <div className="col-md-7">
                      <div className="block">
                        <b>Steps to Perform:</b>
                        <ol className="mt-2" style={{ paddingLeft: '20px' }}>
                          {ex.steps.map((step, idx) => <li key={idx}>{step}</li>)}
                        </ol>
                      </div>
                      <div className="block mt-3">
                        <b>Physio Precaution:</b>
                        <div className="precaution mt-2">
                          {ex.precautions.map((p, idx) => <p key={idx} className="m-0">{p}</p>)}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 text-center mt-3 mt-md-0">
                      {ex.image && (
                        <div style={{
                          padding: '12px',
                          background: 'var(--cream)',
                          borderRadius: '16px',
                          border: '1px solid var(--line)',
                          overflow: 'hidden'
                        }}>
                          <img 
                            src={ex.image} 
                            alt={ex.title} 
                            style={{ 
                              width: '100%', 
                              height: 'auto', 
                              borderRadius: '10px', 
                              display: 'block',
                              maxHeight: '160px',
                              objectFit: 'contain'
                            }} 
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
