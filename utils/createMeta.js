export const createMeta = ({ title, description, imageUrl, url }) => {
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
				hid: 'twitter:site',
				name: 'twitter:site',
				content: '@_kejk',
			},
			{
				hid: 'twitter:card',
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
