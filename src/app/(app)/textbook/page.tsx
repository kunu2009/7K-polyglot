
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { newSyllabus } from "@/lib/sanskrit-data";
import type { SyllabusContent, PracticeQuestion, Flashcard } from "@/lib/sanskrit-data";
import { ArrowLeft, BookOpenCheck, Wand2, Loader2, Save, Trash2, CheckCircle, XCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { summarizeChapter, generateFlashcards, generateMcqs, GeneratedFlashcards, GeneratedMcqs } from '@/ai/flows/chapter-tools';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Extending types to include a temporary 'saved' state for the UI
type TempFlashcard = GeneratedFlashcards['flashcards'][0] & { saved?: boolean };
type TempMCQ = GeneratedMcqs['mcqs'][0] & { saved?: boolean };


function ChapterDetailView({ section, onBack }: { section: SyllabusContent; onBack: () => void }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [generatedFlashcards, setGeneratedFlashcards] = useState<TempFlashcard[]>([]);
  const [generatedMcqs, setGeneratedMcqs] = useState<TempMCQ[]>([]);

  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [isLoadingFlashcards, setIsLoadingFlashcards] = useState(false);
  const [isLoadingMcqs, setIsLoadingMcqs] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoadingSummary(true);
    try {
      const result = await summarizeChapter(section);
      setSummary(result.summary);
    } catch (e) {
      toast({ variant: 'destructive', title: 'Error', description: 'Could not generate summary.' });
    } finally {
      setIsLoadingSummary(false);
    }
  };

  const handleGenerateFlashcards = async () => {
    setIsLoadingFlashcards(true);
    setGeneratedFlashcards([]);
    try {
      const result = await generateFlashcards(section);
      setGeneratedFlashcards(result.flashcards.map(card => ({...card, saved: false})));
    } catch (e) {
      toast({ variant: 'destructive', title: 'Error', description: 'Could not generate flashcards.' });
    } finally {
      setIsLoadingFlashcards(false);
    }
  };
  
  const handleGenerateMcqs = async () => {
    setIsLoadingMcqs(true);
    setGeneratedMcqs([]);
    try {
      const result = await generateMcqs(section);
       setGeneratedMcqs(result.mcqs.map(mcq => ({...mcq, saved: false})));
    } catch (e) {
      toast({ variant: 'destructive', title: 'Error', description: 'Could not generate questions.' });
    } finally {
      setIsLoadingMcqs(false);
    }
  };

  const saveToLocalStorage = (key: string, item: Flashcard | PracticeQuestion) => {
    try {
        const existingItems: (Flashcard | PracticeQuestion)[] = JSON.parse(localStorage.getItem(key) || '[]');
        const isAlreadySaved = existingItems.some(existing => existing.id === item.id);
        
        if (!isAlreadySaved) {
            const updatedItems = [...existingItems, item];
            localStorage.setItem(key, JSON.stringify(updatedItems));
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Failed to save to ${key}`, error);
        toast({ variant: 'destructive', title: 'Storage Error', description: 'Could not save item.' });
        return false;
    }
  };

  const handleSaveFlashcard = (cardToSave: TempFlashcard) => {
    if (saveToLocalStorage('ai-generated-flashcards', cardToSave)) {
      toast({ title: 'Saved!', description: 'Flashcard added to your collection.' });
      setGeneratedFlashcards(prev => prev.map(card => card.id === cardToSave.id ? { ...card, saved: true } : card));
    } else {
      toast({ title: 'Already Exists', description: 'This flashcard is already in your collection.' });
       setGeneratedFlashcards(prev => prev.map(card => card.id === cardToSave.id ? { ...card, saved: true } : card));
    }
  };

  const handleSaveMcq = (mcqToSave: TempMCQ) => {
    if (saveToLocalStorage('ai-generated-mcqs', mcqToSave)) {
      toast({ title: 'Saved!', description: 'Question added to your practice quiz.' });
      setGeneratedMcqs(prev => prev.map(mcq => mcq.id === mcqToSave.id ? { ...mcq, saved: true } : mcq));
    } else {
      toast({ title: 'Already Exists', description: 'This question is already in your practice quiz.' });
      setGeneratedMcqs(prev => prev.map(mcq => mcq.id === mcqToSave.id ? { ...mcq, saved: true } : mcq));
    }
  };
  
  const handleDiscardFlashcard = (cardId: string) => {
    setGeneratedFlashcards(prev => prev.filter(card => card.id !== cardId));
  }
  
  const handleDiscardMcq = (mcqId: string) => {
     setGeneratedMcqs(prev => prev.filter(mcq => mcq.id !== mcqId));
  }
  
  const handleSaveAllFlashcards = () => {
    let savedCount = 0;
    generatedFlashcards.forEach(card => {
        if (!card.saved) {
            if (saveToLocalStorage('ai-generated-flashcards', card)) {
                savedCount++;
            }
        }
    });
    setGeneratedFlashcards(prev => prev.map(card => ({...card, saved: true})));
    toast({ title: 'All Saved!', description: `${savedCount} new flashcards were added to your collection.` });
  }

  const handleSaveAllMcqs = () => {
    let savedCount = 0;
    generatedMcqs.forEach(mcq => {
        if (!mcq.saved) {
            if (saveToLocalStorage('ai-generated-mcqs', mcq)) {
                savedCount++;
            }
        }
    });
    setGeneratedMcqs(prev => prev.map(mcq => ({...mcq, saved: true})));
    toast({ title: 'All Saved!', description: `${savedCount} new questions were added to your practice quiz.` });
  }


  return (
    <div className="animate-fade-in-up">
      <Button onClick={onBack} variant="outline" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Syllabus
      </Button>

      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold break-words">{section.title} ({section.title_en})</h1>
        {section.description && <p className="text-lg text-muted-foreground mt-2">{section.description}</p>}
      </header>
      
      <Tabs defaultValue="chapter" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chapter">Chapter</TabsTrigger>
          <TabsTrigger value="summary">AI Summary</TabsTrigger>
          <TabsTrigger value="flashcards">AI Flashcards</TabsTrigger>
          <TabsTrigger value="quiz">AI Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="chapter">
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {section.details && (
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                  <p>{section.details}</p>
                </div>
              )}
              <ScrollArea className="h-[60vh]">
                <div className="pr-4 space-y-6">
                  {section.items?.map((item, index) => (
                    <div key={index}>
                      <div className="p-4 border rounded-lg bg-secondary/50">
                        <p className="text-2xl font-headline font-semibold mb-3 flex-grow break-words whitespace-pre-wrap">
                          {item.sanskrit}
                        </p>
                        {item.translation && <p className="text-muted-foreground italic">"{item.translation}"</p>}
                      </div>
                      {index < (section.items?.length || 0) - 1 && <Separator className="my-6"/>}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Summary</CardTitle>
              <CardDescription>Get a quick overview of the chapter's key points.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={handleGenerateSummary} disabled={isLoadingSummary}>
                {isLoadingSummary ? <Loader2 className="animate-spin mr-2" /> : <Wand2 className="mr-2" />}
                Generate Summary
              </Button>
              {isLoadingSummary && <p className="text-muted-foreground">AI is thinking...</p>}
              {summary && (
                <Alert>
                  <AlertTitle className="font-headline">Chapter Summary</AlertTitle>
                  <AlertDescription className="whitespace-pre-wrap">{summary}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flashcards">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Flashcards</CardTitle>
              <CardDescription>Create new flashcards based on this chapter. Review them here and save the ones you like.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={handleGenerateFlashcards} disabled={isLoadingFlashcards}>
                {isLoadingFlashcards ? <Loader2 className="animate-spin mr-2" /> : <Wand2 className="mr-2" />}
                Generate New Flashcards
              </Button>
              {isLoadingFlashcards && <p className="text-muted-foreground">AI is creating new cards...</p>}
              
              {generatedFlashcards.length > 0 && (
                <div className="space-y-4 pt-4 animate-fade-in-up">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-headline">Review Generated Cards</h3>
                    <Button onClick={handleSaveAllFlashcards} size="sm" variant="secondary" disabled={generatedFlashcards.every(c => c.saved)}>
                        <Save className="mr-2 h-4 w-4"/> Save All
                    </Button>
                  </div>
                   <ScrollArea className="h-[40vh] p-1">
                    <div className="space-y-3 pr-4">
                        {generatedFlashcards.map((card) => (
                            <Card key={card.id} className={`flex items-center justify-between p-4 ${card.saved ? 'bg-green-50 dark:bg-green-900/20' : 'bg-secondary/50'}`}>
                                <div>
                                    <p className="font-bold text-lg font-headline">{card.front}</p>
                                    <p className="text-muted-foreground">{card.back}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="icon" variant="ghost" onClick={() => handleSaveFlashcard(card)} disabled={card.saved} aria-label="Save card">
                                        {card.saved ? <CheckCircle className="text-green-600"/> : <Save className="h-5 w-5"/>}
                                    </Button>
                                    <Button size="icon" variant="ghost" onClick={() => handleDiscardFlashcard(card.id)} disabled={card.saved} aria-label="Discard card">
                                        <Trash2 className="h-5 w-5 text-destructive"/>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                   </ScrollArea>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="quiz">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Quiz</CardTitle>
              <CardDescription>Create new practice questions. Review and save them to your main practice quiz.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={handleGenerateMcqs} disabled={isLoadingMcqs}>
                {isLoadingMcqs ? <Loader2 className="animate-spin mr-2" /> : <Wand2 className="mr-2" />}
                Generate New Questions
              </Button>
               {isLoadingMcqs && <p className="text-muted-foreground">AI is creating new questions...</p>}

                {generatedMcqs.length > 0 && (
                    <div className="space-y-4 pt-4 animate-fade-in-up">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-headline">Review Generated Questions</h3>
                            <Button onClick={handleSaveAllMcqs} size="sm" variant="secondary" disabled={generatedMcqs.every(q => q.saved)}>
                                <Save className="mr-2 h-4 w-4"/> Save All
                            </Button>
                        </div>
                        <ScrollArea className="h-[40vh] p-1">
                            <div className="space-y-3 pr-4">
                                {generatedMcqs.map((mcq) => (
                                    <Card key={mcq.id} className={`p-4 ${mcq.saved ? 'bg-green-50 dark:bg-green-900/20' : 'bg-secondary/50'}`}>
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1 space-y-2">
                                                <p className="font-semibold">{mcq.question}</p>
                                                <ul className="text-sm text-muted-foreground list-disc pl-5">
                                                    {mcq.options.map((opt, i) => (
                                                        <li key={i} className={opt === mcq.answer ? 'font-bold text-primary' : ''}>{opt}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex gap-2 pl-4">
                                                 <Button size="icon" variant="ghost" onClick={() => handleSaveMcq(mcq)} disabled={mcq.saved} aria-label="Save question">
                                                    {mcq.saved ? <CheckCircle className="text-green-600"/> : <Save className="h-5 w-5"/>}
                                                </Button>
                                                <Button size="icon" variant="ghost" onClick={() => handleDiscardMcq(mcq.id)} disabled={mcq.saved} aria-label="Discard question">
                                                    <Trash2 className="h-5 w-5 text-destructive"/>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// The main page component that decides which view to show
export default function TextbookPage() {
  const [selectedSection, setSelectedSection] = useState<SyllabusContent | null>(null);

  const sectionsToShow = newSyllabus.filter(s => !s.title_en.includes("Appendix"));

  if (selectedSection) {
    return <ChapterDetailView section={selectedSection} onBack={() => setSelectedSection(null)} />;
  }

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Syllabus Sections</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Interactive guide to the official "Alhad" syllabus.
        </p>
      </header>
      <div className="space-y-8">
        {sectionsToShow.map(section => (
          <div key={section.title}>
            <h2 className="text-3xl font-headline mb-4">{section.title_en} ({section.title})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.content?.map((contentItem) => (
                <Card key={contentItem.title} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl break-words">{contentItem.title_en}</CardTitle>
                     <CardDescription>{contentItem.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{contentItem.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => setSelectedSection(contentItem)} className="w-full">
                      Read Section <BookOpenCheck className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
