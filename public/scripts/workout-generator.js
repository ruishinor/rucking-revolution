function renderObjectives(listEl, objectives) {
  const items = objectives.map((objective) => {
    const item = document.createElement('li');
    item.textContent = objective;
    return item;
  });

  listEl.replaceChildren(...items);
}

function createSectionElement(section, index) {
  const wrapper = document.createElement('div');
  wrapper.className = index === 0 ? 'pt-4' : 'border-t pt-4';

  const heading = document.createElement('h4');
  heading.className = 'text-lg font-semibold mb-2';
  heading.textContent = `${section.name} (${section.duration} min)`;
  wrapper.appendChild(heading);

  const description = document.createElement('p');
  description.className = 'text-gray-600 mb-2';
  description.textContent = section.description;
  wrapper.appendChild(description);

  if (section.exercises && section.exercises.length > 0) {
    const exerciseList = document.createElement('ul');
    exerciseList.className = 'list-disc list-inside space-y-1 text-gray-700 text-sm';

    section.exercises.forEach((exercise) => {
      const item = document.createElement('li');
      item.textContent = exercise;
      exerciseList.appendChild(item);
    });

    wrapper.appendChild(exerciseList);
  }

  return wrapper;
}

function renderWorkout(workout) {
  const title = document.getElementById('workout-title');
  const description = document.getElementById('workout-description');
  const duration = document.getElementById('workout-duration');
  const distance = document.getElementById('workout-distance');
  const load = document.getElementById('workout-load');
  const difficulty = document.getElementById('workout-difficulty');
  const terrain = document.getElementById('workout-terrain');
  const equipment = document.getElementById('workout-equipment');
  const objectives = document.getElementById('workout-objectives');
  const sections = document.getElementById('workout-sections');
  const notes = document.getElementById('workout-notes');
  const notesText = document.getElementById('workout-notes-text');

  if (!title || !description || !duration || !distance || !load || !difficulty || !terrain || !equipment || !objectives || !sections || !notes || !notesText) {
    throw new Error('Workout output elements are missing.');
  }

  title.textContent = workout.title;
  description.textContent = workout.description;
  duration.textContent = `${workout.duration} minutes`;
  distance.textContent = `${workout.distance} km`;
  load.textContent = `${workout.load} kg`;
  difficulty.textContent = workout.difficulty;
  terrain.textContent = workout.terrain
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(', ');
  equipment.textContent = workout.equipment.join(', ');

  renderObjectives(objectives, workout.objectives);
  sections.replaceChildren(
    ...workout.sections.map((section, index) => createSectionElement(section, index)),
  );

  if (workout.notes) {
    notes.classList.remove('hidden');
    notesText.textContent = workout.notes;
  } else {
    notes.classList.add('hidden');
    notesText.textContent = '';
  }
}

function initWorkoutGenerator() {
  const form = document.getElementById('workout-form');
  const errorDiv = document.getElementById('workout-generator-error');
  const workoutDiv = document.getElementById('generated-workout');

  if (!(form instanceof HTMLFormElement) || !(errorDiv instanceof HTMLElement) || !(workoutDiv instanceof HTMLElement)) {
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(form);
      const difficulty = formData.get('difficulty') || 'beginner';
      const timePreferenceRaw = formData.get('timePreference');
      const timePreference =
        typeof timePreferenceRaw === 'string' && timePreferenceRaw.trim().length > 0
          ? Number.parseInt(timePreferenceRaw, 10)
          : undefined;

      const response = await fetch('/api/workout-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          difficulty,
          ...(typeof timePreference === 'number' ? { timePreference } : {}),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to generate workout.');
      }

      errorDiv.classList.add('hidden');
      renderWorkout(result.workout);

      workoutDiv.classList.remove('hidden');
      workoutDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch {
      errorDiv.textContent = 'Failed to generate workout. Please try again.';
      errorDiv.classList.remove('hidden');
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWorkoutGenerator, { once: true });
} else {
  initWorkoutGenerator();
}
