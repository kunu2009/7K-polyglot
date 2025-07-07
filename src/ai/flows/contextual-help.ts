'use server';
/**
 * @fileOverview Provides contextual AI help for a given piece of Sanskrit text.
 *
 * - contextualHelp - A function that provides grammar, meaning, and context for a text.
 * - ContextualHelpInput - The input type for the contextualHelp function.
 * - ContextualHelpOutput - The return type for the contextualHelp function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const ContextualHelpInputSchema = z.object({
  text: z.string().describe('A Sanskrit word or line selected by the user.'),
});
export type ContextualHelpInput = z.infer<typeof ContextualHelpInputSchema>;

const ContextualHelpOutputSchema = z.object({
  grammar: z.string().describe("A grammatical breakdown of the text. For a word, its declension/conjugation. For a line, its syntax and sandhi."),
  meanings: z.string().describe("Alternative or nuanced meanings for key words in the text."),
  culturalContext: z.string().describe("Relevant cultural, historical, or philosophical context."),
});
export type ContextualHelpOutput = z.infer<typeof ContextualHelpOutputSchema>;

export async function contextualHelp(input: ContextualHelpInput): Promise<ContextualHelpOutput> {
  return contextualHelpFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contextualHelpPrompt',
  input: {schema: ContextualHelpInputSchema},
  output: {schema: ContextualHelpOutputSchema},
  prompt: `You are a helpful and knowledgeable Sanskrit scholar AI assistant. A user has selected a piece of Sanskrit text and needs contextual help.

Selected Text: "{{{text}}}"

Please provide a concise analysis covering these three areas for a 12th-grade student:
1.  **Grammar Breakdown:** Analyze the grammatical structure. If it's a single word, provide its root, declension/conjugation details (case, number, gender, tense, person, etc.). If it's a phrase or line, explain key compounds (samāsa) and conjunctions (sandhi).
2.  **Alternative Meanings:** List any alternative or nuanced meanings for the key words in the text. Consider the context of the source material if possible.
3.  **Cultural/Philosophical Context:** Briefly explain any relevant cultural, historical, or philosophical context behind this text. What is the key takeaway or teaching?

Present the information clearly and concisely.`,
});

const contextualHelpFlow = ai.defineFlow(
  {
    name: 'contextualHelpFlow',
    inputSchema: ContextualHelpInputSchema,
    outputSchema: ContextualHelpOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
