const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mainBackgroud: '#FFF9F9',
        pinkLight: '#fbf3f7',
        accent: '#f55b79',
        gray: '#c0aeb0',
        pink: '#f28daf',
        dark: '#3e2c26',
        swatch_6: '#de7594',
        swatch_7: '#a74f46',
        swatch_8: '#c0956b',
        darkGray: '#646464',
      },
    },
    screens: {
      large: '1440px',
      desktop: '1024px',
      tablet: '768px',
      mobile: '480px',
    },
    backgroundImage: {
      'hero-wave':
        'url(\'data:image/svg+xml,%3Csvg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"%3E%3Crect x="0" y="0" width="900" height="600" fill="%23ffffff"%3E%3C/rect%3E%3Cpath d="M710 600L657 550C604 500 498 400 460.5 300C423 200 454 100 469.5 50L485 0L900 0L900 50C900 100 900 200 900 300C900 400 900 500 900 550L900 600Z" fill="%23fbf3f7" stroke-linecap="round" stroke-linejoin="miter"%3E%3C/path%3E%3C/svg%3E\')',
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme, addBase }) {
      const components = {
        '.title': {
          fontSize: '30px',
          fontWeight: 'bold',
        },
        '.sectionTitle': {
          color: theme('colors.accent'),
          fontWeight: 'bold',
        },
        '.accentButton': {
          background: theme('colors.accent'),
          color: theme('colors.white'),
          borderRadius: '10px',
          padding: '15px 25px',
        },
      };
      addComponents(components);
      addBase({
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          lineHeight: '1.4',
        },
      });
    }),
    require('tailwind-hamburgers'),
  ],
};
