import React from 'react';
import { Moon } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2">
          <Moon className="w-8 h-8 text-dream-purple animate-pulse" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-dream-purple to-dream-red bg-clip-text text-transparent">
            DreamTent
          </h1>
        </div>
      </div>
    </header>
  );
};