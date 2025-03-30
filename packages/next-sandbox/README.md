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
- **enable** (optional): Boolean flag to enable/disable the sandbox route (default is `true`). When set to `false`, it will call `notFound()` from `next/navigation`, directly responding with a 404 error. A practical use case is to add an `enable` check inside `withSandbox` to determine if the environment is in production, ensuring the sandbox route is only available in development or staging environments. For example:

```tsx
import { withSandbox } from 'next-sandbox';

export default withSandbox({
  enable: process.env.NODE_ENV !== 'production',
  // ...
});
```

- **beforeRender** (optional): An asynchronous function that runs before rendering the sandbox UI. This function operates entirely on the server, similar to a Server Component. It is useful for authentication, logging, or other preprocessing tasks. If provided, it will be executed before rendering the sandbox UI, ensuring that necessary checks and preparations are completed in a server-side context. A common use case is to restrict access to specific users, such as administrators:

```tsx
import { withSandbox } from 'next-sandbox';
import { auth } from '@/lib/auth';
import { forbidden } from 'next/navigation';

export default withSandbox({
  beforeRender: async () => {
    const user = await auth();

    if (user.role !== 'admin') {
      forbidden();
    }
  },
  // ...
});
```

## Declaring Server Actions

There are two ways to declare your server actions:

1. **Define the function above `withSandbox`**: Declare the function within the same file as `withSandbox`, ensuring that you include `'use server'` at the beginning of the function to indicate that it is a server action. Then, reference this function inside `withSandbox`.

2. **Import the server action from another file**: Store your server actions in separate files where `'use server'` is declared at the top of the file. Then, import and reference these functions inside `withSandbox`, as shown in the example at the top of this document.

⚠️ Do not declare server actions inside an inline function within `withSandbox` and add `'use server'` inside it. This will not work correctly.
