class CardGenerator {
  constructor(allTactics) {
    this.originalTactics = allTactics;
    this.allTactics = [...allTactics];
    this.deck = [...allTactics];
    this.lastDrawn = null;
    this.shuffleDeck();
  }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  reset() {
    this.allTactics = [...this.originalTactics];
    this.deck = [...this.allTactics];
    this.lastDrawn = null;
    this.shuffleDeck();
  }

  setCategory(category) {
    if (category === 'all' || !category) {
      this.allTactics = [...this.originalTactics];
    } else {
      this.allTactics = this.originalTactics.filter((tactic) => tactic.category === category);
    }
    this.deck = [...this.allTactics];
    this.lastDrawn = null;
    this.shuffleDeck();
  }

  draw(n = 1) {
    if (this.deck.length === 0) {
      this.reset();
    }

    let available = this.deck.filter((card) => card.id !== this.lastDrawn?.id);
    if (available.length === 0) {
      available = [...this.deck];
    }

    this.shuffleArray(available);

    const toDraw = Math.min(n, available.length);
    const drawn = available.slice(0, toDraw);

    this.deck = this.deck.filter((card) => !drawn.some((drawnCard) => drawnCard.id === card.id));

    if (drawn.length > 0) {
      this.lastDrawn = drawn[drawn.length - 1];
    }

    return drawn;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  get tacticCount() {
    return this.allTactics.length;
  }
}

function createPromptList(prompts) {
  const promptSection = document.createElement('div');
  promptSection.className = 'mt-4 text-base text-muted-foreground space-y-2';

  const promptHeading = document.createElement('h3');
  promptHeading.className = 'font-semibold mb-1 text-foreground';
  promptHeading.textContent = 'Prompts:';
  promptSection.appendChild(promptHeading);

  const promptList = document.createElement('ul');
  promptList.className = 'list-disc list-inside text-left space-y-1';

  prompts.forEach((prompt) => {
    const item = document.createElement('li');
    item.className = 'pl-2';
    item.textContent = prompt;
    promptList.appendChild(item);
  });

  promptSection.appendChild(promptList);
  return promptSection;
}

function createCardElement(card) {
  const cardDiv = document.createElement('div');
  cardDiv.className =
    'bg-white/95 border border-muted-200 rounded-[1.25rem] shadow-[0_18px_36px_rgba(28,28,28,0.08)] p-6 m-4 flex flex-col h-full swipe-card';

  const title = document.createElement('h2');
  title.className = 'text-2xl font-bold mb-4 text-foreground capitalize';
  title.textContent = card.category;
  cardDiv.appendChild(title);

  const body = document.createElement('p');
  body.className = 'text-xl text-foreground flex-grow leading-relaxed';
  body.textContent = card.text;
  cardDiv.appendChild(body);

  if (card.prompts.length > 0) {
    cardDiv.appendChild(createPromptList(card.prompts));
  }

  const meta = document.createElement('div');
  meta.className = 'mt-4 text-sm text-muted font-medium';
  meta.textContent = `Difficulty: ${card.difficulty} • Duration: ${card.duration}s`;
  cardDiv.appendChild(meta);

  return cardDiv;
}

function initCardGenerator() {
  const root = document.getElementById('card-generator-root');
  const categoryFilter = document.getElementById('categoryFilter');
  const drawOneBtn = document.getElementById('drawOneBtn');
  const drawThreeBtn = document.getElementById('drawThreeBtn');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const cardsContainer = document.getElementById('cardsContainer');
  const statusEl = document.getElementById('status');

  if (
    !(root instanceof HTMLElement) ||
    !(categoryFilter instanceof HTMLSelectElement) ||
    !(drawOneBtn instanceof HTMLButtonElement) ||
    !(drawThreeBtn instanceof HTMLButtonElement) ||
    !(shuffleBtn instanceof HTMLButtonElement) ||
    !(cardsContainer instanceof HTMLElement) ||
    !(statusEl instanceof HTMLElement)
  ) {
    return;
  }

  const rawTactics = root.dataset.crewTactics;
  let tactics = [];
  if (rawTactics) {
    try {
      const parsed = JSON.parse(rawTactics);
      if (Array.isArray(parsed)) {
        tactics = parsed.filter((item) => item && typeof item === 'object' && typeof item.id === 'string');
      }
    } catch {
      console.error('Failed to parse crew tactics data');
    }
  }
  const generator = new CardGenerator(tactics);

  if (categoryFilter.value !== 'all') {
    generator.setCategory(categoryFilter.value);
  }

  const updateStatus = () => {
    const drawnCount = cardsContainer.children.length;
    if (drawnCount === 0) {
      statusEl.textContent = 'Click a button above to draw cards';
    } else {
      statusEl.textContent = `Showing ${drawnCount} card${drawnCount !== 1 ? 's' : ''} from ${generator.tacticCount} total tactics`;
    }
  };

  const drawCards = (count) => {
    const cards = generator.draw(count);
    cardsContainer.replaceChildren(...cards.map((card) => createCardElement(card)));
    updateStatus();
  };

  drawOneBtn.addEventListener('click', () => drawCards(1));
  drawThreeBtn.addEventListener('click', () => drawCards(3));
  shuffleBtn.addEventListener('click', () => {
    generator.reset();
    if (categoryFilter.value !== 'all') {
      generator.setCategory(categoryFilter.value);
    }
    drawCards(3);
  });

  categoryFilter.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) {
      return;
    }

    generator.setCategory(target.value);
    drawCards(3);
  });

  document.addEventListener('keydown', (event) => {
    const activeElement = document.activeElement;
    if (!(activeElement instanceof HTMLElement)) {
      return;
    }

    if (event.key === 'Enter' && (drawOneBtn.contains(activeElement) || drawThreeBtn.contains(activeElement))) {
      event.preventDefault();
      if (drawOneBtn.contains(activeElement)) {
        drawCards(1);
      }
      if (drawThreeBtn.contains(activeElement)) {
        drawCards(3);
      }
    }

    if (event.key === ' ' && shuffleBtn.contains(activeElement)) {
      event.preventDefault();
      generator.reset();
      if (categoryFilter.value !== 'all') {
        generator.setCategory(categoryFilter.value);
      }
      drawCards(3);
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  cardsContainer.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.changedTouches[0].screenX;
    },
    { passive: true },
  );

  cardsContainer.addEventListener(
    'touchend',
    (event) => {
      touchEndX = event.changedTouches[0].screenX;
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        drawCards(1);
      }
    },
    { passive: true },
  );

  drawCards(3);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCardGenerator, { once: true });
} else {
  initCardGenerator();
}
