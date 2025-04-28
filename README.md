# Next.js Boilerplate with Separate Backend

This is a production-ready Next.js boilerplate configured to work with a separate backend API. It provides a robust, modular API service layer using Axios for data fetching.

## Features

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 19
- 🔒 Authentication with [Clerk](https://clerk.com)
- 🌐 Multi-language (i18n) with [next-intl](https://next-intl-docs.vercel.app/)
- 🔄 Robust API service layer with Axios
- 🧩 Modular architecture for API services
- 🔄 Request caching and optimization
- 🔁 Automatic retry for failed requests
- 🔑 Authentication token management
- 🧪 Mock API for development
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Vitest and React Testing Library
- 🧪 Integration and E2E Testing with Playwright
- 👷 Run tests on pull request with GitHub Actions
- 🎉 Storybook for UI development
- 🚨 Error Monitoring with [Sentry](https://sentry.io)
- 📝 Logging with Pino.js
- 🔐 Security and bot protection ([Arcjet](https://arcjet.com))
- 📊 Analytics with PostHog
- 🎁 Automatic changelog generation with Semantic Release
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and Extensions
- 🤖 SEO metadata, JSON-LD and Open Graph tags
- 🗺️ Sitemap.xml and robots.txt

## API Service Layer

This boilerplate includes a robust API service layer for interacting with your backend:

- **Type-safe API calls** - All API calls are fully typed with TypeScript
- **Centralized error handling** - Common error handling logic in one place
- **Request/response interceptors** - Authentication, logging, and error handling
- **Automatic retries** - Retry failed requests with exponential backoff
- **Token refresh** - Automatic token refresh for expired authentication
- **Request caching** - Cache GET requests to improve performance
- **Mock API** - Development mode with mock data for frontend development without a backend
- **Modular architecture** - Easy to add new services and endpoints
- **Error boundaries** - React error boundaries for handling API errors
- **API proxy** - Server-side API proxy for secure API calls

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-boilerplate-separate-backend.git my-project
cd my-project
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Copy the `.env.example` file to `.env.local` and update the variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Configuration

Configure your API connection in the `.env.local` file:

```
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NEXT_PUBLIC_API_TIMEOUT=30000
NEXT_PUBLIC_API_ENABLE_MOCK=true  # Set to false in production
```

## Using the API Services

The API service layer provides a clean, modular way to interact with your backend:

### Server Components

```typescript
import { userService, productService } from '@/services/api';

// Get the current user
const user = await userService.getCurrentUser();

// Get products with filters
const products = await productService.getProducts({
  category: 'Electronics',
  minPrice: 100,
  maxPrice: 500,
  page: 1,
  limit: 10,
});
```

### Client Components with Hooks

```typescript
import { useApi, useMutation } from '@/hooks/useApi';
import { userService, productService } from '@/services/api';

// Data fetching with useApi hook
const { data, loading, error, refetch } = useApi(
  () => productService.getProducts({ category: 'Electronics' }),
  { deps: [category] }
);

// Mutations with useMutation hook
const { mutate, loading: updating } = useMutation(
  (data) => userService.updateProfile(data),
  {
    onSuccess: () => {
      toast.success('Profile updated!');
      refetch(); // Refetch data after update
    }
  }
);

// Then call it with:
mutate({ name: 'New Name' });
```

## Adding a New API Service

1. Create a new file in `src/services/api` (e.g., `orderService.ts`)
2. Extend the `BaseService` class
3. Implement your API methods
4. Export the service from `index.ts`

Example:

```typescript
import { BaseService } from './baseService';

export interface Order {
  id: string;
  // Define your type
}

export class OrderService extends BaseService {
  protected endpoint = '/orders';

  async getOrders() {
    return this.get<Order[]>();
  }

  async getOrderById(id: string) {
    return this.get<Order>(id);
  }
}

export const orderService = new OrderService();
```

## Mock API for Development

The boilerplate includes a mock API system for development without a backend:

1. Enable mocks in `.env.local`:

```
NEXT_PUBLIC_API_ENABLE_MOCK=true
```

2. Add mock data in `src/services/api/mockData.ts`
3. Update mock handlers in `src/services/api/mockService.ts` if needed

## Error Handling

The API service layer includes comprehensive error handling:

```typescript
import { handleApiError, ApiErrorType } from '@/services/api';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Using the error handler directly
try {
  const data = await userService.getCurrentUser();
} catch (error) {
  const apiError = handleApiError(error);

  if (apiError.type === ApiErrorType.UNAUTHORIZED) {
    // Handle unauthorized error
  } else if (apiError.type === ApiErrorType.NETWORK) {
    // Handle network error
  }
}

// Using the ErrorBoundary component
<ErrorBoundary
  fallback={(error, reset) => (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )}
>
  <MyComponent />
</ErrorBoundary>
```

## API Proxy

The boilerplate includes a server-side API proxy for secure API calls:

```typescript
// Client-side
const data = await fetch('/api/proxy/users/profile');

// Server-side (in Next.js API route)
const response = await fetch(`${process.env.API_BASE_URL}/users/profile`, {
  headers: {
    'Authorization': `Bearer ${process.env.API_KEY}`
  }
});
```

## Deployment

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
