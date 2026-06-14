import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#060a14',
        'bg-surface': '#0d1426',
        'bg-elevated': '#141f3a',
        'text-primary': '#f0e6d3',
        'text-secondary': '#a89f91',
        'text-muted': '#6b7a99',
        'accent-warm': '#e07800',
        'accent-cool': '#4ecdc4',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Source Serif 4"', 'serif'],
        sans: ['"Inter"', '"PingFang SC"', '"Noto Sans SC"', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float-dog': 'floatDog 6s ease-in-out infinite',
        'eye-pulse': 'eyePulse 3s ease-in-out infinite',
        'ring-pulse': 'ringPulse 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        floatDog: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        eyePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        ringPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.08)', opacity: '0.1' },
        },
        fadeUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
