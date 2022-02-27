<template>
  <NuxtLink
    :to="backLink"
    class="z-10 rounded-xl border-2 border-neutral-500 px-4 py-2 text-black no-underline transition duration-200 ease-in-out hover:bg-neutral-50 dark:text-white dark:hover:bg-neutral-900"
  >
    <div class="flex items-center justify-between font-medium">
      <arrow-left-icon
        class="mr-2 text-neutral-700 dark:text-neutral-300"
      ></arrow-left-icon>
      <slot />
    </div>
  </NuxtLink>
</template>

<script>
import { ArrowLeftIcon } from "vue-feather-icons";

export default {
  props: ["link"],
  components: {
    ArrowLeftIcon,
  },
  computed: {
    backLink() {
      return {
        home: "/",
        about: "/about",
        thoughts: "/thoughts",
        bookmarks: "/bookmarks",
        uses: "/uses",
        project: "/projects",
      }[this.link];
    },
  },
};
</script>
