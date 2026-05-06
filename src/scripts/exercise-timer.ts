type TimerMode = 'work' | 'rest';

const TIMER_SELECTOR = '.exercise-timer';
const INITIALIZED_DATA_KEY = 'timerInitialized';
const LIFECYCLE_KEY = '__rrExerciseTimerLifecycleAttached';

function slugifyTimerId(value: string): string {
  return (
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'exercise'
  );
}

export function formatTimer(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function parseDurationMs(rawValue: string | undefined, fallbackSeconds: number): number {
  const parsedValue = Number.parseInt(rawValue ?? '', 10);
  if (Number.isFinite(parsedValue) && parsedValue >= 0) {
    return parsedValue * 1000;
  }

  return fallbackSeconds * 1000;
}

function setModeButtonClasses(button: HTMLElement, isActive: boolean): void {
  button.classList.toggle('bg-primary', isActive);
  button.classList.toggle('text-white', isActive);
  button.classList.toggle('bg-muted-100', !isActive);
  button.classList.toggle('text-muted-foreground', !isActive);
  button.classList.toggle('hover:bg-muted-200', !isActive);
  button.setAttribute('aria-pressed', String(isActive));
}

export function initExerciseTimers(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>(TIMER_SELECTOR).forEach((container) => {
    if (container.dataset[INITIALIZED_DATA_KEY] === 'true') {
      return;
    }

    const exerciseName = container.dataset.exercise?.trim() || 'Exercise';
    const timerId = container.dataset.timerId?.trim() || slugifyTimerId(exerciseName);
    const workDurationMs = parseDurationMs(container.dataset.workDuration, 60);
    const restDurationMs = parseDurationMs(container.dataset.restDuration, 30);

    const timerDisplay = container.querySelector<HTMLElement>(`#timer-display-${timerId}`);
    const statusDisplay = container.querySelector<HTMLElement>(`#timer-status-${timerId}`);
    const controlsContainer = container.querySelector<HTMLElement>(`#timer-controls-${timerId}`);
    const setsDisplay = container.querySelector<HTMLElement>(`#sets-counter-${timerId}`);

    if (!timerDisplay || !statusDisplay || !controlsContainer || !setsDisplay) {
      return;
    }

    const startButton = controlsContainer.querySelector<HTMLButtonElement>('[data-action="start"]');
    const pauseButton = controlsContainer.querySelector<HTMLButtonElement>('[data-action="pause"]');
    const stopButton = controlsContainer.querySelector<HTMLButtonElement>('[data-action="stop"]');
    const resetButton = controlsContainer.querySelector<HTMLButtonElement>('[data-action="reset"]');
    const incrementSetButton = container.querySelector<HTMLButtonElement>('[data-action="increment-set"]');
    const modeButtons = Array.from(container.querySelectorAll<HTMLElement>('.timer-mode-btn'));

    if (!startButton || !pauseButton || !stopButton || !resetButton || !incrementSetButton) {
      return;
    }

    container.dataset[INITIALIZED_DATA_KEY] = 'true';

    let currentMode: TimerMode = 'work';
    let currentDurationMs = workDurationMs;
    let remainingMs = workDurationMs;
    let timerInterval: number | null = null;
    let lastTickStartedAt = 0;
    let isRunning = false;
    let setsCompleted = 0;

    const syncControls = (state: { startDisabled: boolean; pauseDisabled: boolean; stopDisabled: boolean }) => {
      startButton.disabled = state.startDisabled;
      pauseButton.disabled = state.pauseDisabled;
      stopButton.disabled = state.stopDisabled;
    };

    const syncStatus = (message: string) => {
      statusDisplay.textContent = `${currentMode === 'work' ? 'Work' : 'Rest'}: ${message}`;
    };

    const syncDisplay = (value = remainingMs) => {
      timerDisplay.textContent = formatTimer(value);
    };

    const syncSets = () => {
      setsDisplay.textContent = String(setsCompleted);
    };

    const syncModeButtons = () => {
      modeButtons.forEach((button) => {
        setModeButtonClasses(button, button.dataset.mode === currentMode);
      });
    };

    const clearTimer = () => {
      if (timerInterval !== null) {
        window.clearInterval(timerInterval);
        timerInterval = null;
      }

      isRunning = false;
    };

    const captureElapsedTime = () => {
      if (!isRunning) {
        return;
      }

      remainingMs = Math.max(0, remainingMs - (Date.now() - lastTickStartedAt));
      lastTickStartedAt = Date.now();
    };

    const switchMode = (mode: TimerMode, options: { autoStart?: boolean } = {}) => {
      clearTimer();
      currentMode = mode;
      currentDurationMs = mode === 'work' ? workDurationMs : restDurationMs;
      remainingMs = currentDurationMs;
      syncModeButtons();
      syncDisplay();

      if (options.autoStart) {
        startTimer();
        return;
      }

      syncControls({ startDisabled: false, pauseDisabled: true, stopDisabled: true });
      syncStatus('Ready - Click Start to begin');
    };

    const handleIntervalCompletion = () => {
      if (currentMode === 'work') {
        setsCompleted += 1;
        syncSets();
        switchMode('rest', { autoStart: true });
        return;
      }

      switchMode('work', { autoStart: true });
    };

    const updateDisplay = () => {
      if (!isRunning) {
        return;
      }

      const nextRemainingMs = remainingMs - (Date.now() - lastTickStartedAt);

      if (nextRemainingMs <= 0) {
        remainingMs = 0;
        syncDisplay(0);
        handleIntervalCompletion();
        return;
      }

      syncDisplay(nextRemainingMs);
    };

    const startTimer = () => {
      if (isRunning) {
        return;
      }

      isRunning = true;
      lastTickStartedAt = Date.now();
      timerInterval = window.setInterval(updateDisplay, 100);
      syncControls({ startDisabled: true, pauseDisabled: false, stopDisabled: false });
      syncStatus('Running...');
      syncDisplay();
    };

    const pauseTimer = () => {
      if (!isRunning) {
        return;
      }

      captureElapsedTime();
      clearTimer();
      syncControls({ startDisabled: false, pauseDisabled: true, stopDisabled: false });
      syncDisplay();
      syncStatus('Paused');
    };

    const stopTimer = () => {
      captureElapsedTime();
      clearTimer();
      syncControls({ startDisabled: false, pauseDisabled: true, stopDisabled: true });
      syncDisplay();
      syncStatus('Stopped');
    };

    const resetTimer = () => {
      clearTimer();
      currentMode = 'work';
      currentDurationMs = workDurationMs;
      remainingMs = workDurationMs;
      syncModeButtons();
      syncControls({ startDisabled: false, pauseDisabled: true, stopDisabled: true });
      syncDisplay();
      syncStatus('Ready - Click Start to begin');
    };

    const incrementSet = () => {
      setsCompleted += 1;
      syncSets();
    };

    syncModeButtons();
    syncDisplay();
    syncSets();
    syncControls({ startDisabled: false, pauseDisabled: true, stopDisabled: true });
    syncStatus('Ready - Click Start to begin');

    modeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const nextMode = button.dataset.mode === 'rest' ? 'rest' : 'work';
        switchMode(nextMode);
      });
    });

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
    incrementSetButton.addEventListener('click', incrementSet);
  });
}

export function attachExerciseTimerLifecycle(doc: Document = document): void {
  if (typeof window === 'undefined') {
    return;
  }

  const init = () => initExerciseTimers(doc);
  const runtimeWindow = window as Window & { [LIFECYCLE_KEY]?: boolean };

  if (runtimeWindow[LIFECYCLE_KEY]) {
    init();
    return;
  }

  runtimeWindow[LIFECYCLE_KEY] = true;

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  doc.addEventListener('astro:page-load', init);
}
