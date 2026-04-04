import { getAarConfiguration } from '@/lib/aarSubmission';

export const site = {
  title: 'Rucking Revolution',
  description: 'A structured knowledge platform for rucking as discipline, leadership practice, and practical field activity.',
  baseUrl: 'https://ruckingrevolution.org',
  primaryNav: [
    { name: 'Home', link: '/' },
    { name: 'Learn', link: '/learn' },
    { name: 'Train', link: '/train' },
    { name: 'Lead', link: '/lead' },
    { name: 'Red Rucker', link: '/red-rucker' },
    { name: 'About', link: '/about' },
  ],
  secondaryNav: [
    { name: 'Privacy Policy', link: '/privacy' },
    { name: 'FAQ', link: '/faq' },
    { name: 'Contact', link: '/contact' },
    { name: 'Social Media', link: '/social' },
    { name: 'Terms', link: '/terms' },
  ],
  brand: {
    colors: {
      primary: '#8B0000',
      secondary: '#1C1C1C',
      accent: '#E85C2A',
    },
    fonts: {
      heading: 'Archivo, sans-serif',
      body: 'IBM Plex Sans, sans-serif',
    },
  },
  useCMS: false,
  cmsProvider: 'ghost',
  get allowPublicSubmissions() {
    return getAarConfiguration().enabled;
  },
  leadMagnet: {
    title: 'Your First 3 Rucks',
    subtitle: 'One page. Three sessions. A quiet confidence boost.',
    download: '/downloads/the-first-3-rucks-quick-start.html',
  },
  leadBook: {
    link: '/library',
  },
};
