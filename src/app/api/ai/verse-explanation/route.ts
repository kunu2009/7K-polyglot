import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { verse, feedback } = await request.json();

    if (!verse) {
      return NextResponse.json(
        { error: 'Missing required field: verse' },
        { status: 400 }
      );
    }

    // Mock response for verse explanation
    const mockExplanation = `Here's an explanation of the Sanskrit verse:

"${verse}"

This verse contains deep spiritual and philosophical meaning. In production, this would be replaced with an AI-generated explanation that includes:

- Word-by-word translation
- Grammatical analysis
- Cultural and spiritual context
- Modern interpretation

${feedback ? `Additional feedback: ${feedback}` : ''}`;

    return NextResponse.json({
      explanation: mockExplanation,
      success: true
    });

  } catch (error) {
    console.error('Verse explanation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}