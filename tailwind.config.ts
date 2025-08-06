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
          50: 'rgb(240,241,246)',
          100: 'rgb(220,225,235)',
          200: 'rgb(180,190,215)',
          300: 'rgb(140,155,195)',
          400: 'rgb(100,120,175)',
          500: 'rgb(70,90,155)',
          600: 'rgb(55,75,135)',
          700: 'rgb(47,64,120)',
          800: 'rgb(43,59,112)',
          900: 'rgb(39,54,105)',
          DEFAULT: 'rgb(39,54,105)',
          foreground: 'rgb(240,241,246)',
        },
        'secondary': {
          50: 'rgb(250,250,251)',
          100: 'rgb(245,246,250)',
          200: 'rgb(240,241,246)',
          300: 'rgb(230,232,240)',
          400: 'rgb(200,205,220)',
          500: 'rgb(160,170,190)',
          600: 'rgb(120,135,160)',
          700: 'rgb(80,95,130)',
          800: 'rgb(40,55,100)',
          900: 'rgb(20,30,70)',
          DEFAULT: 'rgb(240,241,246)',
          foreground: 'rgb(0, 0, 0)',
        },
        'accent': {
          50: 'rgb(255,248,230)',
          100: 'rgb(254,240,200)',
          200: 'rgb(253,230,170)',
          300: 'rgb(252,215,140)',
          400: 'rgb(251,195,90)',
          500: 'rgb(250,180,60)',
          600: 'rgb(250,167,28)',
          700: 'rgb(220,145,25)',
          800: 'rgb(180,115,20)',
          900: 'rgb(140,85,15)',
          DEFAULT: 'rgb(250,167,28)',
          foreground: 'rgb(0, 0, 0)',
        },
      },
    },
  },
  plugins: [],
}
export default config