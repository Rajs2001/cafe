# Next.js Boilerplate with Separate Backend. for cafecruiser
hello

<>
This is a production-ready Next.js boilerplate configured to work with a separate backend API. It provides a robust, modular API service layer using Axios for data fetching.

## Features

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 19
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
- 📊 Analytics with PostHog
- 🎁 Automatic changelog generation with Semantic Release
- 💡 Absolute Imports using '@' prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and Extensions
- 🤖 SEO metadata, JSON-LD and Open Graph tags
- 🗺️ Sitemap.xml and robots.txt

## Using the API Services

### Server Components Example

```jsx
import { productService, userService } from '@/services/api';

async function ProductPage() {
  const products = await productService.getProducts({
    category: 'Electronics',
    page: 1,
    limit: 10,
  });

  return <div>{/* Render products */}</div>;
}
```

### Client Components Example

```jsx
'use client';

import { useApi, useMutation } from '@/hooks/useApi';

function ProfileComponent() {
  const { data, loading, error, refetch } = useApi(() =>
    userService.getCurrentUser(),
  );

  const { mutate, loading: updating } = useMutation(
    data => userService.updateProfile(data),
    {
      onSuccess: () => {
        refetch();
      },
    },
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <h1>
        Welcome
        {data?.name}
      </h1>
      <button onClick={() => mutate({ name: 'New Name' })}>
        Update Profile
      </button>
    </div>
  );
}
```

## Configuration

Set up your API connection in the `.env.local` file:

```ini
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NEXT_PUBLIC_API_TIMEOUT=30000
NEXT_PUBLIC_API_ENABLE_MOCK=true  # Set to false in production
```

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy environment variables: `cp .env.example .env.local`
4. Start development server: `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
