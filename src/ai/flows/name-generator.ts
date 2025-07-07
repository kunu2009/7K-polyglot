'use server';
/**
 * @fileOverview Generates Sanskrit names based on user input.
 *
 * - generateSanskritName - A function that suggests Sanskrit names.
 * - GenerateSanskritNameInput - The input type for the function.
 * - GenerateSanskritNameOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateSanskritNameInputSchema = z.object({
  userName: z.string().optional().describe("The user's original name (optional)."),
  traits: z.string().describe("A few words describing the user's personality or desired qualities (e.g., 'brave, wise, calm')."),
});
export type GenerateSanskritNameInput = z.infer<typeof GenerateSanskritNameInputSchema>;

const NameSuggestionSchema = z.object({
  sanskritName: z.string().describe('The suggested name in Devanagari script.'),
  transliteration: z.string().describe('The IAST transliteration of the name.'),
  meaning: z.string().describe('A brief explanation of the name\'s meaning and significance.'),
});

const GenerateSanskritNameOutputSchema = z.object({
    names: z.array(NameSuggestionSchema).describe("An array of 3-5 Sanskrit name suggestions.")
});
export type GenerateSanskritNameOutput = z.infer<typeof GenerateSanskritNameOutputSchema>;

export async function generateSanskritName(input: GenerateSanskritNameInput): Promise<GenerateSanskritNameOutput> {
  return generateSanskritNameFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSanskritNamePrompt',
  input: {schema: GenerateSanskritNameInputSchema},
  output: {schema: GenerateSanskritNameOutputSchema},
  prompt: `You are a Sanskrit scholar with expertise in etymology and naming conventions. A user wants a beautiful and meaningful Sanskrit name.

Based on their input, generate 3-5 authentic Sanskrit names. For each name, provide:
1.  The name in Devanagari script.
2.  A standard IAST transliteration (e.g., Ānanda, Śānti).
3.  A concise but clear meaning, explaining the root or concept behind the name.

The names should be suitable for use today. Avoid overly obscure or complex names unless they fit the user's request perfectly.

**User's Name (for inspiration, optional):** {{userName}}
**Desired Traits/Qualities:** {{{traits}}}

Generate the name suggestions now.`,
});

const generateSanskritNameFlow = ai.defineFlow(
  {
    name: 'generateSanskritNameFlow',
    inputSchema: GenerateSanskritNameInputSchema,
    outputSchema: GenerateSanskritNameOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
