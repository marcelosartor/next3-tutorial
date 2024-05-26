// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{path:'~/shared/icons', prefix: 'Icon'},'~/components'],
  alias: {
    css: '/<rootDir>/assets/css'
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "@nuxtjs/i18n",
    "@nuxt/ui"
  ],
  i18n:{
    vueI18n: './i18n'
  },
  pinia: {
    storesDirs: ['./stores/**', ],
  },
  app:{
    pageTransition: { name: 'page', mode: 'default'},
    layoutTransition: { name: 'layout', mode: 'default'},
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Meu site'
    }

  }

})