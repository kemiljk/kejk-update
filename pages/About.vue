<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/" isActive>Home</NavItem>
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
    <div class="mx-auto max-w-3xl px-4">
      <Header class="pt-24 text-left md:text-center">/about</Header>
      <div class="flex flex-row pt-8">
        <keep-alive>
          <Loading v-if="this.loading === true" />
          <ViewsAbout :about="about" />
        </keep-alive>
      </div>
      <H2Header class="pt-8"> My guiding principles </H2Header>
      <div class="flex flex-row py-4">
        <div class="grid w-full gap-4 sm:grid-cols-2">
          <div v-for="principle in principles" :key="principle.title">
            <PrinciplesCard :principle="principle" />
          </div>
        </div>
      </div>
      <div class="flex flex-col pt-8 sm:flex-row sm:space-x-2">
        <a
          class="py-2 no-underline sm:py-4"
          href="https://changelog.kejk.tech"
          target="_blank"
        >
          <Button color="teal" class="w-full sm:w-max">
            <template #icon>
              <arrow-up-right-icon
                size="1x"
                class="mr-2 inline-block text-teal-50"
              />
            </template>
            <template #label> My personal changelog </template>
          </Button>
        </a>
        <NuxtLink class="no-underline sm:py-4" to="/uses">
          <Button color="white" class="w-full sm:w-max">
            <template #icon>
              <arrow-right-icon
                size="1x"
                class="mr-2 inline-block text-teal-50 dark:text-neutral-900"
              />
            </template>
            <template #label> What I use to get work done </template>
          </Button>
        </NuxtLink>
      </div>
      <LayoutDivider />
      <H2Header id="GET_IN_TOUCH">How to reach me</H2Header>
      <GetInTouch />
    </div>
  </div>
</template>

<script>
import { ArrowUpRightIcon, ArrowRightIcon } from 'vue-feather-icons'
import { createMeta } from '~/utils/createMeta'

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
        title: 'About | KEJK',
        description:
          'Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.',
        url: 'https://kejk.tech/about',
        mainImage:
          'https://imgix.cosmicjs.com/0321b940-98bf-11ec-8bb7-91577e4f4933-meta.png',
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'About | KEJK',
      meta: [...this.meta],
      link: [{ rel: 'canonical', href: 'https://kejk.tech/about' }],
    }
  },
  components: {
    ArrowUpRightIcon,
    ArrowRightIcon,
  },
  data() {
    return {
      loading: false,
      about: {},
      principles: {},
    }
  },
  created() {
    this.fetchAboutData()
    this.fetchPrinciplesData()
  },
  methods: {
    async fetchAboutData() {
      this.loading = true
      await bucket
        .getObject({
          id: '5fdb8a89a42cd10007b3cb29',
          props: 'slug,title,content',
        })
        .then((data) => {
          this.about = data.object
          this.loading = false
        })
    },
    async fetchPrinciplesData() {
      this.error = this.principle = null
      this.loading = true
      await bucket
        .getObjects({
          query: {
            type: 'principles',
          },
          props: '_id,title,content',
        })
        .then((data) => {
          const principles = data.objects
          this.loading = false
          this.principles = principles
        })
    },
  },
}
</script>
