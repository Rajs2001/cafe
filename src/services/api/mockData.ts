import { Product, ProductListResponse } from './productService';
import { User, UserLoginResponse } from './userService';
import { CounterData } from './counterService';

/**
 * Mock data for development and testing
 */
export const mockData = {
  /**
   * Mock products data
   */
  products: {
    getProducts(): ProductListResponse {
      return {
        items: Array.from({ length: 6 }).map((_, index) => ({
          id: `${index + 1}`,
          name: `Product ${index + 1}`,
          description: `This is product ${index + 1}`,
          price: 99.99 + index * 10,
          imageUrl: `https://picsum.photos/seed/${index + 1}/400/300`,
          category: index % 2 === 0 ? 'Electronics' : 'Clothing',
          inStock: true,
          rating: 4 + (index % 2),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        })),
        total: 6,
        page: 1,
        limit: 10,
        totalPages: 1,
      };
    },

    getProductById(id: string): Product {
      const index = Number.parseInt(id, 10) - 1;
      return {
        id,
        name: `Product ${id}`,
        description: `This is product ${id}`,
        price: 99.99 + index * 10,
        imageUrl: `https://picsum.photos/seed/${id}/400/300`,
        category: index % 2 === 0 ? 'Electronics' : 'Clothing',
        inStock: true,
        rating: 4 + (index % 2),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    },

    getCategories(): string[] {
      return ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'];
    },
  },

  /**
   * Mock users data
   */
  users: {
    getCurrentUser(): User {
      return {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://i.pravatar.cc/150?u=john',
        role: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    },

    login(): UserLoginResponse {
      return {
        user: {
          id: '1',
          name: 'John Doe',
          email: 'john.doe@example.com',
          avatar: 'https://i.pravatar.cc/150?u=john',
          role: 'user',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        token: 'mock-jwt-token',
        refreshToken: 'mock-refresh-token',
      };
    },
  },

  /**
   * Mock counter data
   */
  counter: {
    count: 42,

    getCount(): CounterData {
      return { count: this.count };
    },

    increment(value: number): CounterData {
      this.count += value;
      return { count: this.count };
    },
  },
};
