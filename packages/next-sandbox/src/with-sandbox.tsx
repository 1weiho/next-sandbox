import React from 'react';
import { SandboxProvider } from './sandbox-context';
import { SandboxUI } from './sandbox-ui';

export interface SandboxFunction {
  name: string;
  function: () => Promise<any>;
}

export interface SandboxConfig {
  functions: SandboxFunction[];
  title?: string;
  description?: string;
}

export function withSandbox(config: SandboxConfig) {
  return function SandboxWrapper() {
    return (
      <SandboxProvider functions={config.functions}>
        <SandboxUI title={config.title} description={config.description} />
      </SandboxProvider>
    );
  };
}
