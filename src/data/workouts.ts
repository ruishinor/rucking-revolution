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
  },
  {
    id: 'wk-13',
    slug: 'sandbag-murph',
    title: 'Sandbag Murph',
    description: 'HERO WOD featuring sandbag movements in the classic Murph format. Sandbag cannot touch the ground during rest - must be held or passed to partner.',
    duration: 60,
    distance: 3.2,
    load: 20,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build extreme endurance under load',
      'Develop full-body strength and conditioning',
      'Practice sandbag handling techniques',
      'Test mental resilience under fatigue'
    ],
    equipment: ['ruck', 'sandbag (15-20kg)'],
    notes: 'Buy-in: 1 mile ruck. Cash-out: 1 mile ruck. Scale: Reduce reps by half; allow bag on ground for rest. RULE: Sandbag cannot touch ground. If resting, hold it or have partner hold it.'
  },
  {
    id: 'wk-14',
    slug: 'kalsu-sandbag',
    title: 'Kalsu (Sandbag Edition)',
    description: 'HERO WOD goal of 100 thrusters for time with EMOM burpees. Every minute on the minute perform 5 burpees, then max thrusters in remaining time.',
    duration: 30,
    distance: 0,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build high-rep thruster capacity',
      'Develop work capacity under interval stress',
      'Maintain burpee rhythm while fatigued',
      'Push through mental and physical barriers'
    ],
    equipment: ['sandbag (15kg)'],
    notes: 'Start the workout with 5 burpees. In remaining time of each minute, perform max thrusters. Scale: Reduce to 50 thrusters; Reduce to 3 burpees EMOM.'
  },
  {
    id: 'wk-15',
    slug: 'the-don',
    title: 'The Don',
    description: 'HERO WOD with 66 reps of 8 movements for time. Complete all reps in order: Deadlifts, Tuck Jumps, Sandbag Swings, V-Ups, Russian Twists, Pull Ups, Sandbag Thrusters, Burpees, Side Lunges.',
    duration: 45,
    distance: 0,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Develop total body conditioning',
      'Build mental toughness through high volume',
      'Maintain movement quality under fatigue',
      'Test endurance across multiple modalities'
    ],
    equipment: ['sandbag', 'pull-up bar'],
    notes: '66 Deadlifts, 66 Tuck Jumps, 66 Sandbag Swings, 66 V-Ups, 66 Russian Twists, 66 Pull Ups, 66 Sandbag Thrusters, 66 Burpees, 66 Side Lunges (33/side). Scale reps to 33 per movement.'
  },
  {
    id: 'wk-16',
    slug: 'coupon-indian-run',
    title: 'Coupon Indian Run',
    description: 'Team formation ruck where front person carries heavy bag, second carries light weight, rear sprints to front. Pass weights forward to maintain continuous forward movement.',
    duration: 20,
    distance: 1.0,
    load: 20,
    difficulty: 'intermediate',
    terrain: ['road'],
    objectives: [
      'Build team coordination and communication',
      'Develop dynamic transition skills',
      'Practice carrying varied loads',
      'Build sprinting capacity under load'
    ],
    equipment: ['ruck', '1 heavy bag', '1 light weight (kettlebell)'],
    notes: 'Formation: Single file while rucking. Front person carries Heavy Bag, second carries Light Weight. Rear person sprints to front. Pass weights forward (New leader takes Heavy, Old leader takes Light). Total Distance: 1km.'
  },
  {
    id: 'wk-17',
    slug: 'iron-half-mile',
    title: 'Iron Half-Mile',
    description: 'Partner workout with 200m forward progress. P1 pushes/carries coupon until failure. P2 does exercises then sprints to relieve P1. 3 rounds: Man-makers, Push-ups, LBCs.',
    duration: 30,
    distance: 1.0,
    load: 20,
    difficulty: 'advanced',
    terrain: ['road', 'hills'],
    objectives: [
      'Build partner coordination under fatigue',
      'Develop carry endurance and pushing strength',
      'Practice exercise-to-sprint transitions',
      'Build team accountability'
    ],
    equipment: ['ruck', 'heavy coupon'],
    notes: 'Buy-In: 1 Mile Hill Carry. 3 Rounds of 200m forward progress. Round 1: Man-makers w/ Ruck Press. Round 2: Push-ups. Round 3: LBCs x25. Exit: Farmers Walk. Scale: Set fixed distance swap instead of failure.'
  },
  {
    id: 'wk-18',
    slug: 'beatdown-pyramid',
    title: 'The Beatdown Pyramid',
    description: 'Strength pyramid with ruck: 15-14-13-12-11 Push-ups paired with Goblet Squats and Good Mornings. Total 130 reps per round. Aim for 3 rounds.',
    duration: 45,
    distance: 0,
    load: 15,
    difficulty: 'intermediate',
    terrain: ['road'],
    objectives: [
      'Build upper body pushing strength',
      'Develop lower body endurance',
      'Maintain movement standards under volume',
      'Increase work capacity'
    ],
    equipment: ['ruck (15kg)'],
    notes: '15 Push-ups -> 10 Goblet Squats, 14 Push-ups -> 10 Good Mornings, 13 Push-ups -> 10 Goblet Squats, 12 Push-ups -> 10 Good Mornings, 11 Push-ups -> 10 Goblet Squats, 10 Push-ups. Scale: Remove Ruck; Do pushups on knees.'
  },
  {
    id: 'wk-19',
    slug: 'do-the-harder-thing',
    title: 'Do The Harder Thing',
    description: '3-person team rotation: Sprinter sprints hill/200m, Worker chips away at 100 reps, Holder holds weight OVERHEAD (static). Cycle positions when sprinter returns.',
    duration: 45,
    distance: 1.0,
    load: 15,
    difficulty: 'advanced',
    terrain: ['hills'],
    objectives: [
      'Build team dynamic under varied demands',
      'Develop overhead stability and endurance',
      'Practice continuous exercise under load',
      'Build accountability and communication'
    ],
    equipment: ['rucks', '1 overhead weight'],
    notes: 'Rotation: Cycle positions when Sprinter returns. Exercises (100 Reps Team Total): Arm Circles, Merkins, Flutter Kicks, Jumping Jacks, LBCs, Burpees. Scale: Hold weight at chest instead of overhead. Weight must stay LOCKED OUT overhead for reps to count.'
  },
  {
    id: 'wk-20',
    slug: 'sandbag-4x4',
    title: 'Sandbag 4x4',
    description: '4 Rounds For Time: 4 min fast ruck, 30 sandbag thrusters, 4 min fast ruck, 30 lateral pull + mountain climbers. Tests stamina and strength under time pressure.',
    duration: 30,
    distance: 2.5,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build interval endurance under load',
      'Develop sandbag thruster proficiency',
      'Practice lateral movement patterns',
      'Increase work capacity and stamina'
    ],
    equipment: ['ruck', 'sandbag'],
    notes: '4 Rounds For Time: 4 Minute Ruck (Fast Pace), 30 Sandbag Thrusters, 4 Minute Ruck (Fast Pace), 30 Lateral Pull + Mountain Climbers. Scale: 15 Thrusters; 2 min Ruck. Lateral Pull: Plank position, drag bag under body L->R is one rep.'
  },
  {
    id: 'wk-21',
    slug: 'hill-work-coupon-variation',
    title: 'Hill Work — Coupon Variation',
    description: 'Team hill workout with coupon selection. P1 selects coupon weight and runs to hill top then returns. While P1 moves, team cycles continuous PT. 4 full rounds.',
    duration: 40,
    distance: 1.0,
    load: 20,
    difficulty: 'advanced',
    terrain: ['hills'],
    objectives: [
      'Build hill running capacity under load',
      'Develop continuous PT under team pressure',
      'Practice varied intensity based on selection',
      'Build team cohesion through shared challenge'
    ],
    equipment: ['rucks', 'team weights (coupons)'],
    notes: 'P1 selects coupon weight and runs to hill top, then returns. While P1 moves, the team cycles continuous PT (ruck squats, overhead press, swings, LBCs). Complete 4 full rounds. If heavy coupon repeatedly chosen, remove it for next sprinter rotation.'
  },
  {
    id: 'wk-22',
    slug: 'catch-me-if-you-can',
    title: 'Catch Me If You Can',
    description: 'Partner carry workout: P1 farmer-carries both rucks at steady pace. P2 completes 15 pushups then sprints to relieve P1. Continue rotation.',
    duration: 25,
    distance: 3.0,
    load: 20,
    difficulty: 'intermediate',
    terrain: ['road'],
    objectives: [
      'Build farmer carry endurance',
      'Develop sprint transition capacity',
      'Practice pushup-to-sprint transitions',
      'Build partner accountability'
    ],
    equipment: ['rucks (2)'],
    notes: 'P1 farmer-carries both rucks at steady pace. P2 completes 15 pushups, then sprints to relieve P1. Swap carry responsibility each time P2 catches P1. Continue rotation for planned distance or time. Scale: Reduce pushups or substitute knee pushups; shorten sprint distance.'
  },
  {
    id: 'wk-23',
    slug: 'beatdown-workout',
    title: 'Beatdown',
    description: 'Full-body strength and conditioning with 5 minutes of jogging in place and cadence, followed by descending pushup/goblet squat/good morning pyramid. Approximately 130 reps per full round.',
    duration: 30,
    distance: 0,
    load: 10,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build full-body strength and endurance',
      'Develop cardiovascular capacity',
      'Maintain movement standards under fatigue',
      'Increase work capacity across all muscle groups'
    ],
    equipment: ['ruck (optional 10kg)'],
    notes: 'Begin with 5 minutes of jogging in place and down-command cadence. Run a descending pushup / goblet squat / good morning pyramid to 10 reps. Aim for approximately 130 reps per full round. Scale: Reduce rep counts, extend rest intervals, allow incline pushups.'
  },
  {
    id: 'wk-24',
    slug: 'hill-work-tight-formation',
    title: 'Hill Work #2 — Tight Formation',
    description: 'Team hill evolution: Move 600m in tight team formation under 20-minute time hack. Uphill only counts if weights locked overhead. Downhill is casualty carry with litter. Team penalties apply.',
    duration: 20,
    distance: 0.6,
    load: 20,
    difficulty: 'advanced',
    terrain: ['hills'],
    objectives: [
      'Build team formation discipline',
      'Develop overhead carry endurance',
      'Practice casualty carry techniques',
      'Build time-pressure performance'
    ],
    equipment: ['rucks / team weights'],
    notes: 'Move 600m in tight team formation under a 20-minute time hack. On uphill segments, forward progress only counts while weights are locked overhead. On downhill return, execute casualty carry with litter and no ground contact. Scale: Shorten distance; allow periodic rests where weights are front-racked.'
  },
  {
    id: 'wk-25',
    slug: 'catch-me-if-you-can-sandbag',
    title: 'Catch Me If You Can — Sandbag',
    description: 'Partner sandbag sprint: P1 performs 5 burpees before each rotation. P2 sprints forward carrying 30lb sandbag. Rotate roles continuously with controlled handoffs.',
    duration: 25,
    distance: 2.0,
    load: 14,
    difficulty: 'intermediate',
    terrain: ['road'],
    objectives: [
      'Build burpee-to-sprint transitions',
      'Develop sandbag carry speed',
      'Practice controlled handoffs',
      'Build partner coordination'
    ],
    equipment: ['30 lb sandbags'],
    notes: 'P1 performs 5 burpees before each rotation. P2 sprints forward carrying a 30 lb sandbag. Rotate roles continuously and keep handoffs controlled. Use cadence or pyramid structure for progression. Scale: Use lighter bag or reduce burpees; substitute step-ups for sprints.'
  },
  {
    id: 'wk-26',
    slug: '8-min-hiit-tabata',
    title: '8-MIN HIIT (Tabata)',
    description: '16 intervals of 20s work / 10s rest. Alternate jumping squats and flutter kicks each interval. Maximum sustainable output for 8 minutes.',
    duration: 10,
    distance: 0,
    load: 0,
    difficulty: 'intermediate',
    terrain: ['road'],
    objectives: [
      'Build anaerobic capacity',
      'Develop explosive movement patterns',
      'Improve work capacity under intensity',
      'Track progression week to week'
    ],
    equipment: ['bodyweight'],
    notes: 'Set timer for 16 intervals of 20s work / 10s rest. Alternate jumping squats and flutter kicks each interval. Maintain maximum sustainable output throughout all 8 minutes. Scale: Switch jumping squats to bodyweight squats; reduce interval intensity.'
  },
  {
    id: 'wk-27',
    slug: 'up-down-position',
    title: 'Up/Down Position',
    description: 'Core isometric endurance: Hold 6-inch off-ground position for core tension intervals. On command, elevate slightly and re-stabilize under load if using sandbag.',
    duration: 15,
    distance: 0,
    load: 10,
    difficulty: 'intermediate',
    terrain: ['road'],
    objectives: [
      'Build core endurance and stability',
      'Develop isometric hold capacity',
      'Practice core bracing under load',
      'Strengthen anti-extension'
    ],
    equipment: ['sandbag (optional)'],
    notes: 'Hold a 6-inch off-ground position for core tension intervals. On command, elevate slightly and re-stabilize under load if using sandbag. Cycle between up/down holds without fully resting to the ground. Scale: Hold higher if 6 inches is too intense; rest as needed.'
  },
  {
    id: 'wk-28',
    slug: '100-burpee-challenge',
    title: '100 Burpee Challenge',
    description: 'Complete 100 full-standard burpees for time. Use pacing targets (10-12 minute benchmark). Break into short sets only as needed to preserve form.',
    duration: 15,
    distance: 0,
    load: 0,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build high-rep burpee capacity',
      'Develop pacing strategies',
      'Maintain movement quality under fatigue',
      'Test mental toughness'
    ],
    equipment: ['bodyweight'],
    notes: 'Complete 100 full-standard burpees for time. Use pacing targets (for example, 10-12 minute benchmark). Break into short sets only as needed to preserve form. Record finish time for repeatable progression. Scale: Reduce total count to 50 or partition into rounds with rest.'
  },
  {
    id: 'wk-29',
    slug: 'emotm-pullups',
    title: 'Every Minute On The Minute (EMOTM)',
    description: 'At each minute mark, perform programmed pullup or substitute set. Continue for planned duration while maintaining clean movement quality.',
    duration: 30,
    distance: 0,
    load: 0,
    difficulty: 'intermediate',
    terrain: ['road'],
    objectives: [
      'Build pullup/skill endurance',
      'Develop consistent rep output',
      'Practice breathing under load',
      'Build mental discipline'
    ],
    equipment: ['pullup bar or alternatives'],
    notes: 'EMOM: At each minute mark, perform programmed pullup or substitute set. Choose one pattern per minute (for example: 5 pullups, or 10 pushups + 5 situps). Continue for planned duration while maintaining clean movement quality. Scale: Replace pullups with ring rows or band-assisted pullups; reduce duration.'
  },
  {
    id: 'wk-30',
    slug: 'sandbag-overhead-lunges',
    title: 'Sandbag Overhead Lunges (50 Steps)',
    description: 'Complete 50 overhead lunge steps with sandbag control. Keep core braced and lockout stable. Follow with presses and goblet lunges.',
    duration: 20,
    distance: 0.5,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build overhead stability',
      'Develop unilateral leg strength',
      'Practice balance under load',
      'Increase core stability'
    ],
    equipment: ['sandbag'],
    notes: 'Complete 50 overhead lunge steps with sandbag control. Keep core braced and lockout stable through each step. Follow with presses and goblet lunges based on session format. Prioritize balance and knee tracking throughout. Scale: Reduce steps to 20; use lighter load or front-rack carry.'
  },
  {
    id: 'wk-31',
    slug: 'sand-baby-murph',
    title: 'Sand Baby Murph',
    description: 'HERO WOD: Keep sandbag on shoulder/chest carry through full circuit. Complete lunges, situps, squats, and chest carry volume. Sandbag does not touch ground unless scaled.',
    duration: 60,
    distance: 3.2,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build endurance under continuous load',
      'Develop full-body conditioning',
      'Practice sandbag carry techniques',
      'Test mental resilience'
    ],
    equipment: ['sandbag'],
    notes: 'Keep sandbag on shoulder/chest carry through the full circuit. Complete lunges, situps, squats, and chest carry volume as prescribed. Carrier calls exercise transitions while team manages rest cadence. Scale: Reduce reps (e.g., 50/75); allow setting bag down for short rests for safety.'
  },
  {
    id: 'wk-32',
    slug: 'essential-basics',
    title: 'Essential Basics',
    description: 'Entry-level session: Cycle foundational movements - farmers carry, jumping squats, and dips. Repeatable rep targets for clean baseline conditioning.',
    duration: 20,
    distance: 0.5,
    load: 10,
    difficulty: 'beginner',
    terrain: ['road'],
    objectives: [
      'Build foundational movement patterns',
      'Develop basic conditioning',
      'Practice transitions between movements',
      'Establish baseline fitness'
    ],
    equipment: ['no gear (optional farmers carry)'],
    notes: 'Cycle foundational movements: farmers carry, jumping squats, and dips. Choose repeatable rep targets for clean baseline conditioning. Keep transitions smooth and rest minimal between stations. Scale: Adjust reps/weight to participant level.'
  },
  {
    id: 'wk-33',
    slug: 'four-mile-ruck-with-pt',
    title: '4 Mile Ruck With PT At Each Mile',
    description: 'Ruck 4 total miles at consistent pace. At each mile marker, stop for prescribed PT set. Resume ruck immediately after each PT station.',
    duration: 75,
    distance: 6.4,
    load: 15,
    difficulty: 'intermediate',
    terrain: ['road', 'trail'],
    objectives: [
      'Build distance ruck endurance',
      'Develop interval PT capacity',
      'Practice pacing strategies',
      'Build mixed modality fitness'
    ],
    equipment: ['ruck'],
    notes: 'Ruck 4 total miles at consistent pace. At each mile marker, stop for a prescribed PT set. Example PT blocks: sandbag burpees, thrusters, or deadlifts. Resume ruck immediately after each PT station. Scale: Shorten distance or reduce PT sets.'
  },
  {
    id: 'wk-34',
    slug: 'six-rounds-every-6-min',
    title: '6 Rounds For Time (Every 6 Min)',
    description: 'Every 6 minutes for 6 rounds: run 200m, then complete sandbag push presses and bent-over rows. Finish each round inside 6-minute window.',
    duration: 36,
    distance: 1.2,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build interval running capacity',
      'Develop sandbag pressing strength',
      'Practice rowing under fatigue',
      'Increase work capacity'
    ],
    equipment: ['sandbag', 'running area'],
    notes: 'Every 6 minutes for 6 rounds: run 200m, then complete sandbag push presses and bent-over rows. Finish each round inside the 6-minute window when possible. Use remaining time each round as recovery. Scale: Use lighter bag; drop rep counts; replace run with 100m.'
  },
  {
    id: 'wk-35',
    slug: 'sandbag-fran',
    title: 'Sandbag Fran',
    description: 'Benchmark workout: For time 21-15-9 reps of pullups and sandbag thrusters. Choose pullup variation that preserves intensity and clean form.',
    duration: 15,
    distance: 0,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build benchmark capacity',
      'Develop thruster efficiency',
      'Practice pullup variations',
      'Track progression over time'
    ],
    equipment: ['sandbag', 'pullup bar'],
    notes: 'For time: 21-15-9 reps of pullups and sandbag thrusters. Keep transitions tight and prioritize movement quality. Choose a pullup variation that preserves intended intensity and clean form. Record completion time for benchmark retests. Scale: Reduce reps to 15-10-5; replace pullups with ring rows.'
  },
  {
    id: 'wk-36',
    slug: 'the-seven-hero',
    title: 'The Seven (HERO WOD)',
    description: 'HERO WOD: 7 rounds for time with 7 reps per movement. Sequence includes handstand pushups, thrusters, knees-to-elbows, deadlifts, burpees, swings, and pull-ups.',
    duration: 50,
    distance: 0,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build high-volume conditioning',
      'Develop varied movement proficiency',
      'Maintain standards under fatigue',
      'Test extreme endurance'
    ],
    equipment: ['sandbag / bar alternatives'],
    notes: 'Complete 7 rounds for time with 7 reps per movement. Sequence includes handstand pushups, thrusters, knees-to-elbows, deadlifts, burpees, swings, and pull-ups. Hold movement standards under fatigue across all rounds. Scale: Reduce rounds or substitute strict pushups/box pike pushups for HSPUs.'
  },
  {
    id: 'wk-37',
    slug: 'filthy-fifty-sandbag',
    title: 'Filthy Fifty (Sandbag)',
    description: 'High-volume chipper: 50-rep stations with sandbag-focused substitutions. Include tuck jumps, pullups, push presses, thrusters, and burpees.',
    duration: 45,
    distance: 0,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build high-volume work capacity',
      'Develop sandbag movement proficiency',
      'Maintain safe technique under fatigue',
      'Build mental toughness'
    ],
    equipment: ['sandbag', 'pullup option'],
    notes: 'Complete high-volume 50-rep stations with sandbag-focused substitutions. Include movements such as tuck jumps, pullups, push presses, thrusters, and burpees. Manage pace and breaks strategically to sustain quality. Scale: Cull rep counts to 25 or choose half the movements.'
  },
  {
    id: 'wk-38',
    slug: 'the-chief-amrap',
    title: 'The Chief (AMRAP - HERO Style)',
    description: 'HERO style AMRAP: 3 min work, 1 min rest. 5 rounds total. 3 Sandbag Power Cleans, 6 Push Ups, 9 Sandbag Squats per round.',
    duration: 20,
    distance: 0,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build power clean capacity',
      'Develop pushup endurance',
      'Build squat volume under load',
      'Test interval work capacity'
    ],
    equipment: ['sandbag'],
    notes: 'AMRAP 3 mins: 3 Sandbag Power Cleans, 6 Push Ups, 9 Sandbag Squats (front or back). Rest 1 minute. Repeat 5 rounds total. Scale: Reduce AMRAP interval or reps. Power cleans must meet front-rack catch position; pushups full depth.'
  },
  {
    id: 'wk-39',
    slug: 'lumberjack-20',
    title: 'Lumberjack 20',
    description: 'Lumberjack-style chipper: Alternate 20-rep sandbag/bodyweight stations with 400m runs. Include deadlifts, swings, overhead squats, burpees, and pullups.',
    duration: 45,
    distance: 4.0,
    load: 15,
    difficulty: 'advanced',
    terrain: ['road'],
    objectives: [
      'Build chipper capacity',
      'Develop sandbag movement proficiency',
      'Practice running under load',
      'Build mixed modality endurance'
    ],
    equipment: ['sandbag'],
    notes: 'Complete the full Lumberjack-style chipper for time. Alternate 20-rep sandbag/bodyweight stations with 400m runs. Include deadlifts, swings, overhead squats, burpees, and pullups. Move steadily while preserving safe technique on loaded lifts. Scale: Cut reps in half; reduce run distance.'
  }
];