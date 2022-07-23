<template>
	<div class="flex w-full items-center justify-center">
		<svg
			class="-ml-1 mr-3 h-5 w-5 animate-spin text-neutral-600 dark:text-neutral-400"
			style="z-index: -1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<path
				class="fill-current text-neutral-600 dark:text-neutral-400"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
		<h3 class="text-md font-md text-neutral-600 dark:text-neutral-400">
			Loading...
		</h3>
	</div>
</template>

<script>
export default {
	name: 'Loading',
}
</script>
