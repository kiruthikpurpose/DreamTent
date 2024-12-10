import React from 'react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

interface EmotionButtonProps {
  emotion: string;
  icon: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

export const EmotionButton: React.FC<EmotionButtonProps> = ({
  emotion,
  icon,
  isSelected,
  onClick,
}) => {
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={onClick}
      className={cn(
        'flex items-center gap-2',
        isSelected && 'ring-2 ring-dream-purple-light'
      )}
    >
      {icon}
      <span>{emotion}</span>
    </Button>
  );
};