'use client';

import Link from "next/link";
import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  BookText,
  Layers,
  Mic,
  Scaling,
  Wand2,
  PencilRuler,
  Sparkles,
} from "lucide-react";
import { DiyaLampIcon } from "@/components/icons";
import { flashcards, vocabularyCategories } from "@/lib/sanskrit-data";

// Get a random word for "Word of the Day"
const allWords = vocabularyCategories.flatMap(cat => cat.words);

const FeatureCard = ({ href, icon: Icon, title, description }: { href: string; icon: React.ElementType; title: string; description: string; }) => (
    <Link href={href}>
        <div className="p-4 rounded-lg border bg-card hover:bg-secondary/50 transition-colors h-full flex flex-col">
            <Icon className="h-8 w-8 text-muted-foreground mb-3"/>
            <h3 className="font-semibold font-headline text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1 flex-grow">{description}</p>
        </div>
    </Link>
);


export default function DashboardPage() {
  const wordOfTheDay = useMemo(() => {
    // This runs only on the client, avoiding hydration errors.
    return allWords[Math.floor(Math.random() * allWords.length)];
  }, []);

  const masteredFlashcards = 15; // Mock data
  const learnedWords = 25; // Mock data
  const totalWords = allWords.length;
  
  return (
    <div className="flex flex-col gap-8 animate-fade-in-up">
      <header>
        <h1 className="text-4xl font-headline font-bold">
          Welcome back to Samskriti
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Ready to continue your Sanskrit journey?
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>Jump right back into your learning.</CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/practice" passHref>
                <Button variant="outline" size="lg" className="w-full h-24 justify-start flex-col items-start p-4 text-left hover:bg-primary/10 hover:border-primary">
                  <PencilRuler className="mb-2 h-6 w-6 text-primary" />
                  <span className="font-semibold">Practice Quiz</span>
                  <span className="text-xs text-muted-foreground">Test your knowledge</span>
                </Button>
              </Link>
              <Link href="/flashcards" passHref>
                <Button variant="outline" size="lg" className="w-full h-24 justify-start flex-col items-start p-4 text-left hover:bg-primary/10 hover:border-primary">
                  <Layers className="mb-2 h-6 w-6 text-primary" />
                  <span className="font-semibold">Review Flashcards</span>
                  <span className="text-xs text-muted-foreground">Master new words</span>
                </Button>
              </Link>
              <Link href="/pronunciation" passHref>
                <Button variant="outline" size="lg" className="w-full h-24 justify-start flex-col items-start p-4 text-left hover:bg-primary/10 hover:border-primary">
                  <Mic className="mb-2 h-6 w-6 text-primary" />
                  <span className="font-semibold">Pronunciation AI</span>
                  <span className="text-xs text-muted-foreground">Perfect your accent</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
                <CardTitle>Explore Tools</CardTitle>
                <CardDescription>Discover all the features Samskriti has to offer.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard
                    href="/grammar"
                    icon={Scaling}
                    title="Grammar Lessons"
                    description="Learn the fundamental rules of the Sanskrit language step-by-step."
                />
                <FeatureCard
                    href="/vocabulary"
                    icon={BookText}
                    title="Vocabulary Lists"
                    description="Browse curated lists of essential words organized by category."
                />
                <FeatureCard
                    href="/grammar-tool"
                    icon={Wand2}
                    title="Grammar Tool"
                    description="Get an interactive breakdown of words within a sentence."
                />
                <FeatureCard
                    href="/culture"
                    icon={DiyaLampIcon}
                    title="Cultural Insights"
                    description="Explore the rich history and context behind the language."
                />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Sparkles className="text-primary"/> Word of the Day
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-headline font-bold">{wordOfTheDay.sanskrit}</p>
              <p className="text-xl text-muted-foreground mt-2">{wordOfTheDay.english}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle className="font-headline">Your Progress</CardTitle>
                <CardDescription>A summary of your learning activity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <div className="flex justify-between text-sm mb-1 font-medium">
                        <span>Flashcards Mastered</span>
                        <span className="font-semibold text-primary">{masteredFlashcards} / {flashcards.length}</span>
                    </div>
                    <Progress value={(masteredFlashcards / flashcards.length) * 100} />
                </div>
                 <div>
                    <div className="flex justify-between text-sm mb-1 font-medium">
                        <span>Words Learned</span>
                        <span className="font-semibold text-primary">{learnedWords} / {totalWords}</span>
                    </div>
                    <Progress value={(learnedWords / totalWords) * 100} />
                </div>
            </CardContent>
             <CardFooter>
                <Link href="/practice" className="w-full">
                    <Button className="w-full">
                        Keep Practicing <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
