'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { textbookChapters } from "@/lib/sanskrit-data";
import type { TextbookChapter } from "@/lib/sanskrit-data";
import { ArrowLeft, BookCheck, BookText, FileText, Info, Share2, UserSquare, Volume2, Loader2, StopCircle, Sparkles, BookHeart, Library, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  textToSpeech, 
  contextualHelp, 
  verseExplanationFeedback,
  type ContextualHelpOutput,
  type VerseExplanationFeedbackOutput 
} from '@/lib/ai-helpers';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';


type Verse = TextbookChapter['content'][0];

// Dialog for the "Explain this Verse" feature
function TeachBackDialog({
  verse,
  open,
  onOpenChange,
}: {
  verse: Verse | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { toast } = useToast();
  const [explanation, setExplanation] = useState('');
  const [feedback, setFeedback] = useState<VerseExplanationFeedbackOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Reset state when dialog is closed or verse changes
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setExplanation('');
        setFeedback(null);
        setIsLoading(false);
      }, 200);
    }
  }, [open]);

  if (!verse) return null;

  const handleGetFeedback = async () => {
    if (explanation.trim().length < 10) {
      toast({
        variant: 'destructive',
        title: 'Explanation too short',
        description: 'Please write a more detailed explanation to get useful feedback.',
      });
      return;
    }
    setIsLoading(true);
    setFeedback(null);
    try {
      const result = await verseExplanationFeedback(
        `Sanskrit: ${verse.sanskrit}\nTranslation: ${verse.translation}`,
        explanation
      );
      setFeedback(result);
    } catch (error) {
      console.error("Failed to get explanation feedback:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not get feedback. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
            <MessageSquareQuote className="text-primary" />
            Explain This Verse
          </DialogTitle>
          <DialogDescription>
            Read the verse below, then explain it in your own words. This helps reinforce your understanding.
          </DialogDescription>
        </DialogHeader>
        <div className="my-4 space-y-4 max-h-[60vh] overflow-y-auto p-1">
          <Card className="bg-secondary/50">
            <CardContent className="p-4">
              <p className="text-xl font-headline font-semibold mb-2">{verse.sanskrit}</p>
              <p className="text-sm text-muted-foreground italic">"{verse.translation}"</p>
            </CardContent>
          </Card>
          
          <Textarea
            placeholder="Now, explain what this verse means to a friend..."
            className="min-h-[150px] text-base"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            disabled={isLoading || !!feedback}
          />
          
          {isLoading && (
            <div className="flex items-center justify-center space-y-2 flex-col text-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="font-semibold">Analyzing your explanation...</p>
            </div>
          )}

          {feedback && !isLoading && (
            <Card className="animate-fade-in-up bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-300">
                    <CheckCircle2 /> AI Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                      <Label htmlFor="coverage-score" className="text-sm font-medium">Concept Coverage</Label>
                      <div className="flex items-center gap-3">
                        <Progress value={feedback.coverageScore} id="coverage-score" className="h-2"/>
                        <span className="font-bold text-sm text-green-800 dark:text-green-300">{feedback.coverageScore}%</span>
                      </div>
                  </div>
                  <p className="text-base whitespace-pre-wrap">{feedback.feedback}</p>
                </CardContent>
            </Card>
          )}

        </div>
        <DialogFooter>
          {!feedback ? (
            <Button onClick={handleGetFeedback} disabled={isLoading} size="lg">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get Feedback
            </Button>
          ) : (
            <Button onClick={() => onOpenChange(false)} variant="secondary" size="lg">Close</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


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

  const [isTeachBackOpen, setIsTeachBackOpen] = useState(false);
  const [selectedVerseForTeachBack, setSelectedVerseForTeachBack] = useState<Verse | null>(null);

  const handleOpenTeachBack = (verse: Verse) => {
    setSelectedVerseForTeachBack(verse);
    setIsTeachBackOpen(true);
  };

  const triggerAiHelp = async () => {
    const text = window.getSelection()?.toString().trim();
    if (text && text.length > 1) {
        setSelectedText(text);
        setIsHelpOpen(true);
        setIsHelpLoading(true);
        setHelpContent(null);
        try {
            const result = await contextualHelp(text);
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
        if (response.audio) {
          audioRef.current = new Audio(response.audio);
        } else {
          throw new Error('No audio data received');
        }
        
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
                    <div className="flex flex-col sm:flex-row gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handlePlayVerse(item)}
                        disabled={loadingId !== null && loadingId !== item.id}
                        className="text-muted-foreground"
                        aria-label="Listen to verse"
                      >
                        {loadingId === item.id && <Loader2 className="h-5 w-5 animate-spin" />}
                        {playingId === item.id && loadingId !== item.id && <StopCircle className="h-5 w-5 text-primary" />}
                        {playingId !== item.id && loadingId !== item.id && <Volume2 className="h-5 w-5" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleOpenTeachBack(item)}
                        className="text-muted-foreground"
                        aria-label="Explain this verse"
                      >
                         <MessageSquareQuote className="h-5 w-5"/>
                      </Button>
                    </div>
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
                        <MessageSquareQuote className="mr-2"/> Alternative Meanings
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
      
      <TeachBackDialog 
        open={isTeachBackOpen} 
        onOpenChange={setIsTeachBackOpen} 
        verse={selectedVerseForTeachBack} 
      />
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
