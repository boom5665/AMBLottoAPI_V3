export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AMBLottoAPI_V3',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        // type: 'module',
        // src: 'https://unpkg.com/dev-widget@1.0.3/dist/card.component.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss', '~/assets/css/style.min.css', '~/assets/css/ocean.min.css','bootstrap/dist/css/bootstrap.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'bootstrap-vue/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    "@nuxtjs/axios",
    // 'vue-clipboard2/nuxt',
  ],

  axios: {
    // Axios configuration here (optional)
    // Example: baseURL: 'https://api.example.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
