import { BaseService } from './baseService';

// Types
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category?: string;
  inStock?: boolean;
  rating?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ProductFilter = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
  sortBy?: 'price' | 'name' | 'rating' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
};

export type ProductListResponse = {
  items: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

/**
 * Service for product-related API operations
 */
export class ProductService extends BaseService {
  protected endpoint = '/products';

  /**
   * Get all products with optional filtering
   */
  async getProducts(filters?: ProductFilter): Promise<ProductListResponse> {
    return this.get<ProductListResponse>('', { params: filters });
  }

  /**
   * Get product by ID
   */
  async getProductById(id: string): Promise<Product> {
    return this.get<Product>(id);
  }

  /**
   * Create new product
   */
  async createProduct(productData: Omit<Product, 'id'>): Promise<Product> {
    return this.post<Product>('', productData);
  }

  /**
   * Update product
   */
  async updateProduct(id: string, productData: Partial<Product>): Promise<Product> {
    return this.put<Product>(id, productData);
  }

  /**
   * Delete product
   */
  async deleteProduct(id: string): Promise<void> {
    return this.delete<void>(id);
  }

  /**
   * Get product categories
   */
  async getCategories(): Promise<string[]> {
    return this.get<string[]>('categories');
  }
}

// Create a singleton instance
export const productService = new ProductService();
