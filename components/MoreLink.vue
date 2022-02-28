<template>
  <NuxtLink
    :to="linkLocation"
    class="mt-4 flex w-full flex-row justify-between rounded-md bg-neutral-50 px-4 py-2 text-black no-underline transition-all ease-in hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 md:w-max"
  >
    <slot></slot>
    <arrow-right-icon
      class="ml-2 text-neutral-700 dark:text-neutral-300"
    ></arrow-right-icon>
  </NuxtLink>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'

export default {
  props: ['link'],
  components: {
    ArrowRightIcon,
  },
  computed: {
    linkLocation() {
      return {
        home: '/',
        about: '/about',
        thoughts: '/thoughts',
        uses: '/uses',
      }[this.link]
    },
  },
}
</script>
