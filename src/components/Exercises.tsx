import React, { useState } from 'react';

interface Exercise {
  id: string;
  cat: 'stretch' | 'strength' | 'core';
  title: string;
  icon: string;
  duration: string;
  purpose: string;
  steps: string[];
  precautions: string[];
}

const exercisesData: Exercise[] = [
  {
    id: 'ex1',
    cat: 'stretch',
    title: 'Cervical Chin Tucks',
    icon: 'fa-solid fa-person-walking-arrow-right',
    duration: '2 Mins · Daily',
    purpose: 'Aligns cervical spine vertebrae & eases strain in upper neck muscles.',
    steps: [
      'Sit tall looking straight ahead with shoulders relaxed.',
      'Gently retract your head straight backward as if making a double chin (avoid tilting head down).',
      'Hold the retracted position for 5 seconds, then return to baseline.',
      'Repeat 10-12 repetitions.'
    ],
    precautions: [
      'Stop if you feel any pinching pain or dizziness radiating down the spine.'
    ]
  },
  {
    id: 'ex2',
    cat: 'stretch',
    title: 'Cat-Camel Mobilisation',
    icon: 'fa-solid fa-cat',
    duration: '3 Mins · Morning',
    purpose: 'Improves segmental flexibility of the thoracic and lumbar spine.',
    steps: [
      'Get onto your hands and knees (quadruped position).',
      'Camel: Let your belly sink towards the floor while lifting your head up (extension).',
      'Cat: Arch your back up towards the ceiling, tucking your chin to your chest (flexion).',
      'Slowly alternate between these two shapes.'
    ],
    precautions: [
      'Avoid forcing end-range motion if you have an acute disc herniation/slip disc.'
    ]
  },
  {
    id: 'ex3',
    cat: 'strength',
    title: 'Scapular Retraction W-Lifts',
    icon: 'fa-solid fa-dumbbell',
    duration: '3 Sets · 10 Reps',
    purpose: 'Strengthens lower/middle trapezius and rhomboids to correct forward posture.',
    steps: [
      'Lie face down on a mat with your forehead resting gently on a towel.',
      'Bring your arms out to form a W shape (elbows bent and tucked toward side ribs).',
      'Squeeze your shoulder blades back and up, lifting your hands and elbows off the floor.',
      'Hold for 2 seconds, then slowly lower.'
    ],
    precautions: [
      'Keep your neck neutral; do not lift your head or hyperextend the lower back.'
    ]
  },
  {
    id: 'ex4',
    cat: 'strength',
    title: 'Isometric Glute Bridges',
    icon: 'fa-solid fa-weight-lifting',
    duration: '3 Sets · 12 Reps',
    purpose: 'Builds gluteal strength, reducing compression load on the lower back.',
    steps: [
      'Lie on your back with knees bent and feet flat on the floor, hip-width apart.',
      'Engage your core and squeeze your glutes.',
      'Lift your hips up until your body forms a straight line from shoulders to knees.',
      'Hold for 3 seconds, then lower down slowly.'
    ],
    precautions: [
      'Do not arch your lower back excessively; use glutes and hamstrings to lift.'
    ]
  },
  {
    id: 'ex5',
    cat: 'core',
    title: 'Opposite Bird-Dog holds',
    icon: 'fa-solid fa-shield-halved',
    duration: '2 Sets · 8 Reps',
    purpose: 'Improves multifidus stability and global trunk coordination.',
    steps: [
      'Start on your hands and knees with a flat, neutral spine.',
      'Slowly raise and extend your right arm forward and your left leg straight back.',
      'Keep your hips square to the ground and contract your abdominal wall.',
      'Hold for 5 seconds, return, and alternate sides.'
    ],
    precautions: [
      'If you lose balance or tilt hips, do not raise legs as high.'
    ]
  }
];

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
    ? exercisesData
    : exercisesData.filter(e => e.cat === activeTab);

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
                
                <button 
                  className="exercise-toggle"
                  onClick={() => toggleDetails(ex.id)}
                >
                  <span>{isOpen ? 'Hide Instructions' : 'View Instructions'}</span>
                  <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>

                <div className={`exercise-details ${isOpen ? 'open' : ''}`}>
                  <div className="block">
                    <b>Steps to Perform:</b>
                    <ol>
                      {ex.steps.map((step, idx) => <li key={idx}>{step}</li>)}
                    </ol>
                  </div>
                  <div className="block">
                    <b>Physio Precaution:</b>
                    <div className="precaution">
                      {ex.precautions.map((p, idx) => <p key={idx} className="m-0">{p}</p>)}
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
