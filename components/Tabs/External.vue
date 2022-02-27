<template>
  <div>
    <header>
      <h2
        class="text-2xl inline-block border-b-2 border-neutral-100 dark:border-neutral-800 max-w-max"
      >
        Links.
      </h2>
    </header>
    <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8">
      <div v-for="link in links" :key="link._id">
        <keep-alive>
          <LinkCard :link="link" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Cosmic from "cosmicjs";
const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
});

export default {
  name: "ExternalTab",
  data() {
    return {
      links: {},
    };
  },
  created() {
    this.getLinksData();
  },
  methods: {
    async getLinksData() {
      this.loading = true;
      await bucket
        .getObjects({
          query: {
            type: "links",
          },
          props: "_id,slug,title,content,metadata,created_at",
          sort: "-created_at",
        })
        .then((data) => {
          const links = data.objects;
          this.loading = false;
          this.links = links;
        });
    },
  },
};
</script>
