<template>
  <div
    v-if="app.metadata.url"
    class="max-w-5/6 w-full cursor-pointer rounded-md bg-neutral-50 p-4 text-left transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow-lg dark:bg-neutral-900 dark:hover:bg-neutral-800"
  >
    <a
      :href="app.metadata.url"
      target="`_blank"
      rel="noreferrer"
      class="no-underline"
    >
      <header class="flex justify-between">
        <div class="flex w-full">
          <div class="mr-4 sm:w-1/3">
            <img
              :src="app.metadata.cover.imgix_url"
              class="hidden max-h-32 rounded md:block"
              alt="Image of media"
            />
            <img
              :src="app.metadata.mobile_image.imgix_url"
              class="block max-h-32 rounded md:hidden"
              alt="Image of media"
            />
          </div>
          <div class="flex w-full flex-col justify-start">
            <div class="mb-4 flex items-center justify-between">
              <div class="flex space-x-2">
                <Tag color="blue" v-if="app.metadata.figma">Figma</Tag>
                <Tag color="pink" v-if="app.metadata.figjam">FigJam</Tag>
                <Tag color="yellow" v-if="app.metadata.ios">iOS </Tag>
                <Tag color="purple" v-if="app.metadata.macos">macOS </Tag>
              </div>
              <compass-icon
                v-if="app.metadata.website"
                class="text-neutral-700 dark:text-neutral-300"
                size="1x"
              ></compass-icon>
              <download-icon
                v-if="app.metadata.download"
                class="text-neutral-700 dark:text-neutral-300"
                size="1x"
              ></download-icon>
            </div>
            <h4
              class="text-sm font-bold text-neutral-900 dark:text-neutral-100"
            >
              {{ app.title }}
            </h4>
            <p
              class="mb-0 text-sm font-normal text-neutral-500 dark:text-neutral-400"
            >
              {{ app.metadata.subtitle }}
            </p>
          </div>
        </div>
      </header>
    </a>
  </div>
  <div v-else>
    <nuxt-link :to="app.metadata.to" rel="noreferrer" cursor="pointer">
      <button
        class="w-full rounded-md bg-neutral-50 text-left transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white dark:bg-neutral-900 dark:hover:bg-neutral-800"
      >
        <div class="p-4">
          <header class="flex justify-between">
            <div class="flex w-full">
              <div class="mr-4 sm:w-1/3">
                <img
                  :src="app.metadata.cover.imgix_url"
                  class="hidden max-h-32 rounded md:block"
                  alt="Image of media"
                />
                <img
                  :src="app.metadata.mobile_image.imgix_url"
                  class="block max-h-32 rounded md:hidden"
                  alt="Image of media"
                />
              </div>
              <div class="flex w-full flex-col justify-start">
                <div class="mb-4 flex items-center justify-between">
                  <div class="flex space-x-2">
                    <Tag color="blue" v-if="app.metadata.figma">Figma</Tag>
                    <Tag color="pink" v-if="app.metadata.figjam">FigJam</Tag>
                    <Tag color="yellow" v-if="app.metadata.ios">iOS </Tag>
                    <Tag color="purple" v-if="app.metadata.macos">macOS </Tag>
                  </div>
                  <arrow-right-icon
                    v-if="app.metadata.internal"
                    class="text-neutral-700 dark:text-neutral-300"
                    size="1x"
                  ></arrow-right-icon>
                </div>
                <h4
                  class="text-sm font-bold text-neutral-900 dark:text-neutral-100"
                >
                  {{ app.title }}
                </h4>
                <p
                  class="mb-0 text-sm font-normal text-neutral-500 dark:text-neutral-400"
                >
                  {{ app.metadata.subtitle }}
                </p>
              </div>
            </div>
          </header>
        </div>
      </button>
    </nuxt-link>
  </div>
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
    app: {
      type: Object,
      default: () => {
        'No posts are loaded'
      },
    },
  },
}
</script>
