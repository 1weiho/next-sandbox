import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import type { ReactNode } from 'react';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Next Sandbox',
    default: 'Next Sandbox',
  },
  description:
    'A lightweight tool for testing and monitoring server actions in Next.js.',
  openGraph: {
    title: 'Next Sandbox',
    description:
      'A lightweight tool for testing and monitoring server actions in Next.js.',
    url: 'https://next-sandbox.1wei.dev',
    siteName: 'Next Sandbox',
    images: '/banner.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@1weiho',
    creator: '@1weiho',
    images: '/banner.png',
  },
  metadataBase: new URL('https://next-sandbox.1wei.dev'),
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
