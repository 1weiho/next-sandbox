'use client';

import React from 'react';
import { useSandbox } from './sandbox-context';
import './style.css';

interface SandboxUIProps {
  title?: string;
  description?: string;
}

export function SandboxUI({
  title = 'Sandbox Demo',
  description = 'This page demonstrates the use of withSandbox HOC with server actions.',
}: SandboxUIProps) {
  const {
    functions,
    executionStatus,
    executionDuration,
    logs,
    executeFunction,
  } = useSandbox();

  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="function-grid">
        {functions.map((func) => (
          <div key={func.name} className="function-card">
            <h2 className="function-title">{func.name}</h2>
            <div className="function-content">
              <div className="function-info">
                <p>Status: {executionStatus[func.name] || 'Not executed'}</p>
                <p>
                  Last execution duration:{' '}
                  {executionDuration[func.name]
                    ? `${executionDuration[func.name]}ms`
                    : 'N/A'}
                </p>
              </div>
              <button
                className="execute-button"
                onClick={() => executeFunction(func.name)}
              >
                Execute
              </button>
              <div className="logs-section">
                <h4 className="logs-title">Logs:</h4>
                <pre className="logs-content">
                  {logs[func.name] ? logs[func.name].join('\n') : 'No logs yet'}
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
