'use client';

import { Drawer } from 'vaul';
import React from 'react';
import { useSandbox } from './sandbox-context';
import LoaderIcon from './icons/loader-icon';
import PlayIcon from './icons/play-icon';

interface LogDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  functionName: string | null;
}

export default function LogDrawer({
  open,
  onOpenChange,
  functionName,
}: LogDrawerProps) {
  const { executionRecords, executeFunction, executing } = useSandbox();
  const isExecuting = executing[functionName] || false;

  const currentRecords = functionName
    ? executionRecords[functionName] || []
    : [];

  return (
    <Drawer.Root direction="right" open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="drawer-overlay" />
        <Drawer.Content className="drawer-content" aria-describedby={undefined}>
          <div className="drawer-inner">
            <div className="drawer-inner-container">
              <div className="drawer-head">
                <Drawer.Title className="drawer-title">
                  {functionName ?? 'No Function Selected'}
                </Drawer.Title>
                <button
                  className="icon-button execute-button"
                  title="Execute"
                  onClick={() => executeFunction(functionName)}
                  disabled={isExecuting}
                  data-executing={isExecuting ? 'true' : 'false'}
                >
                  {isExecuting ? (
                    <LoaderIcon className="icon spinner" />
                  ) : (
                    <PlayIcon className="icon" />
                  )}
                </button>
              </div>

              <div className="logs-container">
                {currentRecords.length === 0 ? (
                  <p className="no-logs">No logs</p>
                ) : (
                  [...currentRecords].reverse().map((record, idx) => (
                    <div key={idx} className="log-item">
                      <pre className="log-content">{record.output}</pre>
                      <div className="log-meta">
                        <p className="log-time">
                          {new Date(record.timestamp).toLocaleTimeString() ??
                            'Just'}
                        </p>
                        <div className="log-meta-end">
                          <p className="log-duration">
                            Duration: {record.duration}ms
                          </p>
                          <p
                            className={`log-status ${
                              record.status === 'success' ? 'success' : 'fail'
                            }`}
                          >
                            {record.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
