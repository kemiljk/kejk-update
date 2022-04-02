<template>
	<div
		class="w-full rounded-lg border border-neutral-200 p-4 text-left transition duration-300 ease-out hover:bg-neutral-50 hover:shadow hover:ring hover:ring-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:ring-neutral-600"
	>
		<a
			:href="helpedMake.metadata.url"
			target="`_blank"
			rel="noreferrer"
			class="no-underline"
		>
			<header class="flex w-full justify-between">
				<div class="flex w-full">
					<img
						:src="helpedMake.metadata.cover.imgix_url"
						class="mr-4 max-h-20 rounded sm:max-h-16"
						alt="Image of media"
					/>
					<div class="flex w-full flex-col justify-between">
						<div class="flex w-full items-start justify-between">
							<h4
								class="text-sm font-bold text-neutral-900 dark:text-neutral-100"
							>
								{{ helpedMake.title }}
							</h4>
							<compass-icon
								v-if="helpedMake.metadata.website"
								class="mt-1 text-neutral-700 dark:text-neutral-300"
								size="1x"
							></compass-icon>
							<download-icon
								v-if="helpedMake.metadata.download"
								class="mt-1 text-neutral-700 dark:text-neutral-300"
								size="1x"
							></download-icon>
						</div>
						<p
							class="mb-0 text-sm font-normal text-neutral-500 dark:text-neutral-400"
						>
							{{ helpedMake.metadata.subtitle }}
						</p>
					</div>
				</div>
			</header>
			<div class="mt-4 flex space-x-2">
				<Tag color="yellow" v-if="helpedMake.metadata.design"
					>Design</Tag
				>
				<Tag color="purple" v-if="helpedMake.metadata.development"
					>Code</Tag
				>
				<Tag color="pink" v-if="helpedMake.metadata.brand">Brand</Tag>
				<Tag color="blue" v-if="helpedMake.metadata.consultancy">Consultancy</Tag>
			</div>
		</a>
	</div>
</template>

<script>
import { DownloadIcon, CompassIcon } from 'vue-feather-icons'

export default {
	name: 'HelpedMake',
	components: {
		CompassIcon,
		DownloadIcon,
	},
	props: {
		helpedMake: {
			type: Object,
			default: () => {
				'No posts are loaded'
			},
		},
	},
}
</script>
