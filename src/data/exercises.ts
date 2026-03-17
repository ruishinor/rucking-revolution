export interface Exercise {
  id: string;
  slug: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  equipment: string[];
  targetMuscles: string[];
  steps: string[];
  mistakes: string[];
  progressions: string[];
  media: {
    src: string;
    alt: string;
    type: 'image' | 'video';
  }[];
}

export const exercises: Exercise[] = [
  // Upper Body Exercises (10)
  {
    id: 'upper-1',
    slug: 'push-up',
    title: 'Push-Up',
    difficulty: 'beginner',
    equipment: ['bodyweight'],
    targetMuscles: ['chest', 'shoulders', 'triceps', 'core'],
    steps: [
      'Start in plank position with hands shoulder-width apart',
      'Keep body in straight line from head to heels',
      'Lower chest toward floor by bending elbows',
      'Descend until elbows are at 90 degrees or chest touches floor',
      'Push back up to starting position by extending arms',
      'Maintain rigid torso throughout movement'
    ],
    mistakes: [
      'Sagging hips or piking hips',
      'Flaring elbows out to 90 degrees',
      'Not lowering chest far enough',
      'Moving too quickly without control',
      'Letting head jut forward'
    ],
    progressions: [
      'Knee push-ups (beginner)',
      'Standard push-ups',
      'Decline push-ups (feet elevated)',
      'Weighted push-ups (plate on back)',
      'Explosive/clap push-ups',
      'Archer push-ups',
      'Pseudo planche push-ups'
    ],
    media: [
      {
        src: '/images/exercises/push-up.jpg',
        alt: 'Person performing push-up with proper form: straight body line, hands under shoulders, chest lowered to floor',
        type: 'image'
      }
    ]
  },
  {
    id: 'upper-2',
    slug: 'pull-up',
    title: 'Pull-Up',
    difficulty: 'intermediate',
    equipment: ['pull-up bar'],
    targetMuscles: ['back', 'biceps', 'shoulders', 'core'],
    steps: [
      'Grip pull-up bar with palms facing away, slightly wider than shoulder-width',
      'Hang with arms fully extended (dead hang)',
      'Engage scapula by pulling shoulders down and back',
      'Pull chest toward bar by bending elbows',
      'Continue until chin clears the bar',
      'Lower with control back to dead hang'
    ],
    mistakes: [
      'Using momentum/kipping',
      'Not fully extending arms at bottom',
      'Not pulling high enough (chin below bar)',
      'Shrugging shoulders toward ears',
      'Crossing feet or swinging legs'
    ],
    progressions: [
      'Assisted pull-ups (band or machine)',
      'Negative pull-ups (jump up, slow down)',
      'Standard pull-ups',
      'Weighted pull-ups (belt or vest)',
      'Mixed grip pull-ups',
      'Wide grip pull-ups',
      'Muscle-ups'
    ],
    media: [
      {
        src: '/images/exercises/pull-up.jpg',
        alt: 'Person performing pull-up with proper form: overhand grip, chest pulling up to bar, shoulders engaged',
        type: 'image'
      }
    ]
  },
  {
    id: 'upper-3',
    slug: 'overhead-press',
    title: 'Overhead Press',
    difficulty: 'beginner',
    equipment: ['barbell', 'dumbbells', 'kettlebells'],
    targetMuscles: ['shoulders', 'triceps', 'upper chest', 'core'],
    steps: [
      'Stand with feet shoulder-width apart, core engaged',
      'Hold weight at shoulder level with palms facing forward',
      'Keep elbows slightly in front of bar (not flared out)',
      'Press weight straight up over head',
      'Fully extend arms without locking elbows',
      'Lower weight with control back to shoulders'
    ],
    mistakes: [
      'Arching lower back excessively',
      'Pressing weight forward instead of up',
      'Flaring elbows out to sides',
      'Not using full range of motion',
      'Moving legs to generate momentum'
    ],
    progressions: [
      'Seated dumbbell press',
      'Standing dumbbell press',
      'Barbell overhead press',
      'Push press (using leg drive)',
      'Jerks (split or push jerk)',
      'Single-arm landmine press',
      'Arnold press'
    ],
    media: [
      {
        src: '/images/exercises/overhead-press.jpg',
        alt: 'Person performing overhead press with barbell: standing tall, core tight, bar moving vertically over head',
        type: 'image'
      }
    ]
  },
  {
    id: 'upper-4',
    slug: 'bent-over-row',
    title: 'Bent-Over Row',
    difficulty: 'beginner',
    equipment: ['barbell', 'dumbbells', 'kettlebells'],
    targetMuscles: ['back', 'biceps', 'shoulders', 'core'],
    steps: [
      'Stand with feet hip-width apart, hinge at hips',
      'Lower torso until nearly parallel to floor, back flat',
      'Let arms hang straight down holding weight',
      'Pull weight toward lower ribs by squeezing shoulder blades',
      'Keep elbows close to body, not flaring out',
      'Lower weight with control back to starting position'
    ],
    mistakes: [
      'Rounding lower back',
      'Using momentum to jerk weight up',
      'Pulling weight too high (to chest)',
      'Letting elbows flare out wide',
      'Not maintaining hip hinge position'
    ],
    progressions: [
      'Supported dumbbell row (one hand on bench)',
      'Bent-over dumbbell rows',
      'Barbell bent-over rows',
      'Pendlay rows (from dead stop)',
      'T-bar rows',
      'Single-arm landmine rows',
      'Inverted rows (bodyweight)'
    ],
    media: [
      {
        src: '/images/exercises/bent-over-row.jpg',
        alt: 'Person performing bent-over row with dumbbells: flat back, hips hinged, pulling weight toward ribs',
        type: 'image'
      }
    ]
  },
  {
    id: 'upper-5',
    slug: 'dips',
    title: 'Dips',
    difficulty: 'intermediate',
    equipment: ['parallel bars', 'dip station', 'bench'],
    targetMuscles: ['chest', 'triceps', 'shoulders'],
    steps: [
      'Support yourself on parallel bars with arms straight',
      'Lean forward slightly to emphasize chest (or stay upright for triceps)',
      'Lower body by bending elbows to 90 degrees',
      'Keep elbows close to body, not flaring out',
      'Descend until upper arms are parallel to floor',
      'Push back up to straight arms',
      'Maintain control throughout movement'
    ],
    mistakes: [
      'Flaring elbows out to sides',
      'Going too deep (shoulder strain)',
      'Not controlling descent',
      'Shrugging shoulders up toward ears',
      'Using legs to kick or bounce'
    ],
    progressions: [
      'Bench dips (feet on ground)',
      'Bench dips (feet elevated)',
      'Assisted dips (band or machine)',
      'Standard parallel bar dips',
      'Weighted dips (belt or vest)',
      'Ring dips',
      'Korean dips'
    ],
    media: [
      {
        src: '/images/exercises/dips.jpg',
        alt: 'Person performing dips on parallel bars: upright torso, elbows close to body, lowering to 90 degrees',
        type: 'image'
      }
    ]
  },
  {
    id: 'upper-6',
    slug: 'plank',
    title: 'Plank',
    difficulty: 'beginner',
    equipment: ['bodyweight'],
    targetMuscles: ['core', 'shoulders', 'glutes'],
    steps: [
      'Start in push-up position or on forearms',
      'Elbows under shoulders if on forearms, hands under shoulders if on hands',
      'Body in straight line from head to heels',
      'Engage core by pulling belly button toward spine',
      'Squeeze glutes and quadriceps',
      'Hold position without letting hips sag or rise',
      'Breathe steadily throughout'
    ],
    mistakes: [
      'Sagging hips toward floor',
      'Piking hips up in air',
      'Letting head drop or look up',
      'Holding breath',
      'Placing hands too far forward or back'
    ],
    progressions: [
      'Knee plank',
      'Standard plank (hands or forearms)',
      'Shoulder taps plank',
      'Plank jacks',
      'Weighted plank (plate on back)',
      'Plank walk-ups',
      'Long lever plank (arms extended forward)'
    ],
    media: [
      {
        src: '/images/exercises/plank.jpg',
        alt: 'Person performing forearm plank with proper form: straight body line, elbows under shoulders, core engaged',
        type: 'image'
      }
    ]
  },
  {
    id: 'upper-7',
    slug: 'bicep-curl',
    title: 'Bicep Curl',
    difficulty: 'beginner',
    equipment: ['dumbbells', 'barbell', 'cable machine'],
    targetMuscles: ['biceps'],
    steps: [
      'Stand with feet shoulder-width apart, core engaged',
      'Hold weight with palms facing forward (supinated grip)',
      'Keep elbows pinned to sides, not moving forward or back',
      'Curl weight up by bending elbows',
      'Squeeze biceps at top of movement',
      'Lower weight with control back to starting position',
      'Maintain upright posture throughout'
    ],
    mistakes: [
      'Using momentum to swing weight up',
      'Moving elbows forward during curl',
      'Not fully extending arms at bottom',
      'Letting wrists bend backward',
      'Leaning back to lift heavier weight'
    ],
    progressions: [
      'Dumbbell bicep curls',
      'Barbell bicep curls',
      'Hammer curls (neutral grip)',
      'Preacher curls',
      'Concentration curls',
      'Cable curls',
      '21s (partial range curls)'
    ],
    media: [
      {
        src: '/images/exercises/bicep-curl.jpg',
        alt: 'Person performing dumbbell bicep curl: elbows pinned to sides, palms facing up, curling weight toward shoulders',
        type: 'image'
      }
    ]
  },
  {
    id: 'upper-8',
    slug: 'tricep-extension',
    title: 'Tricep Extension',
    difficulty: 'beginner',
    equipment: ['dumbbells', 'cable machine', 'barbell'],
    targetMuscles: ['triceps'],
    steps: [
      'Stand or sit with weight held overhead with both hands',
      'Keep upper arms close to head, elbows pointing forward',
      'Lower weight behind head by bending elbows',
      'Keep upper arms stationary throughout movement',
      'Extend arms back to starting position by straightening elbows',
      'Feel stretch in triceps at bottom, contraction at top'
    ],
    mistakes: [
      'Flaring elbows out to sides',
      'Moving upper arms during exercise',
      'Not using full range of motion',
      'Arching back to lift weight',
      'Letting wrists bend backward'
    ],
    progressions: [
      'Overhead dumbbell extension (both arms)',
      'Single-arm overhead dumbbell extension',
      'Cable rope overhead extension',
      'Barbell lying tricep extension (skullcrushers)',
      'Tricep pushdowns (rope or bar)',
      'Close-grip bench press',
      'Diamond push-ups'
    ],
    media: [
      {
        src: '/images/exercises/tricep-extension.jpg',
        alt: 'Person performing overhead tricep extension with dumbbell: upper arms stationary, elbows bending to lower weight behind head',
        type: 'image'
      }
    ]
  },
  {
    id: 'upper-9',
    slug: 'lateral-raise',
    title: 'Lateral Raise',
    difficulty: 'beginner',
    equipment: ['dumbbells', 'cable machine'],
    targetMuscles: ['shoulders (lateral deltoids)'],
    steps: [
      'Stand with feet shoulder-width apart, core engaged',
      'Hold dumbbells at sides with palms facing inward',
      'Keep slight bend in elbows throughout movement',
      'Raise arms out to sides until parallel to floor',
      'Lead with elbows, not hands (elbows slightly higher than wrists)',
      'Lower weights with control back to sides',
      'Maintain upright posture, no leaning'
    ],
    mistakes: [
      'Using momentum to swing weights up',
      'Raising arms above shoulder height',
      'Bending and straightening elbows during movement',
      'Leaning torso to one side',
      'Shrugging shoulders up toward ears'
    ],
    progressions: [
      'Dumbbell lateral raises',
      'Cable lateral raises',
      'Seated lateral raises',
      'Lean-away lateral raises',
      'Partial range lateral raises',
      'Isometric holds at top',
      'Drop sets'
    ],
    media: [
      {
        src: '/images/exercises/lateral-raise.jpg',
        alt: 'Person performing dumbbell lateral raise: slight elbow bend, raising arms to shoulder height, leading with elbows',
        type: 'image'
      }
    ]
  },
  {
    id: 'upper-10',
    slug: 'face-pulls',
    title: 'Face Pulls',
    difficulty: 'beginner',
    equipment: ['cable machine', 'resistance bands'],
    targetMuscles: ['rear deltoids', 'upper back', 'rotator cuff'],
    steps: [
      'Attach rope to cable machine at upper chest height',
      'Grip rope with palms facing each other (neutral grip)',
      'Step back to create tension, arms extended forward',
      'Pull rope toward face by separating hands',
      'Keep elbows high and pulled back',
      'End with hands near ears, elbows bent at 90 degrees',
      'Return with control to starting position'
    ],
    mistakes: [
      'Using too much weight, causing form breakdown',
      'Pulling rope toward chest instead of face',
      'Letting elbows drop down during pull',
      'Not separating hands enough (keeping rope tight)',
      'Leaning back excessively to pull weight'
    ],
    progressions: [
      'Light resistance band face pulls',
      'Moderate resistance band face pulls',
      'Heavy resistance band face pulls',
      'Cable rope face pulls (light weight)',
      'Cable rope face pulls (moderate weight)',
      'Cable rope face pulls (heavy weight)',
      'Face pulls with external rotation at end'
    ],
    media: [
      {
        src: '/images/exercises/face-pulls.jpg',
        alt: 'Person performing face pulls with cable rope: pulling toward face, elbows high, hands separating near ears',
        type: 'image'
      }
    ]
  },
  // Lower Body Exercises (10)
  {
    id: 'lower-1',
    slug: 'squat',
    title: 'Squat',
    difficulty: 'beginner',
    equipment: ['bodyweight', 'barbell', 'dumbbells', 'kettlebells'],
    targetMuscles: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    steps: [
      'Stand with feet shoulder-width apart, toes slightly outward',
      'Engage core and keep chest up',
      'Initiate movement by pushing hips back and bending knees',
      'Lower until thighs are at least parallel to floor',
      'Keep knees tracking over toes (not caving inward)',
      'Push through heels to return to standing',
      'Squeeze glutes at top of movement'
    ],
    mistakes: [
      'Knees caving inward (valgus collapse)',
      'Letting knees go too far past toes',
      'Rounding lower back',
      'Not going deep enough (partial squats)',
      'Lifting heels off ground',
      'Leaning too far forward'
    ],
    progressions: [
      'Bodyweight squats',
      'Goblet squats (dumbbell or kettlebell)',
      'Barbell back squats',
      'Barbell front squats',
      'Overhead squats',
      'Pistol squats (single-leg)',
      'Jump squats'
    ],
    media: [
      {
        src: '/images/exercises/squat.jpg',
        alt: 'Person performing barbell back squat: feet shoulder-width, chest up, lowering to parallel depth, knees tracking over toes',
        type: 'image'
      }
    ]
  },
  {
    id: 'lower-2',
    slug: 'deadlift',
    title: 'Deadlift',
    difficulty: 'intermediate',
    equipment: ['barbell', 'dumbbells', 'kettlebells'],
    targetMuscles: ['hamstrings', 'glutes', 'lower back', 'core', 'traps'],
    steps: [
      'Stand with feet hip-width apart, bar over mid-foot',
      'Hinge at hips and grip bar just outside legs',
      'Keep back flat, chest up, shoulders slightly ahead of bar',
      'Drive through heels to lift bar, keeping it close to body',
      'Extend hips and knees simultaneously to stand tall',
      'Lock out by squeezing glutes, not leaning back',
      'Lower bar with control by hinging hips and bending knees'
    ],
    mistakes: [
      'Rounding lower back during lift',
      'Starting with hips too high (squatting the deadlift)',
      'Letting bar drift away from body',
      'Hyperextending at top (leaning back)',
      'Jerking weight off floor instead of driving through heels',
      'Not engaging lats to keep bar close'
    ],
    progressions: [
      'Kettlebell deadlift',
      'Dumbbell deadlift',
      'Trap bar deadlift',
      'Conventional barbell deadlift',
      'Sumo deadlift',
      'Deficit deadlift',
      'Romanian deadlift (RDL)'
    ],
    media: [
      {
        src: '/images/exercises/deadlift.jpg',
        alt: 'Person performing conventional deadlift: flat back, bar close to legs, driving through heels to stand tall',
        type: 'image'
      }
    ]
  },
  {
    id: 'lower-3',
    slug: 'lunge',
    title: 'Lunge',
    difficulty: 'beginner',
    equipment: ['bodyweight', 'dumbbells', 'barbell', 'kettlebells'],
    targetMuscles: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    steps: [
      'Stand with feet hip-width apart, core engaged',
      'Step forward with one leg, landing heel first',
      'Lower body until both knees are bent at 90 degrees',
      'Front knee tracking over ankle, not past toes',
      'Back knee hovering just above floor',
      'Push through front heel to return to starting position',
      'Alternate legs or complete all reps on one side'
    ],
    mistakes: [
      'Stepping too short or too long',
      'Front knee caving inward',
      'Torso leaning forward excessively',
      'Not lowering deeply enough',
      'Letting back knee slam to floor',
      'Losing balance or wobbling'
    ],
    progressions: [
      'Static lunges (no walking)',
      'Walking lunges',
      'Reverse lunges',
      'Dumbbell lunges',
      'Barbell lunges',
      'Deficit lunges (on platform)',
      'Jumping lunges'
    ],
    media: [
      {
        src: '/images/exercises/lunge.jpg',
        alt: 'Person performing dumbbell lunge: front knee at 90 degrees over ankle, back knee above floor, torso upright',
        type: 'image'
      }
    ]
  },
  {
    id: 'lower-4',
    slug: 'glute-bridge',
    title: 'Glute Bridge',
    difficulty: 'beginner',
    equipment: ['bodyweight', 'barbell', 'dumbbells'],
    targetMuscles: ['glutes', 'hamstrings', 'core'],
    steps: [
      'Lie on back with knees bent, feet flat on floor',
      'Feet hip-width apart, close to glutes',
      'Engage core and press lower back into floor',
      'Drive through heels to lift hips toward ceiling',
      'Squeeze glutes at top, forming straight line from shoulders to knees',
      'Hold briefly at top, then lower with control',
      'Keep knees from drifting outward'
    ],
    mistakes: [
      'Pushing through toes instead of heels',
      'Overarching lower back at top',
      'Not squeezing glutes enough',
      'Feet too far from or too close to glutes',
      'Letting knees drift outward',
      'Moving too quickly without control'
    ],
    progressions: [
      'Bodyweight glute bridges',
      'Weighted glute bridges (barbell or dumbbell on hips)',
      'Single-leg glute bridges',
      'Elevated glute bridges (feet on bench)',
      'Barbell hip thrusts',
      'Banded glute bridges',
      'Marching glute bridges'
    ],
    media: [
      {
        src: '/images/exercises/glute-bridge.jpg',
        alt: 'Person performing weighted glute bridge: barbell across hips, driving through heels, forming straight line from shoulders to knees',
        type: 'image'
      }
    ]
  },
  {
    id: 'lower-5',
    slug: 'calf-raise',
    title: 'Calf Raise',
    difficulty: 'beginner',
    equipment: ['bodyweight', 'dumbbells', 'barbell', 'machine'],
    targetMuscles: ['calves (gastrocnemius and soleus)'],
    steps: [
      'Stand on edge of step or platform with heels hanging off',
      'Hold onto support for balance if needed',
      'Raise up onto toes by contracting calves',
      'Lift heels as high as possible, feeling contraction',
      'Lower heels below step level for full stretch',
      'Keep legs straight but knees not locked',
      'Perform with controlled tempo'
    ],
    mistakes: [
      'Using momentum to bounce up and down',
      'Not going through full range of motion',
      'Bending knees during movement',
      'Rolling ankles inward or outward',
      'Performing too quickly to feel contraction',
      'Not pausing at top or bottom'
    ],
    progressions: [
      'Bodyweight calf raises',
      'Dumbbell calf raises (holding at sides)',
      'Barbell calf raises (on shoulders)',
      'Seated calf raises (machine)',
      'Single-leg calf raises',
      'Explosive calf raises',
      'Weighted calf raises with pause at top'
    ],
    media: [
      {
        src: '/images/exercises/calf-raise.jpg',
        alt: 'Person performing standing calf raise on step: heels lowered below step for stretch, rising onto toes with contraction',
        type: 'image'
      }
    ]
  },
  {
    id: 'lower-6',
    slug: 'step-up',
    title: 'Step-Up',
    difficulty: 'beginner',
    equipment: ['bench or platform', 'dumbbells', 'barbell'],
    targetMuscles: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    steps: [
      'Stand facing bench or platform, feet hip-width apart',
      'Place entire foot firmly on bench',
      'Drive through heel to lift body onto bench',
      'Bring trailing foot up to meet leading foot',
      'Step back down with control, leading with same foot',
      'Keep torso upright throughout movement',
      'Alternate legs or complete sets on one side'
    ],
    mistakes: [
      'Pushing off with back foot instead of stepping up',
      'Leaning forward excessively',
      'Not placing entire foot on bench',
      'Using momentum to swing up',
      'Letting knee cave inward on stepping leg',
      'Stepping down too quickly without control'
    ],
    progressions: [
      'Low step-ups (short platform)',
      'Standard step-ups (knee height)',
      'High step-ups (above knee height)',
      'Dumbbell step-ups',
      'Barbell step-ups',
      'Lateral step-ups (side to bench)',
      'Step-ups with knee drive at top'
    ],
    media: [
      {
        src: '/images/exercises/step-up.jpg',
        alt: 'Person performing dumbbell step-up: entire foot on bench, driving through heel to lift body, torso upright',
        type: 'image'
      }
    ]
  },
  {
    id: 'lower-7',
    slug: 'wall-sit',
    title: 'Wall Sit',
    difficulty: 'beginner',
    equipment: ['bodyweight', 'wall'],
    targetMuscles: ['quadriceps', 'glutes', 'core'],
    steps: [
      'Stand with back against wall, feet shoulder-width apart',
      'Slide down wall until thighs are parallel to floor',
      'Knees bent at 90 degrees, directly over ankles',
      'Back flat against wall, not arching',
      'Engage core and keep chest up',
      'Hold position for specified time',
      'Breathe steadily throughout hold'
    ],
    mistakes: [
      'Hands on thighs for support',
      'Heels lifting off ground',
      'Knees past toes or caving inward',
      'Arching lower back away from wall',
      'Sliding down too far (past 90 degrees)',
      'Not keeping back flat against wall'
    ],
    progressions: [
      'Basic wall sit',
      'Wall sit with heel lift (calf engagement)',
      'Wall sit with toe lift (tibialis anterior)',
      'Wall sit with ball squeeze between knees',
      'Weighted wall sit (dumbbell on lap)',
      'Single-leg wall sit (alternating legs)',
      'Wall sit with upper body movement (curls, presses)'
    ],
    media: [
      {
        src: '/images/exercises/wall-sit.jpg',
        alt: 'Person performing wall sit: back flat against wall, thighs parallel to floor, knees at 90 degrees over ankles',
        type: 'image'
      }
    ]
  },
  {
    id: 'lower-8',
    slug: 'bulgarian-split-squat',
    title: 'Bulgarian Split Squat',
    difficulty: 'intermediate',
    equipment: ['bench or platform', 'dumbbells', 'barbell'],
    targetMuscles: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    steps: [
      'Stand facing away from bench, one foot resting on bench behind you',
      'Front foot positioned far enough forward to allow proper lunge',
      'Lower body by bending front knee and hip',
      'Keep torso upright, core engaged',
      'Front thigh parallel to floor at bottom',
      'Front knee tracking over foot, not caving inward',
      'Push through front heel to return to standing',
      'Complete all reps on one leg before switching'
    ],
    mistakes: [
      'Front foot too close or too far from bench',
      'Leaning forward excessively',
      'Front knee caving inward',
      'Letting back hip drop or rotate',
      'Not going deep enough',
      'Using back leg to push up instead of front leg'
    ],
    progressions: [
      'Bodyweight Bulgarian split squat',
      'Dumbbell Bulgarian split squat (at sides)',
      'Barbell Bulgarian split squat',
      'Elevated Bulgarian split squat (front foot on platform)',
      'Banded Bulgarian split squat',
      'Explosive Bulgarian split squat',
      'Bulgarian split squat with pause at bottom'
    ],
    media: [
      {
        src: '/images/exercises/bulgarian-split-squat.jpg',
        alt: 'Person performing dumbbell Bulgarian split squat: rear foot on bench, front knee at 90 degrees, torso upright',
        type: 'image'
      }
    ]
  },
  {
    id: 'lower-9',
    slug: 'kettlebell-swing',
    title: 'Kettlebell Swing',
    difficulty: 'intermediate',
    equipment: ['kettlebell'],
    targetMuscles: ['glutes', 'hamstrings', 'core', 'back', 'shoulders'],
    steps: [
      'Stand with feet shoulder-width apart, kettlebell on floor between feet',
      'Hinge at hips and grip kettlebell with both hands',
      'Hike kettlebell back between legs like football snap',
      'Drive hips forward explosively to swing kettlebell up',
      'Let kettlebell rise to chest height (arms parallel to floor)',
      'Let kettlebell fall back between legs as hips hinge',
      'Maintain rhythmic breathing with hip movement'
    ],
    mistakes: [
      'Squatting instead of hinging at hips',
      'Using arms to lift kettlebell',
      'Not hinging deeply enough on backswing',
      'Overarching back at top of swing',
      'Letting kettlebell go too high (overhead)',
      'Losing neutral spine position'
    ],
    progressions: [
      'Light kettlebell swing',
      'Moderate kettlebell swing',
      'Heavy kettlebell swing',
      'American kettlebell swing (overhead)',
      'Single-arm kettlebell swing',
      'Alternating kettlebell swing',
      'Kettlebell swing to clean or snatch'
    ],
    media: [
      {
        src: '/images/exercises/kettlebell-swing.jpg',
        alt: 'Person performing kettlebell swing: hinging at hips, driving hips forward to swing kettlebell to chest height',
        type: 'image'
      }
    ]
  },
  {
    id: 'lower-10',
    slug: 'box-jump',
    title: 'Box Jump',
    difficulty: 'intermediate',
    equipment: ['plyometric box or platform'],
    targetMuscles: ['quadriceps', 'glutes', 'hamstrings', 'calves', 'core'],
    steps: [
      'Stand facing box at comfortable distance',
      'Feet hip-width apart, weight on balls of feet',
      'Swing arms back and bend knees to load',
      'Explode upward by extending hips, knees, and ankles',
      'Swing arms forward for momentum',
      'Land softly on box with knees bent to absorb impact',
      'Stand tall on box before stepping back down',
      'Step down one foot at a time (do not jump down)'
    ],
    mistakes: [
      'Landing with legs straight (no knee bend)',
      'Landing on toes instead of whole foot',
      'Jumping too far forward and missing box',
      'Not using arm swing for momentum',
      'Landing too close to edge of box',
      'Jumping down from box instead of stepping'
    ],
    progressions: [
      'Low box jumps (12-18 inches)',
      'Medium box jumps (18-24 inches)',
      'High box jumps (24-36 inches)',
      'Single-leg box jumps',
      'Lateral box jumps',
      'Box jump overs (side to side)',
      'Depth jumps (step off box, immediately jump up)'
    ],
    media: [
      {
        src: '/images/exercises/box-jump.jpg',
        alt: 'Person performing box jump: explosive triple extension, landing softly on box with knees bent, feet flat',
        type: 'image'
      }
    ]
  }
];