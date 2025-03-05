import React from 'react';
import { SandboxUI } from './sandbox-ui';

interface SandboxServerProps {
  enable?: boolean;
  middleware?: () => Promise<any>;
}

export async function SandboxServer({
  enable,
  middleware,
}: SandboxServerProps) {
  if (!enable) {
    const { notFound } = await import('next/navigation');
    notFound();
  }

  if (middleware) {
    await middleware();
  }

  return <SandboxUI />;
}
