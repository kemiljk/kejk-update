<template>
  <div
    v-if="plugin.title"
    class="max-w-5/6 w-full cursor-pointer rounded-3xl bg-neutral-50 p-4 text-left transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow-lg dark:bg-neutral-900 dark:hover:bg-neutral-800"
  >
    <a
      :href="plugin.metadata.url"
      target="`_blank"
      rel="noreferrer"
      class="no-underline"
    >
      <header class="flex justify-between">
        <div class="flex w-full">
          <img
            :src="plugin.metadata.hero.imgix_url"
            class="mr-4 max-h-32 rounded-md border border-neutral-300 dark:border-none sm:max-h-28"
            alt="Image of media"
          />
          <div class="flex w-full flex-col justify-between">
            <div class="mb-4 flex items-center justify-between">
              <Tag color="pink">Figma</Tag>
              <arrow-up-right-icon
                class="text-neutral-700 dark:text-neutral-300"
                size="1x"
              ></arrow-up-right-icon>
            </div>
            <h4
              class="text-sm font-bold text-neutral-900 dark:text-neutral-100"
            >
              {{ plugin.title }}
            </h4>
            <p
              class="mb-0 text-sm font-normal text-neutral-500 dark:text-neutral-400"
            >
              {{ plugin.metadata.subtitle }}
            </p>
          </div>
        </div>
      </header>
    </a>
  </div>
</template>

<script>
import { ArrowUpRightIcon } from "vue-feather-icons";

export default {
  name: "PluginCard",
  components: {
    ArrowUpRightIcon,
  },
  props: {
    plugin: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
