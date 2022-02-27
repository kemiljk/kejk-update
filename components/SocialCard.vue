<template>
  <a :href="social.href" target="_blank" rel="noreferrer" class="no-underline">
    <button
      class="flex items-center justify-center p-4 bg-neutral-50 dark:bg-neutral-900 hover:shadow-md rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition ease-in-out duration-300 w-full focus:outline-none focus:ring-2 focus:ring-white"
    >
      <twitter-icon
        v-if="social.twitter"
        size="1x"
        class="text-blue-400"
      ></twitter-icon>
      <linkedin-icon
        v-if="social.linkedin"
        size="1x"
        class="text-blue-600 dark:text-blue-500"
      ></linkedin-icon>
      <figma-icon
        v-if="social.figma"
        size="1x"
        class="text-green-600 dark:text-green-400"
      ></figma-icon>
      <github-icon
        v-if="social.github"
        size="1x"
        class="dark:text-white text-black"
      ></github-icon>
      <dribbble-icon
        v-if="social.dribbble"
        size="1x"
        class="text-pink-400"
      ></dribbble-icon>
      <coffee-icon
        v-if="social.coffee"
        size="1x"
        class="text-red-600"
      ></coffee-icon>
      <span
        class="ml-2 text-md text-neutral-900 dark:text-neutral-50 font-medium text-xs"
      >
        {{ social.title }}
      </span>
    </button>
  </a>
</template>

<script>
import {
  FigmaIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  DribbbleIcon,
  CoffeeIcon,
} from "vue-feather-icons";

export default {
  name: "Social",
  components: {
    FigmaIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    DribbbleIcon,
    CoffeeIcon,
  },
  props: {
    social: {
      type: Object,
      default: () => {
        "No posts are loaded";
      },
    },
  },
};
</script>
