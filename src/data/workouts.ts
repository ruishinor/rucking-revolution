export interface Workout {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: number; // in minutes
  distance: number; // in kilometers
  load: number; // in kilograms
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  terrain: ('road' | 'trail' | 'mixed' | 'hills')[];
  objectives: string[];
  equipment: string[];
  notes?: string;
}

export const workouts: Workout[] = [
  {
    id: 'wk-1',
    slug: 'foundation-builder',
    title: 'Foundation Builder',
    description: 'Beginner-friendly workout focused on building proper form and base endurance with manageable load and distance.',
    duration: 45,
    distance: 5.0,
    load: 10,
    difficulty: 'beginner',
    terrain: ['road', 'trail'],
    objectives: [
      'Establish proper rucking form',
      'Build base aerobic endurance',
      'Practice consistent pacing',
      'Develop load carriage comfort'
    ],
    equipment: ['ruck (10kg)', 'water', 'basic first aid'],
    notes: 'Ideal for those new to rucking or returning after a break. Focus on form over speed.'
  },
  {
    id: 'wk-2',
    slug: 'endurance-challenger',
    title: 'Endurance Challenger',
    description: 'Intermediate workout designed to build stamina and mental resilience over longer distance with moderate load.',
    duration: 90,
    distance: 12.0,
    load: 15,
    difficulty: 'intermediate',
    terrain: ['trail', 'hills'],
    objectives: [
      'Increase aerobic capacity',
      'Build mental toughness',
      'Practice fueling and hydration strategies',
      'Develop uphill/downhill technique'
    ],
    equipment: ['ruck (15kg)', 'hydration system (2L)', 'snacks', 'navigation tools'],
    notes: 'Include one 5-minute break at the 60-minute mark for refueling and equipment check.'
  },
  {
    id: 'wk-3',
    slug: 'strength-focus',
    title: 'Strength Focus',
    description: 'Load-centered workout emphasizing muscular strength and power with heavier weight over shorter distance.',
    duration: 60,
    distance: 4.0,
    load: 25,
    difficulty: 'advanced',
    terrain: ['road', 'hills'],
    objectives: [
      'Develop maximal strength under load',
      'Improve posture and core stability',
      'Practice short, powerful efforts',
      'Build confidence with heavier loads'
    ],
    equipment: ['ruck (25kg)', 'weight plates (for adjustment)', 'gloves', 'moisture-wicking shirt'],
    notes: 'Keep pace deliberate and focused on maintaining perfect form with the heavier load.'
  },
  {
    id: 'wk-4',
    slug: 'community-response-simulation',
    title: 'Community Response Simulation',
    description: 'Variable terrain workout simulating community response scenarios with equipment handling and navigation challenges.',
    duration: 120,
    distance: 15.0,
    load: 20,
    difficulty: 'advanced',
    terrain: ['mixed', 'trail', 'hills'],
    objectives: [
      'Practice navigation under fatigue',
      'Develop equipment transition skills',
      'Build team coordination under load',
      'Simulate emergency response planning and execution'
    ],
    equipment: ['ruck (20kg)', 'map and compass', 'communication device', 'simulated equipment (5kg extra)', 'headlamp'],
    notes: 'Best performed with a team of 2-4 people. Include navigation checkpoints and equipment transfer drills.'
  },
  {
    id: 'wk-5',
    slug: 'speed-and-agility',
    title: 'Speed and Agility',
    description: 'Interval-based workout focusing on improving pace, quickness, and ability to change direction under load.',
    duration: 50,
    distance: 6.0,
    load: 12,
    difficulty: 'intermediate',
    terrain: ['road', 'trail'],
    objectives: [
      'Improve rucking pace and efficiency',
      'Develop lateral movement and agility',
      'Practice acceleration and deceleration',
      'Build cardiovascular recovery capacity'
    ],
    equipment: ['ruck (12kg)', 'cones or markers (4-6)', 'stopwatch', 'water'],
    notes: 'Structure: 10min warmup, 4x (4min fast/2min easy) intervals, 10min cooldown. Keep load secure during intervals.'
  },
  {
    id: 'wk-6',
    slug: 'recovery-flow',
    title: 'Recovery Flow',
    description: 'Low-intensity active recovery workout promoting blood flow and mobility while minimizing joint stress.',
    duration: 35,
    distance: 3.5,
    load: 8,
    difficulty: 'beginner',
    terrain: ['trail'],
    objectives: [
      'Promote active recovery',
      'Improve circulation and mobility',
      'Practice mindfulness and breath work',
      'Prepare for more intense training days'
    ],
    equipment: ['ruck (8kg)', 'trekking poles (optional)', 'journal', 'water'],
    notes: 'Focus on nasal breathing and maintaining conversation pace. Use as recovery day between harder workouts.'
  },
  {
    id: 'wk-7',
    slug: 'night-operation',
    title: 'Night Operation',
    description: 'Low-light workout developing navigation skills, sensory awareness, and confidence operating in darkness.',
    duration: 75,
    distance: 8.0,
    load: 18,
    difficulty: 'intermediate',
    terrain: ['trail', 'hills'],
    objectives: [
      'Develop night navigation proficiency',
      'Enhance non-visual sensory awareness',
      'Practice light discipline and team coordination',
      'Build confidence in low-visibility conditions'
    ],
    equipment: ['ruck (18kg)', 'headlamp (red mode preferred)', 'backup light', 'reflective gear', 'whistle', 'extra batteries'],
    notes: 'Conduct in familiar, safe area with good trail visibility. Start with adequate daylight to navigate to starting point.'
  },
  {
    id: 'wk-8',
    slug: 'team-challenge',
    title: 'Team Challenge',
    description: 'Collaborative workout emphasizing communication, load sharing, and collective problem-solving.',
    duration: 100,
    distance: 10.0,
    load: 22,
    difficulty: 'advanced',
    terrain: ['mixed'],
    objectives: [
      'Develop team communication under stress',
      'Practice load sharing and equipment transfer',
      'Build collective problem-solving skills',
      'Strengthen team cohesion through shared challenge'
    ],
    equipment: ['rucks (22kg each)', 'shared equipment (20kg total)', 'rope (15m)', 'first aid kit', 'communication devices'],
    notes: 'Designed for teams of 4-6 people. Include obstacles requiring teamwork to overcome (simulated wall, casualty carry, etc.).'
  },
  {
    id: 'wk-9',
    slug: 'urban-ruck',
    title: 'Urban Ruck',
    description: 'City-based workout focusing on navigation, obstacle navigation, and functional fitness in urban environments.',
    duration: 55,
    distance: 4.5,
    load: 10,
    difficulty: 'beginner',
    terrain: ['road'],
    objectives: [
      'Navigate urban terrain safely',
      'Practice obstacle navigation (stairs, curbs, benches)',
      'Develop situational awareness in crowded areas',
      'Build foundational strength for daily activities'
    ],
    equipment: ['ruck (10kg)', 'water', 'phone (for navigation)', 'reflective vest'],
    notes: 'Best performed in urban areas with good pedestrian infrastructure. Focus on safety and awareness of surroundings.'
  },
  {
    id: 'wk-10',
    slug: 'hill-repeats',
    title: 'Hill Repeats',
    description: 'Strength and cardio focused workout using repeated hill climbs to build power and endurance.',
    duration: 40,
    distance: 3.0,
    load: 15,
    difficulty: 'intermediate',
    terrain: ['hills'],
    objectives: [
      'Build leg strength and power',
      'Improve cardiovascular endurance',
      'Develop uphill/downhill technique',
      'Increase lactate threshold'
    ],
    equipment: ['ruck (15kg)', 'water', 'heart rate monitor (optional)'],
    notes: 'Find a hill with 5-10% grade that takes 2-3 minutes to climb. Walk down for recovery between repeats.'
  },
  {
    id: 'wk-11',
    slug: 'nijmegen-distance-march',
    title: 'Nijmegen Distance March',
    description: 'Pilgrimage-style distance march simulating the Nijmegen Four Days Marches format with lightweight pack over sustained road and path distance.',
    duration: 300,
    distance: 40.0,
    load: 10,
    difficulty: 'advanced',
    terrain: ['road', 'mixed'],
    objectives: [
      'Complete 40 km in single stage with military-category pack weight',
      'Develop sustainable pacing for extended road marches',
      'Practice foot care protocols for multi-day distance events',
      'Build team cohesion through formation walking'
    ],
    equipment: ['ruck (10kg)', 'walking poles', 'foot care kit (tape, blister plasters)', 'hydration system (2L)', 'electrolyte tablets', 'compression socks (for recovery)'],
    notes: 'Simulates Nijmegen Four Day Marches daily stage. Keep pack at or under 10 kg for military category. Start early, maintain steady 5 km/h pace, and take 10-minute breaks every 10 km.'
  },
  {
    id: 'wk-12',
    slug: 'tactical-ruck',
    title: 'Tactical Ruck',
    description: 'Military-style workout focusing on stealth, navigation, and load-bearing skills under time constraints.',
    duration: 180,
    distance: 20.0,
    load: 25,
    difficulty: 'advanced',
    terrain: ['mixed', 'trail', 'hills'],
    objectives: [
      'Develop load-bearing endurance over long distances',
      'Practice navigation with map and compass',
      'Build stealth movement techniques',
      'Develop time management under load'
    ],
    equipment: ['ruck (25kg)', 'map and compass', 'communication device', 'headlamp', 'first aid kit', 'emergency rations'],
    notes: 'Best performed with navigation checkpoints. Include periodic security halts and equipment checks.'
  }
];