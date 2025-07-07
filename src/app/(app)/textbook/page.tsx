'use client';

import { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { textbookChapters } from "@/lib/sanskrit-data";
import type { TextbookChapter } from "@/lib/sanskrit-data";
import { ArrowLeft, BookCheck, BookText, FileText, Info, Share2, UserSquare, Volume2, Loader2, StopCircle, Sparkles, BookHeart, BookKey, Library } from "lucide-react";
import { textToSpeech } from '@/ai/flows/text-to-speech';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contextualHelp, type ContextualHelpOutput } from '@/ai/flows/contextual-help';
import { useToast } from '@/hooks/use-toast';


// The full view for a single selected chapter
function ChapterDetailView({ chapter, onBack }: { chapter: TextbookChapter; onBack: () => void }) {
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const { toast } = useToast();
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [helpContent, setHelpContent] = useState<ContextualHelpOutput | null>(null);
  const [isHelpLoading, setIsHelpLoading] = useState(false);
  const longPressTimer = useRef<NodeJS.Timeout>();

  const triggerAiHelp = async () => {
    const text = window.getSelection()?.toString().trim();
    if (text && text.length > 1) {
        setSelectedText(text);
        setIsHelpOpen(true);
        setIsHelpLoading(true);
        setHelpContent(null);
        try {
            const result = await contextualHelp({ text });
            setHelpContent(result);
        } catch (error) {
            console.error("Failed to get AI help:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Could not fetch AI assistance. Please try again.",
            });
            setIsHelpOpen(false); // Close dialog on error
        } finally {
            setIsHelpLoading(false);
        }
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    longPressTimer.current = setTimeout(() => {
        triggerAiHelp();
    }, 700);
  };

  const handlePointerUp = () => {
    clearTimeout(longPressTimer.current);
  };

  const handlePlayVerse = async (verse: {id: number, sanskrit: string}) => {
    // If another verse is playing, stop it
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.onended = null;
        audioRef.current = null;
    }
    
    // If the clicked verse is already playing, stop it
    if (playingId === verse.id) {
        setPlayingId(null);
        return;
    }
    
    setLoadingId(verse.id);
    setPlayingId(null);

    try {
        const response = await textToSpeech(verse.sanskrit);
        audioRef.current = new Audio(response.media);
        
        audioRef.current.onended = () => {
            setPlayingId(null);
        };

        await audioRef.current.play();
        setPlayingId(verse.id);
    } catch (error) {
        console.error("Failed to generate audio:", error);
        // Optionally, show a toast message here
    } finally {
        setLoadingId(null);
    }
  };

  return (
    <div className="animate-fade-in-up">
      <Button onClick={onBack} variant="outline" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Chapters
      </Button>

      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold break-words">{chapter.category}</h1>
        <p className="text-lg text-muted-foreground mt-2">{chapter.type}</p>
      </header>
      
      <div className="space-y-8">
        {/* Author and Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                <UserSquare className="text-primary h-6 w-6" />
                Author: {chapter.author}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-muted-foreground">{chapter.authorIntro}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                <BookCheck className="text-primary h-6 w-6" />
                Chapter Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-muted-foreground">{chapter.summary}</p>
            </CardContent>
          </Card>
        </div>

        {/* Line by Line analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-2xl">
              <FileText className="text-primary h-6 w-6" />
              Verse by Verse Analysis
            </CardTitle>
            <CardDescription>Long-press any word or line to get AI-powered contextual help.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {chapter.content.map((item, index) => (
              <div key={item.id}>
                <div className="p-4 border rounded-lg bg-secondary/50">
                  <div className="flex justify-between items-start gap-4">
                    <p 
                      onPointerDown={handlePointerDown}
                      onPointerUp={handlePointerUp}
                      className="text-2xl font-headline font-semibold mb-3 flex-grow break-words"
                    >
                      {item.sanskrit}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handlePlayVerse(item)}
                      disabled={loadingId !== null && loadingId !== item.id}
                      className="text-muted-foreground flex-shrink-0"
                      aria-label="Listen to verse"
                    >
                      {loadingId === item.id && <Loader2 className="h-5 w-5 animate-spin" />}
                      {playingId === item.id && loadingId !== item.id && <StopCircle className="h-5 w-5 text-primary" />}
                      {playingId !== item.id && loadingId !== item.id && <Volume2 className="h-5 w-5" />}
                    </Button>
                  </div>
                  <p className="text-muted-foreground italic">"{item.translation}"</p>
                  {item.metre && (
                    <div className="mt-2 text-sm">
                      <span className="font-semibold">Metre (छन्दः):</span> {item.metre}
                    </div>
                  )}
                  {item.figureOfSpeech && (
                     <div className="text-sm">
                      <span className="font-semibold">Figure of Speech (अलङ्कारः):</span> {item.figureOfSpeech}
                    </div>
                  )}
                </div>
                {index < chapter.content.length - 1 && <Separator className="my-6"/>}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Vocabulary List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <BookText className="text-primary"/>
                Vocabulary List
            </CardTitle>
            <CardDescription>Click on a word to see its etymology.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 p-2 bg-secondary/50 rounded-md">
              {chapter.words.map((word, wordIndex) => (
                  <li key={wordIndex}>
                  <Popover>
                      <PopoverTrigger asChild>
                          <div className="flex justify-between items-center p-3 rounded-md hover:bg-background cursor-pointer w-full text-left">
                              <span className="font-bold text-lg break-all">{word.sanskrit}</span>
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
                              </div>
                          </PopoverContent>
                      )}
                  </Popover>
                  </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isHelpOpen} onOpenChange={setIsHelpOpen}>
        <DialogContent className="sm:max-w-xl">
            <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
                <Sparkles className="text-primary" />
                AI Contextual Help
            </DialogTitle>
            <DialogDescription>
                AI analysis for your selected text: "<span className="font-bold text-primary">{selectedText}</span>"
            </DialogDescription>
            </DialogHeader>
            <div className="py-4 max-h-[60vh] overflow-y-auto">
            {isHelpLoading ? (
                <div className="flex flex-col items-center justify-center space-y-3 text-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="font-semibold">Analyzing text...</p>
                <p className="text-sm text-muted-foreground">Please wait a moment.</p>
                </div>
            ) : helpContent ? (
                <Accordion type="multiple" defaultValue={['grammar', 'meanings', 'context']} className="w-full">
                <AccordionItem value="grammar">
                    <AccordionTrigger className="text-lg font-headline">
                        <BookHeart className="mr-2"/> Grammar Breakdown
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed whitespace-pre-wrap">{helpContent.grammar}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="meanings">
                    <AccordionTrigger className="text-lg font-headline">
                        <BookKey className="mr-2"/> Alternative Meanings
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed whitespace-pre-wrap">{helpContent.meanings}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="context">
                    <AccordionTrigger className="text-lg font-headline">
                        <Library className="mr-2"/> Cultural Context
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed whitespace-pre-wrap">{helpContent.culturalContext}</AccordionContent>
                </AccordionItem>
                </Accordion>
            ) : (
                <div className="text-center text-muted-foreground">No analysis available.</div>
            )}
            </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// The main page component that decides which view to show
export default function TextbookPage() {
  const [selectedChapter, setSelectedChapter] = useState<TextbookChapter | null>(null);

  if (selectedChapter) {
    return <ChapterDetailView chapter={selectedChapter} onBack={() => setSelectedChapter(null)} />;
  }

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Textbook Chapters</h1>
        <p className="text-lg text-muted-foreground mt-2">
          An interactive guide to the 12th HSC Sanskrit syllabus.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {textbookChapters.map((chapter) => (
          <Card key={chapter.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl break-words">{chapter.category}</CardTitle>
              <CardDescription>{chapter.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{chapter.summary}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setSelectedChapter(chapter)} className="w-full">
                Read Chapter <ArrowLeft className="transform rotate-180 ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
