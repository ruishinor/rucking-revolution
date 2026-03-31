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
  terrain: ('road' | 'trail' | 'mixed' | 'hills' | 'mountain' | 'snow' | 'rocky' | 'mud')[];
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
    slug: 'camino-de-santiago-prep',
    title: 'Camino de Santiago Preparation Ruck',
    date: '2024-03-05',
    location: 'Coastal Trail Network',
    duration: 180,
    distance: 25.0,
    load: 8,
    weather: 'Mild, 18°C, partly cloudy, light breeze',
    terrain: ['trail', 'mixed', 'hills'],
    observations: [
      'Light pack weight suited well for long-distance pilgrimage-style rucking',
      'Feet showed hot spots after 15 km on mixed surfaces - sock changes essential',
      'Pacing was steadier than expected with lighter load over longer distance',
      'Waymarking navigation practice useful for unfamiliar trail networks',
      'Break scheduling at 10 km intervals maintained energy levels throughout'
    ],
    insights: [
      'Camino-style rucking prioritises distance over load - keep pack under 10% body weight',
      'Sock rotation every 10 km prevents most blister formation on mixed terrain',
      'Daily stages of 20-25 km are sustainable with proper pacing and foot care',
      'Walking pole technique significantly reduces knee strain on descents',
      'Mental rhythm of pilgrimage walking differs from tactical rucking - more meditative'
    ],
    questions: [
      'What is the optimal sock change frequency for multi-day pilgrimage rucking?',
      'How should training pace differ from on-trail pace for Camino preparation?',
      'What lightweight foot care kit is essential for 4-6 week pilgrimages?',
      'How does load reduction affect daily distance capacity over sustained periods?',
      'What mental strategies help maintain motivation across weeks of daily walking?'
    ],
    heroImage: {
      src: '/images/fieldnotes/camino-prep.jpg',
      alt: 'Person rucking on coastal trail with lightweight pack and walking poles, simulating Camino de Santiago conditions'
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
    slug: 'nijmegen-marches-prep',
    title: 'Nijmegen Marches Preparation Training',
    date: '2024-04-12',
    location: 'Urban and Rural Circuit',
    duration: 240,
    distance: 40.0,
    load: 10,
    weather: 'Overcast, 14°C, light drizzle',
    terrain: ['road', 'mixed'],
    observations: [
      'Sustained pace of 5-6 km/h maintained through first 30 km with light load',
      'Foot deterioration began around km 25 - hot spots on both heels',
      'Hydration strategy needed adjustment - plain water insufficient after 3 hours',
      'Urban road surfaces harder on joints than expected over extended distance',
      'Mental endurance became the primary challenge after hour 4'
    ],
    insights: [
      'Nijmegen-style distance marching requires different training than tactical rucking',
      'Light loads (8-10 kg) allow much higher daily distances but demand foot resilience',
      'Pre-taping known blister zones before starting is more effective than reactive care',
      'Salt and electrolyte tablets essential for distances beyond 25 km',
      'Walking in formation with others naturally regulates pace and boosts morale'
    ],
    questions: [
      'What is the optimal training progression for 40 km daily marches over 4 days?',
      'How should boot selection differ for road-heavy distance marching vs trail rucking?',
      'What insole and lacing systems best prevent fatigue on hard surfaces?',
      'How does the Nijmegen categorisation (military vs civilian) affect preparation strategy?',
      'What recovery protocol between daily marches maximises multi-day sustainability?'
    ],
    heroImage: {
      src: '/images/fieldnotes/nijmegen-prep.jpg',
      alt: 'Person rucking on paved road with military-style pack, simulating Nijmegen Four Days Marches conditions'
    }
  },
  {
    id: 'fn-5',
    slug: 'multi-day-distance-march',
    title: 'Multi-Day Distance March Recovery Study',
    date: '2024-05-03',
    location: 'Mixed Urban-Rural Circuit',
    duration: 300,
    distance: 42.0,
    load: 10,
    weather: 'Warm, 22°C, sunny with cloud cover',
    terrain: ['road', 'trail', 'mixed'],
    observations: [
      'Day 1 distance of 42 km completed in 8 hours with two rest stops',
      'Day 2 recovery showed reduced stiffness after proper post-march protocol',
      'Foot care between days was the single biggest performance determinant',
      'Hydration strategy using electrolyte mix performed better than water alone',
      'Pace regulation at start prevented early fatigue in later stages'
    ],
    insights: [
      'Multi-day distance marches require inter-day recovery protocols, not just in-march care',
      'Compression socks overnight significantly improve next-day readiness',
      'Caloric intake must increase proportionally with daily distance above 30 km',
      'Mental preparation for multi-day events is as important as physical conditioning',
      'Group pacing strategies prevent faster walkers from exhausting slower participants'
    ],
    questions: [
      'What is the optimal sleep duration for recovery between long march days?',
      'How should nutrition timing differ on rest days vs march days?',
      'What compression garment strategy best aids multi-day recovery?',
      'How does cumulative fatigue affect injury risk over 4+ day events?',
      'What team-based pacing strategies maintain group cohesion over distance?'
    ],
    heroImage: {
      src: '/images/fieldnotes/multi-day-distance.jpg',
      alt: 'Group of marchers on mixed terrain completing a multi-day distance march with varied pack loads'
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