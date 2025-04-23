import { defineConfig } from 'tailwindcss';
export default defineConfig({
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        day: '#F5EBDD',
        night: '#0A0F18',
        parchment: '#F4EAD5',
        midnight: '#0A0F18',
        elaris: '#7B52AB',
        krun: '#304059'
      }
    }
  },
  plugins: [],
});
