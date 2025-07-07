
'use client';

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
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
  MessageSquareQuote,
  Mic,
  PencilRuler,
  FilePenLine,
  Search,
  ShieldCheck,
  Cloud,
  Wand2,
} from "lucide-react";
import { OmIcon } from "@/components/icons";
import { culturalFacts, textbookChapters } from "@/lib/sanskrit-data";

type DashboardWidgetProps = {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
  children?: React.ReactNode;
};

const DashboardWidget = ({ href, icon: Icon, title, description, children }: DashboardWidgetProps) => (
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
        {children}
      </CardContent>
    </Card>
  </Link>
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

      {/* Widget Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardWidget href="/textbook" icon={BookOpenCheck} title="Chapter Progress" description="Review textbook chapters and verses." />
        <DashboardWidget href="/pronunciation" icon={Mic} title="Recite Tool" description="Practice your pronunciation with AI." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardWidget href="/flashcards" icon={Layers} title="Flashcards" description="Memorize vocabulary with spaced repetition." />
        <DashboardWidget href="/practice" icon={PencilRuler} title="Daily Quiz" description="Test your knowledge on grammar." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardWidget href="/grammar-tool" icon={Wand2} title="Grammar Tool" description="Analyze sentence structures." />
        <DashboardWidget href="/writing-practice" icon={FilePenLine} title="Writing Drill" description="Practice your essay writing skills." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SanskritFactWidget />
        <RandomVerseWidget />
      </div>
      
      {/* Bottom Action Row */}
      <Card>
        <CardContent className="p-4">
            <div className="flex justify-around items-center">
                <Button variant="ghost" className="flex-1" disabled><Search className="mr-2"/> Search</Button>
                <Button variant="ghost" className="flex-1" disabled><ShieldCheck className="mr-2"/> Challenges</Button>
                <Button variant="ghost" className="flex-1" disabled><Cloud className="mr-2"/> Sync</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
