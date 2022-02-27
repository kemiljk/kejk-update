<template>
  <section v-html="uses.content" class="text-black dark:text-neutral-300" />
</template>

<script>
export default {
  name: "Uses",
  props: {
    uses: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
