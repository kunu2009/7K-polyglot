
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { flashcards as defaultFlashcards } from '@/lib/sanskrit-data';
import { RotateCcw, ThumbsUp, ThumbsDown, Check, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Flashcard = typeof defaultFlashcards[0];

export default function FlashcardsPage() {
  const [allCards, setAllCards] = useState<Flashcard[]>(defaultFlashcards);

  useEffect(() => {
    try {
      const storedCards = localStorage.getItem('ai-generated-flashcards');
      if (storedCards) {
        const parsedCards: Flashcard[] = JSON.parse(storedCards);
        setAllCards(prev => [...prev, ...parsedCards]);
      }
    } catch (error) {
      console.error("Failed to load AI-generated flashcards from local storage", error);
    }
  }, []);

  const allChapterIds = useMemo(() => ['all', ...Array.from(new Set(allCards.map(c => c.chapterId)))], [allCards]);
  
  const [filteredCards, setFilteredCards] = useState<Flashcard[]>(allCards);
  const [shuffledCards, setShuffledCards] = useState<Flashcard[]>([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const shuffleCards = useCallback(() => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCardIndex(0);
    setIsFlipped(false);
  }, [filteredCards]);
  
  useEffect(() => {
    shuffleCards();
  }, [shuffleCards]);

  useEffect(() => {
    setFilteredCards(allCards);
  }, [allCards]);
  
  const handleFilterChange = (chapterId: string) => {
    if (chapterId === 'all') {
      setFilteredCards(allCards);
    } else {
      setFilteredCards(allCards.filter(card => card.chapterId === chapterId));
    }
  };

  const currentCard = useMemo(() => shuffledCards[cardIndex], [shuffledCards, cardIndex]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const changeCard = (direction: 'next' | 'prev') => {
    setIsFlipped(false);
    setTimeout(() => {
      if (direction === 'next') {
        setCardIndex((prevIndex) => (prevIndex + 1));
      } else {
        setCardIndex((prevIndex) => Math.max(0, prevIndex - 1));
      }
    }, 150);
  };

  const handleFeedback = (feedback: 'good' | 'easy' | 'hard') => {
    if (cardIndex < shuffledCards.length -1) {
      changeCard('next');
    }
  };

  if (shuffledCards.length === 0 || !currentCard) {
    return (
        <div className="flex flex-col items-center">
            <header className="mb-4 text-center">
                <h1 className="text-4xl font-headline font-bold">Flashcards</h1>
                <p className="text-lg text-muted-foreground mt-2">
                Practice vocabulary with spaced repetition.
                </p>
            </header>
            <div className="text-center p-8">
                <p>No cards available for this filter. Please select a chapter.</p>
                 <Select onValueChange={handleFilterChange} defaultValue="all">
                    <SelectTrigger className="w-[280px] mt-4">
                        <SelectValue placeholder="Filter by Chapter..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Chapters</SelectItem>
                        {allChapterIds.slice(1).map(id => <SelectItem key={id} value={id}>{id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <header className="mb-4 text-center">
        <h1 className="text-4xl font-headline font-bold">Flashcards</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Practice vocabulary with spaced repetition.
        </p>
      </header>

      <div className="w-full max-w-md flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
         <Select onValueChange={handleFilterChange} defaultValue="all">
            <SelectTrigger className="w-full sm:w-[280px]">
                <SelectValue placeholder="Filter by Chapter..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Chapters</SelectItem>
                {allChapterIds.slice(1).map(id => <SelectItem key={id} value={id}>{id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</SelectItem>)}
            </SelectContent>
        </Select>
        <Button onClick={shuffleCards} variant="outline" className="w-full sm:w-auto">
          <Shuffle className="mr-2 h-4 w-4" /> Shuffle
        </Button>
      </div>

       <div className="w-full max-w-md text-sm text-muted-foreground mb-4 text-center">
          Card {cardIndex + 1} of {shuffledCards.length}
        </div>

      <div className="w-full max-w-md perspective-1000">
        <div
          className={`relative w-full h-64 transform-style-preserve-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={handleFlip}
        >
          <div className="absolute w-full h-full backface-hidden">
            <Card className="w-full h-full flex items-center justify-center cursor-pointer bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-5xl font-bold font-headline text-center">
                  {currentCard.front}
                </p>
              </CardContent>
            </Card>
          </div>
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
                <Button onClick={() => handleFeedback('hard')} variant="destructive" size="lg">
                    <ThumbsDown className="mr-2 h-4 w-4"/> Hard
                </Button>
                <Button onClick={() => handleFeedback('good')} variant="secondary" size="lg">
                    <ThumbsUp className="mr-2 h-4 w-4"/> Good
                </Button>
                <Button onClick={() => handleFeedback('easy')} variant="default" className="bg-green-600 hover:bg-green-700 text-white">
                    <Check className="mr-2 h-4 w-4"/> Easy
                </Button>
            </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between w-full max-w-md">
        <Button variant="outline" onClick={() => changeCard('prev')} disabled={cardIndex === 0}>
          <ChevronLeft className="h-5 w-5 mr-2" /> Previous
        </Button>
        <Button variant="outline" onClick={() => changeCard('next')} disabled={cardIndex >= shuffledCards.length - 1}>
          Next <ChevronRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
