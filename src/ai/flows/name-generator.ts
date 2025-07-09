'use server';

import { z } from 'zod';
import { openAIChatCompletion } from '@/lib/openai';

const GenerateSanskritNameInputSchema = z.object({
  userName: z.string().optional(),
  traits: z.string(),
});
export type GenerateSanskritNameInput = z.infer<typeof GenerateSanskritNameInputSchema>;

type NameSuggestion = {
  sanskritName: string;
  transliteration: string;
  meaning: string;
};

const GenerateSanskritNameOutputSchema = z.object({
  names: z.array(
    z.object({
      sanskritName: z.string(),
      transliteration: z.string(),
      meaning: z.string(),
    })
  ),
});
export type GenerateSanskritNameOutput = z.infer<typeof GenerateSanskritNameOutputSchema>;

export async function generateSanskritName(
  input: GenerateSanskritNameInput
): Promise<GenerateSanskritNameOutput> {
  const messages = [
    {
      role: 'system',
      content:
        'You are a Sanskrit scholar with expertise in etymology and naming conventions. Respond in JSON with an array "names" containing 3-5 objects each having sanskritName, transliteration, and meaning.',
    },
    {
      role: 'user',
      content: `User name: ${input.userName ?? 'N/A'}\nDesired traits: ${input.traits}`,
    },
  ];

  const data = await openAIChatCompletion(messages, true);
  try {
    const parsed = JSON.parse(data.choices[0].message.content);
    return parsed as GenerateSanskritNameOutput;
  } catch {
    return {
      names: [],
    };
  }
}
