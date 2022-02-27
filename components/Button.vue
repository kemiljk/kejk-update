<template>
  <button
    class="ease flex w-full items-center justify-center rounded-lg px-6 py-3 text-center font-medium no-underline transition duration-500"
    :class="colorClasses"
  >
    <slot name="icon" />
    <slot name="label" />
  </button>
</template>

<script>
export default {
  props: ["color"],
  computed: {
    colorClasses() {
      return {
        red: "text-red-50 bg-red-500 hover:bg-red-600",
        blue: "bg-blue-500 text-white hover:bg-blue-600",
        purple: "bg-purple-900 hover:bg-purple-700 text-purple-100",
        indigo: "text-indigo-50 bg-indigo-600 hover:bg-indigo-700",
        grey: "bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-400 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white",
        white:
          "bg-black hover:bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 dark:hover:bg-neutral-100",
      }[this.color];
    },
  },
};
</script>
