export async function POST(request: Request) {
  try {
    const { gender, meaning, style } = await request.json();

    // Mock Sanskrit names database (in production, use actual name generation logic)
    const mockNames = {
      male: [
        { name: 'Arjuna', meaning: 'Bright, shining one', origin: 'Sanskrit' },
        { name: 'Krishna', meaning: 'Dark, black', origin: 'Sanskrit' },
        { name: 'Rama', meaning: 'Pleasing, charming', origin: 'Sanskrit' }
      ],
      female: [
        { name: 'Sita', meaning: 'Furrow, goddess of agriculture', origin: 'Sanskrit' },
        { name: 'Lakshmi', meaning: 'Fortune, prosperity', origin: 'Sanskrit' },
        { name: 'Saraswati', meaning: 'Flowing water, goddess of knowledge', origin: 'Sanskrit' }
      ]
    };

    const selectedGender = gender || 'male';
    const names = mockNames[selectedGender as keyof typeof mockNames] || mockNames.male;
    const randomName = names[Math.floor(Math.random() * names.length)];

    return Response.json({
      ...randomName,
      success: true,
      requestedMeaning: meaning,
      requestedStyle: style
    });
  } catch (error) {
    console.error('Name generator error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}