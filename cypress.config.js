const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://testclaro.azurewebsites.net",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
