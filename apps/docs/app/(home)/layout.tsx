import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions} className="overflow-hidden relative">
      {children}
      <Footer />
    </HomeLayout>
  );
}

const Footer = () => {
  return (
    <footer className="border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">Next Sandbox</p>
          <p className="text-xs">
            Crafted with 🤍 by{' '}
            <a
              href="https://1wei.dev"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              Yiwei
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
