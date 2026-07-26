export interface Exercise {
  id: string;
  cat: 'stretch' | 'strength' | 'core';
  slug: string;
  title: string;
  icon: string;
  duration: string;
  purpose: string;
  steps: string[];
  precautions: string[];
  image: string;
  categoryName: string;
  overview: string;
  frequency: string;
  targetMuscles: string[];
}

export const exercisesData: Record<string, Exercise> = {
  'cervical-chin-tucks': {
    id: 'ex1',
    cat: 'stretch',
    slug: 'cervical-chin-tucks',
    title: 'Cervical Chin Tucks',
    icon: 'fa-solid fa-person-walking-arrow-right',
    duration: '2 Mins · Daily',
    purpose: 'Aligns cervical spine vertebrae & eases strain in upper neck muscles.',
    image: '/assets/exercises/chin-tuck.png',
    categoryName: 'Neck & Cervical Stretch',
    overview: 'Chin tucks are a fundamental exercise used to correct forward head posture. This posture puts excessive strain on the deep cervical flexors and upper back. By retracting the head, you stretch the suboccipital muscles and strengthen the muscles responsible for keeping your neck aligned.',
    frequency: '10-12 repetitions, 2-3 times daily',
    targetMuscles: ['Deep Cervical Flexors', 'Suboccipitals', 'Scalenes'],
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
  'cat-camel-mobilisation': {
    id: 'ex2',
    cat: 'stretch',
    slug: 'cat-camel-mobilisation',
    title: 'Cat-Camel Mobilisation',
    icon: 'fa-solid fa-cat',
    duration: '3 Mins · Morning',
    purpose: 'Improves segmental flexibility of the thoracic and lumbar spine.',
    image: '/assets/exercises/cat-camel.png',
    categoryName: 'Spinal Mobility Stretch',
    overview: 'The Cat-Camel stretch is a gentle mobilization exercise designed to improve joint articulation throughout the thoracic and lumbar spine. It helps release tension in the spinal extensors, increases circulation, and promotes spinal health by moving the vertebrae through flexion and extension.',
    frequency: '10 cycles, once or twice daily (ideal in the morning)',
    targetMuscles: ['Erector Spinae', 'Rectus Abdominis', 'Multifidus'],
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
  'scapular-retraction-w-lifts': {
    id: 'ex3',
    cat: 'strength',
    slug: 'scapular-retraction-w-lifts',
    title: 'Scapular Retraction W-Lifts',
    icon: 'fa-solid fa-dumbbell',
    duration: '3 Sets · 10 Reps',
    purpose: 'Strengthens lower/middle trapezius and rhomboids to correct forward posture.',
    image: '/assets/exercises/scapular-lift.png',
    categoryName: 'Upper Back Strengthening',
    overview: 'W-lifts are highly effective for targeting the mid-thoracic stabilizers. Many people suffer from rounded shoulders due to weak upper back muscles. Squeezing the shoulder blades in a W configuration forces activation of the rhomboids and mid-to-lower traps, pulling the shoulders back into a neutral position.',
    frequency: '3 sets of 10 repetitions, 4-5 times a week',
    targetMuscles: ['Rhomboids', 'Middle Trapezius', 'Lower Trapezius', 'Rotator Cuff'],
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
  'isometric-glute-bridges': {
    id: 'ex4',
    cat: 'strength',
    slug: 'isometric-glute-bridges',
    title: 'Isometric Glute Bridges',
    icon: 'fa-solid fa-weight-lifting',
    duration: '3 Sets · 12 Reps',
    purpose: 'Builds gluteal strength, reducing compression load on the lower back.',
    image: '/assets/exercises/glute-bridge.png',
    categoryName: 'Core & Glute Strengthening',
    overview: 'The Glute Bridge is a foundational closed-chain exercise that targets the posterior chain, primarily the gluteus maximus and hamstrings. Building hip extensor strength is critical for protecting the lumbar spine, as weak glutes cause the lower back to overcompensate during lifting and daily movements.',
    frequency: '3 sets of 12 repetitions, held for 3 seconds each',
    targetMuscles: ['Gluteus Maximus', 'Hamstrings', 'Erector Spinae', 'Transversus Abdominis'],
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
  'opposite-bird-dog-holds': {
    id: 'ex5',
    cat: 'core',
    slug: 'opposite-bird-dog-holds',
    title: 'Opposite Bird-Dog holds',
    icon: 'fa-solid fa-shield-halved',
    duration: '2 Sets · 8 Reps',
    purpose: 'Improves multifidus stability and global trunk coordination.',
    image: '/assets/exercises/bird-dog.png',
    categoryName: 'Core Stability & Balance',
    overview: 'The Bird-Dog exercise is a classic stability movement that challenges the body to maintain a neutral spine while moving opposite limbs. This exercises co-activation of the core, glutes, and shoulders, specifically targeting the multifidus muscles which stabilize the vertebrae against shear forces.',
    frequency: '2 sets of 8 repetitions per side, holding for 5 seconds each',
    targetMuscles: ['Multifidus', 'Gluteus Maximus', 'Deltoids', 'Transversus Abdominis'],
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
};
