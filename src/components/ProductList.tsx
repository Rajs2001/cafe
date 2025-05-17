'use client';

import type { Product, ProductFilter, ProductListResponse } from '@/services/api/productService';
import { API_CONFIG } from '@/services/api/apiClient';
import { productService } from '@/services/api/productService';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type ProductListProps = {
  initialFilters?: ProductFilter;
};

export const ProductList = ({ initialFilters }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<ProductFilter>({
    category: initialFilters?.category || '',
    minPrice: initialFilters?.minPrice || 0,
    maxPrice: initialFilters?.maxPrice || 1000,
  });
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // If we're in development with mocks enabled, use mock data
        if (API_CONFIG.ENABLE_MOCK) {
          // Mock response for development
          const mockData: ProductListResponse = {
            items: Array.from({ length: 6 }).map((_, index) => ({
              id: `${index + 1}`,
              name: `Product ${index + 1}`,
              description: `This is product ${index + 1}`,
              price: 99.99 + index * 10,
              imageUrl: `https://picsum.photos/seed/${index + 1}/400/300`,
              category: index % 2 === 0 ? 'Electronics' : 'Clothing',
              inStock: true,
              rating: 4 + (index % 2),
            })),
            total: 6,
            page: 1,
            limit: 10,
            totalPages: 1,
          };

          setProducts(mockData.items);
          setPagination({
            total: mockData.total,
            page: mockData.page,
            limit: mockData.limit,
            totalPages: mockData.totalPages,
          });
        } else {
          // Real API call
          const response = await productService.getProducts(filter);
          setProducts(response.items);
          setPagination({
            total: response.total,
            page: response.page,
            limit: response.limit,
            totalPages: response.totalPages,
          });
        }

        setError(null);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filter]);

  const handlePageChange = (newPage: number) => {
    setFilter(prev => ({ ...prev, page: newPage }));
  };

  if (loading) {
    return <div className="text-center py-4">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  if (products.length === 0) {
    return <div className="text-center py-4">No products found.</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {product.imageUrl && (
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
            )}
            <h3 className="text-lg font-semibold">{product.name}</h3>
            {product.category && (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {product.category}
              </span>
            )}
            <p className="text-gray-600 mt-1">{product.description}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-blue-600 font-bold">
                $
                {product.price.toFixed(2)}
              </p>
              {product.rating && (
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{product.rating}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Simple pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="inline-flex">
            <button
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              type="button"
              className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <div className="px-4 py-1 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700">
              {pagination.page}
              {' '}
              of
              {pagination.totalPages}
            </div>
            <button
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
              type="button"
              className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};
