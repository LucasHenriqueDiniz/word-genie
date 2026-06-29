import React, { useState, useMemo } from 'react';
import { solvePattern, wordsByLength } from '../lib/solver';

interface SolverBoxProps {
  words: string[];
  game: 'gartic' | 'guess-the-build';
}

export default function SolverBox({ words, game }: SolverBoxProps) {
  const [pattern, setPattern] = useState('');
  const [length, setLength] = useState<number | null>(null);

  // Get word length distribution
  const lengthStats = useMemo(() => {
    const stats: Record<number, number> = {};
    words.forEach(w => {
      stats[w.length] = (stats[w.length] || 0) + 1;
    });
    return stats;
  }, [words]);

  // Filter words by length first, then pattern
  const filteredByLength = useMemo(() => {
    if (!length) return words;
    return wordsByLength(words, length);
  }, [words, length]);

  // Apply pattern matching
  const matches = useMemo(() => {
    if (!pattern) return filteredByLength.slice(0, 20);

    const normalized = pattern.toLowerCase();
    if (normalized.length !== length) return [];

    return filteredByLength
      .filter(word => {
        for (let i = 0; i < normalized.length; i++) {
          if (normalized[i] !== '_' && normalized[i] !== word[i]) {
            return false;
          }
        }
        return true;
      })
      .slice(0, 100);
  }, [pattern, length, filteredByLength]);

  return (
    <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🔍 Word Solver</h2>

      {/* Length Selector */}
      <div>
        <label className="block text-sm font-semibold mb-2">Word Length:</label>
        <div className="grid grid-cols-6 gap-2 max-h-40 overflow-y-auto">
          {Object.entries(lengthStats)
            .sort(([a], [b]) => parseInt(a) - parseInt(b))
            .map(([len, count]) => (
              <button
                key={len}
                onClick={() => setLength(length === parseInt(len) ? null : parseInt(len))}
                className={`px-3 py-2 rounded text-sm font-semibold transition ${
                  length === parseInt(len)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {len} ({count})
              </button>
            ))}
        </div>
      </div>

      {/* Pattern Input */}
      {length && (
        <div>
          <label className="block text-sm font-semibold mb-2">
            Pattern (use _ for unknown letters):
          </label>
          <input
            type="text"
            value={pattern}
            onChange={(e) => {
              const val = e.target.value.toLowerCase();
              if (val.length <= length) {
                setPattern(val);
              }
            }}
            placeholder={`e.g. ${Array(length).fill('_').slice(0, 3).join('')}${Array(Math.max(0, length - 3)).fill('a').join('')}`}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg font-mono text-lg"
          />
        </div>
      )}

      {/* Results */}
      <div>
        <h3 className="text-lg font-bold mb-3">
          Results: {matches.length} word{matches.length !== 1 ? 's' : ''}
          {length && ` (length ${length})`}
        </h3>

        {matches.length === 0 ? (
          <p className="text-gray-500 italic">
            {!length ? 'Select a word length to start' : 'No words match this pattern'}
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {matches.map((word) => (
              <div
                key={word}
                className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-center cursor-pointer hover:bg-blue-100 transition"
                onClick={() => {
                  navigator.clipboard.writeText(word);
                }}
              >
                <div className="font-semibold text-blue-900">{word}</div>
                <div className="text-xs text-blue-600">click to copy</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Help Text */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
        <p className="font-semibold mb-2">💡 How to use:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Select the word length</li>
          <li>Enter the pattern using underscore (_) for unknown letters</li>
          <li>Click a word to copy it</li>
        </ol>
        <p className="mt-3 text-gray-600">
          Example: If the word is 5 letters and starts with "ca", enter: <span className="font-mono bg-white px-2 py-1 rounded">ca___</span>
        </p>
      </div>
    </div>
  );
}
