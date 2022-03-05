<template>
  <li class="m-0 flex w-full items-center justify-end sm:space-x-4">
    <div v-if="extLink">
      <a
        :href="`${href}`"
        target="_blank"
        class="flex w-max items-center justify-center rounded-full border border-neutral-300 bg-neutral-200 px-4 py-2 font-normal text-neutral-900 no-underline transition duration-200 ease-in-out dark:border-neutral-700 dark:bg-neutral-800 dark:text-white md:block md:hover:bg-neutral-200 md:hover:text-black md:dark:hover:bg-neutral-800 md:dark:hover:text-white"
      >
        <slot />
      </a>
    </div>
    <div v-else>
      <NuxtLink
        :to="`${to}`"
        class="flex w-max items-center justify-center rounded-full border border-neutral-300 bg-neutral-200 px-4 py-2 font-normal text-neutral-900 no-underline transition duration-200 ease-in-out dark:border-neutral-700 dark:bg-neutral-800 dark:text-white md:block md:hover:bg-neutral-200 md:hover:text-black md:dark:hover:bg-neutral-800 md:dark:hover:text-white"
        :class="[
          {
            'border-2 border-teal-500 bg-neutral-300 text-neutral-900 dark:border-teal-500 dark:bg-neutral-700 dark:text-white md:hover:bg-neutral-400 md:dark:hover:bg-neutral-600':
              isActive,
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
}
</script>
