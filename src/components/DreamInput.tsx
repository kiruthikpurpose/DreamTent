import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/Button';
import { analyzeDream } from '../lib/dreamAnalyzer';
import { Emotion } from '../types/dream';
import { useDreamStore } from '../lib/store';
import { Switch } from './ui/Switch';
import { Toast } from './ui/Toast';

interface DreamInputProps {
  selectedEmotion?: Emotion;
}

export const DreamInput: React.FC<DreamInputProps> = ({ selectedEmotion }) => {
  const [dream, setDream] = useState('');
  const [interpretation, setInterpretation] = useState<string | null>(null);
  const [isPublic, setIsPublic] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const addDream = useDreamStore((state) => state.addDream);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dream.trim()) return;

    const analysis = analyzeDream(dream, selectedEmotion);
    setInterpretation(analysis);
    
    addDream(dream, selectedEmotion, isPublic);
    setShowToast(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setDream('');
      setIsPublic(false);
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-2xl space-y-4">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <textarea
            value={dream}
            onChange={(e) => setDream(e.target.value)}
            placeholder="Describe your dream..."
            className="w-full min-h-[200px] p-4 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-dream-purple/30 focus:border-dream-purple focus:ring-1 focus:ring-dream-purple outline-none resize-none"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch
                id="public"
                checked={isPublic}
                onCheckedChange={setIsPublic}
              />
              <label
                htmlFor="public"
                className="text-sm text-gray-300"
              >
                Share publicly
              </label>
            </div>
            <Button
              type="submit"
              variant="secondary"
              glowing
            >
              <Send className="w-4 h-4 mr-2" />
              Analyze Dream
            </Button>
          </div>
        </div>
      </form>

      {interpretation && (
        <div className="p-4 rounded-lg bg-white/5 border border-dream-purple/30">
          <h3 className="text-lg font-semibold text-dream-purple-light mb-2">Dream Interpretation</h3>
          <div className="text-gray-300 whitespace-pre-line">{interpretation}</div>
        </div>
      )}

      <Toast
        open={showToast}
        onOpenChange={setShowToast}
        title="Dream Saved!"
        description="Your dream has been successfully recorded."
      />
    </div>
  );
};