/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  // 'media' honors the OS light/dark preference with zero client JS — no toggle, no FOUC.
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Single restrained accent (indigo). Brighter shade for dark mode legibility.
        accent: {
          DEFAULT: '#4f46e5',
          dark: '#818cf8',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        content: '72rem',
        prose: '46rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
