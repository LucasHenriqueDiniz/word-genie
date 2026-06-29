import React, { useState, useMemo } from 'react';
import { solvePattern } from '../lib/solver';

interface SimpleSolverProps {
  words: string[];
  game: 'gartic' | 'guess-the-build';
  placeholder?: string;
}

export default function SimpleSolver({
  words,
  game,
  placeholder = 'Enter pattern (e.g., __a____)'
}: SimpleSolverProps) {
  const [pattern, setPattern] = useState('');

  const matches = useMemo(() => {
    if (!pattern.trim()) return [];

    const normalized = pattern.toLowerCase();

    return words
      .filter(word => {
        if (word.length !== normalized.length) return false;
        for (let i = 0; i < normalized.length; i++) {
          if (normalized[i] !== '_' && normalized[i] !== word[i]) {
            return false;
          }
        }
        return true;
      })
      .slice(0, 200);
  }, [pattern, words]);

  return (
    <div className="space-y-6">
      {/* Input */}
      <div>
        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value.toLowerCase())}
          placeholder={placeholder}
          className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-blue-500"
        />
        <p className="text-sm text-gray-500 mt-2">
          Use <code className="bg-gray-100 px-2 py-1 rounded">_</code> for unknown letters (e.g., <code className="bg-gray-100 px-2 py-1 rounded">c__</code> finds "cat", "can")
        </p>
      </div>

      {/* Results */}
      {pattern && (
        <div>
          <h3 className="text-lg font-bold mb-4">
            {matches.length} match{matches.length !== 1 ? 'es' : ''} for "<code className="text-blue-600 font-mono">{pattern}</code>"
          </h3>

          {matches.length === 0 ? (
            <p className="text-gray-500 italic">No words match this pattern</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {matches.map((word) => (
                <div
                  key={word}
                  onClick={() => {
                    navigator.clipboard.writeText(word);
                  }}
                  className="bg-blue-50 border border-blue-300 p-3 rounded-lg text-center cursor-pointer hover:bg-blue-100 transition font-semibold text-blue-900"
                  title="Click to copy"
                >
                  {word}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {!pattern && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center text-gray-500">
          <p className="text-lg">Enter a pattern to find matching words</p>
          <p className="text-sm mt-2">Example: <code className="bg-white px-2 py-1 rounded">ele____</code></p>
        </div>
      )}
    </div>
  );
}
