<template>
  <div
    class="w-full cursor-pointer rounded-3xl bg-neutral-50 p-4 text-left transition duration-300 ease-in-out hover:bg-neutral-50 hover:shadow-lg dark:bg-neutral-900 dark:hover:bg-neutral-800"
  >
    <a
      :href="album.metadata.url"
      target="`_blank"
      rel="noreferrer"
      class="no-underline"
    >
      <div
        class="divide-y divide-solid divide-neutral-300 dark:divide-neutral-800"
      >
        <header class="mb-4 flex justify-between">
          <img
            :src="album.metadata.cover.imgix_url"
            class="max-h-24 rounded-md"
            alt="Image of album"
          />
          <music-icon
            class="text-neutral-700 dark:text-neutral-300"
          ></music-icon>
        </header>
        <h4
          class="pt-4 text-sm font-bold text-neutral-900 dark:text-neutral-100"
        >
          {{ album.title }}
        </h4>
      </div>
      <p
        class="mb-0 pt-1 text-sm font-normal text-neutral-500 dark:text-neutral-400"
      >
        {{ album.metadata.subtitle }}
      </p>
    </a>
  </div>
</template>

<script>
import { MusicIcon } from "vue-feather-icons";

export default {
  name: "Media",
  components: {
    MusicIcon,
  },
  props: {
    album: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
