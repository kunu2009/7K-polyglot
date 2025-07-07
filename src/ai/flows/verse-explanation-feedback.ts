'use server';
/**
 * @fileOverview Provides feedback on a user's explanation of a Sanskrit verse.
 *
 * - verseExplanationFeedback - A function that analyzes a user's explanation.
 * - VerseExplanationFeedbackInput - The input type for the function.
 * - VerseExplanationFeedbackOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const VerseExplanationFeedbackInputSchema = z.object({
  verse: z.string().describe('The original Sanskrit verse and its translation.'),
  userExplanation: z.string().describe("The user's explanation of the verse in their own words."),
});
export type VerseExplanationFeedbackInput = z.infer<typeof VerseExplanationFeedbackInputSchema>;

const VerseExplanationFeedbackOutputSchema = z.object({
  feedback: z.string().describe("Constructive feedback on the user's explanation, highlighting what they understood correctly and what could be improved. The tone should be encouraging, like a helpful friend."),
  coverageScore: z.number().min(0).max(100).describe("A score from 0 to 100 representing how well the user's explanation covered the key concepts of the original verse."),
});
export type VerseExplanationFeedbackOutput = z.infer<typeof VerseExplanationFeedbackOutputSchema>;

export async function verseExplanationFeedback(input: VerseExplanationFeedbackInput): Promise<VerseExplanationFeedbackOutput> {
  return verseExplanationFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'verseExplanationFeedbackPrompt',
  input: {schema: VerseExplanationFeedbackInputSchema},
  output: {schema: VerseExplanationFeedbackOutputSchema},
  prompt: `You are a friendly and encouraging Sanskrit study partner AI. A user is practicing the "teach-back" method to improve their understanding.

They will provide you with an original Sanskrit verse (and its translation) and their own explanation of it. Your task is to:
1.  Analyze their explanation and compare it to the core meaning of the original verse.
2.  Provide constructive, friendly feedback. Start by praising what they got right. Then, gently point out any key ideas they might have missed or misunderstood. Avoid being harsh or overly critical. Frame it as "Here's something to consider..." or "You're on the right track! To make it even better...".
3.  Give a "coverage score" from 0 to 100 on how well their explanation captured the main message of the verse.

**Original Verse:**
{{verse}}

**User's Explanation:**
{{{userExplanation}}}

Please provide your feedback now.`,
});

const verseExplanationFeedbackFlow = ai.defineFlow(
  {
    name: 'verseExplanationFeedbackFlow',
    inputSchema: VerseExplanationFeedbackInputSchema,
    outputSchema: VerseExplanationFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
