import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';

import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Forge Studio',
  description:
    'Forge Studio is a boutique software development studio. We partner with businesses to build custom software products that drive growth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
