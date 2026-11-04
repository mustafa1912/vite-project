import React from 'react';
import { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import LayoutClient from './layout-client';
import { siteConfig } from '../config/site';

// Load fonts with Next.js font optimization (local self-hosting during build)
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

// Professional Metadata API Setup for SEO Excellence
export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.shortBio,
  keywords: [
    siteConfig.name,
    'Software Engineer',
    'Frontend Developer',
    'Full Stack Engineer',
    'React Developer',
    'Next.js Portfolio',
    'TypeScript Developer',
    'Tailwind CSS',
    'Web Developer Resume',
    'Interactive Portfolio'
  ],
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.shortBio,
    url: 'https://example.com',
    siteName: siteConfig.templateName,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.shortBio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Inline blocking script to resolve active color theme synchronously and prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('activeColor') || 'yellow';
                  document.documentElement.setAttribute('data-theme', saved);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'yellow');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
