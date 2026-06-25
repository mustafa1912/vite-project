'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Switcher from '../components/switch/Switcher';
import Header from '../components/layout/Header';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Handle page load preloader — use window load event rather than arbitrary timeout
  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener('load', handleLoad);
      // Fallback: if load event never fires within 1.5s, hide preloader
      const fallback = setTimeout(() => setLoading(false), 1500);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  // IntersectionObserver Scroll Animation (Revealator Replacement)
  useEffect(() => {
    // Store observer outside setTimeout so the cleanup function can reference it
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealator-within');
              entry.target.classList.add('visible'); // For skills grid
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
      );

      // Select all elements with class revealator- or skill-card
      document
        .querySelectorAll('[class*="revealator-"], .skill-card, .box-stats, .resume-box li')
        .forEach((el) => observer!.observe(el));
    }, 150);

    return () => {
      clearTimeout(timer);
      observer?.disconnect(); // Properly disconnects the observer on every route change
    };
  }, [pathname]);

  return (
    <>
      {/* Premium preloader that handles transitions elegantly */}
      <div 
        id="preloader" 
        className={`preloader ${loading ? '' : 'off'}`}
        aria-hidden={!loading}
      >
        <div className="black_wall"></div>
        <div className="loader"></div>
      </div>

      <div className="App">
        {/* Style Switcher & Floating Header */}
        <Switcher />
        <Header />

        {/* Dynamic transition layout wrapper per page route */}
        <main key={pathname} className="page-wrapper">
          {children}
        </main>
      </div>
    </>
  );
}
