/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  // 'class' — the redesign is a single, deliberate dark monochrome theme.
  // `<html class="dark">` is hardcoded in BaseLayout; no OS toggle, no FOUC.
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Monochrome "accent" = silver/white. Brightness, not hue, is the
        // differentiator on the black vortex backdrop.
        accent: {
          DEFAULT: '#e6ebf4',
          dark: '#e6ebf4',
        },
      },
      fontFamily: {
        // Geometric sci-fi display face for the wordmark, hero, stats, and
        // short section titles. Body copy stays on Inter for readability.
        display: ['Orbitron', 'Inter', 'system-ui', 'sans-serif'],
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
