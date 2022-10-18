export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title:
			'Marco Meiwes Personal Trainer im Kreis Paderborn',
		htmlAttrs: {
			lang: 'de',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'Als Personal Trainer im Kreis Paderborn, helfe ich Menschen sich in ihrem Körper wohlzufühlen.',
			},
			{ name: 'robots', content: 'index' },
			{
				name: 'format-detection',
				content: 'telephone=yes',
			},
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico',
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/css/main.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxt/content', '@nuxtjs/sitemap'],

	sitemap: { hostname: 'https://marcomeiwes.de' },

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}

