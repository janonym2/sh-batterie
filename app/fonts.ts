// app/fonts.ts
import localFont from 'next/font/local';

export const inter = localFont({
  variable: '--font-inter',
  src: [
    {
      path: '../public/fonts/Inter-VariableFont.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Italic-VariableFont.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  display: 'swap',
});
