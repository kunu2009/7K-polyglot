'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { writingTopics } from "@/lib/sanskrit-data";
import { FilePenLine } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function WritingPracticePage() {
  const [text, setText] = useState('');
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold flex items-center gap-3">
          <FilePenLine className="h-10 w-10 text-primary"/>
          Writing Practice (लेखनकौशलम्)
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Practice writing essays and summaries on common topics.
        </p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Essay Topics (निबन्धविषयाः)</CardTitle>
              <CardDescription>Choose a topic and start writing below.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {writingTopics.map((topic, index) => (
                  <li key={index} className="font-semibold">{topic.title} <span className="font-normal">- {topic.translation}</span></li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Essay</CardTitle>
              <CardDescription>Compose your essay in the space below. The word count is updated automatically.</CardDescription>
            </Header>
            <CardContent>
              <Textarea 
                placeholder="अत्र लिखन्तु..."
                className="min-h-[400px] text-lg"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Word Count: {wordCount}</span>
               <Button disabled>Submit for AI Feedback (Coming Soon)</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
