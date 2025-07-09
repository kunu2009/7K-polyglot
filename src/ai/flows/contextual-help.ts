'use server';

import { z } from 'zod';
import { openAIChatCompletion } from '@/lib/openai';

const ContextualHelpInputSchema = z.object({
  text: z.string(),
});
export type ContextualHelpInput = z.infer<typeof ContextualHelpInputSchema>;

const ContextualHelpOutputSchema = z.object({
  grammar: z.string(),
  meanings: z.string(),
  culturalContext: z.string(),
});
export type ContextualHelpOutput = z.infer<typeof ContextualHelpOutputSchema>;

export async function contextualHelp(
  input: ContextualHelpInput
): Promise<ContextualHelpOutput> {
  const messages = [
    {
      role: 'system',
      content:
        'You are a helpful and knowledgeable Sanskrit scholar AI assistant. Respond in JSON with keys "grammar", "meanings", and "culturalContext".',
    },
    {
      role: 'user',
      content: `Provide grammar breakdown, alternative meanings and cultural/philosophical context for the following Sanskrit text:\n"${input.text}"`,
    },
  ];

  const data = await openAIChatCompletion(messages, true);
  try {
    const parsed = JSON.parse(data.choices[0].message.content);
    return parsed as ContextualHelpOutput;
  } catch {
    // Fallback: return raw content in grammar, leave others blank
    return {
      grammar: data.choices[0].message.content,
      meanings: '',
      culturalContext: '',
    };
  }
}
