export interface Product {
  id: string;
  sku: string;
  title: string;
  description: string;
  category: 'books' | 'guides' | 'card-decks' | 'training-materials' | 'workout-packs';
  priceEUR: number;
  priceUSD?: number;
  files: {
    name: string;
    src: string;
    type: string; // e.g., 'pdf', 'epub', 'zip'
    size: string; // e.g., '2.5 MB'
  }[];
   purchaseLink: string;
   previewImages: {
     src: string;
     alt: string;
     width?: number;
     height?: number;
   }[];
   whatYouLearn: string[]; // Array of learning outcomes
   published?: boolean; // Set to false to hide product while building
}

export const products: Product[] = [
   // First Book - Ruck Your Way Out (incomplete, not published)
    {
      id: 'ruck-your-way-out',
      sku: 'RR-BOOK-003',
      title: 'Ruck Your Way Out: How Walking with Weight Lifts Loneliness, Builds Resilience, and Connects You to People Who Actually Show Up',
      description: `## What's Inside (132 pages, 12 chapters, 4 appendices)

### The Science & Practice
• **Chapter 1-5:** Why loneliness is a physical health crisis — and how rucking addresses it
• **Chapter 6-8:** Your first 12 weeks: week-by-week progression + how to build a ruck club
• **Chapter 9-11:** Rucking for mental health, grief, and anxiety — going deeper

### Real Stories
• Three composite stories from the rucking community: the woman who rucked through burnout, the man who moved to a new city, the older woman returning to activity

### Practical Resources
• **Appendix A:** 12-week starter programme (Foundation → Extension → Building → Community → Consolidation → Milestone)
• **Appendix B:** Weight management & safety guidelines
• **Appendix C:** Directory of ruck clubs + how to start your own
• **Appendix D:** 16 key research references (WHO, Surgeon General, Harvard, Oxford)

---

## You'll Discover:

✓ Why rucking burns 2-3x more calories than walking (without running's joint impact)
✓ How shared physical effort creates irreversible trust (the "military bond" made civilian)
✓ The 4kg rule: why starting lighter than you think works better
✓ How ruck clubs create unconditional belonging — no fitness required
✓ Why "showing up" beats "working out" for building identity

---

## Who This Is For

→ People feeling socially disconnected despite being "connected" online
→ Anyone who's tried gyms, apps, and clubs without finding real community
→ Those returning to fitness after 30, 50, or a health scare
→ Mental health practitioners looking for adjunct therapies
→ Anyone who wants to start a ruck club in their city

---

## What You Get

📖 **Full PDF ebook** (132 pages, print-optimized)
📱 **EPUB & MOBI formats** for any device
📋 **Printable 12-week checklist** (separate PDF)
🗺️ **Ruck club starter kit** (outreach templates + meeting structure)

---

*"Loneliness is not a character flaw. If anything, it is a biological alarm system which has evolved to tell you that something your species needs is missing."* — From Chapter 1`,
      category: 'books',
      priceEUR: 15.5,
      priceUSD: 17,
      files: [
        {
          name: 'Ruck Your Way Out - PDF',
          src: 'https://ruckingrevolution.gumroad.com/l/ruck-your-way-out',
          type: 'pdf',
          size: '132 pages'
        },
        {
          name: 'Ruck Your Way Out - EPUB',
          src: 'https://ruckingrevolution.gumroad.com/l/ruck-your-way-out',
          type: 'epub',
          size: '132 pages'
        },
        {
          name: 'Ruck Your Way Out - MOBI',
          src: 'https://ruckingrevolution.gumroad.com/l/ruck-your-way-out',
          type: 'mobi',
          size: '132 pages'
        }
      ],
      purchaseLink: 'https://ruckingrevolution.gumroad.com/l/ruck-your-way-out',
      previewImages: [
        {
          src: '/brand-build/Rucking Revolution Design System/assets/products/rywo-c-fieldnote.svg',
          alt: 'Cover of Ruck Your Way Out field guide showing title and subtitle'
        },
        {
          src: '/brand-build/Rucking Revolution Design System/assets/products/rywo-a-companions.svg',
          alt: 'Interior spread showing community stories and ruck club blueprints'
        },
        {
          src: '/brand-build/Rucking Revolution Design System/assets/products/rywo-b-weight.svg',
          alt: 'Interior spread showing weight progression and safety guidelines'
        }
      ],
      whatYouLearn: [
        'Why rucking burns 2-3x more calories than walking (without running\'s joint impact)',
        'How shared physical effort creates irreversible trust (the "military bond" made civilian)',
        'The 4kg rule: why starting lighter than you think works better',
        'How ruck clubs create unconditional belonging — no fitness required',
        'Why "showing up" beats "working out" for building identity'
      ],
      published: false
    },
   // Lead Book - Your First Ruck (published)
   {
     id: 'your-first-ruck',
    sku: 'RR-EBOOK-001',
    title: 'Your First Ruck',
    description: 'A 30-day beginner plan for strength, stamina, and consistency. Start simple, build strength, stay consistent.',
    category: 'books',
    priceEUR: 7.99,
    files: [
      {
        name: 'Your First Ruck - PDF',
        src: '/files/products/your-first-ruck.pdf',
        type: 'pdf',
        size: '4.8 MB'
      },
      {
        name: 'Your First Ruck - EPUB',
        src: '/files/products/your-first-ruck.epub',
        type: 'epub',
        size: '3.2 MB'
      }
    ],
    purchaseLink: '/library/your-first-ruck',
    previewImages: [
      {
        src: '/images/products/your-first-ruck-cover.svg',
        alt: 'Cover of Your First Ruck ebook showing title and subtitle: A 30-Day Beginner Plan for Strength, Stamina, and Consistency'
      },
      {
        src: '/images/products/your-first-ruck-spread-01.svg',
        alt: 'Interior spread from Your First Ruck showing weekly training schedule and progression'
      },
      {
        src: '/images/products/your-first-ruck-spread-02.svg',
        alt: 'Interior spread from Your First Ruck showing gear checklist and form tips'
      }
    ],
    whatYouLearn: [
      'How to build a consistent rucking habit in 30 days',
      'Proper form and load progression for beginners',
      'Gear essentials without overspending'
    ],
    published: true
  },
  // Existing products (published: false)
  {
    id: 'prod-1',
    sku: 'RR-BOOK-001',
    title: 'The Rucking Revolution: Foundations',
    description: 'Comprehensive guide to rucking as a discipline, covering history, principles, and basic techniques for beginners and experienced practitioners alike.',
    category: 'books',
    priceEUR: 24.99,
    files: [
      {
        name: 'The Rucking Revolution: Foundations - PDF',
        src: '/files/products/rr-foundations.pdf',
        type: 'pdf',
        size: '8.2 MB'
      },
      {
        name: 'The Rucking Revolution: Foundations - EPUB',
        src: '/files/products/rr-foundations.epub',
        type: 'epub',
        size: '6.1 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-foundations',
     previewImages: [
       {
         src: '/images/products/rr-foundations-cover.jpg',
         alt: 'Cover of The Rucking Revolution: Foundations book showing title and author name'
       },
       {
         src: '/images/products/rr-foundations-preview1.jpg',
         alt: 'Preview page showing chapter on proper rucking form and technique'
       },
       {
         src: '/images/products/rr-foundations-preview2.jpg',
         alt: 'Preview page showing training progression charts and workout examples'
       }
     ],
     whatYouLearn: [
       'History and evolution of rucking as a discipline',
       'Core principles of loaded marching and proper form',
       'Basic techniques for beginners and experienced practitioners',
       'How to progress from walking to weighted rucking',
       'Essential gear selection for different terrains and distances'
     ],
     published: false
  },
  {
    id: 'prod-2',
    sku: 'RR-BOOK-002',
    title: 'Advanced Rucking: Community Applications',
    description: 'Advanced guide for experienced ruckers focusing on community applications, event planning, and group readiness.',
    category: 'books',
    priceEUR: 29.99,
    files: [
      {
        name: 'Advanced Rucking: Community Applications - PDF',
        src: '/files/products/rr-advanced.pdf',
        type: 'pdf',
        size: '12.5 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-advanced',
     previewImages: [
       {
         src: '/images/products/rr-advanced-cover.jpg',
         alt: 'Cover of Advanced Rucking: Community Applications book'
       },
       {
         src: '/images/products/rr-advanced-preview1.jpg',
         alt: 'Preview page showing advanced movement techniques under load'
       },
       {
         src: '/images/products/rr-advanced-preview2.jpg',
         alt: 'Preview page showing event planning templates and checklists'
       }
     ],
     whatYouLearn: [
       'Advanced movement techniques under load',
       'Mission planning and operational readiness',
       'Community applications of rucking',
       'Leadership development through group rucking',
       'How to organize and lead rucking events'
     ],
     published: false
  },
  {
    id: 'prod-3',
    sku: 'RR-PLAN-001',
    title: '12-Month Rucking Periodization Plan',
    description: 'Complete year-long training program with monthly goals, weekly schedules, and progression templates for building endurance, strength, and resilience.',
    category: 'training-materials',
    priceEUR: 19.99,
    files: [
      {
        name: '12-Month Rucking Periodization Plan - PDF',
        src: '/files/products/rr-periodization.pdf',
        type: 'pdf',
        size: '5.8 MB'
      },
      {
        name: '12-Month Rucking Periodization Plan - Excel Template',
        src: '/files/products/rr-periodization.xlsx',
        type: 'spreadsheet',
        size: '1.2 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-periodization',
     previewImages: [
       {
         src: '/images/products/rr-periodization-cover.jpg',
         alt: 'Cover of 12-Month Rucking Periodization Plan'
       },
       {
         src: '/images/products/rr-periodization-preview1.jpg',
         alt: 'Sample monthly overview showing goals and key workouts'
       },
       {
         src: '/images/products/rr-periodization-preview2.jpg',
         alt: 'Weekly schedule template with load, distance, and progression guidelines'
       }
     ],
     whatYouLearn: [
       'How to create a year-long training plan',
       'Monthly goal setting and progression strategies',
       'Weekly schedule templates for different fitness levels',
       'How to adjust training based on recovery and performance',
       'Building endurance, strength, and resilience systematically'
     ],
     published: false
  },
  {
    id: 'prod-4',
    sku: 'RR-GUIDE-001',
    title: 'Rucking Gear Selection Guide',
    description: 'Expert recommendations for backpacks, footwear, clothing, and accessories based on different use cases, budgets, and body types.',
    category: 'guides',
    priceEUR: 14.99,
    files: [
      {
        name: 'Rucking Gear Selection Guide - PDF',
        src: '/files/products/rr-gear-guide.pdf',
        type: 'pdf',
        size: '7.3 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-gear-guide',
     previewImages: [
       {
         src: '/images/products/rr-gear-guide-cover.jpg',
         alt: 'Cover of Rucking Gear Selection Guide'
       },
       {
         src: '/images/products/rr-gear-guide-preview1.jpg',
         alt: 'Comparison chart of different backpack frames and suspension systems'
       },
       {
         src: '/images/products/rr-gear-guide-preview2.jpg',
         alt: 'Footwear selection guide based on terrain and distance requirements'
       }
     ],
     whatYouLearn: [
       'How to choose the right backpack for different rucking scenarios',
       'Footwear selection based on terrain, distance, and load',
       'Clothing systems for various weather conditions',
       'Essential accessories for safety and comfort',
       'Budget-friendly gear options without sacrificing quality'
     ],
     published: false
  },
  {
    id: 'prod-5',
    sku: 'RR-NUTR-001',
    title: 'Fueling the Ruck: Nutrition for Loaded Marching',
    description: 'Science-based nutrition strategies for rucking, including meal plans, timing guidelines, and field-expedient solutions for sustained performance.',
    category: 'guides',
    priceEUR: 17.99,
    files: [
      {
        name: 'Fueling the Ruck: Nutrition for Loaded Marching - PDF',
        src: '/files/products/rr-nutrition.pdf',
        type: 'pdf',
        size: '9.1 MB'
      },
      {
        name: 'Fueling the Ruck: Recipe Collection',
        src: '/files/products/rr-nutrition-recipes.zip',
        type: 'zip',
        size: '4.7 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-nutrition',
     previewImages: [
       {
         src: '/images/products/rr-nutrition-cover.jpg',
         alt: 'Cover of Fueling the Ruck: Nutrition for Loaded Marching'
       },
       {
         src: '/images/products/rr-nutrition-preview1.jpg',
         alt: 'Sample weekly meal plan for endurance rucking preparation'
       },
       {
         src: '/images/products/rr-nutrition-preview2.jpg',
         alt: 'Hydration and electrolyte balance guidelines for different climates'
       }
     ],
     whatYouLearn: [
       'Science-based nutrition strategies for rucking',
       'Meal planning for sustained performance',
       'Timing guidelines for pre, during, and post-ruck nutrition',
       'Field-expedient solutions for extended operations',
       'Hydration and electrolyte balance for different climates'
     ],
     published: false
  },
  {
    id: 'prod-6',
    sku: 'RR-LEAD-001',
    title: 'Leadership Under Load: Rucking-Based Team Development',
    description: 'Facilitator guide for using rucking activities to develop team cohesion, communication, and leadership skills in organizational settings.',
    category: 'training-materials',
    priceEUR: 22.99,
    files: [
      {
        name: 'Leadership Under Load: Facilitator Guide - PDF',
        src: '/files/products/rr-leadership.pdf',
        type: 'pdf',
        size: '10.4 MB'
      },
      {
        name: 'Leadership Under Load: Activity Cards',
        src: '/files/products/rr-leadership-cards.pdf',
        type: 'pdf',
        size: '3.2 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-leadership',
     previewImages: [
       {
         src: '/images/products/rr-leadership-cover.jpg',
         alt: 'Cover of Leadership Under Load: Rucking-Based Team Development'
       },
       {
         src: '/images/products/rr-leadership-preview1.jpg',
         alt: 'Sample team challenge activity with objectives and debrief questions'
       },
       {
         src: '/images/products/rr-leadership-preview2.jpg',
         alt: 'Progression framework for developing leadership skills through rucking'
       }
     ],
     whatYouLearn: [
       'How to use rucking activities for team development',
       'Building team cohesion through shared challenges',
       'Communication techniques under physical stress',
       'Leadership skills development through rucking',
       'Designing effective team-based rucking programs'
     ],
     published: false
  },
  {
    id: 'prod-7',
    sku: 'RR-FAM-001',
    title: 'Family Rucking: Building Resilience Across Generations',
    description: 'Guide for introducing rucking to families with age-appropriate activities, games, and progression systems for children and adults.',
    category: 'guides',
    priceEUR: 16.99,
    files: [
      {
        name: 'Family Rucking: Building Resilience Across Generations - PDF',
        src: '/files/products/rr-family.pdf',
        type: 'pdf',
        size: '6.7 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-family',
     previewImages: [
       {
         src: '/images/products/rr-family-cover.jpg',
         alt: 'Cover of Family Rucking: Building Resilience Across Generations'
       },
       {
         src: '/images/products/rr-family-preview1.jpg',
         alt: 'Age-appropriate weight and distance guidelines chart'
       },
       {
         src: '/images/products/rr-family-preview2.jpg',
         alt: 'Sample family rucking challenge card with game elements'
       }
     ],
     whatYouLearn: [
       'How to introduce rucking to family members of all ages',
       'Age-appropriate weight and distance guidelines',
       'Family-friendly rucking games and activities',
       'Building resilience across generations through shared challenges',
       'Creating sustainable family rucking habits'
     ],
     published: false
  },
  {
    id: 'prod-8',
    sku: 'RR-MIND-001',
    title: 'Rucking Mindfulness: Meditation in Motion',
    description: 'Practical guide to integrating mindfulness practices with rucking for stress reduction, mental clarity, and enhanced mind-body connection.',
    category: 'guides',
    priceEUR: 18.99,
    files: [
      {
        name: 'Rucking Mindfulness: Meditation in Motion - PDF',
        src: '/files/products/rr-mindfulness.pdf',
        type: 'pdf',
        size: '8.9 MB'
      },
      {
        name: 'Rucking Mindfulness: Audio Practices',
        src: '/files/products/rr-mindfulness-audio.zip',
        type: 'zip',
        size: '45.2 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-mindfulness',
     previewImages: [
       {
         src: '/images/products/rr-mindfulness-cover.jpg',
         alt: 'Cover of Rucking Mindfulness: Meditation in Motion'
       },
       {
         src: '/images/products/rr-mindfulness-preview1.jpg',
         alt: 'Breathing techniques synchronized with rucking cadence'
       },
       {
         src: '/images/products/rr-mindfulness-preview2.jpg',
         alt: 'Sensory awareness exercises for different environments'
       }
     ],
     whatYouLearn: [
       'How to integrate mindfulness practices with rucking',
       'Breathing techniques for stress reduction',
       'Sensory awareness exercises for different environments',
       'Mind-body connection enhancement through movement',
       'Practical meditation techniques for active individuals'
     ],
     published: false
  },
  {
    id: 'prod-9',
    sku: 'RR-CERT-001',
    title: 'Rucking Instructor Certification Program',
    description: 'Complete certification program for becoming a certified Rucking Revolution instructor, including materials, assessments, and teaching resources.',
    category: 'training-materials',
    priceEUR: 199.99,
    files: [
      {
        name: 'Rucking Instructor Certification - PDF Manual',
        src: '/files/products/rr-instructor-manual.pdf',
        type: 'pdf',
        size: '25.3 MB'
      },
      {
        name: 'Instructor Assessment Tools',
        src: '/files/products/rr-instructor-assessments.zip',
        type: 'zip',
        size: '8.7 MB'
      },
      {
        name: 'Teaching Resources and Templates',
        src: '/files/products/rr-instructor-resources.zip',
        type: 'zip',
        size: '12.1 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-instructor-cert',
     previewImages: [
       {
         src: '/images/products/rr-instructor-cover.jpg',
         alt: 'Cover of Rucking Instructor Certification Program manual'
       },
       {
         src: '/images/products/rr-instructor-preview1.jpg',
         alt: 'Sample lesson plan template for beginner rucking classes'
       },
       {
         src: '/images/products/rr-instructor-preview2.jpg',
         alt: 'Skills assessment checklist for instructor certification'
       }
     ],
     whatYouLearn: [
       'How to teach rucking fundamentals to beginners',
       'Advanced rucking techniques and progressions',
       'How to design safe and effective rucking programs',
       'Assessment and evaluation techniques for rucking skills',
       'Business and marketing strategies for rucking instructors'
     ],
     published: false
  },
  {
    id: 'prod-10',
    sku: 'RR-CHAL-001',
    title: '30-Day Rucking Challenge Pack',
    description: 'Motivational package with daily challenges, progress tracking, and community support to build a consistent rucking habit over 30 days.',
    category: 'workout-packs',
    priceEUR: 12.99,
    files: [
      {
        name: '30-Day Rucking Challenge Pack - PDF',
        src: '/files/products/rr-challenge.pdf',
        type: 'pdf',
        size: '4.2 MB'
      },
      {
        name: '30-Day Rucking Challenge - Printable Tracker',
        src: '/files/products/rr-challenge-tracker.pdf',
        type: 'pdf',
        size: '1.8 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-challenge',
     previewImages: [
       {
         src: '/images/products/rr-challenge-cover.jpg',
         alt: 'Cover of 30-Day Rucking Challenge Pack'
       },
       {
         src: '/images/products/rr-challenge-preview1.jpg',
         alt: 'Daily challenge card example with varying loads and distances'
       },
       {
         src: '/images/products/rr-challenge-preview2.jpg',
         alt: 'Progress tracking sheet with monthly overview and weekly reflections'
       }
     ],
     whatYouLearn: [
       'How to build a consistent rucking habit',
       'Daily challenges to keep you motivated',
       'Progress tracking techniques for long-term success',
       'Community support strategies for accountability',
       'How to overcome common obstacles to regular rucking'
     ],
     published: false
  },
  {
    id: 'prod-11',
    sku: 'RR-MAP-001',
    title: 'Historic Rucking Routes: Volume 1',
    description: 'Collection of historically significant rucking and marching routes from around the world with detailed maps, historical context, and modern adaptations.',
    category: 'guides',
    priceEUR: 21.99,
    files: [
      {
        name: 'Historic Rucking Routes: Volume 1 - PDF',
        src: '/files/products/rr-historic-routes.pdf',
        type: 'pdf',
        size: '15.6 MB'
      },
      {
        name: 'Historic Rucking Routes: GPX Files',
        src: '/files/products/rr-historic-routes-gpx.zip',
        type: 'zip',
        size: '3.4 MB'
      }
    ],
     purchaseLink: 'https://ruckingrevolution.org/store/rr-historic-routes',
     previewImages: [
       {
         src: '/images/products/rr-historic-routes-cover.jpg',
         alt: 'Cover of Historic Rucking Routes: Volume 1'
       },
       {
         src: '/images/products/rr-historic-routes-preview1.jpg',
         alt: 'Sample route map showing historical significance and waypoints'
       },
       {
         src: '/images/products/rr-historic-routes-preview2.jpg',
         alt: 'Elevation profile and difficulty rating for a sample historic route'
       }
     ],
     whatYouLearn: [
       'Historically significant rucking and marching routes from around the world',
       'How to adapt historic routes for modern rucking',
       'Navigation and map reading skills for rucking',
       'Historical context and significance of famous marches',
       'How to create your own historic rucking route'
     ],
     published: false
  },
  {
    id: 'prod-12',
    sku: 'RR-APP-001',
    title: 'Rucking Revolution Mobile App Subscription',
    description: 'Annual subscription to the Rucking Revolution mobile app featuring workout tracking, route planning, community challenges, and exclusive content.',
    category: 'training-materials',
    priceEUR: 39.99,
    files: [
      {
        name: 'Rucking Revolution App - iOS',
        src: '/apps/rr-app-ios.ipa',
        type: 'ios-app',
        size: '85.3 MB'
      },
      {
        name: 'Rucking Revolution App - Android',
        src: '/apps/rr-app-android.apk',
        type: 'android-app',
        size: '78.9 MB'
      }
    ],
    purchaseLink: 'https://ruckingrevolution.org/app',
    previewImages: [
      {
        src: '/images/products/rr-app-cover.jpg',
        alt: 'Rucking Revolution mobile app icon and name'
      },
      {
        src: '/images/products/rr-app-preview1.jpg',
        alt: 'Dashboard showing workout metrics and progress tracking'
      },
      {
        src: '/images/products/rr-app-preview2.jpg',
        alt: 'Route planning interface with map and elevation profile'
      }
    ],
    whatYouLearn: [
      'How to track and analyze your rucking workouts',
      'Plan and navigate routes with GPS integration',
      'Participate in community challenges and leaderboards',
      'Access exclusive content and training plans',
      'Connect with other ruckers and share progress'
    ],
    published: false
  },
  // Coming Soon placeholder product
  {
    id: 'coming-soon',
    sku: 'RR-COMING-SOON',
    title: 'Coming Soon!',
    description: 'New rucking resources, guides, and training materials are on the way. Stay tuned for updates!',
    category: 'guides',
    priceEUR: 0,
    files: [],
    purchaseLink: '#',
    previewImages: [
      {
        src: '/images/products/coming-soon.jpg',
        alt: 'Coming Soon - New products launching soon'
      }
    ],
    whatYouLearn: [],
    published: true
  }
];
