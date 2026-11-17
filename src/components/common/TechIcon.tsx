import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function TechIcon({ name, className = '', size = 32 }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[\s\-_.]/g, '');

  switch (normalized) {
    case 'typescript':
    case 'ts':
      return (
        <svg
          viewBox="0 0 128 128"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path
            d="M66.4 53.6H31.6V66.2H42.7V108.3H55.3V66.2H66.4V53.6Z"
            fill="#FFFFFF"
          />
          <path
            d="M96.7 66.8C92.9 64.9 88.5 64 83.6 64C78.4 64 74.3 65.1 71.4 67.3C68.5 69.5 67 72.6 67 76.5C67 80 68.3 82.8 70.8 84.8C73.3 86.8 77.4 88.6 83.1 90.1C87.3 91.2 90.1 92.4 91.6 93.6C93.1 94.8 93.8 96.4 93.8 98.4C93.8 100.4 92.9 102 91.1 103.2C89.3 104.4 86.6 105 83 105C79.8 105 76.4 104.3 72.7 103C69 101.7 65.8 99.8 63 97.4V110.6C66.1 112 69.6 113.1 73.5 113.8C77.4 114.5 81.2 114.9 84.9 114.9C91.1 114.9 96 113.6 99.6 111.1C103.2 108.6 105 104.8 105 99.7C105 95.8 103.7 92.7 101.1 90.5C98.5 88.3 94.2 86.4 88.2 84.8C84.3 83.8 81.6 82.7 80.1 81.6C78.6 80.5 77.8 79 77.8 77.2C77.8 75.4 78.6 74 80.1 73C81.6 72 83.9 71.5 86.8 71.5C89.5 71.5 92.2 72 95 73.1C97.8 74.2 100.2 75.7 102.2 77.6V64.6C99.8 63.6 97.5 62.8 96.7 66.8Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'nextjs':
    case 'next':
    case 'nxt':
      return (
        <svg
          viewBox="0 0 180 180"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <circle cx="90" cy="90" r="90" fill="#0D5257" />
          <path
            d="M149.5 143.5L78.6 52H62V128H74.5V67.8L139.7 151C143.2 148.8 146.5 146.3 149.5 143.5Z"
            fill="url(#tech_next_grad1)"
          />
          <path
            d="M118 52H105.5V128H118V52Z"
            fill="url(#tech_next_grad2)"
          />
          <defs>
            <linearGradient id="tech_next_grad1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tech_next_grad2" x1="111.75" y1="52" x2="111.75" y2="92" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'react':
    case 'reactjs':
    case 'rc':
      return (
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#00B4D8" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'vue':
    case 'vuejs':
      return (
        <svg
          viewBox="0 0 261.76 226.69"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <path
            d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
            fill="#41B883"
          />
          <path
            d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
            fill="#34495E"
          />
        </svg>
      );

    case 'nuxt':
    case 'nuxtjs':
      return (
        <svg
          viewBox="0 0 48 48"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <path
            d="M26.2 36H42.5L31.8 17.5C31 16.2 29.1 16.2 28.3 17.5L20.8 30.6L18.7 26.8C17.9 25.5 16 25.5 15.2 26.8L10 36H19.5H26.2Z"
            fill="#00DC82"
          />
          <path
            d="M19.5 36H10L15.2 26.8C16 25.5 17.9 25.5 18.7 26.8L20.8 30.6L17.7 36H19.5Z"
            fill="#003543"
          />
          <path
            d="M4.5 36H18L10.3 22.7C9.5 21.4 7.6 21.4 6.8 22.7L4.5 36Z"
            fill="#00DC82"
            opacity="0.8"
          />
        </svg>
      );

    case 'php':
      return (
        <svg
          viewBox="0 0 256 137"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <rect width="256" height="137" rx="24" fill="#777BB4" />
          <path
            d="M66.4 39.8H42.7L29.6 97.2h15.2l3.4-14.8h10.9c14.6 0 23.3-6.8 26.2-19.8 1.9-8.4-.7-15.3-7.5-19.3-3.2-1.9-7-3.5-11.4-3.5zm-5.6 23.7h-7.6l3-13.4h7.6c5.7 0 9 2.5 7.7 8.3-1.2 5.2-4.9 5.1-10.7 5.1zm77.3-23.7h-15.3L115 74.2l3.4-14.8h11.2c14.6 0 23.3-6.8 26.2-19.8 1.9-8.4-.7-15.3-7.5-19.3-3.2-1.9-7-3.5-11.4-3.5zm-5.7 23.7h-7.6l3-13.4h7.6c5.7 0 9 2.5 7.7 8.3-1.2 5.2-4.9 5.1-10.7 5.1zm78.4-23.7H192.8L179.7 97.2h15.2l3.4-14.8h10.9c14.6 0 23.3-6.8 26.2-19.8 1.9-8.4-.7-15.3-7.5-19.3-3.2-1.9-7-3.5-11.4-3.5zm-5.6 23.7h-7.6l3-13.4h7.6c5.7 0 9 2.5 7.7 8.3-1.2 5.2-4.9 5.1-10.7 5.1z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'laravel':
    case 'lar':
      return (
        <svg
          viewBox="0 0 256 264"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <path
            d="M246.3 62.4l-72.2-41.7c-3.7-2.1-8.3-2.1-12 0L9.7 114c-3.7 2.1-6 6.1-6 10.4v83.4c0 4.3 2.3 8.2 6 10.4l72.2 41.7c3.7 2.1 8.3 2.1 12 0l152.4-88c3.7-2.1 6-6.1 6-10.4V72.8c0-4.3-2.3-8.3-6-10.4zm-78.2-27.9l60.2 34.8-27.2 15.7-60.2-34.8 27.2-15.7zm-72.2 41.7l60.2 34.8-27.2 15.7-60.2-34.8 27.2-15.7zm-72.2 41.7l60.2 34.8-60.2 34.8V117.9zm72.2 119.5l-60.2-34.8 60.2-34.8v69.6zm12-20.7l-60.2-34.8 60.2-34.8 60.2 34.8-60.2 34.8zm72.2-41.7l-60.2-34.8 60.2-34.8v69.6zm60.2-34.8l-60.2 34.8v-69.6l60.2 34.8z"
            fill="#FF2D20"
          />
        </svg>
      );

    case 'tailwindcss':
    case 'tailwind':
    case 'tw':
      return (
        <svg
          viewBox="0 0 256 154"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <path
            d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.736 2.434 16.694 9.444 24.398 17.202C145.748 61.88 160.916 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.736-2.434-16.694-9.444-24.398-17.202C174.252 14.92 159.084 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.736 2.434 16.694 9.444 24.398 17.202C81.748 138.68 96.916 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.736-2.434-16.694-9.444-24.398-17.202C110.252 91.72 95.084 76.8 64 76.8z"
            fill="#38BDF8"
          />
        </svg>
      );

    case 'bootstrap':
    case 'bs':
      return (
        <svg
          viewBox="0 0 256 206"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <path
            d="M225.8 0H30.2C13.5 0 0 13.5 0 30.2v145.6C0 192.5 13.5 206 30.2 206h195.6c16.7 0 30.2-13.5 30.2-30.2V30.2C256 13.5 242.5 0 225.8 0z"
            fill="#7952B3"
          />
          <path
            d="M84.7 151.7h35.8c23.6 0 37.8-11.2 37.8-29.4 0-13.6-8.8-22.7-22.8-25.2v-.6c11.6-3.1 19.3-12.4 19.3-24.2 0-16.8-13.6-26.4-34.9-26.4H84.7v105.8zm23.2-86.7h11.2c8.6 0 13.8 4.2 13.8 11.8 0 7.8-5.5 12.2-14.7 12.2H108V65zm0 67.8V108h13.2c9.5 0 15.5 4.5 15.5 12.6 0 8.4-6.3 12.2-16 12.2H108z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'wordpress':
    case 'wp':
      return (
        <svg
          viewBox="0 0 256 256"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <circle cx="128" cy="128" r="128" fill="#21759B" />
          <path
            d="M18.8 128c0 23.3 7.2 44.9 19.5 62.7l54.8-150.3C51.3 57.5 18.8 89 18.8 128zm145.4-8.8c0-11-3.9-18.7-7.3-24.6-4.5-7.3-8.8-13.6-8.8-20.9 0-8.2 6.2-15.8 15-15.8.7 0 1.3 0 1.9.1-13-11.9-30.4-19.1-49.4-19.1-26.3 0-49.6 13.7-62.8 34.3 1.9.1 3.7.1 5.2.1 8.3 0 21.2-1 21.2-1 4.3-.3 4.8 6 .6 6.5 0 0-4.4.5-9.3.8l29.4 87.5 17.7-53.1-12.6-34.4c-4.4-.3-8.6-.8-8.6-.8-4.3-.3-3.7-6.8.6-6.5 0 0 13.2 1 20.8 1 8.3 0 21.2-1 21.2-1 4.3-.3 4.8 6 .5 6.5 0 0-4.4.5-9.3.8l29.1 86.6 8.2-27.4c3.6-11.8 6.4-20.3 6.4-27.7zM131.2 140l-24.5 71.3c7.2 2.1 14.8 3.3 22.7 3.3 9.4 0 18.5-1.6 26.9-4.5L131.2 140zm103.5-38.3c.7 5.3 1 10.9 1 16.7 0 21.8-6.1 46.5-24.4 75.8l23.5-67.9c4.2-11.7 6.3-22.1 6.3-31.5 0-3.3-.3-6.5-.9-9.5 12.3 17.8 19.5 39.4 19.5 62.7z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'elementor':
    case 'el':
      return (
        <svg
          viewBox="0 0 256 256"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <rect width="256" height="256" rx="48" fill="#92003B" />
          <path
            d="M72 64h24v128H72zm44 0h68v24h-68zm0 52h68v24h-68zm0 52h68v24h-68z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'seo':
    case 'seooptimization':
      return (
        <svg
          viewBox="0 0 48 48"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="22" fill="#E1ECEC" stroke="#0D5257" strokeWidth="2" />
          <path d="M12 34V14" stroke="#0D5257" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 34H36" stroke="#0D5257" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M16 28L23 21L29 26L36 17" stroke="#D45D35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="36" cy="17" r="3" fill="#D45D35" />
          <path d="M32 17H36V21" stroke="#D45D35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'html':
    case 'html5':
      return (
        <svg viewBox="0 0 512 512" width={size} height={size} className={className} aria-hidden="true">
          <path fill="#E44D26" d="M71 460L30 0h452l-41 460-185 52z"/>
          <path fill="#F16529" d="M256 472l149-41 35-394H256z"/>
          <path fill="#EBEBEB" d="M109 98h147v64H115l7 79h134v64H183l4 48 69 19v67l-125-35z"/>
          <path fill="#FFF" d="M256 98h147l-14 153h-133v-64h76l7-89H256zm0 143h133l-13 145-120 34v-67l69-19 8-93H256z"/>
        </svg>
      );

    case 'css':
    case 'css3':
      return (
        <svg viewBox="0 0 512 512" width={size} height={size} className={className} aria-hidden="true">
          <path fill="#264DE4" d="M71 460L30 0h452l-41 460-185 52z"/>
          <path fill="#2965F1" d="M256 472l149-41 35-394H256z"/>
          <path fill="#EBEBEB" d="M109 98h147v64H115l7 79h134v64H183l4 48 69 19v67l-125-35z"/>
          <path fill="#FFF" d="M256 98h147l-14 153h-133v-64h76l7-89H256zm0 143h133l-13 145-120 34v-67l69-19 8-93H256z"/>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 630 630" width={size} height={size} className={className} aria-hidden="true">
          <rect width="630" height="630" fill="#F7DF1E"/>
          <path d="M423.2 492.2c12.7 20.7 29.2 35.9 58.4 35.9 24.5 0 40.2-12.3 40.2-29.2 0-20.3-16.1-27.5-43.1-39.3l-14.8-6.3c-42.7-18.2-71.1-41-71.1-89.2 0-44.4 33.8-77.8 86.7-77.8 37.6 0 64.7 13.1 84.1 47.4l-46.1 29.6c-10.1-18.2-21.1-25.4-38-25.4-17.3 0-28.3 11-28.3 25.4 0 17.7 11 24.9 36.4 35.9l14.8 6.3c51.6 22 79.1 44.8 79.1 93.9 0 53.7-41.9 82.9-97.7 82.9-54.5 0-90.5-26.2-107.4-60.5l46.8-29.7zm-209.3 5.5c8.9 15.6 17.3 28.7 37.6 28.7 19.4 0 31.7-7.6 31.7-37.2V290.7h59.6v198.8c0 61.7-36.4 89.2-89.7 89.2-48.2 0-76.1-25.4-90.9-56.2l51.7-34.8z"/>
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className} aria-hidden="true">
          <path fill="#F05032" d="M125.4 56.4L71.6 2.6c-3.5-3.5-9.1-3.5-12.6 0L46.4 15.2l16.1 16.1c3.7-1.3 8.1-.4 11 2.5 3 3 3.8 7.4 2.4 11.2l15.5 15.5c3.8-1.4 8.2-.5 11.2 2.4 4.2 4.2 4.2 11 0 15.2-4.2 4.2-11 4.2-15.2 0-3.1-3.1-4-7.8-2.3-11.7L73.5 51.3v34.4c1 .6 2 1.4 2.8 2.2 4.2 4.2 4.2 11 0 15.2-4.2 4.2-11 4.2-15.2 0-4.2-4.2-4.2-11 0-15.2.9-.9 2-1.7 3.2-2.3V50.8c-1.2-.6-2.3-1.4-3.2-2.3-3.1-3.1-4-7.7-2.4-11.6L42.5 20.6 2.6 60.5c-3.5 3.5-3.5 9.1 0 12.6l53.8 53.8c3.5 3.5 9.1 3.5 12.6 0l56.4-56.4c3.5-3.5 3.5-9.1 0-14.1z"/>
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          aria-hidden="true"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="#0D5257"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
  }
}
