<template>
  <section v-html="about.content" class="text-black dark:text-neutral-300" />
</template>

<script>
export default {
  name: "AboutBody",
  props: {
    about: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
