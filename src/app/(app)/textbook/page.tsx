
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { newSyllabus } from "@/lib/sanskrit-data";
import type { SyllabusContent, PracticeQuestion, Flashcard } from "@/lib/sanskrit-data";
import { ArrowLeft, BookOpenCheck, Wand2, Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { summarizeChapter, generateFlashcards, generateMcqs, GeneratedFlashcards, GeneratedMcqs } from '@/ai/flows/chapter-tools';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

function ChapterDetailView({ section, onBack }: { section: SyllabusContent; onBack: () => void }) {
  const [summary, setSummary] = useState<string | null>(null);
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
    try {
      const result: GeneratedFlashcards = await generateFlashcards(section);
      const existingCards: Flashcard[] = JSON.parse(localStorage.getItem('ai-generated-flashcards') || '[]');
      const newCards = result.flashcards.filter(nc => !existingCards.some(ec => ec.id === nc.id));
      
      if (newCards.length > 0) {
        const updatedCards = [...existingCards, ...newCards];
        localStorage.setItem('ai-generated-flashcards', JSON.stringify(updatedCards));
        toast({ title: 'Success', description: `${newCards.length} new flashcards have been generated and saved.` });
      } else {
        toast({ title: 'No new cards', description: 'AI did not generate any new flashcards.' });
      }
    } catch (e) {
      toast({ variant: 'destructive', title: 'Error', description: 'Could not generate flashcards.' });
    } finally {
      setIsLoadingFlashcards(false);
    }
  };
  
  const handleGenerateMcqs = async () => {
    setIsLoadingMcqs(true);
    try {
      const result: GeneratedMcqs = await generateMcqs(section);
      const existingMcqs: PracticeQuestion[] = JSON.parse(localStorage.getItem('ai-generated-mcqs') || '[]');
      const newMcqs = result.mcqs.filter(nm => !existingMcqs.some(em => em.id === nm.id));
      
      if (newMcqs.length > 0) {
        const updatedMcqs = [...existingMcqs, ...newMcqs];
        localStorage.setItem('ai-generated-mcqs', JSON.stringify(updatedMcqs));
        toast({ title: 'Success', description: `${newMcqs.length} new questions have been generated and saved.` });
      } else {
        toast({ title: 'No new questions', description: 'AI did not generate any new questions.' });
      }
    } catch (e) {
      toast({ variant: 'destructive', title: 'Error', description: 'Could not generate questions.' });
    } finally {
      setIsLoadingMcqs(false);
    }
  };

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
              <CardDescription>Create new flashcards based on this chapter. They will be added to the main Flashcards page.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleGenerateFlashcards} disabled={isLoadingFlashcards}>
                {isLoadingFlashcards ? <Loader2 className="animate-spin mr-2" /> : <Wand2 className="mr-2" />}
                Generate & Save Flashcards
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="quiz">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Quiz</CardTitle>
              <CardDescription>Create new practice questions for this chapter. They will be added to the main Practice page.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleGenerateMcqs} disabled={isLoadingMcqs}>
                {isLoadingMcqs ? <Loader2 className="animate-spin mr-2" /> : <Wand2 className="mr-2" />}
                Generate & Save Quiz Questions
              </Button>
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
