<template>
  <div
    class="w-full cursor-pointer select-none rounded-md border border-neutral-200 p-4 text-left transition duration-300 ease-out hover:bg-neutral-50 hover:shadow-lg dark:border-neutral-800 dark:hover:bg-neutral-900"
  >
    <a
      :href="feature.metadata.url"
      target="`_blank"
      rel="noreferrer"
      class="no-underline"
    >
      <header class="flex w-full items-start justify-between">
        <h3
          class="mb-0 w-full pt-0 text-base font-bold text-black dark:text-white"
        >
          {{ feature.title }}
        </h3>
        <arrow-up-right-icon
          class="mt-1 ml-2 shrink-0 text-neutral-700 dark:text-neutral-300"
          size="1x"
        ></arrow-up-right-icon>
      </header>
      <div class="flex w-full justify-between pt-2">
        <p
          class="mb-0 font-mono text-sm text-neutral-700 dark:text-neutral-300"
        >
          {{ feature.metadata.published | moment('DD/MM/YYYY') }}
        </p>
        <p class="mb-0 font-mono text-sm text-teal-500">
          {{ feature.metadata.type }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
import { ArrowUpRightIcon } from 'vue-feather-icons'

export default {
  name: 'Feature',
  components: {
    ArrowUpRightIcon,
  },
  props: {
    feature: {
      type: Object,
      default: () => {
        'No posts are loaded'
      },
    },
  },
}
</script>
