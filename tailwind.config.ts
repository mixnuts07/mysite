import type { Config } from 'tailwindcss'
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './_components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
      // plugin(function ({addBase, theme}) {
      //   addBase({
      //     'h1': {fontWeight: theme('fontWeight.bold'), fontSize:theme('fontSize.2xl'), backGroundColor: theme('colors.gray')},
      //     'h2': { fontSize: theme('fontSize.xl') },
      //     'h3': { fontSize: theme('fontSize.lg') },
      //   })
      // })
  ],
}
export default config
