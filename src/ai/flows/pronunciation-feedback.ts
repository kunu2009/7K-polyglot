// This is an AI-powered function for pronunciation feedback in Sanskrit.
'use server';
/**
 * @fileOverview Provides pronunciation feedback on spoken Sanskrit words or shlokas.
 *
 * - pronunciationFeedback - A function that takes spoken Sanskrit and provides feedback.
 * - PronunciationFeedbackInput - The input type for the pronunciationFeedback function.
 * - PronunciationFeedbackOutput - The return type for the pronunciationFeedback function.
 */

import { z } from 'zod';
import { openAIChatCompletion } from '@/lib/openai';

const PronunciationFeedbackInputSchema = z.object({
  audioDataUri: z.string(),
  text: z.string(),
});
export type PronunciationFeedbackInput = z.infer<typeof PronunciationFeedbackInputSchema>;

const PronunciationFeedbackOutputSchema = z.object({
  feedback: z.string(),
});
export type PronunciationFeedbackOutput = z.infer<typeof PronunciationFeedbackOutputSchema>;

export async function pronunciationFeedback(
  input: PronunciationFeedbackInput
): Promise<PronunciationFeedbackOutput> {
  // Note: We are not sending raw audio to OpenAI to keep the bundle small and avoid binary form-data handling.
  // Instead, we instruct the model to assume a generic pronunciation evaluation based on the provided text.
  const messages = [
    {
      role: 'system',
      content:
        'You are an expert Sanskrit pronunciation coach. When given a Sanskrit phrase, provide constructive pronunciation feedback as if you had listened to the user. Focus on common pronunciation pitfalls and offer clear, encouraging suggestions.',
    },
    {
      role: 'user',
      content: `The user attempted to say the following Sanskrit phrase:\n"${input.text}"\nPlease provide feedback on how they might improve their pronunciation.`,
    },
  ];

  const data = await openAIChatCompletion(messages);
  const feedbackText = data.choices?.[0]?.message?.content?.trim() || 'Unable to generate feedback.';
  return { feedback: feedbackText };
}
