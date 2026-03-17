/// <reference types="vitest" />
import { generateWorkout } from '../src/components/WorkoutGenerator';

describe('Workout Generator', () => {
  test('generates a valid workout with correct structure', () => {
    const workout = generateWorkout('beginner', 12345);
    
    // Check that all required fields are present
    expect(workout).toHaveProperty('id');
    expect(workout).toHaveProperty('title');
    expect(workout).toHaveProperty('description');
    expect(workout).toHaveProperty('duration');
    expect(workout).toHaveProperty('distance');
    expect(workout).toHaveProperty('load');
    expect(workout).toHaveProperty('difficulty');
    expect(workout).toHaveProperty('terrain');
    expect(workout).toHaveProperty('objectives');
    expect(workout).toHaveProperty('equipment');
    expect(workout).toHaveProperty('sections');
    
    // Check difficulty is correct
    expect(workout.difficulty).toBe('beginner');
    
    // Check that duration is reasonable (between 35 and 65 minutes for beginner)
    expect(workout.duration).toBeGreaterThanOrEqual(35);
    expect(workout.duration).toBeLessThanOrEqual(65);
    
    // Check that all sections are present
    const sectionNames = workout.sections.map((s: any) => s.name);
    expect(sectionNames).toContain('Warmup');
    expect(sectionNames).toContain('Main Carry');
    expect(sectionNames).toContain('Movement Drills');
    expect(sectionNames).toContain('Team Challenge');
    expect(sectionNames).toContain('Cooldown');
    
    // Check that each section has a duration
    workout.sections.forEach((section: any) => {
      expect(section.duration).toBeGreaterThan(0);
    });
  });
  
  test('generator is deterministic with seed', () => {
    const workout1 = generateWorkout('intermediate', 54321);
    const workout2 = generateWorkout('intermediate', 54321);
    
    // With the same seed, workouts should be identical
    expect(workout1).toEqual(workout2);
  });
  
  test('different seeds produce different workouts', () => {
    const workout1 = generateWorkout('advanced', 1000);
    const workout2 = generateWorkout('advanced', 2000);
    
    // Very unlikely to be the same with different seeds
    expect(workout1).not.toEqual(workout2);
  });
  
  test('respects time preference when provided', () => {
    const workout = generateWorkout('beginner', 9999, 60); // Request 60 minute workout
    
    // Duration should be close to 60 minutes (within reasonable bounds due to section constraints)
    expect(workout.duration).toBeGreaterThanOrEqual(45);
    expect(workout.duration).toBeLessThanOrEqual(75);
  });
  
  test('works for all difficulty levels', () => {
    const difficulties: ('beginner' | 'intermediate' | 'advanced')[] = ['beginner', 'intermediate', 'advanced'];
    
    difficulties.forEach(difficulty => {
      const workout = generateWorkout(difficulty, 11111);
      expect(workout.difficulty).toBe(difficulty);
      
      // Basic sanity checks
      expect(workout.duration).toBeGreaterThan(0);
      expect(workout.load).toBeGreaterThan(0);
      expect(workout.distance).toBeGreaterThan(0);
    });
  });
});