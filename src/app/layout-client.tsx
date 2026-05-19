'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Switcher from '../components/switch/Switcher';
import Header from '../components/layout/Header';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Handle page load preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver Scroll Animation (Revealator Replacement)
  useEffect(() => {
    // We add a tiny delay to allow hydration and page contents to mount fully
    const observerTimer = setTimeout(() => {
      const observer = new IntersectionObserver(
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
      const elements = document.querySelectorAll(
        '[class*="revealator-"], .skill-card, .box-stats, .resume-box li'
      );
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 150);

    return () => clearTimeout(observerTimer);
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
