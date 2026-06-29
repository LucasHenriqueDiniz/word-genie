/**
 * Game Word Solver
 * Matches user patterns to real game words
 * Pattern: "ca_" or "c_t" (underscore = unknown letter)
 */

export interface SolverResult {
  matches: string[];
  count: number;
  pattern: string;
  game: 'gartic' | 'guess-the-build';
}

/**
 * Check if a word matches the pattern
 * Pattern uses underscore (_) for unknown letters
 * Example: "ca_" matches "cat", "can", "cap"
 */
function wordMatchesPattern(word: string, pattern: string): boolean {
  if (word.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] !== '_' && pattern[i] !== word[i]) {
      return false;
    }
  }

  return true;
}

/**
 * Solve: find all words matching the pattern
 */
export function solvePattern(
  words: string[],
  pattern: string,
  game: 'gartic' | 'guess-the-build',
  limit: number = 100
): SolverResult {
  const normalized = pattern.toLowerCase();

  const matches = words
    .filter(word => wordMatchesPattern(word, normalized))
    .slice(0, limit);

  return {
    matches,
    count: matches.length,
    pattern: normalized,
    game
  };
}

/**
 * Get word length suggestions
 * Used to help user format pattern correctly
 */
export function suggestLengths(words: string[]): Record<number, number> {
  const lengths: Record<number, number> = {};

  words.forEach(word => {
    const len = word.length;
    lengths[len] = (lengths[len] || 0) + 1;
  });

  return lengths;
}

/**
 * Filter words by length
 */
export function wordsByLength(words: string[], length: number): string[] {
  return words.filter(w => w.length === length);
}

/**
 * Get pattern from partially revealed word
 * Example: "ca_" from revealed letters [0, 1]
 */
export function buildPattern(word: string, revealedIndices: number[]): string {
  const chars = word.split('');
  const revealed = new Set(revealedIndices);

  return chars
    .map((c, i) => revealed.has(i) ? c : '_')
    .join('');
}
