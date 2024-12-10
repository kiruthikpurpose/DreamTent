export type Emotion = 'Joy' | 'Fear' | 'Peace' | 'Love' | 'Anxiety' | 'Confusion';

export interface Dream {
  id: string;
  content: string;
  emotion?: Emotion;
  interpretation?: string;
  date: string;
  isPublic?: boolean;
  category?: 'recurring' | 'nightmare' | 'lucid' | 'normal';
}