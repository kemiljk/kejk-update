<template>
  <div class="group w-full text-left" v-if="blog.metadata">
    <NuxtLink
      :to="`/thoughts/${blog.slug}`"
      class="cursor-pointer no-underline"
    >
      <header class="items-top flex justify-between pt-4 pb-2">
        <h3
          class="mb-0 w-full pt-0 text-lg font-bold text-black group-hover:underline group-hover:decoration-indigo-500 group-hover:decoration-2 group-hover:underline-offset-4 dark:text-white"
        >
          {{ blog.title }}
        </h3>
        <arrow-right-icon
          class="mt-2 shrink-0 text-neutral-700 dark:text-neutral-300"
          size="1x"
        ></arrow-right-icon>
      </header>
      <div class="flex items-center justify-start space-x-2 pt-2">
        <Tag color="indigo">
          {{ blog.metadata.tag }}
        </Tag>
        <p
          class="mb-0 py-0 font-mono text-sm text-neutral-500 dark:text-neutral-400"
        >
          Updated {{ blog.modified_at | moment("from", "now") }}
        </p>
      </div>
      <p class="pt-4 font-normal text-neutral-700 dark:text-neutral-300">
        {{ blog.metadata.snippet }}
      </p>
    </NuxtLink>
  </div>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  name: "Blog",
  components: {
    ArrowRightIcon,
  },
  props: {
    blog: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
