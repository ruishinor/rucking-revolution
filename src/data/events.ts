export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string for when it occurs
  location: string;
  duration: string; // e.g., "1 day", "Weekend"
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  distance: number; // in kilometers
  load: number; // in kilograms
  priceEUR: number;
  maxParticipants: number;
  includes: string[];
  requirements: string[];
  agenda: {
    time: string;
    activity: string;
  }[];
  heroImage: {
    src: string;
    alt: string;
  };
}

export const events: Event[] = [
  {
    id: 'event-1',
    slug: 'introduction-to-rucking-weekend',
    title: 'Introduction to Rucking Weekend',
    description: 'Perfect for beginners, this weekend event covers all the basics of rucking including form, equipment selection, and progressive training principles.',
    date: '2024-06-15',
    location: 'Training Facility Northwest',
    duration: 'Weekend (Saturday-Sunday)',
    difficulty: 'beginner',
    distance: 10, // total over weekend
    load: 10,
    priceEUR: 149.99,
    maxParticipants: 20,
    includes: [
      'Expert instruction from certified rucking coaches',
      'All training materials and workbooks',
      'Saturday lunch and dinner, Sunday breakfast',
      'Use of specialty equipment (if needed)',
      'Certificate of completion',
      'Post-event training plan'
    ],
    requirements: [
      'Basic fitness level (able to walk 5km comfortably)',
      'Own ruck or backpack (we can provide guidance on what to bring)',
      'Water bottle or hydration system',
      'Appropriate footwear and clothing for weather'
    ],
    agenda: [
      { time: '08:00', activity: 'Check-in and equipment check' },
      { time: '08:30', activity: 'Introduction to rucking principles and history' },
      { time: '09:30', activity: 'Proper form and technique workshop' },
      { time: '10:30', activity: 'Break' },
      { time: '10:45', activity: 'Equipment selection and fitting' },
      { time: '12:00', activity: 'Lunch' },
      { time: '13:00', activity: 'First ruck: 3km form focus' },
      { time: '14:30', activity: 'After-action review and stretching' },
      { time: '15:00', activity: 'Strength and mobility exercises for ruckers' },
      { time: '16:00', activity: 'Day one wrap-up and Q&A' },
      { time: '08:00', activity: 'Day two check-in and warmup' },
      { time: '08:30', activity: 'Navigation basics for ruckers' },
      { time: '09:30', activity: 'Second ruck: 5km with light load' },
      { time: '11:00', activity: 'Break and snack' },
      { time: '11:15', activity: 'Team building rucking activities' },
      { time: '12:30', activity: 'Lunch' },
      { time: '13:30', activity: 'Program design and progression planning' },
      { time: '14:30', activity: 'Final ruck: 2km challenge course' },
      { time: '15:30', activity: 'Graduation ceremony and certificate awarding' },
      { time: '16:00', activity: 'Event conclusion' }
    ],
    heroImage: {
      src: '/images/events/introduction-weekend-hero.jpg',
      alt: 'Group of beginner ruckers in weekend workshop practicing form with instructor feedback'
    }
  },
  {
    id: 'event-2',
    slug: 'community-capability-weekend',
    title: 'Community Capability Weekend Exercise',
    description: 'Advanced weekend exercise simulating community response scenarios with navigation, equipment handling, and team coordination challenges.',
    date: '2024-07-20',
    location: 'Community Training Area East',
    duration: 'Weekend (Friday evening-Sunday)',
    difficulty: 'advanced',
    distance: 25, // total over weekend
    load: 20,
    priceEUR: 249.99,
    maxParticipants: 16,
    includes: [
      'Scenario-based training with experienced community responders',
      'All meals and accommodations',
      'Use of specialized equipment',
      'After-action review and performance feedback',
      'Participation records and certification',
      'Opportunity to earn community capability badge'
    ],
    requirements: [
      'Intermediate rucking ability (comfortable with 15km @ 15kg)',
      'Basic land navigation skills (map and compass)',
      'Teamwork and communication aptitude',
      'Physical readiness for moderate challenge exposure',
      'Own load-bearing equipment (ruck, carrying frame, etc.)'
    ],
    agenda: [
      { time: '18:00 (Fri)', activity: 'Check-in, equipment issue, and safety brief' },
      { time: '19:00', activity: 'Initial issue and packing list review' },
      { time: '20:00', activity: 'Movement to base camp site' },
      { time: '21:00', activity: 'Night navigation exercise (3km)' },
      { time: '22:30', activity: 'Actions at base camp and security' },
      { time: '06:00 (Sat)', activity: 'Physical training and breakfast' },
      { time: '08:00', activity: 'Equipment inspection and event brief' },
      { time: '09:00', activity: 'Movement to objective area (8km)' },
      { time: '12:00', activity: 'Objective occupation and observation drill' },
      { time: '13:00', activity: 'Lunch and equipment maintenance' },
      { time: '14:00', activity: 'Assistance techniques and litter carry drill' },
      { time: '16:00', activity: 'Resupply and equipment redistribution' },
      { time: '17:00', activity: 'Movement to night objective' },
      { time: '19:00', activity: 'Night movement and navigation exercise' },
      { time: '21:00', activity: 'Establish base camp and security' },
      { time: '06:00 (Sun)', activity: 'Physical training and breakfast' },
      { time: '08:00', activity: 'Final event brief and equipment check' },
      { time: '09:00', activity: 'Movement to extraction point (6km)' },
      { time: '11:00', activity: 'Extraction and after-action review' },
      { time: '12:30', activity: 'Final debrief and awards ceremony' },
      { time: '13:30', activity: 'Equipment turn-out and departure' }
    ],
    heroImage: {
      src: '/images/events/community-capability-weekend-hero.jpg',
      alt: 'Team of advanced ruckers conducting community simulation with equipment transfers and navigation in field environment'
    }
  },
  {
    id: 'event-3',
    slug: 'endurance-rucking-challenge',
    title: 'Endurance Rucking Challenge',
    description: 'Test your limits with this challenging endurance event featuring progressive distance increases over two days with varying loads and terrain.',
    date: '2024-08-10',
    location: 'Mountain Trail Network',
    duration: '2 days',
    difficulty: 'intermediate',
    distance: 40, // total over two days
    load: 15,
    priceEUR: 179.99,
    maxParticipants: 30,
    includes: [
      'Clearly marked course with checkpoints',
      'Aid stations with nutrition and hydration',
      'Medical support and safety personnel',
      'Event t-shirt and finisher medal',
      'Post-event recovery area with food and drinks',
      'Digital timing and results'
    ],
    requirements: [
      'Ability to complete 20km ruck with 10kg load',
      'Basic self-sufficiency for outdoor activities',
      'Own rucking equipment and hydration system',
      'Completion of required liability waiver',
      'Recommended: prior endurance event experience'
    ],
    agenda: [
      { time: '06:00 (Day 1)', activity: 'Participant check-in and bag drop' },
      { time: '06:30', activity: 'Mandatory safety briefing' },
      { time: '07:00', activity: 'Start wave 1: 20km Day 1 route' },
      { time: '07:30', activity: 'Start wave 2: 20km Day 1 route' },
      { time: '12:00', activity: 'First aid station (10km mark)' },
      { time: '15:00', activity: 'Second aid station and lunch (15km mark)' },
      { time: '18:00', activity: 'Day 1 finish line and overnight support' },
      { time: '19:00', activity: 'Evening meal and social gathering' },
      { time: '06:00 (Day 2)', activity: 'Breakfast and gear check' },
      { time: '07:00', activity: 'Start: 20km Day 2 route' },
      { time: '11:00', activity: 'Midpoint aid station (10km mark)' },
      { time: '14:00', activity: 'Final aid station (15km mark)' },
      { time: '16:30', activity: 'Finish line celebrations begin' },
      { time: '17:30', activity: 'Awards ceremony and finisher medals' },
      { time: '18:30', activity: 'Event conclusion and departure' }
    ],
    heroImage: {
      src: '/images/events/endurance-challenge-hero.jpg',
      alt: 'Group of intermediate ruckers on mountain trail during endurance challenge with backpacks and trekking poles'
    }
  },
  {
    id: 'event-4',
    slug: 'leadership-under-load-workshop',
    title: 'Leadership Under Load Workshop',
    description: 'Develop leadership skills through practical rucking exercises that teach communication, decision-making, and team cohesion under physical stress.',
    date: '2024-09-05',
    location: 'Leadership Development Center',
    duration: '1 day',
    difficulty: 'intermediate',
    distance: 8,
    load: 12,
    priceEUR: 129.99,
    maxParticipants: 24,
    includes: [
      'Expert facilitation by leadership and rucking specialists',
      'Leadership workbook and reference materials',
      'All meals and refreshments',
      'Use of specialized training equipment',
      'Personalized feedback and development plan',
      'Certificate of leadership development completion'
    ],
    requirements: [
      'Current leadership role or aspiration to lead',
      'Basic physical fitness (able to walk 8km with load)',
      'Openness to feedback and self-reflection',
      'Completion of pre-workshop reading assignment',
      'Own note-taking materials and water container'
    ],
    agenda: [
      { time: '08:00', activity: 'Check-in, equipment issue, and introductions' },
      { time: '08:30', activity: 'Leadership principles and rucking connection' },
      { time: '09:30', activity: 'Form and equipment check' },
      { time: '10:00', activity: 'Leadership ruck: 2km with communication focus' },
      { time: '11:00', activity: 'After-action review and leadership debrief' },
      { time: '11:30', activity: 'Break and snack' },
      { time: '12:00', activity: 'Lunch' },
      { time: '13:00', activity: 'Decision-making under load exercises' },
      { time: '14:00', activity: 'Team problem-solving challenges' },
      { time: '15:00', activity: 'Feedback and communication drills' },
      { time: '15:30', activity: 'Break' },
      { time: '16:00', activity: 'Individual leadership assessment ruck (2km)' },
      { time: '17:00', activity: 'Personal feedback and development planning' },
      { time: '18:00', activity: 'Workshop conclusion and certificate awarding' }
    ],
    heroImage: {
      src: '/images/events/leadership-workshop-hero.jpg',
      alt: 'Group of intermediate participants in leadership workshop conducting after-action review after rucking exercise'
    }
  },
  {
    id: 'event-5',
    slug: 'family-rucking-festival',
    title: 'Family Rucking Festival',
    description: 'Fun, inclusive event for families to experience rucking together with age-appropriate activities, games, and challenges for all ages.',
    date: '2024-10-12',
    location: 'Community Park and Trail System',
    duration: '1 day',
    difficulty: 'beginner',
    distance: 5,
    load: 5,
    priceEUR: 49.99,
    maxParticipants: 100,
    includes: [
      'Family-friendly rucking course with multiple distance options',
      'Age-appropriate activities and games for children',
      'Family challenges and teamwork exercises',
      'Picnic lunch and healthy snacks',
      'Entertainment and music throughout the day',
      'Participation medals for all family members',
      'Educational stations about rucking benefits'
    ],
    requirements: [
      'Ability to walk 2-5km depending on chosen route',
      'Appropriate footwear for all family members',
      'Water containers for hydration',
      'Completed registration and liability waivers',
      'Recommended: stroller or carrier for very young children if needed'
    ],
    agenda: [
      { time: '09:00', activity: 'Gate opens, check-in and packet pickup' },
      { time: '09:30', activity: 'Welcome and safety briefing' },
      { time: '10:00', activity: 'Family warm-up and stretching' },
      { time: '10:30', activity: 'Staggered start: Family rucking waves begin' },
      { time: '11:30', activity: 'Kids activity zone opens (games, face painting, etc.)' },
      { time: '12:00', activity: 'Family picnic lunch and social time' },
      { time: '13:00', activity: 'Family challenge course opens' },
      { time: '14:00', activity: 'Family rucking demonstrations and try-it stations' },
      { time: '15:00', activity: 'Entertainment and family activities' },
      { time: '16:00', activity: 'Awards ceremony and participation medals' },
      { time: '16:30', activity: 'Closing remarks and thank you' },
      { time: '17:00', activity: 'Event concludes' }
    ],
    heroImage: {
      src: '/images/events/family-festival-hero.jpg',
      alt: 'Multiple families with children and adults participating in family rucking festival with games and activities'
    }
  },
  {
    id: 'event-6',
    slug: 'winter-rucking-clinic',
    title: 'Winter Rucking Clinic',
    description: 'Specialized clinic focusing on rucking techniques, equipment, and safety considerations for cold weather and snowy conditions.',
    date: '2024-12-14',
    location: 'Winter Training Facility',
    duration: '1 day',
    difficulty: 'intermediate',
    distance: 10,
    load: 12,
    priceEUR: 99.99,
    maxParticipants: 18,
    includes: [
      'Expert instruction on cold-weather rucking principles',
      'Winter-specific equipment demonstration and fitting',
      'Indoor classroom sessions and outdoor practical sessions',
      'Warm lunch and hot beverages provided',
      'Handouts on cold-weather safety and gear maintenance',
      'Certificate of winter rucking completion'
    ],
    requirements: [
      'Basic rucking experience (comfortable with 5km @ 10kg)',
      'Own cold-weather appropriate clothing and footwear',
      'Willingness to train in cold and potentially snowy conditions',
      'Completion of cold-weather safety screening',
      'Recommended: own winter rucking gear if available'
    ],
    agenda: [
      { time: '08:00', activity: 'Check-in, equipment issue, and safety brief' },
      { time: '08:30', activity: 'Indoor session: Cold-weather rucking principles' },
      { time: '09:30', activity: 'Indoor session: Winter gear selection and fitting' },
      { time: '10:30', activity: 'Break and hot beverages' },
      { time: '10:45', activity: 'Outdoor session: Winter movement techniques' },
      { time: '12:00', activity: 'Lunch (soup and sandwiches)' },
      { time: '13:00', activity: 'Outdoor session: Load carriage in snow and ice' },
      { time: '14:00', activity: 'Outdoor session: Navigation and safety in winter' },
      { time: '15:00', activity: 'Outdoor session: Winter rucking practical application (5km)' },
      { time: '16:00', activity: 'After-action review and equipment care' },
      { time: '16:30', activity: 'Break and hot beverages' },
      { time: '17:00', activity: 'Indoor session: Gear maintenance and storage' },
      { time: '17:30', activity: 'Certificate awarding and conclusion' },
      { time: '18:00', activity: 'Clinic concludes' }
    ],
    heroImage: {
      src: '/images/events/winter-clinic-hero.jpg',
      alt: 'Group of intermediate ruckers in winter clothing practicing techniques on snow-covered trail with instructor guidance'
    }
  }
];