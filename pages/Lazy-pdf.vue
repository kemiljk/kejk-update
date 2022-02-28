<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
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
    <div class="mx-auto px-4">
      <div class="container mx-auto max-w-5xl pt-10 pb-2">
        <div class="flex flex-row pt-16 pb-8">
          <BackLink link="home"> Back home </BackLink>
        </div>
        <Header class="pt-4 text-left md:text-center">/lazy-pdf</Header>
        <Subheader class="text-left md:text-center">
          <template #text>
            Effortless and interfaceless PDF creation.
            <div class="flex items-center justify-center space-x-2 pt-4">
              <Tag v-if="total.metadata != undefined" color="green">
                <a
                  :href="`${download.url}`"
                  class="text-green-700 no-underline dark:text-green-200"
                  data-analytics='"Downloaded Lazy PDF"'
                  @click="total.metadata.downloads += 1"
                  @updateDownloads="updateDownloads"
                >
                  <download-icon
                    size="1x"
                    class="mr-1 inline-block text-green-700 dark:text-green-200"
                  />
                  <span id="downloads" class="hidden">{{
                    total.metadata.downloads
                  }}</span>
                  {{ kFormatter(total.metadata.downloads).toString() }}
                </a>
              </Tag>
              <Tag v-if="total.metadata != undefined" color="red">
                <button @click="updateLikes()">
                  <heart-icon
                    size="1x"
                    class="mr-1 inline-block text-red-700 dark:text-red-200"
                  />
                  <span id="likes" class="hidden">{{
                    total.metadata.likes
                  }}</span>
                  {{ kFormatter(total.metadata.likes).toString() }}
                </button>
              </Tag>
            </div>
          </template>
        </Subheader>
        <div>
          <img
            :src="`${hero}`"
            class="mt-10"
            alt="image of Lazy PDF app in use"
          />
        </div>
        <div class="py-4">
          <div>
            <div class="flex w-full items-center justify-between">
              <div class="w-full">
                <div class="mt-8 mb-8 space-y-4">
                  <h3
                    class="text-3xl font-bold text-neutral-900 dark:text-neutral-50"
                  >
                    Simple and invisible
                  </h3>
                  <p class="text-2xl text-neutral-700 dark:text-neutral-400">
                    Effortlessly create a PDF from a set of selected images
                    through an interfaceless system with only the Finder
                    selection UI.
                  </p>
                </div>
                <div
                  class="flex flex-col items-center justify-center md:flex-row md:justify-start"
                >
                  <a
                    :href="`${download.url}`"
                    class="no-underline"
                    data-analytics='"Downloaded Lazy PDF"'
                    @click="total.metadata.downloads += 1"
                  >
                    <ButtonLazy
                      color="purple"
                      @updateDownloads="updateDownloads"
                    >
                      <template #icon>
                        <download-icon
                          size="1x"
                          class="mr-2 inline-block text-purple-100"
                        />
                      </template>
                      <template #label> Download </template>
                    </ButtonLazy>
                  </a>
                </div>
              </div>
              <div
                class="flex hidden w-full items-center justify-center md:flex"
              >
                <img
                  :src="`${appIcon}`"
                  class="max-h-[10rem] w-auto rounded-[2.5rem]"
                  alt="image of Lazy PDF app icon"
                />
              </div>
            </div>
            <LayoutDivider />
            <div class="mb-8 w-full space-y-4">
              <h3
                class="text-3xl font-bold text-neutral-900 dark:text-neutral-50"
              >
                Grab and go
              </h3>
              <p class="pb-8 text-2xl text-neutral-700 dark:text-neutral-400">
                Lazy PDF is deliberately designed to be simple and have a low
                overhead, to make it easier to grab a set of design files and
                throw them together into a PDF.
              </p>
              <img
                class="dark:ring-2 dark:ring-neutral-800"
                src="https://res.cloudinary.com/kejk/image/upload/v1585993877/Picking_selection_ckdioy.png"
              />
            </div>
            <LayoutDivider />
            <div class="mb-8 space-y-4">
              <h3
                class="text-3xl font-bold text-neutral-900 dark:text-neutral-50"
              >
                On your terms
              </h3>
              <p class="pb-8 text-2xl text-neutral-700 dark:text-neutral-400">
                Your logical file order is always respected, so number your
                files if you want to order in sequence, otherwise, move them
                around afterwards in any PDF viewer.
              </p>
              <img
                class="dark:ring-2 dark:ring-neutral-800"
                src="https://res.cloudinary.com/kejk/image/upload/v1587570775/Frame_10_zub1ud.png"
              />
            </div>
            <LayoutDivider />
            <div class="mb-8 space-y-4">
              <h3
                class="text-3xl font-bold text-neutral-900 dark:text-neutral-50"
              >
                Lossless
              </h3>
              <p class="pb-8 text-2xl text-neutral-700 dark:text-neutral-400">
                Respecting your image sizes, Lazy PDF doesn't try to compress
                everything to printable sizes, ideal for sharing work with
                teammates and management.
              </p>
              <img
                class="dark:ring-2 dark:ring-neutral-800"
                src="https://res.cloudinary.com/kejk/image/upload/v1585993878/Rendered_PDF_zpdrza.png"
              />
            </div>
            <LayoutDivider />
            <div class="mb-8 space-y-4">
              <h3
                class="text-3xl font-bold text-neutral-900 dark:text-neutral-50"
              >
                Better than native
              </h3>
              <p class="pb-8 text-2xl text-neutral-700 dark:text-neutral-400">
                macOS' native 1-click PDF creation (left) pushes all files into
                a printable page collection, Lazy PDF (right) leaves your images
                alone. Perfect for long design files such as mobile layouts, or
                ultrawide files when visualising a 21:9 video concept.
              </p>
              <img
                class="dark:ring-2 dark:ring-neutral-800"
                src="https://res.cloudinary.com/kejk/image/upload/v1586353512/Apple_versus_Lazy_mhp5ey.png"
              />
            </div>
          </div>
        </div>
        <div
          class="mt-4 flex flex-col items-center justify-center md:flex-row md:justify-start"
        >
          <a
            :href="`${download.url}`"
            class="no-underline"
            data-analytics='"Downloaded Lazy PDF"'
            @click="total.metadata.downloads += 1"
          >
            <ButtonLazy color="purple" @updateDownloads="updateDownloads">
              <template #icon>
                <download-icon
                  size="1x"
                  class="mr-2 inline-block text-purple-100"
                />
              </template>
              <template #label> Download </template>
            </ButtonLazy>
          </a>
        </div>
        <LayoutDivider />
        <H2Header id="GET_IN_TOUCH">How to reach me</H2Header>
        <GetInTouch />
      </div>
    </div>
  </div>
