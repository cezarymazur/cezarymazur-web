import type { Config } from 'tailwindcss'

const srcDir = '.'
const config: Config = {
	darkMode: 'media',
	content: [
		`${srcDir}/components/**/*.{vue,js,ts}`,
		`${srcDir}/layouts/**/*.vue`,
		`${srcDir}/pages/**/*.vue`,
		`${srcDir}/composables/**/*.{js,ts}`,
		`${srcDir}/plugins/**/*.{js,ts}`,
		`${srcDir}/utils/**/*.{js,ts}`,
		`${srcDir}/App.{js,ts,vue}`,
		`${srcDir}/app.{js,ts,vue}`,
		`${srcDir}/Error.{js,ts,vue}`,
		`${srcDir}/error.{js,ts,vue}`,
		`${srcDir}/app.config.{js,ts}`,
		'./node_modules/preline/preline.js',
	],
	theme: {
		extend: {
			screens: {
				xs: '340px',
			},
			fontFamily: {
				grotesk: ['Space Grotesk', 'sans-serif'],
				neue: ['Neue', 'sans-serif'],
				metana: ['Metana', 'sans-serif'],
				metanaOutline: ['Metana_outline', 'sans-serif'],
			},
			colors: {
				black: 'rgb(var(--black) / <alpha-value>)',
				white: 'rgb(var(--white) / <alpha-value>)',
				gray: 'rgb(var(--gray) / <alpha-value>)',
				primary: '#4bb7c0',
				secondary: 'rgb(var(--secondary) / <alpha-value>)',
			},
		},
	},
	plugins: [require('preline/plugin')],
}

export default config
