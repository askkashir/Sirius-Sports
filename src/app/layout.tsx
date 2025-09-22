import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {Navbar} from '@/components/navbar';
import {Footer} from '@/components/footer';
import {cn} from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sirius Sports',
  description: 'Crafted for Champions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')}>
        <div className="absolute top-0 left-0 -z-20 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
        <Navbar />
        <main className="container mx-auto max-w-[1200px] px-4">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
