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
    duration: 0,
    distance: 0,
    individualWeight: 0,
    individualWeightUnit: 'lbs',
    classNumber: '1046',
    participantsStarted: 100,
    participantsCompleted: 0,
    conditions: 'Cold',
    planned: [],
    actual: [
      'Completed first GORUCK Challenge (Class #1046)',
    ],
    whatWentWell: [],
    improvements: [],
    lessonsLearned: [
      'These challenges show you in the most literal way that no matter how hard things seem, you can get through it',
      'Shared adversity build better people by showing you exactly what you are made of and holding you accountable to your team',
      'The people that make it to the end are people just like you.',
    ],
    location: 'Normandy, France',
    originalText: `Normandie, June 2014

Pre-event:
Signed for my first GoRuck Challenge in Normandy, France - June 6th. Inspired and recommended by the guys I met in Munich.
8-10 Hours, 15-20 Miles, with pack. Pass rate 94%.
"The GORUCK Challenge is a team event. Think of it as a slice of Special Operations training where - from start to finish - a Special Operations Cadre challenges, teaches, and inspires your small team to do more than you ever thought possible. Leadership is taught and teamwork is demanded on missions spanning the best of your city. "

This sums it up so well:

"You're strong, and you can do hard things. These challenges are more than just "tough guy army shit". They show you in the most literal way, that no matter how hard things see, you can get through it. It sucks, sure, but in the end, you're alive and better ready to handle your daily struggles. I think it's good to show yourself that in a very real, very tangible way. They build better people by showing you exactly what you're made of. And the people that make it to the end are people just like you. Scared, and maybe a little unsure, but when it boils down to it, tough as hell and fully capable of [throat-punching the demons they struggle with]."`,
    approved: false
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
    approved: false
  },
  // Chicago Hive Module
