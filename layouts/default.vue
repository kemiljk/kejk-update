<template>
	<div class="h-full w-full pb-16">
		<div>
			<Nuxt />
		</div>
		<div class="flex w-full items-center justify-center px-4 pt-16">
			<p
				class="w-full rounded-lg bg-neutral-50 p-4 text-center text-black dark:bg-neutral-900 dark:text-white md:w-2/3 lg:w-1/3"
			>
				This site, and all of my work, is dedicated to my hero, my
				inspiration, and the strongest man I've ever known. My father. I
				love you Dad ❤️.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			bodyAttrs: {
				class: 'bg-white dark:bg-black',
			},
		}
	},
}
</script>
