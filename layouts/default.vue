<template>
  <div class="pb-16 h-full w-full">
    <div>
      <Nuxt />
    </div>
    <div class="w-full flex justify-center items-center pt-16 px-4">
      <p
        class="w-full md:w-2/3 lg:w-1/3 text-center p-4 bg-neutral-50 dark:bg-neutral-900 rounded-3xl text-black dark:text-white"
      >
        This site, and all of my work, is dedicated to my hero, my inspiration,
        and the strongest man I've ever known. My father. I love you Dad ❤️.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: "bg-white dark:bg-black",
      },
    };
  },
};
</script>
