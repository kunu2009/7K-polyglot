'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { flashcards } from '@/lib/sanskrit-data';
import { RotateCcw, ThumbsUp, ThumbsDown, Check } from 'lucide-react';
import { useDailyTasks } from '@/context/daily-tasks-context';

export default function FlashcardsPage() {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards] = useState(() => [...flashcards].sort(() => Math.random() - 0.5));
  const { updateTaskProgress } = useDailyTasks();

  const currentCard = shuffledCards[cardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = (feedback: 'good' | 'easy' | 'hard') => {
    // In a real SRS, this would schedule the next review.
    // Here, we just move to the next card and update progress.
    updateTaskProgress('task-0', 1);
    setIsFlipped(false);
    setTimeout(() => {
        setCardIndex((prevIndex) => (prevIndex + 1) % shuffledCards.length);
    }, 150); // Short delay for flip animation
  };

  return (
    <div className="flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold">Flashcards</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Practice vocabulary with spaced repetition.
        </p>
      </header>

      <div className="w-full max-w-md perspective-1000">
        <div
          className={`relative w-full h-64 transform-style-preserve-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={handleFlip}
        >
          {/* Front of the card */}
          <div className="absolute w-full h-full backface-hidden">
            <Card className="w-full h-full flex items-center justify-center cursor-pointer bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-5xl font-bold font-headline text-center">
                  {currentCard.front}
                </p>
              </CardContent>
            </Card>
          </div>
          {/* Back of the card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <Card className="w-full h-full flex items-center justify-center cursor-pointer bg-accent text-accent-foreground hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-4xl font-semibold text-center">
                  {currentCard.back}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md text-center">
        {!isFlipped ? (
            <Button onClick={handleFlip} size="lg" className="w-full">
                <RotateCcw className="mr-2 h-4 w-4" /> Reveal Answer
            </Button>
        ) : (
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up">
                <Button onClick={() => handleNext('hard')} variant="destructive" size="lg">
                    <ThumbsDown className="mr-2 h-4 w-4"/> Hard
                </Button>
                <Button onClick={() => handleNext('good')} variant="secondary" size="lg">
                    <ThumbsUp className="mr-2 h-4 w-4"/> Good
                </Button>
                <Button onClick={() => handleNext('easy')} variant="default" className="bg-green-600 hover:bg-green-700 text-white">
                    <Check className="mr-2 h-4 w-4"/> Easy
                </Button>
            </div>
        )}
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        Card {cardIndex + 1} of {shuffledCards.length}
      </div>
    </div>
  );
}
