import axios from 'axios'

export default {
	ssr: 'true',
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		htmlAttrs: {
			lang: 'en-GB',
		},
		title: 'KEJK — Product Designer and Developer',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'HandheldFriendly', content: 'True' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{
				name: 'apple-mobile-web-app-status-bar-style',
				content: 'default',
			},
			{ name: 'apple-mobile-web-app-title', content: 'KEJK' },
			{
				name: 'theme-color',
				media: '(prefers-color-scheme: light)',
				content: 'white',
			},
			{
				name: 'theme-color',
				media: '(prefers-color-scheme: dark)',
				content: 'black',
			},
			{ property: 'og:site_name', content: 'KEJK' },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{
				hid: 'og:url',
				property: 'og:url',
				content: 'https://kejk.tech',
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'Karl Emil James Koch',
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: 'Human-first Product Designer and Developer.',
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content:
					'https://imgix.cosmicjs.com/0321b940-98bf-11ec-8bb7-91577e4f4933-meta.png',
			},
			{ property: 'og:image:width', content: '740' },
			{ property: 'og:image:height', content: '300' },
			{ name: 'twitter:site', content: '@_kejk' },
			{ name: 'twitter:creator', content: '@_kejk' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{
				hid: 'twitter:url',
				name: 'twitter:url',
				content: 'https://kejk.tech',
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: 'Karl Emil James Koch',
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content: 'Human-first Product Designer and Developer.',
			},
			{
				// hid: 'twitter:image:src',
				name: 'twitter:image',
				content:
					'https://imgix.cosmicjs.com/0321b940-98bf-11ec-8bb7-91577e4f4933-meta.png',
			},
		],
		link: [
			{ rel: 'icon', href: '/favicon.svg' },
			{ rel: 'icon', href: '/favicon.ico' },
			{ rel: 'mask-icon', href: '/mask-icon.svg', color: '#667EEA' },
			{
				rel: 'apple-touch-icon',
				type: 'image/x-icon',
				href: '/apple-icon.png',
			},
			{
				rel: 'apple-touch-icon',
				type: 'image/x-icon',
				sizes: '57x57',
				href: '/apple-icon.png',
			},
			{
				rel: 'apple-touch-icon',
				type: 'image/x-icon',
				sizes: '60x60',
				href: '/apple-icon.png',
			},
			{
				rel: 'apple-touch-icon',
				type: 'image/x-icon',
				sizes: '72x72',
				href: '/apple-icon.png',
			},
			{
				rel: 'apple-touch-icon',
				type: 'image/x-icon',
				sizes: '76x76',
				href: '/apple-icon.png',
			},
			{
				rel: 'apple-touch-icon',
				type: 'image/x-icon',
				sizes: '114x114',
				href: '/apple-icon.png',
			},
			{
				rel: 'apple-touch-icon',
				type: 'image/x-icon',
				sizes: '120x120',
				href: '/apple-icon.png',
			},
			{
				rel: 'apple-touch-icon',
				type: 'image/x-icon',
				sizes: '144x144',
				href: '/apple-icon.png',
			},
			{
				rel: 'apple-touch-icon',
				type: 'image/x-icon',
				sizes: '152x152',
				href: '/apple-icon.png',
			},
			{
				rel: 'apple-touch-icon',
				type: 'image/x-icon',
				sizes: '180x180',
				href: '/apple-icon.png',
			},
			{
				hid: 'canonical',
				rel: 'canonical',
				href: 'https://kejk.tech',
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Newsreader:wght@800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Monda:wght@400;700&display=swap',
			},
			{
				/* href: "https://fonts.googleapis.com/css2?family=Rakkas&display=swap", */
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/css/main.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/vue-moment.js', ssr: true },
		{ src: '~/plugins/prism.js', ssr: true },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/moment', '@nuxtjs/dotenv', '@nuxt/postcss8'],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/apollo',
		'@nuxtjs/feed',
		'@nuxtjs/sitemap',
		'vue-scrollto/nuxt',
	],

	sitemap: {
		path: '/sitemap.xml',
		hostname: 'https://kejk.tech',
		cacheTime: 1000 * 60 * 15,
		gzip: true,
		routes: ['/', '/about', '/thoughts', '/thoughts/_id', '/uses'].map(
			(route) => ({
				url: route,
				changefreq: 'monthly',
				priority: 1,
				lastmodISO: new Date().toISOString().split('T')[0],
			})
		),
	},

	apollo: {
		clientConfigs: {
			default: {
				httpEndpoint: 'https://graphql.cosmicjs.com/v2',
			},
		},
	},

	axios: {
		baseURL: 'https://graphql.cosmicjs.com/v2',
	},

	feed: [
		{
			path: '/rss.xml',
			async create(feed) {
				feed.options = {
					title: 'KEJK | Thoughts',
					link: 'https://kejk.tech/thoughts',
					description:
						'Thoughts on design, development and the intersection of the two',
				}

				await axios
					.get(
						`https://api.cosmicjs.com/v2/buckets/kemiljk/objects?pretty=true&query=%7B%22type%22%3A%22blogs%22%7D&read_key=uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK&limit=20&props=slug,title,content,metadata,modified_at`
					)
					.then((res) => {
						res.data.objects.forEach((blog) => {
							const url = `https://kejk.tech/thoughts/${blog.slug}`
							feed.addItem({
								title: blog.title,
								id: url,
								link: url,
								description: blog.metadata.snippet,
								image: blog.metadata.hero.imgix_url,
								content: blog.content,
								published: new Date(blog.modified_at),
								author: [
									{
										name: 'Karl Koch',
										email: 'karl@kejk.tech',
									},
								],
							})
						})
					})
			},
			cacheTime: 1000 * 60 * 15,
			type: 'rss2',
		},
	],

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en',
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
}
