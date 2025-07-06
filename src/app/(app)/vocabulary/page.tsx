'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { vocabularyCategories } from "@/lib/sanskrit-data";
import { BookText, Share2, Info } from "lucide-react";

export default function VocabularyPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Vocabulary Lists</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Browse categorized Sanskrit words, their meanings, and origins.
        </p>
      </header>
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <BookText className="text-primary"/>
                Word Categories
            </CardTitle>
            <CardDescription>Click on a category to see words. Click on a word to see its etymology.</CardDescription>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
            {vocabularyCategories.map((category, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-xl font-headline hover:no-underline">
                    {category.category}
                </AccordionTrigger>
                <AccordionContent>
                    <ul className="space-y-1 p-2 bg-secondary/50 rounded-md">
                    {category.words.map((word, wordIndex) => (
                        <li key={wordIndex}>
                        <Popover>
                            <PopoverTrigger asChild>
                                <div className="flex justify-between items-center p-3 rounded-md hover:bg-background cursor-pointer w-full text-left">
                                    <span className="font-bold text-lg">{word.sanskrit}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-muted-foreground">{word.english}</span>
                                        {word.etymology && <Info className="h-4 w-4 text-primary"/>}
                                    </div>
                                </div>
                            </PopoverTrigger>
                            {word.etymology && (
                                <PopoverContent className="w-80">
                                    <div className="grid gap-4">
                                        <div className="space-y-2">
                                            <h4 className="font-medium leading-none font-headline flex items-center gap-2"><Share2 className="text-primary"/>Etymology</h4>
                                            <p className="text-sm text-muted-foreground">
                                                From the root <span className="font-semibold text-foreground font-mono">{word.etymology.root}</span>, meaning "{word.etymology.meaning}".
                                            </p>
                                        </div>
                                        {word.etymology.related && (
                                             <div className="grid gap-2">
                                                <h5 className="text-sm font-semibold">Related Words:</h5>
                                                {word.etymology.related.map((rel, i) => (
                                                    <div key={i} className="grid grid-cols-3 items-center gap-4">
                                                        <span className="text-xs font-medium text-muted-foreground">{rel.lang}</span>
                                                        <span className="col-span-2 text-sm font-mono">{rel.word}</span>
                                                    </div>
                                                ))}
                                             </div>
                                        )}
                                    </div>
                                </PopoverContent>
                            )}
                        </Popover>
                        </li>
                    ))}
                    </ul>
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
