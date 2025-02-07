"use client";
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import dynamic from 'next/dynamic';
import Layout from '@/client-components/layouts/Layout';
const Header = dynamic(() => import('../client-components/layouts/Header'), { ssr: false });
const Footer = dynamic(() => import('../client-components/layouts/Footer'), { ssr: false });
const ThemeWrapper = dynamic(() => import('../client-components/ThemeWrapper'), { ssr: false });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeWrapper>
            <Layout>
              {children}
            </Layout>
          </ThemeWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}