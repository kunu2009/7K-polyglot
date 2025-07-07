'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mindMapData } from "@/lib/sanskrit-data";
import { GitFork } from "lucide-react";

export default function MindMapsPage() {
  const map = mindMapData[0]; // For now, just display the first map

  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold flex items-center justify-center gap-3">
            <GitFork className="h-10 w-10 text-primary"/>
            Mind Maps
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Visually explore connections between grammatical concepts.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{map.title}</CardTitle>
          <CardDescription>
            Visualizing the conjugation of a verb root across different persons and numbers.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 overflow-x-auto">
          <div className="flex flex-col items-center min-w-[700px] py-4">
            {/* Root Node */}
            <Badge variant="default" className="text-xl font-bold font-headline p-4 rounded-lg shadow-md">
              {map.root}
            </Badge>

            {/* Connecting Line Down */}
            <div className="w-px h-12 bg-border my-4"></div>

            {/* Main Branches */}
            <div className="flex w-full justify-around relative">
              {/* Horizontal connecting line */}
              <div className="absolute top-0 h-px w-full max-w-3xl bg-border"></div>

              {map.sections.map((section, index) => (
                <div key={index} className="flex flex-col items-center gap-4 relative z-10 bg-background px-2">
                  {/* Vertical line from main horizontal line */}
                  <div className="w-px h-8 bg-border"></div>
                  
                  {/* Section Title Node */}
                  <h3 className="font-semibold text-lg font-headline text-primary bg-secondary px-3 py-1 rounded-md border text-center">{section.title}</h3>

                  {/* Vertical line down to persons */}
                  <div className="w-px h-4 bg-border"></div>
                  
                  {/* Person Nodes */}
                  <div className="space-y-3 flex flex-col items-center">
                    {section.persons.map((person, pIndex) => (
                      <div key={pIndex} className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground w-24 text-right">{person.number}</span>
                        <Badge variant="outline" className="text-lg font-mono p-2 w-32 justify-center shadow-sm">
                          {person.form}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
