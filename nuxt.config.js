const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Darrius Wright - Software Engineer Extraordinaire',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Slabo+27px' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/main.scss',
    '@/node_modules/hover.css/css/hover-min.css',
    '@/node_modules/animate.css/animate.min.css',
    // '@/node_modules/mini.css/dist/mini-default.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/aos" },
    { src: "~/plugins/font-awesome" },
    { src: "~/plugins/scrollto" },
    // { src: "~/plugins/waypoint" }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // extend
      }
    }
  }
}
