import icons from './utility/icons'
import fa from './utility/i18n/fa.json'
import en from './utility/i18n/en.json'

export default {
  // ssr: true,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'simple-ebook-reader',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/i18n.ts', '~/plugins/veeValidate.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/layouts/', prefix: 'layout' },
    { path: '~/components/home/', prefix: 'home' },
    { path: '~/components/ebook/', prefix: 'ebook' },
    { path: '~/components/global/', prefix: 'global' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: icons,
      },
      {
        component: 'fab',
        imports: icons,
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  i18n: {
    locales: [
      { name: 'Farsi', code: 'fa', direction: 'rtl' },
      { name: 'English', code: 'en', direction: 'ltr' },
    ],
    baseUrl: '',
    defaultLocale: 'fa',
    vueI18n: {
      fallbackLocale: 'fa',
      messages: {
        fa: fa.messages,
        en: en.messages,
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
  // Tailwind configs
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },
}
