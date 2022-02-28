<template v-if="portfolio.metadata">
  <div class="mt-0 pt-4">
    <div class="flex flex-row text-left">
      <div class="col-span-full flex flex-col md:col-span-6">
        <Header class="text-left md:text-center">
          {{ portfolio.title }}
        </Header>
        <h3 class="text-left md:text-center">
          {{ portfolio.metadata.description }}
        </h3>
        <img
          :src="portfolio.metadata.featured.imgix_url"
          class="mt-4 w-full rounded-md"
        />
      </div>
    </div>
    <div>
      <section
        v-html="portfolio.content"
        class="mt-8 text-black dark:text-neutral-300"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  props: {
    portfolio: {
      type: Object,
      default: () => {},
    },
  },
  head() {
    return createMeta({
      title: this.portfolio.title,
      description: this.portfolio.metadata.description,
      imageUrl: this.portfolio.metadata.featured.imgix_url,
      url: 'https://kejk.tech/projects/' + `${this.$route.params.id}`,
      link: [{ rel: 'canonical', href: 'https://kejk.tech/projects' }],
    })
  },
}
</script>
