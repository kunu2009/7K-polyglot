import { NextRequest, NextResponse } from 'next/server';

// Simplified handler for deployment
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Genkit API endpoint' });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: 'Genkit API endpoint' });
}
