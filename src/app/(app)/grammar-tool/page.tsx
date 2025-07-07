'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { grammarToolSentence } from "@/lib/sanskrit-data";
import { Wand2, Info } from "lucide-react";

export default function GrammarToolPage() {
    return (
        <div>
            <header className="mb-8">
                <h1 className="text-4xl font-headline font-bold">Grammar Breakdown Tool</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    Tap any word in the sentence below to see its grammatical information.
                </p>
            </header>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wand2 className="text-primary"/>
                        Interactive Sentence
                    </CardTitle>
                    <CardDescription>
                        This tool helps you see how words function in a sentence, based on textbook examples.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="p-8 border rounded-lg bg-secondary">
                        <p className="text-4xl text-center font-headline tracking-wider">
                            {grammarToolSentence.words.map((wordData, index) => (
                                <Popover key={index}>
                                    <PopoverTrigger asChild>
                                        <span className={`cursor-pointer hover:underline decoration-primary decoration-2 underline-offset-4 mx-1 ${wordData.color}`}>
                                            {wordData.word}
                                        </span>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80">
                                        <div className="grid gap-4">
                                            <div className="space-y-2">
                                                <h4 className="font-medium leading-none font-headline">{wordData.word}</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Meaning: "{wordData.info.meaning}"
                                                </p>
                                            </div>
                                            <div className="grid gap-2">
                                                {Object.entries(wordData.info).map(([key, value]) => {
                                                    if (key === 'meaning') return null;
                                                    
                                                    const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

                                                    return (
                                                        <div key={key} className="grid grid-cols-3 items-center gap-4">
                                                            <span className="text-sm font-medium capitalize text-muted-foreground">{formattedKey}</span>
                                                            <span className="col-span-2 text-sm">{value as string}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            ))}
                        </p>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3 text-blue-800">
                        <Info className="h-5 w-5 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold font-headline">How it works</h3>
                            <p className="text-sm">Color-coding helps identify word types: 
                                <span className="font-semibold text-blue-600"> Nouns/Pronouns</span>, 
                                <span className="font-semibold text-red-600"> Verbs</span>, and 
                                <span className="font-semibold text-purple-600"> Adjectives/Indeclinables</span>.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
