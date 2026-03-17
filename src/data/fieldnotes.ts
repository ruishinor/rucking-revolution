export interface FieldNote {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO date
  location: string;
  duration: number; // in minutes
  distance: number; // in kilometers
  load: number; // in kilograms
  weather: string;
  terrain: ('road' | 'trail' | 'mixed' | 'hills' | 'mountain' | 'sand' | 'snow' | 'rocky' | 'mud')[];
  observations: string[];
  insights: string[];
  questions: string[];
  heroImage: {
    src: string;
    alt: string;
  };
}

export const fieldNotes: FieldNote[] = [
  {
    id: 'fn-1',
    slug: 'first-snow-ruck',
    title: 'First Snow Ruck of the Season',
    date: '2024-01-10',
    location: 'Pine Forest Trail Network',
    duration: 65,
    distance: 8.0,
    load: 12,
    weather: 'Light snow, -3°C, 80% visibility',
    terrain: ['trail', 'hills', 'snow'],
    observations: [
      'Snow depth varied from 2-6 inches depending on tree cover',
      'Trail became significantly more difficult to follow after first mile',
      'Foot temperature dropped noticeably after 40 minutes despite wool socks',
      'Breathing felt more difficult in cold air, especially on inclines',
      'Wildlife tracks were abundant - saw rabbit, deer, and possible fox prints'
    ],
    insights: [
      'Gaiters are essential in snowy conditions - snow buildup in boots was problematic',
      'Pace decreases exponentially with snow depth - not a linear relationship',
      'Hand warmth becomes a limiting factor before foot warmth in extreme cold',
      'Navigation requires more frequent checkpoint verification in low visibility',
      'Mental fatigue sets in faster when constantly watching foot placement'
    ],
    questions: [
      'How does snow density (wet vs powder) affect energy expenditure?',
      'What is the optimal sock system for prolonged cold exposure?',
      'At what temperature does exposed skin become a critical concern during movement?',
      'How should navigation techniques change in snowy vs clear conditions?',
      'What are the early warning signs of frostnip during exercise?'
    ],
    heroImage: {
      src: '/images/fieldnotes/first-snow-ruck.jpg',
      alt: 'Person rucking on snow-covered trail with visible breath and snowshoes on pack for deeper sections'
    }
  },
  {
    id: 'fn-2',
    slug: 'desert-heat-adaptation',
    title: 'Desert Heat Adaptation Observations',
    date: '2024-03-05',
    location: 'Sonoran Desert Training Area',
    duration: 120,
    distance: 15.0,
    load: 18,
    weather: 'Clear, 38°C, 10% humidity, intense sun',
    terrain: ['sand', 'rocky'],
    observations: [
      'Sweat rate was extremely high but evaporated instantly, creating false sense of dryness',
      'Foot temperature in boots reached uncomfortable levels after 30 minutes',
      'Water consumption needed to be proactive - drinking only when thirsty was insufficient',
      'Salt accumulation on skin and clothing was visible after 60 minutes',
      'Mental clarity began to decline after 90 minutes despite adequate hydration'
    ],
    insights: [
      'Electrolyte replacement needs to begin before activity in hot conditions',
      'Boot ventilation is critical in hot environments - consider gaiters for sand, not just snow',
      'Mental fatigue from heat appears before physical exhaustion',
      'Shade utilization during rest stops provides disproportionate recovery benefit',
      'Heat management requires constant attention, not just periodic checks'
    ],
    questions: [
      'What is the optimal electrolyte replacement strategy for desert conditions?',
      'How does clothing color and material affect heat gain during movement?',
      'What are the cognitive effects of mild dehydration during endurance activity?',
      'How should pacing strategies change in extreme heat vs moderate conditions?',
      'What foot care protocols prevent blisters and hot spots in sandy, hot conditions?'
    ],
    heroImage: {
      src: '/images/fieldnotes/desert-heat-adaptation.jpg',
      alt: 'Person rucking in desert environment with sun hat, light clothing, and visible sweat salt on skin'
    }
  },
  {
    id: 'fn-3',
    slug: 'urban-night-navigation',
    title: 'Urban Night Navigation Challenges',
    date: '2024-02-18',
    location: 'Industrial District and City Streets',
    duration: 90,
    distance: 7.5,
    load: 14,
    weather: 'Overcast, 8°C, light wind, artificial lighting only',
    terrain: ['mixed'],
    observations: [
      'Depth perception was significantly reduced under artificial lighting',
      'Sound carried farther than expected, creating false proximity illusions',
      'Transitioning between light and dark areas caused temporary vision impairment',
      'Radio communication was clearer than expected despite ambient noise',
      'Foot placement required conscious attention on uneven surfaces'
    ],
    insights: [
      'Red/blue light preserves night vision better than white light for map reading',
      'Urban navigation relies more on auditory cues than expected',
      'Light discipline is as important in urban as rural environments',
      'Team spacing needs adjustment in urban environments due to obstacle frequency',
      'Confidence in navigation affects pace more than actual skill level in low light'
    ],
    questions: [
      'How long does it take for eyes to fully adapt to low-light urban conditions?',
      'What is the optimal light color and intensity for preserving night vision?',
      'How do different surface types (concrete, asphalt, gravel) affect sound propagation?',
      'What communication protocols work best in urban canyon environments?',
      'How should team movement formations change in built-up areas at night?'
    ],
    heroImage: {
      src: '/images/fieldnotes/urban-night-navigation.jpg',
      alt: 'Person rucking on city street at night with red light map case and reflective gear'
    }
  },
  {
    id: 'fn-4',
    slug: 'high-altitude-acclimatization',
    title: 'High Altitude Acclimatization Process',
    date: '2024-04-12',
    location: 'Mountainous Training Area (2400m elevation)',
    duration: 180,
    distance: 12.0,
    load: 16,
    weather: 'Partly cloudy, 2°C, moderate wind, strong sun',
    terrain: ['trail', 'hills', 'mountain'],
    observations: [
      'Breathing rate increased noticeably even at rest upon arrival',
      'First day with load felt equivalent to carrying 50% more weight at sea level',
      'Sleep quality was poor first night despite moderate exertion',
      'Headache developed mid-way through activity on second day',
      'Recovery between intervals took significantly longer than expected'
    ],
    insights: [
      'Altitude affects cognitive function before physical performance',
      'Hydration needs increase substantially at altitude due to respiratory water loss',
      'The first 24-48 hours at altitude are critical for symptom monitoring',
      'Individual variability in acclimatization requires personalized approaches',
      'Pre-acclimatization interventions (if possible) significantly reduce symptoms'
    ],
    questions: [
      'What is the optimal ascent rate for load-bearing activities at altitude?',
      'How does altitude affect muscle recovery and protein synthesis?',
      'What preventive measures are most effective for altitude sickness?',
      'How should nutrition change at altitude for sustained activity?',
      'What are the early cognitive symptoms of altitude impairment?'
    ],
    heroImage: {
      src: '/images/fieldnotes/high-altitude-acclimatization.jpg',
      alt: 'Person rucking on mountain trail with visible breath and panoramic valley view'
    }
  },
  {
    id: 'fn-5',
    slug: 'jungle-humidity-adaptation',
    title: 'Jungle Humidity and Heat Adaptation',
    date: '2024-05-03',
    location: 'Tropical Forest Training Area',
    duration: 100,
    distance: 9.0,
    load: 15,
    weather: 'Hot, 30°C, 90% humidity, light rain',
    terrain: ['trail', 'hills', 'mud'],
    observations: [
      'Sweat did not evaporate, leading to soaked clothing and rapid heat buildup',
      'Boot drainage was critical - water accumulation caused slipping and blisters',
      'Trail conditions changed rapidly with rainfall - became slick and treacherous',
      'Equipment corrosion began visible on metal surfaces after 60 minutes exposure',
      'Mental fatigue from constant discomfort set in earlier than expected'
    ],
    insights: [
      'Ventilation and quick-dry materials are essential in high humidity',
      'Foot care requires proactive measures in wet conditions - change socks frequently',
      'Equipment maintenance needs increase dramatically in wet tropical environments',
      'Navigation becomes more challenging as trails wash out or become obscured',
      'Psychological resilience is as important as physical preparation in unpleasant conditions'
    ],
    questions: [
      'What clothing materials perform best in hot, humid, wet conditions?',
      'How often should socks be changed to prevent foot breakdown in wet conditions?',
      'What equipment maintenance procedures prevent corrosion in tropical environments?',
      'How should navigation techniques adapt to rapidly changing trail conditions?',
      'What mental strategies help maintain motivation in consistently uncomfortable conditions?'
    ],
    heroImage: {
      src: '/images/fieldnotes/jungle-humidity-adaptation.jpg',
      alt: 'Person rucking on muddy tropical trail with wet clothing and water draining from boots'
    }
  },
  {
    id: 'fn-6',
    slug: 'loaded-movement-fatigue-study',
    title: 'Loaded Movement Fatigue Progression Study',
    date: '2024-01-25',
    location: 'Human Performance Laboratory',
    duration: 45,
    distance: 3.0, // treadmill
    load: 20,
    weather: 'Indoor, 20°C, controlled',
    terrain: ['road'], // treadmill
    observations: [
      'Form degradation began visibly at approximately 25 minutes of continuous movement',
      'Shift from heel strike to forefoot landing occurred as fatigue progressed',
      'Upper body tension increased in shoulders and neck as core fatigued',
      'Step variability (inconsistency in step length and timing) increased with fatigue',
      'Perceived effort increased disproportionately to actual speed decline'
    ],
    insights: [
      'Fatigue affects movement quality before it affects speed or endurance',
      'Core fatigue manifests as upper body tension rather than obvious weakness',
      'Movement variability increases as a compensatory mechanism for fatigue',
      'Perception of effort lags behind actual physiological changes',
      'Regular form checks are necessary to prevent injury during prolonged loaded movement'
    ],
    questions: [
      'At what point does form degradation increase injury risk significantly?',
      'How can proprioceptive training help maintain form under fatigue?',
      'What are the most effective cues for self-correcting form during movement?',
      'How does fatigue affect bilateral symmetry in loaded movement?',
      'What is the optimal frequency of form checks during prolonged activity?'
    ],
    heroImage: {
      src: '/images/fieldnotes/loaded-movement-fatigue-study.jpg',
      alt: 'Person on treadmill with motion capture markers, rucking with visible form degradation'
    }
  },
  {
    id: 'fn-7',
    slug: 'team-dynamics-under-load',
    title: 'Team Dynamics and Communication Under Load',
    date: '2024-02-28',
    location: 'Field Training Area',
    duration: 110,
    distance: 9.5,
    load: 16,
    weather: 'Partly cloudy, 10°C, light wind',
    terrain: ['trail', 'hills'],
    observations: [
      'Communication frequency decreased naturally as physical exertion increased',
      'Non-verbal communication (hand signals, eye contact) became more important',
      'Leadership emergence was situational based on individual strengths at different points',
      'Conflict increased during navigation disagreements despite shared goal',
      'Team cohesion appeared strongest during shared challenges rather than easy sections'
    ],
    insights: [
      'Communication protocols need to be simple and robust to withstand fatigue',
      'Non-verbal communication skills should be trained alongside verbal skills',
      'Shared challenging experiences build trust more effectively than easy success',
      'Conflict resolution mechanisms are essential for team performance under stress',
      'Individual strengths should be identified and utilized situationally in teams'
    ],
    questions: [
      'What is the optimal communication load for teams under physical stress?',
      'How should non-verbal communication be trained and maintained in teams?',
      'What conflict resolution protocols work best in high-stress, time-limited environments?',
      'How can teams identify and leverage situational leadership effectively?',
      'What shared experiences build the most transferable team cohesion?'
    ],
    heroImage: {
      src: '/images/fieldnotes/team-dynamics-under-load.jpg',
      alt: 'Team of 4 people rucking together, using hand signals and checking equipment'
    }
  },
  {
    id: 'fn-8',
    slug: 'equipment-failure-analysis',
    title: 'Equipment Failure Modes and Prevention',
    date: '2024-03-22',
    location: 'Varied Terrain Course',
    duration: 75,
    distance: 6.0,
    load: 18,
    weather: 'Mixed conditions - sun, clouds, light wind',
    terrain: ['mixed'],
    observations: [
      'Strap failure occurred due to UV degradation not visible during inspection',
      'Buckle corrosion caused unexpected opening during load shift',
      'Boot sole delamination began at flex points after repeated wet-dry cycles',
      'Hydration system leak developed at connection point, not visible until failure',
      'Weight shift in ruck caused discomfort due to poor internal organization'
    ],
    insights: [
      'Equipment inspection should include stress testing, not just visual examination',
      'UV protection significantly extends lifespan of textile components',
      'Preventive maintenance schedules should be based on use conditions, not just time',
      'Redundancy in critical systems (hydration, navigation) is essential for reliability',
      'Internal organization affects comfort as much as total weight'
    ],
    questions: [
      'What are the most effective UV protection treatments for textile equipment?',
      'How should equipment inspection procedures vary by environment and use?',
      'What redundancy levels are appropriate for different types of equipment?',
      'How does internal load distribution affect comfort and biomechanics?',
      'What are the early warning signs of impending equipment failure?'
    ],
    heroImage: {
      src: '/images/fieldnotes/equipment-failure-analysis.jpg',
      alt: 'Close-up of failed rucking equipment showing strap tear, corroded buckle, and sole separation'
    }
  }
];