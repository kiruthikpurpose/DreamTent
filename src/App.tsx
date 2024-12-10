import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DreamInput } from './components/DreamInput';
import { EmotionButton } from './components/EmotionButton';
import { Community } from './components/Community';
import { Journal } from './components/Journal';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/Tabs';
import { Heart, Frown, Cloud, Zap, Smile, HelpCircle } from 'lucide-react';
import { Emotion } from './types/dream';

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion>();

  const emotions: { type: Emotion; icon: React.ReactNode }[] = [
    { type: 'Joy', icon: <Smile className="w-4 h-4" /> },
    { type: 'Fear', icon: <Frown className="w-4 h-4" /> },
    { type: 'Peace', icon: <Cloud className="w-4 h-4" /> },
    { type: 'Love', icon: <Heart className="w-4 h-4" /> },
    { type: 'Anxiety', icon: <Zap className="w-4 h-4" /> },
    { type: 'Confusion', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dream-black to-dream-purple/20 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-1">
        <Tabs defaultValue="analyze" className="w-full">
          <TabsList className="mb-8 flex justify-center">
            <TabsTrigger value="analyze">Analyze Dream</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="journal">Journal</TabsTrigger>
          </TabsList>

          <TabsContent value="analyze">
            <div className="flex flex-col items-center gap-8">
              <section className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Unlock the Mysteries of Your Dreams
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto">
                  Share your dreams and let our AI help you understand their deeper meaning.
                  Join our community of dreamers and explore the hidden messages in your subconscious.
                </p>
              </section>

              <DreamInput selectedEmotion={selectedEmotion} />

              <div className="flex flex-wrap gap-4 justify-center">
                {emotions.map(({ type, icon }) => (
                  <EmotionButton
                    key={type}
                    emotion={type}
                    icon={icon}
                    isSelected={selectedEmotion === type}
                    onClick={() => setSelectedEmotion(type)}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="community">
            <Community />
          </TabsContent>

          <TabsContent value="journal">
            <Journal />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}

export default App;