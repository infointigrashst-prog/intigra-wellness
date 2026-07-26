export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  icon: string;
  tagline: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  treatments: string[];
  homeAdvice: string[];
}

export const servicesDetailsData: Record<string, ServiceDetail> = {
  'back-pain': {
    slug: 'back-pain',
    title: 'Back Pain Relief & Spine Rehabilitation',
    category: 'Orthopedic Care',
    icon: 'fa-solid fa-spine',
    tagline: 'Restore natural alignment, release nerve impingement, and build long-term lumbar core stability.',
    overview: 'Back pain is one of the most common physical limitations, ranging from sharp acute spasms to deep, chronic lumbar aches. Our spinal rehabilitation focuses on mechanical alignment, postural re-education, and targeted decompression to relieve pressure on your lower and mid-back vertebrae.',
    symptoms: [
      'Dull aching sensation in the lower back (lumbar spine).',
      'Sharp pain when bending forward, twisting, or lifting objects.',
      'Stiffness when waking up or standing up after sitting.',
      'Radiating stiffness that runs down towards the buttocks or thighs.'
    ],
    causes: [
      'Poor sitting posture during long working hours.',
      'Muscle strains from sudden lifting or improper body mechanics.',
      'Facet joint inflammation or degenerative disc changes.',
      'Weakness in core stabilizers (transversus abdominis and multifidus).'
    ],
    treatments: [
      'Manual spinal mobilization to restore joint articulation.',
      'Core stabilization and pelvic tilt coordination training.',
      'Myofascial release for tight erector spinae and quadratus lumborum muscles.',
      'Ultrasound or IFT electrotherapy for initial acute pain reduction.'
    ],
    homeAdvice: [
      'Perform gentle knee-to-chest stretches daily.',
      'Avoid sitting continuously for more than 45 minutes; stand up and walk.',
      'Apply heat packs for chronic muscle stiffness, and ice for sudden sharp spasms.'
    ]
  },
  'neck-pain': {
    slug: 'neck-pain',
    title: 'Neck Pain & Cervical Mobility Rehabilitation',
    category: 'Orthopedic Care',
    icon: 'fa-solid fa-head-side-cough',
    tagline: 'Ease cervical stiffness, alleviate tension headaches, and regain full head rotation pain-free.',
    overview: 'Neck discomfort, cervical stiffness, and radiating shoulder tension are highly prevalent in modern desk workers. We target cervical range of motion and upper thoracic mobility to release tight neck flexors and correct forward-head alignment.',
    symptoms: [
      'Stiffness making it difficult to turn the head from side to side.',
      'Dull, constant tension at the base of the skull (cervicogenic headache).',
      'Sharp pain on tilting the head backwards or sideways.',
      'Tightness radiating into the upper back, traps, or shoulders.'
    ],
    causes: [
      'Continuous looking down at phone screens ("text neck").',
      'Unfavorable computer monitor height and poor office chair support.',
      'Sleeping on an unsupportive pillow or in awkward positions.',
      'Tension accumulation in the trapezius and levator scapulae muscles.'
    ],
    treatments: [
      'Cervical traction and mechanical spine decompression.',
      'Isometric neck strengthening and postural training.',
      'Trigger point release for upper trapezius and suboccipitals.',
      'Active cervical rotation and thoracic mobilization exercises.'
    ],
    homeAdvice: [
      'Perform cervical chin tucks (retraction) every 2 hours.',
      'Adjust your workstation screen height to eye level.',
      'Use a thin, supportive orthopedic pillow that maintains natural neck curvature.'
    ]
  },
  'slip-disc': {
    slug: 'slip-disc',
    title: 'Slip Disc & Herniated Disc Rehabilitation',
    category: 'Orthopedic Care',
    icon: 'fa-solid fa-disease',
    tagline: 'Structured non-surgical spinal decompression, centralization exercises, and disc recovery.',
    overview: 'A bulging, herniated, or prolapsed disc (often referred to as a slip disc) can compress surrounding spinal nerves, leading to intense localized pain or radiating sciatica. Our program focuses on mechanical centralization of the disc nucleus using evidence-guided protocols.',
    symptoms: [
      'Sharp, electric shock-like pain traveling down one or both legs.',
      'Numbness, tingling, or weakness in the foot or toes.',
      'Pain that worsens with coughing, sneezing, or sitting.',
      'Difficulty standing straight or walking comfort.'
    ],
    causes: [
      'Sudden heavy lifting with a bent and twisted spine.',
      'Repetitive micro-trauma from cumulative vibrational loads or bad posture.',
      'Age-related drying or weakening of the outer disc wall.',
      'Lack of lumbar support combined with weak core stabilization.'
    ],
    treatments: [
      'McKenzie centralization exercises to shift disc pressure away from nerves.',
      'Manual lumbar traction to widen intervertebral spacing.',
      'Gentle neural mobilization and nerve glides to decrease radiating pain.',
      'Core activation to build a protective muscular belt around the spine.'
    ],
    homeAdvice: [
      'Perform prone resting (lying flat on belly) to reduce intradiscal pressure.',
      'Avoid forward-bending exercises, squats, or toe-touching during acute phases.',
      'Walk on flat surfaces as tolerated to promote healthy blood flow to spinal structures.'
    ]
  },
  'frozen-shoulder': {
    slug: 'frozen-shoulder',
    title: 'Frozen Shoulder (Adhesive Capsulitis) Recovery',
    category: 'Orthopedic Care',
    icon: 'fa-solid fa-snowflake',
    tagline: 'Progressive joint mobilization to expand range of motion and relieve deep shoulder stiffness.',
    overview: 'Adhesive capsulitis, commonly known as frozen shoulder, involves inflammation and progressive thickening of the shoulder joint capsule. We guide you through structured, phase-appropriate therapies to control pain and gradually restore overhead reaching capabilities.',
    symptoms: [
      'Severe aching pain in the shoulder, especially when sleeping on that side.',
      'Significant restriction in raising the arm overhead or reaching behind the back.',
      'Sharp catch-like pain during sudden, uncontrolled arm movements.',
      'Gradual worsening of stiffness, limiting simple daily dressing tasks.'
    ],
    causes: [
      'Immobilization following a shoulder injury, fracture, or minor surgery.',
      'Inflammatory joint conditions or rotator cuff tendinitis left untreated.',
      'Common association with metabolic conditions such as diabetes.',
      'Age-related changes in shoulder joint capsule flexibility.'
    ],
    treatments: [
      'Passive and active-assisted glenohumeral joint mobilizations.',
      'Rotator cuff activation and scapular movement re-education.',
      'Therapeutic stretching targeting tight anterior/posterior capsules.',
      'Dry needling or heat modalities to relax surrounding guard muscles.'
    ],
    homeAdvice: [
      'Practice Codman\'s pendulum swings twice a day to maintain joint lubrication.',
      'Perform wall-crawling finger walks to gently stretch into overhead height.',
      'Avoid heavy lifting or overhead pushing exercises during the early freezing stage.'
    ]
  },
  'sports-injuries': {
    slug: 'sports-injuries',
    title: 'Sports Injury Rehabilitation & Athletic Training',
    category: 'Orthopedic Care',
    icon: 'fa-solid fa-person-running',
    tagline: 'Targeted tendon loading, ligament recovery, stability training, and return-to-play protocols.',
    overview: 'Athletic recovery requires more than simple pain relief — it demands a structured progression of strength, balance, agility, and sport-specific biomechanics. We build tailored loading plans for sprains, strains, and post-surgical athletic returns.',
    symptoms: [
      'Localized pain, swelling, and bruising immediately following training.',
      'Instability or the joint "giving way" during lateral cuts or loading.',
      'Sharp pain on sudden accelerations, deceleration, or jumping.',
      'Reduced power output, stiffness, and weakness in target muscle groups.'
    ],
    causes: [
      'Poor warm-up routine combined with sudden loading spikes.',
      'Incorrect footwear or biomechanical issues (such as knee valgus).',
      'Overuse injuries from inadequate recovery time between intense sessions.',
      'Direct impact trauma or twisting injuries during active play.'
    ],
    treatments: [
      'Structured progressive loading to safely rebuild tendon and ligament resilience.',
      'Proprioception and balance board drills to restore joint stability.',
      'Manual therapy, dry needling, and sports massage to manage tissue tone.',
      'Biomechanical running pattern review and corrective movement exercises.'
    ],
    homeAdvice: [
      'Follow the POLICE protocol (Protect, Optimal Loading, Ice, Compression, Elevation) for acute swellings.',
      'Keep moving within a pain-free range of motion to prevent compensatory loading.',
      'Incorporate structured mobility drills into your pre-training routine.'
    ]
  },
  'stroke-rehabilitation': {
    slug: 'stroke-rehabilitation',
    title: 'Stroke Rehabilitation & Motor Recovery Care',
    category: 'Neurological Care',
    icon: 'fa-solid fa-brain',
    tagline: 'Neuro-facilitation, balance retraining, and daily task independence coaching.',
    overview: 'Recovery after a stroke relies on neuroplasticity — the brain\'s capacity to reorganize and form new motor pathways. Our neurological physiotherapy utilizes task-specific training to retrain movement patterns and maximize daily functional independence.',
    symptoms: [
      'Weakness, numbness, or paralysis on one side of the body (hemiplegia).',
      'Difficulty maintaining sitting or standing balance (postural sway).',
      'Stiffness or tightness in muscles causing limited patterns (spasticity).',
      'Difficulty coordinating movements for walking, eating, or dressing.'
    ],
    causes: [
      'Ischemic stroke resulting from a blocked arterial blood supply in the brain.',
      'Hemorrhagic stroke caused by a ruptured blood vessel inside brain tissue.',
      'Interrupted neural motor signals from the brain cortex to the limbs.',
      'Compensatory movement patterns developed during early post-stroke recovery.'
    ],
    treatments: [
      'Proprioceptive Neuromuscular Facilitation (PNF) patterns.',
      'Task-oriented balance and dynamic weight-shifting exercises.',
      'Gait retraining, foot-drop management, and assistive device guidance.',
      'Passive stretching and positioning protocols to manage muscle spasticity.'
    ],
    homeAdvice: [
      'Practice sitting and standing weight shifts daily with supportive rails.',
      'Perform repetitive, simple hand gripping and squeezing exercises.',
      'Keep the home environment free of loose rugs or trip hazards to support safe walking.'
    ]
  },
  'paralysis-rehabilitation': {
    slug: 'paralysis-rehabilitation',
    title: 'Paralysis Care & Functional Retraining',
    category: 'Neurological Care',
    icon: 'fa-solid fa-wheelchair-move',
    tagline: 'Muscle activation, passive range conservation, and wheelchair/transfer independence.',
    overview: 'Paralysis rehab focuses on conserving joint range, preventing muscle atrophy, and retraining active motor control wherever possible. We build comprehensive programs to support transitions, transfer skills, and overall cardiorespiratory health.',
    symptoms: [
      'Inability to voluntarily move one or more limbs.',
      'Loss of sensation or reduced feel in target areas.',
      'Muscle stiffness (spasticity) or complete loose weakness (flaccidity).',
      'Difficulty changing body position, sitting up, or transferring from bed.'
    ],
    causes: [
      'Spinal cord injuries (trauma or disease) causing signal disruption.',
      'Brain injuries, cerebral palsy, or severe neuropathy.',
      'Stroke-induced hemiplegia or chronic neurological conditions.',
      'Peripheral nerve injuries cutting off motor signaling to target muscles.'
    ],
    treatments: [
      'Passive stretching of all joints to prevent painful contractures.',
      'Active-assisted exercises to stimulate remaining muscle units.',
      'Balance, trunk stability, and independent transfer training (wheelchair-to-bed).',
      'Sensory stimulation protocols and postural safety positioning.'
    ],
    homeAdvice: [
      'Change body positions every 2 hours to prevent skin pressure spots.',
      'Assist in daily passive stretching exercises of fingers, ankles, and knees.',
      'Maintain adequate hydration and perform deep breathing exercises regularly.'
    ]
  },
  'home-physiotherapy': {
    slug: 'home-physiotherapy',
    title: 'Home Visits & Doorstep Physiotherapy Care',
    category: 'Home Care',
    icon: 'fa-solid fa-house-medical',
    tagline: 'Expert clinical evaluation, modalities, and exercises brought directly to your home.',
    overview: 'For patients with acute pain, severe mobility limitations, or busy lifestyles, home visits provide top-tier clinical care. We bring all necessary portable therapy tools, exercise bands, and assessment gear to your home across Ahmedabad.',
    symptoms: [
      'Severe pain that limits walking or travel in a car.',
      'Difficulty leaving the home due to neurological or geriatric conditions.',
      'Lack of helper support or transport options for clinic visits.',
      'Preference for recovery in a comfortable, familiar home setting.'
    ],
    causes: [
      'Immediate post-surgical phase (e.g., knee/hip replacement rehab).',
      'Acute back spasm rendering the patient unable to sit or stand.',
      'Advanced neurological conditions needing home environment modifications.',
      'Busy family scheduling where in-clinic visits are hard to coordinate.'
    ],
    treatments: [
      'Complete bedside orthopedic and neurological assessments.',
      'Hands-on manual therapy, joint mobilizations, and stretching.',
      'Application of portable electrotherapy modalities (TENS, ultrasound) for pain control.',
      'Designing home-specific functional exercise routines.'
    ],
    homeAdvice: [
      'Clear a clean, well-lit space in the room for your physiotherapist.',
      'Ensure a sturdy chair with armrests and a comfortable bed are accessible.',
      'Keep your clinical records, prescription copies, and imaging files ready for review.'
    ]
  }
};
