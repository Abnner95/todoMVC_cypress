const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env = process.env;
      return config
      
      // implement node event listeners here
    },
    baseUrl: 'https://todomvc.com/examples/react/dist/'
  },
  nodePolyfills: true
});
