// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{path:'~/shared/icons', prefix: 'Icon'},'~/components'],
  alias: {
    css: '/<rootDir>/assets/css'
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', "@nuxtjs/i18n",],
  i18n:{
    vueI18n: './i18n'
  },
    /*
    vueI18n:{
      fallbackLocale: 'en',
      messages:{
        en: {
          greeting: 'Hello world'
        },
        es: {
          greeting: 'Hola mundo'
        }
      }
    }
    */

  pinia: {
    storesDirs: ['./stores/**', ],
  },
  
  //app:{
  //  baseURL: process.env.BASE_URL || 'http://localhost:3000',
  //}

})