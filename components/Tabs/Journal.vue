<template>
  <div>
    <header>
      <h2
        class="text-2xl inline-block border-b-2 border-neutral-100 dark:border-neutral-800 max-w-max"
      >
        Journal.
      </h2>
    </header>
    <div
      class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8"
      v-if="blogs.blogList"
    >
      <div v-for="blog in blogs.blogList" :key="blog.metadata.tag">
        <keep-alive>
          <BlogCard :blog="blog" v-show="blog.metadata.tag === 'journal'" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JournalTab",
  computed: {
    blogs() {
      let blogs = this.$store.getters.getBlog;
      let blogList = [];
      blogs.forEach(function(blog) {
        if (blog.metadata.tag === "journal") {
          blogList.push(blog);
        } else {
          return;
        }
      });
      return { blogList: blogList };
    },
  },
};
</script>
