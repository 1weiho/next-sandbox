'use client';

import React, { createContext, useContext, useState } from 'react';
import type { SandboxFunction } from './with-sandbox';

interface SandboxContextType {
  functions: SandboxFunction[];
  executionStatus: Record<string, string>;
  executionDurations: Record<string, number[]>;
  logs: Record<string, string[]>;
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
  const [executionStatus, setExecutionStatus] = useState<
    Record<string, string>
  >({});
  const [executionDurations, setExecutionDurations] = useState<
    Record<string, number[]>
  >({});
  const [logs, setLogs] = useState<Record<string, string[]>>({});

  const executeFunction = async (name: string) => {
    const func = functions.find((f) => f.name === name);
    if (!func) return;

    setExecutionStatus((prev) => ({ ...prev, [name]: 'running' }));
    const startTime = Date.now();

    try {
      const result = await func.function();
      setExecutionStatus((prev) => ({ ...prev, [name]: 'success' }));
      setLogs((prev) => ({
        ...prev,
        [name]: [...(prev[name] || []), JSON.stringify(result)],
      }));
    } catch (error) {
      setExecutionStatus((prev) => ({ ...prev, [name]: 'error' }));
      setLogs((prev) => ({
        ...prev,
        [name]: [...(prev[name] || []), `Error: ${error}`],
      }));
    }

    const endTime = Date.now();
    const duration = endTime - startTime;
    setExecutionDurations((prev) => {
      const prevDurations = prev[name] || [];
      return { ...prev, [name]: [...prevDurations, duration] };
    });
  };

  return (
    <SandboxContext.Provider
      value={{
        functions,
        executionStatus,
        executionDurations,
        logs,
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
