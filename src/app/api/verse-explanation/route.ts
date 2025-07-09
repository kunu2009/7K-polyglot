export async function POST(request: Request) {
  try {
    const { verse, userLevel } = await request.json();
    
    if (!verse) {
      return Response.json({ error: 'Verse is required' }, { status: 400 });
    }

    // Mock response for verse explanation
    const mockResponse = {
      explanation: `This verse teaches us about the principles of dharma and righteous living. ${userLevel ? `Explanation tailored for ${userLevel} level.` : ''}`,
      keyTerms: [
        { term: 'dharma', definition: 'Righteous duty or way of life' },
        { term: 'karma', definition: 'Action and its consequences' }
      ],
      moralLesson: 'The importance of following one\'s duty with dedication',
      difficulty: userLevel || 'intermediate',
      success: true,
      coverageScore: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
      feedback: 'Good explanation! You captured the main themes well. Consider exploring the deeper philosophical implications.'
    };

    return Response.json(mockResponse);
  } catch (error) {
    console.error('Verse explanation error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}