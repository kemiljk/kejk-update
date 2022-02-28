<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem to="/creations">Creations</NavItem>
      <NavItem to="/projects" isActive id="PROJECTS" v-scroll-to="'#PROJECTS'"
        >Projects</NavItem
      >
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
      <Header class="pt-24 text-left md:text-center">/projects</Header>
      <Loading
        v-if="this.loading === true"
        class="flex w-full justify-center"
      />
      <div class="mt-4 flex flex-row">
        <div class="grid w-full gap-4 sm:grid-cols-2">
          <div v-for="portfolio in portfolios" :key="portfolio.id">
            <keep-alive>
              <PortfolioCard :portfolio="portfolio" />
            </keep-alive>
          </div>
        </div>
      </div>
      <LayoutDivider />
      <Header class="text-left md:text-center">Other work</Header>
      <div
        class="grid-row xs:grid-cols-1 mt-4 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div v-for="helpedMake in helpedMakes" :key="helpedMake.title">
          <keep-alive>
            <HelpedMakeCard :helpedMake="helpedMake" />
          </keep-alive>
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
import getSiteMeta from '~/utils/getSiteMeta.js'

const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
})

export default {
  name: 'PortfolioGrid',
  computed: {
    meta() {
      const metaData = {
        title: 'Projects | KEJK',
        description:
          'A Product and Frontend Designer, building for the web with Vue, Nuxt and Tailwind, building for mobile with SwiftUI.',
        url: 'https://kejk.tech/',
        mainImage:
          'https://imgix.cosmicjs.com/0321b940-98bf-11ec-8bb7-91577e4f4933-meta.png',
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Projects | KEJK',
      meta: [...this.meta],
      link: [{ rel: 'canonical', href: 'https://kejk.tech/projects' }],
    }
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
      portfolios: {},
      plugin: {},
      apps: {},
      utilities: {},
      helpedMakes: {},
      slug: '',
      id: '',
    }
  },
  created() {
    this.slug = this.$route.params.slug
    this.id = this.$route.params.id
    this.getPortfoliosData()
    this.fetchPluginData()
    this.getAppsData()
    this.getUtilitiesData()
    this.getHelpedMakesData()
  },
  methods: {
    async getPortfoliosData() {
      this.error = this.portfolio = null
      this.loading = true
      await bucket
        .getObjects({
          query: {
            type: 'portfolios',
          },
          props: 'id,slug,content,title,metadata',
        })
        .then((data) => {
          const portfolios = data.objects
          this.loading = false
          this.portfolios = portfolios
        })
    },
    async fetchPluginData() {
      this.loading = true
      await bucket
        .getObject({
          id: '605cc05178306b0007588909',
          props: 'slug,title,content,metadata',
        })
        .then((data) => {
          this.plugin = data.object
          this.loading = false
        })
    },
    async getAppsData() {
      this.error = this.app = null
      this.loading = true
      await bucket
        .getObjects({
          query: {
            type: 'apps',
          },
          props: '_id,slug,title,content,metadata,created_at,modified_at',
          sort: 'created_at',
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
    async getHelpedMakesData() {
      this.error = this.helpedMake = null
      this.loading = true
      await bucket
        .getObjects({
          query: {
            type: 'helpedmakes',
          },
          props: '_id,title,metadata',
        })
        .then((data) => {
          const helpedMakes = data.objects
          this.loading = false
          this.helpedMakes = helpedMakes
        })
    },
  },
}
</script>
