<template>
	<div
		v-if="plugin.title"
		class="w-full cursor-pointer rounded-lg bg-neutral-50 text-left transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow hover:ring hover:ring-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:ring-neutral-600"
	>
		<a
			:href="plugin.metadata.url"
			target="`_blank"
			rel="noreferrer"
			class="no-underline"
		>
			<div>
				<header class="flex justify-between">
					<img
						:src="plugin.metadata.cover.imgix_url"
						class="rounded-tl-lg-xl rounded-tr-lg-xl h-full w-full"
						alt="Image of media"
					/>
				</header>
				<div class="p-4">
					<div class="flex w-full items-center justify-between">
						<h4
							class="text-sm font-bold text-neutral-900 dark:text-neutral-100"
						>
							{{ plugin.title }}
						</h4>
						<compass-icon
							v-if="plugin.metadata.website"
							class="text-neutral-700 dark:text-neutral-300"
							size="1x"
						></compass-icon>
						<download-icon
							v-if="plugin.metadata.download"
							class="text-neutral-700 dark:text-neutral-300"
							size="1x"
						></download-icon>
					</div>
					<div class="flex space-x-1">
						<Tag color="pink">Figma</Tag>
						<Tag color="yellow">FigJam</Tag>
					</div>
					<p
						class="mb-0 pt-1 text-sm font-normal text-neutral-500 dark:text-neutral-400"
					>
						{{ plugin.metadata.subtitle }}
					</p>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'

export default {
	name: 'CreationsCard',
	components: {
		ArrowRightIcon,
	},
	props: {
		Plugin: {
			type: Object,
			default: () => {
				'No posts are loaded'
			},
		},
	},
}
</script>
