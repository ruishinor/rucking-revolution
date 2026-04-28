export interface TestItem {
  id: string;
  slug: string;
  title: string;
  short: string;
  overview: string;
  standards?: string[];
  milestones?: string[];
  components?: string[];
  practiceRoutines?: {
    name: string;
    description: string;
    steps: string[];
  }[];
  adaptationTips?: string[];
}

export const tests: TestItem[] = [
  {
    id: 'afpt',
    slug: 'afpt',
    title: 'AFPT (Army Physical Fitness Test)',
    short: 'Overview of the Army Physical Fitness Test standards and how they apply to ruck training.',
    overview: 'The AFPT (Army Physical Fitness Test) is a common milestone for military-aligned training programs. This page presents the test components, suggested practice routines, and how to adapt ruck training to meet the standards.',
    components: [
      '2-mile run (cardiovascular endurance)',
      'Push-up test (upper body endurance)',
      'Sit-up test (core strength)',
      'Alternate aerobic event (swim, bike, or row)'
    ],
    standards: [
      '2-mile run time standards by age and gender',
      'Push-ups max in 2 minutes',
      'Sit-ups max in 2 minutes'
    ],
    milestones: [
      'Baseline test to determine starting fitness',
      '6-week practice cycle focusing on weak components',
      'Pre-test taper and strategies'
    ],
    practiceRoutines: [
      {
        name: 'Run Improvement Plan',
        description: 'Interval training to improve 2-mile run time',
        steps: [
          'Warm-up: 5-10 minutes light jogging',
          '4 x 400m at goal pace with 90s rest',
          'Cool-down: 5-10 minutes walking',
          'Progress to 800m repeats in week 3-4'
        ]
      },
      {
        name: 'Push-up Progression',
        description: 'Build upper body endurance for the push-up test',
        steps: [
          'Baseline: Max push-ups in 2 minutes',
          'Daily sets at 60% of max with perfect form',
          'Add 5 reps per week until reaching goal',
          'Test weekly to track progress'
        ]
      }
    ],
    adaptationTips: [
      'Add 1-2 mile run segments to your ruck training at conversational pace',
      'Practice push-ups with a loaded backpack (start with 10-15 lbs)',
      'Incorporate core work (planks, hollow holds) after ruck sessions',
      'Periodize training: Base → Strength → Peak → Taper before test'
    ]
  },
  {
    id: 'ubbr',
    slug: 'ubbr',
    title: 'Upper Body Round Robin (UBBR)',
    short: 'A reproducible upper-body conditioning circuit suitable as a milestone check for rucking readiness.',
    overview: 'Upper Body Round Robin (UBBR) is a timed circuit focused on push, pull, core and loaded carries. Use it as a benchmark to track strength and injury resilience while increasing ruck load.',
    components: [
      'Push-up station (max reps in 60 seconds)',
      'Inverted row station (max reps in 60 seconds)',
      'Plank hold (max time)',
      'Farmer carry (40m for time with 2x20kg kettlebells)',
      'Rest period between rounds (3 minutes)'
    ],
    standards: [
      '3 rounds for time of: 10 push-ups, 8 inverted rows, 30s plank, 40m farmer carry',
      'Manual scale options for beginners'
    ],
    milestones: [
      'Baseline 1RM equivalents',
      '4-week strength-focused block',
      'Movement quality sign-off'
    ],
    practiceRoutines: [
      {
        name: 'Circuit Conditioning',
        description: 'Practice the UBRR circuit to build work capacity',
        steps: [
          'Perform each station with perfect form',
          'Rest 90 seconds between stations',
          'Complete 2-3 rounds, tracking total time',
          'Add load progressively (vest or backpack)'
        ]
      },
      {
        name: 'Strength Base Builder',
        description: 'Build foundational strength for UBRR stations',
        steps: [
          'Push: 3x8-12 bench press or push-ups',
          'Pull: 3x8-12 rows or pull-ups',
          'Core: 3x30-60s plank variations',
          'Carry: 3x40m farmer carries with progressive load'
        ]
      }
    ],
    adaptationTips: [
      'Add UBRR circuit once per week after ruck sessions',
      'Use ruck as resistance for rows and push-ups (load backpack)',
      'Practice planks with added load on shoulders',
      'Farmer carries with ruck-weight kettlebells improve grip for ruck handles'
    ]
  }
];
