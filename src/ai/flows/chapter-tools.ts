'use server';
/**
 * @fileOverview AI tools for enhancing textbook chapters.
 * - summarizeChapter: Generates a summary for a chapter.
 * - generateFlashcards: Creates new flashcards from chapter content.
 * - generateMcqs: Creates new multiple-choice questions from chapter content.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { SyllabusContent } from '@/lib/sanskrit-data';

// Common input schema for all chapter tools
const ChapterContentSchema = z.object({
  title: z.string(),
  title_en: z.string(),
  description: z.string().optional(),
  details: z.string().optional(),
  items: z.array(z.object({
    sanskrit: z.string(),
    translation: z.string().optional(),
    explanation: z.string().optional(),
  })).optional(),
});

// == 1. AI Summary ==
const SummaryOutputSchema = z.object({
  summary: z.string().describe("A concise, easy-to-understand summary of the chapter's key themes, verses, and moral, suitable for a 12th-grade student."),
});

export async function summarizeChapter(input: SyllabusContent): Promise<z.infer<typeof SummaryOutputSchema>> {
  return summarizeChapterFlow(input);
}

const summarizeChapterPrompt = ai.definePrompt({
  name: 'summarizeChapterPrompt',
  input: { schema: ChapterContentSchema },
  output: { schema: SummaryOutputSchema },
  prompt: `You are an expert Sanskrit teacher. Please create a concise summary of the following chapter content.
The summary should capture the main ideas, the essence of the verses, and any underlying moral or humorous point.
Make it easy for a 12th-grade student to understand.

Chapter Title: {{title}} ({{title_en}})
Description: {{description}}
Introduction: {{details}}

Verses:
{{#each items}}
- {{sanskrit}}
  Translation: {{translation}}
{{/each}}
`,
});

const summarizeChapterFlow = ai.defineFlow(
  {
    name: 'summarizeChapterFlow',
    inputSchema: ChapterContentSchema,
    outputSchema: SummaryOutputSchema,
  },
  async (input) => {
    const { output } = await summarizeChapterPrompt(input);
    return output!;
  }
);


// == 2. AI Flashcard Generator ==
const FlashcardSchema = z.object({
  id: z.string().describe("A unique ID for the flashcard, combining chapterId and a number."),
  chapterId: z.string().describe("The ID of the chapter this card belongs to."),
  front: z.string().describe("A single Sanskrit word from the chapter."),
  back: z.string().describe("The English translation or meaning of the word."),
});

const FlashcardsOutputSchema = z.object({
  flashcards: z.array(FlashcardSchema).describe("An array of 5-10 new, unique flashcards based on the chapter content."),
});
export type GeneratedFlashcards = z.infer<typeof FlashcardsOutputSchema>;

export async function generateFlashcards(input: SyllabusContent): Promise<GeneratedFlashcards> {
  return generateFlashcardsFlow(input);
}

const generateFlashcardsPrompt = ai.definePrompt({
  name: 'generateFlashcardsPrompt',
  input: { schema: ChapterContentSchema },
  output: { schema: FlashcardsOutputSchema },
  prompt: `Based on the following Sanskrit chapter content, generate 5-10 new, unique flashcards.
Focus on important nouns, verbs, or adjectives that a student should learn.
Each flashcard must have a single Sanskrit word on the front and its English meaning on the back.
The chapterId for each card should be '{{id}}'.

Chapter Content:
{{#each items}}
- {{sanskrit}} ({{translation}})
{{/each}}
`,
});

const generateFlashcardsFlow = ai.defineFlow(
  {
    name: 'generateFlashcardsFlow',
    inputSchema: ChapterContentSchema,
    outputSchema: FlashcardsOutputSchema,
  },
  async (input) => {
    const { output } = await generateFlashcardsPrompt(input);
    return output!;
  }
);


// == 3. AI MCQ Generator ==
const MCQSchema = z.object({
  id: z.string().describe("A unique ID for the question."),
  chapterId: z.string().describe("The ID of the chapter this question belongs to."),
  question: z.string().describe("A multiple-choice question based on the chapter's content, grammar, or vocabulary."),
  options: z.array(z.string()).length(4).describe("An array of exactly four possible answers."),
  answer: z.string().describe("The correct answer, which must be one of the four options."),
});

const MCQsOutputSchema = z.object({
  mcqs: z.array(MCQSchema).describe("An array of 3-5 new, unique multiple-choice questions."),
});
export type GeneratedMcqs = z.infer<typeof MCQsOutputSchema>;

export async function generateMcqs(input: SyllabusContent): Promise<GeneratedMcqs> {
  return generateMcqsFlow(input);
}

const generateMcqsPrompt = ai.definePrompt({
  name: 'generateMcqsPrompt',
  input: { schema: ChapterContentSchema },
  output: { schema: MCQsOutputSchema },
  prompt: `Based on the following Sanskrit chapter, generate 3-5 new and unique multiple-choice questions.
The questions can be about the meaning of the verses, the characters involved, specific vocabulary, or grammar points.
Ensure each question has four options and one correct answer. The correct answer MUST be present in the options array.
The chapterId for each question should be '{{id}}'.

Chapter Content:
Title: {{title_en}}
Introduction: {{details}}
{{#each items}}
Verse: {{sanskrit}}
Translation: {{translation}}
Explanation: {{explanation}}
{{/each}}
`,
});

const generateMcqsFlow = ai.defineFlow(
  {
    name: 'generateMcqsFlow',
    inputSchema: ChapterContentSchema,
    outputSchema: MCQsOutputSchema,
  },
  async (input) => {
    const { output } = await generateMcqsPrompt(input);
    return output!;
  }
);
