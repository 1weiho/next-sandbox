import React from 'react';
import { SandboxUI } from './sandbox-ui';

interface SandboxServerProps {
  enable?: boolean;
  beforeRender?: () => Promise<any>;
}

export async function SandboxServer({
  enable,
  beforeRender,
}: SandboxServerProps) {
  if (!enable) {
    const { notFound } = await import('next/navigation');
    notFound();
  }

  if (beforeRender) {
    await beforeRender();
  }

  return <SandboxUI />;
}
