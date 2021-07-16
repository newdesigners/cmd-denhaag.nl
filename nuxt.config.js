import axios from 'axios';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cmd-denhaag.nl',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['vue-slick-carousel/dist/vue-slick-carousel.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-tasty-burgers.js', mode: 'client' },
    { src: '~/plugins/composition-api.js' },
    { src: '~/plugins/storyblok-rich-text-renderer.js'},
    { src: '~/plugins/vue-slick-carousel.js' },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_SPACE_TOKEN,
        cacheProvider: 'memory'
      }
    ],
  ],
  privateRuntimeConfig: {
    storyBlokSpaceToken: process.env.STORYBLOK_SPACE_TOKEN,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: { plugins: { 'postcss-nested': {} } }
  },
  generate: {
    fallback: true,
    routes: function (callback) {
      const token = process.env.STORYBLOK_SPACE_TOKEN;
      const version = process.env.NODE_ENV !== 'production' ? 'draft' : 'published';

      let cache_version = 0;  
      let toIgnore = [
        'home',
        'en/settings',
        'uxd/home',
        'footer',
        'uxd/footer'
      ];
      
       // other routes that are not in Storyblok with their slug.
      let routes = ['/']; // adds / directly
   
       // Load space and receive latest cache version key to improve performance
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {
   
         // timestamp of latest publish
        cache_version = space_res.data.space.version;
   
         // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (!toIgnore.includes(res.data.links[key].slug)) {
              routes.push('/' + res.data.links[key].slug);
            }
          })
   
          callback(null, routes);
        })
      }) 
    }
  },
}
