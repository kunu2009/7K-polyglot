'use client';

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Layers,
  PencilRuler,
  MessageSquareQuote,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  RotateCw,
} from "lucide-react";
import {
  textbookChapters,
  flashcards,
  practiceQuestions,
} from "@/lib/sanskrit-data";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type Flashcard = typeof flashcards[0];
type PracticeQuestion = typeof practiceQuestions[0];

const FlashcardWidget = () => {
    const [shuffledCards, setShuffledCards] = useState<Flashcard[]>([]);
    const [cardIndex, setCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const shuffle = React.useCallback(() => {
        setShuffledCards([...flashcards].sort(() => Math.random() - 0.5));
        setCardIndex(0);
        setIsFlipped(false);
    }, []);

    useEffect(() => {
        shuffle();
    }, [shuffle]);

    const changeCard = (direction: 'next' | 'prev') => {
        setIsFlipped(false);
        setTimeout(() => { // for flip animation
            if (direction === 'next') {
                setCardIndex((prevIndex) => Math.min(shuffledCards.length - 1, prevIndex + 1));
            } else {
                setCardIndex((prevIndex) => Math.max(0, prevIndex - 1));
            }
        }, 150);
    };
    
    const currentCard = shuffledCards[cardIndex];
    if (!currentCard) return null;

    return (
        <Card className="w-full bg-card flex flex-col">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/20 p-3 rounded-lg">
                            <Layers className="h-6 w-6 text-primary"/>
                        </div>
                        <CardTitle className="font-headline text-xl">Quick Flashcard</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" onClick={shuffle} aria-label="Shuffle cards">
                        <Shuffle className="h-5 w-5"/>
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="flex-grow cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                <div className="perspective-1000 h-full min-h-[150px]">
                    <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
                        <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-4 bg-secondary rounded-lg">
                            <p className="text-3xl font-bold font-headline text-center">{currentCard.front}</p>
                        </div>
                        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center p-4 bg-accent text-accent-foreground rounded-lg">
                            <p className="text-2xl font-semibold text-center">{currentCard.back}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-6">
                <Button variant="outline" onClick={() => changeCard('prev')} disabled={cardIndex === 0}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Prev
                </Button>
                <span className="text-sm text-muted-foreground">{cardIndex + 1} / {shuffledCards.length}</span>
                <Button variant="outline" onClick={() => changeCard('next')} disabled={cardIndex === shuffledCards.length - 1}>
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
};

const QuizWidget = () => {
    const { toast } = useToast();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    
    const currentQuestion = practiceQuestions[currentQuestionIndex];
    const selectedOption = answers[currentQuestionIndex];
    const isAnswered = selectedOption !== undefined;

    const handleSelectOption = (option: string) => {
        if (isAnswered) return;

        setAnswers({ ...answers, [currentQuestionIndex]: option });

        if (option === currentQuestion.answer) {
            toast({ title: "Correct!" });
        } else {
            toast({ title: "Incorrect!", description: `The right answer is: ${currentQuestion.answer}`, variant: "destructive" });
        }
    };
    
    const changeQuestion = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrentQuestionIndex(prev => Math.min(practiceQuestions.length - 1, prev + 1));
        } else {
            setCurrentQuestionIndex(prev => Math.max(0, prev - 1));
        }
    };
    
    const handleRestart = () => {
        setAnswers({});
        setCurrentQuestionIndex(0);
        toast({ title: "Quiz restarted!" });
    };

    if (!currentQuestion) return null;

    return (
        <Card className="w-full bg-card flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                        <PencilRuler className="h-6 w-6 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-xl">Practice Question</CardTitle>
                </div>
                 <CardDescription className="pt-2 text-base">{currentQuestion.question}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <RadioGroup 
                    onValueChange={handleSelectOption} 
                    disabled={isAnswered} 
                    key={currentQuestionIndex}
                    value={selectedOption || ''}
                >
                    {currentQuestion.options.map((option, index) => (
                        <Label 
                            key={index} 
                            className={`flex items-center space-x-2 p-3 rounded-md border transition-colors ${!isAnswered ? 'cursor-pointer hover:bg-secondary' : 'cursor-not-allowed'}
                            ${isAnswered && option === currentQuestion.answer ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : ''}
                            ${isAnswered && selectedOption === option && option !== currentQuestion.answer ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}`}
                        >
                           <RadioGroupItem value={option} id={`q-widget-${currentQuestionIndex}-${index}`} />
                           <span>{option}</span>
                        </Label>
                    ))}
                </RadioGroup>
            </CardContent>
             <CardFooter className="flex-col items-stretch gap-2 pt-6">
                <div className="flex justify-between items-center">
                    <Button variant="outline" onClick={() => changeQuestion('prev')} disabled={currentQuestionIndex === 0}>
                        <ChevronLeft className="mr-2 h-4 w-4" /> Prev
                    </Button>
                    <span className="text-sm text-muted-foreground">{currentQuestionIndex + 1} / {practiceQuestions.length}</span>
                    <Button variant="outline" onClick={() => changeQuestion('next')} disabled={currentQuestionIndex === practiceQuestions.length - 1}>
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
                <Button variant="secondary" onClick={handleRestart}>
                    <RotateCw className="mr-2 h-4 w-4" /> Restart
                </Button>
            </CardFooter>
        </Card>
    );
};


const RandomVerseWidget = () => {
    const [verse, setVerse] = useState<{ sanskrit: string; translation: string } | null>(null);

    useEffect(() => {
        const randomChapter = textbookChapters[Math.floor(Math.random() * textbookChapters.length)];
        const randomVerse = randomChapter.content[Math.floor(Math.random() * randomChapter.content.length)];
        setVerse(randomVerse);
    }, []);

    if (!verse) return null;

    return (
        <Card className="w-full bg-card flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                        <MessageSquareQuote className="h-6 w-6 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-xl">Verse of the Day</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-2">
                <p className="font-semibold break-words">{verse.sanskrit}</p>
                <p className="text-muted-foreground text-sm italic">"{verse.translation}"</p>
            </CardContent>
        </Card>
    );
};


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 animate-fade-in-up">
      <header>
        <div>
            <h1 className="text-4xl font-headline font-bold">
                नमो नमः!
            </h1>
            <p className="text-lg text-muted-foreground mt-1">
                Welcome back, let's continue your journey.
            </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FlashcardWidget />
        <QuizWidget />
        <RandomVerseWidget />
      </div>

    </div>
  );
}
