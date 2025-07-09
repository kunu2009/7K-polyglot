// Lightweight AI helper functions to replace Genkit flows

export interface ContextualHelpOutput {
  explanation: string;
  confidence: number;
  sources: string[];
  success: boolean;
  grammar: string;
  meanings: string;
  culturalContext: string;
}

export interface VerseExplanationFeedbackOutput {
  explanation: string;
  keyTerms: Array<{ term: string; definition: string }>;
  moralLesson: string;
  difficulty: string;
  success: boolean;
  coverageScore: number;
  feedback: string;
}

export interface GenerateSanskritNameOutput {
  name: string;
  meaning: string;
  origin: string;
  success: boolean;
  requestedMeaning?: string;
  requestedStyle?: string;
}

export interface PronunciationFeedbackOutput {
  accuracy: number;
  feedback: Array<{
    word: string;
    correct: boolean;
    suggestion: string;
  }>;
  overallFeedback: string;
  improvements: string[];
  success: boolean;
}

export interface TextToSpeechOutput {
  audio: string | null;
  success: boolean;
  message: string;
}

export async function textToSpeech(text: string): Promise<TextToSpeechOutput> {
  try {
    const response = await fetch('/api/text-to-speech', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    
    if (!response.ok) {
      throw new Error('Text-to-speech request failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Text-to-speech error:', error);
    return { audio: null, success: false, message: 'Failed to process text-to-speech' };
  }
}

export async function contextualHelp(query: string, context?: string): Promise<ContextualHelpOutput> {
  try {
    const response = await fetch('/api/contextual-help', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, context }),
    });
    
    if (!response.ok) {
      throw new Error('Contextual help request failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Contextual help error:', error);
    return {
      explanation: 'Unable to provide contextual help at the moment.',
      confidence: 0,
      sources: [],
      success: false,
      grammar: 'Grammar analysis unavailable.',
      meanings: 'Alternative meanings unavailable.',
      culturalContext: 'Cultural context unavailable.'
    };
  }
}

export async function verseExplanationFeedback(verse: string, userLevel?: string): Promise<VerseExplanationFeedbackOutput> {
  try {
    const response = await fetch('/api/verse-explanation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ verse, userLevel }),
    });
    
    if (!response.ok) {
      throw new Error('Verse explanation request failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Verse explanation error:', error);
    return {
      explanation: 'Unable to provide verse explanation at the moment.',
      keyTerms: [],
      moralLesson: '',
      difficulty: 'unknown',
      success: false,
      coverageScore: 0,
      feedback: 'Unable to provide feedback at the moment.'
    };
  }
}

export async function generateSanskritName(gender?: string, meaning?: string, style?: string): Promise<GenerateSanskritNameOutput> {
  try {
    const response = await fetch('/api/name-generator', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gender, meaning, style }),
    });
    
    if (!response.ok) {
      throw new Error('Name generation request failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Name generation error:', error);
    return {
      name: 'Unable to generate name',
      meaning: 'Error occurred',
      origin: 'Error',
      success: false,
      requestedMeaning: meaning,
      requestedStyle: style
    };
  }
}

export async function pronunciationFeedback(audioData: any, targetText: string): Promise<PronunciationFeedbackOutput> {
  try {
    const response = await fetch('/api/pronunciation-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ audioData, targetText }),
    });
    
    if (!response.ok) {
      throw new Error('Pronunciation feedback request failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Pronunciation feedback error:', error);
    return {
      accuracy: 0,
      feedback: [],
      overallFeedback: 'Unable to analyze pronunciation at the moment.',
      improvements: [],
      success: false
    };
  }
}