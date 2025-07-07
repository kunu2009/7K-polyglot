import { NextRequest, NextResponse } from 'next/server';

// Import all the flows that you want to expose in production.
import '@/ai/flows/pronunciation-feedback';
import '@/ai/flows/text-to-speech';
import '@/ai/flows/contextual-help';
import '@/ai/flows/verse-explanation-feedback';
import '@/ai/flows/name-generator';

// Temporary simple handler to allow build to succeed
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Genkit API endpoint - GET not implemented yet' }, { status: 501 });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: 'Genkit API endpoint - POST not implemented yet' }, { status: 501 });
}
