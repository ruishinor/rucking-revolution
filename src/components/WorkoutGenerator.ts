export interface WorkoutSection {
  name: string;
  duration: number; // in minutes
  description: string;
  exercises?: string[];
}

export interface GeneratedWorkout {
  id: string;
  title: string;
  description: string;
  duration: number; // total duration in minutes
  distance: number; // in kilometers
  load: number; // in kilograms
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  terrain: ('road' | 'trail' | 'mixed' | 'hills' | 'sand')[];
  objectives: string[];
  equipment: string[];
  sections: WorkoutSection[];
  notes?: string;
  seed?: number;
}

// Exercise databases by category
const warmupExercises = [
  'Easy ruck',
  'Arm circles',
  'Leg swings',
  'Walking lunges',
  'High knees',
  'Butt kicks',
  'Inchworms',
  'Cat-cow stretch'
];

const mainCarryExercises = [
  'Steady state ruck',
  'Loaded marches',
  'Farmer\'s carry',
  'Overhead carry',
  'Suitcase carry',
  'Ruck with posture focus'
];

const movementDrillsExercises = [
  'Lateral shuffles',
  'Backpedal',
  'Carioca drill',
  'A-skips',
  'B-skips',
  'Box drill',
  'Cone drills',
  'Agility ladder'
];

const teamChallengeExercises = [
  'Partner carry',
  'Team tire flip',
  'Log carry',
  'Stretcher carry',
  'Ammo can relay',
  'Team obstacle course',
  'Sandbag relay',
  'Medicine ball throw'
];

const cooldownExercises = [
  'Easy ruck',
  'Walking',
  'Static stretching',
  'Foam rolling',
  'Deep breathing',
  'Yoga flow',
  'Mobility work'
];

/**
 * Deterministic random number generator based on seed
 * Returns a number between 0 and 1
 */
function seededRandom(seed: number): () => number {
  let x = Math.sin(seed++) * 10000;
  return () => {
    x = Math.sin(x) * 10000;
    return x - Math.floor(x);
  };
}

/**
 * Pick a random element from array using seeded random
 */
function weightedChoice<T>(array: T[], rand: () => number): T {
  const index = Math.floor(rand() * array.length);
  return array[index];
}

/**
 * Generate a workout based on difficulty and optional seed
 */
