// @ts-ignore
import { auth } from '@clerk/nextjs';
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

export async function GET(
  _: Request,
  { params }: { params: { id: string } },
) {
  try {
    const product = mockProducts.find(p => p.id === params.id);
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 },
      );
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { userId } = auth();
  // Check if user is authenticated
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const productData = await request.json();
    // In a real application, you would update the product in your database
    const updatedProduct = {
      id: params.id,
      ...productData,
    };
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  const { userId } = auth();
  console.warn(params);
  // Check if user is authenticated
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // In a real application, you would delete the product from your database
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 },
    );
  }
}
