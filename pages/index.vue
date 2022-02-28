<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/" isActive id="HOME" v-scroll-to="'#HOME'">Home</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
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
    <div class="mx-auto max-w-5xl px-4">
      <div>
        <div
          class="text-md pt-24 text-left font-medium uppercase leading-normal tracking-wider text-neutral-600 dark:text-neutral-400 md:text-center"
        >
          Karl Emil James Koch
        </div>
        <Header class="pt-4 text-left md:text-center">
          {{ home.title }}
          <Loading v-if="this.loading === true" />
        </Header>
        <Subheader>
          <template #text>
            <keep-alive>
              <span v-html="home.content" />
            </keep-alive>
          </template>
          <template #buttons>
            <div class="flex flex-col md:flex-row md:space-x-2">
              <NuxtLink to="/about" class="no-underline">
                <Button color="white">
                  <template #icon>
                    <info-icon
                      size="1x"
                      class="mr-2 inline-block text-neutral-50 dark:text-neutral-900"
                    />
                  </template>
                  <template #label> More about me </template>
                </Button>
              </NuxtLink>
              <a href="#" v-scroll-to="'#GET_IN_TOUCH'" class="no-underline">
                <Button color="grey" class="mt-2 md:mt-0">
                  <template #icon>
                    <mail-icon
                      size="1x"
                      class="mr-2 inline-block text-neutral-800 dark:text-white"
                    />
                  </template>
                  <template #label> Get in touch </template>
                </Button>
              </a>
            </div>
          </template>
        </Subheader>
      </div>
      <div
        class="pt-8 text-sm uppercase leading-normal tracking-wider text-neutral-600 dark:text-neutral-400"
      >
        Currently
      </div>
      <div
        class="mx-auto flex flex-col items-start justify-center text-left text-black dark:text-white md:flex-row md:space-x-12"
      >
        <div>
          <div
            class="flex pt-4 text-sm font-bold text-neutral-800 dark:text-neutral-200"
          >
            Full-time <span class="ml-2 font-mono text-teal-500">———</span>
          </div>
          <IconText class="flex items-center">
            <template #icon>
              <IconsMoneyboxIcon
                class="mr-4 border border-neutral-200 dark:border-none"
              />
            </template>
            <template #text>
              Product Designer and Design Systems Lead at
              <a
                href="https://www.moneyboxapp.com"
                target="_blank"
                rel="noreferrer"
                >Moneybox</a
              >.
            </template>
          </IconText>
          <div class="flex items-center space-x-12">
            <IconText class="mr-2 flex items-center">
              <template #icon>
                <IconsMapIcon class="mr-4" />
              </template>
              <template #text> London, UK </template>
            </IconText>
            <IconText class="flex items-center">
              <template #icon>
                <IconsGlobeIcon class="mr-4" />
              </template>
              <template #text> 🇬🇧🇩🇰 </template>
            </IconText>
          </div>
        </div>
        <div>
          <div
            class="flex pt-8 text-sm font-bold text-neutral-800 dark:text-neutral-200 md:pt-4"
          >
            On the side <span class="ml-2 font-mono text-teal-500">———</span>
          </div>
          <IconText class="flex items-center">
            <template #icon>
              <IconsCosmicIcon
                class="mr-4 rounded-full border border-neutral-200 dark:border-none"
              />
            </template>
            <template #text>
              Leading design for the best API-first headless CMS out there at
              <a
                href="https://www.cosmicjs.com"
                target="_blank"
                rel="noreferrer"
                >Cosmic</a
              >.
            </template>
          </IconText>
          <IconText class="flex items-center">
            <template #icon>
              <IconsLocallyIcon class="mr-4" />
            </template>
            <template #text>
              Designing and building powerful business technologies with
              <a
                href="https://www.locallyuk.tech"
                target="_blank"
                rel="noreferrer"
                >Locally UK</a
              >.
            </template>
          </IconText>
        </div>
      </div>
      <LayoutDivider />
      <H2Header> Built for myself... and everyone else </H2Header>
      <div class="flex flex-row pt-4">
        <div class="grid w-full gap-4 sm:grid-cols-2">
          <PluginCard :plugin="plugin" />
          <div v-for="app in apps" :key="app.title">
            <keep-alive>
              <AppCard :app="app" />
            </keep-alive>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="utility in utilities" :key="utility.title">
              <keep-alive>
                <UtilityCard :utility="utility" />
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
      <LayoutDivider />
      <H2Header> Thoughts, ideas, and more </H2Header>
      <div class="flex w-full pt-4">
        <div class="grid-row xs:grid-cols-1 grid w-full gap-8 sm:grid-cols-2">
          <div v-for="blog in blogs" :key="blog._id">
            <keep-alive>
              <BlogCard :blog="blog" />
            </keep-alive>
          </div>
          <div v-for="link in links" :key="link._id">
            <keep-alive>
              <LinkCard :link="link" />
            </keep-alive>
          </div>
        </div>
      </div>
      <MoreLink link="thoughts" class="text-base">See All</MoreLink>
      <LayoutDivider />
      <H2Header> Features and speaking</H2Header>
      <div class="flex flex-row py-4">
        <div class="grid w-full gap-4 sm:grid-cols-2">
          <div v-for="feature in features" :key="feature.title">
            <FeaturesCard :feature="feature" />
          </div>
        </div>
      </div>
      <LayoutDivider />
      <H2Header> Making sounds </H2Header>
      <div class="flex flex-row pt-4">
        <div
          class="grid-row xs:grid-cols-1 grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          <div v-for="album in albums" :key="album._id">
            <keep-alive>
              <AlbumCard :album="album" />
            </keep-alive>
          </div>
        </div>
      </div>
      <LayoutDivider />
      <H2Header id="GET_IN_TOUCH">How to reach me</H2Header>
      <GetInTouch class="text-base" />
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
  computed: {
    meta() {
      const metaData = {
        title: 'Home | KEJK',
        description:
          'A Product and Frontend Designer, building for the web with Vue, Nuxt and Tailwind, building for mobile with SwiftUI.',
        url: 'https://kejk.tech/',
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Home | KEJK',
      meta: [...this.meta],
      link: [{ rel: 'canonical', href: 'https://kejk.tech/' }],
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
      home: {},
      apps: {},
      albums: {},
      mades: {},
      utilities: {},
      links: {},
      blogs: {},
      plugin: {},
      features: {},
      slug: '',
    }
  },
  created() {
    this.slug = this.$route.params.slug
    this.getHomeData()
    this.getAppsData()
    this.getBlogsData()
    this.getLinksData()
    this.getUtilitiesData()
    this.getAlbumsData()
    this.getFeaturesData()
  },
  methods: {
    async getHomeData() {
      this.loading = true
      await bucket
        .getObject({
          id: '61f98a81e6ceb800089b8e9a',
          props: 'id,title,content,metadata',
        })
        .then((data) => {
          this.home = data.object
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
        })
        .then((data) => {
          const apps = data.objects
          this.loading = false
          this.apps = apps
        })
    },
    async getBlogsData() {
      this.error = this.blog = null
      this.loading = true
      await bucket
        .getObjects({
          limit: 1,
          query: {
            type: 'blogs',
          },
          props: '_id,slug,title,content,metadata,created_at,modified_at',
          sort: '-created_at',
        })
        .then((data) => {
          const blogs = data.objects
          this.loading = false
          this.blogs = blogs
        })
    },
    async getLinksData() {
      this.error = this.link = null
      this.loading = true
      await bucket
        .getObjects({
          limit: 1,
          query: {
            type: 'links',
          },
          props: '_id,slug,title,content,metadata,created_at',
          sort: '-created_at',
        })
        .then((data) => {
          const links = data.objects
          this.loading = false
          this.links = links
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
    async getAlbumsData() {
      this.error = this.album = null
      this.loading = true
      await bucket
        .getObjects({
          query: {
            type: 'albums',
          },
          props: '_id,title,metadata',
        })
        .then((data) => {
          const albums = data.objects
          this.loading = false
          this.albums = albums
        })
    },
    async getFeaturesData() {
      this.error = this.feature = null
      this.loading = true
      await bucket
        .getObjects({
          query: {
            type: 'features',
          },
          props: '_id,slug,title,metadata',
        })
        .then((data) => {
          const features = data.objects
          this.loading = false
          this.features = features
        })
    },
  },
}
</script>
