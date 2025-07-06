'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { wordBuilderGame } from '@/lib/sanskrit-data';
import { Check, RefreshCw, Swords, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

export default function WordBuilderPage() {
  const { toast } = useToast();
  const [selectedRootIndex, setSelectedRootIndex] = useState(0);
  const [constructedWord, setConstructedWord] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect'; message: string } | null>(null);

  const currentGame = wordBuilderGame.roots[selectedRootIndex];
  
  // Shuffle syllables once per game change
  const shuffledSyllables = useMemo(() => {
    return [...currentGame.syllables].sort(() => Math.random() - 0.5);
  }, [currentGame]);

  const handleSyllableClick = (syllable: string) => {
    setConstructedWord(prev => prev + syllable);
    setFeedback(null);
  };

  const handleCheckWord = () => {
    if (currentGame.validWords.includes(constructedWord)) {
      setFeedback({ type: 'correct', message: `Correct! "${constructedWord}" is a valid word.` });
       toast({
        title: "Correct!",
        description: `"${constructedWord}" is a valid word from the root '${currentGame.root}'.`,
      });
    } else {
      setFeedback({ type: 'incorrect', message: `Not quite. Try a different combination.` });
      toast({
        variant: 'destructive',
        title: "Incorrect",
        description: `"${constructedWord}" is not a valid word for this root.`,
      });
    }
  };

  const handleClear = () => {
    setConstructedWord('');
    setFeedback(null);
  };
  
  const handleRootChange = (value: string) => {
    setSelectedRootIndex(parseInt(value, 10));
    handleClear();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold flex items-center justify-center gap-3">
            <Swords className="h-10 w-10 text-primary"/>
            Word Builder
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Combine syllables to form valid Sanskrit words from a given root.
        </p>
      </header>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Current Root: <span className="text-primary font-mono">{currentGame.root}</span></CardTitle>
            <Select onValueChange={handleRootChange} defaultValue={selectedRootIndex.toString()}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Change Root" />
              </SelectTrigger>
              <SelectContent>
                {wordBuilderGame.roots.map((root, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {root.root} ({root.meaning})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <CardDescription>Meaning: "{currentGame.meaning}"</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 border-2 border-dashed rounded-lg min-h-[80px] flex items-center justify-center bg-secondary">
            <p className="text-4xl font-headline tracking-widest">{constructedWord || '...'}</p>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">Click syllables to build your word:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {shuffledSyllables.map((syllable, index) => (
                <Button key={index} variant="outline" size="lg" className="font-headline text-2xl p-6" onClick={() => handleSyllableClick(syllable)}>
                  {syllable}
                </Button>
              ))}
            </div>
          </div>
          
           {feedback && (
             <div className={`p-3 rounded-md flex items-center justify-center gap-2 text-sm font-semibold ${feedback.type === 'correct' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'}`}>
                {feedback.type === 'correct' ? <Check className="h-4 w-4"/> : <X className="h-4 w-4"/>}
                {feedback.message}
            </div>
          )}

          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={handleCheckWord} disabled={!constructedWord}>
              <Check className="mr-2" /> Check Word
            </Button>
            <Button size="lg" variant="secondary" onClick={handleClear}>
              <RefreshCw className="mr-2" /> Clear
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
