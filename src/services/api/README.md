# API Service Layer

This directory contains the API service layer for the application. It provides a clean, modular, and type-safe way to interact with external APIs.

## Structure

- `apiClient.ts` - Core Axios client with configuration, interceptors, and error handling
- `baseService.ts` - Base service class that all API services extend
- `userService.ts` - Service for user-related API operations
- `productService.ts` - Service for product-related API operations
- `mockService.ts` - Mock service interceptor for development
- `mockData.ts` - Mock data for development and testing

## Features

- **Type-safe API calls** - All API calls are fully typed with TypeScript
- **Centralized error handling** - Common error handling logic in one place
- **Request/response interceptors** - Authentication, logging, and error handling
- **Automatic retries** - Retry failed requests with exponential backoff
- **Token refresh** - Automatic token refresh for expired authentication
- **Request caching** - Cache GET requests to improve performance
- **Mock API** - Development mode with mock data for frontend development without a backend
- **Modular architecture** - Easy to add new services and endpoints

## Usage

### Basic Usage

```typescript
import { userService } from '@/services/api';

// In a React component
const fetchUserProfile = async () => {
  try {
    const user = await userService.getCurrentUser();
    // Use the user data
  } catch (error) {
    // Handle error
  }
};
```

### With Filters and Pagination

```typescript
import { productService } from '@/services/api';

// Get products with filters
const fetchProducts = async () => {
  try {
    const response = await productService.getProducts({
      category: 'Electronics',
      minPrice: 100,
      maxPrice: 500,
      page: 1,
      limit: 10,
    });
    
    // Use the products data
    const { items, total, page, totalPages } = response;
  } catch (error) {
    // Handle error
  }
};
```

## Configuration

The API service layer can be configured through environment variables:

- `NEXT_PUBLIC_API_BASE_URL` - Base URL for API requests
- `NEXT_PUBLIC_API_TIMEOUT` - Timeout for API requests in milliseconds
- `NEXT_PUBLIC_API_ENABLE_MOCK` - Enable mock API in development mode

## Adding a New Service

1. Create a new file in the `services/api` directory (e.g., `orderService.ts`)
2. Define your interfaces for the service
3. Create a class that extends `BaseService`
4. Implement your API methods
5. Export the service and add it to `index.ts`

Example:

```typescript
import { BaseService } from './baseService';

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export class OrderService extends BaseService {
  protected endpoint = '/orders';

  async getOrders() {
    return this.get<Order[]>();
  }

  async getOrderById(id: string) {
    return this.get<Order>(id);
  }

  async createOrder(orderData: Omit<Order, 'id' | 'createdAt'>) {
    return this.post<Order>('', orderData);
  }
}

export const orderService = new OrderService();
```

Then add it to `index.ts`:

```typescript
export * from './orderService';
```

## Mock Data

To add mock data for a new service:

1. Add your mock data to `mockData.ts`
2. Update the mock interceptor in `mockService.ts` to handle the new endpoints

This allows frontend development to proceed without waiting for the backend to be ready.
