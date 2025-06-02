import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'werk-black': '#1A1A1F',
        'werk-white': '#FFFFFF',
        'werk-gray-100': '#F8F8F8',
        'werk-gray-200': '#D1D1D2',
        'werk-gray-300': '#5F5F62',
        'werk-gray-400': '#DADADA',
        'werk-accent': '#FEC483',
      },
      fontFamily: {
        sans: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1.33', letterSpacing: '0.16em' }],
        'sm': ['14px', { lineHeight: '1.14' }],
        'base': ['16px', { lineHeight: '1.5' }],
        'lg': ['18px', { lineHeight: '1.78' }],
        'xl': ['20px', { lineHeight: '1.4' }],
        '2xl': ['24px', { lineHeight: '1.5' }],
        '3xl': ['36px', { lineHeight: '1.22', letterSpacing: '-0.01388em' }],
        '4xl': ['48px', { lineHeight: '1.167' }],
        '5xl': ['70px', { lineHeight: '1.086', letterSpacing: '-0.01429em' }],
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config