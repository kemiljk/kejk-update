<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/thoughts" isActive id="THOUGHTS" v-scroll-to="'#THOUGHTS'">
        Thoughts
      </NavItem>
      <NavItem to="/creations">Creations</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem href="https://bookmarks.kejk.tech" extLink>
        <span class="flex items-center">
          Bookmarks
          <arrow-up-right-icon
            size="1x"
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></arrow-up-right-icon>
        </span>
      </NavItem>
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="mx-auto max-w-3xl px-4">
      <Header class="pt-24 text-left md:text-center">/thoughts</Header>
      <Subheader class="text-left md:text-center">
        <template #text>
          Thoughts about design, development and the intersection of the two.
        </template>
      </Subheader>
      <SubscribeCard />
    </div>
    <div class="mx-auto max-w-5xl px-4">
      <div
        class="scrollbar-hidden mt-8 flex w-full items-center space-x-2 overflow-x-auto bg-transparent py-4"
      >
        <button
          v-for="tab in tabs"
          :key="tab"
          @click=";(selected = tab), (active = true)"
          class="flex w-max items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 font-normal text-neutral-900 no-underline transition duration-200 ease-in-out dark:border-neutral-800 dark:bg-neutral-900 dark:text-white md:block md:hover:bg-neutral-200 md:hover:text-black md:dark:hover:bg-neutral-800 md:dark:hover:text-white"
          :class="[
            {
              'border border-transparent bg-neutral-300 text-neutral-900 dark:border-transparent dark:bg-neutral-700 dark:text-white md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700':
                selected === tab,
            },
          ]"
        >
          {{ tab }}
        </button>
      </div>
      <component :is="selected" class="mt-8"></component>
      <LayoutDivider />
      <H2Header id="GET_IN_TOUCH">How to reach me</H2Header>
      <GetInTouch />
    </div>
  </div>
</template>

<script>
import { ArrowUpRightIcon } from 'vue-feather-icons'
import { createMeta } from '~/utils/createMeta.js'
import All from '../../components/Tabs/All'
import Design from '../../components/Tabs/Design'
import Development from '../../components/Tabs/Development'
import Opinion from '../../components/Tabs/Opinion'
import Journal from '../../components/Tabs/Journal'
import Links from '../../components/Tabs/External'

export default {
  components: {
    All,
    Design,
    Development,
    Opinion,
    Journal,
    Links,
    ArrowUpRightIcon,
  },
  head() {
    return createMeta({
      title: 'Thoughts | KEJK',
      description:
        'Thoughts on Design and Development from here and around the web.',
      imageUrl:
        'https://imgix.cosmicjs.com/0321b940-98bf-11ec-8bb7-91577e4f4933-meta.png?1',
      url: 'https://kejk.tech/thoughts',
      link: [{ rel: 'canonical', href: 'https://kejk.tech/thoughts' }],
    })
  },
  blogs() {
    let blogs = this.$store.getters.getBlog
    let blogList = []

    blogs.forEach(function (blog) {
      blogList.push(blog)
    })
    return { blogList: blogList }
  },
  data() {
    return {
      active: false,
      loading: false,
      tabs: ['All', 'Design', 'Development', 'Opinion', 'Journal', 'Links'],
      selected: 'All',
    }
  },
}
</script>
