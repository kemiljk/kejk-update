<template>
  <NuxtLink
    :to="linkLocation"
    class="flex flex-row justify-between w-full md:w-max mt-4 text-black  bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-white rounded-xl px-4 py-2 no-underline ease-in transition-all"
  >
    <slot></slot>
    <arrow-right-icon
      class="text-neutral-700 dark:text-neutral-300 ml-2"
    ></arrow-right-icon>
  </NuxtLink>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  props: ["link"],
  components: {
    ArrowRightIcon,
  },
  computed: {
    linkLocation() {
      return {
        home: "/",
        about: "/about",
        thoughts: "/thoughts",
        uses: "/uses",
      }[this.link];
    },
  },
};
</script>
