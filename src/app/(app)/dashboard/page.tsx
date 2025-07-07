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
  Gift,
  Layers,
  Mic,
  PencilRuler,
  Scaling,
  Swords,
  Target,
  Wand2,
} from "lucide-react";
import { DiyaLampIcon } from "@/components/icons";
import { useDailyTasks } from "@/context/daily-tasks-context";

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

export default function DashboardPage() {
    const { tasks } = useDailyTasks();
    const tasksComplete = useMemo(() => tasks.every(task => task.progress >= task.goal), [tasks]);

  return (
    <div className="flex flex-col gap-8 animate-fade-in-up">
      <header>
        <h1 className="text-4xl font-headline font-bold">
          Namaste!
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Here are your goals for today. Let's make progress!
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                  <Target className="text-primary"/> Daily Goals
              </CardTitle>
              <CardDescription>Complete all three tasks to unlock your daily chest.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {tasks.map((task) => (
                 <Link href={task.href} key={task.id}>
                    <div className="p-4 rounded-lg border hover:bg-secondary/50 transition-colors cursor-pointer">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold">{task.title}</span>
                            <span className="text-sm font-medium text-primary">{task.progress} / {task.goal}</span>
                        </div>
                        <Progress value={task.goal > 0 ? (task.progress / task.goal) * 100 : 0} />
                    </div>
                </Link>
              ))}
            </CardContent>
             <CardFooter>
                 <Button className="w-full" disabled={!tasksComplete}>
                    <Gift className="mr-2"/>
                    {tasksComplete ? "Claim Daily Chest" : "Complete All Tasks to Unlock"}
                </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
                <CardTitle>Explore Tools</CardTitle>
                <CardDescription>Discover all the features 7K polyglot has to offer.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard
                    href="/word-builder"
                    icon={Swords}
                    title="Word Builder"
                    description="Form words from roots and syllables in this fun game."
                    badge="New"
                />
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
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
                <CardTitle className="font-headline">Learning Hub</CardTitle>
                <CardDescription>Your core learning activities.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/practice" passHref>
                <Button variant="outline" size="lg" className="w-full justify-start gap-4 h-16">
                  <PencilRuler className="text-primary" />
                  <span>Practice Quiz</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground"/>
                </Button>
              </Link>
              <Link href="/flashcards" passHref>
                <Button variant="outline" size="lg" className="w-full justify-start gap-4 h-16">
                  <Layers className="text-primary" />
                  <span>Review Flashcards</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground"/>
                </Button>
              </Link>
              <Link href="/pronunciation" passHref>
                <Button variant="outline" size="lg" className="w-full justify-start gap-4 h-16">
                  <Mic className="text-primary" />
                  <span>Pronunciation AI</span>
                   <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground"/>
                </Button>
              </Link>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <DiyaLampIcon />
                    Cultural Insights
                </CardTitle>
                <CardDescription>Explore the rich history and context behind the language.</CardDescription>
            </CardHeader>
             <CardFooter>
                <Link href="/culture" className="w-full">
                    <Button className="w-full">
                        Discover More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
