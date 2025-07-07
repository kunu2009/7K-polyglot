'use client';

import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookText,
  FilePenLine,
  Layers,
  Mic,
  PencilRuler,
  Scaling,
  Swords,
  Wand2,
  CheckCircle2,
  RefreshCcw,
  Trophy,
} from "lucide-react";
import { DiyaLampIcon } from "@/components/icons";
import { Progress } from "@/components/ui/progress";
import { useDailyTasks } from "@/context/daily-tasks-context";
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
    { href: '/textbook', icon: BookText, title: 'Textbook', description: 'Interactive chapters from the HSC syllabus.' },
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
    const { tasks, resetTasks } = useDailyTasks();
    const allTasksCompleted = tasks.every(task => task.progress >= task.goal);

  return (
    <div className="flex flex-col gap-8 animate-fade-in-up">
      <header>
        <h1 className="text-4xl font-headline font-bold">
            नमो नमः!
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
            Welcome back! Here are your goals for today.
        </p>
      </header>
      
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
              <Trophy className="text-primary"/> Today's Goals
            </CardTitle>
            <CardDescription>Complete these tasks to stay on track.</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={resetTasks}>
            <RefreshCcw className="mr-2 h-4 w-4"/> Reset
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
            {allTasksCompleted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800 animate-fade-in-up dark:bg-green-900/30 dark:border-green-800 dark:text-green-300">
                    <CheckCircle2 className="h-6 w-6"/>
                    <div>
                        <h3 className="font-bold">All goals completed!</h3>
                        <p className="text-sm">उत्तमम्! You're all set for today. Come back tomorrow for new goals.</p>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tasks.map((task) => {
                    const isCompleted = task.progress >= task.goal;
                    return (
                        <Link key={task.id} href={task.href} className="flex">
                            <Card className={cn(
                                "w-full transition-colors", 
                                isCompleted 
                                ? "bg-green-50/50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                                : "hover:bg-secondary/50"
                            )}>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-base font-semibold">{task.title}</CardTitle>
                                        {isCompleted && <CheckCircle2 className="h-5 w-5 text-green-600"/>}
                                    </div>
                                    <CardDescription className="text-sm">{task.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Progress value={(task.progress / task.goal) * 100} className="h-2" />
                                    <p className="text-xs text-muted-foreground mt-2 text-right">{task.progress} / {task.goal}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </CardContent>
      </Card>

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
