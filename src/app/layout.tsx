import React from 'react';
import { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';

 import './globals.css';
import LayoutClient from './layout-client';

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
  title: 'Mostafa Wahba | Frontend & WordPress Developer | React.js',
  description: 'Professional Frontend & WordPress Developer specializing in React.js, Next.js, and custom-built WordPress themes. Discover high-performance web applications and speed-optimized WooCommerce stores.',
  keywords: [
  'Mostafa Wahba',
  'Frontend Developer',
  'React Developer',
  'Next.js Developer',
  'WordPress Developer',
  'WooCommerce Developer',
  'Elementor Expert',
  'Web Developer',
  'Frontend Engineer',

  'Custom WordPress Themes',
  'WordPress Plugin Development',
  'React.js Applications',
  'Next.js Websites',
  'Responsive Web Design',

  'Website Performance Optimization',
  'SEO Optimization',
  'Speed Optimization',
  'Web Application Development',

  'Freelance Frontend Developer',
  'Freelance WordPress Developer'
],
  metadataBase: new URL('https://mostafa-wahba.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Mostafa Wahba | Frontend & WordPress Developer | React.js',
    description: 'Explore the high-performance personal portfolio of Mostafa Wahba, showcasing modern React.js, Next.js, and custom WordPress developments.',
    url: 'https://mostafa-wahba.vercel.app',
    siteName: 'Mostafa Wahba Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mostafa Wahba - Frontend & WordPress Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mostafa Wahba | Frontend & WordPress Developer | React.js',
    description: 'High-performance React.js & custom WordPress portfolio featuring outstanding speed, SEO, and responsive design.',
    images: ['/logo.png'],
    creator: '@mostafaw338',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
