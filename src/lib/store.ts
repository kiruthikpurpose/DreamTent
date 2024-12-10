import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Dream, Emotion } from '../types/dream';

interface DreamStore {
  dreams: Dream[];
  addDream: (content: string, emotion?: Emotion, isPublic?: boolean) => void;
  updateDream: (id: string, updates: Partial<Dream>) => void;
  deleteDream: (id: string) => void;
}

export const useDreamStore = create<DreamStore>()(
  persist(
    (set) => ({
      dreams: [],
      addDream: (content, emotion, isPublic = false) => {
        const newDream: Dream = {
          id: crypto.randomUUID(),
          content,
          emotion,
          date: new Date().toISOString(),
          isPublic,
          interpretation: '',
        };
        set((state) => ({
          dreams: [newDream, ...state.dreams],
        }));
      },
      updateDream: (id, updates) =>
        set((state) => ({
          dreams: state.dreams.map((dream) =>
            dream.id === id ? { ...dream, ...updates } : dream
          ),
        })),
      deleteDream: (id) =>
        set((state) => ({
          dreams: state.dreams.filter((dream) => dream.id !== id),
        })),
    }),
    {
      name: 'dream-store',
    }
  )
);