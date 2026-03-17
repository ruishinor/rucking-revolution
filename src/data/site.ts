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
      primary: '#8B0000', // Deep Red
      secondary: '#1C1C1C', // Charcoal
      accent: '#E85C2A', // Signal Orange
    },
    fonts: {
      heading: 'Bebas Neue, sans-serif',
      body: 'Inter, sans-serif',
    },
  },
  // CMS Configuration
  useCMS: false, // Set to true to enable Ghost CMS integration
  cmsProvider: 'ghost', // Options: 'ghost' or 'none'
  // AAR Submission Settings
  allowPublicSubmissions: true, // Toggle to allow public submissions to AAR system
};