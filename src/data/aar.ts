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
    title: 'Camino Preparation Trek - After Action Report',
    date: '2024-04-05',
    author: 'Red Rucker',
    duration: 240,
    distance: 30.0,
    load: 8,
    participants: 8,
    conditions: 'Mild, 16°C, mixed trail and road, sunny intervals',
    planned: [
      'Test lightweight pack strategy for long-distance pilgrimage',
      'Evaluate foot care protocols over extended road and trail distances',
      'Practice waymarking navigation with minimal map reliance',
      'Assess pacing strategies for sustainable daily stages'
    ],
    actual: [
      'Light pack proved comfortable over full distance with proper fitting',
      'Foot care protocol effective when followed proactively at rest stops',
      'Waymarking navigation successful on well-marked trail sections',
      'Steady pace of 5 km/h sustainable with regular micro-breaks'
    ],
    whatWentWell: [
      'Light pack proved comfortable over full distance with proper fitting',
      'Foot care protocol effective when followed proactively at rest stops',
      'Waymarking navigation successful on well-marked trail sections',
      'Steady pace of 5 km/h sustainable with regular micro-breaks'
    ],
    improvements: [
      'Earlier first sock change to prevent initial hot spots',
      'Better hydration planning for road sections without shade',
      'Walking pole technique refinement for descents',
      'End-of-day stretching routine standardisation'
    ],
    lessonsLearned: [
      'Pilgrimage-style rucking requires different pacing than tactical loads',
      'Proactive foot care at set intervals prevents most blister issues',
      'Light loads allow much higher daily distances when trained for it',
      'Mental preparation for repetitive daily stages is crucial for multi-week treks'
    ],
    heroImage: {
      src: '/images/aar/camino-prep-hero.jpg',
      alt: 'Team of 8 ruckers on mixed trail with lightweight packs and walking poles, practising Camino de Santiago preparation'
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
    title: 'Nijmegen Marches Preparation - After Action Report',
    date: '2024-03-15',
    author: 'Red Rucker',
    duration: 300,
    distance: 40.0,
    load: 10,
    participants: 12,
    conditions: 'Overcast, 12°C, flat terrain, paved roads and paths',
    planned: [
      'Complete full 40 km stage in Nijmegen marches format',
      'Test military categorisation weight requirements (10 kg)',
      'Evaluate foot care and blister prevention over sustained road distance',
      'Practise team formation walking and pace regulation'
    ],
    actual: [
      'Full 40 km completed by all 12 participants within time standard',
      '10 kg pack manageable but foot care became critical after 25 km',
      'Formation walking helped regulate pace and maintain group cohesion',
      'Blister prevention protocol effective for most participants'
    ],
    whatWentWell: [
      'Full 40 km completed by all 12 participants within time standard',
      '10 kg pack manageable but foot care became critical after 25 km',
      'Formation walking helped regulate pace and maintain group cohesion',
      'Blister prevention protocol effective for most participants'
    ],
    improvements: [
      'Earlier first aid station for foot checks at 15 km mark',
      'Better road-to-trail surface transition planning',
      'Improved hydration timing on flat road sections',
      'Team morale techniques for final 10 km fatigue zone'
    ],
    lessonsLearned: [
      'Road marching for 40 km requires specific boot conditioning different from trail work',
      'Proactive foot taping before starting prevents more issues than reactive treatment',
      'Team formation naturally regulates pace and provides social motivation',
      'Multi-day Nijmegen preparation must train inter-day recovery, not just daily distance'
    ],
    heroImage: {
      src: '/images/aar/nijmegen-prep-hero.jpg',
      alt: 'Team of 12 ruckers in formation on paved road, completing Nijmegen-style distance march preparation'
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
  },
  {
    id: 'aar-bastogne-2014-10',
    title: 'Bastogne 2014 - After Action Report',
    date: '2014-10-26',
    author: 'Red Rucker',
    duration: 540,
    distance: 16.0,
    load: 35,
    participants: 28,
    conditions: 'Cold, 8°C, forest terrain, significant mud, historical battlefield',
    planned: [
      'Experience GORUCK event on Battle of the Bulge location',
      'Walk the terrain of the famous siege',
      'Practice navigation in forest and mud',
      'Connect with European GRT community'
    ],
    actual: [
      'Completed event on Bastogne battlefield terrain',
      'Forest and mud conditions added challenge',
      'Historical context of the siege created emotional weight',
      'Connected with GRTs from Belgium and neighboring countries',
      'Battled through conditions that mirrored historical hardships'
    ],
    whatWentWell: [
      'Forest navigation under canopy',
      'Mud condition management',
      'Team cohesion in adverse weather',
      'Historical connection to the Bulge'
    ],
    improvements: [
      'Better wet weather foot care',
      'Forest terrain specific training',
      'Mud drainage strategies',
      'Cold weather layer management'
    ],
    lessonsLearned: [
      'Forest terrain requires different navigation than open ground',
      'Mud and cold compound to create real hardship',
      'Walking where heroes walked creates profound connection',
      'European events create deep bonds with local GRTs'
    ],
    heroImage: {
      src: '/images/aar/bastogne-2014-hero.jpg',
      alt: 'Team of ruckers in forest near Bastogne, autumn colors and mud visible'
    },
    location: 'Bastogne, Belgium',
    approved: true
  },
  {
    id: 'aar-bragg-heavy-2015-05',
    title: 'Fort Bragg Heavy - After Action Report',
    date: '2015-05-17',
    author: 'Red Rucker',
    duration: 660,
    distance: 22.0,
    load: 45,
    participants: 30,
    conditions: 'Clear, 24°C, military terrain with tactical obstacles',
    planned: [
      'Experience Heavy event at active military installation',
      'Practice tactical movement with heavy loads',
      'Evaluate team performance under military-style pressure',
      'Connect with military community through shared challenge'
    ],
    actual: [
      'Completed Heavy event on Fort Bragg training grounds',
      'Tactical obstacles tested team coordination',
      'Military environment added authenticity to event',
      'Connected with GRTs from various military backgrounds'
    ],
    whatWentWell: [
      'Tactical obstacle navigation was smooth',
      'Team coordination under military-style pressure',
      'Load carriage over rough terrain',
      'Authentic military environment experience'
    ],
    improvements: [
      'Tactical movement speed optimization',
      'Equipment securing for rough terrain',
      'Communication protocols in noisy environments',
      'Team tactical positioning'
    ],
    lessonsLearned: [
      'Military terrain requires different movement strategies',
      'Team coordination is critical in tactical scenarios',
      'Heavy loads on rough terrain demand proper form',
      'Military community brings unique brotherhood'
    ],
    heroImage: {
      src: '/images/aar/bragg-heavy-hero.jpg',
      alt: 'Team of 30 ruckers on Fort Bragg training grounds, tactical obstacle course in background'
    },
    location: 'Fort Bragg, North Carolina, USA',
    approved: true
  },
  {
    id: 'aar-chicago-hive-2016-08',
    title: 'Chicago Hive Module - After Action Report',
    date: '2016-08-15',
    author: 'Red Rucker',
    duration: 360,
    distance: 8.0,
    load: 25,
    participants: 20,
    conditions: 'Clear, 26°C, urban environment, austere medicine training scenarios',
    planned: [
      'Learn austere medicine and grid-down medical scenarios',
      'Practice trauma response in urban setting',
      'Evaluate equipment for emergency medical situations',
      'Connect with informal SWAT and Spec Ops networks'
    ],
    actual: [
      'Completed austere medicine training module',
      'Grid-down scenarios tested medical knowledge',
      'Experienced stun-gun training multiple times',
      'Connected with informal SWAT and US Spec Ops personnel',
      'Learned trauma response in non-permissive environments'
    ],
    whatWentWell: [
      'Austere medicine skill acquisition',
      'Grid-down scenario completion',
      'Equipment selection for medical emergencies',
      'Network connections with military/LEO personnel'
    ],
    improvements: [
      'More realistic scenario progression',
      'Medical equipment redundancy planning',
      'Team medical role assignment',
      'After-event decompression for intense scenarios'
    ],
    lessonsLearned: [
      'Austere medicine requires different thinking than standard first aid',
      'Grid-down scenarios reveal equipment gaps',
      'Training with real professionals exposes knowledge gaps',
      'Emotional control under pain is learnable skill'
    ],
    heroImage: {
      src: '/images/aar/chicago-hive-hero.jpg',
      alt: 'Group in urban training environment during Chicago Hive Module, medical equipment visible'
    },
    location: 'Chicago, Illinois, USA',
    approved: true
  },
  {
    id: 'aar-dublin-heavy-2015-06',
    title: 'Dublin Heavy - After Action Report',
    date: '2015-06-21',
    author: 'Red Rucker',
    duration: 720,
    distance: 20.0,
    load: 50,
    participants: 22,
    conditions: 'Cold, 10°C, rain, rural terrain with log carries and elevation changes',
    planned: [
      'Validate load carriage capacity at increased weight',
      'Practice log carry team movements',
      'Develop navigation skills in low-visibility conditions',
      'Test mental resilience through extended physical challenge'
    ],
    actual: [
      'Team performed log carry exercises in continuous rain',
      'Injury during event required team support',
      'Team requested author give up ruck - refused multiple times',
      'Finally heard "Check your ego" - surrendered ruck while injured',
      'Realized team could function without author carrying everything',
      'Got ruck back - "Carry your own" principle resumed'
    ],
    whatWentWell: [
      'Team cohesion remained strong despite individual weakness',
      'Log carry techniques executed effectively',
      'Navigation accuracy maintained in poor conditions',
      'Author finished as "weak link" but completed the event',
      'Hardest-won wisdom: letting go of the ruck is not failure'
    ],
    improvements: [
      'Injury prevention during log carries',
      'Earlier ego surrender - pride cost physical pain',
      'Better communication when injured and struggling',
      'Accepting help earlier before reaching crisis point',
      'Trust in team capability when unable to carry'
    ],
    lessonsLearned: [
      'Check your ego - it is the enemy of both growth and rest',
      'The team can function without you carrying everything',
      'Letting go of the ruck is not personal failure',
      'Being the weak link does not mean being useless',
      'Pride in carrying yourself can become the thing that breaks you'
    ],
    heroImage: {
      src: '/images/aar/dublin-heavy-hero.jpg',
      alt: 'Team of 22 ruckers performing log carry in rain, Dublin countryside in background'
    },
    location: 'Dublin, Ireland',
    approved: true
  },
  {
    id: 'aar-fan-dance-2017-10',
    title: 'Fan Dance - After Action Report',
    date: '2017-10-21',
    author: 'Red Rucker',
    duration: 480,
    distance: 24.0,
    load: 35,
    participants: 45,
    conditions: 'Clear, 12°C, mountain terrain, steep elevation changes, SAS-style selection course',
    planned: [
      'Test SAS-style selection course endurance',
      'Practice mountain terrain navigation',
      'Evaluate mental resilience under selection pressure',
      'Experience Special Forces selection environment'
    ],
    actual: [
      'Attempted Fan Dance selection course',
      'Mountain terrain with steep elevation tested all participants',
      'Selection pressure created intense environment',
      'Event pushed mental and physical limits',
      'Connected with GRTs from military backgrounds'
    ],
    whatWentWell: [
      'Navigation across mountain terrain',
      'Team coordination under selection pressure',
      'Load management over steep terrain',
      'Mental toughness maintained throughout'
    ],
    improvements: [
      'Mountain terrain specific training',
      'Steep elevation pacing strategies',
      'Selection pressure mental preparation',
      'Altitude adjustment protocols'
    ],
    lessonsLearned: [
      'Selection courses test more than physical capability',
      'Mental resilience is often the limiting factor',
      'Mountain terrain requires different approach than flat ground',
      'Team brotherhood extends beyond GORUCK to military communities'
    ],
    heroImage: {
      src: '/images/aar/fan-dance-hero.jpg',
      alt: 'Group of ruckers on mountain terrain during Fan Dance selection course, steep trail visible'
    },
    location: 'Brecon Beacons, Wales, UK',
    approved: true
  },
  {
    id: 'aar-jax-heavy-2014-10',
    title: 'Jacksonville Heavy - After Action Report',
    date: '2014-10-12',
    author: 'Red Rucker',
    duration: 780,
    distance: 24.0,
    load: 45,
    participants: 18,
    conditions: 'Humid, 28°C, urban terrain with water obstacles, night operations',
    planned: [
      'Test physical limits with heavy load over extended distance',
      'Practice team coordination under fatigue',
      'Evaluate equipment functionality in harsh conditions',
      'Build mental resilience through sustained effort',
      'Challenge the "carry your own" principle in controlled environment'
    ],
    actual: [
      'Team completed 24 miles with 45lb loads in humid conditions',
      'Chafing became critical issue at hour 14+, managed with sandbag distraction technique',
      'Eventually agreed to let team carry ruck at lowest point - silent tears during brainstorming',
      'Realized "pain is just pain" mantra for forward motion',
      'Made decision to skip Challenge to avoid permanent injury'
    ],
    whatWentWell: [
      'Team maintained cohesion despite individual breakdowns',
      'Equipment held up under extended stress',
      'Communication remained clear through night operations',
      'Physical training prepared team for distance demands',
      'Made smart decision to step back when injury risk became clear'
    ],
    improvements: [
      'Pre-event foot care and chafing prevention protocols',
      'Load distribution optimization earlier in event',
      'Better hydration planning for humid conditions',
      'Earlier intervention when pain becomes injury risk',
      'Mental state check-ins during extended operations'
    ],
    lessonsLearned: [
      'Pain is just pain - can be used as tool for forward motion',
      'Letting team carry you feels like personal failure but is tactical necessity',
      'There is a time for everything - sometimes step back to fight another day',
      'True character revealed under extreme fatigue and stress',
      'The ruck is not just weight - it is responsibility and identity'
    ],
    heroImage: {
      src: '/images/aar/jax-heavy-hero.jpg',
      alt: 'Team of 18 ruckers in Jacksonville urban terrain, completing water obstacle under night conditions'
    },
    location: 'Jacksonville, Florida, USA',
    approved: true
  },
  {
    id: 'aar-normandie-2014-06',
    title: 'Normandie 2014 - After Action Report',
    date: '2014-06-08',
    author: 'Red Rucker',
    duration: 600,
    distance: 18.0,
    load: 35,
    participants: 30,
    conditions: 'Clear, 18°C, historical battlefield terrain, significant elevation',
    planned: [
      'Experience GORUCK event on historical European battlefield',
      'Walk the terrain where WWII operations took place',
      'Practice navigation across European countryside',
      'Connect with GRTs from multiple nations'
    ],
    actual: [
      'Completed event on Normandy battlefield terrain',
      'Historical context added profound weight to experience',
      'Elevation changes tested team endurance',
      'Connected with GRTs from France and broader Europe',
      'Discovered deeper meaning in historical context'
    ],
    whatWentWell: [
      'Navigation across unfamiliar terrain',
      'Team coordination across language barriers',
      'Historical site integration into event',
      'European GRT connections made'
    ],
    improvements: [
      'More pre-event historical context study',
      'French language basics for communication',
      'Elevation-specific training',
      'European terrain navigation preparation'
    ],
    lessonsLearned: [
      'Historical terrain adds layers of meaning to the experience',
      'European countryside presents unique navigation challenges',
      'International brotherhood extends across continents',
      'Walking hallowed ground creates connection to larger story'
    ],
    heroImage: {
      src: '/images/aar/normandie-2014-hero.jpg',
      alt: 'Team of ruckers on Normandy battlefield terrain, WWII historical markers visible'
    },
    location: 'Normandy, France',
    approved: true
  },
  {
    id: 'aar-okinawa-challenge-2015-03',
    title: 'Okinawa GORUCK Challenge - After Action Report',
    date: '2015-03-15',
    author: 'Red Rucker',
    duration: 840,
    distance: 16.0,
    load: 30,
    participants: 35,
    conditions: 'Clear, 18°C, beach terrain, historical sites, night operations',
    planned: [
      'Complete first GORUCK Challenge event',
      'Experience team-based endurance in foreign environment',
      'Practice navigation at historical military locations',
      'Build international brotherhood connections'
    ],
    actual: [
      'Completed 14-hour event with team of 35',
      'Visited historical military sites during movement',
      'Experienced beach terrain challenges',
      'Connected with GRTs Yuma and Junpei - no English needed to complete event',
      'Discovered truth is found in pain, endurance, and perseverance'
    ],
    whatWentWell: [
      'Team achieved 100% completion rate',
      'International team coordination worked smoothly',
      'Navigation between historical sites was accurate',
      'Cultural experience at military locations added meaning',
      'Made lasting connections with GRTs from Japan'
    ],
    improvements: [
      'More hydration planning for beach terrain',
      'Better foot care for sand and wet conditions',
      'Language barrier communication strategies',
      'Cultural sensitivity at historical sites',
      'Team bonding activities for international groups'
    ],
    lessonsLearned: [
      'You do not need to understand a lick of English to get through a 14-hour endurance event if you have a team around you',
      'Truth is very often found in pain, in endurance, in perseverance',
      'Shared suffering creates bonds that transcend language',
      'Historical context adds depth to the experience',
      'International brotherhood is built through common challenge'
    ],
    heroImage: {
      src: '/images/aar/okinawa-challenge-hero.jpg',
      alt: 'Team of 35 ruckers on Okinawa beach at sunset, historical military structure in background'
    },
    location: 'Okinawa, Japan',
    approved: true
  },
  {
    id: 'aar-spartan-2014-09',
    title: 'Post Spartan 2014 - After Action Report',
    date: '2014-09-14',
    author: 'Red Rucker',
    duration: 300,
    distance: 12.0,
    load: 30,
    participants: 25,
    conditions: 'Clear, 22°C, mixed terrain with obstacle course',
    planned: [
      'Complete Spartan-style endurance event',
      'Test obstacle course navigation',
      'Practice team coordination under physical stress',
      'Build foundation for heavier events'
    ],
    actual: [
      'Completed obstacle course with team',
      'Mixed terrain challenged all participants',
      'Team coordination key to completion',
      'Foundation building for future Heavy events'
    ],
    whatWentWell: [
      'Obstacle completion rate',
      'Team coordination throughout',
      'Physical preparation adequate',
      'Mental focus maintained'
    ],
    improvements: [
      'Obstacle-specific training',
      'Grip strength for rope elements',
      'Burpee endurance for penalty variations',
      'Team communication during obstacles'
    ],
    lessonsLearned: [
      'Obstacle events require different preparation than pure rucking',
      'Team coordination multiplies individual capability',
      'Foundation events build context for heavier challenges',
      'Mental toughness transfers across event types'
    ],
    heroImage: {
      src: '/images/aar/spartan-2014-hero.jpg',
      alt: 'Team of ruckers completing obstacle course during Spartan event'
    },
    location: 'USA',
    approved: true
  },
  {
    id: 'aar-tokyo-challenge-2015-03',
    title: 'Tokyo GORUCK Challenge - After Action Report',
    date: '2015-03-08',
    author: 'Red Rucker',
    duration: 840,
    distance: 15.0,
    load: 30,
    participants: 28,
    conditions: 'Clear, 12°C, urban and park terrain, night operations',
    planned: [
      'Complete GORUCK Challenge in Asian metropolis',
      'Experience Japanese culture through ruck event',
      'Practice navigation in dense urban environment',
      'Build international team bonds'
    ],
    actual: [
      'Completed 14-hour event through Tokyo urban terrain',
      'Navigated parks and city areas throughout night',
      'Team worked through language barriers successfully',
      'Japanese hospitality integrated into event experience'
    ],
    whatWentWell: [
      'Navigation through complex urban environment',
      'Team coordination across language barriers',
      'Cultural integration enhanced experience',
      'Urban terrain provided unique challenges'
    ],
    improvements: [
      'Urban navigation timing for dense areas',
      'Language translation resources',
      'Urban surface impact on feet',
      'Crowd awareness during day operations'
    ],
    lessonsLearned: [
      'Urban environments require different navigation approaches',
      'Cultural context enriches the event experience',
      'Team bonds transcend language differences',
      'City operations present unique physical challenges'
    ],
    heroImage: {
      src: '/images/aar/tokyo-challenge-hero.jpg',
      alt: 'Team of 28 ruckers moving through Tokyo urban area at night, neon lights in background'
    },
    location: 'Tokyo, Japan',
    approved: true
  }
];