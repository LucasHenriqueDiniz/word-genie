import React, { useState } from 'react';

interface WordShowcaseProps {
  words: string[];
  title: string;
  columns?: 3 | 4;
  colorScheme?: 'blue' | 'orange';
}

const WordShowcase: React.FC<WordShowcaseProps> = ({ 
  words = [], 
  title, 
  columns = 4,
  colorScheme = 'blue'
}) => {
  const [copiedWord, setCopiedWord] = useState<string | null>(null);
  const accentColor = colorScheme === 'blue' ? 'blue' : 'orange';

  const handleCopy = (word: string) => {
    navigator.clipboard.writeText(word);
    setCopiedWord(word);
    setTimeout(() => setCopiedWord(null), 2000);
  };

  const gridCols = columns === 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4';

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
        <span className={`w-2 h-8 bg-${accentColor}-500 rounded-full`}></span>
        {title}
      </h3>
      <div className={`grid ${gridCols} gap-4`}>
        {words.map((word, i) => (
          <button
            key={`${word}-${i}`}
            onClick={() => handleCopy(word)}
            className={`
              relative p-4 text-center rounded-2xl font-semibold transition-all duration-300
              ${copiedWord === word 
                ? 'bg-green-500 text-white scale-95' 
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800 hover:border-blue-200 hover:shadow-md hover:-translate-y-1'
              }
            `}
          >
            <span className="truncate block uppercase tracking-wide">{word}</span>
            {copiedWord === word && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded-lg opacity-100 animate-in fade-in zoom-in duration-200">
                Copied!
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WordShowcase;