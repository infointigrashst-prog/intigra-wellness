import React, { useState } from 'react';

type BodyPart = 'neck' | 'shoulder' | 'upperback' | 'lowerback' | 'elbow' | 'hip';

interface PartData {
  title: string;
  conditions: string[];
  symptoms: string[];
  treatment: string[];
  exercises: string[];
}

const bodyPartsData: Record<BodyPart, PartData> = {
  neck: {
    title: 'Neck & Cervical Spine Stiffness',
    conditions: ['Cervical spondylosis', 'Whiplash injury', 'Cervical radiculopathy', 'Muscle strain stiffness'],
    symptoms: ['Radiating pain down the arm', 'Sharp neck pain with rotation', 'Frequent cervicogenic headaches', 'Muscle spasms in shoulders'],
    treatment: ['Manual mobilization of cervical vertebrae', 'Isometric neck strengthening exercises', 'Postural alignment coaching', 'Dry needling / ultrasound therapy'],
    exercises: ['Chin tucks (10 reps x 2 sets)', 'Cervical retraction with band', 'Upper trapezius stretch (30s hold)']
  },
  shoulder: {
    title: 'Shoulder Mobility & Rotator Cuff Pain',
    conditions: ['Adhesive capsulitis (Frozen shoulder)', 'Rotator cuff impingement / tear', 'Shoulder bursitis', 'AC joint instability'],
    symptoms: ['Aching pain when sleeping on side', 'Severe pain raising arm overhead', 'Clicking/popping sound on movement', 'Inability to reach behind back'],
    treatment: ['Progressive joint mobilizations', 'Rotator cuff strengthening (isometric/isotonic)', 'Scapular stabilization training', 'TENS/IFT for pain alleviation'],
    exercises: ['Codman\'s pendulum swings (2 mins)', 'Resisted shoulder external rotation', 'Doorway chest stretch (30s hold)']
  },
  upperback: {
    title: 'Thoracic Spine & Postural Strain',
    conditions: ['Thoracic hyperkyphosis', 'Rhomboid/trapezius myofascial pain', 'Rib joint dysfunction', 'Workstation posture fatigue'],
    symptoms: ['Dull ache between shoulder blades', 'Tightness when taking deep breaths', 'Forward head posture stiffness', 'Burning sensation in mid-back'],
    treatment: ['Thoracic extension manipulations', 'Myofascial trigger point release', 'Scapular retraction strengthening', 'Ergonomic workstation adjustments'],
    exercises: ['Thoracic foam roller extensions', 'Prone Y-T-W lifts (12 reps)', 'Cat-camel mobilization (10 reps)']
  },
  lowerback: {
    title: 'Lower Back & Lumbar Spine Pain',
    conditions: ['Herniated / bulging disc (Slip disc)', 'Sciatica (L4-S1 radiculopathy)', 'Lumbar canal stenosis', 'Sacroiliac (SI) joint dysfunction'],
    symptoms: ['Radiating pain or numbness to feet', 'Sharp pain on forward bending', 'Morning stiffness in lumbar region', 'Difficulty standing up from a chair'],
    treatment: ['McKenzie mechanical therapy extension', 'Core stabilization (transversus abdominis)', 'Manual lumbar traction & adjustment', 'IFT electrotherapy for nerve release'],
    exercises: ['McKenzie lumbar extension press-ups', 'Bird-dogs (10 reps per side)', 'Pelvic tilts (15 reps)']
  },
  elbow: {
    title: 'Elbow & Wrist Overuse Strain',
    conditions: ['Lateral epicondylitis (Tennis elbow)', 'Medial epicondylitis (Golfer\'s elbow)', 'Carpal tunnel syndrome', 'De Quervain\'s tenosynovitis'],
    symptoms: ['Weak grip strength & dropped items', 'Aching pain shaking hands or opening jars', 'Tingling in thumb, index & middle finger', 'Pain carrying grocery bags'],
    treatment: ['Eccentric forearm tendon loading', 'Nerve gliding exercises', 'Wrist/elbow joint mobilizations', 'Friction massage / ultrasound'],
    exercises: ['Eccentric wrist extension curls', 'Median nerve glides (10 reps)', 'Forearm extensor stretches (30s hold)']
  },
  hip: {
    title: 'Hip joint & Piriformis Syndrome',
    conditions: ['Hip osteoarthritis', 'Piriformis syndrome tightness', 'Trochanteric bursitis', 'Gluteus medius tendinopathy'],
    symptoms: ['Deep ache in glutes or hip socket', 'Pain radiating down the back of the leg', 'Stiffness walking after sitting', 'Pain crossing legs or climbing stairs'],
    treatment: ['Hip joint distraction mobilization', 'Gluteal strengthening & hip activation', 'Piriformis myofascial release', 'Dry needling / heat therapy'],
    exercises: ['Clamshells with loop band (15 reps)', 'Figure-4 piriformis stretch (30s hold)', 'Glute bridges (12 reps)']
  }
};

