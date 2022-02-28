<template>
  <div
    v-if="utility.metadata.url"
    class="max-w-5/6 w-full cursor-pointer rounded-md bg-neutral-50 p-4 text-left transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow-lg dark:bg-neutral-900 dark:hover:bg-neutral-800"
  >
    <a
      :href="utility.metadata.url"
      target="`_blank"
      rel="noreferrer"
      class="no-underline"
    >
      <header class="flex w-full justify-between">
        <div class="flex w-full max-w-xl">
          <div class="flex w-full flex-col justify-between">
            <div class="mb-4 flex items-center justify-between">
              <div class="flex space-x-2">
                <Tag color="yellow" v-if="utility.metadata.ios">iOS </Tag>
                <Tag color="purple" v-if="utility.metadata.macos">macOS </Tag>
              </div>
              <compass-icon
                v-if="utility.metadata.website"
                size="1x"
                class="hidden shrink-0 text-neutral-700 dark:text-neutral-300 sm:block"
              ></compass-icon>
              <download-icon
                v-if="utility.metadata.download"
                class="hidden shrink-0 text-neutral-700 dark:text-neutral-300 sm:block"
                size="1x"
              ></download-icon>
            </div>
            <h4
              class="text-sm font-bold text-neutral-900 dark:text-neutral-100"
            >
              {{ utility.title }}
            </h4>
            <p
              class="mb-0 text-sm font-normal text-neutral-500 dark:text-neutral-400"
            >
              {{ utility.metadata.subtitle }}
            </p>
          </div>
        </div>
      </header>
    </a>
  </div>
  <!-- <div v-else>
    <nuxt-link :to="utility.metadata.to" rel="noreferrer" cursor="pointer">
      <button
        class="w-full rounded-md bg-neutral-100 text-left transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white dark:bg-neutral-900 dark:hover:bg-neutral-800"
      >
        <div class="p-4">
          <header class="flex justify-between">
            <div class="flex max-w-xl">
              <img
                :src="utility.metadata.cover.imgix_url"
                class="mr-4 max-h-24 rounded-md sm:max-h-28"
                alt="Image of media"
              />
              <div>
                <div class="mb-4 flex space-x-2">
                  <Tag color="yellow" v-if="utility.metadata.ios">iOS </Tag>
                  <Tag color="purple" v-if="utility.metadata.macos">macOS </Tag>
                </div>
                <h4
                  class="pt-4 text-sm font-bold text-neutral-900 dark:text-neutral-100"
                >
                  {{ utility.title }}
                </h4>
                <p
                  class="mb-0 pt-1 text-sm font-normal text-neutral-500 dark:text-neutral-400"
                >
                  {{ utility.metadata.subtitle }}
                </p>
              </div>
            </div>
            <arrow-right-icon
              v-if="utility.metadata.internal"
              class="text-neutral-700 dark:text-neutral-300"
            ></arrow-right-icon>
          </header>
        </div>
      </button>
    </nuxt-link>
  </div> -->
</template>

<script>
import {
  ArrowRightIcon,
  CompassIcon,
  DownloadIcon,
  HeartIcon,
} from 'vue-feather-icons'

export default {
  name: 'App',
  components: {
    ArrowRightIcon,
    CompassIcon,
    DownloadIcon,
    HeartIcon,
  },
  props: {
    utility: {
      type: Object,
      default: () => {
        'No posts are loaded'
      },
    },
  },
}
</script>
