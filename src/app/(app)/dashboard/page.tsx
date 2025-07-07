'use client';

import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  ArrowRight,
  BookText,
  FilePenLine,
  Layers,
  Mic,
  PencilRuler,
  RotateCcw,
  Scaling,
  Sparkles,
  Swords,
  Wand2,
} from "lucide-react";
import { DiyaLampIcon } from "@/components/icons";
import { practiceQuestions, flashcards, textbookChapters } from "@/lib/sanskrit-data";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type Flashcard = typeof flashcards[0];

const FeatureCard = ({ href, icon: Icon, title, description, badge }: { href: string; icon: React.ElementType; title: string; description: string; badge?: string }) => (
    <Link href={href} className="flex">
        <Card className="w-full bg-card hover:border-primary/50 hover:bg-secondary/50 transition-colors flex flex-col">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <Icon className="h-8 w-8 text-muted-foreground mb-3"/>
                    {badge && <div className="text-xs bg-primary/20 text-primary font-bold px-2 py-1 rounded-full">{badge}</div>}
                </div>
                <CardTitle className="font-headline text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    </Link>
);

const allFeatures = [
    { href: '/textbook', icon: BookText, title: 'Textbook', description: 'Interactive chapters from the HSC syllabus.' },
    { href: '/grammar', icon: Scaling, title: 'Grammar Lessons', description: 'Detailed explanations of core grammar concepts.' },
    { href: '/practice', icon: PencilRuler, title: 'Practice Quiz', description: 'Test your knowledge with MCQ questions.' },
    { href: '/flashcards', icon: Layers, title: 'Flashcards', description: 'Learn vocabulary with spaced repetition.' },
    { href: '/pronunciation', icon: Mic, title: 'Pronunciation AI', description: 'Get feedback on your spoken Sanskrit.' },
    { href: '/grammar-tool', icon: Wand2, title: 'Grammar Tool', description: 'Get grammatical breakdowns of sentences.' },
    { href: '/word-builder', icon: Swords, title: 'Word Builder', description: 'Form words from roots in a fun game.' },
    { href: '/writing-practice', icon: FilePenLine, title: 'Writing Practice', description: 'Practice writing essays on key topics.' },
    { href: '/name-generator', icon: Sparkles, title: 'Name Generator', description: 'Create a fun Sanskrit name.', badge: 'New' },
    { href: '/culture', icon: DiyaLampIcon, title: 'Cultural Insights', description: 'Discover the rich history behind Sanskrit.' },
];

function FlashcardWidget() {
    const [randomCard, setRandomCard] = useState<Flashcard | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setRandomCard(flashcards[Math.floor(Math.random() * flashcards.length)]);
    }, []);

    if (!randomCard) return <Card className="flex items-center justify-center min-h-[200px]"><p>Loading...</p></Card>;
    
    return (
        <div className="perspective-1000 h-full">
            <div
            className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="absolute w-full h-full backface-hidden">
                    <Card className="w-full h-full flex flex-col cursor-pointer bg-card hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="font-headline text-lg">Flashcard</CardTitle>
                            <CardDescription>Click to flip</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-center justify-center">
                            <p className="text-4xl font-bold font-headline text-center">
                                {randomCard.front}
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <Card className="w-full h-full flex flex-col cursor-pointer bg-accent text-accent-foreground hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="font-headline text-lg">Meaning</CardTitle>
                            <CardDescription>Click to flip back</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-center justify-center">
                            <p className="text-3xl font-semibold text-center">
                                {randomCard.back}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
      </div>
    );
}

function PracticeQuestionWidget() {
    const { toast } = useToast();
    const [question, setQuestion] = useState(practiceQuestions[0]);
    const [selectedOption, setSelectedOption] = useState<string | undefined>();
    const isAnswered = selectedOption !== undefined;

    const handleSelectOption = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
        const isCorrect = option === question.answer;
        toast({
            title: isCorrect ? "Correct!" : "Incorrect!",
            description: isCorrect ? "Great job!" : `The correct answer is: ${question.answer}`,
            variant: isCorrect ? "default" : "destructive",
        });
    };

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="font-headline text-lg">Quick Question</CardTitle>
                <CardDescription className="text-sm line-clamp-2">{question.question}</CardDescription>
            </CardHeader>
            <CardContent>
                <RadioGroup value={selectedOption} onValueChange={handleSelectOption} disabled={isAnswered}>
                    {question.options.map((option, index) => (
                    <Label
                        key={index}
                        className={cn(
                            "flex items-center space-x-2 p-3 rounded-md border transition-colors text-sm",
                            isAnswered && option === question.answer ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : '',
                            isAnswered && option === selectedOption && option !== question.answer ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : '',
                            !isAnswered && "cursor-pointer hover:bg-secondary"
                        )}
                    >
                        <RadioGroupItem value={option} id={`widget-option-${index}`} />
                        <span>{option}</span>
                    </Label>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    );
}

function FeaturedChapterWidget() {
    const chapter = useMemo(() => textbookChapters[0], []);
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle className="font-headline text-lg">Featured Chapter</CardTitle>
                <CardDescription className="font-semibold">{chapter.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-4">{chapter.summary}</p>
            </CardContent>
            <CardFooter>
                <Link href="/textbook" className="w-full">
                    <Button variant="secondary" className="w-full">
                        Start Reading <ArrowRight className="ml-2"/>
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default function DashboardPage() {
    return (
    <div className="flex flex-col gap-8 animate-fade-in-up">
      <header>
        <h1 className="text-4xl font-headline font-bold">
            नमो नमः!
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
            Welcome back! Let's start your learning session.
        </p>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Quick Start</CardTitle>
          <CardDescription>Jump right into an activity.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[350px]">
          <div className="lg:col-span-1"><FlashcardWidget /></div>
          <div className="lg:col-span-1"><PracticeQuestionWidget/></div>
          <div className="lg:col-span-1"><FeaturedChapterWidget/></div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle className="font-headline">All Learning Modules</CardTitle>
            <CardDescription>Explore all features and learning tools available.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allFeatures.map(feature => <FeatureCard key={feature.href} {...feature} />)}
        </CardContent>
      </Card>
    </div>
  );
}
