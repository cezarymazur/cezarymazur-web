// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
		'nuxt-svgo',
		'@nuxtjs/robots',
		'@nuxtjs/google-fonts',
		'@zadigetvoltaire/nuxt-gtm',
	],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config',
		exposeConfig: false,
		exposeLevel: 2,
		config: {},
		injectPosition: 'first',
		viewer: true,
	},
	plugins: ['~/plugins/preline.client.ts'],
	googleFonts: {
		families: {
			'Space Grotesk': true,
		},
	},
	gtm: {
		id: 'GTM-W8BNFWCH',
		defer: true,
		compatibility: false,
		nonce: '2726c7f26c',
		enabled: true,
		debug: true,
		loadScript: true,
		enableRouterSync: true,
		trackOnNextTick: false,
		devtools: true,
	},
	darkMode: 'media',
	app: {
		head: {
			title: 'Frontend Developer | WordPress and Vue3 Specialist | Cezary Mazur',
			meta: [
				{
					name: 'description',
					content:
						'Web Developer with WordPress and Vue3 skills. Experienced and passionate about responsive web design with a mobile-first approach - Cezary Mazur',
				},
			],
			script: [{ type: 'text/javascript', src: 'js/window.curDot.js', body: true }],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
				{ rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
			],
		},
	},
})
