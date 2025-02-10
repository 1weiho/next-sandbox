'use client';

import React, { createContext, useContext, useState } from 'react';
import type { SandboxFunction } from './with-sandbox';

interface ExecutionRecord {
  output: string;
  status: 'success' | 'error';
  duration: number;
  timestamp: string;
}

interface SandboxContextType {
  functions: SandboxFunction[];
  executionRecords: Record<string, ExecutionRecord[]>;
  executeFunction: (name: string) => Promise<void>;
}

const SandboxContext = createContext<SandboxContextType | undefined>(undefined);

export function SandboxProvider({
  children,
  functions,
}: {
  children: React.ReactNode;
  functions: SandboxFunction[];
}) {
  const [executionRecords, setExecutionRecords] = useState<
    Record<string, ExecutionRecord[]>
  >({});

  const executeFunction = async (name: string) => {
    const func = functions.find((f) => f.name === name);
    if (!func) return;

    const startTime = Date.now();

    try {
      const result = await func.function();
      const endTime = Date.now();

      const record: ExecutionRecord = {
        output: JSON.stringify(result),
        status: 'success',
        duration: endTime - startTime,
        timestamp: new Date().toISOString(),
      };

      setExecutionRecords((prev) => ({
        ...prev,
        [name]: [...(prev[name] || []), record],
      }));
    } catch (error) {
      const endTime = Date.now();

      const record: ExecutionRecord = {
        output: `Error: ${String(error)}`,
        status: 'error',
        duration: endTime - startTime,
        timestamp: new Date().toISOString(),
      };

      setExecutionRecords((prev) => ({
        ...prev,
        [name]: [...(prev[name] || []), record],
      }));
    }
  };

  return (
    <SandboxContext.Provider
      value={{
        functions,
        executionRecords,
        executeFunction,
      }}
    >
      {children}
    </SandboxContext.Provider>
  );
}

export function useSandbox() {
  const context = useContext(SandboxContext);
  if (context === undefined) {
    throw new Error('useSandbox must be used within a SandboxProvider');
  }
  return context;
}
