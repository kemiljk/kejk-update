<template>
  <li class="flex w-full items-center justify-end sm:space-x-4 m-0">
    <div v-if="extLink">
      <a
        :href="`${href}`"
        target="_blank"
        class="w-max flex items-center justify-center font-normal md:block px-4 py-2 text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 md:hover:bg-neutral-200 md:hover:text-black md:dark:hover:text-white md:dark:hover:bg-neutral-800 rounded-full transition ease-in-out duration-200 no-underline"
        :class="[
          {
            'text-neutral-900 dark:text-white bg-neutral-300 dark:bg-neutral-700 border border-transparent dark:border-transparent md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700': isActive,
          },
        ]"
      >
        <slot />
      </a>
    </div>
    <div v-else>
      <NuxtLink
        :to="`${to}`"
        class="w-max flex items-center justify-center font-normal md:block px-4 py-2 text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 md:hover:bg-neutral-200 md:hover:text-black md:dark:hover:text-white md:dark:hover:bg-neutral-800 rounded-full transition ease-in-out duration-200 no-underline"
        :class="[
          {
            'text-neutral-900 dark:text-white bg-neutral-300 dark:bg-neutral-700 border border-transparent dark:border-transparent md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700': isActive,
          },
        ]"
      >
        <slot />
      </NuxtLink>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
    },
    href: {
      type: String,
      required: false,
    },
    isActive: Boolean,
    extLink: Boolean,
  },
};
</script>
