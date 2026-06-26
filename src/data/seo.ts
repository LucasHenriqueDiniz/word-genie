// SEO Configuration for Word Genie
// This file centralizes all SEO metadata and strategies

export const siteConfig = {
  siteName: 'Word Genie',
  siteUrl: 'https://wordgenie.app',
  description: 'Word Helper for Gartic and Guess The Build games. 660+ words organized by difficulty and category.',
  author: 'Word Genie Team',
  email: 'support@wordgenie.app',
  language: 'en-US',
  socialProfiles: {
    twitter: '@wordgenie',
    github: 'wordgenie',
  },
};

export const seoPages = {
  home: {
    title: 'Word Genie - Word Helper for Gartic & Guess The Build',
    description: 'Get instant word ideas for Gartic and Guess The Build games. 660+ words organized by difficulty and category. Perfect for game nights!',
    keywords: ['gartic words', 'guess the build', 'drawing game', 'word helper', 'minecraft building'],
  },
  games: {
    title: 'Game Word Lists - Gartic & Guess The Build | Word Genie',
    description: 'Choose your game. Gartic word lists for drawing, Guess The Build ideas for Minecraft. Easy, medium, and hard words.',
    keywords: ['game words', 'word lists', 'gartic', 'guess the build'],
  },
  gartic: {
    title: 'Gartic Word Helper - 300+ Drawing Ideas | Word Genie',
    description: 'Find drawing words for Gartic. 300+ animal, object, food, place, action, and character words. Easy to expert difficulty.',
    keywords: ['gartic', 'drawing words', 'drawing game', 'word list'],
  },
  guessTheBuild: {
    title: 'Guess The Build Word List - 360+ Minecraft Ideas | Word Genie',
    description: 'Minecraft building word ideas for Guess The Build. 360+ structures from farms to fantasy. Easy to expert.',
    keywords: ['guess the build', 'minecraft building', 'building words', 'minecraft ideas'],
  },
  blog: {
    title: 'Game Strategies & Tips Blog | Word Genie',
    description: 'Tips, strategies, and guides for mastering Gartic and Guess The Build games. Improve your drawing and building skills.',
    keywords: ['game tips', 'strategies', 'drawing tips', 'building tips', 'game guides'],
  },
  about: {
    title: 'About Word Genie | Our Mission & Story',
    description: 'Learn about Word Genie, our mission to enhance gaming communities, and why we created this word helper tool.',
    keywords: ['about word genie', 'mission', 'game community'],
  },
  contact: {
    title: 'Contact Word Genie | Get in Touch',
    description: 'Have questions or suggestions? Contact us. We love hearing from our gaming community!',
    keywords: ['contact', 'feedback', 'suggestions', 'support'],
  },
};

export const schemaConfig = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Word Genie',
    url: 'https://wordgenie.app',
    logo: 'https://wordgenie.app/logo.png',
    description: 'Word Helper for Gartic and Guess The Build games',
    sameAs: ['https://twitter.com/wordgenie'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@wordgenie.app',
    },
  },

  webApplication: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Word Genie',
    description: 'Word Helper for Drawing and Building Games',
    url: 'https://wordgenie.app',
    applicationCategory: 'UtilityApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Search 660+ game words',
      'Filter by difficulty (easy, medium, hard)',
      'Organize by category',
      'Copy words to clipboard',
      'Drawing and building tips',
    ],
  },

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Word Genie',
    description: 'Online Game Word Helper Tool',
    url: 'https://wordgenie.app',
    email: 'support@wordgenie.app',
  },
};

export const analyticsConfig = {
  // Replace with actual Google Analytics ID
  googleAnalyticsId: 'G-XXXXXXXXXX',
  // Track these events
  events: {
    gameSelected: 'game_selected',
    categoryViewed: 'category_viewed',
    wordCopied: 'word_copied',
    searchPerformed: 'search_performed',
    blogPostViewed: 'blog_post_viewed',
  },
};

export const keywords = {
  primary: [
    'gartic word helper',
    'guess the build words',
    'drawing game words',
    'minecraft building ideas',
  ],
  secondary: [
    'easy drawing words',
    'hard gartic words',
    'minecraft structures',
    'game strategies',
    'drawing tips',
    'building tips',
  ],
  long_tail: [
    'easy animal words to draw',
    'hard gartic words list',
    'guess the build building ideas',
    'how to win gartic',
    'minecraft building word ideas',
  ],
};

export const contentStrategy = {
  targetAudience: [
    'Casual gamers playing drawing games',
    'Gartic players (all skill levels)',
    'Minecraft players doing Guess The Build',
    'Game night organizers',
    'Online gaming communities',
  ],
  contentTypes: [
    'Word lists (organized by difficulty)',
    'Strategy guides',
    'Tips and tricks',
    'Game tutorials',
    'Community resources',
  ],
  internalLinkStrategy: {
    description: 'Cross-link category pages with blog posts. Blog posts link to 3-5 category pages naturally. Category pages link back to relevant blog posts.',
    examples: [
      'Easy Words blog → Easy Animals/Objects/Food categories',
      'Hard Words blog → Hard Animals/Characters categories',
      'Gartic Tips → All Gartic category pages',
      'Guess Build Ideas → All Guess The Build category pages',
    ],
  },
};

export const searchConsoleGoals = {
  indexing: {
    target: '28+ pages indexed',
    pages: [
      'Homepage',
      '12 category pages (6 Gartic + 6 Guess The Build)',
      '6 blog pages (index + 5 posts)',
      '8 legal/core pages',
    ],
  },
  ranking: {
    keywordTargets: [
      'gartic word helper - Top 10',
      'guess the build words - Top 10',
      'drawing game words - Top 20',
      'minecraft building ideas - Top 20',
    ],
  },
  traffic: {
    target: '100+ visits/month within 3 months',
    organic: '70% from organic search',
    direct: '20% from direct traffic',
    referral: '10% from referrals',
  },
};
