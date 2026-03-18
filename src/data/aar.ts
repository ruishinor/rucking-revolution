export interface AAR {
  id: string;
  title: string;
  date: string; // ISO date
  author: string;
  duration: number; // in minutes
  distance: number; // in kilometers
  load: number; // in kilograms
  participants: number;
  conditions: string;
  planned: string[];   // what was planned / objectives
  actual: string[];    // what actually happened
  whatWentWell: string[]; // what specifically went well
  improvements: string[]; // what could be improved
  lessonsLearned: string[];
  heroImage: {
    src: string;
    alt: string;
  };
  location: string;   // location of the event
  approved: boolean;  // moderation state
}

export const aarEntries: AAR[] = [
  {
    id: 'aar-1',
    title: 'Summit Preparation Trek - After Action Report',
    date: '2024-01-20',
    author: 'Red Rucker',
    duration: 180,
    distance: 18.5,
    load: 22,
    participants: 8,
    conditions: 'Light snow, -5°C, 70% visibility on ridges',
    planned: [
      'Practice navigation in low-visibility conditions',
      'Evaluate equipment performance in cold weather',
      'Develop team communication approaches',
      'Build endurance with moderate load over distance'
    ],
    actual: [
      'Team maintained 95% navigation accuracy despite poor visibility',
      'Equipment functioned properly in cold conditions',
      'Communication remained clear throughout',
      'All team members completed the route within time standards'
    ],
    whatWentWell: [
      'Team maintained 95% navigation accuracy despite poor visibility',
      'Equipment functioned properly in cold conditions',
      'Communication remained clear throughout',
      'All team members completed the route within time standards'
    ],
    improvements: [
      'Foot care during extended exposure to wet conditions',
      'Transition times between navigation checkpoints',
      'Water consumption planning in cold weather',
      'Individual pacing strategies on steep inclines'
    ],
    lessonsLearned: [
      'Visibility drops significantly affect individual pace more than team speed',
      'Equipment checks must occur more frequently in precipitation',
      'Mental resilience becomes the limiting factor after 2 hours in harsh conditions',
      'Simple, repeated communication approaches work best under stress'
    ],
    heroImage: {
      src: '/images/aar/summit-preparedness-hero.jpg',
      alt: 'Team of 8 ruckers in snowy mountain terrain, checking navigation equipment and maintaining formation'
    },
    location: '',
    approved: true
  },
  {
    id: 'aar-2',
    title: 'Urban Mobility Exercise - After Action Report',
    date: '2024-02-10',
    author: 'Red Rucker',
    duration: 90,
    distance: 8.2,
    load: 15,
    participants: 12,
    conditions: 'Light rain, 10°C, urban environment with varying surfaces',
    planned: [
      'Test load-bearing capacity during urban mobility tasks',
      'Practice equipment transitions under time pressure',
      'Develop assistance approaches for mobility challenges',
      'Evaluate communication in busy urban environments'
    ],
    actual: [
      'Team adapted quickly to changing surface types (pavement to gravel to stairs)',
      'Equipment transfers completed within 90-second standard',
      'Assistance approaches showed improvement from previous exercises',
      'Clear communication and signaling effective in busy environments'
    ],
    whatWentWell: [
      'Team adapted quickly to changing surface types (pavement to gravel to stairs)',
      'Equipment transfers completed within 90-second standard',
      'Assistance approaches showed improvement from previous exercises',
      'Clear communication and signaling effective in busy environments'
    ],
    improvements: [
      'Navigation accuracy in complex urban environments',
      'Individual load distribution during obstacle negotiation',
      'Communication clarity during simultaneous activities',
      'Post-exercise equipment maintenance and accountability'
    ],
    lessonsLearned: [
      'Urban environments present unique challenges not covered in standard terrain training',
      'Load distribution affects obstacle negotiation more than straight-line movement',
      'Redundant communication systems essential in built-up areas',
      'After-action gear maintenance prevents cumulative equipment failure'
    ],
    heroImage: {
      src: '/images/aar/urban-capability-hero.jpg',
      alt: 'Team of 12 ruckers navigating urban obstacle course with equipment transfers and practicing assistance approaches'
    },
    location: '',
    approved: true
  },
  {
    id: 'aar-3',
    title: 'Endurance Validation Trek - After Action Report',
    date: '2024-03-05',
    author: 'Red Rucker',
    duration: 240,
    distance: 30.0,
    load: 18,
    participants: 15,
    conditions: 'Overcast, 8°C, mixed terrain with significant elevation change',
    planned: [
      'Validate individual load carriage capacity over extended distance',
      'Assess nutritional strategies for long-duration rucking',
      'Evaluate foot care protocols during prolonged exposure',
      'Build mental resilience through sustained effort'
    ],
    actual: [
      'Nutritional plan maintained energy levels throughout',
      'Foot care protocol prevented hot spots and blisters',
      'Team cohesion remained strong despite individual pace variations',
      'All participants completed within established time standards'
    ],
    whatWentWell: [
      'Nutritional plan maintained energy levels throughout',
      'Foot care protocol prevented hot spots and blisters',
      'Team cohesion remained strong despite individual pace variations',
      'All participants completed within established time standards'
    ],
    improvements: [
      'Pacing strategies for significant elevation changes',
      'Individual water consumption monitoring',
      'Equipment adjustment frequency during long duration',
      'Mental checkpoint development for motivation'
    ],
    lessonsLearned: [
      'Nutritional timing is as important as content for sustained performance',
      'Foot issues develop gradually and require proactive prevention',
      'Team pacing strategies must account for individual strengths',
      'Mental breaks are as important as physical rest during long efforts'
    ],
    heroImage: {
      src: '/images/aar/endurance-validation-hero.jpg',
      alt: 'Group of 15 ruckers on mixed terrain trail, checking feet and adjusting equipment during rest break'
    },
    location: '',
    approved: true
  },
  {
    id: 'aar-4',
    title: 'Leadership Development Trek - After Action Report',
    date: '2024-03-20',
    author: 'Red Rucker',
    duration: 120,
    distance: 10.0,
    load: 12,
    participants: 6,
    conditions: 'Clear skies, 15°C, rolling hills terrain',
    planned: [
      'Practice leadership rotation under fatigue',
      'Develop reflective discussion skills in real-time',
      'Build trust through shared challenging experience',
      'Apply leadership principles in practical setting'
    ],
    actual: [
      'Leadership rotation occurred smoothly with clear handoffs',
      'Real-time reflective practice improved observation skills',
      'Team reported increased trust and cohesion post-activity',
      'Leadership principles applied naturally to situation'
    ],
    whatWentWell: [
      'Leadership rotation occurred smoothly with clear handoffs',
      'Real-time reflective practice improved observation skills',
      'Team reported increased trust and cohesion post-activity',
      'Leadership principles applied naturally to situation'
    ],
    improvements: [
      'Time allocation for leadership feedback sessions',
      'Individual preparation for leadership turns',
      'Documentation of leadership observations',
      'Transition time between leadership periods'
    ],
    lessonsLearned: [
      'Leadership effectiveness decreases measurably after 90 minutes of sustained effort',
      'Preparation for leadership role significantly impacts performance',
      'Simple, structured feedback is more effective than open-ended discussion',
      'Physical and mental fatigue affect leadership abilities differently'
    ],
    heroImage: {
      src: '/images/aar/leadership-dev-hero.jpg',
      alt: 'Small group of 6 ruckers in discussion formation on hilltop, practicing leadership rotation and feedback'
    },
    location: '',
    approved: true
  },
  {
    id: 'aar-5',
    title: 'Cold Weather Immersion Trek - After Action Report',
    date: '2024-01-15',
    author: 'Red Rucker',
    duration: 60,
    distance: 4.0,
    load: 10,
    participants: 10,
    conditions: 'Freezing rain, -2°C, 100% visibility, wet conditions',
    planned: [
      'Test cold-weather gear performance in wet freezing conditions',
      'Evaluate hypothermia prevention strategies',
      'Practice rapid rewarming procedures',
      'Assess mental resilience in uncomfortable conditions'
    ],
    actual: [
      'Gear performed within expected parameters for conditions',
      'No cases of hypothermia or cold injury reported',
      'Rewarming procedures effective when implemented promptly',
      'Team maintained positive attitude despite discomfort'
    ],
    whatWentWell: [
      'Gear performed within expected parameters for conditions',
      'No cases of hypothermia or cold injury reported',
      'Rewarming procedures effective when implemented promptly',
      'Team maintained positive attitude despite discomfort'
    ],
    improvements: [
      'Gear inspection frequency during wet conditions',
      'Early recognition of cold stress symptoms',
      'Individual responsibility for personal gear maintenance',
      'Communication of discomfort levels within team'
    ],
    lessonsLearned: [
      'Wet cold presents greater danger than dry cold at same temperature',
      'Early intervention prevents most cold-weather issues',
      'Individual accountability critical for personal safety in teams',
      'Mental resilience enables physical endurance in adverse conditions'
    ],
    heroImage: {
      src: '/images/aar/cold-weather-hero.jpg',
      alt: 'Team of 10 ruckers in freezing rain, checking gear and maintaining formation despite harsh conditions'
    },
    location: '',
    approved: true
  },
  {
    id: 'aar-6',
    title: 'Desert Conditioning Trek - After Action Report',
    date: '2024-04-05',
    author: 'Red Rucker',
    duration: 150,
    distance: 16.0,
    load: 20,
    participants: 8,
    conditions: 'Hot, 35°C, low humidity, sandy terrain with limited shade',
    planned: [
      'Test hydration strategies in hot, dry conditions',
      'Evaluate foot care in sandy environments',
      'Practice navigation with limited visual references',
      'Assess heat illness prevention procedures'
    ],
    actual: [
      'Hydration plan prevented heat illness despite challenging conditions',
      'Foot care protocol effective in sandy terrain',
      'Navigation accuracy maintained despite featureless terrain',
      'Team monitored each other for heat stress symptoms'
    ],
    whatWentWell: [
      'Hydration plan prevented heat illness despite challenging conditions',
      'Foot care protocol effective in sandy terrain',
      'Navigation accuracy maintained despite featureless terrain',
      'Team monitored each other for heat stress symptoms'
    ],
    improvements: [
      'Pacing strategies for extreme heat conditions',
      'Equipment protection from sand intrusion',
      'Shade utilization during rest periods',
      'Electrolyte replacement timing and amounts'
    ],
    lessonsLearned: [
      'Hydration must begin before thirst develops in hot conditions',
      'Sand intrusion causes equipment failure and personal discomfort',
      'Strategic rest in available shade significantly improves performance',
      'Electrolyte replacement requires proactive, not reactive, approach'
    ],
    heroImage: {
      src: '/images/aar/desert-sim-hero.jpg',
      alt: 'Team of 8 ruckers in sandy desert terrain, checking hydration and foot care during rest stop'
    },
    location: '',
    approved: true
  },
  {
    id: 'aar-7',
    title: 'Night Navigation Trek - After Action Report',
    date: '2024-02-25',
    author: 'Red Rucker',
    duration: 100,
    distance: 7.5,
    load: 14,
    participants: 7,
    conditions: 'Moonless night, overcast, 5°C, light wind',
    planned: [
      'Develop proficiency in night navigation techniques',
      'Practice light discipline and team coordination',
      'Build confidence operating in darkness',
      'Evaluate equipment performance in low-light conditions'
    ],
    actual: [
      'Team maintained navigation within acceptable error margins',
      'Light discipline maintained throughout exercise',
      'All team members reported increased confidence post-exercise',
      'Equipment functioned properly in low-light conditions'
    ],
    whatWentWell: [
      'Team maintained navigation within acceptable error margins',
      'Light discipline maintained throughout exercise',
      'All team members reported increased confidence post-exercise',
      'Equipment functioned properly in low-light conditions'
    ],
    improvements: [
      'Individual pacing consistency during night movement',
      'Communication efficiency in darkness',
      'Equipment check frequency during low-light operations',
      'Transition techniques between navigation methods'
    ],
    lessonsLearned: [
      'Night navigation relies more on team cohesion than individual skill',
      'Simple, repeated procedures work best in low-light conditions',
      'Confidence builds exponentially with successful night navigation experience',
      'Equipment familiarity reduces cognitive load during night operations'
    ],
    heroImage: {
      src: '/images/aar/night-nav-hero.jpg',
      alt: 'Team of 7 ruckers in dark forest terrain, using red lights and maintaining formation during night navigation exercise'
    },
    location: '',
    approved: true
  },
  {
    id: 'aar-8',
    title: 'High Altitude Preparation Trek - After Action Report',
    date: '2024-03-15',
    author: 'Red Rucker',
    duration: 180,
    distance: 12.0,
    load: 16,
    participants: 5,
    conditions: 'High elevation (2500m), clear, -5°C, strong winds',
    planned: [
      'Assess individual response to altitude stress with load',
      'Test acclimatization strategies for mountain trekking',
      'Evaluate breathing techniques under load at altitude',
      'Build foundation for higher altitude operations'
    ],
    actual: [
      'Acclimatization protocol prevented altitude sickness',
      'Breathing techniques effective in managing exertion symptoms',
      'Team monitored each other for altitude-related issues',
      'All participants completed within predicted time ranges'
    ],
    whatWentWell: [
      'Acclimatization protocol prevented altitude sickness',
      'Breathing techniques effective in managing exertion symptoms',
      'Team monitored each other for altitude-related issues',
      'All participants completed within predicted time ranges'
    ],
    improvements: [
      'Pacing strategies for altitude combined with load',
      'Hydration monitoring in cold, dry altitude conditions',
      'Individual symptom recognition and reporting',
      'Equipment performance evaluation in extreme cold'
    ],
    lessonsLearned: [
      'Altitude affects load carriage capacity more than pure endurance',
      'Hydration needs change significantly in cold, dry altitude conditions',
      'Early symptom recognition prevents serious altitude issues',
      'Individual variability requires personalized altitude approaches'
    ],
    heroImage: {
      src: '/images/aar/high-altitude-hero.jpg',
      alt: 'Small team of 5 ruckers at high elevation with mountain backdrop, checking equipment and monitoring breathing'
    },
    location: '',
    approved: true
  },
  {
    id: 'aar-9',
    title: 'Team Load Distribution Trek - After Action Report',
    date: '2024-04-20',
    author: 'Red Rucker',
    duration: 90,
    distance: 6.0,
    load: 25,
    participants: 10,
    conditions: 'Mixed terrain, 12°C, light precipitation',
    planned: [
      'Practice dynamic load sharing during movement',
      'Develop equipment transfer procedures under fatigue',
      'Assess team communication during complex tasks',
      'Evaluate fairness and efficiency of load distribution'
    ],
    actual: [
      'Load sharing occurred naturally when needed without prompting',
      'Equipment transfers completed efficiently during movement',
      'Team communication remained clear despite physical exertion',
      'Load distribution perceived as fair by all participants'
    ],
    whatWentWell: [
      'Load sharing occurred naturally when needed without prompting',
      'Equipment transfers completed efficiently during movement',
      'Team communication remained clear despite physical exertion',
      'Load distribution perceived as fair by all participants'
    ],
    improvements: [
      'Proactive load sharing before individual failure point',
      'Equipment transfer techniques for specific gear types',
      'Communication clarity during simultaneous load sharing',
      'Documentation of load distribution decisions'
    ],
    lessonsLearned: [
      'Proactive load sharing prevents performance degradation',
      'Equipment-specific techniques improve transfer efficiency',
      'Clear communication essential during complex load sharing',
      'Documentation improves fairness and enables process improvement'
    ],
    heroImage: {
      src: '/images/aar/team-load-dist-hero.jpg',
      alt: 'Team of 10 ruckers demonstrating equipment transfer and load sharing during movement on mixed terrain'
    },
    location: '',
    approved: true
  },
  {
    id: 'aar-10',
    title: 'Civilian Endurance Challenge - After Action Report',
    date: '2024-05-01',
    author: 'Red Rucker',
    duration: 200,
    distance: 25.0,
    load: 12,
    participants: 20,
    conditions: 'Partly cloudy, 18°C, mixed trail and road surfaces',
    planned: [
      'Provide challenging but achievable endurance event for civilians',
      'Test event logistics and support systems',
      'Build community through shared challenging experience',
      'Evaluate participant preparation and readiness'
    ],
    actual: [
      'Event logistics supported all participants successfully',
      'Aid stations provided adequate nutrition and hydration',
      'Participant feedback indicated strong sense of community',
      'Preparation guidelines helped participants arrive ready'
    ],
    whatWentWell: [
      'Event logistics supported all participants successfully',
      'Aid stations provided adequate nutrition and hydration',
      'Participant feedback indicated strong sense of community',
      'Preparation guidelines helped participants arrive ready'
    ],
    improvements: [
      'Pre-event communication regarding course specifics',
      'Aid station placement relative to challenging sections',
      'Post-event recovery resources and information',
      'Volunteer training for specific support roles'
    ],
    lessonsLearned: [
      'Clear pre-event communication reduces day-of confusion',
      'Aid station placement should anticipate participant needs',
      'Post-event support significantly affects overall experience',
      'Volunteer effectiveness depends on role-specific training'
    ],
    heroImage: {
      src: '/images/aar/civilian-endurance-hero.jpg',
      alt: 'Large group of 20 civilian ruckers on trail during endurance event, supporting each other and checking equipment'
    },
    location: '',
    approved: true
  }
];