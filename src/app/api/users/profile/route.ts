import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

export async function GET() {
  const { userId } = auth();
  
  // If not authenticated
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Here you would typically fetch user data from your database
    // This is a mock response
    const userData = {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com',
      // Add other user properties as needed
    };

    return NextResponse.json(userData);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user profile' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const { userId } = auth();
  
  // If not authenticated
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const userData = await request.json();
    
    // Here you would typically update user data in your database
    // This is a mock response
    const updatedUser = {
      id: userId,
      ...userData,
      // You might want to add validation and sanitization here
    };

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json(
      { error: 'Failed to update user profile' },
      { status: 500 }
    );
  }
}
