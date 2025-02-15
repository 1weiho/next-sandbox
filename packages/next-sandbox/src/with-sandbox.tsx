import React from 'react';
import { SandboxProvider } from './sandbox-context';
import { SandboxServer } from './sandbox-server';

export interface SandboxFunction {
  name: string;
  function: () => Promise<any>;
}

export interface SandboxConfig {
  functions: SandboxFunction[];
  enable?: boolean;
}

export function withSandbox({ functions, enable = true }: SandboxConfig) {
  return function SandboxWrapper() {
    return (
      <SandboxProvider functions={functions}>
        <SandboxServer enable={enable} />
      </SandboxProvider>
    );
  };
}
