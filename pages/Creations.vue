<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem to="/creations" isActive id="PRODUCTS" v-scroll-to="'#PRODUCTS'"
        >Creations</NavItem
      >
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
    <div class="mx-auto max-w-5xl px-4">
      <Header class="pt-24 text-left md:text-center">/creations</Header>
      <Subheader class="text-left md:text-center">
        <template #text>
          Apps, plugins and tools I've built, available for free
        </template>
      </Subheader>
      <Loading v-if="this.loading === true" />
      <div class="flex">
        <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          <div v-for="app in apps" :key="app.title">
            <keep-alive>
              <CreationsCard :app="app" />
            </keep-alive>
          </div>
        </div>
      </div>
      <H2Header class="pt-16">Utilities</H2Header>
      <div class="flex pt-2">
        <div class="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
          <div v-for="utility in utilities" :key="utility.title">
            <keep-alive>
              <UtilityCard :utility="utility" />
            </keep-alive>
          </div>
        </div>
      </div>
      <LayoutDivider />
      <H2Header id="GET_IN_TOUCH">How to reach me</H2Header>
      <GetInTouch />
    </div>
  </div>
</template>

<script>
import {
  InfoIcon,
  MailIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from 'vue-feather-icons'
import { createMeta } from '~/utils/createMeta.js'

const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
})

export default {
  name: 'CreationsGrid',
  head() {
    return createMeta({
      title: 'Creations | KEJK',
      description:
        'A Product and Frontend Designer, building for the web with Vue, Nuxt and Tailwind, building for mobile with SwiftUI.',
      url: 'https://kejk.tech/creations',
      link: [{ rel: 'canonical', href: 'https://kejk.tech/creations' }],
    })
  },
  components: {
    InfoIcon,
    MailIcon,
    ArrowRightIcon,
    ArrowUpRightIcon,
  },
  data() {
    return {
      loading: false,
      apps: {},
      utilities: {},
      slug: '',
      id: '',
    }
  },
  created() {
    this.slug = this.$route.params.slug
    this.id = this.$route.params.id
    this.getAppsData()
    this.getUtilitiesData()
  },
  methods: {
    async getAppsData() {
      this.error = this.app = null
      this.loading = true
      await bucket
        .getObjects({
          query: {
            type: 'apps',
          },
          props: '_id,slug,title,content,metadata',
        })
        .then((data) => {
          const apps = data.objects
          this.loading = false
          this.apps = apps
        })
    },
    async getUtilitiesData() {
      this.error = this.utility = null
      this.loading = true
      await bucket
        .getObjects({
          query: {
            type: 'utilities',
          },
          props: '_id,title,metadata',
        })
        .then((data) => {
          const utilities = data.objects
          this.loading = false
          this.utilities = utilities
        })
    },
  },
}
</script>
