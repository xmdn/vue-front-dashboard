//publicPath is set as vue-crypto-dashboard for production you can change it according to your application
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue-select-3': path.resolve(__dirname, '/node_modules/vue-select-3')
      }
    }
  },
  css: {
    loaderOptions: {
      // sass: {
      //   additionalData: `@import "~bootstrap/scss/bootstrap";`
      // }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-crypto-dashboard/' : '/' ,
  filenameHashing: false
};