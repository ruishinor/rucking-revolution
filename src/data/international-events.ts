export interface InternationalEvent {
  id: string;
  name: string;
  summary: string;
  typicalDates?: string;
  difficulty?: string;
  link?: string;
  what?: string; // Detailed description of the event
  where?: string; // Location details
  length?: string; // Distance/length of the event
  duration?: string; // Duration of the event
  challengeGrade?: string; // Challenge grade with methodology
  challengeMethodology?: string; // How the challenge grade is measured
  coordinates?: { lat: number; lng: number }; // For OpenMap
}

export const internationalEvents: InternationalEvent[] = [
  {
    id: 'nijmegen',
    name: 'Nijmegen Four Days Marches',
    summary: 'A historic multi-day walking event in the Netherlands with routes for civilians and military participants.',
    typicalDates: 'Early July',
    difficulty: 'Moderate to Hard',
    link: 'https://www.4daagse.nl/en',
    what: 'The world\'s largest multi-day marching event, covering 30-50km per day for four consecutive days. Open to civilians and military personnel with various distance categories.',
    where: 'Nijmegen, Netherlands and surrounding regions',
    length: '120-200km total (30-50km per day)',
    duration: '4 days',
    challengeGrade: 'Grade 3 (Moderate-Hard)',
    challengeMethodology: 'Based on distance per day (30-50km), terrain (flat to rolling), weather conditions, and required pace. Grade 3 indicates sustained effort over 4 consecutive days with moderate to high physical demand.',
    coordinates: { lat: 51.8425, lng: 5.8667 }
  },
  {
    id: 'mammutmarsch',
    name: 'Mammutmarsch',
    summary: 'Long-distance endurance marches held in various European countries, often 30–100km events.',
    typicalDates: 'Various dates',
    difficulty: 'Hard',
    link: 'https://mammutmarsch.de/',
    what: 'Organized long-distance marching events across Europe, offering 30km, 50km, and 100km routes. Events are held in various countries with support stations and medical personnel.',
    where: 'Various locations across Europe (Germany, Austria, Switzerland, etc.)',
    length: '30km, 50km, or 100km options',
    duration: '1 day (6-24 hours depending on distance)',
    challengeGrade: 'Grade 4 (Hard)',
    challengeMethodology: 'Based on distance (30-100km), time limit (6-24 hours), terrain difficulty, and mandatory gear requirements. Grade 4 indicates high physical endurance and mental resilience required.',
    coordinates: { lat: 52.52, lng: 13.405 }
  },
  {
    id: 'camino',
    name: 'Camino de Santiago',
    summary: 'A network of pilgrimage routes across Europe culminating in Santiago de Compostela; routes vary in length and difficulty.',
    typicalDates: 'Year-round (peak spring/summer)',
    difficulty: 'Easy to Hard',
    link: 'https://www.caminodesantiago.gal/en/',
    what: 'A network of pilgrimage routes across Europe leading to the shrine of St. James in Santiago de Compostela, Spain. Most popular route is the Camino Francés (780km).',
    where: 'Multiple routes across Europe, ending in Santiago de Compostela, Spain',
    length: '100-800km depending on route',
    duration: '7-35 days depending on route and pace',
    challengeGrade: 'Grade 1-3 (Easy to Moderate-Hard)',
    challengeMethodology: 'Based on total distance, daily elevation gain, terrain (road, trail, mountain), and accommodation type. Grade varies by route selection.',
    coordinates: { lat: 42.8782, lng: -8.5448 }
  },
  {
    id: 'pilegrimsferden',
    name: 'Pilegrimsferden (Norway)',
    summary: 'Pilgrimage routes in Norway combining coastal, mountain and cultural routes with seasonal events and festivals.',
    typicalDates: 'Seasonal',
    difficulty: 'Moderate',
    link: 'https://pilegrimsleden.no/en/',
    what: 'Norway\'s official pilgrimage routes following historic paths to Trondheim. Offers coastal, mountain, and forest routes with cultural landmarks.',
    where: 'Multiple routes across Norway, ending in Trondheim',
    length: '50-500km depending on route',
    duration: '3-21 days depending on route',
    challengeGrade: 'Grade 2 (Moderate)',
    challengeMethodology: 'Based on terrain (mountain, coastal, forest), weather conditions, daily distance (15-30km), and elevation gain. Grade 2 indicates moderate physical fitness required.',
    coordinates: { lat: 63.4305, lng: 10.3951 }
  },
  {
    id: 'corsica',
    name: 'Corsica Route',
    summary: 'Challenging mountainous island routes with remote sections—popular among adventure ruckers.',
    typicalDates: 'Spring / Autumn',
    difficulty: 'Hard',
    link: 'https://www.corsica-isula-corsica.com/',
    what: 'Challenging long-distance hiking routes across Corsica\'s mountainous terrain, including the famous GR20 trail (180km) with steep elevation gains and remote sections.',
    where: 'Corsica, France (Mediterranean island)',
    length: '180km (GR20 main route)',
    duration: '14-16 days',
    challengeGrade: 'Grade 5 (Extreme)',
    challengeMethodology: 'Based on daily elevation gain (avg 1200m), technical terrain, remote sections with limited resupply, and weather exposure. Grade 5 indicates expert-level fitness and mountain experience required.',
    coordinates: { lat: 42.0397, lng: 9.0129 }
  },
  {
    id: 'mjolner',
    name: 'Mjølner Trail & Walk to Valhalla',
    summary: 'Nordic long-distance events with mythic branding; long hikes and ruck marches focused on challenge and culture.',
    typicalDates: 'Varies',
    difficulty: 'Hard',
    link: '',
    what: 'Nordic-themed long-distance events combining rucking with cultural elements. Routes vary from 20km to 100km with Viking-themed checkpoints and cultural activities.',
    where: 'Various locations in Norway and Sweden',
    length: '20-100km options',
    duration: '1 day (5-20 hours)',
    challengeGrade: 'Grade 3-4 (Moderate-Hard to Hard)',
    challengeMethodology: 'Based on distance, terrain (forest, mountain, urban), cultural challenges, and gear requirements. Grade varies by route selection.',
    coordinates: { lat: 59.9139, lng: 10.7522 }
  }
];
