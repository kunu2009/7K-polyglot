'use server';

import { z } from 'zod';
import { openAIChatCompletion } from '@/lib/openai';

const VerseExplanationFeedbackInputSchema = z.object({
  verse: z.string(),
  userExplanation: z.string(),
});
export type VerseExplanationFeedbackInput = z.infer<typeof VerseExplanationFeedbackInputSchema>;

const VerseExplanationFeedbackOutputSchema = z.object({
  feedback: z.string(),
  coverageScore: z.number(),
});
export type VerseExplanationFeedbackOutput = z.infer<typeof VerseExplanationFeedbackOutputSchema>;

export async function verseExplanationFeedback(
  input: VerseExplanationFeedbackInput
): Promise<VerseExplanationFeedbackOutput> {
  const messages = [
    {
      role: 'system',
      content:
        'You are a friendly and encouraging Sanskrit study partner AI. Respond in JSON with keys "feedback" and "coverageScore" (0-100).',
    },
    {
      role: 'user',
      content: `Original verse:\n${input.verse}\n\nStudent explanation:\n${input.userExplanation}\n\nPlease critique the explanation, then give an overall coverage score.`,
    },
  ];

  const data = await openAIChatCompletion(messages, true);
  try {
    const parsed = JSON.parse(data.choices[0].message.content);
    return parsed as VerseExplanationFeedbackOutput;
  } catch {
    return {
      feedback: data.choices[0].message.content,
      coverageScore: 50,
    };
  }
}
