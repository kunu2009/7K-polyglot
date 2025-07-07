import { nextHandler } from '@genkit-ai/next';

// Import all the flows that you want to expose in production.
import '@/ai/flows/pronunciation-feedback';
import '@/ai/flows/text-to-speech';
import '@/ai/flows/contextual-help';
import '@/ai/flows/verse-explanation-feedback';
import '@/ai/flows/name-generator';

export const { GET, POST } = nextHandler();
