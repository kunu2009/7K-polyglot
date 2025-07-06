import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { grammarLessons } from "@/lib/sanskrit-data";
import { Scaling } from "lucide-react";

export default function GrammarPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Grammar Lessons</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Step-by-step lessons on basic Sanskrit grammar concepts.
        </p>
      </header>
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Scaling className="text-primary"/>
                Core Concepts
            </CardTitle>
            <CardDescription>Expand each section to learn about the fundamentals of Sanskrit grammar.</CardDescription>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
            {grammarLessons.map((lesson, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl font-headline text-left hover:no-underline">
                    {lesson.title}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed p-2">
                    {lesson.content}
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
