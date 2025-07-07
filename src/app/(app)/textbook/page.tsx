'use client';

import { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { textbookChapters } from "@/lib/sanskrit-data";
import type { TextbookChapter } from "@/lib/sanskrit-data";
import { ArrowLeft, BookCheck, BookText, FileText, Info, Share2, UserSquare, Volume2, Loader2, StopCircle } from "lucide-react";
import { textToSpeech } from '@/ai/flows/text-to-speech';

// The full view for a single selected chapter
function ChapterDetailView({ chapter, onBack }: { chapter: TextbookChapter; onBack: () => void }) {
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
            <CardDescription>An interactive breakdown of each line. Click the speaker icon to listen.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {chapter.content.map((item, index) => (
              <div key={item.id}>
                <div className="p-4 border rounded-lg bg-secondary/50">
                  <div className="flex justify-between items-start gap-4">
                    <p className="text-2xl font-headline font-semibold mb-3 flex-grow break-all">{item.sanskrit}</p>
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
