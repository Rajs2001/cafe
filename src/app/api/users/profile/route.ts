import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const userData = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
    };
    return NextResponse.json(userData);
  } catch (error: unknown) {
    console.error('Failed to fetch user profile:', error);
    return NextResponse.json({ error: 'Failed to fetch user profile' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedUser = await request.json();
    return NextResponse.json(updatedUser);
  } catch (error: unknown) {
    console.error('Failed to update user profile:', error);
    return NextResponse.json({ error: 'Failed to update user profile' }, { status: 500 });
  }
}
