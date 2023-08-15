export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BASE_URL: 'http://localhost:8000'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/tailwind.css'],
})