const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '^/IFE': {
        target: 'http://localhost:3000'
      },
      '^/loginAPI': {
        target: 'http://localhost:3000'
      }
    }
  }
}