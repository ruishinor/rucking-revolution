export class CardGenerator {
  private originalTactics: any[];
  private allTactics: any[];
  private deck: any[];
  private lastDrawn: any | null;

  constructor(allTactics: any[]) {
    this.originalTactics = allTactics;
    this.allTactics = [...allTactics];
    this.deck = [...allTactics];
    this.lastDrawn = null;
    this.shuffleDeck();
  }

  private shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
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

  setCategory(category: string | null) {
    if (category === 'all' || !category) {
      this.allTactics = [...this.originalTactics];
    } else {
      this.allTactics = this.originalTactics.filter((tactic: any) => tactic.category === category);
    }
    this.deck = [...this.allTactics];
    this.lastDrawn = null;
    this.shuffleDeck();
  }

  draw(n = 1): any[] {
    if (this.deck.length === 0) {
      this.reset();
    }

    // Create available deck without the last drawn card
    let available = this.deck.filter((card: any) => card.id !== this.lastDrawn?.id);
    if (available.length === 0) {
      available = [...this.deck]; // fallback to full deck if we have no other option
    }

    // Shuffle the available deck
    this.shuffleArray(available);

    // Draw min(n, available.length) cards
    const toDraw = Math.min(n, available.length);
    const drawn = available.slice(0, toDraw);

    // Remove the drawn cards from the main deck
    this.deck = this.deck.filter((card: any) => !drawn.some((d: any) => d.id === card.id));

    // Update lastDrawn
    if (drawn.length > 0) {
      this.lastDrawn = drawn[drawn.length - 1];
    }

    return drawn;
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}