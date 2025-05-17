import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Mock database for demonstration
const mockProducts = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is product 1',
    price: 99.99,
    imageUrl: 'https://example.com/product1.jpg',
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is product 2',
    price: 149.99,
    imageUrl: 'https://example.com/product2.jpg',
  },
];

export async function GET() {
  try {
    return NextResponse.json(mockProducts);
  } catch (error: unknown) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const productData = await request.json();
    // In a real application, you would save the product to your database
    const newProduct = {
      id: Date.now().toString(), // Generate a simple ID
      ...productData,
    };

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 },
    );
  }
}
