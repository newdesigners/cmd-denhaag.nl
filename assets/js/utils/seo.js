export const createSEOMeta = (data) => [
  { hid: 'description', name: 'description', content: data.description },
  { hid: 'og:title', 
    property: 'og:title',
    content: data.title
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content: data.description,
  },
  { hid: 'og:image',
    property: 'og:image',
    content: data.image
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: process.env.HOST_NAME + '/' + data.url,
  },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary',
  },
  {
    hid: 'twitter:title',
    name: 'twitter:title',
    content: data.title,
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: data.description,
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: data.image,
  },
]