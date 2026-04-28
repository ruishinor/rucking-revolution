export interface RecommendedBook {
  id: string;
  title: string;
  author: string;
  description: string;
  isbn?: string;
  cover?: string;
  affiliateLink?: string; // Add Amazon Associates or other affiliate link here
}

export const recommendedReading: RecommendedBook[] = [
  {
    id: 'fixing-your-feet',
    title: 'Fixing Your Feet: Prevention and Treatments for Athletes',
    author: 'John Vonhof',
    description: 'A practical guide to foot care, blister prevention, and treatments for endurance athletes and long-distance walkers.',
    isbn: '189029250X',
    cover: '/images/external/fixing-your-feet-cover.jpg',
    affiliateLink: 'https://www.amazon.com/dp/189029250X?tag=YOUR_AFFILIATE_TAG'
  },
  {
    id: 'born-to-run',
    title: 'Born to Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen',
    author: 'Christopher McDougall',
    description: 'Explores the secrets of the Tarahumara Indians, ultra-running, and the science of why humans are built to run long distances.',
    isbn: '0307279189',
    cover: '/images/external/born-to-run-cover.jpg',
    affiliateLink: 'https://www.amazon.com/dp/0307279189?tag=YOUR_AFFILIATE_TAG'
  },
  {
    id: 'the-comrades-way',
    title: 'The Comrades Way: Lessons in Leadership from the World’s Largest Ultra-Marathon',
    author: 'John McInroy',
    description: 'Leadership and endurance lessons drawn from the Comrades Marathon, applicable to rucking and team building.',
    isbn: '0624065803',
    cover: '/images/external/comrades-way-cover.jpg',
    affiliateLink: 'https://www.amazon.com/dp/0624065803?tag=YOUR_AFFILIATE_TAG'
  },
  {
    id: 'endure',
    title: 'Endure: Mind, Body, and the Curiously Elastic Limits of Human Performance',
    author: 'Alex Hutchinson',
    description: 'Explores the science of endurance, how the mind and body interact to push limits in long-distance activities like rucking.',
    isbn: '0062499861',
    cover: '/images/external/endure-cover.jpg',
    affiliateLink: 'https://www.amazon.com/dp/0062499861?tag=YOUR_AFFILIATE_TAG'
  },
  {
    id: 'grit',
    title: 'Grit: The Power of Passion and Perseverance',
    author: 'Angela Duckworth',
    description: 'Explores how passion and perseverance drive high achievement, relevant for rucking discipline and long-term training.',
    isbn: '1501111106',
    cover: '/images/external/grit-cover.jpg',
    affiliateLink: 'https://www.amazon.com/dp/1501111106?tag=YOUR_AFFILIATE_TAG'
  }
];
