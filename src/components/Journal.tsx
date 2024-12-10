import React from 'react';
import { useDreamStore } from '../lib/store';
import { Button } from './ui/Button';
import { Trash2 } from 'lucide-react';

const CATEGORIES = ['recurring', 'nightmare', 'lucid', 'normal'] as const;

export const Journal: React.FC = () => {
  const { dreams, updateDream, deleteDream } = useDreamStore();
  const [selectedCategory, setSelectedCategory] = React.useState<typeof CATEGORIES[number] | 'all'>('all');

  const filteredDreams = dreams.filter(
    (dream) => selectedCategory === 'all' || dream.category === selectedCategory
  );

  const handleCategoryChange = (dreamId: string, category: typeof CATEGORIES[number]) => {
    updateDream(dreamId, { category });
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as typeof selectedCategory)}
          className="bg-white/10 border border-dream-purple/30 rounded-md px-3 py-1 text-sm"
        >
          <option value="all">All Dreams</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filteredDreams.length === 0 ? (
          <p className="text-gray-400">No dreams recorded yet. Start by analyzing a dream!</p>
        ) : (
          filteredDreams.map((dream) => (
            <div
              key={dream.id}
              className="p-4 rounded-lg bg-white/5 border border-dream-purple/30"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <p className="text-gray-300 mb-2">{dream.content}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    {dream.emotion && <span>{dream.emotion}</span>}
                    <span>•</span>
                    <span>{new Date(dream.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-dream-red hover:text-dream-red-light"
                  onClick={() => deleteDream(dream.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm text-gray-400">Category:</span>
                <select
                  value={dream.category || 'normal'}
                  onChange={(e) => handleCategoryChange(dream.id, e.target.value as typeof CATEGORIES[number])}
                  className="bg-white/10 border border-dream-purple/30 rounded-md px-2 py-1 text-sm"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {dream.interpretation && (
                <div className="mt-4 pt-4 border-t border-dream-purple/30">
                  <p className="text-sm text-gray-300">{dream.interpretation}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};