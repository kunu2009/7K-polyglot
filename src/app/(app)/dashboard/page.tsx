
'use client';

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Layers,
  PencilRuler,
  MessageSquareQuote,
} from "lucide-react";
import {
  textbookChapters,
  flashcards,
  practiceQuestions,
} from "@/lib/sanskrit-data";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FlashcardWidget = () => {
    const [card, setCard] = useState<(typeof flashcards)[0] | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setCard(flashcards[Math.floor(Math.random() * flashcards.length)]);
    }, []);

    if (!card) return null;

    return (
        <Card className="w-full bg-card flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                        <Layers className="h-6 w-6 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-xl">Quick Flashcard</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                <div className="perspective-1000 h-full min-h-[150px]">
                    <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
                        <div className="absolute w-full h-full backface-hidden flex items-center justify-center p-4 bg-secondary rounded-lg">
                            <p className="text-3xl font-bold font-headline text-center">{card.front}</p>
                        </div>
                        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center p-4 bg-accent text-accent-foreground rounded-lg">
                            <p className="text-2xl font-semibold text-center">{card.back}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const QuizWidget = () => {
    const { toast } = useToast();
    const [question, setQuestion] = useState<(typeof practiceQuestions)[0] | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [questionKey, setQuestionKey] = useState(Math.random());

    useEffect(() => {
        setQuestion(practiceQuestions[Math.floor(Math.random() * practiceQuestions.length)]);
        setIsAnswered(false);
    }, [questionKey]);

    const handleSelectOption = (option: string) => {
        if (isAnswered || !question) return;
        setIsAnswered(true);
        if (option === question.answer) {
            toast({ title: "Correct!" });
        } else {
            toast({ title: "Incorrect!", description: `The right answer is: ${question.answer}`, variant: "destructive" });
        }
        
        setTimeout(() => {
            setQuestionKey(Math.random());
        }, 2000);
    };
    
    if (!question) return null;

    return (
        <Card className="w-full bg-card flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                        <PencilRuler className="h-6 w-6 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-xl">Practice Question</CardTitle>
                </div>
                 <CardDescription className="pt-2 text-base">{question.question}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <RadioGroup onValueChange={handleSelectOption} disabled={isAnswered} key={questionKey}>
                    {question.options.map((option, index) => (
                        <Label key={index} className={`flex items-center space-x-2 p-3 rounded-md border transition-colors ${!isAnswered ? 'cursor-pointer hover:bg-secondary' : 'cursor-not-allowed'}`}>
                           <RadioGroupItem value={option} id={`q-widget-${questionKey}-${index}`} />
                           <span>{option}</span>
                        </Label>
                    ))}
                </RadioGroup>
            </CardContent>
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
                <p className="font-semibold">{verse.sanskrit}</p>
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
