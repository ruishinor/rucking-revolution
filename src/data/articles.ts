export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  heroImage: {
    src: string;
    alt: string;
  };
  author: string;
  date: string; // ISO date string
  readingTime: number; // in minutes
  tags: string[];
  body: string; // markdown content
  estimatedCaloriesBurned?: number; // optional, for training-related articles
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'why-shared-adversity-builds-teams',
    title: 'Why Shared Adversity Builds Teams',
    excerpt: 'Exploring how challenging experiences in rucking forge stronger bonds and leadership qualities.',
    heroImage: {
      src: '/images/articles/why-shared-adversity-hero.jpg',
      alt: 'Group of diverse individuals rucking together through challenging terrain, demonstrating teamwork and shared adversity',
    },
    author: 'Red Rucker',
    date: '2024-01-15',
    readingTime: 8,
    tags: ['leadership', 'team-building', 'psychology'],
    body: `# Why Shared Adversity Builds Teams

In the crucible of challenging experiences, teams are forged. When we ruck together under load, facing miles of uncertain terrain, something profound happens. The shared struggle strips away pretense and reveals our true capacity for collective resilience.

## The Science of Shared Struggle

Research in group psychology shows that shared adversity creates stronger bonds than shared success. When we overcome obstacles together, our brains release oxytocin and other neurochemicals that enhance trust and cooperation. This isn't just theoretical—it's measurable in unit cohesion and performance metrics.

> "The weight on our backs becomes lighter when we carry it together. Not because the load decreases, but because our shared purpose transforms how we experience it."

### Three Key Takeaways:
- Shared adversity accelerates trust formation more reliably than shared comfort
- Physical challenges create neural pathways that associate effort with collective reward
- Teams that train together under load develop implicit communication that transfers to high-stress environments

In rucking, we don't just build endurance—we build the kind of teams that can withstand any mission. The miles we log together aren't just distance covered; they're investments in the human connections that make extraordinary achievements possible.

`,
    estimatedCaloriesBurned: 450,
  },
  {
    id: '2',
    slug: 'fundamentals-of-proper-rucking-form',
    title: 'Fundamentals of Proper Rucking Form',
    excerpt: 'Essential technique tips to prevent injury and maximize efficiency during loaded marches.',
    heroImage: {
      src: '/images/articles/rucking-form-hero.jpg',
      alt: 'Close-up of a rucker demonstrating proper posture: head up, shoulders back, core engaged, with weight distributed evenly',
    },
    author: 'Red Rucker',
    date: '2024-02-01',
    readingTime: 12,
    tags: ['technique', 'injury-prevention', 'beginners'],
    body: `# Fundamentals of Proper Rucking Form

Proper form isn't just about looking good—it's the difference between sustainable progress and debilitating injury. Whether you're carrying 15 pounds or 45, these principles apply universally.

## The Five Pillars of Rucking Form

1. **Posture**: Head neutral, eyes on the horizon, shoulders retracted but not tense
2. **Foot Strike**: Mid-foot landing with slight forward lean from ankles, not waist
3. **Arm Swing**: Natural 90-degree elbow angle, swinging opposite to leg movement
4. **Core Engagement**: Constant light bracing to stabilize spine against load shift
5. **Breathing**: Diaphragmatic breathing synchronized with steps

## Common Form Mistakes

- Leaning too far forward from the waist (causes back strain)
- Looking down at feet (creates cervical tension)
- Overstriding (increases joint impact)
- Letting shoulders round forward (compromises breathing)

## Equipment Considerations

Your ruck should sit high on your back, with the weight distributed between shoulder blades and hips. The hip belt (if used) should carry approximately 20-30% of the load.

`,
    estimatedCaloriesBurned: 320,
  },
  {
    id: '3',
    slug: 'nutrition-strategies-for-endurance-rucking',
    title: 'Nutrition Strategies for Endurance Rucking',
    excerpt: 'Fueling approaches for long-distance rucks, from extended treks to civilian challenges.',
    heroImage: {
      src: '/images/articles/rucking-nutrition-hero.jpg',
      alt: 'Spread of nutrient-dense foods suitable for rucking: lean proteins, complex carbohydrates, electrolytes, and hydration options',
    },
    author: 'Red Rucker',
    date: '2024-02-15',
    readingTime: 10,
    tags: ['nutrition', 'endurance', 'fueling'],
    body: `# Nutrition Strategies for Endurance Rucking

What you put in your body determines what you can get out of it—especially when miles and weight accumulate. Endurance rucking demands a thoughtful approach to fueling that balances immediate energy needs with sustained performance.

## Pre-Ruck Fueling (2-3 hours before)

Focus on complex carbohydrates with moderate protein and low fat:
- Oatmeal with banana and almond butter
- Whole grain toast with eggs and avocado
- Rice bowl with lean chicken and vegetables

## During the Ruck

Aim for 30-60g of carbohydrates per hour, depending on intensity and individual tolerance:
- Electrolyte water with carbohydrate gels
- Bananas or dried fruit
- Energy bars designed for endurance sports

## Post-Ruck Recovery

Within 30 minutes post-ruck, prioritize:
- 3:1 ratio of carbohydrates to protein
- Rehydration with electrolytes
- Anti-inflammatory foods (turmeric, ginger, berries)

`,
    estimatedCaloriesBurned: 500,
  },
  {
    id: '4',
    slug: 'mental-resilience-techniques-for-ruckers',
    title: 'Mental Resilience Techniques for Ruckers',
    excerpt: 'Psychological tools to maintain focus and motivation during challenging loaded marches.',
    heroImage: {
      src: '/images/articles/mental-resilience-hero.jpg',
      alt: 'Solo rucker focusing on distant goalpost, displaying determined expression despite visible fatigue and challenging weather conditions',
    },
    author: 'Red Rucker',
    date: '2024-03-01',
    readingTime: 9,
    tags: ['mental-health', 'resilience', 'psychology'],
    body: `# Mental Resilience Techniques for Ruckers

The body carries the load, but the mind carries the mission. When physical fatigue sets in during a long ruck, mental resilience becomes the determining factor in whether you finish strong or fall short.

## The Psychology of Endurance

Endurance activities like rucking create a unique psychological landscape where discomfort is constant and the finish line seems perpetually distant. Successful ruckers develop specific mental skills to navigate this terrain.

### Technique 1: Segmenting the Distance
Break the total distance into manageable chunks. Focus only on reaching the next landmark, not the final destination.

### Technique 2: Mantra Development
Create personal mantras that connect to your deeper purpose: "One step for my team," "This weight builds my resilience," or simply "Forward."

### Technique 3: Sensory Awareness
Instead of fighting discomfort, observe it neutrally. Notice the sensation in your feet, the rhythm of your breath, the pattern of your steps—without judgment.

### Technique 4: Gratitude Practice
Mid-ruck, mentally list three things you're grateful for in that moment. This shifts focus from suffering to appreciation.

`,
    estimatedCaloriesBurned: 280,
  },
  {
    id: '5',
    slug: 'building-rucking-programs-for-community-teams',
    title: 'Building Rucking Programs for Community Teams',
    excerpt: 'Evidence-based approaches to developing effective loaded march training for community resilience and capability.',
    heroImage: {
      src: '/images/articles/community-rucking-program-hero.jpg',
      alt: 'Community rucking group conducting progressive rucking training: starting with lighter loads and shorter distances, building to heavier loads over varied terrain',
    },
    author: 'Red Rucker',
    date: '2024-03-15',
    readingTime: 14,
    tags: ['community', 'training-programs', 'leadership'],
    body: `# Building Rucking Programs for Community Teams

Effective rucking programs don't happen by accident—they require systematic planning, progressive overload, and careful attention to injury prevention. The most successful teams treat rucking as a foundational skill, not just an occasional test.

## Principles of Progressive Rucking Training

1. **Start Light, Progress Slow**: Begin with loads no greater than 10-15% of body weight, increasing by no more than 10% weekly
2. **Vary the Terrain**: Incorporate hills, trails, and pavement to develop adaptable strength
3. **Monitor Recovery**: Track heart rate variability, sleep quality, and subjective fatigue markers
4. **Integrate Skills**: Combine rucking with navigation, communication drills, and practical problem-solving

## Sample 12-Week Progression

**Weeks 1-4**: Base Building
- 2x/week rucking
- Start: 2 miles @ 15% body weight
- Progress to: 4 miles @ 20% body weight

**Weeks 5-8**: Load Increase
- 2x/week rucking
- 4-6 miles @ 25-30% body weight
- Add terrain variation weekly

**Weeks 9-12**: Capability Specific
- 1x/week long ruck (8-10 miles @ 35-45% body weight)
- 1x/week skills integration ruck with navigation and team challenges

`,
    estimatedCaloriesBurned: 600,
  },
  {
    id: '6',
    slug: 'rucking-for-community-response',
    title: 'Rucking for Community Response',
    excerpt: 'How loaded carry training enhances capability for helping others in everyday situations and community events.',
    heroImage: {
      src: '/images/articles/community-response-rucking-hero.jpg',
      alt: 'Person assisting another individual with a sprained ankle during a community rucking event, demonstrating practical carrying techniques',
    },
    author: 'Red Rucker',
    date: '2024-04-01',
    readingTime: 11,
    tags: ['community', 'practical-skills', 'helping-others'],
    body: `# Rucking for Community Response

For anyone wanting to be capable of helping others in everyday situations, the ability to move effectively under load isn't just about fitness—it's a practical skill that directly impacts your ability to assist friends, family, and community members.

## Everyday Demands and Rucking Specificity

Regular people regularly encounter situations requiring loaded movement:
- Helping a friend with a sprained ankle to safety
- Carrying supplies during community events or charity drives
- Assisting elderly neighbors with groceries or equipment
- Supporting team members during group rucking activities

Rucking provides specific adaptations that transfer directly to these scenarios:
- Grip strength maintenance under fatigue
- Postural stability with shifting centers of gravity
- Cardiovascular efficiency while carrying awkward loads
- Mental resilience during prolonged physical efforts

## Training Considerations for Community Capability

**General Preparedness**: Focus on balanced load carrying for various real-world scenarios
**Team Support**: Practice weight shifting and equipment handling to assist teammates
**Practical Scenarios**: Simulate common helping situations like carrying bags, assisting with mobility, or moving supplies
**Endurance Building**: Develop the capacity to maintain capability over extended periods when needed

`,
    estimatedCaloriesBurned: 350,
  },
  {
    id: '7',
    slug: 'advanced-rucking-techniques-for-competitive-athletes',
    title: 'Advanced Rucking Techniques for Competitive Athletes',
    excerpt: 'Specialized methods for experienced ruckers seeking to improve speed, endurance, and load capacity.',
    heroImage: {
      src: '/images/articles/advanced-rucking-techniques-hero.jpg',
      alt: 'Elite rucker demonstrating efficient form at pace: minimal vertical oscillation, powerful arm drive, and smooth weight transfer',
    },
    author: 'Red Rucker',
    date: '2024-04-15',
    readingTime: 13,
    tags: ['advanced', 'performance', 'competition'],
    body: `# Advanced Rucking Techniques for Competitive Athletes

For those who have mastered the basics, rucking offers endless opportunities for refinement and performance enhancement. These advanced techniques separate recreational participants from competitive athletes.

## Biomechanical Optimization

### Ground Contact Time Reduction
Elite ruckers minimize ground contact time through:
- Increased cadence (steps per minute)
- More powerful forefoot push-off
- Enhanced proprioception and ankle stiffness

### Vertical Oscillation Minimization
Reducing unnecessary up-and-down movement conserves energy:
- Core stabilization to limit torso bounce
- Hip-driven rather than knee-driven stride
- Arm swing counter-rotation to balance momentum

## Load Carriage Efficiency

As loads increase beyond 30% of body weight, technique becomes even more critical:
- Hip engagement to transfer load from spine to pelvis
- Scapular retraction to prevent shoulder strain
- Breath synchronization with load shifts

## Periodization for Rucking Performance

**Off-Season (Months 1-3)**:
- Focus on strength foundation and aerobic base
- 2x/week rucking at moderate loads (20-25% body weight)
- Supplemental strength training

**Pre-Competition (Months 4-6)**:
- Increase rucking frequency to 3-4x/week
- Introduce interval work and tempo efforts
- Practice race-specific nutrition and gear

**Competition Phase (Months 7-9)**:
- Peak specificity: simulate event conditions
- Taper volume while maintaining intensity
- Fine-tune equipment and nutrition strategies

`,
    estimatedCaloriesBurned: 420,
  },
  {
    id: '8',
    slug: 'rucking-as-meditation-in-motion',
    title: 'Rucking as Meditation in Motion',
    excerpt: 'Exploring the mindfulness benefits of rhythmic loaded walking for stress reduction and mental clarity.',
    heroImage: {
      src: '/images/articles/rucking-meditation-hero.jpg',
      alt: 'Person rucking alone through forest trail at sunrise, eyes closed slightly, demonstrating mindful presence and connection with nature',
    },
    author: 'Red Rucker',
    date: '2024-05-01',
    readingTime: 10,
    tags: ['mindfulness', 'mental-health', 'spirituality'],
    body: `# Rucking as Meditation in Motion

In our hyper-connected world, finding genuine mental quiet can feel impossible. Yet many discover that the simple act of walking with weight creates a unique doorway to meditative states—what some call "rucking meditation."

## The Mechanics of Moving Meditation

Several elements of rucking naturally induce meditative states:
- **Rhythmic Repetition**: The consistent left-right-left-right pattern creates auditory and kinesthetic rhythm that can entrain brainwaves
- **Sensory Gating**: The mild discomfort of carrying weight focuses attention inward, reducing external distraction
- **Environmental Engagement**: Being outdoors exposes us to natural patterns (fractals in trees, flowing water) that promote alpha brainwave states
- **Breath-Body Connection**: The load creates natural feedback for diaphragmatic breathing practice

## Practical Mindfulness Techniques for Rucking

### Anchor Points
Choose physical sensations to return to when mind wanders:
- Pressure of shoulder straps
- Feeling of feet contacting ground
- Temperature of air on skin

### Sensory Expansion
Periodically expand awareness to notice:
- Three things you can hear
- Two things you can smell
- One thing you can feel beyond the ruck

### Letting Go Practice
Imagine each step releasing a worry or stressor, physically leaving it behind on the trail.

`,
    estimatedCaloriesBurned: 250,
  },
  {
    id: '9',
    slug: 'family-rucking-building-resilience-together',
    title: 'Family Rucking: Building Resilience Together',
    excerpt: 'Guidance for introducing children and partners to rucking as a shared activity that develops strength and connection.',
    heroImage: {
      src: '/images/articles/family-rucking-hero.jpg',
      alt: 'Multi-generational family group (parents, two children, grandparent) rucking together on woodland trail, laughing and interacting',
    },
    author: 'Red Rucker',
    date: '2024-05-15',
    readingTime: 9,
    tags: ['family', 'beginners', 'community'],
    body: `# Family Rucking: Building Resilience Together

Rucking isn't just for soldiers and athletes—it's a remarkably accessible activity that families can enjoy together, building not just physical strength but shared resilience and lasting memories.

## Why Rucking Works for Families

### Scalable Challenge
The beauty of rucking is its infinite scalability:
- Toddlers can carry small backpacks with water bottles
- Children can carry age-appropriate weights (start with 5-10% of body weight)
- Adults can adjust loads to match fitness levels
- Everyone moves at their own pace while staying together

### Shared Accomplishment
Few activities create as clear a sense of shared achievement as completing a ruck together. When everyone finishes, regardless of individual speed or load, there's a collective sense of "we did this."

### Conversation Mileage
The side-by-side nature of walking (rather than face-to-face) often facilitates deeper conversation, especially with teenagers who might resist direct questioning.

## Age-Appropriate Guidelines

**Ages 3-6**:
- Focus on fun and exploration
- Carry lightweight items (teddy bear, small water bottle)
- Distance: 0.5-1 mile max
- Make it a game: "find the red leaf," "count the birds"

**Ages 7-12**:
- Introduce concept of "purposeful weight"
- Start with 5% body weight, max 10%
- Distance: 1-2 miles
- Teach basic form: stand tall, look ahead

**Teens (13-18)**:
- Can handle 10-15% body weight
- Distance: 2-4 miles
- Incorporate navigation or challenge elements

`,
    estimatedCaloriesBurned: 180,
  },
  {
    id: '10',
    slug: 'rucking-gear-guide-essentials-for-every-mission',
    title: 'Rucking Gear Guide: Essentials for Every Mission',
    excerpt: 'Comprehensive breakdown of necessary equipment, from rucksacks to footwear, with recommendations for different use cases.',
    heroImage: {
      src: '/images/articles/rucking-gear-guide-hero.jpg',
      alt: 'Layout of essential rucking gear: quality backpack, proper footwear, moisture-wicking clothing, hydration system, and basic first aid kit',
    },
    author: 'Red Rucker',
    date: '2024-06-01',
    readingTime: 12,
    tags: ['gear', 'equipment', 'beginners'],
    body: `# Rucking Gear Guide: Essentials for Every Mission

Having the right gear doesn't just make rucking more comfortable—it directly impacts performance, safety, and long-term sustainability. This guide covers the essentials for everyone from beginners to experienced ruckers.

## The Ruck: Your Foundation

Not all backpacks are created equal for rucking. Look for:
- **Frame Structure**: Internal or external frame for load distribution
- **Hip Belt**: Wide, padded belt to transfer weight to legs (essential for loads over 20lbs)
- **Shoulder Straps**: Contoured, padded straps with sternum strap for stability
- **Material**: Durable, water-resistant fabrics (500D Cordura or similar)
- **Accessibility**: Multiple compartments for organization

## Footwear: Where the Rubber Meets the Road

Your feet are your foundation—invest accordingly:
- **Support**: Match to your arch type and pronation tendencies
- **Cushioning**: Balance between protection and ground feel
- **Durability**: Outsole designed for abrasion resistance
- **Break-in Time**: Always foot-march new shoes before using in ruck

## Clothing Systems

Avoid cotton at all costs. Instead, use a layered approach:
- **Base Layer**: Moisture-wicking synthetic or merino wool
- **Mid Layer**: Insulating fleece or lightweight puffy (as needed)
- **Outer Layer**: Waterproof/windproof breathable shell
- **Accessories**: Hat, gloves, socks (merino wool or synthetic blends)

## Hydration and Nutrition Systems

- **Water Capacity**: Minimum 2L capacity for extended rucks
- **Accessibility**: Easy to drink while moving (consider hose system)
- **Food Storage**: Secure, accessible pockets for snacks
- **Emergency**: Always carry extra rations and water purification

`,
    estimatedCaloriesBurned: 200,
  },
];