
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { newSyllabus } from "@/lib/sanskrit-data";
import { Scaling } from "lucide-react";

export default function GrammarPage() {
  const grammarSection = newSyllabus.find(s => s.title_en.includes("Appendix"));
  const grammarTopics = grammarSection?.content?.filter(c => ['समासः', 'कृदन्ताः', 'तद्धितान्ताः', 'सूचनानुसारं परिवर्तनम्'].includes(c.title)) || [];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Grammar Lessons</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Core concepts from the syllabus appendix.
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
            {grammarTopics.map((lesson, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl font-headline text-left hover:no-underline">
                    {lesson.title}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed p-2">
                    {lesson.description}
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

    