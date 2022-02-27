<template>
  <div
    class="w-full cursor-pointer rounded-3xl bg-neutral-50 text-left transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow-lg dark:bg-neutral-900 dark:hover:bg-neutral-800"
  >
    <nuxt-link
      :to="{
        path: '/projects/' + portfolio.slug,
        query: { id: portfolio.id },
      }"
      rel="noreferrer"
      class="no-underline"
    >
      <div>
        <header class="flex justify-between">
          <img
            :src="portfolio.metadata.hero.imgix_url"
            class="h-full w-full rounded-tl-3xl rounded-tr-3xl rounded-bl-none rounded-br-none"
            alt="Image of media"
          />
        </header>
        <div class="p-4">
          <div class="flex w-full items-start justify-between">
            <h4
              class="text-md font-bold text-neutral-900 dark:text-neutral-100"
            >
              {{ portfolio.title }}
            </h4>
            <arrow-right-icon
              class="text-neutral-700 dark:text-neutral-300 mt-1" size="1x"
            ></arrow-right-icon>
          </div>
          <p
            class="mb-0 pt-1 text-sm font-normal text-neutral-500 dark:text-neutral-400"
          >
            {{ portfolio.metadata.description }}
          </p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  name: "Portfolio",
  components: {
    ArrowRightIcon,
  },
  props: {
    portfolio: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
