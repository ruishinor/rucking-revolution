export interface Route {
  id: string;
  slug: string;
  title: string;
  description: string;
  distance: number; // in kilometers
  estimatedTime: string; // e.g., "2-3 hours"
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  elevationGain: number; // in meters
  terrain: ('road' | 'trail' | 'mixed' | 'hills' | 'mountain' | 'sand')[];
  waypoints: {
    name: string;
    distanceFromStart: number; // in kilometers
    description: string;
  }[];
  loadRecommendation: number; // in kilograms
  bestSeason: ('spring' | 'summer' | 'fall' | 'winter' | 'early spring' | 'early fall')[];
  notes?: string;
  heroImage: {
    src: string;
    alt: string;
  };
}

export const routes: Route[] = [
  {
    id: 'route-1',
    slug: 'beginner-loop',
    title: 'Beginner Loop',
    description: 'Perfect introduction to rucking with gentle terrain, clear markings, and multiple exit points.',
    distance: 5.0,
    estimatedTime: '1-1.5 hours',
    difficulty: 'beginner',
    elevationGain: 50,
    terrain: ['trail', 'road'],
    waypoints: [
      {
        name: 'Trailhead Parking',
        distanceFromStart: 0,
        description: 'Start/end point with parking and basic facilities'
      },
      {
        name: 'Overlook Point',
        distanceFromStart: 1.5,
        description: 'Scenic vista with benches for rest'
      },
      {
        name: 'Water Crossing',
        distanceFromStart: 3.0,
        description: 'Shallow stream crossing - good foot care checkpoint'
      },
      {
        name: 'Return Trailhead',
        distanceFromStart: 5.0,
        description: 'Back to start - congratulations!'
      }
    ],
    loadRecommendation: 10,
    bestSeason: ['spring', 'summer', 'fall'],
    notes: 'Well-marked trail suitable for all ages and experience levels. Dogs on leash permitted.',
    heroImage: {
      src: '/images/routes/beginner-loop-hero.jpg',
      alt: 'Beginner rucking loop trail showing gentle terrain, clear path markers, and scenic overlook'
    }
  },
  {
    id: 'route-2',
    slug: 'ridge-line-challenge',
    title: 'Ridge Line Challenge',
    description: 'Intermediate route following scenic ridgelines with moderate elevation changes and rewarding views.',
    distance: 12.0,
    estimatedTime: '3-4 hours',
    difficulty: 'intermediate',
    elevationGain: 400,
    terrain: ['trail', 'hills'],
    waypoints: [
      {
        name: 'Base Camp Trailhead',
        distanceFromStart: 0,
        description: 'Start point with water and information kiosk'
      },
      {
        name: 'First Ascent',
        distanceFromStart: 2.5,
        description: 'Steady climb to first ridge line'
      },
      {
        name: 'Summit View',
        distanceFromStart: 5.0,
        description: 'Panoramic 360-degree view from high point'
      },
      {
        name: 'Valley Crossing',
        distanceFromStart: 7.5,
        description: 'Descent into valley with stream crossing'
      },
      {
        name: 'Final Ridge',
        distanceFromStart: 10.0,
        description: 'Second ridge approach before return'
      },
      {
        name: 'Base Camp Return',
        distanceFromStart: 12.0,
        description: 'Return to start point'
      }
    ],
    loadRecommendation: 15,
    bestSeason: ['spring', 'summer', 'fall'],
    notes: 'Some sections may be rocky - proper footwear recommended. Check weather conditions before attempting.',
    heroImage: {
      src: '/images/routes/ridge-line-challenge-hero.jpg',
      alt: 'Intermediate ridge line route showing hiker on trail with mountainous backdrop and valley views'
    }
  },
  {
    id: 'route-3',
    slug: 'summit-ascent',
    title: 'Summit Ascent',
    description: 'Advanced route to summit with significant elevation gain, requiring preparation and endurance.',
    distance: 15.0,
    estimatedTime: '5-7 hours',
    difficulty: 'advanced',
    elevationGain: 1200,
    terrain: ['trail', 'hills', 'mountain'],
    waypoints: [
      {
        name: 'Trailhead Start',
        distanceFromStart: 0,
        description: 'Begin ascent with full pack and water'
      },
      {
        name: 'Tree Line',
        distanceFromStart: 3.0,
        description: 'Transition from forested to alpine terrain'
      },
      {
        name: 'Base Camp',
        distanceFromStart: 6.0,
        description: 'Established camping area - good rest point'
      },
      {
        name: 'Rocky Scramble',
        distanceFromStart: 9.0,
        description: 'Technical section requiring hand use for balance'
      },
      {
        name: 'Summit Ridge',
        distanceFromStart: 12.0,
        description: 'Final approach to summit with 360-degree views'
      },
      {
        name: 'Summit Peak',
        distanceFromStart: 15.0,
        description: 'Highest point - turnaround and begin descent'
      }
    ],
    loadRecommendation: 20,
    bestSeason: ['summer', 'fall'],
    notes: 'Requires proper acclimatization. Check weather forecast and carry emergency gear. Turn back if conditions deteriorate.',
    heroImage: {
      src: '/images/routes/summit-ascent-hero.jpg',
      alt: 'Advanced summit route showing rucker on rocky trail approaching mountain peak with dramatic sky'
    }
  },
  {
    id: 'route-4',
    slug: 'urban-tactical',
    title: 'Urban Tactical Route',
    description: 'Mixed-surface route through urban environment practicing navigation, load transitions, and obstacle negotiation.',
    distance: 8.0,
    estimatedTime: '2-3 hours',
    difficulty: 'intermediate',
    elevationGain: 100,
    terrain: ['mixed'],
    waypoints: [
      {
        name: 'City Park Start',
        distanceFromStart: 0,
        description: 'Urban park trailhead with facilities'
      },
      {
        name: 'Industrial Zone',
        distanceFromStart: 2.0,
        description: 'Navigate through warehouse district with varying surfaces'
      },
      {
        name: 'Downtown Core',
        distanceFromStart: 4.0,
        description: 'Practice navigation in high-foot-traffic area'
      },
      {
        name: 'Residential Area',
        distanceFromStart: 6.0,
        description: 'Navigate through neighborhood streets and sidewalks'
      },
      {
        name: 'River Path',
        distanceFromStart: 7.0,
        description: 'Follow paved trail along river back to start'
      },
      {
        name: 'City Park Finish',
        distanceFromStart: 8.0,
        description: 'Return to start point'
      }
    ],
    loadRecommendation: 12,
    bestSeason: ['spring', 'summer', 'fall', 'winter'],
    notes: 'Be aware of traffic, follow pedestrian laws, and respect private property. Best attempted on weekends or off-hours.',
    heroImage: {
      src: '/images/routes/urban-tactical-hero.jpg',
      alt: 'Urban tactical route showing rucker navigating city streets with buildings and pedestrian traffic'
    }
  },
  {
    id: 'route-5',
    slug: 'sand-dune-circuit',
    title: 'Sand Dune Circuit',
    description: 'Challenging sandy terrain workout building leg strength and endurance through variable resistance.',
    distance: 6.0,
    estimatedTime: '2-2.5 hours',
    difficulty: 'advanced',
    elevationGain: 80,
    terrain: ['sand'],
    waypoints: [
      {
        name: 'Beach Access Point',
        distanceFromStart: 0,
        description: 'Start at designated beach access with parking'
      },
      {
        name: 'First Dune Base',
        distanceFromStart: 1.0,
        description: 'Begin ascent of first major dune'
      },
      {
        name: 'Dune Crest',
        distanceFromStart: 1.5,
        description: 'Top of first dune with ocean view'
      },
      {
        name: 'Interdunal Walk',
        distanceFromStart: 2.5,
        description: 'Travel between dunes on firmer sand'
      },
      {
        name: 'Second Dune Base',
        distanceFromStart: 3.5,
        description: 'Base of second dune for ascent'
      },
      {
        name: 'Return Path',
        distanceFromStart: 5.0,
        description: 'Return route along beach at water line'
      },
      {
        name: 'Beach Access Finish',
        distanceFromStart: 6.0,
        description: 'Return to start point'
      }
    ],
    loadRecommendation: 10,
    bestSeason: ['fall', 'winter', 'spring'],
    notes: 'Check tide schedules - best attempted during low tide. Foot care critical in sandy conditions.',
    heroImage: {
      src: '/images/routes/sand-dune-circuit-hero.jpg',
      alt: 'Sand dune circuit showing rucker ascending sandy slope with ocean in background and footprints in sand'
    }
  },
  {
    id: 'route-6',
    slug: 'historic-march-route',
    title: 'Historic March Route',
    description: 'Route following historical expedition or trail path with educational waypoints and distance markers.',
    distance: 18.0,
    estimatedTime: '5-6 hours',
    difficulty: 'intermediate',
    elevationGain: 300,
    terrain: ['mixed', 'trail'],
    waypoints: [
      {
        name: 'Historical Trailhead',
        distanceFromStart: 0,
        description: 'Start point with historical information plaque'
      },
      {
        name: 'First Mile Marker',
        distanceFromStart: 1.6,
        description: 'Original stone mile marker from 1800s'
      },
      {
        name: 'Old Crossing',
        distanceFromStart: 5.0,
        description: 'Historic ford or bridge crossing point'
      },
      {
        name: 'Rest Camp Site',
        distanceFromStart: 9.0,
        description: 'Documented historical resting point'
      },
      {
        name: 'Second Mile Marker',
        distanceFromStart: 11.0,
        description: 'Another original distance marker'
      },
      {
        name: 'Lookout Point',
        distanceFromStart: 14.0,
        description: 'Historical observation or signal point'
      },
      {
        name: 'Final Approach',
        distanceFromStart: 16.0,
        description: 'Last stretch to historical endpoint'
      },
      {
        name: 'Historic Endpoint',
        distanceFromStart: 18.0,
        description: 'Original destination with commemorative plaque'
      }
    ],
    loadRecommendation: 15,
    bestSeason: ['spring', 'fall'],
    notes: 'Respect historical sites and artifacts. Leave no trace and follow local guidelines for historical areas.',
    heroImage: {
      src: '/images/routes/historic-march-route-hero.jpg',
      alt: 'Historic march route showing rucker on trail passing historical marker with informational plaque'
    }
  }
];