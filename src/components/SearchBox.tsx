import React, { useState, useCallback } from 'react';
import { Search, RotateCcw } from 'lucide-react';
import type { WordEntry } from '@/lib/types';
import { searchWords, getRandomWord } from '@/lib/search';

interface SearchBoxProps {
  words: WordEntry[];
  categories: string[];
  onSearch: (results: WordEntry[]) => void;
  onRandom?: (word: WordEntry | undefined) => void;
}

export default function SearchBox({
  words,
  categories,
  onSearch,
  onRandom,
}: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSearch = useCallback(() => {
    const results = searchWords(words, {
      query,
      categories: selectedCategories.length > 0 ? selectedCategories : categories,
    });
    onSearch(results);
  }, [query, selectedCategories, words, categories, onSearch]);

  const handleRandom = () => {
    const results = searchWords(words, {
      categories: selectedCategories.length > 0 ? selectedCategories : categories,
    });
    const randomWord = getRandomWord(results);
    onRandom?.(randomWord);
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  React.useEffect(() => {
    handleSearch();
  }, [selectedCategories]);

  return (
    <div className="w-full space-y-4">
      {/* Search Input */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search words..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              handleSearch();
            }}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            className="input-field pl-10 w-full"
          />
        </div>
        <button
          onClick={handleRandom}
          className="btn btn-primary flex items-center gap-2 whitespace-nowrap"
          title="Get a random word"
        >
          <RotateCcw size={18} />
          Random
        </button>
      </div>

      {/* Category Filters */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                selectedCategories.includes(cat)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
