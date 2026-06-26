import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import type { WordEntry } from '@/lib/types';

interface WordGridProps {
  words: WordEntry[];
  compact?: boolean;
}

export default function WordGrid({ words, compact = false }: WordGridProps) {
  const [copiedWord, setCopiedWord] = useState<string | null>(null);

  const copyToClipboard = (word: string) => {
    navigator.clipboard.writeText(word);
    setCopiedWord(word);
    setTimeout(() => setCopiedWord(null), 2000);
  };

  if (words.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500 text-lg">No words found. Try different filters!</p>
      </div>
    );
  }

  const gridCols = compact ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-3`}>
      {words.map(word => (
        <div
          key={`${word.word}-${word.difficulty}`}
          className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1">
              <p className="font-bold text-lg break-words">{word.word}</p>
              <div className="flex gap-1 flex-wrap mt-1">
                <span className={`text-xs px-2 py-1 rounded font-medium ${
                  word.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  word.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {word.difficulty}
                </span>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(word.word)}
              className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition"
              title="Copy word"
            >
              {copiedWord === word.word ? (
                <Check size={18} className="text-green-600" />
              ) : (
                <Copy size={18} className="text-gray-600" />
              )}
            </button>
          </div>

          {word.tips && (
            <p className="text-sm text-gray-600">
              <strong>Tip:</strong> {word.tips}
            </p>
          )}

          {word.aliases && word.aliases.length > 0 && (
            <p className="text-xs text-gray-500 mt-2">
              Aliases: {word.aliases.join(', ')}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
