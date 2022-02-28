<template>
	<button
		class="ease flex w-full items-center justify-center rounded-lg px-6 py-3 text-center font-medium no-underline transition duration-500"
		:class="colorClasses"
	>
		<slot name="icon" />
		<slot name="label" />
	</button>
</template>

<script>
export default {
	props: ['color'],
	computed: {
		colorClasses() {
			return {
				red: 'text-red-50 bg-red-500 hover:bg-red-600',
				blue: 'bg-blue-500 text-white hover:bg-blue-600',
				purple: 'bg-purple-900 hover:bg-purple-700 text-purple-100',
				teal: 'text-teal-50 bg-teal-600 hover:bg-teal-700',
				grey: 'bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-white hover:shadow hover:ring hover:ring-neutral-300 dark:hover:ring-neutral-600',
				white: 'bg-black hover:bg-neutral-800 dark:bg-white text-white dark:text-neutral-900 dark:hover:bg-neutral-100 hover:shadow hover:ring hover:ring-neutral-300 dark:hover:ring-neutral-600',
			}[this.color]
		},
	},
}
</script>
