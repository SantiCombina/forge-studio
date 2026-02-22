import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';

import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { LanguageProvider } from '@/contexts/language-context';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://forgestudio.dev';

const title = 'Forge Studio — Custom Software Development';
const description =
  "Two senior developers who partner with startups and scaleups to design, build, and ship custom software — web apps, APIs, dashboards, and more. Let's build something great.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Forge Studio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Forge Studio',
  url: siteUrl,
  description,
  serviceType: ['Web Application Development', 'Custom Software Development', 'API Integration', 'UX/UI Design'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: `${siteUrl}/#contact`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
