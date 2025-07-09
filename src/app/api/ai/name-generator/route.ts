import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { meaning, gender = 'neutral' } = await request.json();

    if (!meaning) {
      return NextResponse.json(
        { error: 'Missing required field: meaning' },
        { status: 400 }
      );
    }

    // Mock response for name generation
    const mockNames = [
      'Aarav (peaceful)',
      'Diya (light)',
      'Arjun (bright, white)',
      'Priya (beloved)',
      'Ved (knowledge)',
      'Anaya (caring)'
    ];

    const mockResponse = {
      names: mockNames,
      meaning: meaning,
      gender: gender,
      message: `Generated Sanskrit names meaning "${meaning}". In production, this would use AI to generate culturally appropriate names.`,
      success: true
    };

    return NextResponse.json(mockResponse);

  } catch (error) {
    console.error('Name generator error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}