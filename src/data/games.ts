import type { GameDefinition } from '@/lib/types';

export const games: GameDefinition[] = [
  {
    slug: 'gartic',
    name: 'Gartic',
    description: 'Find quick word ideas for drawing in Gartic Phone',
    icon: '🎨',
    categories: ['animals', 'objects', 'food', 'places', 'actions', 'characters'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    slug: 'guess-the-build',
    name: 'Guess The Build',
    description: 'Get Minecraft building word ideas and guessing tips',
    icon: '🏗️',
    categories: ['animals', 'buildings', 'food', 'objects', 'fantasy', 'places'],
    color: 'from-orange-500 to-orange-600',
  },
];

export const gameBySlug = (slug: string) => games.find(g => g.slug === slug);
