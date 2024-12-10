import React from 'react';
import { useDreamStore } from '../lib/store';

export const Community: React.FC = () => {
  const dreams = useDreamStore((state) => 
    state.dreams.filter((dream) => dream.isPublic)
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-dream-purple-light">Community Dreams</h2>
      <div className="space-y-4">
        {dreams.length === 0 ? (
          <p className="text-gray-400">No shared dreams yet. Be the first to share!</p>
        ) : (
          dreams.map((dream) => (
            <div
              key={dream.id}
              className="p-4 rounded-lg bg-white/5 border border-dream-purple/30"
            >
              <p className="text-gray-300 mb-2">{dream.content}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                {dream.emotion && <span>{dream.emotion}</span>}
                <span>•</span>
                <span>{new Date(dream.date).toLocaleDateString()}</span>
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