export default function BodyMap() {
  const [selectedPart, setSelectedPart] = useState<BodyPart>('lowerback');

  const partInfo = bodyPartsData[selectedPart];

  return (
    <section id="bodymap">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">Interactive Pain Guide</span>
          <h2 className="h-lg">Where does it hurt?</h2>
          <p>Select a point on the body to see common conditions, symptoms, our treatment approach and recovery exercises.</p>
        </div>
        <div className="bodymap-wrap">
          <div className="bodymap-figure reveal" data-aos="fade-right">
            <svg viewBox="0 0 200 460" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Interactive human body diagram">
              <ellipse cx="100" cy="34" rx="26" ry="28" fill="var(--line)" />
              <path d="M74 62 C74 52 126 52 126 62 L134 130 C136 160 128 176 120 188 L128 260 L138 380 L118 386 L104 240 L96 240 L82 386 L62 380 L72 260 L80 188 C72 176 64 160 66 130 Z" fill="var(--cream-2)" stroke="var(--line)" strokeWidth="2" />
              <path d="M74 74 L40 120 L30 178" stroke="var(--line)" strokeWidth="14" strokeLinecap="round" fill="none" />
              <path d="M126 74 L160 120 L170 178" stroke="var(--line)" strokeWidth="14" strokeLinecap="round" fill="none" />
              <circle cx="100" cy="150" r="2.4" fill="var(--teal-light)" />
              <circle cx="100" cy="162" r="2.4" fill="var(--teal-light)" />
              <circle cx="100" cy="174" r="2.4" fill="var(--teal-light)" />
              <circle cx="100" cy="186" r="2.4" fill="var(--teal-light)" />
              <circle cx="100" cy="198" r="2.4" fill="var(--teal-light)" />
              <circle cx="100" cy="210" r="2.4" fill="var(--teal-light)" />

              {/* Neck hotspot */}
              <g 
                className={`hotspot ${selectedPart === 'neck' ? 'active' : ''}`} 
                onClick={() => setSelectedPart('neck')}
                tabIndex={0} 
                role="button" 
                aria-label="Neck"
                style={{ outline: 'none' }}
              >
                <circle className="pulse" cx="100" cy="60" r="9" fill="none" stroke="var(--teal)" strokeWidth="2" />
                <circle className="core" cx="100" cy="60" r="7" fill="var(--teal)" />
              </g>

              {/* Shoulder hotspot */}
              <g 
                className={`hotspot ${selectedPart === 'shoulder' ? 'active' : ''}`} 
                onClick={() => setSelectedPart('shoulder')}
                tabIndex={0} 
                role="button" 
                aria-label="Shoulder"
                style={{ outline: 'none' }}
              >
                <circle className="pulse" cx="76" cy="76" r="9" fill="none" stroke="var(--teal)" strokeWidth="2" />
                <circle className="core" cx="76" cy="76" r="7" fill="var(--teal)" />
              </g>

              {/* Upper back hotspot */}
              <g 
                className={`hotspot ${selectedPart === 'upperback' ? 'active' : ''}`} 
                onClick={() => setSelectedPart('upperback')}
                tabIndex={0} 
                role="button" 
                aria-label="Upper back and cervical spine"
                style={{ outline: 'none' }}
              >
                <circle className="pulse" cx="100" cy="110" r="9" fill="none" stroke="var(--teal)" strokeWidth="2" />
                <circle className="core" cx="100" cy="110" r="7" fill="var(--teal)" />
              </g>

              {/* Lower back hotspot */}
              <g 
                className={`hotspot ${selectedPart === 'lowerback' ? 'active' : ''}`} 
                onClick={() => setSelectedPart('lowerback')}
                tabIndex={0} 
                role="button" 
                aria-label="Lower back"
                style={{ outline: 'none' }}
              >
                <circle className="pulse" cx="100" cy="185" r="9" fill="none" stroke="var(--teal)" strokeWidth="2" />
                <circle className="core" cx="100" cy="185" r="7" fill="var(--teal)" />
              </g>

              {/* Elbow hotspot */}
              <g 
                className={`hotspot ${selectedPart === 'elbow' ? 'active' : ''}`} 
                onClick={() => setSelectedPart('elbow')}
                tabIndex={0} 
                role="button" 
                aria-label="Elbow and wrist"
                style={{ outline: 'none' }}
              >
                <circle className="pulse" cx="32" cy="182" r="9" fill="none" stroke="var(--teal)" strokeWidth="2" />
                <circle className="core" cx="32" cy="182" r="7" fill="var(--teal)" />
              </g>

              {/* Hip hotspot */}
              <g 
                className={`hotspot ${selectedPart === 'hip' ? 'active' : ''}`} 
                onClick={() => setSelectedPart('hip')}
                tabIndex={0} 
                role="button" 
                aria-label="Hip"
                style={{ outline: 'none' }}
              >
                <circle className="pulse" cx="115" cy="230" r="9" fill="none" stroke="var(--teal)" strokeWidth="2" />
                <circle className="core" cx="115" cy="230" r="7" fill="var(--teal)" />
              </g>
            </svg>
            <div className="bodymap-hint">Click on a hotspot indicator to read case parameters</div>
          </div>

          <div className="bodymap-panel glass" data-aos="fade-left">
            <h4 style={{ textTransform: 'capitalize' }}>
              <i className="fa-solid fa-hand-holding-medical"></i> {partInfo.title}
            </h4>
            
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="col-title">Common Conditions</div>
                <ul>
                  {partInfo.conditions.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
              <div className="col-md-6">
                <div className="col-title">Typical Symptoms</div>
                <ul>
                  {partInfo.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="col-title">Physiotherapy Approach</div>
                <ul>
                  {partInfo.treatment.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
              <div className="col-md-6">
                <div className="col-title">Recommended Exercises</div>
                <ul>
                  {partInfo.exercises.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
