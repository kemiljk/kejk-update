<template>
	<div
		class="w-full rounded-lg border border-neutral-200 p-4 text-left transition duration-300 ease-out hover:bg-neutral-50 hover:shadow hover:ring hover:ring-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:ring-neutral-600"
	>
		<a
			:href="media.metadata.url"
			target="`_blank"
			rel="noreferrer"
			class="no-underline"
		>
			<div class="flex flex-col justify-between">
				<header class="mb-4 flex justify-between">
					<img
						:src="media.metadata.cover.imgix_url"
						class="max-h-24 rounded-lg"
						alt="Image of media"
					/>
					<arrow-up-right-icon
						class="shrink-0 text-neutral-700 dark:text-neutral-300"
						size="1x"
					></arrow-up-right-icon>
				</header>
				<div
					class="divide-y divide-solid divide-neutral-300 dark:divide-neutral-800"
				>
					<div class="mb-4 flex space-x-2">
						<Tag color="yellow" v-if="media.metadata.indie"
							>Indie
						</Tag>
						<Tag color="purple" v-if="media.metadata.open_source"
							>Open source
						</Tag>
					</div>
					<h4
						class="pt-2 text-sm font-bold text-neutral-900 dark:text-neutral-100"
					>
						{{ media.title }}
					</h4>
				</div>
				<p
					class="mb-0 text-sm font-normal text-neutral-500 dark:text-neutral-400"
				>
					{{ media.metadata.subtitle }}
				</p>
			</div>
		</a>
	</div>
</template>

<script>
import { ArrowUpRightIcon } from 'vue-feather-icons'

export default {
	name: 'Media',
	components: {
		ArrowUpRightIcon,
	},
	props: {
		media: {
			type: Object,
			default: () => {
				'No posts are loaded'
			},
		},
	},
}
</script>
