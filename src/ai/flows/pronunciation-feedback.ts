// This is an AI-powered function for pronunciation feedback in Sanskrit.
'use server';
/**
 * @fileOverview Provides pronunciation feedback on spoken Sanskrit words or shlokas.
 *
 * - pronunciationFeedback - A function that takes spoken Sanskrit and provides feedback.
 * - PronunciationFeedbackInput - The input type for the pronunciationFeedback function.
 * - PronunciationFeedbackOutput - The return type for the pronunciationFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PronunciationFeedbackInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The user's spoken Sanskrit audio, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  text: z.string().describe('The expected Sanskrit text or shloka.'),
});
export type PronunciationFeedbackInput = z.infer<
  typeof PronunciationFeedbackInputSchema
>;

const PronunciationFeedbackOutputSchema = z.object({
  feedback: z.string().describe('Feedback on the pronunciation.'),
});
export type PronunciationFeedbackOutput = z.infer<
  typeof PronunciationFeedbackOutputSchema
>;

export async function pronunciationFeedback(
  input: PronunciationFeedbackInput
): Promise<PronunciationFeedbackOutput> {
  return pronunciationFeedbackFlow(input);
}

const pronunciationFeedbackPrompt = ai.definePrompt({
  name: 'pronunciationFeedbackPrompt',
  input: {schema: PronunciationFeedbackInputSchema},
  output: {schema: PronunciationFeedbackOutputSchema},
  prompt: `You are an expert Sanskrit pronunciation coach.

You will receive an audio recording of a user speaking a Sanskrit word or shloka, along with the expected text. Your task is to provide feedback on their pronunciation, pointing out any errors and suggesting improvements.

Audio: {{media url=audioDataUri}}
Expected Text: {{{text}}}

Focus on accuracy, clarity, and adherence to traditional Sanskrit pronunciation rules.  Provide specific, actionable advice.
`,
});

const pronunciationFeedbackFlow = ai.defineFlow(
  {
    name: 'pronunciationFeedbackFlow',
    inputSchema: PronunciationFeedbackInputSchema,
    outputSchema: PronunciationFeedbackOutputSchema,
  },
  async input => {
    const {output} = await pronunciationFeedbackPrompt(input);
    return output!;
  }
);
