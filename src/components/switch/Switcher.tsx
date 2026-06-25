'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Derived from a single source of truth to prevent COLOR_IMAGES/COLORS sync issues
const THEME_COLORS = [
  'purple', 'red', 'blueviolet', 'blue', 'goldenrod',
  'magenta', 'yellowgreen', 'orange', 'green', 'yellow',
] as const;

type ThemeColor = typeof THEME_COLORS[number];

const COLOR_IMAGES: Record<ThemeColor, string> = {
  purple: '/assets/images/color/purple.png',
  red: '/assets/images/color/red.png',
  blueviolet: '/assets/images/color/blueviolet.png',
  blue: '/assets/images/color/blue.png',
  goldenrod: '/assets/images/color/goldenrod.png',
  magenta: '/assets/images/color/magenta.png',
  yellowgreen: '/assets/images/color/yellowgreen.png',
  orange: '/assets/images/color/orange.png',
  green: '/assets/images/color/green.png',
  yellow: '/assets/images/color/yellow.png',
};


export default function Switcher() {
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [activeColor, setActiveColor] = useState<ThemeColor>('yellow');
  const [mounted, setMounted] = useState(false);

  const toggleSwitch = () => setIsSwitcherOpen((prev) => !prev);

  // Initialize theme from localStorage on client-side
  useEffect(() => {
    const saved = localStorage.getItem('activeColor') as ThemeColor | null;
    const color: ThemeColor = THEME_COLORS.includes(saved as ThemeColor) ? (saved as ThemeColor) : 'yellow';
    setActiveColor(color);
    document.documentElement.setAttribute('data-theme', color);
    setMounted(true);
  }, []);

  // Update theme when activeColor changes
  const handleColorChange = (color: ThemeColor) => {
    setActiveColor(color);
    localStorage.setItem('activeColor', color);
    document.documentElement.setAttribute('data-theme', color);
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <div id="switcher" className={isSwitcherOpen ? 'true' : 'false'}>
        <div className="content-switcher">
          <h4>STYLE SWITCHER</h4>
          <ul>
            {THEME_COLORS.map((color) => (
              <li key={color}>
                <button
                  onClick={() => handleColorChange(color)}
                  title={color}
                  className={`color my-2 ${activeColor === color ? 'active' : ''}`}
                  style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
                  aria-label={`Switch theme color to ${color}`}
                >
                  <Image
                    src={COLOR_IMAGES[color]}
                    alt={`${color} theme`}
                    width={30}
                    height={30}
                  />
                </button>
              </li>
            ))}
          </ul>
          <button 
            id="hideSwitcher" 
            onClick={toggleSwitch}
            aria-label="Close style switcher"
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
          >
            &times;
          </button>
        </div>
      </div>
      <button
        id="showSwitcher"
        onClick={toggleSwitch}
        className="styleSecondColor shadow"
        aria-label="Open style switcher"
        style={{ border: 'none', cursor: 'pointer' }}
      >
        <i className="fa fa-cog fa-spin" aria-hidden="true"></i>
      </button>
    </>
  );
}
