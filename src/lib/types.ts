export type Game = 'gartic' | 'guess-the-build';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Language = 'en' | 'pt' | 'es';

export interface WordEntry {
  word: string;
  game: Game;
  categories: string[];
  difficulty: Difficulty;
  language: Language;
  aliases?: string[];
  tips?: string;
}

export interface GameDefinition {
  slug: string;
  name: string;
  description: string;
  icon: string;
  categories: string[];
  color: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
  author?: string;
}

export interface BreadcrumbItem {
  label: string;
  url: string;
}
