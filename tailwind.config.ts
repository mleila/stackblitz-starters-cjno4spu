import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          DEFAULT: 'rgb(39,54,105)',
          foreground: 'rgb(240,241,246)', // foreground color for text
        },
        'secondary': {
          DEFAULT: 'rgb(240,241,246)',
          foreground: 'rgb(0, 0, 0)' // foreground color for text
        },
        'accent': {
          DEFAULT: 'rgb(250,167,28)',
          foreground: 'rgb(0, 0, 0)', // foreground color for text
        },
      },
    },
  },
  plugins: [],
}
export default config