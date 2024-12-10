import { Emotion } from '../types/dream';

const emotionInterpretations: Record<Emotion, string[]> = {
  Joy: [
    'Your dream reflects a period of happiness and fulfillment in your life.',
    'This positive dream suggests you\'re in harmony with your current life path.',
    'The joy in your dream might be revealing hidden opportunities for happiness.',
  ],
  Fear: [
    'This dream might be highlighting areas in your life that need attention.',
    'Your fear could be representing unresolved anxieties or concerns.',
    'Consider what this fear might be teaching you about your personal growth.',
  ],
  Peace: [
    'The tranquility in your dream suggests inner harmony.',
    'You might be reaching a state of acceptance with recent life events.',
    'This peaceful dream could be guiding you toward emotional balance.',
  ],
  Love: [
    'Your dream indicates deep connections and emotional fulfillment.',
    'This might represent self-love and personal acceptance.',
    'Consider the relationships in your life that bring you joy.',
  ],
  Anxiety: [
    'Your dream might be processing daily stresses and concerns.',
    'Consider what aspects of your life might need more attention.',
    'This could be an opportunity to address underlying worries.',
  ],
  Confusion: [
    'The confusion in your dream might represent life transitions.',
    'Consider what unclear situations in your life need resolution.',
    'This dream could be helping you process complex emotions.',
  ],
};

export function analyzeDream(content: string, emotion?: Emotion): string {
  if (!content) return 'Please provide a dream to analyze.';

  let interpretation = 'Based on your dream, here\'s what we can interpret:\n\n';

  // Basic content analysis
  if (content.length < 50) {
    interpretation += '• Your dream seems brief. Consider adding more details for a deeper analysis.\n';
  }

  // Add emotion-based interpretation
  if (emotion) {
    const emotionInsights = emotionInterpretations[emotion];
    const randomInsight = emotionInsights[Math.floor(Math.random() * emotionInsights.length)];
    interpretation += `• ${randomInsight}\n`;
  }

  // Add general interpretation based on common dream symbols
  interpretation += '\nCommon symbols in your dream:\n';
  const symbols = [
    ['water', 'emotions and the unconscious mind'],
    ['flying', 'freedom and independence'],
    ['falling', 'loss of control or anxiety'],
    ['running', 'avoiding or pursuing something'],
  ];

  symbols.forEach(([symbol, meaning]) => {
    if (content.toLowerCase().includes(symbol)) {
      interpretation += `• ${symbol.charAt(0).toUpperCase() + symbol.slice(1)}: Represents ${meaning}\n`;
    }
  });

  return interpretation;
}