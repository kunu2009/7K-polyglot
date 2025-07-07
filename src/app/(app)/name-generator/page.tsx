'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Loader2, Wand2 } from 'lucide-react';
import { generateSanskritName, type GenerateSanskritNameOutput } from '@/ai/flows/name-generator';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  userName: z.string().optional(),
  traits: z.string().min(3, { message: 'Please describe at least one trait.' }),
});

export default function NameGeneratorPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedNames, setGeneratedNames] = useState<GenerateSanskritNameOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      traits: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedNames(null);
    try {
      const result = await generateSanskritName(values);
      setGeneratedNames(result);
    } catch (error) {
      console.error('Error generating names:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate names. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold flex items-center justify-center gap-3">
          <Sparkles className="h-10 w-10 text-primary" />
          Sanskrit Name Generator
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Discover a meaningful Sanskrit name based on your personality.
        </p>
      </header>

      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Describe Yourself</CardTitle>
              <CardDescription>
                Enter your name and some traits, and our AI will suggest some beautiful Sanskrit names.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="userName">Your Name (Optional)</Label>
                    <FormControl>
                      <Input id="userName" placeholder="e.g., Alex" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="traits"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="traits">Key Traits or Qualities</Label>
                    <FormControl>
                      <Textarea
                        id="traits"
                        placeholder="e.g., Brave, kind, lover of nature, peaceful..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Generate Names
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {isLoading && (
        <div className="text-center mt-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
          <p className="mt-2 text-muted-foreground">Generating your names...</p>
        </div>
      )}
      
      {generatedNames && (
        <div className="mt-8 animate-fade-in-up">
            <h2 className="text-2xl font-headline font-bold text-center mb-4">Your Name Suggestions</h2>
            <div className="space-y-4">
            {generatedNames.names.map((name, index) => (
                <Card key={index} className="bg-secondary/50">
                <CardHeader>
                    <CardTitle className="flex items-baseline gap-4">
                        <span className="text-3xl font-headline text-primary">{name.sanskritName}</span>
                        <span className="text-lg text-muted-foreground font-mono">{name.transliteration}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{name.meaning}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      )}
    </div>
  );
}
