<template>
	<div class="relative mx-auto">
		<Nav>
			<NavItem to="/">Home</NavItem>
			<NavItem to="/thoughts" isActive v-scroll-to="'#THOUGHTS'"
				>Thoughts</NavItem
			>
			<NavItem to="/creations">Creations</NavItem>
			<NavItem to="/projects">Projects</NavItem>
			<NavItem href="https://bookmarks.kejk.tech" extLink>
				<span class="flex items-center">
					Bookmarks
					<arrow-up-right-icon
						size="1x"
						class="ml-2 text-neutral-700 dark:text-neutral-300"
					></arrow-up-right-icon>
				</span>
			</NavItem>
			<NavItem to="/uses">Uses</NavItem>
		</Nav>
		<div class="mx-auto px-4" id="THOUGHTS">
			<div class="container mx-auto max-w-3xl pb-2">
				<div class="flex flex-row pt-4 pb-8">
					<BackLink link="thoughts"> Back to all posts </BackLink>
				</div>
				<keep-alive>
					<ViewsBlog v-if="page" :blog="page" />
				</keep-alive>
				<div class="flex flex-row py-8">
					<BackLink link="thoughts"> Back to all posts </BackLink>
				</div>
				<LayoutDivider />
				<header>
					<h2>How to follow along</h2>
				</header>
				<SubscribeCard />
			</div>
		</div>
	</div>
</template>

<script>
import { ArrowUpRightIcon } from 'vue-feather-icons'
import getBlog from '../../queries/getBlog'
import Prism from '~/plugins/prism'

export default {
	name: 'BlogView',
	components: {
		ArrowUpRightIcon,
	},
	async asyncData({ app, route, redirect }) {
		// let data = {};
		try {
			const d = await app.apolloProvider.defaultClient.query({
				query: getBlog,
				variables: { slug: route.params.id },
			})
			const data = d.data
			console.log('data', data)
			return {
				page: data.getObject,
			}
		} catch (error) {
			console.log('error', error)
			redirect('/thoughts')
		}
	},
	mounted() {
		Prism.highlightAll()
	},
	computed: {
		myRoute() {
			return this.$route.params.id
		},
	},
}
</script>
