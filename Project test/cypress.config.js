const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  
  e2e: {
    baseUrl: 'https://frx-wl-one.slashash.dev'
  },
  // env : {
  //   url : 'https://frx-wl-one.slashash.dev',
  // },
})