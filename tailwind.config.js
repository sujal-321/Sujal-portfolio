/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--text)',
        primary: {
          DEFAULT: '#6366f1',
          foreground: '#ffffff',
        },
        onBackground: '#d8dce8',
        accent: {
          DEFAULT: '#eef2ff',
          foreground: '#000000',
        },
        border: 'var(--line)',
      },
    },
  },
  plugins: [],
};
