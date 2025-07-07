'use client';

import Link from "next/link";
import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BookText,
  FilePenLine,
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
            <CardTitle className="font-headline">Explore All Features</CardTitle>
            <CardDescription>Quick access to all learning modules and tools.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allFeatures.map(feature => <FeatureCard key={feature.href} {...feature} />)}
        </CardContent>
      </Card>
    </div>
  );
}
