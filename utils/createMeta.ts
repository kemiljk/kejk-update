// const type = 'website'
// const url = 'https://kejk.tech'
// const title = 'Karl Emil James Koch'
// const description =
//   'Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.'
// const mainImage =
//   'https://imgix.cosmicjs.com/0321b940-98bf-11ec-8bb7-91577e4f4933-meta.png'
// const twitterSite = '@_kejk'
// const twitterCard = 'summary_large_image'

export const createMeta = ({
  title,
  description,
  imageUrl,
  url,
}: {
  title: string
  description: string
  imageUrl: string
  url: string
}) => {
  const metaObj = {
    meta: [
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: url,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: imageUrl,
      },
      {
        name: 'twitter:site',
        content: '@_kejk',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: url,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: imageUrl,
      },
    ],
  }
  return metaObj
}