// Fan Dance
  {
    id: 'aar-fan-dance-2017-10',
    title: 'Fan Dance - After Action Review',
    date: '2017-10-21',
    author: 'Red Rucker',
    duration: 0,
    distance: 0,
    load: 0,
    participants: 0,
    conditions: 'mountain terrain, steep elevation changes, variable weather with fog and sun, 12┬░C',
    planned: [
      'Completing Avalance Endurance Course - Fan Dance',
    ],
    actual: [
      'Mountain terrain with steep elevation tested all participants',
      'Event pushed mental and physical limits. Boredom and fatigue were significant factors',
      'Really got to ponder the logistics of toilet breaks out in nowhere surrounded by people.',
    ],
    whatWentWell: [
      'Completed the course',
      'My go-to tactic for mood changes, the "Rainbows & Sunshine" (Skittles and gummy bears) technique worked wonders for morale and made people grin and laugh when meeting me halfway up Jacob`s Ladder',
    ],
    improvements: [
      'The Long Road - the Roman Road - was demotivational. Boredom proves again to be a significant factor to me personally. The scenery was monotonous and the road never seemed to end.',
    ],
    lessonsLearned: [
      'The Long Road is a mental challenge as much as a physical one. Boredom can be as tough as fatigue.',
      'Small morale boosts can have outsized effects on performance and mindset',
      'New adventures are good adventures.',
    ],
    heroImage: {
      src: '/images/aar/fan-dance-hero.jpg',
      alt: 'Group of ruckers on mountain terrain during Fan Dance selection course, steep trail visible'
    },
    location: 'Brecon Beacons, Pen y Fan, Wales, UK',
    originalText: `So it finally came and went. 
    Exercise High Walk. Fan Dance. Brecon Beacons. Pen y Fan. 24km with about 20kg. Highest peak @ 868m. Up and down and up and down again.

Curious in the start, I soon found myself in an enjoyable place. The scene turned from foggy and gloomy to beautiful and absolutely outstanding as the sun came up and the fog whisked away. Oh, wow. No wonder this was - is - a national park I thought to myself. Absolutely beautiful.

Before the event, I read up on the origin and the formation of the SAS (Special Air Service, British Special Forces) to better understand, respect and appreciate the Brecon Beacons and their fit and place as a training grounds for the SAS as they spend weeks doing aptitude-testing in just this place.

The way back.. The Roman Road was the longest walk, it was demotivational how the scenery suddenly went monotonous, never changing and the road never seemed to end. A SAR-helicopter spent at least 5 minutes going in for landing on a nearby grassfield and it just reinforced the feeling of slow motion. It sucked as everything can suck in the moment. I easily found myself thinking back to the book I had read, and ofcourse this couldnt hold a candle to the light that was the SAS roaming, crossing and living in the Egyptian desert, working with the Long Range Desert Patrol. The stories were inspirational and captivating.

It's far from the longest walk Ive had,  very far. The extra element of appreciation was nice. Back up Jacob's Ladder.. a false summit took me by surprise and that was halfway up. The climb got devilish steep real fast, or rather, real slow, as people were barely trudging on. I offered up 'sunshine and rainbows' aka skittles and/or m&ms to anyone I found sitting down. Sometimes all you need is that little ---sunshine. Small things, great effect.

All in all, I clocked in at 5hrs10min without stressing. I walked away from the event with some serious sunburns on the arms (surpriiiise...) and a real bad case of chafing on the inner thighs that started about 2hrs in (as red as my baselayer, larger than the size of my hand). Other than that, Im all good. Bit stiff in the lower back the day after but thats to be expected. 

Its the shortest event Ive done and its a weird feeling at that, that keeps coming up. Naturally, it gets harder as one push for time. Our pacer (62yr old 2nd generation SAS "Jamie") this time were dropping people who spent more than three hours one way, and quite a few got dropped. Jamie was an absolute joy to speak to after the event about the SAS, training and indoctrination and the like, and we finished off getting a photo taken with him.

Now, Im sitting on the train back to London, and I realized I quite like trains.

Here's to great people and the best of experiences.`,
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
    planned: [
      'Honor Milton and his legacy',
      'Ruck to Milton`s favorite places in Frankfurt',
      'Share stories and memories of Milton with his son Sam and friends',
    ],
    actual: [
      'All of the above'
,
    ],
    whatWentWell: [
      'Event was organized by Kris (MRC) - worthy Memorial Event',
      'Welcome party was balanced - not too hard to quit, not too easy to bore',
      'Team effort was evident - people volunteering to pick up others rucks or sandbags',
      'Event was worthy tribute to Milton, his son and family. It was an honor to have been there for it, and to hear the stories and share memories of such an amazing, inspiring and compassionate man',
    ],
    improvements: [
      'Should have trained better before event',
      'Should have done hundreds of squats',
      'Should have done hundreds of lunges',
      'Should have done hundreds of burpees'
    ],
    lessonsLearned: [
      '8 years without events and regular exercise requires significant training ramp-up and probably more than you think',
      'Two months of rucking only prepared feet, not overall physical readiness',
      'Rucking is not enough - need comprehensive strength training',
      'Suffering is grounding (literally) - as it always was to me - connects to here and now',
      'Team effort matters - it`s never about carrying as much as possible for as long as possible',
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

I realized how wrong I was during the welcome party. My quads were burning and felt like they were about to blow up. This feeling lasted for 10 hours. By the end, I was flagging so badly the whole left side of my body was dragging me down, making me walk diagonally. I was fighting inflammation in my right shoulder and issues with my right elbow. At the very end, I wasn't even able to do proper squats or burpees.

Training Regrets and Lessons Learned
Obviously, I should have trained better.

I should have done hundreds of squats.

I should have done hundreds of lunges.

I should have done hundreds of burpees.

But I hadn't, so I suffered. I have always said I love suffering because it is grounding—it connects me to the here and now. But oh-my-God, I hated this (and I say that with a grin).

Event Organisation and Physical Demands
The event was great. Kris, the leader of Munich Rucking Crew (MRC) and the backbone of GORUCK Europe, organized it. It was a worthy Memorial Event.

Physically, the welcome party managed to live on a balanced scale. It wasn't so hard that people quit, but it wasn't so easy that people got bored. It lived right on the threshold of being too physically demanding without crossing over.

Observations of Individual Strength and Team Effort
I saw Strong People. Not just physical strength, but Attitude, Spirit, Mindset, and Willingness. They flow. They smile. They volunteer to pick up another person's ruck or sandbag. They don't chase the lightest weight; they do more because they are able. It isn't about carrying as much as possible for as long as possible; it is about team effort and letting others do their share.

If there were no volunteers, these strong individuals would get back on a heavier sandbag just 30 seconds after dropping one. This is how they inspire and push the rest of us to be better.

I also saw future "Selection" attendees—people with the mindset and mettle to finish one of the hardest endurance challenges in existence.

A Worthy Tribute to Honor An Amazing Person
The event was Worthy. Milton would have loved it. We were there for him, his son, and his family. We were proof of the legacy left behind by an amazing, inspiring, and compassionate man.

Kris, you did hella' good. A thank-you will never be enough.

Final Thoughts and Acknowledgements
We rucked to Milton's places. We heard his story told by his son, Sam, and by his friends and comrades. We learned about the places where life steered him toward the man he became.

He was important to me, and he was important to many others.

May you sit at Harambe's table and may you laugh your butt off at life for ever and ever on.

I loved you, Milton. Kris, I love you more for providing this experience. This was part of my own "Book of Life."
`,
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
    conditions: 'Cold, 10┬░C, rain, rural terrain with log carries and elevation changes',
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
    originalText: `After Action Review - Dublin Heavy - March 2015
Date: March 2015
Author: Red Rucker

I remember looking down at my hands, at the flagpoles I was carrying.. looking back at the team and having it all go through my head again..

I was the weak link. Injured. Not pulling my load. The team was under a log, struggling bad. They needed every man and woman that could've been mustered. I was of no use. Just minutes ago, maybe 10, I was coming to peace with perhaps having to let go, due to the immense pain going through my leg/IT Band and the risk of a greater injury. I was dragging my leg in full lock-out to be able to move forward.

I looked at the flags again.. and I realized -- someone had to carry them. If not me, then it would be one less under the log. Even without that realization, if this was an actual mission, an actual scenario - I wouldn't have the opportunity to tap out. If we had to reach Endex/Exfil, do or die - I wouldn't give up. 

... After that, I was given the teamweight, and I never thought of quitting again.

From that point on, I was put in the front with a flag and another - I was the slow one, and it was the only thing that made sense. Team wanted me to give up my ruck, and I said no quite a few times, until a certain line was spoken to me - "Check your ego" - and I held my tongue, and gave it up. It hit me hard, that one. It was a reminder for sure.. 

Cadre tried bullying us, and putting some on the spot. One mistake from one, leading to punishment for all. We saw it for what it was, a test. Testing our team, and there was no way we would break now. It didn't even faze us.

At one point, I got my ruck back again. "Carry your own." My buddy in the front, my GRT-brother, would eventually link arms with me to keep me up as every change of groundlevel and street-crossings would have my leg collapse in pain - and we pushed on. Most of the time, I was clenching my teeth hard, thinking of a patch on one of the rucks - "Suffer in Silence". On the absolute last stretch, I was called out as a 'casualty'. Team would have to carry me. 3-man buddy carry (one under my legs in front, and one on each side of my shoulders). I couldn't hold in my tears - they were streaming down, but at least I tried not making any apparent sounds. I don't know what hurt the most, the actual pain, which was insane or the personal failure, despite it being from an injury. I still felt I had more to give. I just couldn't on my leg, and everything took its toll on that damn leg..)

Having someone injured in a team, a group of people - having a casualty, will ultimately do one out of two things. Either, it will break the team - or it will make the team. This team was made, if it had not already been. This team was solid - and this team could not be broken apart by bullying, casualties, extra PT or being put on the spot. No matter how long it took, no matter what we had to do - this team was there to stay. 
We made 84km/52miles in 21 hours. I don't think I've ever rucked that fast for that long.
I proceeded to skip Challenge for recovery, and continue on for Light (with Cadre shaking his head at me!) & Scavenger after that.

For the rest of it; it was awesome. 
It was fun. 
So much Guinness. I was labelled the Leprechaun! Getting to know all of you - Id take that over anything, any day. Even if, somehow, 10 kgs in weightplates never showed up again! Haha, I still don't know who borrowed those..

In regards to the injury; I now know what ITB Syndrome is, how to treat and prevent to some extent - and that's valuable to me. Knowing myself, and being able to help others in the future. Still would do it all over again. "
`,
    approved: true
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
  // Jacksonville Heavy
  {
    id: 'aar-jax-heavy-2014-10',
    title: 'Jacksonville Heavy - After Action Review',
    date: '2014-10-12',
    author: 'Red Rucker',
    duration: 780,
    distance: 24.0,
    load: 45,
    participants: 18,
    conditions: 'Hot enough for concrete to be smoking. Urban terrain and city neighborhoods, beach, ocean.',
    planned: [
      'Attend milestone event(s) at GORUCK HQ in Jacksonville',
      'Attend Heavy, Challenge, Light and Scavenger events consecutively to earn the HCLS patch',
      'Test ground in preparation for Aubagne',
    ],
    actual: [
      'Chafing became critical issue at hour 14+, managed with sandbag distraction technique',
      'Eventually agreed to let team carry ruck at lowest point - silent tears during brainstorming',
      'Had to develop a mantra of "pain is just pain" to keep moving forward after chafing became unbearable over and over again with repeated saltwater ocean dips',
      'Had to make the decision to skip Challenge because of injury and attempt sufficient recovery to attend Light and Scavenger - which I did, and completed both successfully',
    ],
    whatWentWell: [
      'Team maintained cohesion despite individual breakdowns',
      'Physical training prepared team for distance demands',
      'Made smart decision to step back when injury risk became clear',
      'Improvised compression method for calves worked well to manage swelling and pain (in combination with no movement for a longer recovery period)',
      'No foot issues despite blistering in previous events - Leukotape worked. Huge success.',
    ],
    improvements: [
      'Better hydration planning for humid conditions',
      'Earlier intervention when pain becomes injury risk',
      'Did not factor in enough my sensitivity to heat and that this location would be a significant heat challenge for me personally. Visualization of the event with the heat factor could have helped me prepare better.',
    ],
    lessonsLearned: [
      'When pain becomes unbearable, and repeatedly so.. there is a treshold one can choose to cross. A ..normalization, of pain as being a forever-state. The mind is a powerful thing, I would not have expected a mantra of "Pain is just pain" to actually work to the extent that it did. It was a way to detach from the suffering and keep moving forward.',
      'There is a time for everything - sometimes step back to fight another day',
      'The ruck proves to be not just weight - but important for identity. Risk factor. Letting go of it is a significant mental hurdle, even when it is the smart choice for the team and for personal safety.',
    ],
    heroImage: {
      src: '/images/aar/jax-heavy-hero.jpg',
      alt: 'Team of 18 ruckers in Jacksonville urban terrain, completing water obstacle under night conditions'
    },
    location: 'Jacksonville, Florida, USA',
    originalText: `GORUCK H(C)LS, Jacksonville. "Reflections of a GRT and lessons learned."
The most brutal event I have ever done. Man, did I learn. What I love, is pushing my boundaries, physically and mentally - even past breaking point. Even to injury. "Why? That's stupid." Because I learn. About what I'm capable of. About how to prevent, how to treat and how to cope. There are so many lessons to get from everything, so many things you avoid to stay comfortable in your daily life. And I love it. Truly. Naturally, more after than during (for reals this time), but I find that even during, I nod to myself, taking in the lessons from massive strains, and I'm able to cope with the mindset of attaining knowledge.

Our event started with the APFT-test (Army Physical Fitness Test). 2 min max push ups. I felt really good about this part, scoring 67, lacking overall training the last few weeks due to injury (doh). 2 min max sit ups, and then a "12" mile forced ruck march. "12" because GORUCK always under-promise and over-deliver. It's always more, that's just the standard minimum. The long walk was made on the beach, starting at about 1900hrs, everything going darker and darker, with the scenery never-changing. Walking in the sand, the Cadre issued "No Talking". Surf on our left side, sand underneath, weight on top, and dunes and grassline to the right of us. The beach would never end. 12-14 miles of the same scenery without a sense of time makes you go blind, and gets you lost in your own thoughts. An hour feels like two. A mile feels like four. Why am I really here. Why am I doing this. I can just quit. I could never quit now, what the hell. This is just the start, not even that. Why. Getting caught with the demons in your head happens faster when you're alone, when you can't talk to anyone. This was a heavy part for me. The longest part. But on we went, and eventually this initial march would come to pass as all things always do.

Pre-event, I researched and thought a lot about nutrition and footcare, which both are essential to survival. You can never(?) do too much research, and I had only one Challenge under my belt from before. Fail to plan, and you plan to fail. Just the Heavy-part would be my longest event to date, and here I was (initially) gunning for HCLS, to make the US-trip cost-effective. I brought and popped every now and then (restricted use to avoid too much and tiring myself off it) Endurolytes, Advils and caffeine-pills during the first half after the APFT (just to be sure), until I was careless with the containers and every pill got wet and ruined. 

Continuing on, I realized that it really didn't make much of a difference. Some salt-tablets was nice to have (which I had not brought myself) and some caffeine would be helpful at times, as you eventually walked in a coma towards the end of part 3/4 - but all you really, really need is water. All the 'take out'/'put back in' with the stuff I brought was just not worth the stress in the long run. Less, is more.

Food is nice as well, of course. If you're hungry, your head won't be in the game. You can survive on water, but food/protein bars and m&ms are worth it. Just don't fill your ruck with it. 

Foot-care. The best experience and a quite shocking one, was that I had NO foot issues(!). With said 'only a Challenge' (1046, holla) under my belt, where I was blistering bad in Normandy, I was expecting this to be a real concern in Jacksonville. I was lacking in training, even. I am still ecstatic to this day about this part. I credit most of this to my recent discovery of Leukotape, which I now swear to. Prepping' and setup for my feet went like this; 1) Tincture of Bonzine (chemical adhesive, works like glue) on the hotspots for the taped parts 2) I put some lines of tape across known hotspots from Normandy; heel-bone, toe-mounds (which is between the arch and the actual toes) as well as taping around my big toes. 3) Trail Toes all over my feet, thin layer. 4) Injinji Toe-socks. 5) Merino wool socks. 6) Oakley LSA Boots w/new soles. 1, 2, 3 was all first time usage. 

When you get to a refill-station, which are the only breaks had, you're naturally supposed to have 'check your feet' as priority #1. One foot at a time, in case you gotta start moving again. After the first "12" miler, we got to a refill station, and I couldn't believe it. I felt no issues. I wriggled my toes in all directions inside my boots, and nothing there was worth taking them off for. I figured that if I did, I would probably accidentally mess up the tape or something. On refill-stations later, I would take my boots and possibly my Merino wool socks off, wash out the sand and put it all on again. Id never take off the toe socks as there never was a need for it, and this way I'd not risk the integrity of the tape. Not until what later revealed maybe two long hours left of the event, did I replace my socks, and change from boots to Salomons Speedcross CS3, for comfort. So good, and in the deepest hell, that was well worth the wait. It was a small piece of heaven. Like chocolate milk or coca-cola on a a day you're hungover. Just for your feet.

The absolute worst pain, which was constant, and constantly renewing itself, was the chafing I had on both of my inner thighs. It really was bad, and I think it started in hour 14 or so. Chafing comes from friction, and it burns. Everytime you take a step, you feel it rubbing against whatever, and it gets gradually worse. What made it all even worse, over and over again, was getting back out in the saltwater. After putting cream on it while walking, five times, and getting ordered out into the saltwater 2-5 minutes (at most) after every time - I gave up on the cream and whatever else I had at my disposal. I gave up on trying to treat it, trying to prevent more chafing - I resigned, and I sincerely realized, that pain is just pain. And I put one foot in front of the other with that knowledge. 'Pain is just pain' became the mantra I whispered to myself for every step I took until I didn't care anymore.

To also distract me from that specific pain, I crushed my shoulders with constantly carrying sandbags straight on my shoulders/neck (not really on my ruck, since I carry thin plates which offers no base to put the sandbags on). Pain is just pain, use one to distract from another was my train of thought. Constantly, and more than I should have, it took it's toll and after a while, I struggled with raising my arms high enough to put the sandbags on myself, and required others to do it. But I kept on.

(Later, post-event, I would realize the toll of constantly having done this, would be a massive muscle strain on my calves, making me unable to walk..)

Eventually, I was in such a bad shape, everyone could see it, and I wouldn't hide it as I remembered I'm always telling others not to hide it. Towards the end, I was not able to contribute with more than carrying sandbags, and in between that had my lowest point when the teamleader recognized this during a brainstorming session on an assignment we got. He would ask me how I was dealing, could I keep going, I would tell him "bad", and "I have to". It was unacceptable for me to quit. I had my reasons, and being alone with my thoughts for the Long Walk had assured me of that. This was a gut-check for me, and a few selected people know why. I just could not quit, regardless of repercussions, and I thought about stories heard about people getting long-term injured. I. Would. Not. Quit. Teamleader suggested he would ask someone else carry my ruck. I told him no, as I've always been of the mindset 'I will carry my own. I can carry yours, but I will always carry my own." He said it again, I hesitated, and he wasn't asking this time, as I realized I could barely speak and I had to clench my jaw as I agreed to it. This was my lowest point. I had agreed. 

He walked away. I clenched my teeth, pulled down my cap and positioned myself so that I stood just close enough to the rest, and just far enough away, so that neither Cadre nor GRTs would feel the need to approach me for a chat. And I was in silent tears for the entire brainstorming session on and off. Not from the physical pain, it was bigger than that, it was from letting myself down. 

"Fortune" would have it, that when we were rolling out, nobody came to offer to take my ruck. And I didn't ask anyone to. I was still in bad shape, but I was not going to ask anyone to pick up extra weight. My weight. 

I was, however, from the first minute, asked if I could carry a sandbag on top of it. 30lbs, 60 lbs, I took it - as long as someone would put it on me. I was embarassed not being able to take part in the transport of the huge stones, barely able to walk, but I didn't say No more than once, towards the end, to an extra sandbag, sometimes carrying two. (I was shocked when someone offered me a 20lbs sandbag, which I, for the last 26-28? hours never realized existed!!)

Never putting anything into what people thought would be the end, or time left - I was the one saying; don't do that, don't guess when we're finished. Just continue. Guessing things like that never leads to anything good. Always remember that the biggest part is what goes on in your head.

Back to the beach, and more evolutions (exercises). At this point, I had now, personally, thought that we would've finished three times. More people from the GORUCK-community was present now. Jason, Monster, other Cadres, GRTs - watching all of us.

On we went, two people drag a fallen comrade, I was one on one; missing a second, exhausted - frustration. Into the saltwater again and again, I had stopped caring for the chafing a long time ago by this point. I cherished every time I was in that beautiful warm water, as I had from the first time we went in. (Water like this always reminds me of Omaha Beach, which was freezing cold. Jacksonville Beach really is amazing.) 

Evolution: Tunnel of love, where we form a tunnel in the surf, and one by one crawl through it from one end to another, my face was literally on the heels of the guy in front of me. People shouting motivation. Coming out from underneath, Cadre standing in front of me, staring at me sternly. Not the first time, I was sure he was 'just' having one of his mean staredowns at me. Not a sound. 

Until he says "Aren't you gonna' shake my hand??" I look down, his hand is stretched out, and theres a.Heavy-patch in it. My world shatters, and I keep blinking my eyes as I utter a "thank you", and look around. The people shouting are GRTs with their patches. For a moment, it's all finished, I made it, before going back to shouting at the others to just get through this evolution.

After the Heavy and getting back to the hotel, I walked ..awkwardly. After an hour or so at the hotel, my calves was not just hurting, they had doubled in size. And thats not an exaggeration. Muscle strain grade 2, was my bet. Grade 3 lands you in the hospital. I came to the conclusion that if I was to show up to the Challenge in just a few hours, I would not make it. Not that, or the events after. I could get seriously injured. I put my aim on recovering to the Light and do that and the Scavenger. Quoting another GRT; "I do stupid, I don't do dumb."

As the swelling or the effect of it, had not gone down, I awoke with an idea. I would use my clothed knee "pads" (not really -pads-) and have them on my calves instead - and use leukotape to tighten around. Too tight would mean greater risk of nerve-damage than there already was, and too slack would mean close to no effect (meaning not walking). On one leg (the worst), I found the middle ground after cutting a bit from being too tight, which towards the end of the Light had me well recuperated! On the other (the lesser injured), it just was not tight enough, and it got a lot worse, and I limped through the Light. Lesson learned, and knowledge received. 

Hearing stories from the Challenge-portion I am 100% sure I made the right decision to not show up, as it was a complete beatdown of those who had continued from the Heavy. I was, and still am, completely sure that the consequences would be as predicted if I had. If I had showed up, and gotten more injured, I would never have learned of the leukotape-compression solution, and just that is immensely valuable to me and the understanding of my body, as well as being able to apply the solution to others in the future if needed.

These events remind me what a Cadre once said, about how our daily 'problems' and 'challenges' really are not that. They're just small inconviences. Small bothers in a comfortable life. It's good to be uncomfortable. Overcoming a suckfest is good for the soul, truly.

While I did take a risk considering potential nerve damage, I would do it again. I would do all of it again. In regards to continuing from the Heavy to the Challenge and onwards, Cadre told us, (commending thosr who did just that,) it's about being able to get back into the fight, even just after you finished one, and how that is what separates regular and special forces. 
There is a time for everything. And sometimes it's time to step back to fight another day.

Hearing the stories from the Challenge, about the hallucinations caused by sleep deprivation, the jungle and the huge spiders, I was happy for them; it sounded epic. I firmly believe they bonded more truly than in the Heavy. This time it just wasn't in the cards for me, but I am immensely richer than I was in experience and knowledge. I met some amazing people I would consider more friends or potential of friends than people I grew up with, or people currently in my life for one reason or another. Shared pain brings people together. To seek it out, is uncommon - and I am proud every time I am with these uncommon people carrying some of the same mindset. It was really nice to see familiar faces from Normandy, and even more - lined up for starting the APFT, Cadre Tyler was present, and he came over to shake my hand for recognition. Small things, big value. I wasn't even in his specific group in Normandy, and there was 99 other souls there, so that moment stuck with me. Could Cadre Tyler be my spirit animal? Bud Light will always be GORUCK to me, and Jason is nice when he's not pushing a keg on you. (Don't try to excuse yourself for not drinking to a Cadre like Garet either. )

I want to finish with
GORUCK is .. 
but I can't decide on one word. Be there, or you will never truly know."`,
    approved: false
  },
];