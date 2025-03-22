import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="w-full h-screen pt-12">{children}</div>;
}
