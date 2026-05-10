import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-primary)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0b0b0b',
          red: '#7a1e1e',
          'red-dark': '#401919',
          cream: '#f5f0e8',
          gray: '#888888',
        },
      },
      letterSpacing: {
        tightest: '-0.06em',
        tighter: '-0.04em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
}

export default config