export function generateWorkout(
  difficulty: 'beginner' | 'intermediate' | 'advanced' = 'beginner',
  seed?: number,
  timePreference?: number // preferred total time in minutes
): GeneratedWorkout {
  // Create deterministic random generator if seed provided
  const rand = seed ? seededRandom(seed) : Math.random;
  
  // Define time ranges for each section based on difficulty
  const timeRanges: Record<'beginner' | 'intermediate' | 'advanced', {
    warmup: [number, number];
    mainCarry: [number, number];
    movementDrills: [number, number];
    teamChallenge: [number, number];
    cooldown: [number, number];
  }> = {
    beginner: {
      warmup: [5, 7],
      mainCarry: [15, 20],
      movementDrills: [10, 15],
      teamChallenge: [5, 10],
      cooldown: [5, 8]
    },
    intermediate: {
      warmup: [7, 10],
      mainCarry: [20, 25],
      movementDrills: [15, 20],
      teamChallenge: [10, 12],
      cooldown: [7, 10]
    },
    advanced: {
      warmup: [8, 10],
      mainCarry: [25, 30],
      movementDrills: [18, 20],
      teamChallenge: [12, 15],
      cooldown: [8, 10]
    }
  };
  
  const ranges = timeRanges[difficulty];
  
  // Calculate section durations
  const getDuration = (min: number, max: number): number => {
    const range = max - min;
    return min + Math.floor(rand() * range);
  };
  
  let warmupDuration = getDuration(ranges.warmup[0], ranges.warmup[1]);
  let mainCarryDuration = getDuration(ranges.mainCarry[0], ranges.mainCarry[1]);
  let movementDrillsDuration = getDuration(ranges.movementDrills[0], ranges.movementDrills[1]);
  let teamChallengeDuration = getDuration(ranges.teamChallenge[0], ranges.teamChallenge[1]);
  let cooldownDuration = getDuration(ranges.cooldown[0], ranges.cooldown[1]);
  
  // Apply time preference if provided (scale all sections proportionally)
  if (timePreference) {
    const currentTotal = warmupDuration + mainCarryDuration + movementDrillsDuration + teamChallengeDuration + cooldownDuration;
    const scaleFactor = timePreference / currentTotal;
    
    // Scale each section but keep within reasonable bounds
    const scaleAndClamp = (value: number, min: number, max: number): number => {
      const scaled = Math.round(value * scaleFactor);
      return Math.max(min, Math.min(max, scaled));
    };
    
    const warmupMin = Math.max(5, Math.floor(ranges.warmup[0] * scaleFactor));
    const warmupMax = Math.min(10, Math.ceil(ranges.warmup[1] * scaleFactor));
    warmupDuration = scaleAndClamp(warmupDuration, warmupMin, warmupMax);
    
    const mainCarryMin = Math.max(15, Math.floor(ranges.mainCarry[0] * scaleFactor));
    const mainCarryMax = Math.min(30, Math.ceil(ranges.mainCarry[1] * scaleFactor));
    mainCarryDuration = scaleAndClamp(mainCarryDuration, mainCarryMin, mainCarryMax);
    
    const movementDrillsMin = Math.max(10, Math.floor(ranges.movementDrills[0] * scaleFactor));
    const movementDrillsMax = Math.min(20, Math.ceil(ranges.movementDrills[1] * scaleFactor));
    movementDrillsDuration = scaleAndClamp(movementDrillsDuration, movementDrillsMin, movementDrillsMax);
    
    const teamChallengeMin = Math.max(5, Math.floor(ranges.teamChallenge[0] * scaleFactor));
    const teamChallengeMax = Math.min(15, Math.ceil(ranges.teamChallenge[1] * scaleFactor));
    teamChallengeDuration = scaleAndClamp(teamChallengeDuration, teamChallengeMin, teamChallengeMax);
    
    const cooldownMin = Math.max(5, Math.floor(ranges.cooldown[0] * scaleFactor));
    const cooldownMax = Math.min(10, Math.ceil(ranges.cooldown[1] * scaleFactor));
    cooldownDuration = scaleAndClamp(cooldownDuration, cooldownMin, cooldownMax);
  }
  
  // Select exercises for each section
  const warmupExercisesSelected = [
    weightedChoice(warmupExercises, rand),
    weightedChoice(warmupExercises, rand)
  ].filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
  
  const mainCarryExercisesSelected = [
    weightedChoice(mainCarryExercises, rand),
    weightedChoice(mainCarryExercises, rand)
  ].filter((value, index, self) => self.indexOf(value) === index);
  
  const movementDrillsExercisesSelected = [
    weightedChoice(movementDrillsExercises, rand),
    weightedChoice(movementDrillsExercises, rand)
  ].filter((value, index, self) => self.indexOf(value) === index);
  
  const teamChallengeExercisesSelected = [
    weightedChoice(teamChallengeExercises, rand),
    weightedChoice(teamChallengeExercises, rand)
  ].filter((value, index, self) => self.indexOf(value) === index);
  
  const cooldownExercisesSelected = [
    weightedChoice(cooldownExercises, rand),
    weightedChoice(cooldownExercises, rand)
  ].filter((value, index, self) => self.indexOf(value) === index);
  
  // Determine terrain based on difficulty
  const terrainOptions: Record<'beginner' | 'intermediate' | 'advanced', ('road' | 'trail' | 'mixed' | 'hills' | 'sand')[]> = {
    beginner: ['road', 'trail'],
    intermediate: ['trail', 'hills', 'mixed'],
    advanced: ['mixed', 'trail', 'hills', 'sand']
  };
  
  const terrain = terrainOptions[difficulty];
  const selectedTerrain: ('road' | 'trail' | 'mixed' | 'hills' | 'sand')[] = [];
  
  // Select 1-2 terrain types
  const terrainCount = rand() < 0.5 ? 1 : 2;
  for (let i = 0; i < terrainCount; i++) {
    const terrainChoice = weightedChoice(terrain, rand);
    if (!selectedTerrain.includes(terrainChoice)) {
      selectedTerrain.push(terrainChoice);
    }
  }
  
  // Ensure we have at least one terrain
  if (selectedTerrain.length === 0) {
    selectedTerrain.push(terrain[0]);
  }
  
  // Calculate distance based on duration and difficulty (rough estimate: 3-5 km/h)
  const speedKmH: Record<'beginner' | 'intermediate' | 'advanced', number> = {
    beginner: 3.0,
    intermediate: 4.0,
    advanced: 4.5
  };
  
  const totalDurationHours = (warmupDuration + mainCarryDuration + movementDrillsDuration + teamChallengeDuration + cooldownDuration) / 60;
  const distance = Math.round(speedKmH[difficulty] * totalDurationHours * 10) / 10; // Round to 1 decimal
  
  // Determine load based on difficulty
  const loadRange: Record<'beginner' | 'intermediate' | 'advanced', [number, number]> = {
    beginner: [8, 12],
    intermediate: [12, 18],
    advanced: [18, 25]
  };
  
  const load = Math.floor(loadRange[difficulty][0] + rand() * (loadRange[difficulty][1] - loadRange[difficulty][0]));
  
  // Generate objectives based on difficulty and sections
  const objectives: string[] = [];
  
  if (difficulty === 'beginner') {
    objectives.push('Establish proper rucking form');
    objectives.push('Build base aerobic endurance');
  } else if (difficulty === 'intermediate') {
    objectives.push('Increase aerobic capacity');
    objectives.push('Build mental toughness');
  } else {
    objectives.push('Develop maximal strength under load');
    objectives.push('Improve posture and core stability');
  }
  
  // Add section-specific objectives
  if (warmupDuration >= 7) objectives.push('Thorough preparation for workout');
  if (mainCarryDuration >= 20) objectives.push('Build load carriage endurance');
  if (movementDrillsDuration >= 15) objectives.push('Develop agility and coordination');
  if (teamChallengeDuration >= 10) objectives.push('Enhance teamwork and communication');
  if (cooldownDuration >= 7) objectives.push('Promote recovery and flexibility');
  
  // Generate equipment list
  const equipment: string[] = [`ruck (${load}kg)`];
  
  if (load >= 15) equipment.push('weight plates (for adjustment)');
  if (difficulty === 'intermediate' || difficulty === 'advanced') equipment.push('hydration system (2L)');
  if (difficulty === 'advanced') equipment.push('navigation tools');
  if (selectedTerrain.includes('trail') || selectedTerrain.includes('hills')) equipment.push('trekking poles (optional)');
  if (selectedTerrain.includes('sand')) equipment.push('foot care supplies');
  if (teamChallengeExercisesSelected.some(ex => ex.includes('partner') || ex.includes('team'))) equipment.push('communication devices');
  
  // Add basics
  equipment.push('water');
  equipment.push('basic first aid');
  
  // Generate title and description
  const title = `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Rucking Workout`;
  const description = `A ${difficulty}-level rucking workout featuring ${warmupDuration}min warmup, ${mainCarryDuration}min main carry, ${movementDrillsDuration}min movement drills, ${teamChallengeDuration}min team challenge, and ${cooldownDuration}min cooldown.`;
  
  // Generate unique ID - deterministic if seed provided
  const idSeed = seed || Date.now();
  const idRandom = seed ? Math.floor(seededRandom(seed)() * 10000) : Math.floor(Math.random() * 10000);
  const id = `generated-${idSeed}-${idRandom}`;
  
  return {
    id,
    title,
    description,
    duration: warmupDuration + mainCarryDuration + movementDrillsDuration + teamChallengeDuration + cooldownDuration,
    distance,
    load,
    difficulty,
    terrain: selectedTerrain,
    objectives,
    equipment: [...new Set(equipment)], // Remove duplicates
    sections: [
      {
        name: 'Warmup',
        duration: warmupDuration,
        description: 'Prepare the body for the workout ahead',
        exercises: warmupExercisesSelected
      },
      {
        name: 'Main Carry',
        duration: mainCarryDuration,
        description: 'Primary load-bearing portion of the workout',
        exercises: mainCarryExercisesSelected
      },
      {
        name: 'Movement Drills',
        duration: movementDrillsDuration,
        description: 'Agility and coordination exercises',
        exercises: movementDrillsExercisesSelected
      },
      {
        name: 'Team Challenge',
        duration: teamChallengeDuration,
        description: 'Collaborative exercises to build teamwork',
        exercises: teamChallengeExercisesSelected
      },
      {
        name: 'Cooldown',
        duration: cooldownDuration,
        description: 'Gradual recovery and flexibility work',
        exercises: cooldownExercisesSelected
      }
    ],
    notes: `Generated workout${seed ? ` with seed ${seed}` : ''}. Focus on maintaining good form throughout all sections.`,
    seed
  };
}