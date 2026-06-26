import type { WordEntry } from '@/lib/types';

export const guessBuildWords: WordEntry[] = [
  // Animals
  { word: 'chicken coop', game: 'guess-the-build', categories: ['animals'], difficulty: 'easy', language: 'en', tips: 'Wood fence, hay, eggs' },
  { word: 'pig pen', game: 'guess-the-build', categories: ['animals'], difficulty: 'easy', language: 'en', tips: 'Mud, fence, pigs' },
  { word: 'horse stable', game: 'guess-the-build', categories: ['animals'], difficulty: 'medium', language: 'en', tips: 'Wooden structure, hay, horses' },
  { word: 'sheep farm', game: 'guess-the-build', categories: ['animals'], difficulty: 'easy', language: 'en', tips: 'Fenced area, grass, wool' },
  { word: 'bee hive', game: 'guess-the-build', categories: ['animals'], difficulty: 'easy', language: 'en', tips: 'Golden blocks, geometric' },
  { word: 'fish tank', game: 'guess-the-build', categories: ['animals'], difficulty: 'easy', language: 'en', tips: 'Glass or water, fish inside' },
  { word: 'aquarium', game: 'guess-the-build', categories: ['animals'], difficulty: 'medium', language: 'en', tips: 'Large tank, various fish, plants' },
  { word: 'bird cage', game: 'guess-the-build', categories: ['animals'], difficulty: 'easy', language: 'en', tips: 'Bars, perch, small' },
  { word: 'spider web', game: 'guess-the-build', categories: ['animals'], difficulty: 'easy', language: 'en', tips: 'String pattern, small details' },
  { word: 'dragon', game: 'guess-the-build', categories: ['animals'], difficulty: 'hard', language: 'en', tips: 'Large, wings, intimidating' },

  // Buildings - Easy
  { word: 'cabin', game: 'guess-the-build', categories: ['buildings'], difficulty: 'easy', language: 'en', tips: 'Small house, wood logs, cozy' },
  { word: 'mansion', game: 'guess-the-build', categories: ['buildings'], difficulty: 'medium', language: 'en', tips: 'Large house, multiple rooms, fancy' },
  { word: 'castle', game: 'guess-the-build', categories: ['buildings'], difficulty: 'medium', language: 'en', tips: 'Towers, walls, defensive' },
  { word: 'tower', game: 'guess-the-build', categories: ['buildings'], difficulty: 'easy', language: 'en', tips: 'Tall, vertical structure' },
  { word: 'bridge', game: 'guess-the-build', categories: ['buildings'], difficulty: 'easy', language: 'en', tips: 'Connects two places, over gap' },
  { word: 'windmill', game: 'guess-the-build', categories: ['buildings'], difficulty: 'medium', language: 'en', tips: 'Spinning blades, tall structure' },
  { word: 'lighthouse', game: 'guess-the-build', categories: ['buildings'], difficulty: 'medium', language: 'en', tips: 'Tall tower, light beam, coast' },
  { word: 'well', game: 'guess-the-build', categories: ['buildings'], difficulty: 'easy', language: 'en', tips: 'Deep hole, bucket, water' },
  { word: 'tent', game: 'guess-the-build', categories: ['buildings'], difficulty: 'easy', language: 'en', tips: 'Canvas, triangular, camping' },
  { word: 'pyramid', game: 'guess-the-build', categories: ['buildings'], difficulty: 'medium', language: 'en', tips: 'Triangle base, ancient, Egypt' },

  // Buildings - Medium/Hard
  { word: 'temple', game: 'guess-the-build', categories: ['buildings'], difficulty: 'medium', language: 'en', tips: 'Religious building, columns, grand' },
  { word: 'cathedral', game: 'guess-the-build', categories: ['buildings'], difficulty: 'hard', language: 'en', tips: 'Large church, cross, spire' },
  { word: 'pagoda', game: 'guess-the-build', categories: ['buildings'], difficulty: 'hard', language: 'en', tips: 'Asian tower, tiered roofs' },
  { word: 'skyscraper', game: 'guess-the-build', categories: ['buildings'], difficulty: 'medium', language: 'en', tips: 'Modern tall building, windows' },

  // Food
  { word: 'bakery', game: 'guess-the-build', categories: ['food'], difficulty: 'easy', language: 'en', tips: 'Oven, bread, sweet smells' },
  { word: 'farm', game: 'guess-the-build', categories: ['food'], difficulty: 'easy', language: 'en', tips: 'Crops, barn, animals' },
  { word: 'restaurant', game: 'guess-the-build', categories: ['food'], difficulty: 'easy', language: 'en', tips: 'Tables, kitchen, diners' },
  { word: 'garden', game: 'guess-the-build', categories: ['food'], difficulty: 'easy', language: 'en', tips: 'Vegetables, plants, dirt' },
  { word: 'orchard', game: 'guess-the-build', categories: ['food'], difficulty: 'medium', language: 'en', tips: 'Fruit trees, rows' },
  { word: 'vineyard', game: 'guess-the-build', categories: ['food'], difficulty: 'medium', language: 'en', tips: 'Grapevines, wine production' },

  // Objects
  { word: 'clock tower', game: 'guess-the-build', categories: ['objects'], difficulty: 'medium', language: 'en', tips: 'Large clock, tall structure' },
  { word: 'fountain', game: 'guess-the-build', categories: ['objects'], difficulty: 'easy', language: 'en', tips: 'Water spraying, decorative' },
  { word: 'statue', game: 'guess-the-build', categories: ['objects'], difficulty: 'medium', language: 'en', tips: 'Carved figure, monument' },
  { word: 'gate', game: 'guess-the-build', categories: ['objects'], difficulty: 'easy', language: 'en', tips: 'Entrance, wooden or iron' },
  { word: 'fence', game: 'guess-the-build', categories: ['objects'], difficulty: 'easy', language: 'en', tips: 'Boundary, wooden or metal' },
  { word: 'arch', game: 'guess-the-build', categories: ['objects'], difficulty: 'medium', language: 'en', tips: 'Curved structure, entrance' },
  { word: 'wall', game: 'guess-the-build', categories: ['objects'], difficulty: 'easy', language: 'en', tips: 'Vertical barrier, defense' },
  { word: 'door', game: 'guess-the-build', categories: ['objects'], difficulty: 'easy', language: 'en', tips: 'Entrance, hinged, handles' },

  // Fantasy
  { word: 'wizard tower', game: 'guess-the-build', categories: ['fantasy'], difficulty: 'hard', language: 'en', tips: 'Magical, mystical, tall tower' },
  { word: 'enchanted forest', game: 'guess-the-build', categories: ['fantasy'], difficulty: 'hard', language: 'en', tips: 'Magical trees, glowing lights' },
  { word: 'dragon nest', game: 'guess-the-build', categories: ['fantasy'], difficulty: 'hard', language: 'en', tips: 'Dragon lair, treasure, treasure chest' },
  { word: 'throne room', game: 'guess-the-build', categories: ['fantasy'], difficulty: 'hard', language: 'en', tips: 'Royal seat, grand hall' },
  { word: 'dungeon', game: 'guess-the-build', categories: ['fantasy'], difficulty: 'medium', language: 'en', tips: 'Dark underground, cells, chains' },
  { word: 'library', game: 'guess-the-build', categories: ['fantasy'], difficulty: 'easy', language: 'en', tips: 'Books, shelves, knowledge' },
  { word: 'laboratory', game: 'guess-the-build', categories: ['fantasy'], difficulty: 'medium', language: 'en', tips: 'Potions, equipment, scientific' },

  // Places
  { word: 'beach', game: 'guess-the-build', categories: ['places'], difficulty: 'easy', language: 'en', tips: 'Sand, ocean, palm trees' },
  { word: 'island', game: 'guess-the-build', categories: ['places'], difficulty: 'medium', language: 'en', tips: 'Surrounded by water, isolated' },
  { word: 'mountain', game: 'guess-the-build', categories: ['places'], difficulty: 'easy', language: 'en', tips: 'Peak, high altitude, rocks' },
  { word: 'valley', game: 'guess-the-build', categories: ['places'], difficulty: 'medium', language: 'en', tips: 'Low area between mountains' },
  { word: 'canyon', game: 'guess-the-build', categories: ['places'], difficulty: 'medium', language: 'en', tips: 'Deep gorge, walls, river' },
  { word: 'cave', game: 'guess-the-build', categories: ['places'], difficulty: 'easy', language: 'en', tips: 'Underground hollow, dark' },
  { word: 'volcano', game: 'guess-the-build', categories: ['places'], difficulty: 'medium', language: 'en', tips: 'Lava, hot, dangerous' },
  { word: 'desert', game: 'guess-the-build', categories: ['places'], difficulty: 'easy', language: 'en', tips: 'Sand, hot, sparse vegetation' },
  { word: 'snow land', game: 'guess-the-build', categories: ['places'], difficulty: 'easy', language: 'en', tips: 'Ice, snow, cold' },
  { word: 'jungle', game: 'guess-the-build', categories: ['places'], difficulty: 'medium', language: 'en', tips: 'Dense vegetation, wildlife' },
  { word: 'swamp', game: 'guess-the-build', categories: ['places'], difficulty: 'easy', language: 'en', tips: 'Marshy, water, vegetation' },
];
