import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { vocabularyCategories } from "@/lib/sanskrit-data";
import { BookText } from "lucide-react";

export default function VocabularyPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Vocabulary Lists</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Browse categorized Sanskrit words with their English meanings.
        </p>
      </header>
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <BookText className="text-primary"/>
                Word Categories
            </CardTitle>
            <CardDescription>Click on a category to see the words within it.</CardDescription>
        </CardHeader>
        <Accordion type="single" collapsible className="w-full p-4">
          {vocabularyCategories.map((category, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-xl font-headline hover:no-underline">
                {category.category}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 p-4 bg-secondary rounded-md">
                  {category.words.map((word, wordIndex) => (
                    <li
                      key={wordIndex}
                      className="flex justify-between items-center p-2 rounded-md hover:bg-background"
                    >
                      <span className="font-bold text-lg">{word.sanskrit}</span>
                      <span className="text-muted-foreground">{word.english}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
}
