/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0a0a0f',
        panel: '#1a1a2e',
        line: 'rgba(148, 163, 184, 0.18)',
        primary: '#6366f1',
        secondary: '#06b6d4',
        text: '#e2e8f0',
        muted: '#94a3b8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(99,102,241,0.18), 0 24px 80px rgba(6,182,212,0.08)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}