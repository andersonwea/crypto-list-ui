import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
import { text } from 'stream/consumers'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-500': '#9747FF',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#9747FF',
            },
          },
        },
      },
    }),
  ],
}
export default config
