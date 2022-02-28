<template>
	<a
		:href="social.href"
		target="_blank"
		rel="noreferrer"
		class="no-underline"
	>
		<button
			class="flex w-full items-center justify-center rounded-lg bg-neutral-100 p-4 transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow hover:ring hover:ring-neutral-300 focus:outline-none focus:ring-2 focus:ring-white dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:ring-neutral-600"
		>
			<twitter-icon
				v-if="social.twitter"
				size="1x"
				class="text-blue-400"
			></twitter-icon>
			<linkedin-icon
				v-if="social.linkedin"
				size="1x"
				class="text-blue-600 dark:text-blue-500"
			></linkedin-icon>
			<figma-icon
				v-if="social.figma"
				size="1x"
				class="text-green-600 dark:text-green-400"
			></figma-icon>
			<github-icon
				v-if="social.github"
				size="1x"
				class="text-black dark:text-white"
			></github-icon>
			<dribbble-icon
				v-if="social.dribbble"
				size="1x"
				class="text-pink-400"
			></dribbble-icon>
			<coffee-icon
				v-if="social.coffee"
				size="1x"
				class="text-red-600"
			></coffee-icon>
			<span
				class="text-md ml-2 text-xs font-medium text-neutral-900 dark:text-neutral-50"
			>
				{{ social.title }}
			</span>
		</button>
	</a>
</template>

<script>
import {
	FigmaIcon,
	TwitterIcon,
	LinkedinIcon,
	GithubIcon,
	DribbbleIcon,
	CoffeeIcon,
} from 'vue-feather-icons'

export default {
	name: 'Social',
	components: {
		FigmaIcon,
		TwitterIcon,
		LinkedinIcon,
		GithubIcon,
		DribbbleIcon,
		CoffeeIcon,
	},
	props: {
		social: {
			type: Object,
			default: () => {
				'No posts are loaded'
			},
		},
	},
}
</script>
