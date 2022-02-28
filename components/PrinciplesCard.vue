<template>
	<div
		class="w-full rounded-lg bg-neutral-50 p-4 hover:shadow hover:ring hover:ring-neutral-300 dark:bg-neutral-900 dark:hover:ring-neutral-600"
	>
		<header class="items-top flex justify-start">
			<h3
				class="mb-0 w-full pt-0 text-lg font-bold text-black dark:text-white"
			>
				{{ principle.title }}
			</h3>
		</header>
		<!-- <p
      class="text-neutral-700 dark:text-neutral-300 pt-2 pb-4 font-medium mb-0 text-base"
      v-html="principle.content"
    ></p> -->
	</div>
</template>

<script>
export default {
	name: 'Principle',
	props: {
		principle: {
			type: Object,
			default: () => {
				'No posts are loaded'
			},
		},
	},
}
</script>
