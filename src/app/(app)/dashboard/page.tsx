'use client';

import Link from "next/link";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookText,
  FilePenLine,
  Layers,
  Mic,
  PencilRuler,
  Scaling,
  Swords,
  Wand2,
} from "lucide-react";
import { DiyaLampIcon } from "@/components/icons";
import { flashcards, practiceQuestions, textbookChapters } from "@/lib/sanskrit-data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";


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
    { href: '/vocabulary', icon: BookText, title: 'Textbook', description: 'Interactive chapters from the HSC syllabus.' },
    { href: '/grammar', icon: Scaling, title: 'Grammar Lessons', description: 'Detailed explanations of core grammar concepts.' },
    { href: '/practice', icon: PencilRuler, title: 'Practice Quiz', description: 'Test your knowledge with MCQ questions.' },
    { href: '/flashcards', icon: Layers, title: 'Flashcards', description: 'Learn vocabulary with spaced repetition.' },
    { href: '/pronunciation', icon: Mic, title: 'Pronunciation AI', description: 'Get feedback on your spoken Sanskrit.' },
    { href: '/grammar-tool', icon: Wand2, title: 'Grammar Tool', description: 'Get grammatical breakdowns of sentences.' },
    { href: '/word-builder', icon: Swords, title: 'Word Builder', description: 'Form words from roots in a fun game.', badge: 'New' },
    { href: '/writing-practice', icon: FilePenLine, title: 'Writing Practice', description: 'Practice writing essays on key topics.' },
    { href: '/culture', icon: DiyaLampIcon, title: 'Cultural Insights', description: 'Discover the rich history behind Sanskrit.' },
];

export default function DashboardPage() {
    const { toast } = useToast();
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const firstFlashcard = flashcards[0];
    const firstQuestion = practiceQuestions[0];
    const firstChapter = textbookChapters[0];
    
    const isAnswered = selectedAnswer !== null;

    const handleSelectOption = (option: string) => {
        if (isAnswered) return;

        setSelectedAnswer(option);
        const isCorrect = option === firstQuestion.answer;
        if (isCorrect) {
            toast({ title: "Correct!" });
        } else {
            toast({ title: "Incorrect!", description: `The correct answer is: ${firstQuestion.answer}`, variant: "destructive" });
        }
    };

  return (
    <div className="flex flex-col gap-8 animate-fade-in-up">
      <header>
        <h1 className="text-4xl font-headline font-bold">
            नमो नमः!
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
            Welcome back! Here's a quick start for your Sanskrit studies.
        </p>
      </header>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline">
                        <Layers className="text-primary"/> Flashcard Quick Review
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center rounded-md p-6 perspective-1000">
                     <div
                        className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
                        onClick={() => setIsFlipped(!isFlipped)}
                        style={{minHeight: '100px'}}
                    >
                        <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-secondary rounded-lg cursor-pointer">
                             <p className="text-4xl font-headline text-center">{firstFlashcard.front}</p>
                        </div>
                        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-accent text-accent-foreground rounded-lg cursor-pointer">
                             <p className="text-3xl font-semibold text-center">{firstFlashcard.back}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="pt-6">
                    <Button asChild className="w-full">
                        <Link href="/flashcards">Study Full Deck <ArrowRight className="ml-2"/></Link>
                    </Button>
                </CardFooter>
            </Card>

            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline">
                        <PencilRuler className="text-primary"/> Practice Question
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                    <p className="text-base font-semibold">{firstQuestion.question}</p>
                    <RadioGroup
                        value={selectedAnswer || ''}
                        onValueChange={handleSelectOption}
                        disabled={isAnswered}
                    >
                        {firstQuestion.options.map((option, index) => (
                        <Label
                            key={index}
                            className={cn('flex items-center space-x-2 p-3 rounded-md border transition-colors',
                            isAnswered && option === firstQuestion.answer ? 'border-green-500 bg-green-50' : '',
                            isAnswered && option === selectedAnswer && option !== firstQuestion.answer ? 'border-red-500 bg-red-50' : '',
                            !isAnswered ? 'cursor-pointer hover:bg-secondary' : 'cursor-not-allowed'
                            )}
                        >
                            <RadioGroupItem value={option} id={`q-option-${index}`} />
                            <span>{option}</span>
                        </Label>
                        ))}
                    </RadioGroup>
                </CardContent>
                <CardFooter className="pt-6">
                    <Button asChild className="w-full">
                        <Link href="/practice">Take the Full Quiz <ArrowRight className="ml-2"/></Link>
                    </Button>
                </CardFooter>
            </Card>

            <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline">
                        <BookText className="text-primary"/> Featured Chapter
                    </CardTitle>
                    <CardDescription>{firstChapter.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground line-clamp-4">{firstChapter.summary}</p>
                </CardContent>
                <CardFooter className="pt-6">
                    <Button asChild className="w-full">
                        <Link href="/vocabulary">Read Full Chapter <ArrowRight className="ml-2"/></Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>

      <Card>
        <CardHeader>
            <CardTitle className="font-headline">All Learning Modules</CardTitle>
            <CardDescription>Explore all features and learning tools available.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allFeatures.map(feature => <FeatureCard key={feature.href} {...feature} />)}
        </CardContent>
      </Card>
    </div>
  );
}
