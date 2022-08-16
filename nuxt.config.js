export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MemorMe',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MemorMe is an app that guides you through the process of digitally saving your memories so that you’ll never forget those meaningful moments.' },
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/MemorMeLogoSVG.svg',}, {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap'}],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/normalize.css', '@/assets/css/skeleton.css','@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-agile', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    ['@nuxtjs/google-fonts', {
      Roboto: [100,400, 500]
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBuXiyaKuk8A_THZS2v6VwE9ZqED_CzsjM',
          authDomain: 'memorme-web.firebaseapp.com',
          projectId: 'memorme-web',
          storageBucket: 'memorme-web.appspot.com',
          messagingSenderId: '31769250229',
          appId: '1:31769250229:web:99a1373d92e6b4f95431fc',
          measurementId: 'G-WLYBXBV3SD'
        },
        services: {
          analytics: true
        }
      }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    dir: 'docs'
  }
}