</template>

<script>
import { createMeta } from '~/utils/createMeta'
import { DownloadIcon, ArrowUpRightIcon, HeartIcon } from 'vue-feather-icons'

const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: process.env.NUXT_ENV_COSMIC_SLUG,
  read_key: process.env.NUXT_ENV_COSMIC_READ_KEY,
  write_key: process.env.NUXT_ENV_COSMIC_WRITE_KEY,
})

export default {
  name: 'Lazy-PDF',
  components: {
    DownloadIcon,
    ArrowUpRightIcon,
    HeartIcon,
  },
  computed: {
    meta() {
      const metaData = {
        title: 'Lazy PDF | KEJK',
        description: 'Effortless and interfaceless PDF creation.',
        url: 'https://kejk.tech/lazy-pdf',
        mainImage:
          'https://imgix.cosmicjs.com/0321b940-98bf-11ec-8bb7-91577e4f4933-meta.png',
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: 'Lazy PDF | KEJK',
      meta: [...this.meta],
      link: [{ rel: 'canonical', href: 'https://kejk.tech/lazy-pdf' }],
    }
  },
  created() {
    this.getDownloadData()
  },
  data() {
    return {
      total: {},
      download: {
        url: 'https://cdn.cosmicjs.com/27efc530-9722-11ec-8bb7-91577e4f4933-Lazy-PDF.zip',
      },
      hero: 'https://imgix.cosmicjs.com/d2653530-77ca-11ec-bfef-718573fe8f91-mockuuups-black-macbook-mockup-on-a-white-table-with-black-textbooks-at-the-side.jpeg',
      appIcon:
        'https://imgix.cosmicjs.com/3ea60e30-866d-11ec-8e12-4f611a7927fa-icon-2.png',
    }
  },
  methods: {
    async getDownloadData() {
      this.loading = true
      await bucket
        .getObject({
          id: '621a66dd1d55060009f64781',
          props: 'id,title,metadata',
        })
        .then((data) => {
          this.total = data.object
          this.loading = false
        })
    },
    updateDownloads() {
      const downloads = document.getElementById('downloads').innerText
      const params = {
        id: `621a66dd1d55060009f64781`,
        key: `downloads`,
        value: Number(downloads) + 1,
      }
      bucket
        .editObjectMetafield(params)
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
        .then(() => {
          this.getDownloadData()
        })
    },
    updateLikes() {
      const likes = document.getElementById('likes').innerText
      const params = {
        id: `621a66dd1d55060009f64781`,
        key: `likes`,
        value: Number(likes) + 1,
      }
      bucket
        .editObjectMetafield(params)
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
        .then(() => {
          this.getDownloadData()
        })
    },
    kFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
        : Math.sign(num) * Math.abs(num)
    },
  },
}
</script>
