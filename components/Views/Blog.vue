<template>
	<div class="-mt-24">
		<div class="flex flex-row text-left" v-if="blog">
			<div class="col-span-full flex flex-col md:col-span-6">
				<Header class="pt-24">
					{{ blog.title }}
				</Header>
				<div class="flex items-center justify-start space-x-2 pt-2">
					<Tag color="teal">
						{{ blog.metadata.tag }}
					</Tag>
					<p
						class="mb-0 font-mono text-neutral-500 dark:text-neutral-400"
					>
						Updated {{ blog.modified_at | moment('from', 'now') }}
					</p>
				</div>
			</div>
		</div>
		<div>
			<section
				v-html="blog.content"
				class="mt-16 text-black dark:text-neutral-300"
			/>
		</div>
	</div>
</template>

<script>
import { createMeta } from '~/utils/createMeta.js'
import { TwitterIcon } from 'vue-feather-icons'
import { LinkedinIcon } from 'vue-feather-icons'

export default {
	name: 'Blog',
	props: {
		blog: {
			type: Object,
			default: () => {},
		},
	},
	component: {
		TwitterIcon,
		LinkedinIcon,
	},
	head() {
		return createMeta({
			title: this.blog.title,
			description: this.blog.metadata.snippet,
			imageUrl: this.blog.metadata.hero.imgix_url,
			url: 'https://kejk.tech/thoughts/' + `${this.$route.params.id}`,
			link: [{ rel: 'canonical', href: 'https://kejk.tech/thoughts' }],
		})
	},
}
</script>
