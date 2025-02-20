import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import 'nextra-theme-docs/style.css';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { type ReactNode } from 'react';

export const metadata = {};

const navbar = <Navbar logo={<b>Next Sandbox</b>} />;
const footer = <Footer>Next Sandbox by Yiwei Ho</Footer>;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/1weiho/next-sandbox/tree/main/apps/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
