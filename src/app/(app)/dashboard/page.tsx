
'use client';

import Link from "next/link";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpenCheck,
  Flame,
  Layers,
  Mic,
  PencilRuler,
  FilePenLine,
  Wand2,
  MessageSquareQuote,
  RotateCcw,
} from "lucide-react";
import { OmIcon } from "@/components/icons";
import {
  culturalFacts,
  textbookChapters,
  flashcards,
  practiceQuestions,
  grammarToolSentence,
} from "@/lib/sanskrit-data";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type DashboardLinkWidgetProps = {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

const DashboardLinkWidget = ({ href, icon: Icon, title, description }: DashboardLinkWidgetProps) => (
  <Link href={href} className="flex">
    <Card className="w-full bg-card hover:border-primary/50 hover:bg-secondary/50 transition-colors flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-headline text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

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
                <div className="perspective-1000 h-full">
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

    useEffect(() => {
        setQuestion(practiceQuestions[Math.floor(Math.random() * practiceQuestions.length)]);
    }, []);

    const handleSelectOption = (option: string) => {
        if (isAnswered || !question) return;
        setIsAnswered(true);
        if (option === question.answer) {
            toast({ title: "Correct!" });
        } else {
            toast({ title: "Incorrect!", description: `The right answer is: ${question.answer}`, variant: "destructive" });
        }
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
                <RadioGroup onValueChange={handleSelectOption} disabled={isAnswered}>
                    {question.options.map((option, index) => (
                        <Label key={index} className={`flex items-center space-x-2 p-3 rounded-md border transition-colors ${!isAnswered ? 'cursor-pointer hover:bg-secondary' : 'cursor-not-allowed'}`}>
                           <RadioGroupItem value={option} id={`q-widget-${index}`} />
                           <span>{option}</span>
                        </Label>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    );
};

const GrammarToolWidget = () => (
    <Card className="w-full bg-card flex flex-col">
        <CardHeader>
            <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                    <Wand2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">Grammar Tool</CardTitle>
            </div>
            <CardDescription className="pt-2">Tap a word to see its grammar.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
            <div className="p-4 border rounded-lg bg-secondary">
                <p className="text-2xl text-center font-headline tracking-wider">
                    {grammarToolSentence.words.map((wordData, index) => (
                        <Popover key={index}>
                            <PopoverTrigger asChild>
                                <span className={`cursor-pointer hover:underline decoration-primary decoration-2 underline-offset-4 mx-1 ${wordData.color}`}>
                                    {wordData.word}
                                </span>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium leading-none font-headline">{wordData.word}</h4>
                                        <p className="text-sm text-muted-foreground">Meaning: "{wordData.info.meaning}"</p>
                                    </div>
                                    <div className="grid gap-2">
                                        {Object.entries(wordData.info).map(([key, value]) => {
                                            if (key === 'meaning') return null;
                                            const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                                            return (
                                                <div key={key} className="grid grid-cols-3 items-center gap-4">
                                                    <span className="text-sm font-medium capitalize text-muted-foreground">{formattedKey}</span>
                                                    <span className="col-span-2 text-sm">{value as string}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    ))}
                </p>
            </div>
        </CardContent>
    </Card>
);

const SanskritFactWidget = () => {
    const [fact, setFact] = useState<{ title: string; content: string } | null>(null);

    useEffect(() => {
        setFact(culturalFacts[Math.floor(Math.random() * culturalFacts.length)]);
    }, []);

    if (!fact) return null;

    return (
        <Card className="w-full bg-card flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                        <OmIcon className="h-6 w-6 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-xl">{fact.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">{fact.content}</p>
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
      <header className="flex justify-between items-center">
        <div>
            <h1 className="text-4xl font-headline font-bold">
                नमो नमः!
            </h1>
            <p className="text-lg text-muted-foreground mt-1">
                Welcome back, let's continue your journey.
            </p>
        </div>
        <div className="flex items-center gap-2 bg-secondary text-secondary-foreground p-2 px-4 rounded-lg">
            <Flame className="text-primary"/>
            <span className="font-bold">0</span>
            <span className="text-sm">Day Streak</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Row 1 */}
        <DashboardLinkWidget href="/textbook" icon={BookOpenCheck} title="Textbook" description="Review chapters and verses." />
        <DashboardLinkWidget href="/pronunciation" icon={Mic} title="Recite Tool" description="Practice pronunciation with AI." />
        
        {/* Row 2 */}
        <FlashcardWidget />
        <QuizWidget />
        
        {/* Row 3 */}
        <GrammarToolWidget />
        <DashboardLinkWidget href="/writing-practice" icon={FilePenLine} title="Writing Drill" description="Practice your essay writing skills." />
        
        {/* Row 4 */}
        <SanskritFactWidget />
        <RandomVerseWidget />
      </div>

    </div>
  );
}
