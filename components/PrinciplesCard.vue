<template>
  <div
    class="w-full p-4 bg-neutral-50 dark:bg-neutral-900 hover:shadow-md rounded-3xl"
  >
    <header class="flex items-top justify-start">
      <h3 class="text-black dark:text-white text-lg pt-0 mb-0 font-bold w-full">
        {{ principle.title }}
      </h3>
    </header>
    <!-- <p
      class="text-neutral-700 dark:text-neutral-300 pt-2 pb-4 font-medium mb-0 text-base"
      v-html="principle.content"
    ></p> -->
  </div>
</template>

<script>
export default {
  name: "Principle",
  props: {
    principle: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
