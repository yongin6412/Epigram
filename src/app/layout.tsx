import ClientHeader from '@/components/common/Header';
import { QueryProvider } from '@/contexts/QueryProvider';
import type { Metadata } from 'next';
import './globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: 'epigram',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <AuthProvider>
            <ClientHeader />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
