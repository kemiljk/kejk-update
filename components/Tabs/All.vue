<template>
  <div>
    <header>
      <h2
        class="inline-block max-w-max border-b-2 border-neutral-100 text-2xl dark:border-neutral-800"
      >
        Articles.
      </h2>
    </header>
    <div
      class="grid-row xs:grid-cols-1 grid gap-8 sm:grid-cols-2"
      v-if="blogs.blogList"
    >
      <div v-for="(blog, index) in blogs.blogList" :key="index">
        <keep-alive>
          <BlogCard :blog="blog" />
        </keep-alive>
      </div>
    </div>
    <LayoutDivider />
    <div>
      <header>
        <h2
          class="inline-block max-w-max border-b-2 border-neutral-100 text-2xl dark:border-neutral-800"
        >
          External posts.
        </h2>
      </header>
      <div class="grid-row xs:grid-cols-1 grid gap-8 sm:grid-cols-2">
        <div v-for="link in links" :key="link._id">
          <keep-alive>
            <LinkCard :link="link" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cosmic from 'cosmicjs'

const api = Cosmic()
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
})

export default {
  name: 'AllTab',
  computed: {
    blogs() {
      let blogs = this.$store.getters.getBlog
      let blogList = []

      blogs.forEach(function (blog) {
        blogList.push(blog)
      })

      return { blogList: blogList }
    },
  },
  data() {
    return {
      links: {},
      bookmarks: {},
    }
  },
  created() {
    this.getLinksData()
    this.getBookmarksData()
  },
  methods: {
    async getLinksData() {
      this.loading = true
      await bucket
        .getObjects({
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
    async getBookmarksData() {
      this.loading = true
      await bucket
        .getObjects({
          query: {
            type: 'bookmarks',
          },
          props: '_id,title,metadata,created_at',
          sort: '-created_at',
        })
        .then((data) => {
          const bookmarks = data.objects
          this.loading = false
          this.bookmarks = bookmarks
        })
    },
  },
}
</script>
