'use client';

import { Drawer } from 'vaul';
import React from 'react';
import './drawer.css';

interface LogDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LogDrawer({ open, onOpenChange }: LogDrawerProps) {
  return (
    <Drawer.Root direction="right" open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="drawer-overlay" />
        <Drawer.Content className="drawer-content">
          <div className="drawer-inner">
            <div className="drawer-inner-container">
              <Drawer.Title className="drawer-title">
                Function name
              </Drawer.Title>
              <Drawer.Description className="drawer-description">
                This one specifically is not touching the edge of the screen,
                but that's not required for a side drawer.
              </Drawer.Description>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
