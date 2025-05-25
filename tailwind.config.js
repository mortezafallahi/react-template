import { heroui } from '@heroui/react';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
        },
        center: true,
      },

      fontFamily: {
        primary: ['YekanBakh', 'sans-serif'],
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: {
              50: '#ffffff',
              100: '#f6f7f8',
              200: '#edeff1',
              300: '#d7dce0',
              400: '#b5bec4',
              500: '#8c9ba4',
              600: '#6e7e89',
              700: '#586671',
              800: '#48535c',
              900: '#3e464e',
              950: '#373e43',
              DEFAULT: '#ffffff',
            },
            foreground: {
              50: '#f5f6f6',
              100: '#e5e7e8',
              200: '#cdd1d4',
              300: '#abb2b5',
              400: '#808b90',
              500: '#656f75',
              600: '#575e63',
              700: '#4a5054',
              800: '#414549',
              900: '#202224',
              DEFAULT: '#202224',
            },
            primary: {
              50: '#fff6ed',
              100: '#ffebd5',
              200: '#ffd3a9',
              300: '#feb473',
              400: '#fd893a',
              500: '#fb6914',
              600: '#ec4d0a',
              700: '#c4380a',
              800: '#9b2d11',
              900: '#7d2711',
              950: '#441106',
              DEFAULT: '#FD893A',
              foreground: '#ffffff',
            },
          },
        },
        dark: {},
      },
    }),
  ],
};
