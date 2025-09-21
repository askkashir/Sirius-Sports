import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {Navbar} from '@/components/navbar';
import {Footer} from '@/components/footer';

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
    <html lang="en" className="dark" suppressHydrationWarning>
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
      <body className="font-body antialiased">
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
