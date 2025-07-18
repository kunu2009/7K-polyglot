
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { newSyllabus } from "@/lib/sanskrit-data";
import type { SyllabusContent } from "@/lib/sanskrit-data";
import { ArrowLeft, BookOpenCheck } from "lucide-react";

function ChapterDetailView({ section, onBack }: { section: SyllabusContent; onBack: () => void }) {
  return (
    <div className="animate-fade-in-up">
      <Button onClick={onBack} variant="outline" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Syllabus
      </Button>

      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold break-words">{section.title}</h1>
        {section.description && <p className="text-lg text-muted-foreground mt-2">{section.description}</p>}
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle>Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {section.items?.map((item, index) => (
            <div key={index}>
              <div className="p-4 border rounded-lg bg-secondary/50">
                <p className="text-2xl font-headline font-semibold mb-3 flex-grow break-words">
                  {item.sanskrit}
                </p>
                {item.translation && <p className="text-muted-foreground italic">"{item.translation}"</p>}
              </div>
              {index < (section.items?.length || 0) - 1 && <Separator className="my-6"/>}
            </div>
          ))}
          {section.details && (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{section.details}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// The main page component that decides which view to show
export default function TextbookPage() {
  const [selectedSection, setSelectedSection] = useState<SyllabusContent | null>(null);

  // Filter for sections that have actual content to display, excluding appendix-style sections
  const sectionsToShow = newSyllabus.filter(s => s.content && !s.title_en.includes("Appendix"));

  if (selectedSection) {
    return <ChapterDetailView section={selectedSection} onBack={() => setSelectedSection(null)} />;
  }

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Syllabus Sections</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Interactive guide to the official syllabus.
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
                    <CardTitle className="font-headline text-2xl break-words">{contentItem.title}</CardTitle>
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

    