const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'assets', 'images', 'demo');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function makeSvg(title, subtitle, color1, color2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#bg)"/>
    <rect x="40" y="40" width="720" height="520" rx="16" fill="#111827" fill-opacity="0.88" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <circle cx="70" cy="70" r="6" fill="#ef4444"/>
    <circle cx="90" cy="70" r="6" fill="#f59e0b"/>
    <circle cx="110" cy="70" r="6" fill="#10b981"/>
    <line x1="40" y1="95" x2="760" y2="95" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <text x="400" y="270" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="700" fill="#ffffff" text-anchor="middle">${title}</text>
    <text x="400" y="315" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#9ca3af" text-anchor="middle">${subtitle}</text>
    <rect x="290" y="360" width="220" height="46" rx="8" fill="#f59e0b"/>
    <text x="400" y="390" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#000000" text-anchor="middle">LIVE PREVIEW DEMO</text>
  </svg>`;
}

const projects = [
  ['project-1.webp', 'Nova Cloud SaaS', 'Observability & Metrics Dashboard', '#1e1b4b', '#0f172a'],
  ['project-1-2.webp', 'Nova Cloud SaaS', 'System Topology & Logs View', '#1e1b4b', '#0f172a'],
  ['project-1-3.webp', 'Nova Cloud SaaS', 'Alerts & Cluster Monitoring', '#1e1b4b', '#0f172a'],
  ['project-2.webp', 'Aura Real Estate', 'Luxury Property & Map Discovery', '#0f291e', '#061a12'],
  ['project-2-2.webp', 'Aura Real Estate', 'Floor Plans & 3D Walkthrough', '#0f291e', '#061a12'],
  ['project-2-3.webp', 'Aura Real Estate', 'Financial Mortgage Calculator', '#0f291e', '#061a12'],
  ['project-3.webp', 'Zenith E-Commerce', 'Headless Storefront & Checkout', '#2d1537', '#12071a'],
  ['project-3-2.webp', 'Zenith E-Commerce', 'Order Tracking & Cart Workflow', '#2d1537', '#12071a'],
  ['project-4.webp', 'Pulse FinTech App', 'Multi-Asset Crypto & Banking Hub', '#0c2e3a', '#05141a'],
  ['project-4-2.webp', 'Pulse FinTech App', 'Transaction History & Analytics', '#0c2e3a', '#05141a'],
  ['project-5.webp', 'Cognitive AI Studio', 'Prompt Engineering & Generative UI', '#31102b', '#170614'],
  ['project-5-2.webp', 'Cognitive AI Studio', 'Model Fine-Tuning & Pipeline', '#31102b', '#170614'],
  ['project-6.webp', 'OmniFlow Kanban', 'Agile Velocity & Task Sprints', '#2b2108', '#140f03'],
  ['project-6-2.webp', 'OmniFlow Kanban', 'Backlog Refinement & Boards', '#2b2108', '#140f03'],
];

projects.forEach(([filename, t, s, c1, c2]) => {
  fs.writeFileSync(path.join(dir, filename), makeSvg(t, s, c1, c2), 'utf8');
});

const avatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750">
  <defs>
    <linearGradient id="av" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f2937"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>
  <rect width="600" height="750" fill="url(#av)"/>
  <circle cx="300" cy="270" r="120" fill="#374151" stroke="rgba(245,158,11,0.3)" stroke-width="4"/>
  <path d="M120,680 C120,480 200,430 300,430 C400,430 480,480 480,680 Z" fill="#2d3748"/>
  <circle cx="300" cy="260" r="80" fill="url(#glow)"/>
  <text x="300" y="270" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" fill="#ffffff" text-anchor="middle">M W</text>
  <text x="300" y="580" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="2">Mostafa Wahba</text>
  <text x="300" y="620" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#f59e0b" text-anchor="middle" letter-spacing="3">SENIOR FULL STACK ENGINEER</text>
</svg>`;

fs.writeFileSync(path.join(dir, 'avatar.webp'), avatarSvg, 'utf8');
console.log('Demo images created successfully in public/assets/images/demo/');

