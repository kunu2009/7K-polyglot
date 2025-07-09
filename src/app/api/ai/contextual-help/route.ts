import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { context, question } = await request.json();

    if (!context || !question) {
      return NextResponse.json(
        { error: 'Missing required fields: context and question' },
        { status: 400 }
      );
    }

    // Mock response for contextual help
    const mockHelp = `Based on the context about "${context}", here's some helpful information:

${question}

This is a placeholder response. In production, you would integrate with an AI service like OpenAI to provide contextual help based on the Sanskrit learning context.`;

    return NextResponse.json({
      help: mockHelp,
      grammar: "This section would contain detailed grammatical analysis of the selected text, including parts of speech, verb conjugations, and sentence structure.",
      meanings: "Here you would find multiple meanings and interpretations of the selected Sanskrit text, including literal translations and deeper philosophical meanings.",
      culturalContext: "This section provides historical and cultural background information related to the selected text, including its significance in Sanskrit literature and philosophy.",
      success: true
    });

  } catch (error) {
    console.error('Contextual help error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}