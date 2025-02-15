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

## API

### `withSandbox(config: SandboxConfig)`

- **functions**: An array of server actions with a unique `name` and an asynchronous `function`.
- **enable** (optional): Boolean flag to enable/disable the sandbox UI (default is `true`). When set to `true`, it will call `notFound()` from `next/navigation`, directly responding with a 404 error. A practical use case is to add an `enable` check inside `withSandbox` to determine if the environment is in production, ensuring the sandbox UI is only available in development or staging environments. For example:

```tsx
import { withSandbox } from 'next-sandbox';

export default withSandbox({
  enable: process.env.NODE_ENV !== 'production',
  // ...
});
```

## Declaring Server Actions

There are two ways to declare your server actions:

1. **Define the function above `withSandbox`**: Declare the function within the same file as `withSandbox`, ensuring that you include `'use server'` at the beginning of the function to indicate that it is a server action. Then, reference this function inside `withSandbox`.

2. **Import the server action from another file**: Store your server actions in separate files where `'use server'` is declared at the top of the file. Then, import and reference these functions inside `withSandbox`, as shown in the example at the top of this document.

⚠️ **Do not declare server actions inside an inline function within `withSandbox` and add `'use server'` inside it. This will not work correctly.**
