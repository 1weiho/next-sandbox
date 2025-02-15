import React from 'react';
import { SandboxUI } from './sandbox-ui';

interface SandboxServerProps {
  enable?: boolean;
}

export async function SandboxServer({ enable }: SandboxServerProps) {
  if (!enable) {
    const { notFound } = await import('next/navigation');
    notFound();
  }

  return <SandboxUI />;
}
