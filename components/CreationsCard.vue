<template>
	<div
		v-if="app.metadata.url"
		class="w-full cursor-pointer rounded-lg bg-neutral-50 text-left transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow hover:ring hover:ring-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:ring-neutral-600"
	>
		<a
			:href="app.metadata.url"
			target="`_blank"
			rel="noreferrer"
			class="no-underline"
		>
			<div>
				<header class="flex justify-between">
					<img
						:src="app.metadata.cover.imgix_url"
						class="h-full w-full rounded-bl-none rounded-tr-lg rounded-tl-lg rounded-br-none"
						alt="Image of media"
					/>
				</header>
				<div class="p-4">
					<div class="flex w-full items-start justify-between">
						<h4
							class="text-md font-bold text-neutral-900 dark:text-neutral-100"
						>
							{{ app.title }}
						</h4>
						<compass-icon
							v-if="app.metadata.website"
							class="mt-1 text-neutral-700 dark:text-neutral-300"
							size="1x"
						></compass-icon>
						<download-icon
							v-if="app.metadata.download"
							class="mt-1 text-neutral-700 dark:text-neutral-300"
							size="1x"
						></download-icon>
					</div>
					<p
						class="mb-0 text-sm font-normal text-neutral-500 dark:text-neutral-400"
					>
						{{ app.metadata.subtitle }}
					</p>
					<div class="flex space-x-2 pt-4">
						<Tag color="yellow" v-if="app.metadata.ios">iOS</Tag>
						<Tag color="blue" v-if="app.metadata.figma">Figma</Tag>
						<Tag color="pink" v-if="app.metadata.figjam"
							>FigJam</Tag
						>
						<Tag color="purple" v-if="app.metadata.macos"
							>macOS</Tag
						>
					</div>
				</div>
			</div>
		</a>
	</div>
	<div v-else>
		<nuxt-link :to="app.metadata.to" rel="noreferrer" cursor="pointer">
			<button
				class="w-full cursor-pointer rounded-lg bg-neutral-50 text-left transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow hover:ring hover:ring-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:ring-neutral-600"
			>
				<header class="flex justify-between">
					<img
						:src="app.metadata.cover.imgix_url"
						class="h-full w-full rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none"
						alt="Image of media"
					/>
				</header>
				<div class="p-4">
					<div class="flex w-full items-center justify-between">
						<h4
							class="text-md font-bold text-neutral-900 dark:text-neutral-100"
						>
							{{ app.title }}
						</h4>
						<download-icon
							v-if="app.metadata.download"
							class="text-neutral-700 dark:text-neutral-300"
							size="1x"
						></download-icon>
					</div>
					<p
						class="mb-0 text-sm font-normal text-neutral-500 dark:text-neutral-400"
					>
						{{ app.metadata.subtitle }}
					</p>
					<div class="flex space-x-2 pt-4">
						<Tag color="yellow" v-if="app.metadata.ios">iOS</Tag>
						<Tag color="blue" v-if="app.metadata.figma">Figma</Tag>
						<Tag color="pink" v-if="app.metadata.figjam"
							>FigJam</Tag
						>
						<Tag color="purple" v-if="app.metadata.macos"
							>macOS</Tag
						>
					</div>
				</div>
			</button>
		</nuxt-link>
	</div>
</template>

<script>
import {
	ArrowUpRightIcon,
	CompassIcon,
	DownloadIcon,
	HeartIcon,
} from 'vue-feather-icons'

export default {
	name: 'CreationsCard',
	components: {
		ArrowUpRightIcon,
		CompassIcon,
		DownloadIcon,
		HeartIcon,
	},
	props: {
		app: {
			type: Object,
			default: () => {
				'No posts are loaded'
			},
		},
	},
}
</script>
