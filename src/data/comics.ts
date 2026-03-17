export interface Comic {
  id: string;
  title: string;
  episode: number;
  image: string; // path relative to public/
  caption: string;
  lesson: string;
}

export const comics: Comic[] = [
  {
    id: '1',
    title: 'First Mission',
    episode: 1,
    image: '/assets/sample-webcomic-01.png',
    caption: 'Red Rucker takes on the first ruck march.',
    lesson: 'Start slow, build endurance, and always check your gear.'
  },
  {
    id: '2',
    title: 'The Hill Challenge',
    episode: 2,
    image: '/assets/sample-webcomic-02.png',
    caption: "Steep hills test the team's resolve.",
    lesson: 'When the climb gets tough, lean on your crew and keep moving forward.'
  },
  {
    id: '3',
    title: 'Rain or Shine',
    episode: 3,
    image: '/assets/sample-webcomic-03.png',
    caption: 'Weather turns bad, but the mission continues.',
    lesson: 'Adaptability is key—adjust your pace, but never quit.'
  }
];