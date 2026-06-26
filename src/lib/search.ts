import type { WordEntry, Game, Difficulty } from './types';

export interface SearchParams {
  query?: string;
  categories?: string[];
  difficulty?: Difficulty[];
  game?: Game;
}

export function searchWords(words: WordEntry[], params: SearchParams): WordEntry[] {
  let filtered = [...words];

  // Filter by game
  if (params.game) {
    filtered = filtered.filter(w => w.game === params.game);
  }

  // Filter by categories
  if (params.categories && params.categories.length > 0) {
    filtered = filtered.filter(w =>
      params.categories!.some(cat => w.categories.includes(cat))
    );
  }

  // Filter by difficulty
  if (params.difficulty && params.difficulty.length > 0) {
    filtered = filtered.filter(w => params.difficulty!.includes(w.difficulty));
  }

  // Filter by search query
  if (params.query && params.query.trim()) {
    const q = params.query.toLowerCase().trim();
    filtered = filtered.filter(w => {
      const matchesWord = w.word.toLowerCase().includes(q);
      const matchesAlias = w.aliases?.some(a => a.toLowerCase().includes(q));
      return matchesWord || matchesAlias;
    });
  }

  return filtered.sort((a, b) => a.word.localeCompare(b.word));
}

export function getRandomWord(words: WordEntry[]): WordEntry | undefined {
  if (words.length === 0) return undefined;
  return words[Math.floor(Math.random() * words.length)];
}

export function getCategoriesFromWords(words: WordEntry[]): string[] {
  const categories = new Set<string>();
  words.forEach(w => {
    w.categories.forEach(cat => categories.add(cat));
  });
  return Array.from(categories).sort();
}

export function getWordsByCategory(words: WordEntry[], category: string): WordEntry[] {
  return words.filter(w => w.categories.includes(category));
}

export function groupWordsByDifficulty(words: WordEntry[]): Record<Difficulty, WordEntry[]> {
  return {
    easy: words.filter(w => w.difficulty === 'easy'),
    medium: words.filter(w => w.difficulty === 'medium'),
    hard: words.filter(w => w.difficulty === 'hard'),
  };
}
