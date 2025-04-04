# Next Sandbox

Next Sandbox is a lightweight package for testing and monitoring server actions in your Next.js application. It provides a simple UI to execute actions, view logs, and measure execution times.

## Features

- **Execute Actions**: Run server actions directly from the UI.
- **View Logs & Metrics**: Monitor execution status, logs, and performance metrics (AVG, P75, P95).

## Installation

```bash
pnpm i next-sandbox
```

## Usage

Create a dedicated route for sandbox usage and directly export `withSandbox` in `page.tsx`:

`app/sandbox/page.tsx`

```tsx
import { withSandbox } from 'next-sandbox';
import { seedPosts } from './seed-posts';

export default withSandbox({
  functions: [
    {
      name: 'Seed Posts',
      function: seedPosts,
    },
  ],
});
```

## Documentation

Find the full API reference and examples in the [documentation](https://next-sandbox.1wei.dev/docs).
