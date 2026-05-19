'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Import images
import purple from '../../assets/images/purple.png';
import red from '../../assets/images/red.png';
import blueviolet from '../../assets/images/blueviolet.png';
import blue from '../../assets/images/blue.png';
import goldenrod from '../../assets/images/goldenrod.png';
import magenta from '../../assets/images/magenta.png';
import yellowgreen from '../../assets/images/yellowgreen.png';
import orange from '../../assets/images/orange.png';
import green from '../../assets/images/green.png';
import yellow from '../../assets/images/yellow.png';

const COLOR_IMAGES: Record<string, any> = {
  purple,
  red,
  blueviolet,
  blue,
  goldenrod,
  magenta,
  yellowgreen,
  orange,
  green,
  yellow,
};

const COLORS = [
  'purple',
  'red',
  'blueviolet',
  'blue',
  'goldenrod',
  'magenta',
  'yellowgreen',
  'orange',
  'green',
  'yellow',
];

export default function Switcher() {
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [activeColor, setActiveColor] = useState('yellow');
  const [mounted, setMounted] = useState(false);

  const toggleSwitch = () => setIsSwitcherOpen((prev) => !prev);

  // Initialize theme from localStorage on client-side
  useEffect(() => {
    const savedColor = localStorage.getItem('activeColor') || 'yellow';
    setActiveColor(savedColor);
    document.documentElement.setAttribute('data-theme', savedColor);
    setMounted(true);
  }, []);

  // Update theme when activeColor changes
  const handleColorChange = (color: string) => {
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
            {COLORS.map((color) => (
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
