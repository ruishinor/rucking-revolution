export interface AAR {
  id: string;
  title: string;
  date: string; // ISO date
  author: string;
  conditions: string;
  planned: string[];   // what was planned / objectives
  actual: string[];    // what actually happened
  whatWentWell: string[]; // what specifically went well
  improvements: string[]; // what could be improved
  lessonsLearned: string[];
  heroImage?: {
    src: string;
    alt: string;
  };
  location: string;   // location of the event
  approved: boolean;  // moderation state
  
  // Optional fields (all optional)
  participantsStarted?: number;
  participantsCompleted?: number;
  classNumber?: string;
  duration?: number; // in minutes
  distance?: number; // in kilometers
  individualWeight?: number; 
  individualWeightUnit?: 'kg' | 'lbs';
  
  // Deprecated - use individualWeight instead
  load?: number;
  // Deprecated - use participantsCompleted instead  
  participants?: number;
  
  // Original free-form text submission
  originalText?: string;
}

export const aarEntries: AAR[] = [
  // Normandie 2014
  {
    id: 'aar-normandie-2014-06',
    title: 'Normandie 2014 - After Action Review',
    date: '2014-06-08',
    author: 'Red Rucker',
    duration: 600,
    distance: 18.0,
    individualWeight: 35,
    individualWeightUnit: 'lbs',
    classNumber: '1046',
    participantsStarted: 30,
    participantsCompleted: 28,
    conditions: 'Clear, 18°C, historical battlefield terrain, significant elevation',
    planned: [],
    actual: [
      'Completed first GORUCK Challenge (Event #1046)',
      '8-10 Hours, 15-20 Miles, with pack',
      'Pass rate 94%'
    ],
    whatWentWell: [],
    improvements: [],
    lessonsLearned: [
      'Signed up inspired and recommended by guys met in Munich',
      'These challenges show you in the most literal way that no matter how hard things seem, you can get through it',
      'They build better people by showing you exactly what you are made of',
      'The people that make it to the end are people just like you - scared and maybe a little unsure, but tough as hell'
    ],
    location: 'Normandy, France',
    originalText: `Normandie, June 2014

Pre-event:
Signed for my first GoRuck Challenge in Normandy, France - June 6th. Inspired and recommended by the guys I met in Munich.
8-10 Hours, 15-20 Miles, with pack. Pass rate 94%.
"The GORUCK Challenge is a team event. Think of it as a slice of Special Operations training where - from start to finish - a Special Operations Cadre challenges, teaches, and inspires your small team to do more than you ever thought possible. Leadership is taught and teamwork is demanded on missions spanning the best of your city. "

This sums it up so well:

"You're strong, and you can do hard things. These challenges are more than just "tough guy army shit". They show you in the most literal way, that no matter how hard things see, you can get through it. It sucks, sure, but in the end, you're alive and better ready to handle your daily struggles. I think it's good to show yourself that in a very real, very tangible way. They build better people by showing you exactly what you're made of. And the people that make it to the end are people just like you. Scared, and maybe a little unsure, but when it boils down to it, tough as hell and fully capable of [throat-punching the demons they struggle with]."`,
    approved: true
  },

  // Spartan 2014
  {
    id: 'aar-spartan-2014-09',
    title: 'Post Spartan 2014 - After Action Review',
    date: '2014-09-14',
    author: 'Red Rucker',
    duration: 300,
    distance: 12.0,
    individualWeight: 30,
    individualWeightUnit: 'lbs',
    conditions: 'Clear, 22°C, mixed terrain with obstacle course',
    planned: [],
    actual: [
      'Completed Spartan Beast',
      'Four randoms from all over the world as team',
      'Course was muddy, making it a fun-run rather than challenge',
      'Disappointed with course - not challenging enough',
      'Some obstacles qualified for Beast in distance but not hardship',
      'Burpee penalties for failed obstacles (rope climb - mud made impossible, javelin throw never managed)',
      'About 1/4 of obstacles were good challenges',
      'Achieved Trifecta goal for the year',
      'Pre-race: showed up with empty Camelbak, no water stations available'
    ],
    whatWentWell: [],
    improvements: [],
    lessonsLearned: [
      'If not racing for time, less point to Spartan Race',
      'Some people spent 5-6 hours on a 2.5-3hr course - same result as those who finished fast',
      'GORUCK opened up a new world - teambuilding through pain and suffering',
      'GORUCK is where mind and body is'
    ],
    location: 'UK',
    originalText: `Post Spartan 2014

I'm sure people are sick of my long posts, and this will probably be the last of it for a while. Hell, in a few weeks I'll even be deactivating my account, so appreciate it while you can. 
My (most likely) last Spartan Race has come and gone this past weekend. Last due to several reasons, despite me loving obstacle courses. Among these reasons are that I'm never racing for time, always preferring and ending up with, a team - random or not. We wound up being four randoms from all over the world.
 GORUCK opened up a new world to me, the world where I feel I belong more; a world of teambuilding through pain and suffering and long mileage. A world where there are standards to be met.
Sorry to say, the rest is not a good/nice/fun read.
 Participating in this past weekends Beast, I also took note, and settled with, how if you're not racing for time, there's less of a point to SR. Some people spent 5-6 hours on a 2,5-3hr course, walking through it. In the end it was all the same. I talked with a few others, and those agreed (unaffected by me or others) that this one at least, was a dissappointing course. It just really was not challenging. Sure, some of the obstacles qualified for a Beast-term in distance, but not hardship, and not all that even. It was muddy, as I've said before, making it a fun-run instead. Thats not a bad thing. 
Pre-race, I showed up with an empty Camelbak, expecting a water-station at the least, or hoses to fill with. Especially when the race had insisted so, so, much on people bringing Camelbaks and the like, making sure to hydrate enough! I asked volunteers, Security, staff and managers - and while most had no answer, the ones who did, said that no, the only water within a mile was for finishers. I was advised to go to the water-station a mile in! So, I ran with an empty 'bak. 
The race was balanced with 50/50 good/not so good overall, Id say. What I really do like though, as always, is the people I meet, and whenever you actually get a challenge. Most of my dissappointment comes from me just expecting more, especially for a Beast. I had Burpee-penalties for not making obstacles, yes. Like rope-climb, which I never had an issue with, this time I just couldn't even grab and hold the rope, due to all the mud. Or the javelin/spear-throw, which I've never managed. There were a few challenges nonetheless, maybe 1/4 and I liked those a lot. Its always nice to overcome, and thats what I show up for, with or without a team. 
The Spartan stuff in media is nice, encouraging and good for the society overall, all pro for that. I've recently also had a change in view about the founder, but less on that. My aim was a Trifecta this year, doing all 3 formats, as a pre-cursor to something else, and I've done that. I was just expecting/ hoping to need more training. If I was to do any more SR's, I'd probably go with a weighted ruck, or even just do Sprint/Super after one another. That was nice and a lot more challenging. Maybe it was just this event being sucky, but I don't know that.
 I guess I'd find more of a challenge and more fun in a Tough Mudder though, if this was to be the standard. Regardless, GORUCK is where my mind and body is.`,
    approved: false
  },

  // Jacksonville Heavy
  {
    id: 'aar-jax-heavy-2014-10',
    title: 'Jacksonville Heavy - After Action Review',
    date: '2014-10-12',
    author: 'Red Rucker',
    duration: 780,
    distance: 24.0,
    individualWeight: 45,
    individualWeightUnit: 'lbs',
    conditions: 'Humid, 28°C, urban terrain with water obstacles, night operations',
    planned: [],
    actual: [
      'APFT test at start (67 pushups in 2 min)',
      '12-14 mile forced ruck march on beach starting at 1900hrs',
      'No Talking enforced during long beach march',
      'Chafing on inner thighs started around hour 14',
      'Carried sandbags on shoulders/neck to distract from chafing',
      'Eventually could only carry sandbags, not participate in stone transport',
      'Teamleader asked to carry ruck - initially refused, then agreed',
      'Silent tears during brainstorming session',
      'No one came to take ruck when rolling out, continued carrying sandbags',
      'Received Heavy patch from Cadre',
      'Post-event: calves doubled in size, grade 2 muscle strain',
      'Skipped Challenge due to injury, did Light and Scavenger instead'
    ],
    whatWentWell: [
      'No foot issues despite blistering in previous events - Leukotape worked',
      'Completed Heavy'
    ],
    improvements: [
      'Dont carry sandbags on shoulders/neck constantly - caused calf strain'
    ],
    lessonsLearned: [
      'Pain is just pain - can be used as tool for forward motion',
      '12-14 miles of same scenery without sense of time makes you go blind and lost in your thoughts',
      'There is a time for everything - sometimes step back to fight another day',
      'I will carry my own. I can carry yours, but I will always carry my own.'
    ],
    location: 'Jacksonville, Florida, USA',
    originalText: `After-Action Review: GORUCK Heavy JAX
Before I run off to another event, this time a Spartan Beast (which Im not trained for), Ill finally post a very over-due After-Action Review (AAR) for my last main-event, which I said over and over again I would. Sorry for the delay to those who care. Hopefully, this can be of some assistance to European GRTs attempting Normandy and/or Dunlin next year, or at least a decent anecdote for the history books.

GORUCK Heavy, Jacksonville. "Reflections of a GRT and lessons learned."

The most brutal event I have ever done. Man, did I learn. What I love, is pushing my boundaries, physically and mentally - even past breaking point. Even to injury. "Why? That's stupid." Because I learn. About what I'm capable of. About how to prevent, how to treat and how to cope. There are so many lessons to get from everything, so many things you avoid to stay comfortable in your daily life. And I love it. Truly. Naturally, more after than during (for reals this time), but I find that even during, I nod to myself, taking in the lessons from massive strains, and I'm able to cope with the mindset of attaining knowledge.`,
    approved: true
  },

  // Okinawa Challenge
  {
    id: 'aar-okinawa-challenge-2015-03',
    title: 'Okinawa GORUCK Challenge - After Action Review',
    date: '2015-03-15',
    author: 'Red Rucker',
    duration: 840,
    distance: 16.0,
    individualWeight: 30,
    individualWeightUnit: 'lbs',
    participantsStarted: 35,
    participantsCompleted: 7,
    conditions: 'Clear, 18°C, beach terrain, historical sites, night operations',
    planned: [],
    actual: [
      '14-hour event',
      'A lot of quitters, and 7 sandy finishers',
      'Author was limping parts of challenge (nursing foot injury from pre-event sprint)',
      'Some people were worse off even though they had trained'
    ],
    whatWentWell: [],
    improvements: [],
    lessonsLearned: [
      'You do not need to understand a lick of English to get through a 14-hour endurance event if you have a team around you',
      'Truth is very often found in pain. In endurance. In perseverance.',
      'This is mental. Not physical. Your team will have your back.',
      'Parts of the challenge, I was limping. Some people were even worse off, they had trained, even on the same day.'
    ],
    location: 'Okinawa, Japan',
    originalText: `Humbled by the team this weekend, as always. Proud to earn through common struggle. Grateful to see people define their own character, reaching within for that Final-Last-Grain-Of-Willpower and whatever Fire they can find. That final push that makes it all worth it..
I'm not a talker, even if I do like the sound of my voice when I can't hear it myself, but most know I am a writer. Especially for reflection, and I feel like reflecting.`,
    approved: true
  },

  // Dublin Heavy
  {
    id: 'aar-dublin-heavy-2015-06',
    title: 'Dublin Heavy - After Action Review',
    date: '2015-06-21',
    author: 'Red Rucker',
    duration: 720,
    distance: 20.0,
    individualWeight: 50,
    individualWeightUnit: 'lbs',
    participantsStarted: 22,
    participantsCompleted: 22,
    conditions: 'Cold, 10°C, rain, rural terrain with log carries and elevation changes',
    planned: [],
    actual: [
      'Team performed log carry exercises in continuous rain',
      'Injury during event (ITB Syndrome) - dragging leg in full lock-out to move forward',
      'Team needed every person under the log, author was useless as weak link',
      'Team requested author give up ruck - refused multiple times',
      'Finally heard "Check your ego" - surrendered ruck while injured',
      'Got ruck back - "Carry your own" principle resumed'
    ],
    whatWentWell: [
      'Team was made, not broken - could not be broken by bullying, casualties, extra PT',
      'Made 84km/52 miles in 21 hours',
      'Finished despite being injured and weak link'
    ],
    improvements: [],
    lessonsLearned: [
      'Check your ego - it is the enemy of both growth and rest',
      'I was the weak link. Injured. Not pulling my load.',
      'The team can function without you carrying everything',
      'Being the weak link does not mean being useless'
    ],
    location: 'Dublin, Ireland',
    originalText: `GORUCK Heavy, Dublin, March 2015
I remember looking down at my hands, at the flagpoles I was carrying.. looking back at the team and having it all go through my head again..
I was the weak link. Injured. Not pulling my load. The team was under a log, struggling bad.`,
    approved: true
  },

  // Chicago Hive Module
  {
    id: 'aar-chicago-hive-2016-08',
    title: 'Chicago Hive Module - After Action Review',
    date: '2016-08-15',
    author: 'Red Rucker',
    duration: 360,
    distance: 8.0,
    individualWeight: 25,
    individualWeightUnit: 'lbs',
    conditions: 'Clear, 26°C, urban environment, austere medicine training scenarios',
    planned: [],
    actual: [
      'Traveled from Bergen to Chicago for 28hr class (Callidus Collective Hive Module)',
      'Austere medicine training with Voodoo Doc and Panda',
      'Urban movement training with Ed Calderon',
      'Pressure tested in basement scenarios',
      'Skills learned: tourniquets, bleed control, airway management',
      'Lost "things" more than once as reaction to environment',
      'Scenario-based challenges on final day'
    ],
    whatWentWell: [
      'Left basement with sense of satisfaction',
      'Got tools to be better in a crisis',
      'Will and motivation to keep practicing'
    ],
    improvements: [
      'Practice skills with both hands'
    ],
    lessonsLearned: [
      'Austere medicine requires different thinking than standard first aid',
      'Grid-down scenarios reveal equipment gaps',
      'Training with real professionals exposes knowledge gaps',
      'Not knowing what might happen is a big part of the magic'
    ],
    location: 'Chicago, Illinois, USA',
    originalText: `Chicago Hive Module/Austere Medical Management - Urban Movement & Disruption
Callidus Collective feat. Ed Calderon, Voodoo Doc and Panda
Chicago 2018

Austere - having an extremely plain and simple style or appearance; unadorned.`,
    heroImage: {
      src: '/images/aar/chicago-hive-hero.jpg',
      alt: 'Urban training environment with austere medicine equipment'
    },
    approved: true
  },

// Fan Dance
  {
    id: 'aar-fan-dance-2017-10',
    title: 'Fan Dance - After Action Review',
    date: '2017-10-21',
    author: 'Red Rucker',
    duration: 480,
    distance: 24.0,
    individualWeight: 20,
    individualWeightUnit: 'kg',
    conditions: 'Clear, 12°C, mountain terrain, steep elevation changes, SAS-style selection course',
    planned: [],
    actual: [
      'Exercise High Walk / Fan Dance in Brecon Beacons',
      '24km with about 20kg',
      'Highest peak at 868m (Pen y Fan)',
      'Started foggy/gloomy, turned beautiful as sun came up',
      'Roman Road was longest, most demotivating section',
      'Jacob\'s Ladder climb - false summit halfway up, then devilishly steep',
      'Completed in 5hrs10min without stressing',
      'Post-event: serious sunburn on arms, bad chafing on inner thighs'
    ],
    whatWentWell: [
      'Completed in 5hrs10min without stressing',
      'Beautiful scenery - foggy to outstanding as sun came up'
    ],
    improvements: [
      'Sunscreen for arms'
    ],
    lessonsLearned: [
      'Shortest event done - weird feeling',
      'Appreciation of SAS training grounds adds meaning',
      'Sometimes all you need is that little sunshine - small things, great effect',
      'Selection courses test more than physical capability',
      'Mental resilience is often the limiting factor'
    ],
    location: 'Brecon Beacons, Wales, UK',
    originalText: `After-action Review, Fan Dance.
Brecon Beacons, Pen y Fan, UK. July 2nd, 2017
So it finally came and went. Exercise High Walk. Fan Dance. Brecon Beacons. Pen y Fan. 24km with about 20kg. Highest peak @ 868m. Up and down and up and down again.`,
    approved: true
  },

  // Milton Memorial Tough - April 2024
  {
    id: 'aar-milton-memorial-tough-2024-04',
    title: 'Milton Memorial Tough - Frankfurt 2024',
    date: '2024-04-20',
    author: 'Alexander (Polaris Rucking Crew)',
    duration: 600,
    distance: 12.0,
    individualWeight: 30,
    individualWeightUnit: 'lbs',
    conditions: 'Clear, 16°C, urban terrain, memorial event',
    planned: [],
    actual: [
      'Attended Milton Memorial Event in Frankfurt',
      'Welcome party - quads burning within first hour, felt like blowing up',
      'Quad burning sensation lasted entire 10 hours',
      'By end of event, left side of body was dragging causing diagonal walking',
      'Fighting inflammation in right shoulder',
      'Right elbow issues',
      'Couldnt do proper squats or burpees at very end',
      'Heard Milton story from his son Sam',
      'Heard stories from Milton friends and comrades',
      'Rucked to Milton places'
    ],
    whatWentWell: [
      'Event was organized by Kris (MRC) - worthy Memorial Event',
      'Welcome party was balanced - not too hard to quit, not too easy to bore',
      'Witnessed strong individuals with great attitude, spirit, mindset and willingness',
      'Team effort was evident - people volunteering to pick up others rucks or sandbags',
      'Event was worthy tribute to Milton, his son and family',
      'Proof of legacy left by amazing, inspiring, compassionate man'
    ],
    improvements: [
      'Should have trained better before event',
      'Should have done hundreds of squats',
      'Should have done hundreds of lunges',
      'Should have done hundreds of burpees'
    ],
    lessonsLearned: [
      '8 years without events and regular exercise requires significant training ramp-up',
      'Two months of rucking only prepared feet, not overall physical readiness',
      'Rucking is not enough - need comprehensive strength training',
      'Suffering is grounding - connects to here and now',
      'Team effort matters - not about carrying as much as possible',
      'Strong people do more because they are able, not because they chase heaviest weight'
    ],
    location: 'Frankfurt, Germany',
    originalText: `After Action Review - Milton Memorial Tough - Frankfurt 2024
Date: April 20, 2024
Author: Alexander (Polaris Rucking Crew)

Introduction
A month ago, I attended the Milton Memorial Event in Frankfurt. Entirely organized by Kris from the MRC. It was… challenging. Physically and mentally.

The Challenge, Unpreparedness, and Physical Strain
I'm not gonna' sugar coat it. The event was horrible. Terrible. There is no way around it; I absolutely hated it. And that's funny because that's on me. Me saying the event was like that is just me saying that I was not ready.

I was not prepared mentally or physically. I knew it would be tough after not doing events for 8 years and not exercising regularly throughout those years. I thought rucking for the past two months would be enough. It was—but only for my feet.

I realized how wrong I was during the welcome party. My quads were burning and felt like they were about to blow up. This feeling lasted for 10 hours. By the end, I was flagging so badly the whole left side of my body was dragging me down, making me walk diagonally. I was fighting inflammation in my right shoulder and issues with my right elbow. At the very end, I wasn't even able to do proper squats or burpees.`,
    approved: true
  },
  {
    id: 'aar-cold-weather-2024-01',
    title: 'Cold Weather Immersion Trek - After Action Review',
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
    approved: false
  },
  {
    id: 'aar-6',
    title: 'Camino Preparation Trek - After Action Review',
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
    approved: false
  },
  {
    id: 'aar-7',
    title: 'Night Navigation Trek - After Action Review',
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
    approved: false
  },
  {
    id: 'aar-8',
    title: 'Nijmegen Marches Preparation - After Action Review',
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
    approved: false
  },
  {
    id: 'aar-9',
    title: 'Team Load Distribution Trek - After Action Review',
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
    approved: false
  },
  {
    id: 'aar-10',
    title: 'Civilian Endurance Challenge - After Action Review',
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
    approved: false
  },
  {
    id: 'aar-bragg-heavy-2015-05',
    title: 'Fort Bragg Heavy - After Action Review',
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
    approved: false
  },
  {
    id: 'aar-chicago-hive-2016-08',
    title: 'Chicago Hive Module - After Action Review',
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
    approved: false
  },
  {
    id: 'aar-dublin-heavy-2015-06',
    title: 'Dublin Heavy - After Action Review',
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
    title: 'Fan Dance - After Action Review',
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
    title: 'Jacksonville Heavy - After Action Review',
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
    title: 'Normandie 2014 - After Action Review',
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
    title: 'Okinawa GORUCK Challenge - After Action Review',
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
    title: 'Post Spartan 2014 - After Action Review',
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
    approved: false
  },
];