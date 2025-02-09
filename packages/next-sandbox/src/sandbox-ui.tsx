'use client';

import React from 'react';
import { useSandbox } from './sandbox-context';
import './style.css';
import PlayIcon from './icons/play-icon';
import LogIcon from './icons/log-icon';
import LogDrawer from './log-drawer';

function calculateMetrics(durations) {
  const sorted = [...durations].sort((a, b) => a - b);

  const sum = durations.reduce((acc, cur) => acc + cur, 0);
  const avg = sum / durations.length;

  const p75Index = Math.ceil(0.75 * sorted.length) - 1;
  const p95Index = Math.ceil(0.95 * sorted.length) - 1;
  const p75 = sorted[p75Index];
  const p95 = sorted[p95Index];

  return { avg, p75, p95 };
}

export function SandboxUI() {
  const { functions, executionStatus, executionDurations, executeFunction } =
    useSandbox();
  const [openLogDrawer, setOpenLogDrawer] = React.useState(false);

  return (
    <>
      <LogDrawer open={openLogDrawer} onOpenChange={setOpenLogDrawer} />

      <div className="sandbox-container">
        <h1 className="sandbox-title">next-sandbox</h1>
        <div className="functions-wrapper">
          <div className="functions-header">
            <span className="functions-label">Function</span>
            <span className="functions-count">{functions.length}</span>
          </div>

          {functions.map((func, index) => {
            const durations = executionDurations[func.name] || [];

            const metrics =
              durations.length > 0 ? calculateMetrics(durations) : null;

            const latest =
              durations.length > 0 ? durations[durations.length - 1] : null;

            return (
              <div className="function-card" key={`${func.name}-${index}`}>
                <div className="function-left">
                  <h2 className="function-name">{func.name}</h2>
                  <span className="function-pill success">
                    {executionStatus[func.name] || 'Not executed'}
                  </span>
                </div>
                <div className="function-right">
                  <div className="function-metrics">
                    <div className="metric">
                      <span className="metric-label">AVG</span>
                      <span className="metric-value">
                        {metrics ? `${Math.round(metrics.avg)}ms` : 'N/A'}
                      </span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">P75</span>
                      <span className="metric-value">
                        {metrics ? `${metrics.p75}ms` : 'N/A'}
                      </span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">P95</span>
                      <span className="metric-value">
                        {metrics ? `${metrics.p95}ms` : 'N/A'}
                      </span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Latest</span>
                      <span className="metric-value">
                        {latest !== null ? `${latest}ms` : 'N/A'}
                      </span>
                    </div>
                  </div>
                  <div className="function-actions">
                    <button
                      className="icon-button"
                      title="View logs"
                      onClick={() => setOpenLogDrawer(true)}
                    >
                      <LogIcon className="icon" />
                    </button>
                    <button
                      className="icon-button"
                      title="Execute"
                      onClick={() => executeFunction(func.name)}
                    >
                      <PlayIcon className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
