'use client';

import type { ProductFilter } from '@/services/api';
import { useApi } from '@/hooks/useApi';
import { productService } from '@/services/api';
import { formatCurrency } from '@/utils/Helpers';
import { useState } from 'react';

type ProductListClientProps = {
  initialFilters?: ProductFilter;
};

export const ProductListClient = ({ initialFilters = {} }: ProductListClientProps) => {
  const [filters, setFilters] = useState<ProductFilter>(initialFilters);

  const { data, loading, error, refetch } = useApi(
    () => productService.getProducts(filters),
    {
      deps: [filters],
    },
  );

  const products = data?.items || [];
  const pagination = data
    ? {
        total: data.total,
        page: data.page,
        limit: data.limit,
        totalPages: data.totalPages,
      }
    : {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 1,
      };

  const handleFilterChange = (newFilters: Partial<ProductFilter>) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 })); // Reset to page 1 when filters change
  };

  const handlePageChange = (newPage: number) => {
    setFilters(prev => ({ ...prev, page: newPage }));
  };

  if (loading) {
    return <div className="text-center py-4">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-4 text-red-500">
        Failed to load products. Please try again later.
        <button
          onClick={() => refetch()}
          className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return <div className="text-center py-4">No products found.</div>;
  }

  return (
    <div>
      {/* Simple filter controls */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex flex-wrap gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={filters.category || ''}
              onChange={e => handleFilterChange({ category: e.target.value || undefined })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
            </select>
          </div>

          <div>
            <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
              Sort By
            </label>
            <select
              id="sortBy"
              value={filters.sortBy || ''}
              onChange={e => handleFilterChange({
                sortBy: e.target.value as any || undefined,
              })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Default</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div>
            <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700 mb-1">
              Order
            </label>
            <select
              id="sortOrder"
              value={filters.sortOrder || ''}
              onChange={e => handleFilterChange({
                sortOrder: e.target.value as any || undefined,
              })}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
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
              <p className="text-blue-600 font-bold">{formatCurrency(product.price)}</p>
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

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="inline-flex">
            <button
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
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
